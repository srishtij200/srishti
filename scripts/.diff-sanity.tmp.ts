/**
 * Content-sync diagnostic — portfolioData.ts vs the live Sanity docs.
 *
 *   npx tsx scripts/.diff-sanity.tmp.ts     (or: npm run check:content)
 *
 * Credentials come from `.env.local`. Exits non-zero when any text/number leaf
 * drifts, so it is safe to wire into CI. Image leaves are reported separately:
 * the static data points at `/portfolio-assets/*` while Sanity stores image
 * refs, so those divergences are expected and never fail the run.
 *
 * `siteSettings` is intentionally NOT diffed here — it has no counterpart in
 * portfolioData; it is baked into src/data/sanitySiteSnapshot.ts by
 * scripts/snapshot-site.ts instead.
 *
 * FIELDS REMOVED IN COMMIT 308e696 — do not resurrect:
 *   student.{institution,tagline,secondaryStatement,specializations}
 *   ui.about.{breadcrumb*,badge,paragraph2,nextLabel,nextTitle,nextCta}
 *   ui.contact.{breadcrumb*,badge,title,intro,cardHeader,emailLabel,
 *               locationLabel,phoneLabel,socialsHeader,image,imageAlt,
 *               closerLook,moreAbout}
 *   ui.skills.page.*
 *
 * STILL LIVE — routinely mistaken for the removals above; keep them:
 *   ui.home.hero.specializations         (hero chips — HomePage.tsx)
 *   ui.internshipLearnings.breadcrumbHome  (InternshipLearningsPage.tsx)
 *   ui.projectsOverview.breadcrumbHome     (ProjectsOverviewPage.tsx)
 *   ui.internshipExperience.next{Label,Title,Cta}
 *   ui.internshipLearnings.nextCta
 */
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { portfolioData } from '../src/data/portfolioData';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false, // always compare against the newest published revision
});

/** Singleton doc type -> portfolioData key. Mirrors DOC_TO_KEY in src/lib/sanity.ts. */
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

type Leaf = { path: string; value: string };

/** Collapse Sanity image objects to a sentinel so they can be filtered out. */
function mask(value: unknown): any {
  if (Array.isArray(value)) return value.map(mask);
  if (value && typeof value === 'object') {
    const obj = value as Record<string, any>;
    if (obj._type === 'image' || (obj.asset && typeof obj.asset === 'object')) return '<IMAGE>';
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(obj)) {
      if (k.startsWith('_')) continue; // _id/_type/_key/_rev/_createdAt/_updatedAt
      out[k] = mask(v);
    }
    return out;
  }
  return value;
}

/** Every text/number/boolean leaf; array indexes are kept in the path. */
function leaves(value: unknown, prefix = '', out: Leaf[] = []): Leaf[] {
  if (value === null || value === undefined) return out;
  if (typeof value !== 'object') {
    out.push({ path: prefix, value: String(value) });
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((v, i) => leaves(v, prefix + '[' + i + ']', out));
    return out;
  }
  for (const [k, v] of Object.entries(value)) leaves(v, prefix ? prefix + '.' + k : k, out);
  return out;
}

/** Array-index-insensitive path, used to tell a reorder from a real mismatch. */
const norm = (p: string): string => p.replace(/\[\d+\]/g, '[]');

function compare(label: string, source: unknown, doc: unknown): number {
  const dataLeaves = leaves(source);
  const docLeaves = leaves(doc);
  const exact = new Map(docLeaves.map((l) => [l.path, l.value]));
  const loose = new Map(docLeaves.map((l) => [norm(l.path), l.value]));

  const text: string[] = [];
  let imageCount = 0;

  for (const l of dataLeaves) {
    const same = exact.get(l.path);
    if (same === l.value) continue;
    const without = loose.get(norm(l.path));
    let detail: string;
    if (same === undefined && without === undefined) detail = 'NOT IN SANITY   (data: "' + l.value + '")';
    else if (same === undefined && without === l.value) detail = 'ARRAY ORDER     (value matches, position differs)';
    else detail = 'MISMATCH        (data: "' + l.value + '" | Sanity: "' + (same === undefined ? without : same) + '")';

    if (detail.indexOf('<IMAGE>') !== -1) imageCount += 1;
    else text.push(l.path + '  ' + detail);
  }

  const dataPaths = new Set(dataLeaves.map((l) => norm(l.path)));
  const orphans = docLeaves.filter((l) => !dataPaths.has(norm(l.path)));

  console.log('\n=== ' + label + ' — ' + dataLeaves.length + ' data leaves / ' + docLeaves.length + ' Sanity leaves');
  console.log('    text/number mismatches: ' + text.length + ' | image divergences: ' + imageCount + ' | Sanity-only fields: ' + orphans.length);
  text.forEach((t) => console.log('  ✗ ' + t));
  orphans.forEach((o) => console.log('  ? Sanity-only: ' + o.path + ' = "' + o.value + '" (absent from portfolioData)'));

  return text.length + orphans.length;
}

async function main(): Promise<void> {
  const types = Object.keys(DOC_TO_KEY);
  const docs = await client.fetch<Array<Record<string, any>>>('*[_type in $types]', { types });
  console.log('Fetched ' + docs.length + ' docs from ' + process.env.VITE_SANITY_PROJECT_ID + '/' + process.env.VITE_SANITY_DATASET);
  console.log('(siteSettings not diffed here — baked into src/data/sanitySiteSnapshot.ts)');

  const seen = new Set<string>();
  let failures = 0;

  for (const doc of docs) {
    const key = DOC_TO_KEY[doc._type];
    if (!key) continue;
    seen.add(doc._type);

    if (doc._type === 'projectsSummary') {
      // sanity.ts replaces selectedProjects with doc.items wholesale.
      failures += compare('projectsSummary.items -> portfolioData.selectedProjects', portfolioData.selectedProjects, mask(doc.items ?? []));
      continue;
    }
    failures += compare(doc._type + ' -> portfolioData.' + key, (portfolioData as Record<string, any>)[key], mask(doc));
  }

  for (const type of types) {
    if (!seen.has(type)) {
      console.log('\n=== ' + type + ' — NO DOCUMENT PUBLISHED (data has no live counterpart)');
      failures += 1;
    }
  }

  console.log('\n' + (failures === 0 ? '✅ IN SYNC — every text/number leaf matches Sanity' : '❌ ' + failures + ' text-level divergence(s)'));
  if (failures) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
