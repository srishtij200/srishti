import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import fs from 'node:fs';

/**
 * One-off content patch — Project 3 (Athera) Page 2.
 *   • Q2 lead (after THE JOURNEY heading) → "" (remove marked arrow line)
 *   • Q3 title → "AREAS OF INVESTIGATION"
 *   • Q3 flow "Fabric & functionality" → isHighlight false (drop OPPORTUNITY GAP badge)
 *   • Q4 title → "PROJECT APPROACH"
 *   • Q1 observation images → new local JPEGs uploaded as Sanity assets
 *
 *   npx tsx scratch/patch-p3-page2.ts --dry
 *   npx tsx scratch/patch-p3-page2.ts
 */
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });

const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN;
const DRY = process.argv.includes('--dry');

if (!projectId || !token) {
  console.error('Missing credentials. Set VITE_SANITY_PROJECT_ID and SANITY_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false });

const IMAGES: { path: string; filename: string; quadrantNumber: string; label: string }[] = [
  {
    path: 'public/portfolio-assets/project-3/athira-observation-fitted-silhouette.jpeg',
    filename: 'athira-observation-fitted-silhouette.jpeg',
    quadrantNumber: '01',
    label: 'FITTED SILHOUETTES',
  },
  {
    path: 'public/portfolio-assets/project-3/athira-observation-limited-versatility.jpeg',
    filename: 'athira-observation-limited-versatility.jpeg',
    quadrantNumber: '01',
    label: 'LIMITED VERSATILITY',
  },
];

async function main() {
  const doc = await client.fetch<Record<string, any> | null>(
    `*[_type=='projectThree'][0]{
       _id,
       "quadrants": page2SurveyInsights.quadrants[]{ _key, number, title, "lead": lead, "flow": flow[]{ _key, _type, step, isHighlight } }
     }`,
  );
  if (!doc?._id) {
    console.error('projectThree document not found — aborting.');
    process.exit(1);
  }

  const byNum = (n: string) => doc.quadrants?.find((q: any) => q.number === n);
  const q1 = byNum('01');
  const q2 = byNum('02');
  const q3 = byNum('03');
  const q4 = byNum('04');
  if (!q1?._key || !q2?._key || !q3?._key || !q4?._key) {
    console.error('Quadrant keys/numbers changed in the CMS — aborting.', doc.quadrants?.map((q: any) => `${q.number}:${q._key}`));
    process.exit(1);
  }
  console.log('Found quadrants:', doc.quadrants?.map((q: any) => `${q.number} "${q.title}"`).join(', '));

  const entries: Record<string, unknown> = {
    [`page2SurveyInsights.quadrants[_key=="${q2._key}"].lead`]: '',
    [`page2SurveyInsights.quadrants[_key=="${q3._key}"].title`]: 'AREAS OF INVESTIGATION',
    [`page2SurveyInsights.quadrants[_key=="${q4._key}"].title`]: 'PROJECT APPROACH',
  };
  const fabricFlow = q3.flow?.find((f: any) => f.step === 'Fabric & functionality');
  if (fabricFlow) {
    entries[`page2SurveyInsights.quadrants[_key=="${q3._key}"].flow[_key=="${fabricFlow._key}"].isHighlight`] = false;
  } else {
    /* CMS flow is stale (OBSERVATION…OPPORTUNITY) — replace it wholesale with the
       repo's current four steps and no highlight badge. */
    console.warn('CMS Q3 flow differs from repo — replacing full flow array.');
    const REPO_FLOW = [
      { step: 'Market trends & industry growth', desc: '', isHighlight: false },
      { step: 'Consumer preferences, pain points & buying behaviour', desc: '', isHighlight: false },
      { step: 'Competitor offerings & brand positioning', desc: '', isHighlight: false },
      { step: 'Fabric & functionality', desc: '', isHighlight: false },
    ];
    const keys = (q3.flow ?? []).map((f: any) => f._key);
    const flowType = (q3.flow ?? []).find((f: any) => f._type)?._type ?? 'object';
    entries[`page2SurveyInsights.quadrants[_key=="${q3._key}"].flow`] = REPO_FLOW.map((f, i) => ({
      ...f,
      _type: flowType,
      ...(keys[i] ? { _key: keys[i] } : { _key: `p3flow${i}${Date.now().toString(36)}` }),
    }));
  }

  if (DRY) {
    for (const [p, v] of Object.entries(entries)) console.log(`  set ${p} -> ${JSON.stringify(v)}`);
    console.log('  [dry] would upload Q1 images');
    console.log('\nDry run — nothing written.');
    return;
  }

  /* Upload the two observation images and map them into the Q1 images array. */
  const uploadedByLabel = new Map<string, string>();
  for (const img of IMAGES) {
    if (!fs.existsSync(img.path)) {
      console.error(`Missing file ${img.path} — aborting.`);
      process.exit(1);
    }
    const asset = await client.assets.upload('image', fs.createReadStream(img.path), { filename: img.filename });
    uploadedByLabel.set(img.label, asset._id);
    console.log(`Uploaded ${img.label}: ${asset._id}`);
  }
  const q1Images = (await client.fetch<any[]>(
    `*[_id==$id][0].page2SurveyInsights.quadrants[_key==$key].images[]{_key, label}`,
    { id: doc._id, key: q1._key },
  )) ?? [];
  for (const item of q1Images) {
    const assetId = uploadedByLabel.get(item.label);
    if (assetId) {
      entries[`page2SurveyInsights.quadrants[_key=="${q1._key}"].images[_key=="${item._key}"].image`] = {
        _type: 'image',
        asset: { _type: 'reference', _ref: assetId },
      };
    } else {
      console.warn(`No uploaded asset for Q1 image label "${item.label}" — skipped.`);
    }
  }

  for (const [p, v] of Object.entries(entries)) console.log(`  set ${p} -> ${JSON.stringify(v).slice(0, 120)}`);
  await client.patch(doc._id).set(entries).commit();
  console.log('\nPatched projectThree.');

  const after = await client.fetch(
    `*[_type=='projectThree'][0].page2SurveyInsights.quadrants[]{number, title, lead, images[]{label, "img": image.asset._ref}, flow[]{step, isHighlight}}`,
  );
  console.log(JSON.stringify(after, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
