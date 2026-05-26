import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { CV_QUERY } from "./queries";

export type CvStat = { value?: string; label?: string };
export type CvTraining = { year?: string; title?: string; detail?: string };

export type CvContent = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  downloadHeading?: string;
  downloadPara?: string;
  stats?: CvStat[];
  trainingHeadingLead?: string;
  trainingHeadingEmphasis?: string;
  training?: CvTraining[];
} | null;

export async function getCvPage(): Promise<CvContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }
  try {
    const { data } = await sanityFetch({
      query: CV_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    return (data as CvContent) ?? null;
  } catch {
    return null;
  }
}
