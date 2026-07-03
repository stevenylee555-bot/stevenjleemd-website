import { defineArrayMember, defineField, defineType } from "sanity";

// Collection: one document per post-operative protocol
// (/therapy-protocols/[slug]). Recovered from Dr. Lee's old Wix PDFs. Only the
// visible prose is editable; identity (name, slug, region, officialTitle) stays
// read-only and serves as the code fallback in src/lib/procedureProtocols.ts.
const sectionMember = defineArrayMember({
  type: "object",
  name: "protocolSection",
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
  ],
  preview: { select: { title: "heading" } },
});

export const procedureProtocol = defineType({
  name: "procedureProtocol",
  title: "Post-op protocol",
  type: "document",
  groups: [
    { name: "identity", title: "Identity", default: true },
    { name: "sections", title: "Instructions" },
    { name: "warnings", title: "When to call / ER" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Procedure (internal label)",
      type: "string",
      readOnly: true,
      group: "identity",
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "string",
      readOnly: true,
      description: "Matches the page URL, /therapy-protocols/{slug}. Set in code.",
      group: "identity",
    }),
    defineField({ name: "region", title: "Body region", type: "string", readOnly: true, group: "identity" }),
    defineField({
      name: "officialTitle",
      title: "Procedure title (as written by Dr. Lee)",
      type: "string",
      group: "identity",
    }),

    defineField({
      name: "sections",
      title: "Instruction sections",
      type: "array",
      group: "sections",
      of: [sectionMember],
    }),

    defineField({
      name: "warningsHeading",
      title: "Call-the-office heading",
      type: "string",
      group: "warnings",
    }),
    defineField({
      name: "warnings",
      title: "Call the office immediately for",
      type: "array",
      group: "warnings",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "erWarningsHeading",
      title: "Emergency-room heading",
      type: "string",
      group: "warnings",
    }),
    defineField({
      name: "erWarnings",
      title: "Go to the ER immediately for",
      type: "array",
      group: "warnings",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "disclaimer", title: "Closing disclaimer", type: "text", rows: 3, group: "warnings" }),
  ],
  preview: {
    select: { title: "name", subtitle: "region" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Post-op protocol",
      subtitle: subtitle || undefined,
    }),
  },
});
