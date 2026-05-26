import type { StructureResolver } from "sanity/structure";

// Home Page is a singleton (one document, no create/delete); testimonials are a
// normal list.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .id("homePage")
        .child(
          S.document().schemaType("homePage").documentId("homePage")
        ),
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
        .child(
          S.document().schemaType("credentialsPage").documentId("credentialsPage")
        ),
      S.listItem()
        .title("Second Opinions")
        .id("secondOpinionsPage")
        .child(
          S.document().schemaType("secondOpinionsPage").documentId("secondOpinionsPage")
        ),
      S.divider(),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
