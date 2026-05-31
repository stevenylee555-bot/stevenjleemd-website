import type { Condition } from "./conditions";

export type SpecialtyIconKey =
  | "hand"
  | "elbow"
  | "shoulder"
  | "knee"
  | "biologics";

export type Specialty = {
  slug: string;
  name: string;
  shortName: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  headlineItalic: string;
  lede: string;
  introTitle: string;
  introBody: string[];
  iconKey: SpecialtyIconKey;
  // Conditions library regions this specialty surfaces in its list.
  conditionRegions: Array<Condition["region"]>;
  // 3–4 editorial pillars describing Dr. Lee's approach.
  approach: Array<{ title: string; body: string }>;
  // Credential / authority bullets specific to this region.
  credentials: string[];
  // Optional implant-design angle (callout box).
  implantDesign?: { title: string; body: string };
  // SEO
  metaTitle: string;
  metaDescription: string;
};

export const specialties: Specialty[] = [
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "hand-wrist",
    name: "Hand & Wrist Surgery",
    shortName: "Hand & Wrist",
    navLabel: "Hand & Wrist",
    eyebrow: "Chief of Hand and Upper Extremity Surgery · Lenox Hill Hospital",
    headline: "The hand is where Dr. Lee made his name:",
    headlineItalic: "and where he helped design the hardware.",
    lede:
      "Carpal tunnel, distal radius fractures, scapholunate ligament injuries, basal joint reconstruction, and the full spectrum of hand and wrist surgery. Performed by a surgeon who helped design implants now used by his peers around the country.",
    introTitle: "Surgery at the level of the person teaching it.",
    introBody: [
      "Dr. Lee serves as Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, a Northwell Health flagship in New York City. He is double fellowship-trained in hand and upper extremity surgery and in sports medicine, a combination that makes him fluent in both the fine reconstructive work of the hand and the high-demand return-to-sport considerations athletes care about.",
      "Beyond his clinical practice, Dr. Lee has helped design several orthopedic implants now used by surgeons around the country, including plating systems for the hand and elbow. When you have surgery with Dr. Lee, the hardware in your wrist may be hardware he helped create.",
    ],
    iconKey: "hand",
    conditionRegions: ["Hand & Wrist"],
    // Procedures & Techniques list updated per Dr. Lee's 5/27 feedback.
    approach: [
      {
        title: "Endoscopic Carpal Tunnel Release",
        body:
          "Minimally invasive technique through a small port, smaller scar, less post-operative tenderness, and faster return to work than traditional open release.",
      },
      {
        title: "Hand and Wrist fracture fixation",
        body:
          "Volar plating and bridge plating for distal radius fractures, plus screw and plate fixation for metacarpal, phalangeal, and scaphoid fractures, including hand and wrist plating systems Dr. Lee helped design.",
      },
      {
        title: "Ligament Reconstruction with Internal Brace",
        body:
          "Scapholunate, thumb UCL, and basal joint reconstructions using the anchor and tape constructs Dr. Lee helped design.",
      },
      {
        title: "Wrist Arthroscopy",
        body:
          "Minimally invasive evaluation and treatment of wrist conditions, including TFCC tears, intercarpal ligament injuries, loose bodies, and persistent post-injury wrist pain.",
      },
      {
        title: "Arthritis Surgery",
        body:
          "Reconstruction and arthroplasty for basal joint arthritis, scapholunate advanced collapse, and degenerative wrist and finger joints, including internal-brace suspensionplasty for the thumb CMC.",
      },
      {
        title: "Tendon and Nerve repairs",
        body:
          "Primary repair, tendon transfer, and nerve decompression or reconstruction for traumatic injuries, lacerations, and chronic compression neuropathies of the upper extremity.",
      },
      {
        title: "Revision Surgery and Salvage",
        body:
          "Dr. Lee is regularly referred patients whose first surgery elsewhere didn't go as planned. He'll review imaging and operative notes before discussing options.",
      },
      {
        title: "Nonsurgical alternatives",
        body:
          "Image-guided injections, custom splinting, structured rehabilitation, and biologic options including PRP and BMAC when surgery is not the right path.",
      },
    ],
    credentials: [
      "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital (Northwell Health)",
      "Double fellowship-trained, Hand & Upper Extremity, Sports Medicine",
      "Helped design hand and elbow plating systems used nationwide",
      "Castle Connolly Top Doctor since 2008",
      "Routinely sees second-opinion and revision-surgery referrals",
    ],
    implantDesign: {
      title: "He helped design the plate in your wrist.",
      body:
        "Dr. Lee has helped design plating systems used in hand and elbow fracture fixation. Few surgeons in the country have that level of involvement with the hardware they implant.",
    },
    metaTitle:
      "Hand & Wrist Surgery, Steven J. Lee, MD | Chief of Hand and Upper Extremity Surgery, Lenox Hill",
    metaDescription:
      "Hand and wrist surgery in NYC and Scarsdale. Dr. Steven J. Lee, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, double fellowship-trained, and an orthopedic implant designer. Carpal tunnel, distal radius fractures, scapholunate, basal joint, and more.",
  },

  // ─────────────────────────────────────────────────────────────────
  {
    slug: "elbow",
    name: "Elbow Surgery",
    shortName: "Elbow",
    navLabel: "Elbow",
    eyebrow: "Tommy John · Distal biceps · Complex trauma",
    headline: "Elbow surgery for athletes:",
    headlineItalic: "and the surgeons who treat them.",
    lede:
      "UCL reconstruction (Tommy John), distal biceps repair, LUCL reconstruction, and complex elbow trauma. Dr. Lee helped design the anchor and internal-brace constructs used in these procedures.",
    introTitle: "The elbow sits at the intersection of his two fellowships.",
    introBody: [
      "Most upper-extremity surgeons either come from hand surgery training or from sports medicine training. Dr. Lee did both, and the elbow is where those two perspectives matter most.",
      "Tommy John reconstruction, distal biceps repair, and reconstruction after dislocation are technical procedures where the choice of fixation, the timing of return to play, and the rehabilitation protocol all influence the outcome. Dr. Lee approaches the elbow with the surgical precision of a hand surgeon and the return-to-sport pragmatism of a team physician.",
    ],
    iconKey: "elbow",
    conditionRegions: ["Elbow"],
    approach: [
      {
        title: "UCL reconstruction with internal brace",
        body:
          "Tommy John surgery using internal brace augmentation, a technique that allows for faster, more confident return to throwing in select patients. Uses anchors Dr. Lee helped design.",
      },
      {
        title: "Distal biceps repair",
        body:
          "Single-incision tendon-to-bone repair using the cortical button and tenodesis screw constructs Dr. Lee helped develop. Most patients return to full activity within 4–6 months.",
      },
      {
        title: "Complex elbow trauma",
        body:
          "Fracture-dislocations, LUCL injuries, terrible triad, Dr. Lee handles the kind of elbow trauma that gets transferred from outside hospitals.",
      },
      {
        title: "Elbow stiffness and contracture",
        body:
          "Open and arthroscopic capsular release for post-traumatic stiffness, with structured rehab to preserve the regained range.",
      },
      {
        // Section requested by Dr. Lee on 5/27. He plans to provide his own
        // text; the placeholder below is intentionally neutral so it can be
        // replaced through Sanity Studio without code changes.
        title: "Elbow Arthroscopy",
        body:
          "Minimally invasive arthroscopic treatment of the elbow, including loose body removal, posterior impingement, synovitis, and capsular release. Detailed approach and indications to be expanded.",
      },
    ],
    credentials: [
      "Fellowship-trained in Hand & Upper Extremity Surgery",
      "Fellowship-trained in Sports Medicine",
      "Helped design anchors and internal-brace constructs used in reconstruction",
      "Sees referrals for complex and revision elbow surgery",
    ],
    implantDesign: {
      title: "He helped design the anchors used in these repairs.",
      body:
        "Dr. Lee helped design the suture anchors and internal-brace constructs used in UCL reconstruction and distal biceps repair, hardware now used by surgeons across the country.",
    },
    metaTitle:
      "Elbow Surgery, Tommy John, Biceps Repair, Trauma | Steven J. Lee, MD",
    metaDescription:
      "Elbow surgery in NYC and Scarsdale by Dr. Steven J. Lee, double fellowship-trained in hand and sports medicine. UCL reconstruction (Tommy John), distal biceps repair, LUCL repair, complex trauma. Implant designer for the anchors used in surgery.",
  },

  // ─────────────────────────────────────────────────────────────────
  {
    slug: "shoulder",
    name: "Shoulder Surgery",
    shortName: "Shoulder",
    navLabel: "Shoulder",
    eyebrow: "Rotator cuff · Arthroscopy · Sports medicine",
    headline: "Arthroscopic shoulder surgery:",
    headlineItalic: "for athletes and active adults.",
    lede:
      "Rotator cuff repair, shoulder arthroscopy, clavicle fixation, and minimally invasive techniques for instability and labral injury. Same surgical philosophy as the hand: precise, anchor-based, fast back to activity.",
    introTitle: "Sports medicine training, applied to the shoulder.",
    introBody: [
      "Dr. Lee's sports medicine fellowship training gives him deep familiarity with the shoulder, both at the elite-athlete level and in the broader population of active adults who don't want a torn rotator cuff or a labral injury to end their tennis, golf, or weight training.",
      "Most shoulder procedures Dr. Lee performs are arthroscopic, small portals, anchor-based fixation, structured rehab. His implant-design work spans the upper extremity, and the same precision philosophy applies to shoulder reconstruction.",
    ],
    iconKey: "shoulder",
    conditionRegions: ["Shoulder"],
    approach: [
      {
        title: "Arthroscopic rotator cuff repair",
        body:
          "Anchor-based, all-arthroscopic repair using current-generation suture anchors. Aggressive but disciplined post-operative rehab.",
      },
      {
        title: "Shoulder arthroscopy",
        body:
          "Treatment of impingement, instability, SLAP tears, and labral injuries, minimally invasive, with same-day discharge in most cases.",
      },
      {
        title: "Clavicle fracture fixation",
        body:
          "Plate-and-screw fixation for displaced clavicle fractures using current-generation hardware.",
      },
      {
        title: "Return-to-sport planning",
        body:
          "Sports medicine training means rehab and return-to-activity planning are part of the surgical conversation, not an afterthought.",
      },
    ],
    credentials: [
      "Fellowship-trained in Sports Medicine",
      "Arthroscopic shoulder reconstruction",
      "Arthroscopic shoulder reconstruction with current anchor systems",
      "Treats elite athletes and active adults",
    ],
    implantDesign: {
      title: "The implant-design philosophy carries forward.",
      body:
        "The precision and engineering focus Dr. Lee brings to his implant-design work on the hand and elbow informs his approach to shoulder reconstruction.",
    },
    metaTitle:
      "Shoulder Surgery, Rotator Cuff, Arthroscopy | Steven J. Lee, MD NYC",
    metaDescription:
      "Shoulder surgery in NYC and Scarsdale by Dr. Steven J. Lee, fellowship-trained in sports medicine. Arthroscopic rotator cuff repair, labral surgery, clavicle fixation, return-to-sport planning for athletes and active adults.",
  },

  // ─────────────────────────────────────────────────────────────────
  {
    slug: "knee",
    name: "Knee & Sports Medicine",
    shortName: "Knee & Sports",
    navLabel: "Knee & Sports",
    eyebrow: "ACL · Meniscus · Achilles",
    headline: "Knee surgery and sports medicine:",
    headlineItalic: "from the ACL to the Achilles.",
    lede:
      "ACL reconstruction, meniscus repair, knee arthroscopy, and Achilles tendon repair. Dr. Lee has four peer-reviewed papers on Achilles repair and treats sports injuries with the urgency they deserve.",
    introTitle: "Sports medicine in practice, not just in name.",
    introBody: [
      "Dr. Lee's sports medicine fellowship covered the full lower-extremity sports surgery spectrum, ACL, meniscus, multi-ligament reconstruction, and the Achilles tendon. He is one of relatively few hand-trained surgeons who also operates routinely on knees and Achilles tendons.",
      "His academic output reflects that, he has authored four peer-reviewed papers on Achilles tendon repair specifically. When a sports injury walks in, Dr. Lee approaches it the way a team physician would: define the diagnosis quickly, lay out the realistic timeline, and start the rehab plan before surgery.",
    ],
    iconKey: "knee",
    conditionRegions: ["Knee & Sports", "Foot & Ankle"],
    approach: [
      {
        title: "ACL reconstruction",
        body:
          "Autograft or allograft reconstruction, with internal brace augmentation in selected patients. Tailored to the demands of the sport you want to return to.",
      },
      {
        title: "Meniscus repair (when possible)",
        body:
          "Dr. Lee will repair the meniscus rather than remove it whenever the tear pattern and tissue quality allow, preserving meniscal function preserves cartilage long-term.",
      },
      {
        title: "Achilles tendon repair",
        body:
          "Open and percutaneous repair techniques for Achilles ruptures. Dr. Lee has authored four peer-reviewed papers on this topic.",
      },
      {
        title: "Knee arthroscopy",
        body:
          "Minimally invasive evaluation and treatment of cartilage injury, loose bodies, and persistent post-injury pain.",
      },
    ],
    credentials: [
      "Fellowship-trained in Sports Medicine",
      "Four peer-reviewed publications on Achilles tendon repair",
      "ACL reconstruction with autograft or allograft",
      "Return-to-sport planning as part of the surgical plan",
    ],
    metaTitle:
      "Knee Surgery & Sports Medicine, ACL, Meniscus, Achilles | Dr. Lee NYC",
    metaDescription:
      "Knee and sports surgery in NYC and Scarsdale by Dr. Steven J. Lee, fellowship-trained in sports medicine. ACL reconstruction, meniscus repair, knee arthroscopy, Achilles tendon repair. Four peer-reviewed Achilles publications.",
  },

  // ─────────────────────────────────────────────────────────────────
  {
    slug: "advanced-treatments",
    name: "PRP & Advanced Treatments",
    shortName: "PRP & Biologics",
    navLabel: "PRP & Advanced Treatments",
    eyebrow: "Among the first in NYC for upper extremity",
    headline: "Biologic therapies:",
    headlineItalic: "from the surgeon who pioneered them.",
    lede:
      "Platelet-rich plasma (PRP), bone marrow aspirate concentrate (BMAC), and peptide therapy, used when they're the right tool, not when they're a marketing line. Dr. Lee was among the first surgeons in NYC to perform PRP, including for upper extremity injuries. He performs 250+ PRP procedures annually today.",
    introTitle: "An early adopter, not a marketer.",
    introBody: [
      "Dr. Lee was among the first surgeons in New York City to use platelet-rich plasma (PRP), including for upper extremity injuries, at a time when biologics were still considered experimental in the orthopedic mainstream. He performs over 250 PRP procedures annually today and has watched the field grow from a research idea into a routine clinical option.",
      "He has also published what is believed to be the first review paper on peptide therapy in an orthopedic journal, expanding the conversation around what biologic and regenerative options can responsibly offer orthopedic patients.",
    ],
    iconKey: "biologics",
    conditionRegions: ["Advanced Treatments"],
    approach: [
      {
        title: "PRP, platelet-rich plasma",
        body:
          "Concentrated growth factors from the patient's own blood, injected under image guidance. Best evidence is in tendinopathy and selected joint conditions.",
      },
      {
        title: "BMAC, bone marrow aspirate concentrate",
        body:
          "Mesenchymal-cell-rich aspirate harvested from the iliac crest. Used in selected cases of cartilage injury and tendinopathy where PRP alone may not be enough.",
      },
      {
        title: "Peptide therapy",
        body:
          "Dr. Lee published what is believed to be the first review paper on peptide therapy in an orthopedic journal. Use is patient-specific and conservative.",
      },
      {
        title: "When biologics are not the answer",
        body:
          "Dr. Lee will tell you when surgery, formal physical therapy, or simply time is the better path, and he has no financial incentive to push injections you don't need.",
      },
    ],
    credentials: [
      "Among the first NYC surgeons to perform PRP, including for the upper extremity",
      "First-author review on peptide therapy in an orthopedic journal",
      "Image-guided injection technique",
      "Patient-specific selection criteria",
    ],
    metaTitle:
      "PRP & Advanced Treatments, Biologics, BMAC, Peptides | Dr. Lee NYC",
    metaDescription:
      "PRP, BMAC, and peptide therapy in NYC and Scarsdale by Dr. Steven J. Lee, among the first surgeons in New York City to use PRP, and the first specifically for upper extremity injuries. 250+ PRP procedures annually. Conservative, patient-specific selection.",
  },
];

export function specialtyBySlug(slug: string) {
  return specialties.find((s) => s.slug === slug);
}

// Maps a condition's region to the specialty page that covers it, so condition
// pages can link up to their parent specialty. Returns undefined if no
// specialty surfaces that region.
export function specialtyForRegion(region: string) {
  return specialties.find((s) =>
    (s.conditionRegions as string[]).includes(region),
  );
}
