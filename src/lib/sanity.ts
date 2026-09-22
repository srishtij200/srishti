import { createClient } from '@sanity/client';
import { portfolioData } from '../data/portfolioData';
import { sanitySiteSnapshot } from '../data/sanitySiteSnapshot';

/* ------------------------------------------------------------------ */
/*  Sanity runtime client                                             */
/*  Reads content from Sanity and merges it into the static data so   */
/*  the site works identically with or without a CMS.                 */
/* ------------------------------------------------------------------ */

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string | undefined) || 'production';

export const hasSanity = Boolean(projectId);

export const sanityClient = createClient({
  projectId: projectId || 'missing',
  dataset,
  apiVersion: '2024-01-01',
  useCdn: typeof document !== 'undefined',
});

type AnyDoc = Record<string, any>;

/** Singleton → portfolioData key mapping. */
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

const QUERY = `*[_type in $types]`;

export interface SiteSettings {
  seo?: { title?: string; description?: string };
  colors?: {
    background?: string;
    ink?: string;
    highlight?: string;
    softAccent?: string;
    warmAccent?: string;
  };
  sections?: { key: string; label: string; visible: boolean }[];
}

export const siteSettings: SiteSettings = {};

/* Apply the build-time snapshot so the first painted frame already reflects
   the published Site Settings (visibility, order, colors, SEO). The live
   runtime re-fetch below then reconciles any newer publishes. */
if (typeof document !== 'undefined') {
  applySiteSettings(sanitySiteSnapshot as SiteSettings);
}

/* ------------------------- asset mapping ------------------------- */

/** image-<assetId>-<w>x<h>-<format>  =>  CDN url */
function imageRefToUrl(ref?: string): string | null {
  if (!ref) return null;
  const parts = ref.split('-');
  if (parts.length < 4) return null;
  const ext = parts[parts.length - 1];
  const size = parts[parts.length - 2]; // e.g. 1200x800
  const assetId = parts.slice(1, parts.length - 2).join('-');
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}-${size}.${ext}`;
}

/** Walk any value; turn Sanity image objects into plain URL strings. */
function denormalize(value: unknown): any {
  if (Array.isArray(value)) return value.map(denormalize);
  if (value && typeof value === 'object') {
    const obj = value as AnyDoc;
    if (obj._type === 'image' || (obj.asset && typeof obj.asset === 'object')) {
      const url = imageRefToUrl(obj.asset?._ref);
      if (url) return url;
      return obj;
    }
    const out: AnyDoc = {};
    for (const [k, v] of Object.entries(obj)) {
      if (k === '_id' || k === '_type' || k === '_key' || k === '_rev' || k === '_createdAt' || k === '_updatedAt') continue;
      out[k] = denormalize(v);
    }
    return out;
  }
  return value;
}

/* ------------------------- deep merge ---------------------------- */

function isPlainObject(v: unknown): v is AnyDoc {
  return Boolean(v) && typeof v === 'object' && !Array.isArray(v);
}

/** Merge `src` into `target` in place. Renamed to merge doc blocks. */
function deepMerge(target: unknown, src: unknown): any {
  if (isPlainObject(src) && isPlainObject(target)) {
    for (const k of Object.keys(src)) {
      (target as AnyDoc)[k] = deepMerge((target as AnyDoc)[k], src[k]);
    }
    return target;
  }
  return genericCopy(src);
}

/** Deep clone with image objects already denormalized to string URLs. */
function genericCopy<T>(value: T): T {
  if (value === null || typeof value !== 'object') return value;
  if (Array.isArray(value)) return value.map(genericCopy) as unknown as T;
  const out: AnyDoc = {};
  for (const [k, v] of Object.entries(value as AnyDoc)) {
    if (k === '_id' || k === '_type' || k === '_key' || k === '_rev' || k === '_createdAt' || k === '_updatedAt') continue;
    out[k] = genericCopy(v);
  }
  return out as T;
}

/* ------------------------- settings ------------------------------ */

export function applySiteSettings(doc?: AnyDoc): void {
  if (!doc) return;
  const s = doc as SiteSettings;
  siteSettings.seo = s.seo;
  siteSettings.colors = s.colors;
  siteSettings.sections = s.sections;

  if (s.seo?.title) document.title = s.seo.title;
  const meta = document.querySelector('meta[name="description"]');
  if (s.seo?.description && meta) meta.setAttribute('content', s.seo.description);

  if (s.colors) {
    const root = document.documentElement.style;
    const map: Record<string, keyof NonNullable<SiteSettings['colors']>> = {
      '--c-bg': 'background',
      '--c-ink': 'ink',
      '--c-highlight': 'highlight',
      '--c-soft': 'softAccent',
      '--c-warm': 'warmAccent',
    };
    for (const [cssVar, prop] of Object.entries(map)) {
      const val = s.colors[prop];
      if (val) root.setProperty(cssVar, val);
    }
  }
}

export function isSectionVisible(key: string): boolean {
  if (!siteSettings.sections) return true;
  const item = siteSettings.sections.find((x) => x.key === key);
  return item ? item.visible !== false : true;
}

const PROJECT_SLUG_TO_KEY: Record<string, string> = {
  marketing: 'project.marketing',
  'visual-merchandising': 'project.vm',
  'project-3': 'project.three',
};

/** Whether an individual project card/list entry should render. */
export function isProjectVisible(slug: string): boolean {
  const key = PROJECT_SLUG_TO_KEY[slug];
  return key ? isSectionVisible(key) : true;
}

const HOME_SECTION_DEFAULT_ORDER = ['home.hero', 'home.projects', 'home.internship', 'home.skills', 'home.contact'];

/** Studio-defined render order for homepage sections (falls back to default). */
export function getHomeSectionOrder(): Record<string, number> {
  const from = (arr: string[]) => {
    const map: Record<string, number> = {};
    arr.forEach((k, i) => (map[k] = i));
    return map;
  };
  if (!siteSettings.sections) return from(HOME_SECTION_DEFAULT_ORDER);
  const configured = siteSettings.sections.map((s) => s.key).filter((k) => HOME_SECTION_DEFAULT_ORDER.includes(k));
  const full = [...configured, ...HOME_SECTION_DEFAULT_ORDER.filter((k) => !configured.includes(k))];
  return from(full);
}

/* ------------------------- hydration ----------------------------- */

async function fetchDocs(): Promise<AnyDoc[]> {
  try {
    const result = await sanityClient.fetch<AnyDoc[]>(QUERY, { types: Object.keys(DOC_TO_KEY).concat('siteSettings') });
    return Array.isArray(result) ? result : [];
  } catch {
    return [];
  }
}

export async function hydrateFromSanity(): Promise<boolean> {
  if (!hasSanity) return false;
  const docs = await fetchDocs();
  for (const doc of docs) {
    const cleaned = denormalize(doc);
    if (doc._type === 'siteSettings') {
      applySiteSettings(cleaned as SiteSettings);
      continue;
    }
    const key = DOC_TO_KEY[doc._type];
    if (!key) continue;
    const target = (portfolioData as AnyDoc)[key];
    if (doc._type === 'projectsSummary' && Array.isArray(cleaned.items)) {
      (portfolioData as AnyDoc).selectedProjects = genericCopy(cleaned.items);
      continue;
    }
    if (isPlainObject(cleaned) && isPlainObject(target)) {
      deepMerge(target, cleaned);
    }
  }
  return true;
}