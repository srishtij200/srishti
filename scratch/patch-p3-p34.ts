import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
const projectId = process.env.VITE_SANITY_PROJECT_ID!;
const token = process.env.SANITY_TOKEN;
if (!projectId || !token) { console.error('missing creds'); process.exit(1); }
const c = createClient({ projectId, dataset: process.env.VITE_SANITY_DATASET || 'production', apiVersion: '2024-01-01', token, useCdn: false });
const DRY = process.argv.includes('--dry');
const ui = await c.fetch(`*[_type=='ui'][0]{_id, "p3": projectThree.p3PageLabel, "heard": projectThree.p4HeardTitle, "taught": projectThree.p4TaughtTitle}`);
if (!ui?._id) { console.error('no ui doc'); process.exit(1); }
console.log('current:', JSON.stringify(ui));
const entries = {
  'projectThree.p3PageLabel': '',
  'projectThree.p3SectionTitle': 'FROM IDEA TO MVP',
  'projectThree.p3SectionSub': 'Turning insight into something real',
  'projectThree.p4HeardTitle': 'CONSUMER INSIGHTS',
  'projectThree.p4TaughtTitle': 'KEY LEARNINGS',
};
for (const [k, v] of Object.entries(entries)) console.log(`  set ${k} -> ${JSON.stringify(v)}`);
if (DRY) { console.log('dry run'); process.exit(0); }
await c.patch(ui._id).set(entries).commit();
const after = await c.fetch(`*[_type=='ui'][0].projectThree{p3PageLabel, p3SectionTitle, p3SectionSub, p4HeardTitle, p4TaughtTitle}`);
console.log('after:', JSON.stringify(after, null, 2));
