// One-time house-style patch: replace en/em dashes inside string fields of
// PUBLISHED Sanity documents (drafts untouched, _key/_type preserved).
// Mirrors the code-side commit on fix/house-style-dashes so seeded content
// does not mask the fix. Dry-run by default; pass --apply to mutate.
// Run: node --env-file=.env.local scripts/patch-sanity-dashes.mjs [--apply]
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "rj9a0qco",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

function fixString(s) {
  return s
    .replace(/(\d)–(\d)/g, "$1 to $2")
    .replace(/(\d{4})\s*–\s*(Present)/g, "$1 to $2")
    .replace(/B\.A\.–M\.D\./g, "B.A.-M.D.")
    .replace(/\s*—\s*/g, ", ")
    .replace(/\s*–\s*/g, " to ");
}

function transform(value, key) {
  if (typeof value === "string" && !String(key).startsWith("_")) {
    return fixString(value);
  }
  if (Array.isArray(value)) return value.map((v) => transform(v, ""));
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = transform(v, k);
    return out;
  }
  return value;
}

const apply = process.argv.includes("--apply");
const docs = await client.fetch('*[!(_id in path("drafts.**"))]{...}');
const changed = [];
for (const doc of docs) {
  const fixed = transform(doc, "");
  if (JSON.stringify(fixed) !== JSON.stringify(doc)) changed.push(fixed);
}
console.log(`Published docs: ${docs.length}; docs needing patch: ${changed.length}`);
changed.forEach((d) => console.log(`  ${d._type} ${d._id}`));
if (!apply) {
  console.log("Dry run only. Re-run with --apply to write.");
  process.exit(0);
}
const tx = client.transaction();
changed.forEach((d) => tx.createOrReplace(d));
await tx.commit();
console.log(`Patched ${changed.length} published documents.`);
