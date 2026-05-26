import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { CREDENTIALS_QUERY } from "./queries";

export type TitleDetail = { title?: string; detail?: string };
export type Appointment = { role?: string; org?: string; years?: string };

export type CredentialsContent = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  appointments?: Appointment[];
  certifications?: string[];
  recognition?: TitleDetail[];
  teaching?: TitleDetail[];
  research?: TitleDetail[];
  implantDesignIntro?: string;
  implantDesign?: TitleDetail[];
  patents?: TitleDetail[];
  teamPhysician?: TitleDetail[];
  memberships?: string[];
  ctaHeadingLead?: string;
  ctaHeadingEmphasis?: string;
  ctaBody?: string;
} | null;

export async function getCredentialsPage(): Promise<CredentialsContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }

  try {
    const { data } = await sanityFetch({
      query: CREDENTIALS_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    return (data as CredentialsContent) ?? null;
  } catch {
    return null;
  }
}
