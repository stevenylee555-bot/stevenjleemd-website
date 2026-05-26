// Seed the Second Opinions page singleton with current copy.
// Run: node --env-file=.env.local scripts/seed-second-opinions.mjs

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const withKeys = (p) => (arr) => arr.map((x, i) => ({ _key: `${p}${i}`, ...x }));

const doc = {
  _id: "secondOpinionsPage",
  _type: "secondOpinionsPage",
  headerTitle: "Been told you need surgery?",
  headerItalic: "Get a real second look.",
  headerLede:
    "A second opinion from a world-class specialist is rarely wasted. Dr. Lee reviews imaging, records, and prior surgical plans for patients who have been told they need orthopedic surgery, and helps them decide whether an operation, a different operation, or no operation is the right call.",
  whyHeadingLead: "The opinion of a surgeon who",
  whyHeadingEmphasis: "helped design the hardware.",
  whyParagraphs: [
    "Dr. Lee is Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital and a designer of plating systems, suture anchors, and internal-brace constructs now used by surgeons across the country.",
    "When a procedure involves the hardware he helped design, his perspective is not just expert, it's sometimes the most informed in the country.",
    "Patients come to Dr. Lee for second opinions on hand, wrist, elbow, shoulder, knee, and Achilles injuries from across New York, the United States, and abroad.",
  ],
  pillars: withKeys("p")([
    { title: "Same-week availability", body: "Urgent and pre-surgical second opinions are accommodated quickly, often within the same week." },
    { title: "Worldwide telemedicine", body: "Virtual consults for patients traveling for care or living outside New York, across the U.S. and internationally." },
    { title: "Imaging & records review", body: "Direct review of MRIs, CT scans, X-rays, operative reports, and prior surgical plans before and during the visit." },
    { title: "Confident decisions", body: "Understand your options before committing to surgery. Sometimes the right answer is a different operation, or no operation at all." },
  ]),
  casesHeadingLead: "The cases Dr. Lee sees",
  casesHeadingEmphasis: "most often.",
  cases: withKeys("c")([
    { label: "Hand & Wrist", text: "Distal radius fractures, scapholunate ligament tears, basal joint arthroplasty, complex fracture revisions, carpal tunnel." },
    { label: "Elbow", text: "UCL (Tommy John) reconstruction, LUCL repair, biceps ruptures, complex elbow trauma." },
    { label: "Shoulder", text: "Rotator cuff repair, shoulder arthroscopy, recurrent instability, clavicle fractures." },
    { label: "Knee & Sports Medicine", text: "ACL reconstruction, meniscus injuries, Achilles tendon ruptures, sports trauma." },
  ]),
  expectHeading: "How the visit works.",
  steps: withKeys("s")([
    { title: "Send imaging and records ahead of the visit", body: "MRI, CT, X-rays, operative reports, and any prior physician notes. The office can guide you on secure transfer. For telemedicine visits, this happens before the consultation begins." },
    { title: "Sit down with Dr. Lee", body: "An in-person or virtual consultation. Dr. Lee reviews the imaging with you, examines the relevant joint if in person, and walks through the diagnosis and treatment options." },
    { title: "Leave with a clear recommendation", body: "Whether surgery is appropriate, what surgical approach he would recommend, what non-surgical options are available, and a realistic recovery timeline. You can follow up by email if questions come up later." },
  ]),
  ctaHeading: "Request a second opinion.",
  ctaBody:
    "Most patients schedule online via ZocDoc. The office can also help arrange telemedicine visits and coordinate imaging transfer.",
  faqs: withKeys("f")([
    { question: "What is a second opinion consultation with Dr. Lee?", answer: "A second opinion is a focused review of a diagnosis and proposed treatment plan, typically when another physician has recommended orthopedic surgery. Dr. Lee reviews your imaging, medical records, and prior surgical plan, then provides his independent assessment of the diagnosis, whether surgery is appropriate, and what surgical approach he would recommend. Second opinion visits are conducted in-person at the NYC or Scarsdale offices, or via telemedicine." },
    { question: "Who should consider a second opinion from Dr. Lee?", answer: "Patients who have been told they need surgery on the hand, wrist, elbow, shoulder, knee, or Achilles tendon. Patients facing complex or unusual cases. Patients who want confirmation from a recognized specialist before committing to surgery. Out-of-state and international patients seeking access to a New York surgeon with implant-design experience." },
    { question: "How do I prepare for a second opinion visit?", answer: "Bring your imaging studies (MRI, CT, X-rays) on disc or via electronic transfer, any recent medical records, the prior physician's surgical plan or operative report if available, and a list of medications. For telemedicine visits, you can transfer imaging digitally before the consultation." },
    { question: "Are telemedicine second opinions available?", answer: "Yes. Telemedicine consultations are available for patients in the United States and internationally. Imaging can be reviewed remotely. Telemedicine is especially appropriate for second-opinion visits, where the conversation and imaging review are central and a physical examination is less critical." },
    { question: "Is a second opinion covered by insurance?", answer: "Many insurance plans cover second opinion consultations, particularly when surgery has been recommended. Dr. Lee sees both in-network and out-of-network patients. The office can provide superbills to support out-of-network reimbursement. International patients typically pay directly." },
  ]),
};

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }
  await client.createOrReplace(doc);
  console.log("Seeded the Second Opinions document.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
