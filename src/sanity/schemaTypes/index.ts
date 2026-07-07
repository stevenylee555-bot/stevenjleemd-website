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
import { therapyProtocolsPage } from "./therapyProtocolsPage";
import { procedureProtocol } from "./procedureProtocol";
import { beforeSurgeryPage } from "./beforeSurgeryPage";
import { surgeryNutritionPage } from "./surgeryNutritionPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    aboutPage,
    bioPage,
    credentialsPage,
    publicationsPage,
    cvPage,
    secondOpinionsPage,
    beforeSurgeryPage,
    therapyProtocolsPage,
    procedureProtocol,
    surgeryNutritionPage,
    conditionsIndexPage,
    conditionPage,
    specialtiesIndexPage,
    specialty,
    testimonial,
  ],
};
