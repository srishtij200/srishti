import { defineType, defineField } from 'sanity';

export const projectMarketing = defineType({
  name: 'projectMarketing',
  title: 'Project 1 — UNIQLO Marketing',
  type: 'document',
  fields: [
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        { name: 'brand', title: 'Brand', type: 'string' },
        { name: 'discipline', title: 'Discipline', type: 'string' },
        { name: 'timeline', title: 'Timeline', type: 'string' },
      ],
    }),
    defineField({
      name: 'page1And2',
      title: 'Page 1 & 2',
      type: 'object',
      fields: [
        { name: 'context', title: 'Context', type: 'text', rows: 3 },
        { name: 'brief', title: 'Brief', type: 'text', rows: 3 },
      ],
    }),

    // PAGE 2: FROM BRIEF TO CONCEPT
    defineField({
      name: 'page2BriefToConcept',
      title: 'Page 2 — Category Expansion',
      type: 'object',
      fields: [
        { name: 'pageLabel', title: 'Page Label', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        {
          name: 'quadrant01',
          title: 'Quadrant 01 — Project Brief',
          type: 'object',
          fields: [
            { name: 'number', title: 'Number', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'text', title: 'Text', type: 'text', rows: 3 },

            { name: 'scriptCallout', title: 'Script Callout', type: 'string' },
          ],
        },
        {
          name: 'quadrant02',
          title: 'Quadrant 02 — Research & Investigation',
          type: 'object',
          fields: [
            { name: 'number', title: 'Number', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'lead', title: 'Lead', type: 'text', rows: 3 },
            {
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
            },
            { name: 'frameworkSentence', title: 'Framework Sentence', type: 'text', rows: 3 },
            { name: 'frameworkBadges', title: 'Framework Badges', type: 'array', of: [{ type: 'string' }] },

          ],
        },
        {
          name: 'quadrant03',
          title: 'Quadrant 03 — How I Came Up With the Concept',
          type: 'object',
          fields: [
            { name: 'number', title: 'Number', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'takeaway', title: 'Takeaway', type: 'text', rows: 3 },
            { name: 'natureTitle', title: 'Nature Title', type: 'string' },
            { name: 'naturePillars', title: 'Nature Pillars', type: 'array', of: [{ type: 'string' }] },

            {
              name: 'variants',
              title: 'Fragrance Variants',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', title: 'Name', type: 'string' },
                    { name: 'label', title: 'Label', type: 'string' },
                    { name: 'color', title: 'Color', type: 'string' },
                    { name: 'dotColor', title: 'Dot Color', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'quadrant04',
          title: 'Quadrant 04 — Skills I Applied',
          type: 'object',
          fields: [
            { name: 'number', title: 'Number', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'lead', title: 'Lead', type: 'text', rows: 3 },
            {
              name: 'skills',
              title: 'Skills',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', title: 'Title', type: 'string' },
                    { name: 'subtitle', title: 'Subtitle', type: 'string' },
                  ],
                },
              ],
            },
            { name: 'quote', title: 'Quote', type: 'string' },
            { name: 'tag', title: 'Tag', type: 'string' },

          ],
        },
      ],
    }),

    defineField({
      name: 'page3DesignDecisions',
      title: 'Page 3 — Core Rationale & Packaging',
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

    defineField({
      name: 'page4Strategy',
      title: 'Page 4 — Strategy (STP / 7Ps / BCG)',
      type: 'object',
      fields: [
        { name: 'stp', title: 'STP', type: 'text', rows: 4 },
        { name: 'sevenPs', title: '7Ps', type: 'text', rows: 4 },
        { name: 'bcg', title: 'BCG', type: 'text', rows: 4 },
      ],
    }),

    defineField({
      name: 'page4ConceptToConsumer',
      title: 'Page 4 — Test, Process & Insights',
      type: 'object',
      fields: [
        { name: 'pageLabel', title: 'Page Label', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        {
          name: 'testPhotos',
          title: 'Test Photos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [

                { name: 'caption', title: 'Caption', type: 'string' },
                { name: 'desc', title: 'Description', type: 'text', rows: 2 },
              ],
            },
          ],
        },
        {
          name: 'processSteps',
          title: 'Process Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
              ],
            },
          ],
        },
        { name: 'processDescription', title: 'Process Description', type: 'text', rows: 3 },
        {
          name: 'keyInsights',
          title: 'Key Insights',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'desc', title: 'Description', type: 'text', rows: 2 },
                { name: 'bg', title: 'Background Color', type: 'string' },
                { name: 'border', title: 'Border Color', type: 'string' },
              ],
            },
          ],
        },
        { name: 'bottomStatement', title: 'Bottom Statement', type: 'string' },
        { name: 'pagePagination', title: 'Page Pagination', type: 'string' },
      ],
    }),

    defineField({
      name: 'page5IdeaToImpact',
      title: 'Page 5 — Commercial Pipeline',
      type: 'object',
      fields: [
        { name: 'pageLabel', title: 'Page Label', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subheadline', title: 'Subheadline', type: 'string' },
        {
          name: 'learnings',
          title: 'Learnings',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'num', title: 'Number', type: 'string' },
                { name: 'name', title: 'Name', type: 'string' },
                { name: 'detail', title: 'Detail', type: 'text', rows: 3 },

              ],
            },
          ],
        },
        {
          name: 'journeyInAction',
          title: 'Journey in Action',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
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
          name: 'skillsDeveloped',
          title: 'Skills Developed',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Name', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
  ],
});