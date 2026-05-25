import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { HOME_QUERY } from "./queries";

export type HomeRecognition = { name?: string; years?: string };
export type HomeStat = {
  value?: number;
  suffix?: string;
  label?: string;
  caption?: string;
};

export type HomeContent = {
  heroEyebrow?: string;
  heroHeadlineEmphasis?: string;
  heroHeadlineRest?: string;
  heroSubheading?: string;
  recognition?: HomeRecognition[];
  stats?: HomeStat[];
  innovationKicker?: string;
  innovationHeadlineLead?: string;
  innovationHeadlineEmphasis?: string;
  innovationPara1?: string;
  innovationPara2?: string;
  capabilities?: string[];
} | null;

// Fetches the homepage singleton (drafts + click-to-edit metadata when visual
// editing is active, published otherwise). Returns null on miss, so every
// component falls back to its built-in copy.
export async function getHomePage(): Promise<HomeContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }

  try {
    const { data } = await sanityFetch({
      query: HOME_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    return (data as HomeContent) ?? null;
  } catch {
    return null;
  }
}
