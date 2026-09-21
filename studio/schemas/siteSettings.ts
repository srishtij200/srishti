import { defineType, defineField } from 'sanity';

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
        { name: 'title', title: 'Page Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text', rows: 2 },
      ],
    }),
    defineField({
      name: 'colors',
      title: 'Brand Colors (design tokens)',
      description: 'These five colors power the whole site. Change one and every matching element updates.',
      type: 'object',
      fields: [
        { name: 'background', title: 'Background', type: 'string', initialValue: '#F5F5ED' },
        { name: 'ink', title: 'Ink / Text', type: 'string', initialValue: '#182018' },
        { name: 'highlight', title: 'Highlight (green)', type: 'string', initialValue: '#C9FF8C' },
        { name: 'softAccent', title: 'Soft Accent (blue)', type: 'string', initialValue: '#AFC8FF' },
        { name: 'warmAccent', title: 'Warm Accent (pink)', type: 'string', initialValue: '#F4B6D4' },
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