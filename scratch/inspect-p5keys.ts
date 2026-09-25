import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
const c = createClient({ projectId: process.env.VITE_SANITY_PROJECT_ID!, dataset: process.env.VITE_SANITY_DATASET ?? 'production', apiVersion: '2024-01-01', useCdn: false, token: process.env.SANITY_TOKEN });
const d = await c.fetch(`{"learnings": *[_type=='projectMarketing'][0].page5IdeaToImpact.learnings[]{_key, num, name, detail}, "uiId": *[_type=='ui'][0]._id, "pmId": *[_type=='projectMarketing'][0]._id, "p4": *[_type=='projectMarketing'][0].page4ConceptToConsumer}`);
console.log(JSON.stringify(d, null, 2));
