// Seed the Publications & Research and Curriculum Vitae singletons.
// Run: node --env-file=.env.local --import tsx scripts/seed-publications-cv.ts

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

type Pub = { citation: string; journal: string; year: string; link?: string; highlight?: boolean };

const recent: Pub[] = [
  {
    citation:
      "Rahman OF, Lee SJ, Seeds WA. Therapeutic Peptides in Orthopaedics: Applications, Challenges, and Future Directions.",
    journal: "JAAOS Global Research & Reviews 10(1):e25.00236",
    year: "January 2026",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12753158/",
    highlight: true,
  },
  {
    citation:
      "Kessler RE, Day MS, Tyler TF, McHugh MP, Bedford BB, Lee SJ, Nicholas SJ. Predictive Value of MRI in Outcomes of Non-Surgical Treatment of Lateral Epicondylitis.",
    journal: "JSES International 6(2):305-308",
    year: "January 2022",
  },
  {
    citation:
      "Lee SJ, Bedford BB, Kim AH, Rahman OF, Zbeda RM. Elbow Osteochondral Allograft Transplantation and Lateral Ulnar Collateral Ligament Repair with Internal Brace: A Case Report.",
    journal: "JBJS Case Connector 12(1)",
    year: "January 2022",
  },
  {
    citation:
      "Zbeda RM, Lee SJ. Internal Brace for Carpal Instability. In: Wrist and Elbow Arthroscopy with Selected Open Procedures.",
    journal: "Springer Nature Switzerland, pp 203-215",
    year: "January 2022",
  },
  {
    citation:
      "Lee SJ, Rabinovich RV, Kim A. Proximal Row Carpectomy Using Decellularized Dermal Allograft: Preliminary Results.",
    journal: "Journal of Wrist Surgery 10(2)",
    year: "April 2021",
  },
  {
    citation:
      "Lee SJ, Rabinovich RV, Bedford B, Rahman OF. Elbow Ulnar Collateral Ligament Reconstruction using Suture Tape Augmentation.",
    journal: "JSES Reviews, Reports & Techniques",
    year: "February 2021",
  },
  {
    citation:
      "Lee SJ, Rabinovich RV, Kim A. Thumb Ulnar Collateral Ligament Repair with Suture Tape Augmentation.",
    journal: "Journal of Hand Surgery (Asian-Pacific) 25(1)",
    year: "March 2020",
  },
  {
    citation:
      "Rabinovich RV, Lee SJ. Proximal Row Carpectomy Using Decellularized Dermal Allograft.",
    journal: "Journal of Hand Surgery (American) 43(4)",
    year: "April 2018",
  },
  {
    citation:
      "Orishimo KF, Schwartz-Balle S, Tyler TF, McHugh MP, Bedford BB, Lee SJ, Nicholas SJ. Can Weakness in End-Range Plantar Flexion After Achilles Tendon Repair Be Prevented?",
    journal: "Orthopaedic Journal of Sports Medicine 6(5)",
    year: "May 2018",
  },
  {
    citation:
      "Nicholas SJ, Lee SJ, Mullaney MJ, Tyler TF, Fukunaga T, Johnson CD, McHugh MP. Functional Outcomes after Double-Row versus Single-Row Rotator Cuff Repair.",
    journal: "Orthopaedic Journal of Sports Medicine 4(10)",
    year: "October 2016",
  },
];

