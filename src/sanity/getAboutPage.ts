import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { ABOUT_QUERY } from "./queries";

export type AboutCard = { title?: string; body?: string };

export type AboutContent = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  cards?: AboutCard[];
} | null;

export async function getAboutPage(): Promise<AboutContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }
  try {
    const { data } = await sanityFetch({
      query: ABOUT_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    return (data as AboutContent) ?? null;
  } catch {
    return null;
  }
}
