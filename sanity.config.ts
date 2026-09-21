import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './studio/schemas';

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'gkxty4f9';
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'Srishti Jain — Portfolio Studio',
  projectId,
  dataset,
  basePath: '/',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});