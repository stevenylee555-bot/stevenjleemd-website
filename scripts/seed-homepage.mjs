// One-time seed: loads the current homepage copy into the Sanity `homePage`
// singleton so every field has real content and becomes click-editable in the
// Studio. Re-running is safe (createOrReplace). The values mirror the in-code
// fallbacks, so the live site looks identical.
//
// Run:  node --env-file=.env.local scripts/seed-homepage.mjs
// Requires SANITY_API_WRITE_TOKEN (an Editor token) in .env.local.

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const homePage = {
  _id: "homePage",
  _type: "homePage",
  heroEyebrow: "25 Years of Excellence in New York City",
  heroHeadlineEmphasis: "Leading the future",
  heroHeadlineRest:
    "of hand and upper extremity surgery, sports medicine, and orthopedic innovation.",
  heroSubheading:
    "As Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, Dr. Lee combines elite clinical expertise with pioneering advancements in implants and biological therapies to restore peak performance.",
  recognition: [
    { _key: "r1", name: "Castle Connolly Top Doctor", years: "2014–Present" },
    { _key: "r2", name: "NY Times Super Doctors", years: "Since 2008" },
    { _key: "r3", name: "Super Doctors Hall of Fame", years: "Since 2019" },
    { _key: "r4", name: "New York Magazine Best Doctors", years: "2014–Present" },
    { _key: "r5", name: "U.S. News Top Doctor", years: "Multiple years" },
  ],
  stats: [
    { _key: "s1", value: 25, suffix: "+", label: "Years in practice", caption: "Attending at Lenox Hill since 2000" },
    { _key: "s2", value: 15000, suffix: "+", label: "Procedures performed", caption: "Across hand, wrist, elbow, shoulder, knee, and ankle" },
    { _key: "s3", value: 35, suffix: "+", label: "Peer-reviewed publications", caption: "Plus 84 national lectures and presentations" },
    { _key: "s4", value: 5, suffix: "", label: "Implants designed", caption: "In wide use nationwide, plus a US patent for surgical instrumentation" },
  ],
  innovationKicker: "Implant Design & Innovation",
  innovationHeadlineLead: "He didn't just learn the procedure.",
  innovationHeadlineEmphasis: "He helped design the hardware.",
  innovationPara1:
    "Dr. Lee has helped design orthopedic implants now widely used by surgeons across the world, including plating and fixation systems for hand, wrist, elbow, and feet, and anchor and internal brace constructs used in both the upper and lower extremities.",
  innovationPara2:
    "Designing a wide range of orthopedic implants has given him a unique engineering perspective that directly shapes his surgical approach, ensuring that every construct is perfectly tailored, sized, and anatomically placed for the individual patient.",
  capabilities: [
    "Plating and fixation systems for fractures of the hand, wrist, and elbow",
    "Anchors that revolutionized internal bracing for the upper extremity",
    "Anchors for tendon-to-bone fixation in tendon ruptures",
    "Anchors for ligament repair and reconstruction, for tears of the UCL (Tommy John) and LUCL of the elbow, the UCL and RCL of the thumb and fingers, and the scapholunate",
    "Anchors for basal joint arthritis surgery",
    "Anchors for TFCC repairs",
    "US patent, surgical instrumentation",
  ],
  aboutKicker: "About Dr. Lee",
  aboutHeadlineLead: "A surgeon at the",
  aboutHeadlineEmphasis: "leading edge",
  aboutHeadlineTail: "of his field.",
  aboutParagraphs: [
    "Dr. Steven J. Lee is Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, one of New York's premier medical centers. He is double fellowship-trained in Hand Surgery and Sports Medicine, and board-certified by the American Board of Orthopaedic Surgery.",
    "What sets Dr. Lee apart is his direct role advancing the field. He has helped design orthopedic implants now widely used by surgeons around the world, including plating and fixation systems for the hand, wrist, elbow, and feet, and the anchor and internal-brace constructs used in both the upper and lower extremities.",
    "He has authored 35+ peer-reviewed papers, including what is believed to be the first review paper on the use of peptides in an orthopedic journal. His advanced-treatment practice includes 250+ PRP procedures annually.",
  ],
  aboutCredentials: [
    "Double Fellowship-Trained",
    "Board-Certified, Orthopaedic Surgery",
    "Orthopedic Implant Designer",
  ],
  aboutAffiliations: [
    { _key: "a1", name: "Lenox Hill Hospital", role: "Chief, Hand & UE · Since 2013" },
    { _key: "a2", name: "NISMAT", role: "Associate Director · Since 2006" },
    { _key: "a3", name: "Manhattan Eye, Ear & Throat Hospital", role: "Attending" },
  ],
  aboutNismatNote:
    "NISMAT is the Nicholas Institute of Sports Medicine & Athletic Trauma, founded in 1973 as the country's first hospital-based sports medicine center.",
  soKicker: "Second Opinions",
  soHeadlineLead: "Been told you need surgery?",
  soHeadlineEmphasis: "Get a real second look.",
  soPara1:
    "A second opinion from a world-class specialist is rarely wasted. Dr. Lee reviews imaging, records, and prior surgical plans for patients who have been told they need orthopedic surgery, and helps them understand whether an operation, a different operation, or no operation is the right call.",
  soPara2:
    "In-person in NYC or Scarsdale. Telemedicine consultations available for out-of-state and international patients.",
  soCtaLabel: "Request a Second Opinion",
  soPillars: [
    { _key: "p1", title: "Same-week availability", body: "Urgent and pre-surgical second opinions are accommodated quickly." },
    { _key: "p2", title: "International & telemedicine", body: "Virtual consults for patients outside New York or traveling for care." },
    { _key: "p3", title: "Imaging & records review", body: "Direct review of MRIs, X-rays, and prior surgical plans." },
    { _key: "p4", title: "Confident decisions", body: "Understand your options before committing to surgery." },
  ],
  specKicker: "Areas of Expertise",
  specHeadlineLead: "Surgery and sports medicine, from",
  specHeadlineEmphasis: "fingertip to knee to ankle.",
  specIntro:
    "Dr. Lee's practice spans upper extremity surgery, sports medicine, and advanced biologics, with particular depth in the procedures he helped pioneer.",
  specCards: [
    { _key: "c1", title: "Shoulder", eyebrow: "Sports medicine", description: "Rotator cuff repair, shoulder arthroscopy, clavicle fractures, and minimally invasive techniques for athletes and active adults." },
    { _key: "c2", title: "Elbow", eyebrow: "UCL · Complex trauma", description: "Tommy John (UCL) reconstruction, LUCL repair, complex elbow trauma, biceps ruptures. He helped design the internal-brace constructs used in these procedures." },
    { _key: "c3", title: "Knee & Sports", eyebrow: "ACL · Meniscus", description: "ACL reconstruction, knee arthroscopy, meniscus repair, Achilles repair. Sports injury management at the level of the team physician." },
    { _key: "c4", title: "Hand & Wrist", eyebrow: "Chief at Lenox Hill", description: "Carpal tunnel (endoscopic), distal radius fractures, scapholunate ligament repair, basal joint, and the full spectrum of hand surgery." },
    { _key: "c5", title: "PRP & Biologics", eyebrow: "Among the first in NYC for upper extremity", description: "PRP injections (250+ annually), BMAC stem cell therapy, and peptide treatments, including the first orthopedic-journal review paper on peptides." },
    { _key: "c6", title: "Second Opinions", eyebrow: "In-person · Telemedicine", description: "World-class second opinion consultations for patients told they need orthopedic surgery. Available globally via telemedicine." },
  ],
};

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }
  await client.createOrReplace(homePage);
  console.log("Seeded the Home Page document.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
