import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

/**
 * One-off content patch — Project 2 (Cover Story VM) Page 5.
 *   • page5SkillsAndPrinciples.subheadline → "Application & Key Learnings"
 *   • ui.projectVM.p5SkillsHeader          → "SKILLS APPLIED"
 *   • ui.projectVM.p5LearnedTitle          → "KEY LEARNINGS"
 *   • quoteBanner image asset              → new final-installation photo
 *     (dimensions matched to the previous 960×1246 asset)
 *
 *   npx tsx scratch/patch-p2-page5.ts --dry
 *   npx tsx scratch/patch-p2-page5.ts
 */
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });

import fs from 'node:fs';

const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN;
const DRY = process.argv.includes('--dry');

if (!projectId || !token) {
  console.error('Missing credentials. Set VITE_SANITY_PROJECT_ID and SANITY_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false });

const IMAGE_PATH = 'public/portfolio-assets/project-2/page5-image.jpeg';

async function main() {
  const vmDoc = await client.fetch<Record<string, any> | null>(
    `*[_type=='projectVM'][0]{_id, "sub": page5SkillsAndPrinciples.subheadline}`,
  );
  if (!vmDoc?._id) {
    console.error('projectVM document not found — aborting.');
    process.exit(1);
  }
  console.log('Current subheadline:', JSON.stringify(vmDoc.sub));

  const uiDoc = await client.fetch<Record<string, any> | null>(
    `*[_type=='ui'][0]{_id, "skills": projectVM.p5SkillsHeader, "learned": projectVM.p5LearnedTitle}`,
  );
  if (!uiDoc?._id) {
    console.error('ui document not found — aborting.');
    process.exit(1);
  }
  console.log('Current ui:', JSON.stringify({ skills: uiDoc.skills, learned: uiDoc.learned }));

  let imageAssetId: string | null = null;
  if (!DRY) {
    const asset = await client.assets.upload('image', fs.createReadStream(IMAGE_PATH), {
      filename: 'page5-image.jpeg',
    });
    imageAssetId = asset._id;
    console.log('Uploaded image asset:', imageAssetId);
  } else {
    console.log(`  [dry] would upload ${IMAGE_PATH}`);
  }

  const vmEntries: Record<string, unknown> = {
    'page5SkillsAndPrinciples.subheadline': 'Application & Key Learnings',
  };
  if (imageAssetId) {
    vmEntries['page5SkillsAndPrinciples.quoteBanner.image'] = {
      _type: 'image',
      asset: { _type: 'reference', _ref: imageAssetId },
    };
  }
  const uiEntries: Record<string, unknown> = {
    'projectVM.p5SkillsHeader': 'SKILLS APPLIED',
    'projectVM.p5LearnedTitle': 'KEY LEARNINGS',
  };

  for (const [path, value] of Object.entries(vmEntries)) console.log(`  projectVM: set ${path} -> ${JSON.stringify(value).slice(0, 120)}`);
  for (const [path, value] of Object.entries(uiEntries)) console.log(`  ui: set ${path} -> ${value}`);

  if (DRY) {
    console.log('\nDry run — nothing written.');
    return;
  }

  await client.patch(vmDoc._id).set(vmEntries).commit();
  await client.patch(uiDoc._id).set(uiEntries).commit();
  console.log('\nPatched projectVM + ui.');

  const after = await client.fetch(
    `{
      "sub": *[_type=='projectVM'][0].page5SkillsAndPrinciples.subheadline,
      "img": *[_type=='projectVM'][0].page5SkillsAndPrinciples.quoteBanner.image.asset._ref,
      "uiSkills": *[_type=='ui'][0].projectVM.p5SkillsHeader,
      "uiLearned": *[_type=='ui'][0].projectVM.p5LearnedTitle
    }`,
  );
  console.log(JSON.stringify(after, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
