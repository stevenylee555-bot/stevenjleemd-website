import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/client";

// Paired with `previewUrl.previewMode.enable` in sanity.config.ts. The Studio
// Presentation tool calls this to turn on draft preview for visual editing.
export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
});
