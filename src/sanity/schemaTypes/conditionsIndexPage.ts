import { defineField, defineType } from "sanity";

// Singleton: editable copy for the /conditions index. The per-region condition
// grid is generated in code from src/lib/conditions.ts; only the header and the
// closing note/CTA copy live here.
export const conditionsIndexPage = defineType({
  name: "conditionsIndexPage",
  title: "Conditions (index page)",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "note", title: "Closing note & CTA" },
  ],
  fields: [
    defineField({ name: "headerTitle", title: "Header title", type: "string", group: "header" }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 4, group: "header" }),

    defineField({ name: "noteKicker", title: "Note kicker", type: "string", group: "note" }),
    defineField({ name: "noteHeadingLead", title: "Note heading, opening words", type: "string", group: "note" }),
    defineField({ name: "noteHeadingEmphasis", title: "Note heading, gold accent words", type: "string", group: "note" }),
    defineField({ name: "notePara", title: "Note paragraph", type: "text", rows: 4, group: "note" }),
    defineField({ name: "ctaKicker", title: "CTA kicker", type: "string", group: "note" }),
  ],
  preview: { prepare: () => ({ title: "Conditions (index page)" }) },
});
