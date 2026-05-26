import { type SchemaTypeDefinition } from "sanity";
import { testimonial } from "./testimonial";
import { homePage } from "./homePage";
import { credentialsPage } from "./credentialsPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, credentialsPage, testimonial],
};
