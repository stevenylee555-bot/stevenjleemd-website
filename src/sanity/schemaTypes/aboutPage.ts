import { defineArrayMember, defineField, defineType } from "sanity";

// Singleton: editable copy for the /about hub. Card icons and links stay in code
// (overlaid by position); the header and card text live here.
export const aboutPage = defineType({
  name: "aboutPage",
  title: "About (hub page)",
  type: "document",
  fields: [
    defineField({ name: "headerTitle", title: "Header title", type: "text", rows: 2 }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "text", rows: 2 }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 4 }),
    defineField({
      name: "cards",
      title: "Link cards",
      type: "array",
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
  ],
  preview: { prepare: () => ({ title: "About (hub page)" }) },
});
