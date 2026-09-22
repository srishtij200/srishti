import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });

const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET || 'production';
const outPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/sanitySiteSnapshot.ts');

async function main() {
  if (!projectId) {
    fs.writeFileSync(outPath, writeFile({ seo: null, colors: null, sections: [] }));
    console.log('[snapshot] no SANITY_PROJECT_ID — wrote empty snapshot');
    return;
  }

  const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true });
  const doc = (await client.fetch(`*[_type=='siteSettings'][0]{seo, colors, sections}`).catch(() => null)) ?? {};
  const snapshot = {
    seo: doc.seo ?? null,
    colors: doc.colors ?? null,
    sections: doc.sections ?? [],
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

main().catch((e) => {
  fs.writeFileSync(outPath, writeFile({ seo: null, colors: null, sections: [] }));
  console.warn('[snapshot] failed, wrote empty snapshot', e);
});