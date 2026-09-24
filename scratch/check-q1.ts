import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
const c = createClient({ projectId: process.env.VITE_SANITY_PROJECT_ID!, dataset: process.env.VITE_SANITY_DATASET || 'production', apiVersion: '2024-01-01', useCdn: false });
const r = await c.fetch(`*[_type=='projectThree'][0].page2SurveyInsights.quadrants[0]{images[]{label, "img": image.asset._ref}}`);
console.log(JSON.stringify(r, null, 2));
