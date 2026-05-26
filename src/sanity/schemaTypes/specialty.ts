import { defineArrayMember, defineField, defineType } from "sanity";

// Collection: one document per specialty page (/specialties/[slug]). Only the
// visible prose is editable here. Identity (name, slug, icon), the conditions
// list, and SEO (metaTitle/metaDescription) stay in code, in src/lib/specialties.ts,
// and are used as fallbacks when a field is empty.
export const specialty = defineType({
  name: "specialty",
  title: "Specialty page",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "intro", title: "Intro" },
    { name: "approach", title: "Procedures & techniques" },
    { name: "credentials", title: "Why Dr. Lee" },
    { name: "implant", title: "Implant-design callout" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Specialty (internal label)",
      type: "string",
      readOnly: true,
      group: "header",
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "string",
      readOnly: true,
      description: "Matches the page URL, /specialties/{slug}. Set in code.",
      group: "header",
    }),

    defineField({ name: "eyebrow", title: "Header eyebrow", type: "string", group: "header" }),
    defineField({ name: "headline", title: "Header headline", type: "string", group: "header" }),
    defineField({ name: "headlineItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "lede", title: "Header intro paragraph", type: "text", rows: 4, group: "header" }),

    defineField({ name: "introTitle", title: "Intro heading", type: "string", group: "intro" }),
    defineField({
      name: "introBody",
      title: "Intro paragraphs",
      type: "array",
      group: "intro",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),

    defineField({
      name: "approach",
      title: "Procedures & techniques",
      type: "array",
      group: "approach",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Description", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "title", subtitle: "body" } },
        }),
      ],
    }),

    defineField({
      name: "credentials",
      title: "Credential bullets",
      type: "array",
      group: "credentials",
      of: [defineArrayMember({ type: "string" })],
    }),

    defineField({
      name: "implantDesign",
      title: "Implant-design callout (optional)",
      type: "object",
      group: "implant",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
      ],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "slug" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Specialty page",
      subtitle: subtitle ? `/specialties/${subtitle}` : undefined,
    }),
  },
});
