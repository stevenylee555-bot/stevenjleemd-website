import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Patient name",
      description: 'Use a first name and last initial for privacy, e.g. "Margaret R."',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "detail",
      title: "Procedure / detail",
      description: 'Shown under the name, e.g. "Distal Radius Fracture · Hand & Wrist"',
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      description: "The main testimonial text.",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "emphasis",
      title: "Closing line (shown in gold)",
      description: "Optional. The uplifting final clause, displayed in italic gold.",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "photo",
      title: "Patient photo",
      description: "Optional. Any photo works; it is cropped to a portrait frame.",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text (for accessibility)",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "consentOnFile",
      title: "Consent on file",
      description:
        "Confirm the patient has given written permission to feature their story and photo.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      description: "Lower numbers show first.",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "detail", media: "photo" },
  },
});
