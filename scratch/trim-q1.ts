import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
const c = createClient({ projectId: process.env.VITE_SANITY_PROJECT_ID!, dataset: process.env.VITE_SANITY_DATASET || 'production', apiVersion: '2024-01-01', token: process.env.SANITY_TOKEN, useCdn: false });
const doc = await c.fetch(`*[_type=='projectThree'][0]{_id, "imgs": page2SurveyInsights.quadrants[0].images[]{_key, label, image}}`);
if (!doc?._id) { console.error('no doc'); process.exit(1); }
const keep = (doc.imgs ?? []).filter((i: any) => i.image);
const dropped = (doc.imgs ?? []).filter((i: any) => !i.image).map((i: any) => i.label);
console.log('keeping:', keep.map((k: any) => k.label), '| dropping:', dropped);
if (process.argv.includes('--dry')) process.exit(0);
await c.patch(doc._id).set({ 'page2SurveyInsights.quadrants[0].images': keep }).commit();
const after = await c.fetch(`*[_type=='projectThree'][0].page2SurveyInsights.quadrants[0].images[]{label, "img": image.asset._ref}`);
console.log(JSON.stringify(after, null, 2));
