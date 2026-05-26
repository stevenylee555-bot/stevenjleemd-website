import { defineArrayMember, defineField, defineType } from "sanity";

const titleBody = (titleField: string, bodyField: string) =>
  defineArrayMember({
    type: "object",
    fields: [
      defineField({ name: "title", title: titleField, type: "string" }),
      defineField({ name: "body", title: bodyField, type: "text", rows: 3 }),
    ],
    preview: { select: { title: "title", subtitle: "body" } },
  });

// Singleton: editable copy for /second-opinions. Section labels, icons, and step
// numbers stay in code. The FAQ here also feeds the page's JSON-LD schema.
export const secondOpinionsPage = defineType({
  name: "secondOpinionsPage",
  title: "Second Opinions",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "why", title: "Why Dr. Lee" },
    { name: "cases", title: "Cases reviewed" },
    { name: "steps", title: "What to expect" },
    { name: "cta", title: "CTA" },
    { name: "faq", title: "FAQ" },
  ],
  fields: [
    defineField({ name: "headerTitle", title: "Header title", type: "string", group: "header" }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 3, group: "header" }),

    defineField({ name: "whyHeadingLead", title: "Heading, opening words", type: "string", group: "why" }),
    defineField({ name: "whyHeadingEmphasis", title: "Heading, gold accent words", type: "string", group: "why" }),
    defineField({ name: "whyParagraphs", title: "Paragraphs", type: "array", group: "why", of: [defineArrayMember({ type: "text", rows: 3 })] }),
    defineField({ name: "pillars", title: "Feature cards (icons fixed in code)", type: "array", group: "why", of: [titleBody("Title", "Body")] }),

    defineField({ name: "casesHeadingLead", title: "Heading, opening words", type: "string", group: "cases" }),
    defineField({ name: "casesHeadingEmphasis", title: "Heading, gold accent words", type: "string", group: "cases" }),
    defineField({
      name: "cases",
      title: "Case categories",
      type: "array",
      group: "cases",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "text", title: "Text", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "label", subtitle: "text" } },
        }),
      ],
    }),

    defineField({ name: "expectHeading", title: "Section heading", type: "string", group: "steps" }),
    defineField({ name: "steps", title: "Steps (numbered automatically)", type: "array", group: "steps", of: [titleBody("Step title", "Step body")] }),

    defineField({ name: "ctaHeading", title: "CTA heading", type: "string", group: "cta" }),
    defineField({ name: "ctaBody", title: "CTA body", type: "text", rows: 3, group: "cta" }),

    defineField({
      name: "faqs",
      title: "FAQ (also powers search schema)",
      type: "array",
      group: "faq",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "question", subtitle: "answer" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Second Opinions" }) },
});
