import { defineArrayMember, defineField, defineType } from "sanity";

// Singleton: editable copy for the /specialties index. The specialty card grid
// is generated in code from src/lib/specialties.ts; only the header, editorial
// intro, and the closing CTA copy live here.
export const specialtiesIndexPage = defineType({
  name: "specialtiesIndexPage",
  title: "Specialties (index page)",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "intro", title: "Editorial intro" },
    { name: "cta", title: "Closing CTA" },
  ],
  fields: [
    defineField({ name: "headerTitle", title: "Header title", type: "string", group: "header" }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 4, group: "header" }),

    defineField({ name: "introKicker", title: "Intro kicker", type: "string", group: "intro" }),
    defineField({
      name: "introParagraphs",
      title: "Intro paragraphs",
      type: "array",
      group: "intro",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),

    defineField({ name: "ctaKicker", title: "CTA kicker", type: "string", group: "cta" }),
    defineField({ name: "ctaHeadingLead", title: "CTA heading, opening words", type: "string", group: "cta" }),
    defineField({ name: "ctaHeadingEmphasis", title: "CTA heading, gold accent words", type: "string", group: "cta" }),
    defineField({ name: "ctaPara", title: "CTA paragraph", type: "text", rows: 4, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Specialties (index page)" }) },
});
