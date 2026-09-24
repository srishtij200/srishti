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
        {
          name: 'showcase',
          title: 'Page 1 — Social Media Showcase',
          type: 'object',
          fields: [
            { name: 'headerImage', title: 'Header Image', type: 'image', options: { hotspot: true } },
            { name: 'reelImage', title: 'Reel Still', type: 'image', options: { hotspot: true } },
            { name: 'reelOverlay', title: 'Reel Overlay Text', type: 'string' },
            {
              name: 'tiles',
              title: 'Feed Tiles',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
                    { name: 'overlay', title: 'Overlay Text', type: 'string' },
                    { name: 'brand', title: 'Brand Text', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
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
        {
          name: 'showcase',
          title: 'Page 2 — E-Commerce Showcase',
          type: 'object',
          fields: [
            { name: 'heroImage', title: 'Website Hero Banner', type: 'image', options: { hotspot: true } },
            { name: 'siteLogo', title: 'Site Logo Text', type: 'string' },
            { name: 'siteNav', title: 'Site Navigation', type: 'array', of: [{ type: 'string' }] },
            { name: 'heroHeadline', title: 'Hero Headline', type: 'text', rows: 2 },
            { name: 'heroCta', title: 'Hero CTA', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 4 },
            { name: 'uploadsTitle', title: 'Uploads Card Title', type: 'string' },
            { name: 'uploadsImage', title: 'Uploads Screenshot', type: 'image', options: { hotspot: true } },
            {
              name: 'uploads',
              title: 'Product Upload Rows',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', title: 'Product Name', type: 'string' },
                    { name: 'status', title: 'Status', type: 'string' },
                    { name: 'image', title: 'Thumbnail', type: 'image', options: { hotspot: true } },
                  ],
                },
              ],
            },
            {
              name: 'detail',
              title: 'Product Detail Card',
              type: 'object',
              fields: [
                { name: 'image', title: 'Detail Screenshot', type: 'image', options: { hotspot: true } },
                { name: 'name', title: 'Product Name', type: 'string' },
                { name: 'price', title: 'Price', type: 'string' },
                { name: 'desc', title: 'Description', type: 'text', rows: 3 },
                { name: 'cta', title: 'Button Label', type: 'string' },
                { name: 'tagsLabel', title: 'Tags Label', type: 'string' },
                { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
              ],
            },
            { name: 'catalogueTitle', title: 'Catalogue Card Title', type: 'string' },
            {
              name: 'catalogue',
              title: 'Catalogue Products',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
                    { name: 'name', title: 'Product Name', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
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