import { defineArrayMember, defineField, defineType } from "sanity";

// Singleton: the editable copy for the homepage. Only the words/numbers live
// here; layout, styling, icons, links, and the gold-italic emphasis treatment
// stay in code.
export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "stats", title: "Stats bar" },
    { name: "innovation", title: "Implant Design section" },
    { name: "about", title: "About section" },
    { name: "secondOpinion", title: "Second Opinion section" },
    { name: "specialties", title: "Specialties section" },
  ],
  fields: [
    // Hero
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow (small line above the headline)",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroHeadlineEmphasis",
      title: "Headline, gold accent words (start of headline)",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroHeadlineRest",
      title: "Headline, remaining words",
      type: "text",
      rows: 2,
      group: "hero",
    }),
    defineField({
      name: "heroSubheading",
      title: "Subheading paragraph",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "recognition",
      title: "Recognition list",
      type: "array",
      group: "hero",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Award / listing", type: "string" }),
            defineField({ name: "years", title: "Years", type: "string" }),
          ],
          preview: { select: { title: "name", subtitle: "years" } },
        }),
      ],
    }),
    // Stats
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      group: "stats",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "value", title: "Number", type: "number" }),
            defineField({ name: "suffix", title: 'Suffix (e.g. "+")', type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "label", subtitle: "caption" } },
        }),
      ],
    }),
    // Implant Design / Innovation
    defineField({
      name: "innovationKicker",
      title: "Section label",
      type: "string",
      group: "innovation",
    }),
    defineField({
      name: "innovationHeadlineLead",
      title: "Headline, opening words",
      type: "string",
      group: "innovation",
    }),
    defineField({
      name: "innovationHeadlineEmphasis",
      title: "Headline, gold accent words (end of headline)",
      type: "string",
      group: "innovation",
    }),
    defineField({
      name: "innovationPara1",
      title: "First paragraph",
      type: "text",
      rows: 4,
      group: "innovation",
    }),
    defineField({
      name: "innovationPara2",
      title: "Second paragraph",
      type: "text",
      rows: 4,
      group: "innovation",
    }),
    defineField({
      name: "capabilities",
      title: "Capability bullet points",
      type: "array",
      group: "innovation",
      of: [defineArrayMember({ type: "string" })],
    }),
    // About
    defineField({
      name: "aboutKicker",
      title: "Section label",
      type: "string",
      group: "about",
    }),
    defineField({
      name: "aboutHeadlineLead",
      title: "Headline, opening words",
      type: "string",
      group: "about",
    }),
    defineField({
      name: "aboutHeadlineEmphasis",
      title: "Headline, gold accent words (middle)",
      type: "string",
      group: "about",
    }),
    defineField({
      name: "aboutHeadlineTail",
      title: "Headline, closing words",
      type: "string",
      group: "about",
    }),
    defineField({
      name: "aboutParagraphs",
      title: "Paragraphs",
      type: "array",
      group: "about",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),
    defineField({
      name: "aboutCredentials",
      title: "Credential chips",
      type: "array",
      group: "about",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "aboutAffiliations",
      title: "Hospital affiliations",
      type: "array",
      group: "about",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Institution", type: "string" }),
            defineField({ name: "role", title: "Role", type: "string" }),
          ],
          preview: { select: { title: "name", subtitle: "role" } },
        }),
      ],
    }),
    defineField({
      name: "aboutNismatNote",
      title: "NISMAT footnote",
      type: "text",
      rows: 3,
      group: "about",
    }),
    // Second Opinion
    defineField({
      name: "soKicker",
      title: "Section label",
      type: "string",
      group: "secondOpinion",
    }),
    defineField({
      name: "soHeadlineLead",
      title: "Headline, opening words",
      type: "string",
      group: "secondOpinion",
    }),
    defineField({
      name: "soHeadlineEmphasis",
      title: "Headline, gold accent words (end)",
      type: "string",
      group: "secondOpinion",
    }),
    defineField({
      name: "soPara1",
      title: "First paragraph",
      type: "text",
      rows: 4,
      group: "secondOpinion",
    }),
    defineField({
      name: "soPara2",
      title: "Second paragraph",
      type: "text",
      rows: 3,
      group: "secondOpinion",
    }),
    defineField({
      name: "soCtaLabel",
      title: "Button label",
      type: "string",
      group: "secondOpinion",
    }),
    defineField({
      name: "soPillars",
      title: "Feature cards",
      description: "The four small cards. Icons stay fixed in code, by position.",
      type: "array",
      group: "secondOpinion",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title", subtitle: "body" } },
        }),
      ],
    }),
    // Specialties
    defineField({
      name: "specKicker",
      title: "Section label",
      type: "string",
      group: "specialties",
    }),
    defineField({
      name: "specHeadlineLead",
      title: "Headline, opening words",
      type: "string",
      group: "specialties",
    }),
    defineField({
      name: "specHeadlineEmphasis",
      title: "Headline, gold accent words (end)",
      type: "string",
      group: "specialties",
    }),
    defineField({
      name: "specIntro",
      title: "Intro paragraph",
      type: "text",
      rows: 3,
      group: "specialties",
    }),
    defineField({
      name: "specCards",
      title: "Specialty cards",
      description: "Card text. Icons and links stay fixed in code, by position.",
      type: "array",
      group: "specialties",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: { select: { title: "title", subtitle: "eyebrow" } },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
