import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });

const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET || 'production';
const outPath = path.resolve(import.meta.dirname, '../src/data/sanitySiteSnapshot.ts');

async function main() {
  if (!projectId) {
    throw new Error('[snapshot] missing VITE_SANITY_PROJECT_ID/SANITY_PROJECT_ID; keeping the previous snapshot');
  }

  const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true });
  const doc = await client.fetch(`*[_type=='siteSettings'][0]{seo, colors, sections}`);
  if (!doc || typeof doc !== 'object') {
    throw new Error('[snapshot] Sanity returned no valid Site Settings document; keeping the previous snapshot');
  }

  const snapshot = {
    seo: doc.seo ?? null,
    colors: doc.colors ?? null,
    sections: Array.isArray(doc.sections) ? doc.sections : [],
  };
  fs.writeFileSync(outPath, writeFile(snapshot));
  console.log(`[snapshot] wrote ${snapshot.sections.length} sections from ${projectId}/${dataset}`);
}

function writeFile(snapshot: { seo: unknown; colors: unknown; sections: unknown[] }) {
  return [
    '// AUTO-GENERATED from Sanity on `npm run prebuild`. Do not edit by hand.\n',
    'export const sanitySiteSnapshot = ',
    JSON.stringify(snapshot, null, 2),
    ';\n',
  ].join('');
}

main().catch((error) => {
  console.error('[snapshot] failed; preserving the previous snapshot', error);
  process.exitCode = 1;
});