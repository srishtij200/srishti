import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { portfolioData } from '../src/data/portfolioData';

/**
 * Upload every local portfolio image referenced in `portfolioData` to Sanity
 * and patch the matching image field on each document.
 *
 * Additive by design: it never replaces a document and never deletes a field,
 * so anything edited in the Studio stays intact.
 *
 *   npm run sync:images             # fill only slots that are empty in Sanity
 *   npm run sync:images -- --force  # also re-upload slots that already have an image
 *   npm run sync:images -- --dry    # report what would change
 */
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
dotenv.config();

const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN;

const FORCE = process.argv.includes('--force');
const DRY = process.argv.includes('--dry');

if (!projectId || !token) {
  console.error('Missing credentials. Set VITE_SANITY_PROJECT_ID and SANITY_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false });
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

/** Singleton document id -> portfolioData key. */
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

type Token = { kind: 'key'; value: string } | { kind: 'index'; value: number };
type Slot = { path: string; tokens: Token[]; local: string };

/* ---------------------------- path helpers ---------------------------- */

function parsePath(p: string): Token[] {
  const tokens: Token[] = [];
  for (const part of p.split('.')) {
    const m = part.match(/^([^[\]]*)((\[\d+\])*)$/);
    if (!m) continue;
    if (m[1]) tokens.push({ kind: 'key', value: m[1] });
    for (const idx of m[2].match(/\[\d+\]/g) ?? []) {
      tokens.push({ kind: 'index', value: Number(idx.slice(1, -1)) });
    }
  }
  return tokens;
}

/** Collect every local /portfolio-assets/... path, keyed by its data path. */
function collectLocalImages(value: unknown, prefix: string, out: Slot[]): void {
  if (typeof value === 'string') {
    if (value.includes('/portfolio-assets/')) out.push({ path: prefix, tokens: parsePath(prefix), local: value });
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

/** Does `tokens` resolve inside `doc`? */
function existsAt(doc: unknown, tokens: Token[]): boolean {
  let node: unknown = doc;
  for (const t of tokens) {
    if (t.kind === 'index') {
      if (!Array.isArray(node) || t.value >= node.length) return false;
      node = node[t.value];
    } else {
      if (!node || typeof node !== 'object' || Array.isArray(node)) return false;
      if (!(t.value in (node as Record<string, unknown>))) return false;
      node = (node as Record<string, unknown>)[t.value];
    }
  }
  return true;
}

/** Deepest ancestor path that already exists in the document. */
function deepestExistingPrefix(doc: unknown, tokens: Token[]): Token[] {
  const prefix: Token[] = [];
  for (const t of tokens) {
    if (!existsAt(doc, [...prefix, t])) break;
    prefix.push(t);
  }
  return prefix;
}

function renderPath(tokens: Token[]): string {
  return tokens.reduce((acc, t) => (t.kind === 'index' ? `${acc}[${t.value}]` : acc ? `${acc}.${t.value}` : t.value), '');
}

/**
 * Patch path for `set`. Sanity rejects numeric array indices, so array items are
 * addressed with a `[_key=="..."]` selector — the `_key` is read from the doc.
 * Returns null when an array item has no `_key` to target.
 */
function toPatchPath(doc: unknown, tokens: Token[]): string | null {
  let node: unknown = doc;
  let out = '';
  for (const t of tokens) {
    if (t.kind === 'key') {
      out = out ? `${out}.${t.value}` : t.value;
      node = node && typeof node === 'object' ? (node as Record<string, unknown>)[t.value] : undefined;
      continue;
    }
    if (!Array.isArray(node) || t.value >= node.length) return null;
    const item = node[t.value] as Record<string, any> | undefined;
    const key = item?._key;
    if (!key) return null;
    out += `[_key=="${key}"]`;
    node = item;
  }
  return out;
}

/* ------------------------------ uploads ------------------------------ */

type ImageStub = { _type: 'image'; asset: { _ref: string } };
const assetCache = new Map<string, Promise<ImageStub | null>>();

function uploadImage(local: string): Promise<ImageStub | null> {
  if (assetCache.has(local)) return assetCache.get(local)!;
  const job = (async (): Promise<ImageStub | null> => {
    const filePath = path.join(PUBLIC_DIR, local);
    if (!fs.existsSync(filePath)) {
      console.warn(`  ! missing on disk: ${local}`);
      return null;
    }
    const uploaded = await client.assets.upload('image', fs.readFileSync(filePath), {
      filename: path.basename(filePath),
    });
    return { _type: 'image', asset: { _ref: uploaded._id } };
  })();
  assetCache.set(local, job);
  return job;
}

/** Resolve the live value at `tokens` (for merging into existing arrays). */
function getAt(doc: unknown, tokens: Token[]): unknown {
  let node: unknown = doc;
  for (const t of tokens) {
    if (t.kind === 'index') {
      if (!Array.isArray(node) || t.value >= node.length) return undefined;
      node = node[t.value];
    } else {
      if (!node || typeof node !== 'object' || Array.isArray(node)) return undefined;
      node = (node as Record<string, unknown>)[t.value];
    }
  }
  return node;
}

/** Build a patch value for `tokens`, merging into `existing` and creating arrays. */
function buildValue(existing: unknown, tokens: Token[], value: unknown): any {
  if (tokens.length === 0) return value;
  const [t, ...rest] = tokens;
  if (t.kind === 'index') {
    const arr: any[] = Array.isArray(existing) ? existing : [];
    while (arr.length < t.value) arr.push({ _key: genKey() });
    const current = arr[t.value];
    const child = buildValue(current, rest, value);
    arr[t.value] =
      child && typeof child === 'object' && !Array.isArray(child) && !(child as any)._key
        ? { _key: (current && (current as any)._key) || genKey(), ...(child as Record<string, unknown>) }
        : child;
    return arr;
  }
  const obj: Record<string, any> =
    existing && typeof existing === 'object' && !Array.isArray(existing) ? (existing as Record<string, any>) : {};
  obj[t.value] = buildValue(obj[t.value], rest, value);
  return obj;
}

/** Sanity requires a `_key` on every array item; Studio cannot edit items without one. */
const lacksKey = (item: unknown): boolean =>
  Boolean(item) && typeof item === 'object' && !Array.isArray(item) && !(item as any)._key;

function collectKeyFixes(node: unknown, tokens: Token[], doc: unknown, out: Record<string, unknown>): void {
  if (Array.isArray(node)) {
    let items = node;
    if (node.some(lacksKey)) {
      items = node.map((item) => (lacksKey(item) ? { _key: genKey(), ...(item as Record<string, unknown>) } : item));
      const p = toPatchPath(doc, tokens);
      if (p) out[p] = items;
      else console.warn(`  ! could not address array at ${renderPath(tokens) || '(root)'}`);
    }
    items.forEach((item, i) => collectKeyFixes(item, [...tokens, { kind: 'index', value: i }], doc, out));
    return;
  }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      if (!k.startsWith('_')) collectKeyFixes(v, [...tokens, { kind: 'key', value: k }], doc, out);
    }
  }
}

let keyCounter = 0;
/** Unique `_key` for array items we create (Sanity requires one per item). */
function genKey(): string {
  keyCounter += 1;
  return `k${Date.now().toString(36)}${keyCounter.toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

/* -------------------------------- main ------------------------------ */

async function main() {
  console.log(`Sanity image sync → ${projectId}/${dataset}${DRY ? '  (dry run)' : ''}\n`);

  const docs = await client.fetch<Record<string, any>[]>(`*[_type in $types]`, { types: Object.keys(DOC_TO_KEY) });
  const byId = new Map(docs.map((d) => [d._id, d]));

  let patchedDocs = 0;
  let alreadyLive = 0;
  const blocked: string[] = [];

  for (const [docId, key] of Object.entries(DOC_TO_KEY)) {
    const doc = byId.get(docId);
    if (!doc) {
      console.warn(`  ! document ${docId} not found — skipping`);
      continue;
    }

    const slots: Slot[] = [];
    collectLocalImages((portfolioData as Record<string, any>)[key], docId === 'projectsSummary' ? 'items' : '', slots);

    /** Patch entries, keyed by the path we set (built from the existing prefix). */
    const entries: Record<string, unknown> = {};

    for (const slot of slots) {
      if (!FORCE && existsAt(doc, slot.tokens)) {
        alreadyLive += 1;
        continue;
      }
      const prefix = deepestExistingPrefix(doc, slot.tokens);
      const remainder = slot.tokens.slice(prefix.length);
      if (remainder.length === 0) continue;
      const ref = DRY ? { _dry: slot.local } : await uploadImage(slot.local);
      if (!ref) {
        blocked.push(`${docId}:${slot.path} — upload failed`);
        continue;
      }
      const prefixPath = toPatchPath(doc, prefix);
      if (prefixPath === null) {
        blocked.push(`${docId}:${slot.path} — array item has no _key at ${renderPath(prefix)}`);
        continue;
      }
      /* When the container itself is missing (or is not an array yet), the whole
         array is rebuilt at its own path; otherwise only the leaf is set. */
      const rebuildContainer = remainder[0].kind === 'index';
      const entryKey = rebuildContainer
        ? prefixPath
        : prefixPath
          ? `${prefixPath}.${remainder[0].value}`
          : `${remainder[0].value}`;
      const valueTokens = rebuildContainer ? remainder : remainder.slice(1);
      const containerTokens = rebuildContainer ? prefix : [...prefix, remainder[0]];
      const seed = entryKey in entries ? entries[entryKey] : getAt(doc, containerTokens);
      entries[entryKey] = valueTokens.length === 0 ? ref : buildValue(seed, valueTokens, ref);
      console.log(`  ${DRY ? 'would set' : 'set'} ${docId}.${slot.path}  <-  ${slot.local}`);
    }

    if (Object.keys(entries).length && !DRY) {
      if (process.env.DEBUG_PATHS) console.log('  patch keys:', JSON.stringify(Object.keys(entries), null, 1));
      await client.patch(docId).set(entries).commit();
      patchedDocs += 1;
    }
  }

  /** Repair pass: array items written without a `_key` (Studio needs them). */
  if (!DRY) {
    for (const docId of Object.keys(DOC_TO_KEY)) {
      for (let pass = 0; pass < 3; pass++) {
        const fresh = await client.fetch<Record<string, any> | null>(`*[_id == $id][0]`, { id: docId });
        if (!fresh) break;
        const fixes: Record<string, unknown> = {};
        collectKeyFixes(fresh, [], fresh, fixes);
        const keys = Object.keys(fixes);
        if (!keys.length) break;
        console.log(`  keys: ${docId} → ${keys.join(', ')}`);
        await client.patch(docId).set(fixes).commit();
      }
    }
  }

  console.log(`\n${DRY ? 'Dry run complete' : 'Done'} — ${alreadyLive} slot(s) already live, ${patchedDocs} document(s) patched.`);
  if (blocked.length) {
    console.log(`\nSkipped ${blocked.length} slot(s):`);
    blocked.forEach((b) => console.log(`  - ${b}`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
