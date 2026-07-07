import { defineArrayMember, defineField, defineType } from "sanity";

const foodGroup = defineArrayMember({
  type: "object",
  name: "nutritionGroup",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "bullets", title: "Bullets", type: "array", of: [defineArrayMember({ type: "text", rows: 2 })] }),
    defineField({ name: "foodsIntro", title: "Foods intro (optional)", type: "text", rows: 2 }),
    defineField({ name: "foods", title: "Food chips (optional)", type: "array", of: [defineArrayMember({ type: "string" })] }),
  ],
  preview: { select: { title: "heading" } },
});

// Singleton: editable copy for /surgery-nutrition. Falls back to
// src/lib/surgicalInfo.ts (surgeryNutrition) when empty.
export const surgeryNutritionPage = defineType({
  name: "surgeryNutritionPage",
  title: "Surgery Nutrition",
  type: "document",
  groups: [
    { name: "header", title: "Page header", default: true },
    { name: "sections", title: "Sections" },
    { name: "footer", title: "Closing" },
  ],
  fields: [
    defineField({ name: "headerTitle", title: "Header title", type: "string", group: "header" }),
    defineField({ name: "headerItalic", title: "Header gold accent words", type: "string", group: "header" }),
    defineField({ name: "headerLede", title: "Header intro paragraph", type: "text", rows: 3, group: "header" }),

    defineField({
      name: "sections",
      title: "Nutrition sections",
      type: "array",
      group: "sections",
      of: [
        defineArrayMember({
          type: "object",
          name: "nutritionSection",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Intro paragraphs", type: "array", of: [defineArrayMember({ type: "text", rows: 3 })] }),
            defineField({ name: "bullets", title: "Bullets", type: "array", of: [defineArrayMember({ type: "text", rows: 2 })] }),
            defineField({ name: "foodsIntro", title: "Foods intro (optional)", type: "text", rows: 2 }),
            defineField({ name: "foods", title: "Food chips (optional)", type: "array", of: [defineArrayMember({ type: "string" })] }),
            defineField({ name: "groups", title: "Sub-groups (optional)", type: "array", of: [foodGroup] }),
          ],
          preview: { select: { title: "heading" } },
        }),
      ],
    }),

    defineField({ name: "smokingClosing", title: "Smoking section closing line", type: "text", rows: 2, group: "footer" }),
    defineField({ name: "disclaimer", title: "Closing disclaimer", type: "text", rows: 4, group: "footer" }),
  ],
  preview: { prepare: () => ({ title: "Surgery Nutrition" }) },
});
