import type { StructureResolver } from "sanity/structure";

// Singletons get an explicit single-document child (no create/delete). Condition
// and specialty pages are collections (one document each), shown as normal lists.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("About (hub page)")
        .id("aboutPage")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem()
        .title("Biography")
        .id("bioPage")
        .child(S.document().schemaType("bioPage").documentId("bioPage")),
      S.listItem()
        .title("Credentials & Awards")
        .id("credentialsPage")
        .child(S.document().schemaType("credentialsPage").documentId("credentialsPage")),
      S.listItem()
        .title("Second Opinions")
        .id("secondOpinionsPage")
        .child(S.document().schemaType("secondOpinionsPage").documentId("secondOpinionsPage")),
      S.divider(),
      S.listItem()
        .title("Conditions (index page)")
        .id("conditionsIndexPage")
        .child(S.document().schemaType("conditionsIndexPage").documentId("conditionsIndexPage")),
      S.documentTypeListItem("conditionPage").title("Condition pages"),
      S.divider(),
      S.listItem()
        .title("Specialties (index page)")
        .id("specialtiesIndexPage")
        .child(S.document().schemaType("specialtiesIndexPage").documentId("specialtiesIndexPage")),
      S.documentTypeListItem("specialty").title("Specialty pages"),
      S.divider(),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
