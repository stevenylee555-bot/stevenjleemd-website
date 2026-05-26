import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { SECOND_OPINIONS_QUERY } from "./queries";

export type SoPillar = { title?: string; body?: string };
export type SoCase = { label?: string; text?: string };
export type SoStep = { title?: string; body?: string };
export type SoFaq = { question?: string; answer?: string };

export type SecondOpinionsContent = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  whyHeadingLead?: string;
  whyHeadingEmphasis?: string;
  whyParagraphs?: string[];
  pillars?: SoPillar[];
  casesHeadingLead?: string;
  casesHeadingEmphasis?: string;
  cases?: SoCase[];
  expectHeading?: string;
  steps?: SoStep[];
  ctaHeading?: string;
  ctaBody?: string;
  faqs?: SoFaq[];
} | null;

export async function getSecondOpinionsPage(): Promise<SecondOpinionsContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }
  try {
    const { data } = await sanityFetch({
      query: SECOND_OPINIONS_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    return (data as SecondOpinionsContent) ?? null;
  } catch {
    return null;
  }
}
