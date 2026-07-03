import { defineArrayMember, defineField, defineType } from "sanity";

// A single recovery step or topic inside a protocol (e.g. "First 48 hours",
// "Wound care", "When to call the office"). Heading + prose + optional bullets,
// mirroring the condition-page bodySections shape.
const protocolSection = defineArrayMember({
  type: "object",
  name: "protocolSection",
  fields: [
    defineField({ name: "heading", title: "Section heading", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
    defineField({
      name: "bullets",
      title: "Bullet points (optional)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  preview: { select: { title: "heading", subtitle: "body" } },
});

// Singleton: editable copy for /therapy-protocols. Section labels, icons, and
// page chrome stay in code. Dr. Lee owns the disclaimer wording and every
// protocol's medical content. Protocols is an array so the whole library is
// managed on one Studio screen; promote to a collection if it grows large.
export const therapyProtocolsPage = defineType({
  name: "therapyProtocolsPage",
  title: "Therapy Protocols",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "intro", title: "Intro" },
    { name: "protocols", title: "Protocols" },
    { name: "disclaimer", title: "Disclaimer" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    defineField({ name: "headerTitle", title: "Header title", type: "string", group: "header" }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 3, group: "header" }),

    defineField({ name: "introHeading", title: "Intro heading", type: "string", group: "intro" }),
    defineField({
      name: "introParagraphs",
      title: "Intro paragraphs",
      type: "array",
      group: "intro",
      of: [defineArrayMember({ type: "text", rows: 3 })],
    }),

    defineField({
      name: "protocols",
      title: "Protocols",
      type: "array",
      group: "protocols",
      of: [
        defineArrayMember({
          type: "object",
          name: "protocol",
          fields: [
            defineField({ name: "name", title: "Protocol name", type: "string", description: "e.g. Carpal Tunnel Release, Post-Operative" }),
            defineField({ name: "category", title: "Category", type: "string", description: "e.g. Hand & Wrist, Elbow, Non-surgical" }),
            defineField({ name: "summary", title: "Short summary", type: "text", rows: 2 }),
            defineField({ name: "sections", title: "Sections", type: "array", of: [protocolSection] }),
            defineField({ name: "warningsHeading", title: "Warnings heading", type: "string", description: 'e.g. "When to call the office"' }),
            defineField({
              name: "warnings",
              title: "Warning signs / when to call",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
          preview: { select: { title: "name", subtitle: "category" } },
        }),
      ],
    }),

    defineField({ name: "disclaimerHeading", title: "Disclaimer heading", type: "string", group: "disclaimer" }),
    defineField({ name: "disclaimer", title: "Disclaimer body", type: "text", rows: 4, group: "disclaimer", description: "General-guidance language. Dr. Lee controls this wording." }),

    defineField({ name: "ctaHeading", title: "CTA heading", type: "string", group: "cta" }),
    defineField({ name: "ctaBody", title: "CTA body", type: "text", rows: 3, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Therapy Protocols" }) },
});
