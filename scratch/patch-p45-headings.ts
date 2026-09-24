import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

/**
 * One-off content patch — Project 1 (UNIQLO fragrance) Pages 4 & 5.
 *   • Page 4 heading      → "FRAGRANCE TESTING & FEEDBACK"
 *   • Page 5 subheadline  → "Key Learnings from the Project"
 *   • Page 5 learnings 01–04 drop the first-person "I" ("Learned …")
 *   • ui: "SKILL DEVELOPED" section header on page 5
 *
 *   npx tsx scratch/patch-p45-headings.ts --dry
 *   npx tsx scratch/patch-p45-headings.ts
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

/* Page 5 learning pillars, in published order (01 RESEARCH … 04 BRAND THINKING). */
const LEARNINGS: { key: string; detail: string }[] = [
  { key: 'kmucvf6xf1adnnrqd', detail: 'Learned to look at the market, consumer and competition before developing a concept.' },
  { key: 'kmucvf6xf1b8yf7gv', detail: 'Learned to connect a creative idea with STP, 7Ps, BCG and market planning.' },
  { key: 'kmucvf6xf1cadn3zb', detail: 'Learned to translate a brand philosophy into a new product and visual identity.' },
  { key: 'kmucvf6xf1djbg3cq', detail: 'Learned that a new category must still feel connected to the original brand.' },
];

async function main() {
  /* Guards: the published doc must still hold the shapes/keys this patch targets. */
  const doc = await client.fetch<Record<string, any> | null>(
    `*[_type=='projectMarketing'][0]{
       _id,
       "p4Title": page4ConceptToConsumer.title,
       "p5Sub": page5IdeaToImpact.subheadline,
       "learnKeys": page5IdeaToImpact.learnings[]._key
     }`,
  );
  if (!doc?._id) {
    console.error('projectMarketing document not found — aborting.');
    process.exit(1);
  }
  const liveKeys: string[] = doc.learnKeys ?? [];
  const missing = LEARNINGS.map((l) => l.key).filter((k) => !liveKeys.includes(k));
  if (missing.length) {
    console.error(`Learning keys changed in the CMS (${missing.join(', ')}) — aborting.`);
    process.exit(1);
  }

  const uiDoc = await client.fetch<Record<string, any> | null>(
    `*[_type=='ui'][0]{_id, "skillsHeader": projectMarketing.p5SkillsHeader}`,
  );
  if (!uiDoc?._id) {
    console.error('ui document not found — aborting.');
    process.exit(1);
  }

  const pmEntries: Record<string, unknown> = {
    'page4ConceptToConsumer.title': 'FRAGRANCE TESTING & FEEDBACK',
    'page5IdeaToImpact.subheadline': 'Key Learnings from the Project',
  };
  for (const l of LEARNINGS) {
    pmEntries[`page5IdeaToImpact.learnings[_key=="${l.key}"].detail`] = l.detail;
  }
  const uiEntries: Record<string, unknown> = { 'projectMarketing.p5SkillsHeader': 'SKILL DEVELOPED' };

  for (const [path, value] of Object.entries(pmEntries)) {
    console.log(`  projectMarketing: set ${path}\n      -> ${value}`);
  }
  for (const [path, value] of Object.entries(uiEntries)) {
    console.log(`  ui: set ${path}\n      -> ${value}`);
  }

  if (DRY) {
    console.log('\nDry run — nothing written.');
    return;
  }

  await client.patch(doc._id).set(pmEntries).commit();
  await client.patch(uiDoc._id).set(uiEntries).commit();
  console.log('\nPatched projectMarketing + ui.');

  const after = await client.fetch(
    `{
      "pm": *[_type=='projectMarketing'][0]{
        "p4Title": page4ConceptToConsumer.title,
        "p5Sub": page5IdeaToImpact.subheadline,
        "learnings": page5IdeaToImpact.learnings[]{num, detail}
      },
      "ui": *[_type=='ui'][0].projectMarketing.p5SkillsHeader
    }`,
  );
  console.log(JSON.stringify(after, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
