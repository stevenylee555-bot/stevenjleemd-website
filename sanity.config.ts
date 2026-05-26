import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool, defineLocations } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Steven J. Lee, MD",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    // Click-to-edit on a live preview of the site. `initial` defaults to the
    // Studio's own origin, so this works on both localhost and Vercel.
    presentationTool({
      // Populates the "Documents on this page" panel when previewing the homepage.
      resolve: {
        locations: {
          homePage: defineLocations({
            locations: [{ title: "Home Page", href: "/" }],
          }),
          credentialsPage: defineLocations({
            locations: [{ title: "Credentials & Awards", href: "/about/credentials" }],
          }),
          aboutPage: defineLocations({
            locations: [{ title: "About", href: "/about" }],
          }),
          bioPage: defineLocations({
            locations: [{ title: "Biography", href: "/about/bio" }],
          }),
          secondOpinionsPage: defineLocations({
            locations: [{ title: "Second Opinions", href: "/second-opinions" }],
          }),
          conditionsIndexPage: defineLocations({
            locations: [{ title: "Conditions", href: "/conditions" }],
          }),
          conditionPage: defineLocations({
            select: { name: "name", slug: "slug" },
            resolve: (doc) => ({
              locations: doc?.slug
                ? [{ title: doc?.name || "Condition", href: `/conditions/${doc.slug}` }]
                : [],
            }),
          }),
          specialtiesIndexPage: defineLocations({
            locations: [{ title: "Specialties", href: "/specialties" }],
          }),
          specialty: defineLocations({
            select: { name: "name", slug: "slug" },
            resolve: (doc) => ({
              locations: doc?.slug
                ? [{ title: doc?.name || "Specialty", href: `/specialties/${doc.slug}` }]
                : [],
            }),
          }),
          testimonial: defineLocations({
            select: { name: "name" },
            resolve: (doc) => ({
              locations: [{ title: doc?.name || "Testimonial", href: "/" }],
            }),
          }),
        },
      },
      previewUrl: {
        previewMode: { enable: "/api/draft-mode/enable" },
      },
    }),
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
