/**
 * One-off: remove from the live Sanity docs every field the site no longer
 * renders — all image objects, plus any leaf the cleaned portfolioData lacks.
 *
 *   npx tsx scripts/unset-orphan-fields.ts
 *
 * Requires SANITY_TOKEN (write) in .env.local. siteSettings is untouched.
 */
import dotenv from 'dotenv';
import { createClient } from '@sanity/client';
import { portfolioData } from '../src/data/portfolioData';

dotenv.config({ path: '.env.local' });
dotenv.config();

const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN;
if (!projectId || !token) {
  console.error('Missing VITE_SANITY_PROJECT_ID / SANITY_TOKEN in .env.local');
  process.exit(1);
}
const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false });

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

const norm = (p: string) => p.replace(/\[\d+\]/g, '[]');

function walkLocal(v: unknown, prefix: string, allowed: Set<string>): void {
  if (Array.isArray(v)) {
    v.forEach((item, i) => walkLocal(item, `${prefix}[${i}]`, allowed));
    return;
  }
  if (v && typeof v === 'object') {
    for (const [k, val] of Object.entries(v as Record<string, unknown>)) {
      walkLocal(val, prefix ? `${prefix}.${k}` : k, allowed);
    }
    return;
  }
  allowed.add(norm(prefix));
}

type Scan = { unset: string[] };
function scanDoc(v: unknown, prefix: string, allowed: Set<string>, out: Scan): void {
  if (Array.isArray(v)) {
    v.forEach((item, i) => scanDoc(item, `${prefix}[${i}]`, allowed, out));
    return;
  }
  if (v && typeof v === 'object') {
    const obj = v as Record<string, unknown>;
    if (obj._type === 'image' || (obj.asset && typeof obj.asset === 'object')) {
      out.unset.push(prefix);
      return;
    }
    for (const [k, val] of Object.entries(obj)) {
      if (k.startsWith('_')) continue;
      scanDoc(val, prefix ? `${prefix}.${k}` : k, allowed, out);
    }
    return;
  }
  if (!allowed.has(norm(prefix))) out.unset.push(prefix);
}

async function main(): Promise<void> {
  const types = Object.keys(DOC_TO_KEY);
  const docs = await client.fetch<Array<Record<string, any>>>('*[_type in $types]', { types });
  console.log(`Fetched ${docs.length} docs from ${projectId}/${dataset}`);

  let touched = 0;
  for (const doc of docs) {
    const key = DOC_TO_KEY[doc._type as string];
    if (!key) continue;
    let local = (portfolioData as Record<string, unknown>)[key];
    // projectsSummary stores the array under items[] in the doc, but locally it
    // IS the selectedProjects array — align the root prefix before comparing.
    if (doc._type === 'projectsSummary') local = { items: local };
    const allowed = new Set<string>();
    walkLocal(local, '', allowed);

    const out: Scan = { unset: [] };
    scanDoc(doc, '', allowed, out);
    const paths = [...new Set(out.unset)].filter(Boolean);
    if (!paths.length) {
      console.log(`  = ${doc._type}: clean`);
      continue;
    }
    await client.patch(doc._id as string).unset(paths).commit({ autoGenerateArrayKeys: false });
    touched += 1;
    console.log(`  ~ ${doc._type}: unset ${paths.length} path(s)`);
    paths.slice(0, 12).forEach((p) => console.log(`      - ${p}`));
    if (paths.length > 12) console.log(`      … and ${paths.length - 12} more`);
  }
  console.log(`\nDone — ${touched} document(s) patched.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
