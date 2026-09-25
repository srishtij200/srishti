import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
const c = createClient({ projectId: process.env.VITE_SANITY_PROJECT_ID!, dataset: process.env.VITE_SANITY_DATASET ?? 'production', apiVersion: '2024-01-01', useCdn: false, token: process.env.SANITY_TOKEN });
const d = await c.fetch(`*[_type=='projectMarketing'][0]{"p4": page4ConceptToConsumer, "p5": page5IdeaToImpact, "ui": *[_type=="ui"][0].projectMarketing}`);
console.log(JSON.stringify(d, null, 2));
