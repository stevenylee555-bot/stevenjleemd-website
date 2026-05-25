import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Fresh reads during the POC so published edits appear immediately. The
  // homepage uses ISR (revalidate) on top of this. A later phase swaps in the
  // Live Content API for instant updates.
  useCdn: false,
  perspective: "published",
});
