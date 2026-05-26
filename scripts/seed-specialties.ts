// Seed the specialty collection + specialties index singleton from the code data.
// Run: node --env-file=.env.local --import tsx scripts/seed-specialties.ts

import { createClient } from "@sanity/client";
import { specialties } from "../src/lib/specialties";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const specialtyDocs = specialties.map((s) => ({
  _id: `specialty-${s.slug}`,
  _type: "specialty",
  name: s.name,
  slug: s.slug,
  eyebrow: s.eyebrow,
  headline: s.headline,
  headlineItalic: s.headlineItalic,
  lede: s.lede,
  introTitle: s.introTitle,
  introBody: s.introBody,
  approach: s.approach.map((a, i) => ({ _key: `approach-${i}`, title: a.title, body: a.body })),
  credentials: s.credentials,
  ...(s.implantDesign
    ? { implantDesign: { title: s.implantDesign.title, body: s.implantDesign.body } }
    : {}),
}));

const specialtiesIndexDoc = {
  _id: "specialtiesIndexPage",
  _type: "specialtiesIndexPage",
  headerTitle: "Surgery and sports medicine,",
  headerItalic: "from fingertip to knee to ankle.",
  headerLede:
    "Dr. Lee's practice spans upper extremity surgery, sports medicine, and advanced biologics, with particular depth in the procedures he helped pioneer and the hardware he helped design.",
  introKicker: "A doubly-trained surgeon",
  introParagraphs: [
    "Most orthopedic surgeons specialize in one body region. Dr. Lee is double fellowship-trained in hand & upper extremity surgery and in sports medicine, a combination that lets him treat both the fine reconstructive work of the hand and the high-demand return-to-sport considerations of the shoulder, elbow, and knee.",
    "He has also helped design several orthopedic implants now used by surgeons across the country, including plating systems for the hand and elbow and the anchor and internal-brace constructs used in ligament reconstruction.",
  ],
  ctaKicker: "Not sure where you fit?",
  ctaHeadingLead: "Send your imaging and we'll point you",
  ctaHeadingEmphasis: "to the right place.",
  ctaPara:
    "Patients often come in unsure whether their problem is hand, elbow, shoulder, or systemic. Dr. Lee's second-opinion process is designed for exactly that.",
};

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }
  const tx = client.transaction();
  for (const doc of specialtyDocs) tx.createOrReplace(doc);
  tx.createOrReplace(specialtiesIndexDoc);
  await tx.commit();
  console.log(`Seeded ${specialtyDocs.length} specialty pages + the specialties index.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
