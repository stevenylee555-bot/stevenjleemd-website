import { defineArrayMember, defineField, defineType } from "sanity";

// Singleton: editable copy for /before-surgery. Section labels and icons stay in
// code; the prose, coordinator details, instructions, and locations are editable.
// Falls back to src/lib/surgicalInfo.ts (beforeSurgery) when a field is empty.
export const beforeSurgeryPage = defineType({
  name: "beforeSurgeryPage",
  title: "Before Surgery",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "planning", title: "Scheduling & coordinator" },
    { name: "instructions", title: "Pre-op instructions" },
    { name: "locations", title: "Surgical locations" },
  ],
  fields: [
    defineField({ name: "headerTitle", title: "Header title", type: "string", group: "header" }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 3, group: "header" }),

    defineField({ name: "planningHeading", title: "Scheduling heading", type: "string", group: "planning" }),
    defineField({
      name: "planningBody",
      title: "Scheduling paragraphs",
      type: "array",
      group: "planning",
      of: [defineArrayMember({ type: "text", rows: 3 })],
    }),
    defineField({ name: "paperworkIntro", title: "Paperwork intro", type: "text", rows: 3, group: "planning" }),
    defineField({
      name: "paperwork",
      title: "Paperwork items",
      type: "array",
      group: "planning",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "coordinator",
      title: "Surgical coordinator",
      type: "object",
      group: "planning",
      fields: [
        defineField({ name: "name", title: "Name", type: "string" }),
        defineField({ name: "role", title: "Role", type: "string" }),
        defineField({ name: "address", title: "Address", type: "string" }),
        defineField({ name: "phone", title: "Phone", type: "string" }),
        defineField({ name: "email", title: "Email", type: "string" }),
        defineField({ name: "fax", title: "Fax", type: "string" }),
      ],
    }),

    defineField({ name: "instructionsHeading", title: "Instructions heading", type: "string", group: "instructions" }),
    defineField({ name: "instructionsIntro", title: "Instructions intro", type: "text", rows: 3, group: "instructions" }),
    defineField({
      name: "instructions",
      title: "Pre-operative instructions",
      type: "array",
      group: "instructions",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "term", title: "Bold lead-in", type: "string" }),
            defineField({ name: "detail", title: "Detail", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "term", subtitle: "detail" } },
        }),
      ],
    }),

    defineField({ name: "locationsHeading", title: "Locations heading", type: "string", group: "locations" }),
    defineField({ name: "locationsIntro", title: "Locations intro", type: "text", rows: 3, group: "locations" }),
    defineField({
      name: "outpatient",
      title: "Out-patient centers",
      type: "array",
      group: "locations",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "inpatient",
      title: "In-patient centers",
      type: "array",
      group: "locations",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "facilities",
      title: "Facility cards",
      type: "array",
      group: "locations",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({
              name: "address",
              title: "Address lines",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({
              name: "description",
              title: "Description paragraphs",
              type: "array",
              of: [defineArrayMember({ type: "text", rows: 3 })],
            }),
            defineField({ name: "contact", title: "Contact phone", type: "string" }),
          ],
          preview: { select: { title: "name", subtitle: "contact" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Before Surgery" }) },
});
