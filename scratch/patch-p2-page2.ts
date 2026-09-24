import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

/**
 * One-off content patch — Project 2 (Cover Story VM) Page 2.
 *   • investigationTitle → "KEY AREAS OF INVESTIGATION"
 *   • conceptFlowTitle    → "CONCEPTUAL JOURNEY"
 *   • designInsightTitle  → "DESIGN INSIGHT"
 *   • conceptSummary      → drop leading "I" ("Reimagined a blooming garden …")
 *   • ui.projectVM: briefSectionHeader + designInsightLabel
 *
 *   npx tsx scratch/patch-p2-page2.ts --dry
 *   npx tsx scratch/patch-p2-page2.ts
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
  const doc = await client.fetch<Record<string, any> | null>(
    `*[_type=='projectVM'][0]{
       _id,
       "inv": page2Brief.investigationTitle,
       "flow": page2Brief.conceptFlowTitle,
       "sum": page2Brief.conceptSummary,
       "di": page2Brief.designInsightTitle
     }`,
  );
  if (!doc?._id) {
    console.error('projectVM document not found — aborting.');
    process.exit(1);
  }
  console.log('Current:', JSON.stringify({ inv: doc.inv, flow: doc.flow, sum: doc.sum, di: doc.di }));

  const uiDoc = await client.fetch<Record<string, any> | null>(
    `*[_type=='ui'][0]{_id, "brief": projectVM.briefSectionHeader, "di": projectVM.designInsightLabel}`,
  );
  if (!uiDoc?._id) {
    console.error('ui document not found — aborting.');
    process.exit(1);
  }
  console.log('Current ui:', JSON.stringify({ brief: uiDoc.brief, di: uiDoc.di }));

  const pmEntries: Record<string, unknown> = {
    'page2Brief.investigationTitle': 'KEY AREAS OF INVESTIGATION',
    'page2Brief.conceptFlowTitle': 'CONCEPTUAL JOURNEY',
    'page2Brief.designInsightTitle': 'DESIGN INSIGHT',
    'page2Brief.conceptSummary':
      'Reimagined a blooming garden through a futuristic lens, combining delicate florals with holographic and iridescent elements.',
  };
  const uiEntries: Record<string, unknown> = {
    'projectVM.briefSectionHeader': 'KEY AREAS OF INVESTIGATION',
    'projectVM.designInsightLabel': 'DESIGN INSIGHT',
  };

  for (const [path, value] of Object.entries(pmEntries)) console.log(`  projectVM: set ${path}\n      -> ${value}`);
  for (const [path, value] of Object.entries(uiEntries)) console.log(`  ui: set ${path}\n      -> ${value}`);

  if (DRY) {
    console.log('\nDry run — nothing written.');
    return;
  }

  await client.patch(doc._id).set(pmEntries).commit();
  await client.patch(uiDoc._id).set(uiEntries).commit();
  console.log('\nPatched projectVM + ui.');

  const after = await client.fetch(
    `{
      "pm": *[_type=='projectVM'][0].page2Brief{investigationTitle, conceptFlowTitle, designInsightTitle, conceptSummary},
      "uiBrief": *[_type=='ui'][0].projectVM.briefSectionHeader,
      "uiDI": *[_type=='ui'][0].projectVM.designInsightLabel
    }`,
  );
  console.log(JSON.stringify(after, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