const themed: { theme: string; items: Pub[] }[] = [
  {
    theme: "Achilles tendon repair",
    items: [
      {
        citation:
          "Lee SJ, Sileo MJ, Kremenic IJ, Orishimo K, Ben-Avi S, Nicholas S, McHugh MP. Cyclic Loading of Three Achilles Tendon Repairs Simulating Early Postoperative Forces.",
        journal: "American Journal of Sports Medicine 37(4):786-790",
        year: "April 2009",
      },
      {
        citation:
          "Lee SJ, Goldsmith S, Nicholas SJ, McHugh MP, Kremenic I, Ben-Avi S. Optimizing Achilles tendon repair: Effect of epitendinous suture augmentation on the strength of Achilles tendon repairs.",
        journal: "Foot and Ankle International 29(4):427-432",
        year: "April 2008",
      },
      {
        citation:
          "Orishimo KF, Burstein G, Mullaney MJ, Kremenic IJ, Nesse M, McHugh MP, Lee SJ. Effect of knee flexion angle on Achilles tendon force and ankle joint plantarflexion moment during passive dorsiflexion.",
        journal: "Journal of Foot & Ankle Surgery 47(1):34-39",
        year: "January 2008",
      },
      {
        citation:
          "Mullaney MJ, McHugh MP, Tyler TF, Lee SJ, Nicholas SJ. Weakness in End-Range Plantarflexion Following Achilles Tendon Repair: Evidence of Tendon Lengthening.",
        journal: "American Journal of Sports Medicine 34(7)",
        year: "July 2006",
      },
    ],
  },
  {
    theme: "Coracoclavicular ligament reconstruction (shoulder)",
    items: [
      {
        citation:
          "Kowalsky MS, Kremenic IJ, Orishimo KF, McHugh MP, Nicholas SJ, Lee SJ. The Effect of Distal Clavicle Excision on In Situ Graft Forces in Coracoclavicular Ligament Reconstruction.",
        journal: "American Journal of Sports Medicine",
        year: "August 2010",
      },
      {
        citation:
          "Lee SJ, Keefer EP, McHugh MP, Kremenic IJ, Orishimo KF, Ben-Avi S, Nicholas SJ. Cyclical Loading of Coracoclavicular Ligament Reconstructions. A comparative biomechanical study.",
        journal: "American Journal of Sports Medicine 36(10)",
        year: "October 2008",
      },
      {
        citation:
          "Nicholas SJ, Lee SJ, Mullaney MJ, Tyler TF, McHugh MP. Clinical Outcomes of Coracoclavicular Ligament Reconstructions using Tendon Grafts.",
        journal: "American Journal of Sports Medicine 35:1912-1917",
        year: "November 2007",
      },
      {
        citation:
          "Lee SJ, Nicholas SJ, Akizuki K, McHugh MP, Ben-Avi SS, Kremenic IJ. Reconstruction of the coracoclavicular ligaments with tendon grafts. A comparative biomechanical study.",
        journal: "American Journal of Sports Medicine 31(5)",
        year: "September 2003",
      },
    ],
  },
  {
    theme: "Hand & wrist surgery",
    items: [
      {
        citation:
          "Plate AM, Lee SJ, Steiner G, Posner MA. Benign Tumors of the Hand and Wrist.",
        journal:
          "Journal of the American Academy of Orthopaedic Surgeons 11(2):129-141",
        year: "March/April 2003",
      },
      {
        citation: "Lee SJ, Montgomery K. Athletic hand injuries.",
        journal: "Orthopaedic Clinics of North America 33(3):547-554",
        year: "July 2002",
      },
      {
        citation:
          "Stein DA, Lee SJ, Raskin KB. Compartment syndrome of the hand caused by CT contrast infiltration: A case report and review of the literature.",
        journal: "Orthopedics 26(3):333-334",
        year: "March 2003",
      },
    ],
  },
  {
    theme: "Elbow ligament reconstruction",
    items: [
      {
        citation:
          "Alaia MJ, Shearin JW, Kremenic IJ, McHugh MP, Nicholas SJ, Lee SJ. Restoring Isometry in Lateral Ulnar Collateral Ligament Reconstruction.",
        journal: "Journal of Hand Surgery (American) 40(7):1421-1427",
        year: "2015",
      },
      {
        citation:
          "Lee SJ, Mendez-Zfass M. Minimally Invasive Treatment of Lateral Ulnar Collateral Ligament Injury. In: Scuderi GR, Tria AJ (eds.) Minimally Invasive Surgery in Orthopedics.",
        journal: "Springer International Publishing",
        year: "2016",
      },
    ],
  },
];

