// Seeds the six notable-patient testimonials into Sanity so they render on the
// homepage carousel and are editable in the Studio. Uploads each pre-cropped
// 4:5 photo (from public/images/testimonials) as a Sanity image asset, then
// upserts one PUBLISHED `testimonial` document per person under the canonical
// `testimonial-<slug>` id (the convention the prior seed used). Re-running is
// safe (createOrReplace; assets dedupe by content hash).
//
// Cleanup: removes the mis-keyed `testimonial.<slug>` (dot) docs from an earlier
// run, and the stale `drafts.testimonial-<slug>` whose only pending change (the
// credential line) is now incorporated into the published docs below.
//
// Run:  node --env-file=.env.local scripts/seed-testimonials.mjs
// Requires SANITY_API_WRITE_TOKEN (an Editor token) in .env.local.

import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const IMG_DIR = "public/images/testimonials/";

// Order leads with the newest notable patients. Quote/emphasis for the three
// returning patients (Adams, McLean, Leach) are their verbatim consented
// testimonials from the prior site; the credential lines adopt the client's
// 2026-06-10 Studio edits. The new three (Messier, Young, Bouchard) are their
// signed notes.
const testimonials = [
  {
    slug: "mark-messier",
    name: "Mark Messier",
    detail: "Hockey Hall of Famer, New York Rangers Captain",
    quote: "Dr. Lee has literally saved my life",
    emphasis: "and helps keep my body in top shape.",
    file: "mark-messier.jpg",
  },
  {
    slug: "cameron-young",
    name: "Cameron Young",
    detail: "PGA Tour Professional",
    quote: "Thank you, Dr. Lee, for fixing my wrist!",
    file: "cameron-young.jpg",
  },
  {
    slug: "katrina-adams",
    name: "Katrina Adams",
    detail: "Former USTA President and Chairman, Professional Tennis Player",
    quote:
      "It has been an absolute pleasure having Dr. Steven Lee as my doctor. Dr. Lee has looked after me for years.",
    emphasis: "As a retired professional tennis player, I have had many aches and pains.",
    file: "katrina-adams.jpg",
  },
  {
    slug: "genie-bouchard",
    name: "Genie Bouchard",
    detail: "WTA Professional Tennis Player",
    quote: "Thank you for getting me back into playing shape.",
    emphasis: "You're the best!",
    file: "genie-bouchard.jpg",
  },
  {
    slug: "jim-mclean",
    name: "Jim McLean",
    detail: "Hall of Fame Golf Instructor, Top 100 Golf Teacher",
    quote:
      "Dr. Lee is a world class doctor and person who has been my friend for decades. As a golf teaching professional I have had several students with very bad hand injuries.",
    emphasis: "I sent them to Dr. Lee and he saved each of them.",
    file: "jim-mclean.jpg",
  },
  {
    slug: "clive-leach",
    name: "Clive Leach",
    detail: "Professional Squash Player, Former World No. 8",
    quote:
      "Back in March 2016 I had Steven do my procedure. It was bothering me for some time until it was time to get it done. I had meniscus tears and cartilage damage.",
    emphasis: "All went well and I have never looked back.",
    file: "clive-leach.jpg",
  },
];

// Remove the earlier mis-keyed (dot) docs and superseded drafts first.
const toDelete = [];
for (const t of testimonials) {
  toDelete.push(`testimonial.${t.slug}`, `drafts.testimonial-${t.slug}`);
}
for (const id of toDelete) {
  await client.delete(id).then(
    () => console.log("deleted", id),
    () => console.log("skip (absent)", id)
  );
}

for (let i = 0; i < testimonials.length; i++) {
  const t = testimonials[i];
  const buf = await readFile(IMG_DIR + t.file);
  const asset = await client.assets.upload("image", buf, { filename: t.file });
  const doc = {
    _id: `testimonial-${t.slug}`,
    _type: "testimonial",
    name: t.name,
    detail: t.detail,
    quote: t.quote,
    ...(t.emphasis ? { emphasis: t.emphasis } : {}),
    photo: {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
      alt: `Dr. Steven Lee with ${t.name}`,
    },
    consentOnFile: true,
    order: (i + 1) * 10,
  };
  await client.createOrReplace(doc);
  console.log("seeded", doc._id, "order", doc.order);
}

console.log("done");
