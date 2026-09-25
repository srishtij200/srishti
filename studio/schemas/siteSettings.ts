import { defineType, defineField } from 'sanity';

const SEO_TITLE_MIN = 30;
const SEO_TITLE_MAX = 60;
const SEO_DESCRIPTION_MIN = 70;
const SEO_DESCRIPTION_MAX = 160;

const scene = () => ({
  name: 'visible',
  title: 'Visible',
  type: 'boolean',
  initialValue: true,
});

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO & Browser Tab',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Page Title',
          type: 'string',
          description: 'Default title for the homepage. Internal routes use their own SEO titles.',
          validation: (rule) =>
            rule
              .required()
              .min(SEO_TITLE_MIN)
              .max(SEO_TITLE_MAX)
              .warning(
                `Use ${SEO_TITLE_MIN}–${SEO_TITLE_MAX} characters so search results do not truncate the title.`
              ),
        },
        {
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Default homepage description for search and social previews.',
          validation: (rule) =>
            rule
              .required()
              .min(SEO_DESCRIPTION_MIN)
              .max(SEO_DESCRIPTION_MAX)
              .warning(
                `Use ${SEO_DESCRIPTION_MIN}–${SEO_DESCRIPTION_MAX} characters to balance relevance and SERP display.`
              ),
        },
      ],
    }),
    defineField({
      name: 'colors',
      title: 'Brand Colors (design tokens)',
      description: 'These colors power the whole site. Change one and every matching element updates. Only these four fills are allowed for backgrounds/accents (text ink is separate).',
      type: 'object',
      fields: [
        { name: 'background', title: 'Background (Cream Beige)', type: 'string', initialValue: '#F6E7D3' },
        { name: 'ink', title: 'Ink / Text', type: 'string', initialValue: '#2A2E28' },
        { name: 'highlight', title: 'Highlight (Sage Green)', type: 'string', initialValue: '#A9B5A0' },
        { name: 'softAccent', title: 'Soft Accent (Dusty Blue)', type: 'string', initialValue: '#B7CDE2' },
        { name: 'warmAccent', title: 'Warm Accent (Dusty Rose)', type: 'string', initialValue: '#C9A0A4' },
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Section Visibility',
      description: 'Toggle any part of the site on or off. Turn a switch off and that section disappears.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'key', title: 'Key', type: 'string', hidden: true },
            { name: 'label', title: 'Section', type: 'string', readOnly: true },
            scene(),
          ],
        },
      ],
    }),
  ],
});