import { defineType, defineField } from 'sanity';

export const projectsSummary = defineType({
  name: 'projectsSummary',
  title: 'Projects Overview Cards',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Selected Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'ID', type: 'string' },
            { name: 'slug', title: 'Slug (route)', type: 'string', description: 'e.g. marketing, visual-merchandising, project-3' },
            { name: 'number', title: 'Number', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'category', title: 'Category', type: 'string' },
            { name: 'discipline', title: 'Discipline', type: 'string' },
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'tagline', title: 'Tagline', type: 'string' },
            { name: 'accentColor', title: 'Accent Color', type: 'string' },
            { name: 'rotation', title: 'Rotation', type: 'string' },
            {
              name: 'image',
              title: 'Cover Image',
              type: 'image',
              options: { hotspot: true },
            },
            { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
            { name: 'summary', title: 'Summary', type: 'text', rows: 3 },
            { name: 'brief', title: 'Brief', type: 'text', rows: 3 },
            { name: 'research', title: 'Research', type: 'text', rows: 3 },
            { name: 'contribution', title: 'Contribution', type: 'text', rows: 3 },
            { name: 'keyLearnings', title: 'Key Learnings', type: 'text', rows: 3 },
          ],
        },
      ],
    }),
  ],
});