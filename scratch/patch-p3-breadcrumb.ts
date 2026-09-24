import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

/**
 * One-off content patch — ui doc.
 *   • projectThree.breadcrumbCurrent → "" (remove "PROJECT 3 — START UP"
 *     naming text above ATHERA on Project 3 Page 1)
 *
 *   npx tsx scratch/patch-p3-breadcrumb.ts [--dry]
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

async function main() {
  const uiDoc = await client.fetch<Record<string, any> | null>(
    `*[_type=='ui'][0]{_id, "crumb": projectThree.breadcrumbCurrent}`,
  );
  if (!uiDoc?._id) {
    console.error('ui document not found — aborting.');
    process.exit(1);
  }
  console.log('Current breadcrumbCurrent:', JSON.stringify(uiDoc.crumb));

  const entries = { 'projectThree.breadcrumbCurrent': '' };
  console.log('  ui: set projectThree.breadcrumbCurrent -> ""');

  if (DRY) {
    console.log('\nDry run — nothing written.');
    return;
  }

  await client.patch(uiDoc._id).set(entries).commit();
  const after = await client.fetch(`*[_type=='ui'][0].projectThree.breadcrumbCurrent`);
  console.log('Patched. Now:', JSON.stringify(after));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