const publicationsDoc = {
  _id: "publicationsPage",
  _type: "publicationsPage",
  headerTitle: "35+ peer-reviewed publications,",
  headerItalic: "across hand, elbow, shoulder, knee, and biologics.",
  headerLede:
    "Selected publications below. The complete bibliography, 37 entries including book chapters, is available in the CV PDF. Dr. Lee has also given 34 national presentations and 50 invited lectures.",
  recentHeading: "The last decade of work.",
  recent: recent.map((p, i) => ({
    _key: `pub-${i}`,
    citation: p.citation,
    journal: p.journal,
    year: p.year,
    ...(p.link ? { link: p.link } : {}),
    ...(p.highlight ? { highlight: true } : {}),
  })),
  themedHeading: "Areas of focused research.",
  themed: themed.map((g, gi) => ({
    _key: `theme-${gi}`,
    theme: g.theme,
    items: g.items.map((p, i) => ({
      _key: `theme-${gi}-pub-${i}`,
      citation: p.citation,
      journal: p.journal,
      year: p.year,
      ...(p.link ? { link: p.link } : {}),
    })),
  })),
  noteKicker: "A note on this list",
  notePara:
    "The publications above are selected highlights. The full 37-entry bibliography, including early biomechanical work from residency, all Achilles repair papers, the scapholunate reconstruction series, and the 2022 lateral epicondylitis MRI study, is documented in the CV.",
};

const stats = [
  { value: "35+", label: "Peer-reviewed publications" },
  { value: "84", label: "Lectures & presentations" },
  { value: "85+", label: "Awards & distinctions" },
  { value: "25+", label: "Years at Lenox Hill Hospital" },
];

const training = [
  { year: "1987–1991", title: "B.A., Lehigh University", detail: "6-year accelerated combined B.A.–M.D. program" },
  { year: "1989–1993", title: "M.D., The Medical College of Pennsylvania", detail: "Conferred June 1993" },
  { year: "1993–1994", title: "Surgical Internship", detail: "Stony Brook University Hospital" },
  {
    year: "1994–1998",
    title: "Orthopaedic Residency",
    detail: "Stony Brook University Hospital · Administrative Superchief during chief year",
  },
  {
    year: "1998–1999",
    title: "Emanuel B. Kaplan Hand & Upper Extremity Fellowship",
    detail: "Hospital for Joint Diseases / NYU Medical Center",
  },
  { year: "1999–2000", title: "James A. Nicholas Sports Medicine Fellowship", detail: "Lenox Hill Hospital" },
];

const cvDoc = {
  _id: "cvPage",
  _type: "cvPage",
  headerTitle: "The complete record,",
  headerItalic: "available as a PDF.",
  headerLede:
    "Education, fellowships, hospital appointments, publications, presentations, awards, and patents. Patients, referring physicians, and institutions are welcome to download.",
  downloadHeading: "Full CV as a PDF.",
  downloadPara:
    "Includes education, professional and faculty appointments, peer-reviewed publications, national presentations, invited lectures, professional memberships, and the full awards and distinctions list.",
  stats: stats.map((s, i) => ({ _key: `stat-${i}`, value: s.value, label: s.label })),
  trainingHeadingLead: "Education",
  trainingHeadingEmphasis: "& fellowships.",
  training: training.map((t, i) => ({ _key: `train-${i}`, year: t.year, title: t.title, detail: t.detail })),
};

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }
  const tx = client.transaction();
  tx.createOrReplace(publicationsDoc);
  tx.createOrReplace(cvDoc);
  await tx.commit();
  console.log("Seeded Publications & Research and Curriculum Vitae singletons.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
