import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { PUBLICATIONS_QUERY } from "./queries";

export type Pub = {
  citation?: string;
  journal?: string;
  year?: string;
  link?: string;
  highlight?: boolean;
};

export type PubTheme = { theme?: string; items?: Pub[] };

export type PublicationsContent = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  recentHeading?: string;
  recent?: Pub[];
  themedHeading?: string;
  themed?: PubTheme[];
  noteKicker?: string;
  notePara?: string;
} | null;

export async function getPublicationsPage(): Promise<PublicationsContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }
  try {
    const { data } = await sanityFetch({
      query: PUBLICATIONS_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    return (data as PublicationsContent) ?? null;
  } catch {
    return null;
  }
}
