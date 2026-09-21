import { defineType, defineField } from 'sanity';

// Shared object type: a quadrant inside Project 3's page 2 grid.
export const p3Quadrant = defineType({
  name: 'p3Quadrant',
  title: 'Quadrant',
  type: 'object',
  fields: [
    defineField({ name: 'number', title: 'Number', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'text', title: 'Text', type: 'text', rows: 3 }),
    defineField({
      name: 'images',
      title: 'Observation Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({ name: 'scriptCallout', title: 'Script Callout', type: 'string' }),
    defineField({ name: 'lead', title: 'Lead', type: 'text', rows: 3 }),
    defineField({
      name: 'pillars',
      title: 'Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'points', title: 'Points', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    }),
    defineField({
      name: 'frameworkBadges',
      title: 'Framework Badges',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'notepadImage', title: 'Notepad Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'notepadCaption', title: 'Notepad Caption', type: 'string' }),
    defineField({ name: 'frameworkSentence', title: 'Framework Sentence', type: 'string' }),
    defineField({
      name: 'flow',
      title: 'Flow',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', title: 'Step', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text', rows: 2 },
            { name: 'isHighlight', title: 'Highlight', type: 'boolean' },
          ],
        },
      ],
    }),
    defineField({ name: 'natureTitle', title: 'Nature Title', type: 'string' }),
    defineField({
      name: 'naturePillars',
      title: 'Nature Pillars',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'natureImage', title: 'Nature Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'natureCaption', title: 'Nature Caption', type: 'string' }),
    defineField({ name: 'takeaway', title: 'Takeaway', type: 'string' }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'subtitle', title: 'Subtitle', type: 'string' },
            { name: 'icon', title: 'Icon', type: 'string' },
          ],
        },
      ],
    }),
    defineField({ name: 'quote', title: 'Quote', type: 'string' }),
    defineField({ name: 'tag', title: 'Tag', type: 'string' }),
    defineField({ name: 'bottlesImage', title: 'Bottles Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bottlesCaption', title: 'Bottles Caption', type: 'string' }),
  ],
});