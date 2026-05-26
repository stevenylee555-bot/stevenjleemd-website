import { type SchemaTypeDefinition } from "sanity";
import { testimonial } from "./testimonial";
import { homePage } from "./homePage";
import { credentialsPage } from "./credentialsPage";
import { bioPage } from "./bioPage";
import { secondOpinionsPage } from "./secondOpinionsPage";
import { aboutPage } from "./aboutPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, aboutPage, bioPage, credentialsPage, secondOpinionsPage, testimonial],
};
