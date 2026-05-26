import { defineArrayMember, defineField, defineType } from "sanity";

// A body/treatment section: heading, paragraphs, optional bullet list, optional
// closing paragraph. Reused for both the main body and the treatment sections.
const sectionMember = defineArrayMember({
  type: "object",
  name: "section",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "body",
      title: "Paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),
    defineField({
      name: "bullets",
      title: "Bullet list (optional)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "bulletsAfter", title: "Closing paragraph (optional)", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "heading" } },
});

// Collection: one document per condition detail page (/conditions/[slug]).
// Only the visible prose is editable. Identity (name, slug, region), the author
// byline, related-condition cross-links, and SEO (metaTitle/metaDescription/
// schemaDescription) stay in code, in src/lib/conditionPages.ts, and serve as
// fallbacks when a field is empty.
export const conditionPage = defineType({
  name: "conditionPage",
  title: "Condition page",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "overview", title: "Overview & body" },
    { name: "approach", title: "Dr. Lee's approach & treatment" },
    { name: "recovery", title: "Recovery & misconceptions" },
    { name: "sidebar", title: "Sidebar & CTA" },
    { name: "faq", title: "FAQ" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Condition (internal label)",
      type: "string",
      readOnly: true,
      group: "header",
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "string",
      readOnly: true,
      description: "Matches the page URL, /conditions/{slug}. Set in code.",
      group: "header",
    }),
    defineField({ name: "region", title: "Region (kicker)", type: "string", readOnly: true, group: "header" }),

    defineField({ name: "headerTitle", title: "Header title", type: "string", group: "header" }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 4, group: "header" }),

    defineField({
      name: "overview",
      title: "Overview paragraphs",
      type: "array",
      group: "overview",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),
    defineField({
      name: "bodySections",
      title: "Body sections",
      type: "array",
      group: "overview",
      of: [sectionMember],
    }),

    defineField({
      name: "drLeeApproach",
      title: "Dr. Lee's approach (paragraphs)",
      type: "array",
      group: "approach",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),
    defineField({
      name: "treatmentSections",
      title: "Treatment sections (optional)",
      type: "array",
      group: "approach",
      of: [sectionMember],
    }),

    defineField({ name: "recoveryIntro", title: "Recovery intro (optional)", type: "text", rows: 2, group: "recovery" }),
    defineField({
      name: "recovery",
      title: "Recovery timeline",
      type: "array",
      group: "recovery",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "when", title: "When", type: "string" }),
            defineField({ name: "what", title: "What happens", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "when", subtitle: "what" } },
        }),
      ],
    }),
    defineField({
      name: "misconceptions",
      title: "Common misconceptions (optional)",
      type: "object",
      group: "recovery",
      fields: [
        defineField({ name: "intro", title: "Intro", type: "text", rows: 2 }),
        defineField({
          name: "items",
          title: "Items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "heading", title: "Heading", type: "string" }),
                defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
              ],
              preview: { select: { title: "heading", subtitle: "body" } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "sidebarFacts",
      title: "At a glance (sidebar facts)",
      type: "array",
      group: "sidebar",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        }),
      ],
    }),
    defineField({
      name: "whyDrLee",
      title: "Why Dr. Lee (sidebar bullets)",
      type: "array",
      group: "sidebar",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "ctaCard",
      title: "Sidebar CTA card",
      type: "object",
      group: "sidebar",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "headline", title: "Headline", type: "string" }),
      ],
    }),

    defineField({ name: "faqHeadline", title: "FAQ section headline", type: "string", group: "faq" }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      group: "faq",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 5 }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),

    defineField({ name: "bottomCtaTitle", title: "Bottom CTA title", type: "string", group: "faq" }),
    defineField({ name: "bottomCtaItalic", title: "Bottom CTA gold accent words", type: "string", group: "faq" }),
    defineField({ name: "bottomCtaBody", title: "Bottom CTA body", type: "text", rows: 3, group: "faq" }),
  ],
  preview: {
    select: { title: "name", subtitle: "slug" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Condition page",
      subtitle: subtitle ? `/conditions/${subtitle}` : undefined,
    }),
  },
});
