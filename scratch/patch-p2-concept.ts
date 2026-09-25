import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

/**
 * One-off content patch — Project 1 (UNIQLO fragrance) Page 2, subsection 03.
 * The heading becomes "Conceptualising the Idea" and the sage-green takeaway
 * box drops the first-person "I".
 *
 *   npx tsx scratch/patch-p2-concept.ts --dry
 *   npx tsx scratch/patch-p2-concept.ts
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

const BASE = 'page2BriefToConcept.quadrant03';

const entries: Record<string, unknown> = {
  [`${BASE}.title`]: 'CONCEPTUALISING THE IDEA',
  [`${BASE}.takeaway`]:
    "There was an opportunity to extend UNIQLO's idea of everyday living from something we wear to something we experience.",
};

async function main() {
  const doc = await client.fetch<Record<string, any> | null>(
    `*[_type=='projectMarketing'][0]{_id, "q03": ${BASE}}`,
  );
  if (!doc?._id) {
    console.error('projectMarketing document not found — aborting.');
    process.exit(1);
  }
  if (!doc.q03) {
    console.error(`${BASE} missing on the published document — aborting.`);
    process.exit(1);
  }

  for (const [path, value] of Object.entries(entries)) {
    const short = typeof value === 'string' && value.length > 96 ? `${value.slice(0, 96)}…` : value;
    console.log(`  set ${path}\n      -> ${short}`);
  }

  if (DRY) {
    console.log('\nDry run — nothing written.');
    return;
  }

  await client.patch(doc._id).set(entries).commit();
  console.log('\nPatched projectMarketing.');

  const after = await client.fetch(
    `*[_type=='projectMarketing'][0]{"q03": ${BASE}}`,
  );
  console.log(JSON.stringify(after, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
