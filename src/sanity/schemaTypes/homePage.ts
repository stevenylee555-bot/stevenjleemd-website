import { defineArrayMember, defineField, defineType } from "sanity";

// Singleton: the editable copy for the homepage. Only the words/numbers live
// here; layout, styling, and the gold-italic emphasis treatment stay in code.
export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "stats", title: "Stats bar" },
    { name: "innovation", title: "Implant Design section" },
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
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
