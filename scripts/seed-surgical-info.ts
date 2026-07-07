// Seed the Before Surgery + Surgery Nutrition singletons from the code content
// in src/lib/surgicalInfo.ts, so Dr. Lee curates the existing copy rather than
// retyping it. Idempotent (createOrReplace).
//
// Run: node --env-file=.env.local --import tsx scripts/seed-surgical-info.ts

import { createClient } from "@sanity/client";
import { beforeSurgery, surgeryNutrition } from "../src/lib/surgicalInfo";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const withKeys = <T>(prefix: string, arr: T[]): (T & { _key: string })[] =>
  arr.map((x, i) => ({ _key: `${prefix}${i}`, ...x }));

const beforeDoc = {
  _id: "beforeSurgeryPage",
  _type: "beforeSurgeryPage",
  headerTitle: beforeSurgery.header.title,
  headerItalic: beforeSurgery.header.italic,
  headerLede: beforeSurgery.header.lede,
  planningHeading: beforeSurgery.planning.heading,
  planningBody: beforeSurgery.planning.body,
  paperworkIntro: beforeSurgery.planning.paperworkIntro,
  paperwork: beforeSurgery.planning.paperwork,
  coordinator: beforeSurgery.coordinator,
  instructionsHeading: beforeSurgery.instructions.heading,
  instructionsIntro: beforeSurgery.instructions.intro,
  instructions: withKeys("i", beforeSurgery.instructions.items),
  locationsHeading: beforeSurgery.locations.heading,
  locationsIntro: beforeSurgery.locations.intro,
  outpatient: beforeSurgery.locations.outpatient,
  inpatient: beforeSurgery.locations.inpatient,
  facilities: withKeys("f", beforeSurgery.locations.facilities),
};

const nutritionDoc = {
  _id: "surgeryNutritionPage",
  _type: "surgeryNutritionPage",
  headerTitle: surgeryNutrition.header.title,
  headerItalic: surgeryNutrition.header.italic,
  headerLede: surgeryNutrition.header.lede,
  sections: surgeryNutrition.sections.map((s, i) => ({
    _key: `s${i}`,
    heading: s.heading,
    body: s.body ?? [],
    bullets: s.bullets ?? [],
    foodsIntro: s.foodsIntro,
    foods: s.foods,
    groups: s.groups ? withKeys(`g${i}_`, s.groups) : undefined,
  })),
  smokingClosing: surgeryNutrition.smokingClosing,
  disclaimer: surgeryNutrition.disclaimer,
};

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }
  await client.transaction().createOrReplace(beforeDoc).createOrReplace(nutritionDoc).commit();
  console.log("Seeded beforeSurgeryPage + surgeryNutritionPage.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
