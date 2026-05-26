import { defineArrayMember, defineField, defineType } from "sanity";

// Reusable {title, detail} list item used by most credential sections.
const titleDetailItem = defineArrayMember({
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "detail", title: "Detail", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "title", subtitle: "detail" } },
});

// Singleton: editable content for /about/credentials. Section labels and layout
// stay in code; the award/credential entries live here.
export const credentialsPage = defineType({
  name: "credentialsPage",
  title: "Credentials & Awards",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "credentials", title: "Appointments & licenses" },
    { name: "awards", title: "Recognition & awards" },
    { name: "innovation", title: "Implants & patents" },
    { name: "experience", title: "Team physician" },
    { name: "memberships", title: "Memberships" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    defineField({ name: "headerTitle", title: "Header title", type: "string", group: "header" }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 3, group: "header" }),

    defineField({
      name: "appointments",
      title: "Hospital & faculty appointments",
      type: "array",
      group: "credentials",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "role", title: "Role", type: "string" }),
            defineField({ name: "org", title: "Organization", type: "string" }),
            defineField({ name: "years", title: "Years", type: "string" }),
          ],
          preview: { select: { title: "role", subtitle: "org" } },
        }),
      ],
    }),
    defineField({
      name: "certifications",
      title: "Board certifications & licenses",
      type: "array",
      group: "credentials",
      of: [defineArrayMember({ type: "string" })],
    }),

    defineField({ name: "recognition", title: "Recognition (top-doctor listings)", type: "array", group: "awards", of: [titleDetailItem] }),
    defineField({ name: "teaching", title: "Teaching & mentorship awards", type: "array", group: "awards", of: [titleDetailItem] }),
    defineField({ name: "research", title: "Research awards & editorial roles", type: "array", group: "awards", of: [titleDetailItem] }),

    defineField({ name: "implantDesignIntro", title: "Implant design intro paragraph", type: "text", rows: 3, group: "innovation" }),
    defineField({ name: "implantDesign", title: "Implants & fixation systems", type: "array", group: "innovation", of: [titleDetailItem] }),
    defineField({ name: "patents", title: "Patents", type: "array", group: "innovation", of: [titleDetailItem] }),

    defineField({ name: "teamPhysician", title: "Team physician history", type: "array", group: "experience", of: [titleDetailItem] }),

    defineField({
      name: "memberships",
      title: "Societies & associations",
      type: "array",
      group: "memberships",
      of: [defineArrayMember({ type: "string" })],
    }),

    defineField({ name: "ctaHeadingLead", title: "CTA heading, opening words", type: "string", group: "cta" }),
    defineField({ name: "ctaHeadingEmphasis", title: "CTA heading, gold accent words", type: "string", group: "cta" }),
    defineField({ name: "ctaBody", title: "CTA body paragraph", type: "text", rows: 3, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Credentials & Awards" }) },
});
