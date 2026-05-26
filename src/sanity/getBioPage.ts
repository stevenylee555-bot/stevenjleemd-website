import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { BIO_QUERY } from "./queries";

export type BioTraining = { institution?: string; detail?: string; note?: string };
export type BioCaption = { kicker?: string; caption?: string };

export type BioContent = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  introParagraphs?: string[];
  credentials?: string[];
  trainingHeading?: string;
  training?: BioTraining[];
  athletesHeadingLead?: string;
  athletesHeadingEmphasis?: string;
  athletesIntro?: string;
  athletesQuoteLead?: string;
  athletesQuoteEmphasis?: string;
  athleteRoles?: string[];
  sportsTreated?: string[];
  athletesNote?: string;
  researchHeading?: string;
  researchPara1?: string;
  patentNumber?: string;
  patentDesc?: string;
  patentNote?: string;
  teachingHeading?: string;
  teachingPara2?: string;
  teachingPara3?: string;
  teachingQuoteLead?: string;
  teachingQuoteEmphasis?: string;
  galleryHeadingLead?: string;
  galleryHeadingEmphasis?: string;
  galleryIntro?: string;
  galleryCaptions?: BioCaption[];
  practiceHeading?: string;
  practicePara?: string;
} | null;

export async function getBioPage(): Promise<BioContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }
  try {
    const { data } = await sanityFetch({
      query: BIO_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    return (data as BioContent) ?? null;
  } catch {
    return null;
  }
}
