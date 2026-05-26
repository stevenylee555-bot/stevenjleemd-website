import { defineArrayMember, defineField, defineType } from "sanity";

// A single publication citation. Used in both the "recent" list and the themed
// groups. `link` is an optional PubMed/article URL; `highlight` marks the newest
// paper with a "Latest publication" tag.
const pubFields = [
  defineField({ name: "citation", title: "Citation (authors + title)", type: "text", rows: 3 }),
  defineField({ name: "journal", title: "Journal / source", type: "string" }),
  defineField({ name: "year", title: "Date", type: "string" }),
  defineField({ name: "link", title: "PubMed / article link (optional)", type: "url" }),
];

// Singleton: editable copy for /about/publications. Section kickers, the icons,
// and the CV-download links stay in code; headings and the publication lists
// live here so Dr. Lee can add a paper when he publishes one.
export const publicationsPage = defineType({
  name: "publicationsPage",
  title: "Publications & Research",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "recent", title: "Recent publications" },
    { name: "themed", title: "By theme" },
    { name: "note", title: "Closing note" },
  ],
  fields: [
    defineField({ name: "headerTitle", title: "Header title", type: "string", group: "header" }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 4, group: "header" }),

    defineField({ name: "recentHeading", title: "Recent section heading", type: "string", group: "recent" }),
    defineField({
      name: "recent",
      title: "Recent publications",
      type: "array",
      group: "recent",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            ...pubFields,
            defineField({ name: "highlight", title: "Mark as latest publication", type: "boolean" }),
          ],
          preview: { select: { title: "citation", subtitle: "journal" } },
        }),
      ],
    }),

    defineField({ name: "themedHeading", title: "Themed section heading", type: "string", group: "themed" }),
    defineField({
      name: "themed",
      title: "Publications by theme",
      type: "array",
      group: "themed",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "theme", title: "Theme", type: "string" }),
            defineField({
              name: "items",
              title: "Publications",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: pubFields,
                  preview: { select: { title: "citation", subtitle: "journal" } },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: "theme", items: "items" },
            prepare: ({ title, items }) => ({
              title: title || "Theme",
              subtitle: items?.length ? `${items.length} selected` : undefined,
            }),
          },
        }),
      ],
    }),

    defineField({ name: "noteKicker", title: "Note kicker", type: "string", group: "note" }),
    defineField({ name: "notePara", title: "Note paragraph", type: "text", rows: 4, group: "note" }),
  ],
  preview: { prepare: () => ({ title: "Publications & Research" }) },
});
