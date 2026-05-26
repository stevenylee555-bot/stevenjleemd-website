import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { SPECIALTIES_INDEX_QUERY } from "./queries";

export type SpecialtiesIndexContent = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  introKicker?: string;
  introParagraphs?: string[];
  ctaKicker?: string;
  ctaHeadingLead?: string;
  ctaHeadingEmphasis?: string;
  ctaPara?: string;
} | null;

export async function getSpecialtiesIndexPage(): Promise<SpecialtiesIndexContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }
  try {
    const { data } = await sanityFetch({
      query: SPECIALTIES_INDEX_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    return (data as SpecialtiesIndexContent) ?? null;
  } catch {
    return null;
  }
}
