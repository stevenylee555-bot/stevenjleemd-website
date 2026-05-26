// Seed the conditionPage collection + conditions index singleton from code data.
// Run: node --env-file=.env.local --import tsx scripts/seed-conditions.ts

import { createClient } from "@sanity/client";
import { conditionPages, type ConditionBodySection } from "../src/lib/conditionPages";

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

const conditionDocs = conditionPages.map((c) => ({
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

const conditionsIndexDoc = {
  _id: "conditionsIndexPage",
  _type: "conditionsIndexPage",
  headerTitle: "Physician-authored information",
  headerItalic: "on every condition Dr. Lee treats.",
  headerLede:
    "From diagnosis through surgery and recovery, read what your surgeon would tell you in the office. Detailed pages are rolling out across the conditions Dr. Lee sees most often. Patients are encouraged to revisit the relevant page after their visit.",
  noteKicker: "A note from Dr. Lee",
  noteHeadingLead: "These pages aren't a substitute for a visit,",
  noteHeadingEmphasis: "they're a complement to one.",
  notePara:
    "Patients leave the office with a lot of information and remember a fraction of it. These pages are written so you can come back to them as you make decisions about your care, and so you can share them with family or referring physicians.",
  ctaKicker: "Ready to talk about your case?",
};

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }
  const tx = client.transaction();
  for (const doc of conditionDocs) tx.createOrReplace(doc);
  tx.createOrReplace(conditionsIndexDoc);
  await tx.commit();
  console.log(`Seeded ${conditionDocs.length} condition pages + the conditions index.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
