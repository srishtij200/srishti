import { defineConfig } from 'sanity';
import { structureTool, type StructureResolver } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './studio/schemas';

const SITE_SETTINGS_ID = 'siteSettings';

const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio Studio')
    .items([
      S.listItem()
        .title('Site Settings')
        .id(SITE_SETTINGS_ID)
        .child(S.document().schemaType('siteSettings').documentId(SITE_SETTINGS_ID)),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'siteSettings'
      ),
    ]);

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'gkxty4f9';
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'Srishti Jain — Portfolio Studio',
  projectId,
  dataset,
  basePath: '/',
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
});