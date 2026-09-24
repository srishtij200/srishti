import { defineType, defineField } from 'sanity';

export const projectVM = defineType({
  name: 'projectVM',
  title: 'Project 2 — Cover Story VM',
  type: 'document',
  fields: [
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'brand', title: 'Brand', type: 'string' },
        { name: 'season', title: 'Season', type: 'string' },
        { name: 'conceptName', title: 'Concept Name', type: 'string' },
        { name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } },
      ],
    }),

    defineField({
      name: 'page2Brief',
      title: 'Page 2 — From Insight to Concept',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        { name: 'briefTitle', title: 'Brief Title', type: 'string' },
        { name: 'briefText', title: 'Brief Text', type: 'text', rows: 3 },
        {
          name: 'whatIInvestigated',
          title: 'What I Investigated',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'pillar', title: 'Pillar', type: 'string' },
                { name: 'points', title: 'Points', type: 'array', of: [{ type: 'string' }] },
                { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
              ],
            },
          ],
        },
        {
          name: 'howIReachedTheConcept',
          title: 'How I Reached the Concept',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'step', title: 'Step', type: 'string' },
                { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
                { name: 'isHighlight', title: 'Highlight', type: 'boolean' },
              ],
            },
          ],
        },
        { name: 'conceptFlowTitle', title: 'Concept Flow Title', type: 'string' },
        { name: 'conceptSummary', title: 'Concept Summary', type: 'text', rows: 3 },
        { name: 'designInsight', title: 'Design Insight', type: 'text', rows: 3 },
        { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
        {
          name: 'supportingCollage',
          title: 'Supporting Collage',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
                { name: 'alt', title: 'Alt Text', type: 'string' },
              ],
            },
          ],
        },
        { name: 'designInsightBg', title: 'Design Insight Background', type: 'image', options: { hotspot: true } },
      ],
    }),

    defineField({
      name: 'page3Boards',
      title: 'Page 3 — The Visual Language',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        {
          name: 'moodBoard',
          title: 'Mood Board',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'image', title: 'Mood Board Image', type: 'image', options: { hotspot: true } },
            { name: 'tagline', title: 'Tagline', type: 'string' },
            { name: 'content', title: 'Content', type: 'text', rows: 2 },
            { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] },
            {
              name: 'themes',
              title: 'Themes',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', title: 'Name', type: 'string' },
                    { name: 'desc', title: 'Description', type: 'text', rows: 2 },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'colourBoard',
          title: 'Colour Board',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'image', title: 'Colour Board Image', type: 'image', options: { hotspot: true } },
            { name: 'content', title: 'Content', type: 'text', rows: 2 },
            { name: 'moodTag', title: 'Mood Tag', type: 'string' },
          ],
        },
      ],
    }),

    defineField({
      name: 'page4BehindTheDisplay',
      title: 'Page 4 — Behind the Display',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'imageIndex', title: 'Image Index', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text', rows: 2 },
          ],
        },
      ],
    }),

    defineField({
      name: 'page5SkillsAndPrinciples',
      title: 'Page 5 — Ideation → Installation',
      type: 'object',
      fields: [
        { name: 'pageLabel', title: 'Page Label', type: 'string' },
        { name: 'headerTag', title: 'Header Tag', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subheadline', title: 'Subheadline', type: 'string' },
        {
          name: 'quoteBanner',
          title: 'Quote Banner',
          type: 'object',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
            { name: 'image', title: 'Banner Image', type: 'image', options: { hotspot: true } },
            { name: 'caption', title: 'Caption', type: 'string' },
            { name: 'accent', title: 'Accent', type: 'string' },
          ],
        },
        {
          name: 'processInAction',
          title: 'Process in Action',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'intro', title: 'Intro', type: 'text', rows: 3 },
            {
              name: 'steps',
              title: 'Steps',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', title: 'Title', type: 'string' },

                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'skillsApplied',
          title: 'Skills Applied',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'desc', title: 'Description', type: 'text', rows: 2 },
                { name: 'icon', title: 'Icon', type: 'string' },
              ],
            },
          ],
        },
        {
          name: 'vmPrinciplesApplied',
          title: 'VM Principles Applied',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'number', title: 'Number', type: 'string' },
                { name: 'name', title: 'Name', type: 'string' },
                { name: 'desc', title: 'Description', type: 'text', rows: 2 },
                { name: 'icon', title: 'Icon', type: 'string' },
              ],
            },
          ],
        },
        { name: 'whatILearned', title: 'What I Learned', type: 'text', rows: 6 },
      ],
    }),
  ],
});