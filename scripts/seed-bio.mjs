// Seed the Biography page singleton with current copy.
// Run: node --env-file=.env.local scripts/seed-bio.mjs

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const bioPage = {
  _id: "bioPage",
  _type: "bioPage",
  headerTitle: "A surgeon at the",
  headerItalic: "leading edge of his field.",
  headerLede:
    "Double board certified and double fellowship-trained, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, and the surgeon many physicians refer the cases they find too complex.",
  introParagraphs: [
    "Dr. Steven J. Lee is double board certified and double fellowship-trained in Hand & Upper Extremity Surgery and Sports Medicine, and specializes in the most complex disorders of the hand, wrist, elbow, shoulder, knee, and ankle.",
    "He is Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital in New York City, and Associate Director of the Nicholas Institute of Sports Medicine and Athletic Trauma (NISMAT), the first hospital-based facility in the country dedicated to the study of sports medicine and research.",
    "Dr. Lee is perennially recognized as one of New York Magazine's Best Doctors, a Castle Connolly Top Doctor in Orthopedic Surgery, one of America's Top Orthopedists, a U.S. News & World Report Top Doctor, and a New York Super Doctors Hall of Fame honoree.",
  ],
  credentials: [
    "Chief of Hand & Upper Extremity Surgery, Lenox Hill Hospital (since 2013)",
    "Associate Director, NISMAT (since 2006)",
    "Lenox Hill Hospital Medical Board (since 2023)",
    "Double Fellowship-Trained: Hand & Upper Extremity, Sports Medicine",
    "Double Board Certified: Orthopaedic Surgery & Surgery of the Hand",
    "Member, American Orthopaedic Association (AOA)",
    "Orthopedic Implant Designer & US Patent Holder",
  ],
  trainingHeading: "A foundation built at New York's teaching hospitals.",
  training: [
    { _key: "t1", institution: "Lehigh University / Medical College of Pennsylvania", detail: "Doctor of Medicine, combined 6-year accelerated program" },
    { _key: "t2", institution: "Stony Brook University", detail: "Residency, Orthopedic Surgery" },
    { _key: "t3", institution: "NYU / Hospital for Joint Diseases", detail: "Fellowship, Hand & Upper Extremity Surgery" },
    { _key: "t4", institution: "Lenox Hill Hospital", detail: "Fellowship, Sports Medicine", note: "One of the oldest and most prestigious sports medicine fellowships in the country." },
  ],
  athletesHeadingLead: "Trained at the center of",
  athletesHeadingEmphasis: "New York sports medicine.",
  athletesIntro:
    "Few orthopedic surgeons are fellowship-trained in both hand and upper extremity surgery and sports medicine. That combination gives Dr. Lee a distinct advantage with athletes, who place far greater demands on a repaired joint or tendon and almost always need to return to their sport on a timeline.",
  athletesQuoteLead: "He treats the athlete, not just the injury,",
  athletesQuoteEmphasis: "tailoring care to the demands of the sport and the timeline to return.",
  athleteRoles: [
    "Team physician, New Jersey Red Dogs & Gladiators (professional arena football)",
    "Team physician, Hofstra University Athletics",
    "Care of the New York Jets, Islanders & Rangers during training",
  ],
  sportsTreated: ["Hockey", "Football", "Tennis", "Squash", "Golf", "Baseball", "Soccer", "Boxing & MMA"],
  athletesNote:
    "Especially attuned to collegiate and recruiting athletes: all three of Dr. Lee's children are Division I athletes.",
  researchHeading: "Advancing the tools of the field.",
  researchPara1:
    "Dr. Lee has been a pioneer in orthopedic research and is nationally recognized for innovative techniques to treat the most difficult disorders in orthopedics. He has designed numerous orthopedic implants now in wide use, including among the most advanced plating systems for fracture fixation of the hand, wrist, elbow, and upper extremity. His anchor designs helped pioneer the use of internal bracing for the upper extremity.",
  patentNumber: "12,622,710 B2",
  patentDesc:
    "Center of Rotation Guide, a surgical instrumentation design granted in 2026, with additional patents pending.",
  patentNote: "Implants designed by Dr. Lee are now used by surgeons across the country.",
  teachingHeading: "A teacher first, recognized by his own residents.",
  teachingPara2:
    "His teaching has been recognized repeatedly by the Lenox Hill orthopedic residents, who have voted him the Chitranjan S. Ranawat Mentorship Award seven times (2010, 2014, 2015, 2017, 2018, 2019, 2023), the James A. Nicholas Award for Distinction in Orthopaedic Residency Education twice (2021, 2022), and the Maurice Cowen Award for Excellence in Medical Education twice (2003, 2009), eleven teaching honors in all. At Lenox Hill he sits on the orthopedic residency and sports medicine fellowship admissions committees, the Program Evaluation Committee, and the Hospital Medical Board.",
  teachingPara3:
    "He is a Fellow of the American Academy of Orthopaedic Surgeons and a member of the American Orthopaedic Association, the oldest and most prestigious orthopedic association in the world, comprising fewer than 10% of practicing orthopedic surgeons.",
  teachingQuoteLead: "By his own account, he is proudest of, and best known among his peers for,",
  teachingQuoteEmphasis: "his surgical skill.",
  galleryHeadingLead: "84 lectures and presentations.",
  galleryHeadingEmphasis: "Counting.",
  galleryIntro:
    "National podium presentations at AAOS, AOSSM, and ASSH. Invited lectures at national meetings and educational platforms including the Orthopaedic Summit, the Philadelphia Hand Meeting, VuMedi, and the IFSSH. Course faculty and cadaver-lab instructor at national surgical skills programs. Below, selected moments.",
  galleryCaptions: [
    { _key: "g1", kicker: "Fellowship Forum", caption: "Speaking on technique and outcomes" },
    { _key: "g2", kicker: "NISMAT · Scapholunate Tear Options", caption: "Academic lecture on a published surgical series" },
    { _key: "g3", kicker: "Upper-Extremity Faculty Panel", caption: "Faculty panel on advanced upper-extremity surgery" },
    { _key: "g4", kicker: "NFL Fracture Management", caption: "Faculty panel on professional-athlete fracture care" },
  ],
  practiceHeading: "Two New York offices, in person and online.",
  practicePara:
    "Dr. Lee sees patients at two offices: his primary practice on Manhattan's East 74th Street and a second office in Scarsdale, Westchester. He offers in-person and telemedicine consultations and treats both in-network and out-of-network patients, including international patients who travel specifically to consult with him.",
};

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }
  await client.createOrReplace(bioPage);
  console.log("Seeded the Biography document.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
