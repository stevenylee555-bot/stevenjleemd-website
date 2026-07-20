// Read-only audit: count en/em dashes inside string fields of every published
// Sanity document, so we know whether the code-side dash cleanup is masked by
// seeded content. Run: node --env-file=.env.local scripts/audit-sanity-dashes.mjs
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "rj9a0qco",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
});

const DASH = /[–—]/g;

function countDashes(value, path, hits) {
  if (typeof value === "string") {
    const m = value.match(DASH);
    if (m) hits.push({ path, count: m.length, sample: value.slice(0, 80) });
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => countDashes(v, `${path}[${i}]`, hits));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (k.startsWith("_")) continue;
      countDashes(v, path ? `${path}.${k}` : k, hits);
    }
  }
}

const docs = await client.fetch('*[!(_id in path("drafts.**"))]{...}');
let total = 0;
const byType = {};
for (const doc of docs) {
  const hits = [];
  countDashes(doc, "", hits);
  if (hits.length) {
    const n = hits.reduce((s, h) => s + h.count, 0);
    total += n;
    byType[doc._type] = (byType[doc._type] || 0) + n;
    if (process.argv.includes("--verbose")) {
      console.log(`\n${doc._type} ${doc._id}`);
      hits.slice(0, 3).forEach((h) => console.log(`  ${h.path} (${h.count}): ${h.sample}`));
    }
  }
}
console.log(`\nPublished docs scanned: ${docs.length}`);
console.log(`Total en/em dashes in published content: ${total}`);
console.log("By type:", JSON.stringify(byType, null, 2));
