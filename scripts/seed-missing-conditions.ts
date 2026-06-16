// Seed ONLY the conditionPage docs that are missing from Sanity, so Dr. Lee can
// edit them in Studio. Uses createIfNotExists so it can NEVER overwrite an
// existing doc (and therefore cannot wipe any edits Dr. Lee already made).
//
// Run: node --env-file=.env.local --import tsx scripts/seed-missing-conditions.ts

import { createClient } from "@sanity/client";
import { conditionPages, type ConditionBodySection } from "../src/lib/conditionPages";

// Conditions that have a route + code data but no Sanity document yet.
const MISSING_SLUGS = ["terrible-triad", "proximal-biceps-tear", "pectoralis-tear"];

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

function mapSections(prefix: string, sections: ConditionBodySection[] | undefined) {
  if (!sections?.length) return undefined;
  return sections.map((s, i) => ({
    _key: `${prefix}-${i}`,
    heading: s.heading,
    body: s.body,
    ...(s.bullets ? { bullets: s.bullets } : {}),
    ...(s.bulletsAfter ? { bulletsAfter: s.bulletsAfter } : {}),
  }));
}

const docs = conditionPages
  .filter((c) => MISSING_SLUGS.includes(c.slug))
  .map((c) => ({
    _id: `conditionPage-${c.slug}`,
    _type: "conditionPage",
    name: c.name,
    slug: c.slug,
    region: c.region,
    headerTitle: c.headerTitle,
    headerItalic: c.headerItalic,
    headerLede: c.headerLede,
    overview: c.overview,
    bodySections: mapSections("body", c.bodySections),
    drLeeApproach: c.drLeeApproach.paragraphs,
    ...(c.treatmentSections ? { treatmentSections: mapSections("treat", c.treatmentSections) } : {}),
    ...(c.recoveryIntro ? { recoveryIntro: c.recoveryIntro } : {}),
    recovery: c.recovery.map((r, i) => ({ _key: `rec-${i}`, when: r.when, what: r.what })),
    ...(c.misconceptions
      ? {
          misconceptions: {
            intro: c.misconceptions.intro,
            items: c.misconceptions.items.map((m, i) => ({
              _key: `mis-${i}`,
              heading: m.heading,
              body: m.body,
            })),
          },
        }
      : {}),
    sidebarFacts: c.sidebarFacts.map((f, i) => ({ _key: `fact-${i}`, label: f.label, value: f.value })),
    whyDrLee: c.whyDrLee,
    ctaCard: { eyebrow: c.ctaCard.eyebrow, headline: c.ctaCard.headline },
    faqHeadline: c.faqHeadline,
    faqs: c.faqs.map((f, i) => ({ _key: `faq-${i}`, question: f.question, answer: f.answer })),
    bottomCtaTitle: c.bottomCtaTitle,
    bottomCtaItalic: c.bottomCtaItalic,
    bottomCtaBody: c.bottomCtaBody,
  }));

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }
  const found = docs.map((d) => d.slug);
  const notFound = MISSING_SLUGS.filter((s) => !found.includes(s));
  if (notFound.length) {
    console.error(`No code data found for: ${notFound.join(", ")}`);
    process.exit(1);
  }
  const tx = client.transaction();
  for (const doc of docs) tx.createIfNotExists(doc);
  await tx.commit();
  console.log(`Seeded ${docs.length} missing condition page(s): ${found.join(", ")}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
