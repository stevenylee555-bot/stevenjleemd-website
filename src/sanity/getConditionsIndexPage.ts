import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { CONDITIONS_INDEX_QUERY } from "./queries";

export type ConditionsIndexContent = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  noteKicker?: string;
  noteHeadingLead?: string;
  noteHeadingEmphasis?: string;
  notePara?: string;
  ctaKicker?: string;
} | null;

export async function getConditionsIndexPage(): Promise<ConditionsIndexContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }
  try {
    const { data } = await sanityFetch({
      query: CONDITIONS_INDEX_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    return (data as ConditionsIndexContent) ?? null;
  } catch {
    return null;
  }
}
