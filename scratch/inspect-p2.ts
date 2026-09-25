import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
const c = createClient({ projectId: process.env.VITE_SANITY_PROJECT_ID!, dataset: process.env.VITE_SANITY_DATASET ?? 'production', apiVersion: '2024-01-01', useCdn: false, token: process.env.SANITY_TOKEN });
const d = await c.fetch(`*[_type=='projectMarketing'][0]{"q03": page2BriefToConcept.quadrant03, "flow": *[_type=="ui"][0].projectMarketing.p2Flow}`);
console.log(JSON.stringify(d, null, 2));
