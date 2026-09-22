import { defineType, defineField } from 'sanity';

export const bio = defineType({
  name: 'bio',
  title: 'Home — Hero & About',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'statement', title: 'Statement', type: 'text', rows: 3 }),
  ],
});