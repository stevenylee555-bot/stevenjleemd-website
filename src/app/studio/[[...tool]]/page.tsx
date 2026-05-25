import Studio from "./Studio";

export const dynamic = "force-static";

// Sets the correct viewport and noindex metadata for the Studio.
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
