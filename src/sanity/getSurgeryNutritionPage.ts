import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { SURGERY_NUTRITION_QUERY } from "./queries";
import { surgeryNutrition, type NutritionSection } from "@/lib/surgicalInfo";

export type SurgeryNutritionContent = {
  header: { title: string; italic: string; lede: string };
  sections: NutritionSection[];
  smokingClosing: string;
  disclaimer: string;
};

type DocGroup = { heading?: string; bullets?: string[]; foodsIntro?: string; foods?: string[] };
type DocSection = {
  heading?: string;
  body?: string[];
  bullets?: string[];
  foodsIntro?: string;
  foods?: string[];
  groups?: DocGroup[];
};
type Doc = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  sections?: DocSection[];
  smokingClosing?: string;
  disclaimer?: string;
} | null;

const base: SurgeryNutritionContent = surgeryNutrition;

// Merges Sanity edits over the in-code content (src/lib/surgicalInfo.ts). Falls
// back cleanly on any error or missing field.
export async function getSurgeryNutritionPage(): Promise<SurgeryNutritionContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }

  let doc: Doc = null;
  try {
    const { data } = await sanityFetch({
      query: SURGERY_NUTRITION_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    doc = (data as Doc) ?? null;
  } catch {
    doc = null;
  }
  if (!doc) return base;

  const sections: NutritionSection[] = doc.sections?.length
    ? doc.sections.map((s) => ({
        heading: s.heading ?? "",
        body: s.body ?? [],
        bullets: s.bullets ?? [],
        foodsIntro: s.foodsIntro,
        foods: s.foods,
        groups: s.groups?.map((g) => ({
          heading: g.heading ?? "",
          bullets: g.bullets ?? [],
          foodsIntro: g.foodsIntro,
          foods: g.foods,
        })),
      }))
    : base.sections;

  return {
    header: {
      title: doc.headerTitle ?? base.header.title,
      italic: doc.headerItalic ?? base.header.italic,
      lede: doc.headerLede ?? base.header.lede,
    },
    sections,
    smokingClosing: doc.smokingClosing ?? base.smokingClosing,
    disclaimer: doc.disclaimer ?? base.disclaimer,
  };
}
