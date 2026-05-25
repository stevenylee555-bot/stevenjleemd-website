// Sanity project connection values.
// projectId and dataset are PUBLIC (they ship in the browser bundle), so the
// hardcoded fallbacks are safe to commit and keep local builds working without
// a .env file. Vercel's env vars override them. The secret read token (for
// drafts/visual editing) is added in a later phase and lives only in env.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "rj9a0qco";
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-01";
