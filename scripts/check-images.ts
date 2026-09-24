import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { portfolioData } from '../src/data/portfolioData';

/**
 * Audit which portfolio images are live from Sanity.
 *
 *   npm run check:images
 *
 * Prints, per document, every image slot in `portfolioData` that Sanity does
 * not yet serve, so `npm run sync:images` can fill the gaps.
 */
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
dotenv.config();

const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET || 'production';

if (!projectId) {
  console.error('Missing VITE_SANITY_PROJECT_ID. Add it to .env.local');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const DOC_TO_KEY: Record<string, string> = {
  bio: 'student',
  internship: 'internship',
  projectsSummary: 'selectedProjects',
  projectMarketing: 'projectMarketing',
  projectVM: 'projectVM',
  projectThree: 'projectThree',
  skills: 'skills',
  contact: 'contact',
  ui: 'ui',
};

function collectLocalImages(value: unknown, prefix: string, out: Map<string, string>): void {
  if (typeof value === 'string') {
    if (value.includes('/portfolio-assets/')) out.set(prefix, value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => collectLocalImages(item, `${prefix}[${i}]`, out));
    return;
  }
  if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      collectLocalImages(v, prefix ? `${prefix}.${k}` : k, out);
    }
  }
}

function collectSanityImages(value: unknown, prefix: string, out: Set<string>): void {
  if (Array.isArray(value)) {
    value.forEach((item, i) => collectSanityImages(item, `${prefix}[${i}]`, out));
    return;
  }
  if (value && typeof value === 'object') {
    const obj = value as Record<string, any>;
    if (obj._type === 'image' && obj.asset?._ref) {
      out.add(prefix);
      return;
    }
    for (const [k, v] of Object.entries(obj)) {
      if (!k.startsWith('_')) collectSanityImages(v, prefix ? `${prefix}.${k}` : k, out);
    }
  }
}

async function main() {
  const docs = await client.fetch<Record<string, any>[]>(`*[_type in $types]`, { types: Object.keys(DOC_TO_KEY) });
  const byId = new Map(docs.map((d) => [d._id, d]));

  let totalLocal = 0;
  let totalMissing = 0;

  for (const [docId, key] of Object.entries(DOC_TO_KEY)) {
    const doc = byId.get(docId);
    const local = new Map<string, string>();
    collectLocalImages((portfolioData as Record<string, any>)[key], docId === 'projectsSummary' ? 'items' : '', local);
    const live = new Set<string>();
    if (doc) collectSanityImages(doc, '', live);
    const missing = [...local.entries()].filter(([p]) => !live.has(p));

    totalLocal += local.size;
    totalMissing += missing.length;

    console.log(`\n== ${docId} — ${local.size} slot(s), ${local.size - missing.length} live, ${missing.length} missing`);
    for (const [p, v] of missing) console.log(`   MISSING  ${p}  =  ${v}`);
  }

  console.log(`\n${totalLocal - totalMissing}/${totalLocal} image slots live from Sanity. ${totalMissing} missing.`);
  console.log(totalMissing === 0 ? 'All images are live.' : 'Run `npm run sync:images` to upload the missing ones.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
