import { defineType, defineField } from 'sanity';

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'handle', title: 'Handle', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
        },
      ],
    }),
  ],
});