import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
const c = createClient({ projectId: process.env.VITE_SANITY_PROJECT_ID!, dataset: process.env.VITE_SANITY_DATASET || 'production', apiVersion: '2024-01-01', useCdn: false });
const doc = await c.fetch(`*[_type=='projectThree'][0]{"p4": page4FeedbackAndIteration{whatIHeard, "taught": whatThisTaughtMe}, "label": page3DesignAndMaterial.design.title}`);
console.log(JSON.stringify(doc, null, 2));
const ui = await c.fetch(`*[_type=='ui'][0].projectThree{p3PageLabel, p4HeardTitle, p4TaughtTitle, p4Title}`);
console.log('ui:', JSON.stringify(ui, null, 2));
