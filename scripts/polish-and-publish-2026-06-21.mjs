// Apply Steve-approved claim/typo corrections to Dr. Lee's pending drafts, then
// publish ALL pending drafts (draft -> published). Idempotent on the text
// replacements (a missing target substring is logged and skipped, never forced).
//
// Run: node --env-file=.env.local scripts/polish-and-publish-2026-06-21.mjs

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const warnings = [];

// Replace an exact substring inside a string; log if not found.
function repl(docId, field, str, find, to) {
  if (typeof str !== "string") {
    warnings.push(`${docId}.${field}: not a string`);
    return str;
  }
  if (!str.includes(find)) {
    warnings.push(`${docId}.${field}: target substring NOT found (skipped)`);
    return str;
  }
  return str.replace(find, to);
}
// Set an array element by index; log if the index is missing.
function setIdx(docId, field, arr, i, to) {
  if (!Array.isArray(arr) || i >= arr.length) {
    warnings.push(`${docId}.${field}[${i}]: index missing (skipped)`);
    return;
  }
  arr[i] = to;
}

// Per-document corrections (the Steve-approved set).
const fixers = {
  "conditionPage-ac-separation"(d) {
    d.headerLede = repl(d._id, "headerLede", d.headerLede,
      "Dr. Lee's is considered a world leader in shoulder separations.  His research has revolutionized the treatment of this diagnosis.",
      "Dr. Lee has researched and published on the treatment of AC joint separations since 2000.");
    setIdx(d._id, "drLeeApproach", d.drLeeApproach, 3,
      "Dr. Lee has researched and published on the treatment of shoulder separations since 2000, and tailors the approach to the grade of injury and the patient's goals.");
    setIdx(d._id, "whyDrLee", d.whyDrLee, 0,
      "Has researched and published on AC joint separation treatment since 2000");
  },
  "conditionPage-rotator-cuff"(d) {
    setIdx(d._id, "whyDrLee", d.whyDrLee, 2,
      "Having helped design suture anchors, Dr. Lee knows the implants used in cuff repair intimately");
  },
  "conditionPage-shoulder-dislocation"(d) {
    if (d.treatmentSections?.[1]?.body)
      setIdx(d._id, "treatmentSections[1].body", d.treatmentSections[1].body, 2,
        "Dr. Lee helped design many of the suture-anchor systems used in orthopedics, which gives him deep familiarity with anchor-based labral repair.");
    setIdx(d._id, "whyDrLee", d.whyDrLee, 1,
      "Arthroscopic, anchor-based labral repair for recurrent instability; Dr. Lee helped design many of the anchors used in orthopedics.");
  },
  "conditionPage-prp-injections"(d) {
    if (d.bodySections?.[4]?.body)
      d.bodySections[4].body[0] = repl(d._id, "bodySections[4].body[0]", d.bodySections[4].body[0],
        "Dr. Lee's experience with PRP is unmatched in NYC and understands how to make this a surprisingly pleasant experience.",
        "Dr. Lee, among the first in NYC to use PRP for the upper extremity, uses techniques that make the injection well tolerated.");
    setIdx(d._id, "whyDrLee", d.whyDrLee, 2,
      "Among the first in NYC to use PRP for the upper extremity, performing over 250 PRP treatments a year");
  },
  "conditionPage-pectoralis-tear"(d) {
    setIdx(d._id, "whyDrLee", d.whyDrLee, 1,
      "Dr. Lee helped design suture anchors and applies that anchor-fixation experience to chest-wall repair");
  },
  "conditionPage-slac-wrist"(d) {
    setIdx(d._id, "drLeeApproach", d.drLeeApproach, 1,
      "Dr. Lee favors the least drastic operation that reliably controls pain for a given stage. Many patients keep meaningful wrist motion with a proximal row carpectomy or a four-corner fusion. Dr. Lee developed a technique that cushions a proximal row carpectomy with a dermal allograft, which can preserve motion and often avoid a wrist fusion.");
    if (d.treatmentSections?.[0]?.body)
      setIdx(d._id, "treatmentSections[0].body", d.treatmentSections[0].body, 1,
        "For patients whose joint surfaces are too worn, Dr. Lee developed a technique that uses a dermal allograft to cushion the bones.");
    if (d.treatmentSections?.[2]?.body)
      d.treatmentSections[2].body[0] = repl(d._id, "treatmentSections[2].body[0]", d.treatmentSections[2].body[0],
        "Dr. Lee's PRC with Dermal Allograft procedure", "Dr. Lee's dermal-allograft technique");
    setIdx(d._id, "whyDrLee", d.whyDrLee, 1,
      "Developed a motion-preserving technique for SLAC wrist: PRC with dermal allograft");
    if (d.misconceptions?.items?.[2])
      d.misconceptions.items[2].body = repl(d._id, "misconceptions.items[2].body", d.misconceptions.items[2].body,
        "Dr. Lee's procedure he described can usually prevent",
        "The technique Dr. Lee developed can often prevent");
  },
  "conditionPage-acl-reconstruction"(d) {
    if (d.treatmentSections?.[1]?.body)
      d.treatmentSections[1].body[1] = repl(d._id, "treatmentSections[1].body[1]", d.treatmentSections[1].body[1],
        "performing ACL reconstructions for over 25.", "performing ACL reconstructions for over 25 years.");
  },
  "conditionPage-terrible-triad"(d) {
    if (d.recovery?.[0])
      d.recovery[0].what = repl(d._id, "recovery[0].what", d.recovery[0].what, "Removaable", "Removable");
  },
  "conditionPage-glenohumeral-arthritis"(d) {
    setIdx(d._id, "whyDrLee", d.whyDrLee, 2,
      "Performs anatomic and reverse total shoulder replacement for advanced arthritis utilizing advanced preoperative planning and patient-specific custom implants");
  },
};

// Light cleanup for conditionPage string arrays: trim trailing/leading
// whitespace and drop empty paragraphs/bullets that Dr. Lee's edits left behind.
function cleanStrArr(arr) {
  if (!Array.isArray(arr)) return arr;
  return arr.map((s) => (typeof s === "string" ? s.trim() : s)).filter((s) => s !== "");
}
function cleanConditionPage(d) {
  if (d._type !== "conditionPage") return;
  for (const f of ["overview", "drLeeApproach", "whyDrLee"]) if (d[f]) d[f] = cleanStrArr(d[f]);
  for (const f of ["bodySections", "treatmentSections"]) {
    if (Array.isArray(d[f])) for (const s of d[f]) {
      if (s?.body) s.body = cleanStrArr(s.body);
      if (s?.bullets) s.bullets = cleanStrArr(s.bullets);
    }
  }
}

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN.");
    process.exit(1);
  }
  const drafts = await client.fetch(
    `*[_id in path("drafts.**") && !(_type match "sanity.*")] | order(_id asc)`
  );
  console.log(`Found ${drafts.length} pending draft(s).`);

  const tx = client.transaction();
  for (const draft of drafts) {
    const publishedId = draft._id.replace(/^drafts\./, "");
    if (fixers[publishedId]) fixers[publishedId](draft);
    cleanConditionPage(draft);
    const { _rev, _updatedAt, ...rest } = draft;
    tx.createOrReplace({ ...rest, _id: publishedId });
    tx.delete(draft._id);
  }
  await tx.commit();

  console.log(`Published ${drafts.length} doc(s).`);
  if (warnings.length) {
    console.log(`\nWARNINGS (${warnings.length}):`);
    warnings.forEach((w) => console.log("  - " + w));
  } else {
    console.log("All corrections applied cleanly (no missing targets).");
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
