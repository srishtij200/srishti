import { defineType, defineField } from 'sanity';

const whatIWorkedOn = {
  name: 'whatIWorkedOn',
  title: 'What I Worked On',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        { name: 'id', title: 'Number', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'desc', title: 'Description', type: 'text', rows: 3 },
      ],
    },
  ],
};

const skillsApplied = {
  name: 'skillsApplied',
  title: 'Skills Applied',
  type: 'array',
  of: [{ type: 'string' }],
};

export const internship = defineType({
  name: 'internship',
  title: 'Internship — Aadiya Jewels',
  type: 'document',
  fields: [
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'overview', title: 'Overview', type: 'text', rows: 3 }),
    defineField({
      name: 'page1SocialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'intro', title: 'Intro', type: 'text', rows: 3 },
        whatIWorkedOn,
        skillsApplied,
      ],
    }),
    defineField({
      name: 'page2Ecommerce',
      title: 'E-Commerce & My Learning',
      type: 'object',
      fields: [
        { name: 'intro', title: 'Intro', type: 'text', rows: 3 },
        whatIWorkedOn,
        skillsApplied,
      ],
    }),
    defineField({
      name: 'learningOutcomes',
      title: 'Learning Outcomes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Number', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text', rows: 3 },
          ],
        },
      ],
    }),
  ],
});