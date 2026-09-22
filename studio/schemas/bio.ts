import { defineType, defineField } from 'sanity';

export const bio = defineType({
  name: 'bio',
  title: 'Home — Hero & About',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'degree', title: 'Degree', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'statement', title: 'Statement', type: 'text', rows: 3 }),
    defineField({ name: 'secondaryStatement', title: 'Secondary Statement', type: 'text', rows: 4 }),
    defineField({
      name: 'specializations',
      title: 'Specializations',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});