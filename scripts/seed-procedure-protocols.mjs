// Seed post-operative protocol documents (procedureProtocol collection) from
// the recovered Wix PDFs. Data lives in scripts/procedure-protocols.data.json
// (verbatim, parsed from Dr. Lee's old post-op PDFs).
//
// Run (pilot, 3 procedures):
//   node --env-file=.env.local scripts/seed-procedure-protocols.mjs
// Run (all 53):
//   node --env-file=.env.local scripts/seed-procedure-protocols.mjs --all
//
// Doc id is `procedureProtocol.<slug>`, so re-running is idempotent
// (createOrReplace). Identity + prose come straight from the JSON.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createClient } from "@sanity/client";

const __dirname = dirname(fileURLToPath(import.meta.url));
const all = JSON.parse(readFileSync(join(__dirname, "procedure-protocols.data.json"), "utf8"));

// Pilot slugs: the 3 representative procedures for Dr. Lee's format review.
const PILOT = new Set(["carpal-tunnel-release", "acl-reconstruction", "shoulder-arthroscopy"]);
const seedAll = process.argv.includes("--all");
const items = seedAll ? all : all.filter((p) => PILOT.has(p.slug));

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const withKeys = (prefix) => (arr) =>
  (arr ?? []).map((x, i) => ({ _key: `${prefix}${i}`, ...x }));

function toDoc(p) {
  return {
    _id: `procedureProtocol.${p.slug}`,
    _type: "procedureProtocol",
    name: p.name,
    slug: p.slug,
    region: p.region,
    officialTitle: p.officialTitle,
    sections: withKeys("sec")(
      (p.sections ?? []).map((s) => ({
        heading: s.heading ?? "",
        body: s.body ?? [],
        bullets: s.bullets ?? [],
      })),
    ),
    warningsHeading: "Call the office immediately for",
    warnings: p.warnings ?? [],
    erWarningsHeading: "Go to the ER immediately for",
    erWarnings: p.erWarnings ?? [],
    disclaimer: p.disclaimer ?? "",
  };
}

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }
  let tx = client.transaction();
  for (const p of items) tx = tx.createOrReplace(toDoc(p));
  await tx.commit();
  console.log(
    `Seeded ${items.length} procedureProtocol doc(s): ${items.map((p) => p.slug).join(", ")}`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
