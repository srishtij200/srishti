/**
 * Seed Sanity with all current portfolio content + images.
 *
 * Usage:
 *   npm run seed
 *
 * Requires in `.env.local`:
 *   VITE_SANITY_PROJECT_ID
 *   VITE_SANITY_DATASET  (optional, defaults to "production")
 *   SANITY_TOKEN         (API token with write access)
 */
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import { portfolioData } from '../src/data/portfolioData';

dotenv.config({ path: '.env.local' });
dotenv.config();

const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production';
const token = process.env.SANITY_TOKEN;

if (!projectId || !token) {
  console.error('Missing credentials. Set VITE_SANITY_PROJECT_ID and SANITY_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token });

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

/** Where a site path (like "/portfolio-assets/x.jpg") lives on disk. */
function resolveLocal(assetPath: string): string | null {
  if (assetPath.startsWith('/portfolio-assets')) return path.join(PUBLIC_DIR, assetPath);
  if (assetPath.startsWith('/src/assets')) return path.join(process.cwd(), assetPath);
  return null;
}

type ImageStub = { _type: 'image'; asset: { _ref: string } };

const assetCache = new Map<string, Promise<ImageStub | null>>();

async function uploadImage(assetPath: string): Promise<ImageStub | null> {
  if (assetCache.has(assetPath)) return assetCache.get(assetPath)!;
  const job = (async (): Promise<ImageStub | null> => {
    const filePath = resolveLocal(assetPath);
    if (!filePath || !fs.existsSync(filePath)) {
      console.warn('  ! image not found on disk, skipping:', assetPath);
      return null;
    }
    const buffer = fs.readFileSync(filePath);
    const filename = path.basename(filePath);
    const uploaded = await client.assets.upload('image', buffer, { filename });
    return { _type: 'image', asset: { _ref: uploaded._id } };
  })();
  assetCache.set(assetPath, job);
  return job;
}

let keyCounter = 0;

/** Unique, deterministic-enough array item key (recommended: nanoid-ish). */
function genKey(): string {
  keyCounter += 1;
  return `k${Date.now().toString(36)}${keyCounter.toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

/** Walk any value; upload local images and replace with Sanity image refs. */
async function walk(value: unknown): Promise<any> {
  if (typeof value === 'string' && (value.includes('/portfolio-assets/') || value.includes('/src/assets/'))) {
    return uploadImage(value);
  }
  if (Array.isArray(value)) {
    const out = [];
    for (const item of value) {
      const walked = await walk(item);
      if (walked && typeof walked === 'object' && !Array.isArray(walked) && !(walked._type === 'image' && walked.asset)) {
        walked._key = genKey();
      }
      out.push(walked);
    }
    return out;
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = await walk(v);
    return out;
  }
  return value;
}

/** Replace one seed image object back into a plain string when upload failed. */
function cleanupNulls(value: unknown): any {
  if (value === null || value === undefined) return undefined;
  if (Array.isArray(value)) return value.map(cleanupNulls).filter((x) => x !== undefined);
  if (typeof value === 'object') {
    if ((value as any)._type === 'image' && (value as any).asset) return value;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      const cleaned = cleanupNulls(v);
      if (cleaned !== undefined) out[k] = cleaned;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return value;
}

async function build(key: string): Promise<Record<string, unknown> | null> {
  const value = await walk((portfolioData as any)[key]);
  const cleaned = cleanupNulls(value);
  if (!cleaned) return null;
  return { _id: key, _type: key, ...cleaned };
}

async function main() {
  console.log(`Seeding → ${projectId}/${dataset}\n`);

  // projectsSummary uses selectedProjects as its "items" array.
  const summaryItems = await walk((portfolioData as any).selectedProjects);
  const summaryClean = cleanupNulls(summaryItems);
  const summaryDoc = summaryClean
    ? { _id: 'projectsSummary', _type: 'projectsSummary', items: summaryClean }
    : null;

  const documents = [];
  const bioData = (portfolioData as any).student;
  const bioDoc = bioData ? { _id: 'bio', _type: 'bio', ...(await walk(bioData)) } : null;
  if (bioDoc) documents.push(bioDoc);
  for (const key of ['internship', 'projectMarketing', 'projectVM', 'projectThree', 'skills', 'contact', 'ui']) {
    const doc = await build(key);
    if (doc) documents.push(doc);
  }
  if (summaryDoc) documents.push(summaryDoc);

  /* Order matters: the homepage renders by this array, so it mirrors the
     published Site Settings order (Studio reorders via drag-and-drop). */
  const sections = [
    { _key: 's1', key: 'home.hero', label: 'Home — Hero & About', visible: true },
    { _key: 's3', key: 'home.internship', label: 'Home — Internship Callout', visible: true },
    { _key: 's2', key: 'home.projects', label: 'Home — Selected Projects', visible: true },
    { _key: 's4', key: 'home.skills', label: 'Home — Skills', visible: true },
    { _key: 's5', key: 'home.contact', label: 'Home — Contact', visible: true },
    { _key: 's6', key: 'project.marketing', label: 'Project 1 — Marketing', visible: true },
    { _key: 's7', key: 'project.vm', label: 'Project 2 — Visual Merchandising', visible: true },
    { _key: 's8', key: 'project.three', label: 'Project 3 — Start-Up', visible: true },
  ];

  documents.push({
    _id: 'siteSettings',
    _type: 'siteSettings',
    seo: {
      title: 'Srishti Jain — Fashion Communication & Visual Merchandising Portfolio',
      description:
        'Portfolio of Srishti Jain — Marketing Management, Visual Merchandising, and E-Commerce.',
    },
    colors: {
      background: '#F6E7D3',
      ink: '#2A2E28',
      highlight: '#A9B5A0',
      softAccent: '#B7CDE2',
      warmAccent: '#C9A0A4',
    },
    sections,
  });

  for (const doc of documents) {
    const label = doc._type;
    const replaced = await client.createOrReplace(doc as any);
    console.log(`  ✓ ${label}  (${replaced._id})`);
  }

  console.log(`\nDone — ${documents.length} documents written.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});