import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { THERAPY_PROTOCOLS_QUERY } from "./queries";

export type ProtocolSection = { heading?: string; body?: string; bullets?: string[] };
export type Protocol = {
  name?: string;
  category?: string;
  summary?: string;
  sections?: ProtocolSection[];
  warningsHeading?: string;
  warnings?: string[];
};

export type TherapyProtocolsContent = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  introHeading?: string;
  introParagraphs?: string[];
  protocols?: Protocol[];
  disclaimerHeading?: string;
  disclaimer?: string;
  ctaHeading?: string;
  ctaBody?: string;
} | null;

export async function getTherapyProtocolsPage(): Promise<TherapyProtocolsContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }
  try {
    const { data } = await sanityFetch({
      query: THERAPY_PROTOCOLS_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    return (data as TherapyProtocolsContent) ?? null;
  } catch {
    return null;
  }
}
