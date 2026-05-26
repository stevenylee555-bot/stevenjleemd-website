import { type SchemaTypeDefinition } from "sanity";
import { testimonial } from "./testimonial";
import { homePage } from "./homePage";
import { credentialsPage } from "./credentialsPage";
import { bioPage } from "./bioPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, bioPage, credentialsPage, testimonial],
};
