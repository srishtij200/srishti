import { defineType, defineField } from 'sanity';

export const skills = defineType({
  name: 'skills',
  title: 'Skills Matrix',
  type: 'document',
  fields: [
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'tag', title: 'Tag', type: 'string' },
            { name: 'color', title: 'Color', type: 'string' },
            { name: 'skills', title: 'Skills', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    }),
  ],
});