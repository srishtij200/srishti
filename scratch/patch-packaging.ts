import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

/**
 * One-off content patch — Project 1 (UNIQLO fragrance) Page 3.
 * "Physical Packaging" now reads HANA & KAZE (the second prototype is Kaze,
 * not Mizu) and every photo carries the fragrance rationale shown beside it.
 *
 *   npx tsx scratch/patch-packaging.ts --dry
 *   npx tsx scratch/patch-packaging.ts
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

const BASE = 'page3.processSection.physicalPackaging';

/* Hana = first photo, Kaze = second photo (order fixed by the published doc). */
const KEYS = ['kmufhbhv95m3maw3', 'kmufhbknx6oapegj'];

const HANA =
  "Hana was chosen to bring the beauty of Japan's cherry blossoms into the fragrance collection. Its soft floral character reflects Japanese appreciation for nature and simplicity, creating a gentle, everyday fragrance aligned with UNIQLO's LifeWear philosophy.";

const KAZE =
  "Kaze was chosen to represent the feeling of fresh air, movement and everyday freedom. Its light, citrusy character complements UNIQLO's focus on effortless, energetic everyday living while bringing a fresh and contemporary dimension to the collection.";

const entries: Record<string, unknown> = {
  [`${BASE}.title`]: 'PHYSICAL PACKAGING (HANA & KAZE)',
  [`${BASE}.photos[_key=="${KEYS[0]}"].caption`]: 'HANA',
  [`${BASE}.photos[_key=="${KEYS[0]}"].desc`]: 'Physical packaging.',
  [`${BASE}.photos[_key=="${KEYS[0]}"].description`]: HANA,
  [`${BASE}.photos[_key=="${KEYS[1]}"].caption`]: 'KAZE',
  [`${BASE}.photos[_key=="${KEYS[1]}"].desc`]: 'Physical packaging.',
  [`${BASE}.photos[_key=="${KEYS[1]}"].description`]: KAZE,
};

async function main() {
  const doc = await client.fetch<Record<string, any> | null>(
    `*[_type=='projectMarketing'][0]{_id, "pp": ${BASE}}`,
  );
  if (!doc) {
    console.error('projectMarketing document not found — aborting.');
    process.exit(1);
  }

  const photos: Record<string, any>[] = doc.pp?.photos ?? [];
  const publishedKeys = photos.map((p) => p._key).filter(Boolean);
  const missing = KEYS.filter((k) => !publishedKeys.includes(k));
  if (missing.length) {
    console.error(`Published photo keys changed — expected ${KEYS.join(', ')}, found ${publishedKeys.join(', ')}`);
    process.exit(1);
  }

  for (const [path, value] of Object.entries(entries)) {
    console.log(`  set ${path}\n      -> ${String(value).slice(0, 90)}${String(value).length > 90 ? '…' : ''}`);
  }

  if (DRY) {
    console.log('\nDry run — nothing written.');
    return;
  }

  await client.patch(doc._id).set(entries).commit();
  console.log(`\nPatched ${doc._id}.`);

  const after = await client.fetch<Record<string, any> | null>(`*[_id==$id][0]{"pp": ${BASE}}`, { id: doc._id });
  console.log(JSON.stringify(after, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
