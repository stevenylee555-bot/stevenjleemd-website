// One-time/reusable seed for the Credentials & Awards page singleton, mirrors
// the in-code fallbacks so the live page looks identical but becomes editable.
// Run: node --env-file=.env.local scripts/seed-credentials.mjs

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const k = (p, i) => `${p}${i}`;
const td = (p) => (arr) => arr.map((x, i) => ({ _key: k(p, i), ...x }));

const credentialsPage = {
  _id: "credentialsPage",
  _type: "credentialsPage",
  headerTitle: "A 25-year record at",
  headerItalic: "Lenox Hill Hospital.",
  headerLede:
    "Board certifications, hospital appointments, recognition, teaching honors, research awards, and a 2026 US patent. Full CV available as a PDF download.",
  appointments: td("ap")([
    { role: "Chief, Surgery of the Hand and Upper Extremity", org: "Department of Orthopaedic Surgery, Lenox Hill Hospital", years: "2013 – Present" },
    { role: "Lenox Hill Hospital Medical Board", org: "Lenox Hill Hospital", years: "2023 – Present" },
    { role: "Associate Director", org: "Nicholas Institute of Sports Medicine and Athletic Trauma (NISMAT)", years: "2006 – Present" },
    { role: "Attending Physician", org: "Department of Orthopaedic Surgery, Lenox Hill Hospital", years: "2000 – Present" },
    { role: "Police Surgeon", org: "NYC PBA · New York State Troopers, Inc. · Amtrak Fraternal Order of Police", years: "2007 – Present" },
  ]),
  certifications: [
    "American Board of Orthopaedic Surgery, Board Certified",
    "American Board of Medical Specialties, Orthopaedic Surgery of the Hand (Subspecialty Certified)",
    "National Boards of Medical Examiners (NBME), Diplomate, Certification # 438187 (1994)",
    "New York State Medical License, Current",
    "New York State DEA, Active",
  ],
  recognition: td("rec")([
    { title: "Castle Connolly Top Doctor", detail: "Annually since 2014, including Castle Connolly New York Metro Area listings" },
    { title: "New York Times Super Doctors", detail: "Listed since 2008 · Hall of Fame inductee since 2019" },
    { title: "New York Magazine Best Doctor for Orthopaedic Surgery", detail: "Annually since 2014" },
    { title: "Guide to America's Top Orthopedists", detail: "Consumer's Research Council of America, multiple years (2007–2013)" },
  ]),
  teaching: td("te")([
    { title: "Chitranjan S. Ranawat, MD Mentorship Award", detail: "Voted by Lenox Hill orthopaedic residents, 7 times (2010, 2014, 2015, 2017, 2018, 2019, 2023)" },
    { title: "James A. Nicholas Award for Distinction in Orthopaedic Residency Education", detail: "Voted by Lenox Hill residents, twice (2021, 2022)" },
    { title: "Maurice Cowen, MD Memorial Award for Excellence in Medical Education", detail: "Teacher of the Year, twice (2003, 2009)" },
  ]),
  research: td("res")([
    { title: "William A. Grana Award for Best Original Research", detail: "Most outstanding research paper in the Orthopaedic Journal of Sports Medicine, 2017" },
    { title: "Excellence in Research Award", detail: "Sports Physical Therapy Section, 2009" },
    { title: "Award for Best Research", detail: "Lenox Hill Alumni Meeting, 2000 (coracoclavicular ligament reconstruction)" },
    { title: "Editorial Reviewer", detail: "Journal of the American Academy of Orthopaedic Surgeons, since March 2009" },
  ]),
  implantDesignIntro:
    "Dr. Lee has served on the design teams for several orthopedic implants now used by surgeons across the country. Selected contributions:",
  implantDesign: td("imp")([
    { title: "Mini Comprehensive Fixation System", detail: "Hand fracture plating system · Arthrex design team" },
    { title: "Elbow Fracture Plating System", detail: "Elbow fracture fixation · Arthrex design team" },
    { title: "3.5 DX SwiveLock Anchor", detail: "Suture anchor used in internal-brace ligament reconstruction · Arthrex design team" },
    { title: "NanoCorkscrew FT", detail: "Tendon-to-bone repair anchor · Arthrex design team" },
    { title: "FiberLock CMC Suspensionplasty", detail: "Thumb basal-joint reconstruction construct · Arthrex design team" },
  ]),
  patents: td("pat")([
    { title: "US Patent #12,622,710 B2", detail: "Center of Rotation Guide, surgical instrumentation · Awarded May 12, 2026" },
    { title: "Additional patents pending", detail: "Further inventions are in the patent application process." },
  ]),
  teamPhysician: td("tp")([
    { title: "PGA Tour, Northeast Division", detail: "Orthopaedic Surgery Consultant via Physiotherapy Associates / Stryker (2006–2008)" },
    { title: "New Jersey Red Dogs · New Jersey Gladiators (Arena Football)", detail: "Team Orthopaedic Physician, 2000–2002" },
    { title: "Hofstra University Athletic Teams", detail: "Team Orthopaedic Physician, 2000–2002" },
  ]),
  memberships: [
    "Member, American Orthopaedic Association (since 2013)",
    "Fellow, American Academy of Orthopaedic Surgeons",
    "Diplomate, American Board of Orthopaedic Surgeons",
    "Founding Member, Haun Society",
    "Member, American Association for Hand Surgeons",
    "Member, New York Society for Surgery of the Hand",
    "Member, National Orthopaedic Education Society (NOES)",
    "Member, Eastern Orthopaedic Association",
  ],
  ctaHeadingLead: "The complete CV is available",
  ctaHeadingEmphasis: "as a PDF.",
  ctaBody:
    "The full document includes 35+ peer-reviewed publications, 34 national presentations, 50 invited lectures, and the complete 85+ award list.",
};

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }
  await client.createOrReplace(credentialsPage);
  console.log("Seeded the Credentials & Awards document.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
