import { defineArrayMember, defineField, defineType } from "sanity";

// Singleton: editable copy for /about/cv. Decorative kickers, the icons next to
// each stat, the CV download link, and the sibling-page navigation cards stay
// in code; headings, stats, and the training timeline live here.
export const cvPage = defineType({
  name: "cvPage",
  title: "Curriculum Vitae",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "download", title: "Download section" },
    { name: "stats", title: "Stats grid" },
    { name: "training", title: "Training timeline" },
  ],
  fields: [
    defineField({ name: "headerTitle", title: "Header title", type: "string", group: "header" }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 4, group: "header" }),

    defineField({ name: "downloadHeading", title: "Download section heading", type: "string", group: "download" }),
    defineField({ name: "downloadPara", title: "Download section paragraph", type: "text", rows: 4, group: "download" }),

    defineField({
      name: "stats",
      title: "Stats (4 items, icons stay in code by position)",
      type: "array",
      group: "stats",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value (e.g. 35+)", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),

    defineField({ name: "trainingHeadingLead", title: "Training heading, opening words", type: "string", group: "training" }),
    defineField({ name: "trainingHeadingEmphasis", title: "Training heading, gold accent words", type: "string", group: "training" }),
    defineField({
      name: "training",
      title: "Training timeline",
      type: "array",
      group: "training",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "year", title: "Year range (e.g. 1994 to 1998)", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "detail", title: "Detail", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title", subtitle: "year" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Curriculum Vitae" }) },
});
