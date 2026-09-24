import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import fs from 'node:fs';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
dotenv.config();
const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN;
const client = createClient({ projectId: projectId!, dataset, apiVersion: '2024-01-01', token, useCdn: false });
async function main() {
  const buf = fs.readFileSync('public/portfolio-assets/p1-kaze.png');
  const a = await client.assets.upload('image', buf, { filename: 'p1-kaze.png', contentType: 'image/png' });
  console.log('asset', (a as any)._id, (a as any).url);
  await client.patch('projectMarketing').set({ 'page2Concept.photos[1].image': { _type: 'image', asset: { _type: 'reference', _ref: (a as any)._id } } }).commit();
  console.log('patched page2Concept.photos[1]');
}
main().catch((e) => { console.error(e); process.exit(1); });
