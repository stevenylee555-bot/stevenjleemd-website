export type ConditionStatus = "priority" | "phase2";

export type Condition = {
  name: string;
  slug: string;
  region: "Hand & Wrist" | "Elbow" | "Shoulder" | "Knee & Sports" | "Foot & Ankle" | "Advanced Treatments";
  status: ConditionStatus;
  blurb: string;
};

// Master list of conditions Dr. Lee treats. Drives the /conditions index,
// the homepage preview, and (later) individual condition pages.
export const conditions: Condition[] = [
  // Hand & Wrist, priority
  {
    name: "Carpal Tunnel Syndrome",
    slug: "carpal-tunnel",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Including endoscopic release, a minimally invasive approach with faster recovery than traditional open surgery.",
  },
  {
    name: "Distal Radius Fracture",
    slug: "distal-radius-fracture",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "The most common fracture orthopedic surgeons treat. Dr. Lee uses fixed-angle volar plating in displaced or intra-articular cases.",
  },
  {
    name: "Scapholunate Ligament Injury",
    slug: "scapholunate",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Internal brace reconstruction using anchors Dr. Lee helped design.",
  },
  {
    name: "Basal Joint Arthritis",
    slug: "basal-joint-arthroplasty",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Thumb CMC reconstruction with an internal brace system Dr. Lee helped design.",
  },
  {
    name: "Hand & Wrist Fractures",
    slug: "hand-wrist-fractures",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Fracture fixation using hand and elbow plating systems Dr. Lee helped design.",
  },
  {
    name: "Finger Collateral Ligament Injury",
    slug: "finger-collateral-ligament",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Sideways injuries to the small ligaments that stabilize finger joints. Most heal without surgery; the unstable ones benefit from internal brace repair Dr. Lee helped design.",
  },
  {
    name: "Extensor Tendon Subluxation",
    slug: "extensor-tendon-subluxation",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "When the extensor tendon slips off the knuckle, often after a punch or in inflammatory arthritis. Treated with splinting acutely, or surgical realignment when chronic.",
  },
  {
    name: "Ulnar Impaction Syndrome",
    slug: "ulnar-impaction-syndrome",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Pinky-side wrist pain from an ulna that sits too long relative to the radius. Treated with splinting, injections, PRP, or arthroscopic ulnar shortening (wafer procedure).",
  },
  {
    name: "Thumb UCL/RCL Tear (Skier's Thumb)",
    slug: "thumb-ucl-rcl",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Ligament tear at the base of the thumb, often from a fall or ski-pole injury. Internal brace repair Dr. Lee helped design supports earlier return to pinching and sport.",
  },
  {
    name: "Wartenberg's Syndrome",
    slug: "wartenbergs-syndrome",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Compression of the superficial radial nerve, often by a tight watch band, causing burning and tingling on the back of the hand. Most cases resolve when the source of pressure is identified and removed.",
  },
  {
    name: "TFCC Tear",
    slug: "tfcc-tear",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Tear of the triangular fibrocartilage complex, the cartilage-and-ligament structure on the pinky side of the wrist. Treated with splinting, PRP, or arthroscopic debridement or repair, depending on the tear pattern.",
  },
  // Hand & Wrist, phase 2
  {
    name: "Trigger Finger",
    slug: "trigger-finger",
    region: "Hand & Wrist",
    status: "phase2",
    blurb: "In-office or surgical release.",
  },
  {
    name: "Wrist Arthroscopy",
    slug: "wrist-arthroscopy",
    region: "Hand & Wrist",
    status: "phase2",
    blurb: "Minimally invasive evaluation and treatment of wrist pain.",
  },

  // Elbow, priority
  {
    name: "UCL Tear (Tommy John)",
    slug: "ucl-reconstruction",
    region: "Elbow",
    status: "priority",
    blurb:
      "UCL reconstruction with internal brace augmentation. Reconstruction uses an anchor system Dr. Lee helped design.",
  },
  {
    name: "Biceps Tendon Rupture",
    slug: "biceps-rupture",
    region: "Elbow",
    status: "priority",
    blurb:
      "Distal biceps repair using tendon-to-bone anchors Dr. Lee helped design.",
  },
  // Elbow, phase 2
  {
    name: "Complex Elbow Trauma",
    slug: "elbow-trauma",
    region: "Elbow",
    status: "phase2",
    blurb: "Fracture-dislocations, LUCL injuries, and reconstruction.",
  },
  {
    name: "Elbow Fractures",
    slug: "elbow-fractures",
    region: "Elbow",
    status: "phase2",
    blurb: "Plate-and-screw fixation using designs Dr. Lee helped develop.",
  },

  // Shoulder, priority
  {
    name: "Rotator Cuff Tear",
    slug: "rotator-cuff",
    region: "Shoulder",
    status: "priority",
    blurb: "Arthroscopic repair with current-generation suture anchors.",
  },
  // Shoulder, phase 2
  {
    name: "Shoulder Arthroscopy",
    slug: "shoulder-arthroscopy",
    region: "Shoulder",
    status: "phase2",
    blurb: "Minimally invasive treatment for instability, impingement, and labral tears.",
  },
  {
    name: "Clavicle Fracture",
    slug: "clavicle-fracture",
    region: "Shoulder",
    status: "phase2",
    blurb:
      "Plate fixation with current-generation hardware.",
  },

  // Knee & Sports, priority
  {
    name: "ACL Tear",
    slug: "acl-reconstruction",
    region: "Knee & Sports",
    status: "priority",
    blurb: "ACL reconstruction with autograft or allograft, internal brace augmentation when appropriate.",
  },
  // Knee & Sports, phase 2
  {
    name: "Meniscus Tear",
    slug: "meniscus",
    region: "Knee & Sports",
    status: "phase2",
    blurb: "Meniscal repair or partial meniscectomy via arthroscopy.",
  },
  {
    name: "Knee Arthroscopy",
    slug: "knee-arthroscopy",
    region: "Knee & Sports",
    status: "phase2",
    blurb: "Minimally invasive treatment for cartilage, meniscus, and ligament injuries.",
  },

  // Foot & Ankle, priority
  {
    name: "Achilles Tendon Rupture",
    slug: "achilles-rupture",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "Repair and reconstruction. Dr. Lee has authored four peer-reviewed papers on Achilles repair.",
  },

  // Advanced Treatments, phase 2
  {
    name: "PRP / BMAC Injections",
    slug: "prp-bmac",
    region: "Advanced Treatments",
    status: "phase2",
    blurb:
      "Dr. Lee was among the first surgeons in NYC to perform PRP, including for upper extremity injuries. 250+ PRP procedures performed annually.",
  },
  {
    name: "Peptide Therapy",
    slug: "peptide-therapy",
    region: "Advanced Treatments",
    status: "phase2",
    blurb:
      "Dr. Lee published what is believed to be the first review paper on peptides in an orthopedic journal.",
  },
];

export const regions = [
  "Hand & Wrist",
  "Elbow",
  "Shoulder",
  "Knee & Sports",
  "Foot & Ankle",
  "Advanced Treatments",
] as const;

export function conditionsByRegion(region: Condition["region"]) {
  return conditions.filter((c) => c.region === region);
}

export function priorityConditions() {
  return conditions.filter((c) => c.status === "priority");
}
