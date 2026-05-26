import { type SchemaTypeDefinition } from "sanity";
import { testimonial } from "./testimonial";
import { homePage } from "./homePage";
import { credentialsPage } from "./credentialsPage";
import { bioPage } from "./bioPage";
import { secondOpinionsPage } from "./secondOpinionsPage";
import { aboutPage } from "./aboutPage";
import { conditionsIndexPage } from "./conditionsIndexPage";
import { conditionPage } from "./conditionPage";
import { specialtiesIndexPage } from "./specialtiesIndexPage";
import { specialty } from "./specialty";
import { publicationsPage } from "./publicationsPage";
import { cvPage } from "./cvPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    aboutPage,
    bioPage,
    credentialsPage,
    publicationsPage,
    cvPage,
    secondOpinionsPage,
    conditionsIndexPage,
    conditionPage,
    specialtiesIndexPage,
    specialty,
    testimonial,
  ],
};
