import { defineType, defineField } from 'sanity';

export const projectThree = defineType({
  name: 'projectThree',
  title: 'Project 3 — Athleisure Start-Up',
  type: 'document',
  fields: [
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'object',
      fields: [
        { name: 'pageLabel', title: 'Page Label', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'conceptSubtitle', title: 'Concept Subtitle', type: 'string' },
        { name: 'bottomStatement', title: 'Bottom Statement', type: 'string' },
        { name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } },

        {
          name: 'gallery',
          title: 'Gallery',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
                { name: 'alt', title: 'Alt Text', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'page2SurveyInsights',
      title: 'Page 2 — From an Observation to an Opportunity',
      type: 'object',
      fields: [
        { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 },
        {
          name: 'quadrants',
          title: 'Quadrants',
          type: 'array',
          of: [{ type: 'p3Quadrant' }],
        },
      ],
    }),

    defineField({
      name: 'page3DesignAndMaterial',
      title: 'Page 3 — Design, Material & Prototype',
      type: 'object',
      fields: [
        {
          name: 'design',
          title: 'Design',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'image', title: 'Flat Drawing', type: 'image', options: { hotspot: true } },
            { name: 'points', title: 'Points', type: 'array', of: [{ type: 'string' }] },
          ],
        },
        {
          name: 'material',
          title: 'Material',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'image', title: 'Material Specification', type: 'image', options: { hotspot: true } },
            {
              name: 'lycra',
              title: 'Lycra (Top)',
              type: 'object',
              fields: [
                { name: 'name', title: 'Name', type: 'string' },
                { name: 'attributes', title: 'Attributes', type: 'string' },
              ],
            },
            {
              name: 'terryCotton',
              title: 'Terry Cotton (Trousers)',
              type: 'object',
              fields: [
                { name: 'name', title: 'Name', type: 'string' },
                { name: 'attributes', title: 'Attributes', type: 'string' },
              ],
            },
            { name: 'colorNote', title: 'Color Note', type: 'string' },
          ],
        },
        {
          name: 'prototype',
          title: 'Prototype',
          type: 'object',
          fields: [
            { name: 'badge', title: 'Badge', type: 'string' },
            { name: 'image', title: 'Physical MVP', type: 'image', options: { hotspot: true } },
            { name: 'tagline', title: 'Tagline', type: 'string' },
            { name: 'coreProposition', title: 'Core Proposition', type: 'string' },
          ],
        },
      ],
    }),

    defineField({
      name: 'page4FeedbackAndIteration',
      title: 'Page 4 — Feedback → Iteration → Impact',
      type: 'object',
      fields: [
        { name: 'whatIHeard', title: 'What I Heard', type: 'array', of: [{ type: 'string' }] },
        {
          name: 'whatThisTaughtMe',
          title: 'What This Taught Me',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'headline', title: 'Headline', type: 'string' },
                { name: 'detail', title: 'Detail', type: 'text', rows: 2 },
              ],
            },
          ],
        },
        {
          name: 'feedbackLoop',
          title: 'Feedback Loop',
          type: 'object',
          fields: [
            { name: 'feedback', title: 'Feedback', type: 'string' },
            { name: 'iteration', title: 'Iteration', type: 'string' },
            { name: 'impact', title: 'Impact', type: 'string' },
          ],
        },
      ],
    }),
  ],
});