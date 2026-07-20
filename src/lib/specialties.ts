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
  // 3 to 4 editorial pillars describing Dr. Lee's approach.
  approach: Array<{ title: string; body: string }>;
  // Credential / authority bullets specific to this region.
  credentials: string[];
  // Optional implant-design angle (callout box).
  implantDesign?: { title: string; body: string };
  // SEO
  metaTitle: string;
  metaDescription: string;
  // Patient FAQs. Answer-first and self-contained so AI engines can quote a
  // single answer without surrounding context. Rendered with FAQPage schema.
  faqs?: Array<{ question: string; answer: string }>;
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
    faqs: [
      {
        question: "What conditions does a hand and wrist surgeon treat?",
        answer:
          "A hand and wrist surgeon treats carpal tunnel syndrome, trigger finger, thumb and wrist arthritis, distal radius (wrist) fractures, tendon and nerve injuries, and ligament tears such as scapholunate and thumb UCL injuries. Dr. Lee manages these both surgically and non-surgically at his NYC and Scarsdale offices.",
      },
      {
        question: "Where does Dr. Lee perform hand and wrist surgery?",
        answer:
          "Dr. Lee sees patients at his Upper East Side office at 159 East 74th Street in Manhattan and at 2 Overhill Road in Scarsdale, Westchester. Many hand and wrist procedures are outpatient, and out-of-area patients can begin with a telemedicine consultation.",
      },
      {
        question: "Is hand surgery done awake or under general anesthesia?",
        answer:
          "Many hand and wrist procedures, including carpal tunnel release, can be done under local or regional anesthesia rather than general anesthesia. The right choice depends on the specific procedure and the patient, and Dr. Lee reviews the options with you before surgery.",
      },
      {
        question: "How long is recovery after hand or wrist surgery?",
        answer:
          "Recovery depends on the procedure. Light hand use often returns within one to two weeks after soft-tissue procedures such as carpal tunnel or trigger finger release, while fracture and ligament reconstructions take longer. Dr. Lee provides a procedure-specific recovery timeline for every operation.",
      },
      {
        question: "Does Dr. Lee handle complex or revision hand cases?",
        answer:
          "Yes. As Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, Dr. Lee treats complex fractures, failed prior surgery, and revision cases, and he has helped design several of the hand and wrist implants used in these reconstructions.",
      },
    ],
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
          "Single-incision tendon-to-bone repair using the cortical button and tenodesis screw constructs Dr. Lee helped develop. Most patients return to full activity within 4 to 6 months.",
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
    faqs: [
      {
        question: "What elbow problems does Dr. Lee treat?",
        answer:
          "Dr. Lee treats tennis elbow and golfer's elbow, cubital tunnel (ulnar nerve) compression, distal biceps tendon tears, UCL injuries including Tommy John cases, elbow arthritis, and elbow fractures, at his Manhattan and Scarsdale offices.",
      },
      {
        question: "Who performs Tommy John (UCL) surgery near NYC?",
        answer:
          "Dr. Steven J. Lee performs UCL reconstruction and repair, including internal-brace-augmented techniques, for throwing athletes in the New York area. He is double fellowship-trained in hand and upper extremity and in sports medicine, and sees patients on the Upper East Side and in Scarsdale.",
      },
      {
        question: "Do I need surgery for tennis elbow?",
        answer:
          "Most tennis elbow improves without surgery through activity changes, therapy, bracing, and in selected cases biologic injections such as PRP. Surgery is reserved for pain that persists despite a full course of non-surgical treatment. Dr. Lee will tell you when an operation is and is not warranted.",
      },
      {
        question: "What is the recovery time after Tommy John surgery?",
        answer:
          "Traditional UCL reconstruction returns competitive throwers to the mound around 12 to 15 months, with lighter throwing beginning near month four to five. Internal-brace augmentation in selected patients can shorten this. Returning too early is the most common cause of re-injury.",
      },
      {
        question: "Where does Dr. Lee treat elbow injuries?",
        answer:
          "Dr. Lee sees elbow patients at 159 East 74th Street on the Upper East Side of Manhattan and at 2 Overhill Road in Scarsdale, Westchester, with telemedicine available for out-of-area athletes and second opinions.",
      },
    ],
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
    faqs: [
      {
        question: "What shoulder conditions does Dr. Lee treat?",
        answer:
          "Dr. Lee treats rotator cuff tears, shoulder instability and dislocations, labral (SLAP) tears, biceps tendon problems, shoulder arthritis, and fractures, using both arthroscopic and open techniques at his NYC and Scarsdale offices.",
      },
      {
        question: "Does every rotator cuff tear need surgery?",
        answer:
          "No. Many partial rotator cuff tears respond to therapy, activity changes, and injections, while larger or full-thickness tears in active patients are more likely to need arthroscopic repair. Dr. Lee bases the recommendation on your symptoms, function, and imaging together, not on the scan alone.",
      },
      {
        question: "Does Dr. Lee perform minimally invasive shoulder surgery?",
        answer:
          "Yes. Most rotator cuff repairs, labral repairs, and instability procedures are performed arthroscopically through small incisions, which generally means less soft-tissue disruption and a more comfortable early recovery than open surgery.",
      },
      {
        question: "How long is recovery after rotator cuff repair?",
        answer:
          "Rotator cuff repair typically involves a sling for a few weeks followed by a staged physical therapy program. Everyday use returns over the first several weeks, while full strength and return to sport usually take four to six months, depending on the size of the tear.",
      },
      {
        question: "Where does Dr. Lee see shoulder patients?",
        answer:
          "Dr. Lee treats shoulder patients on the Upper East Side of Manhattan at 159 East 74th Street and in Scarsdale, Westchester at 2 Overhill Road, with telemedicine consultations available for second opinions.",
      },
    ],
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
    faqs: [
      {
        question: "What knee injuries does Dr. Lee treat?",
        answer:
          "Dr. Lee treats ACL and other ligament tears, meniscus injuries, cartilage damage, patellar (kneecap) instability, and knee arthritis, with an emphasis on returning athletes and active patients to sport. He sees patients in NYC and Scarsdale.",
      },
      {
        question: "Does an ACL tear always require surgery?",
        answer:
          "Not always. Active patients who want to return to cutting and pivoting sports usually benefit from ACL reconstruction, while some lower-demand patients do well with rehabilitation alone. Dr. Lee helps each patient weigh activity goals, stability, and any associated injuries before deciding.",
      },
      {
        question: "Does Dr. Lee offer PRP or biologic treatment for the knee?",
        answer:
          "Yes, in selected cases. For certain tendon problems and early cartilage or arthritis changes, Dr. Lee offers image-guided PRP as part of a broader plan. He was among the first surgeons in New York to use PRP and applies it when the evidence supports it, not as a default.",
      },
      {
        question: "How soon can athletes return to sport after knee surgery?",
        answer:
          "Return to sport depends on the procedure. Meniscus and cartilage procedures may allow a return within weeks to a few months, while ACL reconstruction typically requires roughly nine to twelve months of structured rehabilitation before full-contact sport.",
      },
      {
        question: "Where does Dr. Lee treat knee and sports injuries?",
        answer:
          "Dr. Lee sees knee and sports-medicine patients at his Manhattan Upper East Side office and his Scarsdale, Westchester office, and offers telemedicine consultations for athletes and second opinions.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    slug: "advanced-treatments",
    name: "PRP & Advanced Treatments",
    shortName: "PRP & Biologics",
    navLabel: "PRP & Advanced Treatments",
    eyebrow: "Among the first in NYC for upper extremity",
    headline: "Biologic therapies:",
    headlineItalic: "from the surgeon who was among the first.",
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
      "PRP, BMAC, and peptide therapy in NYC and Scarsdale by Dr. Steven J. Lee, among the first surgeons in New York City to use PRP, and among the first specifically for upper extremity injuries. 250+ PRP procedures annually. Conservative, patient-specific selection.",
    faqs: [
      {
        question: "Does PRP therapy actually work?",
        answer:
          "PRP has its strongest evidence for certain tendon conditions, such as tennis elbow, and for selected joint problems. It is not a cure-all. Dr. Lee, who was among the first surgeons in New York to use PRP, recommends it only when the specific diagnosis and the evidence support it.",
      },
      {
        question: "How much does PRP cost, and does insurance cover it?",
        answer:
          "PRP and most regenerative injections are considered elective and are typically not covered by insurance, so they are usually self-pay. Dr. Lee's office reviews the expected cost and the likely number of sessions with you in advance so there are no surprises.",
      },
      {
        question: "What is the difference between PRP and BMAC?",
        answer:
          "PRP concentrates growth factors from a small blood draw, while BMAC (bone marrow aspirate concentrate) is drawn from the pelvis and is richer in cells. BMAC is used in selected cartilage and tendon cases where PRP alone may not be enough. Dr. Lee selects between them case by case.",
      },
      {
        question: "Is Dr. Lee experienced with regenerative and biologic treatments?",
        answer:
          "Yes. Dr. Lee was among the first surgeons in New York City to perform PRP, including for upper extremity injuries, and has published what is believed to be the first review paper on peptides in an orthopedic journal. He performs a high volume of PRP procedures each year.",
      },
      {
        question: "Where can I get PRP or biologic treatment from Dr. Lee?",
        answer:
          "Dr. Lee offers image-guided PRP and other biologic treatments at his Upper East Side Manhattan office and his Scarsdale, Westchester office. A consultation determines whether a biologic option is appropriate for your specific condition.",
      },
    ],
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
