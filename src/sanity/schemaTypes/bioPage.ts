import { defineArrayMember, defineField, defineType } from "sanity";

// Singleton: editable copy for /about/bio. Section labels, decorative elements,
// gallery images, and the two paragraphs with inline links/citations stay in
// code; the prose and lists live here.
export const bioPage = defineType({
  name: "bioPage",
  title: "Biography",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "intro", title: "Intro & sidebar" },
    { name: "training", title: "Training" },
    { name: "athletes", title: "Athletes" },
    { name: "research", title: "Research & patent" },
    { name: "teaching", title: "Teaching" },
    { name: "gallery", title: "Gallery & practice" },
  ],
  fields: [
    defineField({ name: "headerTitle", title: "Header title", type: "string", group: "header" }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 3, group: "header" }),

    defineField({ name: "introParagraphs", title: "Intro paragraphs", type: "array", group: "intro", of: [defineArrayMember({ type: "text", rows: 4 })] }),
    defineField({ name: "credentials", title: "Sidebar credentials", type: "array", group: "intro", of: [defineArrayMember({ type: "string" })] }),

    defineField({ name: "trainingHeading", title: "Section heading", type: "string", group: "training" }),
    defineField({
      name: "training",
      title: "Training & education",
      type: "array",
      group: "training",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "institution", title: "Institution", type: "string" }),
            defineField({ name: "detail", title: "Detail", type: "string" }),
            defineField({ name: "note", title: "Note (optional)", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "institution", subtitle: "detail" } },
        }),
      ],
    }),

    defineField({ name: "athletesHeadingLead", title: "Heading, opening words", type: "string", group: "athletes" }),
    defineField({ name: "athletesHeadingEmphasis", title: "Heading, gold accent words", type: "string", group: "athletes" }),
    defineField({ name: "athletesIntro", title: "Intro paragraph", type: "text", rows: 4, group: "athletes" }),
    defineField({ name: "athletesQuoteLead", title: "Pull-quote, opening words", type: "string", group: "athletes" }),
    defineField({ name: "athletesQuoteEmphasis", title: "Pull-quote, gold accent words", type: "string", group: "athletes" }),
    defineField({ name: "athleteRoles", title: "Team physician roles", type: "array", group: "athletes", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "sportsTreated", title: "Sports treated (chips)", type: "array", group: "athletes", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "athletesNote", title: "Closing note", type: "text", rows: 2, group: "athletes" }),

    defineField({ name: "researchHeading", title: "Section heading", type: "string", group: "research" }),
    defineField({ name: "researchPara1", title: "First paragraph", type: "text", rows: 5, group: "research" }),
    defineField({ name: "patentNumber", title: "Patent number", type: "string", group: "research" }),
    defineField({ name: "patentDesc", title: "Patent description", type: "text", rows: 3, group: "research" }),
    defineField({ name: "patentNote", title: "Patent card footnote", type: "text", rows: 2, group: "research" }),

    defineField({ name: "teachingHeading", title: "Section heading", type: "string", group: "teaching" }),
    defineField({ name: "teachingPara2", title: "Awards paragraph", type: "text", rows: 5, group: "teaching" }),
    defineField({ name: "teachingPara3", title: "AOA paragraph", type: "text", rows: 4, group: "teaching" }),
    defineField({ name: "teachingQuoteLead", title: "Pull-quote, opening words", type: "string", group: "teaching" }),
    defineField({ name: "teachingQuoteEmphasis", title: "Pull-quote, gold accent words", type: "string", group: "teaching" }),

    defineField({ name: "galleryHeadingLead", title: "Gallery heading, opening words", type: "string", group: "gallery" }),
    defineField({ name: "galleryHeadingEmphasis", title: "Gallery heading, gold accent words", type: "string", group: "gallery" }),
    defineField({ name: "galleryIntro", title: "Gallery intro paragraph", type: "text", rows: 3, group: "gallery" }),
    defineField({
      name: "galleryCaptions",
      title: "Gallery captions",
      type: "array",
      group: "gallery",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "kicker", title: "Kicker", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
          preview: { select: { title: "kicker", subtitle: "caption" } },
        }),
      ],
    }),
    defineField({ name: "practiceHeading", title: "Practice heading", type: "string", group: "gallery" }),
    defineField({ name: "practicePara", title: "Practice paragraph", type: "text", rows: 4, group: "gallery" }),
  ],
  preview: { prepare: () => ({ title: "Biography" }) },
});
