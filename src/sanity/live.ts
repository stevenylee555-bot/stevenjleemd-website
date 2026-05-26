import { createClient } from "next-sanity";
import { defineLive } from "next-sanity/live";
import { apiVersion, dataset, projectId } from "./env";

const liveClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  // Required for click-to-edit: tells stega where the Studio is so each string
  // can carry an invisible "edit this field" link. Only applied on stega fetches
  // (draft/visual-editing); published reads stay clean.
  stega: {
    studioUrl: "/studio",
  },
});

// sanityFetch + <SanityLive /> connect the site to Sanity's Live Content API so
// published edits appear within ~1s without a redeploy. The read token is
// server-only (never sent to the browser) and is only needed to preview drafts
// during visual editing; published reads work without it.
export const { sanityFetch, SanityLive } = defineLive({
  client: liveClient,
  serverToken: process.env.SANITY_API_READ_TOKEN,
});
