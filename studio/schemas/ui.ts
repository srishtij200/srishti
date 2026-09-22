import { defineType, defineField } from 'sanity';

export const ui = defineType({
  name: 'ui',
  title: 'UI Text',
  type: 'document',
  fields: [
    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'object',
      fields: [
        {
          name: 'items',
          title: 'Nav Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'to', title: 'Route', type: 'string' },
                { name: 'label', title: 'Label', type: 'string' },
              ],
            },
          ],
        },
        { name: 'footerCopyrightYear', title: 'Footer Copyright Year', type: 'string' },
      ],
    }),

    defineField({
      name: 'home',
      title: 'Home',
      type: 'object',
      fields: [
        defineField({
          name: 'hero',
          title: 'Hero / About',
          type: 'object',
          fields: [
            { name: 'headlineFirst', title: 'Headline (First Part)', type: 'string' },
            { name: 'headlineSecond', title: 'Headline (Second Part)', type: 'string' },
            {
              name: 'paragraphs',
              title: 'Bio Paragraphs',
              type: 'array',
              of: [{ type: 'text', rows: 3 }],
            },
            { name: 'signature', title: 'Signature Line', type: 'string' },
            {
              name: 'specializations',
              title: 'Specializations',
              type: 'array',
              of: [{ type: 'string' }],
            },
            { name: 'badge', title: 'Badge', type: 'string' },

            { name: 'imageAlt', title: 'Portrait Alt Text', type: 'string' },
          ],
        }),
        defineField({
          name: 'projects',
          title: 'Selected Projects Section',
          type: 'object',
          fields: [
            { name: 'titleFirst', title: 'Title (First Part)', type: 'string' },
            { name: 'titleSecond', title: 'Title (Second Part)', type: 'string' },
            { name: 'projectPrefix', title: 'Project Number Prefix', type: 'string' },
            {
              name: 'labels',
              title: 'Field Labels',
              type: 'object',
              fields: [
                { name: 'brief', title: 'Brief', type: 'string' },
                { name: 'research', title: 'Research', type: 'string' },
                { name: 'contribution', title: 'Contribution', type: 'string' },
                { name: 'learning', title: 'Learning', type: 'string' },
              ],
            },
            { name: 'readComplete', title: 'Read Link Label', type: 'string' },
            {
              name: 'cardTitles',
              title: 'Card Titles',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'id', title: 'Project ID', type: 'string' },
                    { name: 'title', title: 'Title', type: 'string' },
                  ],
                },
              ],
            },
            {
              name: 'cardCategories',
              title: 'Card Category Overrides',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'id', title: 'Project ID', type: 'string' },
                    { name: 'title', title: 'Title', type: 'string' },
                  ],
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'internship',
          title: 'Internship Callout',
          type: 'object',
          fields: [
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'titleWord', title: 'Title Word', type: 'string' },
          ],
        }),
      ],
    }),

    defineField({
      name: 'about',
      title: 'About Scope',
      type: 'object',
      fields: [
        { name: 'scopeHeader', title: 'Scope Card Header', type: 'string' },
        {
          name: 'scopeItems',
          title: 'Scope Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'desc', title: 'Description', type: 'text', rows: 2 },
              ],
            },
          ],
        },
        { name: 'nextLabel', title: 'Next — Label', type: 'string' },
        { name: 'nextTitle', title: 'Next — Title', type: 'string' },
        { name: 'nextCta', title: 'Next — CTA', type: 'string' },
      ],
    }),

    defineField({
      name: 'contact',
      title: 'Contact Section',
      type: 'object',
      fields: [
        { name: 'availabilityNote', title: 'Availability Note', type: 'string' },
        { name: 'sectionTitleFirst', title: 'Section Title (First Part)', type: 'string' },
        { name: 'sectionTitleSecond', title: 'Section Title (Second Part)', type: 'string' },
      ],
    }),

    defineField({
      name: 'cardPlaceholder',
      title: 'Project Card Placeholder',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
      ],
    }),

    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'object',
      fields: [
        defineField({
          name: 'section',
          title: 'Home Skills Section',
          type: 'object',
          fields: [
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'titleFirst', title: 'Title (First Part)', type: 'string' },
            { name: 'titleSecond', title: 'Title (Second Part)', type: 'string' },
            {
              name: 'categoryDescriptions',
              title: 'Category Descriptions',
              type: 'array',
              of: [{ type: 'text', rows: 2 }],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'internshipExperience',
      title: 'Internship Experience Page',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'sectionSocialTitle', title: 'Social Media Section Title', type: 'string' },
        { name: 'socialIntroTitle', title: 'Social Intro Title', type: 'string' },
        { name: 'introPrefix', title: 'Intro Prefix', type: 'string' },
        { name: 'videosBadge', title: 'Videos Badge', type: 'string' },
        { name: 'videosHeader', title: 'Videos Header', type: 'string' },
        { name: 'reel1Title', title: 'Reel 1 Title', type: 'string' },
        { name: 'reel1Desc', title: 'Reel 1 Description', type: 'text', rows: 2 },
        { name: 'reel2Title', title: 'Reel 2 Title', type: 'string' },
        { name: 'reel2Desc', title: 'Reel 2 Description', type: 'text', rows: 2 },
        { name: 'photoCaption1', title: 'Photo Caption 1', type: 'string' },
        { name: 'photoCaption2', title: 'Photo Caption 2', type: 'string' },
        { name: 'photoAlt1', title: 'Photo Alt 1', type: 'string' },
        { name: 'photoAlt2', title: 'Photo Alt 2', type: 'string' },
        { name: 'workedOnLabel', title: 'What I Worked On Label', type: 'string' },
        { name: 'skillsLabel', title: 'Skills Applied Label', type: 'string' },
        { name: 'sectionEcomTitle', title: 'E-Commerce Section Title', type: 'string' },
        { name: 'ecomIntroTitle', title: 'E-Commerce Intro Title', type: 'string' },
        { name: 'bannersHeader', title: 'Banners Header', type: 'string' },
        { name: 'banner1Title', title: 'Banner 1 Title', type: 'string' },
        { name: 'banner1Desc', title: 'Banner 1 Description', type: 'string' },

        { name: 'banner2Title', title: 'Banner 2 Title', type: 'string' },

        { name: 'banner3Title', title: 'Banner 3 Title', type: 'string' },

        { name: 'learningsLabel', title: 'Learnings Label', type: 'string' },
        { name: 'learningsTitle', title: 'Learnings Title', type: 'string' },
        {
          name: 'learnings',
          title: 'Learnings List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'desc', title: 'Description', type: 'text', rows: 2 },
              ],
            },
          ],
        },
        { name: 'synthesisLabel', title: 'Synthesis Label', type: 'string' },
        { name: 'synthesisTitle', title: 'Synthesis Title', type: 'string' },
        { name: 'nextLabel', title: 'Next — Label', type: 'string' },
        { name: 'nextTitle', title: 'Next — Title', type: 'string' },
        { name: 'nextCta', title: 'Next — CTA', type: 'string' },
      ],
    }),

    defineField({
      name: 'internshipLearnings',
      title: 'Internship Learnings Page',
      type: 'object',
      fields: [
        { name: 'breadcrumbHome', title: 'Breadcrumb — Home', type: 'string' },
        { name: 'breadcrumbInternship', title: 'Breadcrumb — Internship', type: 'string' },
        { name: 'breadcrumbCurrent', title: 'Breadcrumb — Current', type: 'string' },
        { name: 'breadcrumbTag', title: 'Breadcrumb — Tag', type: 'string' },
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'intro', title: 'Intro', type: 'text', rows: 3 },
        { name: 'backLabel', title: 'Back Label', type: 'string' },
        { name: 'outcomePrefix', title: 'Outcome Prefix', type: 'string' },
        { name: 'brandTag', title: 'Brand Tag', type: 'string' },
        { name: 'verifiedLabel', title: 'Verified Label', type: 'string' },
        { name: 'backCta', title: 'Bottom — Back CTA', type: 'string' },
        { name: 'nextCta', title: 'Bottom — Next CTA', type: 'string' },
      ],
    }),

    defineField({
      name: 'projectsOverview',
      title: 'Projects Overview Page',
      type: 'object',
      fields: [
        { name: 'breadcrumbHome', title: 'Breadcrumb — Home', type: 'string' },
        { name: 'breadcrumbCurrent', title: 'Breadcrumb — Current', type: 'string' },
        { name: 'breadcrumbTag', title: 'Breadcrumb — Tag', type: 'string' },
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'intro', title: 'Intro', type: 'text', rows: 3 },
        { name: 'caseStudyPrefix', title: 'Case Study Prefix', type: 'string' },
        { name: 'labelBrief', title: 'Label — Brief', type: 'string' },
        { name: 'labelResearch', title: 'Label — Research', type: 'string' },
        { name: 'labelContribution', title: 'Label — Contribution', type: 'string' },
        { name: 'labelKeyLearnings', title: 'Label — Key Learnings', type: 'string' },
        { name: 'coreFocus', title: 'Core Focus', type: 'string' },
        { name: 'readComplete', title: 'Read Link Label', type: 'string' },
      ],
    }),

    defineField({
      name: 'projectMarketing',
      title: 'Project 1 — Marketing Page',
      type: 'object',
      fields: [
        { name: 'breadcrumbProjects', title: 'Breadcrumb — Projects', type: 'string' },
        { name: 'breadcrumbCurrent', title: 'Breadcrumb — Current', type: 'string' },
        { name: 'breadcrumbTag', title: 'Breadcrumb — Tag', type: 'string' },
        { name: 'coverBadge', title: 'Cover Badge', type: 'string' },
        { name: 'metaBrandLabel', title: 'Meta — Brand Label', type: 'string' },
        { name: 'metaDisciplineLabel', title: 'Meta — Discipline Label', type: 'string' },
        { name: 'metaTimelineLabel', title: 'Meta — Timeline Label', type: 'string' },

        { name: 'contextHeader', title: 'Context Header', type: 'string' },

        { name: 'briefHeader', title: 'Brief Header', type: 'string' },
        { name: 'alignedNote', title: 'Aligned Note', type: 'string' },
        { name: 'p2SlideTag', title: 'Page 2 Slide Tag', type: 'string' },
        { name: 'p2HeaderBrand', title: 'Page 2 Header — Brand', type: 'string' },
        { name: 'p2HeaderSub', title: 'Page 2 Header — Subtitle', type: 'string' },
        defineField({
          name: 'p2Flow',
          title: 'Page 2 Flow Labels',
          type: 'object',
          fields: [
            { name: 'brandChip', title: 'Brand Chip', type: 'string' },
            { name: 'brandName', title: 'Brand Name', type: 'string' },
            { name: 'brandDesc', title: 'Brand Description', type: 'string' },
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'fragranceName', title: 'Fragrance Name', type: 'string' },
            { name: 'fragranceDesc', title: 'Fragrance Description', type: 'string' },
          ],
        }),
        { name: 'p3PageTag', title: 'Page 3 Tag', type: 'string' },
        { name: 'p3Title', title: 'Page 3 Title', type: 'string' },
        { name: 'p3Intro', title: 'Page 3 Intro', type: 'string' },

        { name: 'strategyStpLabel', title: 'Strategy — STP Label', type: 'string' },
        { name: 'strategy7psLabel', title: 'Strategy — 7Ps Label', type: 'string' },
        { name: 'strategyBcgLabel', title: 'Strategy — BCG Label', type: 'string' },
        { name: 'p4TestHeader', title: 'Page 4 — Test Header', type: 'string' },
        { name: 'p4ProcessHeader', title: 'Page 4 — Process Header', type: 'string' },
        { name: 'p4InsightsHeader', title: 'Page 4 — Insights Header', type: 'string' },

        { name: 'p4SynthesisLabel', title: 'Page 4 — Synthesis Label', type: 'string' },
        { name: 'p5HeaderBrand', title: 'Page 5 Header — Brand', type: 'string' },
        { name: 'p5HeaderSub', title: 'Page 5 Header — Subtitle', type: 'string' },
        { name: 'p5Chip', title: 'Page 5 Chip', type: 'string' },
        { name: 'p5PipelineTag', title: 'Page 5 Pipeline Tag', type: 'string' },
        { name: 'p5SkillsHeader', title: 'Page 5 Skills Header', type: 'string' },

        { name: 'p5Capstone', title: 'Page 5 Capstone', type: 'string' },
        { name: 'footerAll', title: 'Footer — All Projects', type: 'string' },
        { name: 'footerNext', title: 'Footer — Next', type: 'string' },
      ],
    }),

    defineField({
      name: 'projectVM',
      title: 'Project 2 — Visual Merchandising Page',
      type: 'object',
      fields: [
        { name: 'breadcrumbProjects', title: 'Breadcrumb — Projects', type: 'string' },
        { name: 'breadcrumbCurrent', title: 'Breadcrumb — Current', type: 'string' },
        { name: 'breadcrumbTag', title: 'Breadcrumb — Tag', type: 'string' },
        { name: 'coverBadge', title: 'Cover Badge', type: 'string' },
        { name: 'metaBrandLabel', title: 'Meta — Brand Label', type: 'string' },
        { name: 'metaSeasonLabel', title: 'Meta — Season Label', type: 'string' },
        { name: 'metaConceptLabel', title: 'Meta — Concept Label', type: 'string' },

        { name: 'briefSectionHeader', title: 'Brief Section Header', type: 'string' },
        { name: 'visualDirectionHeader', title: 'Visual Direction Header', type: 'string' },
        { name: 'designInsightLabel', title: 'Design Insight Label', type: 'string' },

        { name: 'moodThemesHeader', title: 'Mood Themes Header', type: 'string' },

        { name: 'behindPageTag', title: 'Behind — Page Tag', type: 'string' },
        { name: 'behindTitle', title: 'Behind — Title', type: 'string' },

        { name: 'behindIntro', title: 'Behind — Intro', type: 'string' },

        { name: 'p5ProcessTag', title: 'Page 5 Process Tag', type: 'string' },
        { name: 'p5SkillsHeader', title: 'Page 5 Skills Header', type: 'string' },
        { name: 'p5PrinciplesHeader', title: 'Page 5 Principles Header', type: 'string' },
        { name: 'p5LearnedTitle', title: 'Page 5 Learned Title', type: 'string' },
        { name: 'footerNext', title: 'Footer — Next', type: 'string' },
      ],
    }),

    defineField({
      name: 'projectThree',
      title: 'Project 3 — Start-Up Page',
      type: 'object',
      fields: [
        { name: 'breadcrumbProjects', title: 'Breadcrumb — Projects', type: 'string' },
        { name: 'breadcrumbCurrent', title: 'Breadcrumb — Current', type: 'string' },
        { name: 'breadcrumbTag', title: 'Breadcrumb — Tag', type: 'string' },
        { name: 'metaTypeLabel', title: 'Meta — Type Label', type: 'string' },
        { name: 'metaConceptLabel', title: 'Meta — Concept Label', type: 'string' },
        { name: 'metaScopeLabel', title: 'Meta — Scope Label', type: 'string' },
        { name: 'metaTypeValue', title: 'Meta — Type Value', type: 'string' },
        { name: 'metaScopeValue', title: 'Meta — Scope Value', type: 'string' },

        { name: 'galleryTitle', title: 'Gallery Title', type: 'string' },
        { name: 'page2Headline1', title: 'Page 2 — Headline Line 1', type: 'string' },
        { name: 'page2Headline2', title: 'Page 2 — Headline Line 2', type: 'string' },
        { name: 'opportunityGap', title: 'Opportunity Gap Badge', type: 'string' },
        { name: 'p3PageLabel', title: 'Page 3 Label', type: 'string' },
        { name: 'p3DesignParagraph', title: 'Page 3 Design Paragraph', type: 'text', rows: 3 },

        { name: 'prototypeParagraph', title: 'Prototype Paragraph', type: 'text', rows: 3 },

        { name: 'p4PageLabel', title: 'Page 4 Label', type: 'string' },
        { name: 'p4HeardTitle', title: 'Page 4 — Heard Title', type: 'string' },
        { name: 'p4TaughtTitle', title: 'Page 4 — Taught Title', type: 'string' },
        { name: 'p4LoopHeader', title: 'Page 4 — Loop Header', type: 'string' },

        { name: 'p2LabelPrefix', title: 'Page 2 — Label Prefix', type: 'string' },
        { name: 'p2LabelSeparator', title: 'Page 2 — Label Separator', type: 'string' },
        { name: 'p4FeedbackLabel', title: 'Page 4 — Feedback Label', type: 'string' },
        { name: 'p4IterationLabel', title: 'Page 4 — Iteration Label', type: 'string' },
        { name: 'p4ImpactLabel', title: 'Page 4 — Impact Label', type: 'string' },
        { name: 'footerNext', title: 'Footer — Next', type: 'string' },
      ],
    }),

    defineField({
      name: 'waitlist',
      title: 'Inquiry Modal',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'intro', title: 'Intro', type: 'text', rows: 3 },
        { name: 'emailLabel', title: 'Email Label', type: 'string' },
        { name: 'emailPlaceholder', title: 'Email Placeholder', type: 'string' },
        { name: 'roleLabel', title: 'Role Label', type: 'string' },
        { name: 'roles', title: 'Roles', type: 'array', of: [{ type: 'string' }] },
        { name: 'submitIdle', title: 'Submit — Idle', type: 'string' },
        { name: 'submitBusy', title: 'Submit — Busy', type: 'string' },
        { name: 'footnote', title: 'Footnote', type: 'string' },
        { name: 'ticketBrand', title: 'Ticket Brand', type: 'string' },
        { name: 'ticketReceived', title: 'Ticket Received', type: 'string' },
        { name: 'labelContact', title: 'Label — Contact', type: 'string' },
        { name: 'labelInquiryType', title: 'Label — Inquiry Type', type: 'string' },
        { name: 'labelStatus', title: 'Label — Status', type: 'string' },
        { name: 'statusQueued', title: 'Status — Queued', type: 'string' },
        { name: 'dossierPass', title: 'Dossier Pass', type: 'string' },
        { name: 'cityTag', title: 'City Tag', type: 'string' },
        { name: 'loggedTitle', title: 'Logged Title', type: 'string' },
        { name: 'thanks', title: 'Thanks', type: 'text', rows: 2 },
        { name: 'copyLabel', title: 'Copy Label', type: 'string' },
        { name: 'copiedLabel', title: 'Copied Label', type: 'string' },
        { name: 'closeLabel', title: 'Close Label', type: 'string' },
      ],
    }),

    defineField({
      name: 'site',
      title: 'Site',
      type: 'object',
      fields: [
        { name: 'hiddenSectionText', title: 'Hidden Section Text', type: 'string' },
      ],
    }),
  ],
});