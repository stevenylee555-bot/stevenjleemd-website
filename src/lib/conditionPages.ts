// Structured content for each priority condition page. Drives ConditionTemplate.
//
// These pages present general clinical information accurate to current practice.
// All content is reviewable / editable by Dr. Lee before final sign-off.

export type ConditionBullet = string;

export type ConditionBodySection = {
  heading: string;
  body: string[];
  bullets?: ConditionBullet[];
  bulletsAfter?: string;
};

export type ConditionRecoveryEntry = { when: string; what: string };

export type ConditionFAQ = { question: string; answer: string };

export type ConditionMisconception = { heading: string; body: string };

export type ConditionPageContent = {
  // Identity
  slug: string;
  name: string;
  region: string; // e.g. "Hand & Wrist"

  // Page header
  headerTitle: string;
  headerItalic: string;
  headerLede: string;

  // Author byline
  byline: { name: string; title: string; reviewed: string };

  // Overview paragraphs (top of article)
  overview: string[];

  // Main body sections (rendered in order)
  bodySections: ConditionBodySection[];

  // Dr. Lee's approach callout
  drLeeApproach: { paragraphs: string[] };

  // Optional treatment subsections (rendered after callout, before recovery)
  treatmentSections?: ConditionBodySection[];

  // Recovery timeline
  recoveryIntro?: string;
  recovery: ConditionRecoveryEntry[];

  // Misconceptions
  misconceptions?: { intro: string; items: ConditionMisconception[] };

  // Sidebar
  sidebarFacts: Array<{ label: string; value: string }>;
  whyDrLee: string[];
  related: Array<{ name: string; slug: string }>;
  ctaCard: { eyebrow: string; headline: string };

  // FAQ section
  faqHeadline: string;
  faqs: ConditionFAQ[];

  // Bottom CTA
  bottomCtaTitle: string;
  bottomCtaItalic: string;
  bottomCtaBody: string;

  // Metadata
  metaTitle: string;
  metaDescription: string;
  schemaDescription: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. Distal Radius Fracture
const distalRadiusFracture: ConditionPageContent = {
  slug: "distal-radius-fracture",
  name: "Distal Radius Fracture",
  region: "Hand & Wrist",
  headerTitle: "Distal Radius Fracture:",
  headerItalic: "the wrist fracture, treated properly.",
  headerLede:
    "A broken wrist is the most common fracture orthopedic surgeons treat. The right treatment depends on the fracture pattern, the patient, and the surgeon. Dr. Lee helped design the fixed-angle volar plating systems used for these fractures.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "The distal radius, the bone at the wrist end of the forearm, is the most commonly fractured bone in the upper extremity. A distal radius fracture (sometimes called a Colles fracture, Smith fracture, or simply a broken wrist) usually happens after a fall onto an outstretched hand.",
    "The fracture pattern can range from a simple crack in the bone to a complex break that extends into the wrist joint. The right treatment depends on how the bone is displaced, whether the joint surface is involved, the age and activity level of the patient, and how the fracture is likely to heal.",
  ],
  bodySections: [
    {
      heading: "Anatomy of the wrist",
      body: [
        "The wrist is formed by the distal ends of the radius and ulna meeting eight small carpal bones. Most of the load across the wrist passes through the radius, which is why the radius is the bone that breaks. The articular surface of the radius is gently angled and must be restored to its original shape for the wrist to work normally long-term.",
      ],
    },
    {
      heading: "Signs and symptoms",
      body: ["A distal radius fracture is usually obvious. Patients describe:"],
      bullets: [
        "Immediate pain and swelling at the wrist after a fall",
        "Visible deformity, a 'dinner fork' shape in classic displaced fractures",
        "Inability to use the hand or rotate the forearm",
        "Bruising that develops over the next 24 hours",
        "Numbness or tingling in the fingers (a sign the median nerve may be compressed by the fracture)",
      ],
      bulletsAfter:
        "New numbness, severe pain not controlled by ice and elevation, or rapidly worsening swelling are reasons to be seen urgently, these can indicate acute carpal tunnel syndrome or compartment syndrome.",
    },
    {
      heading: "How distal radius fractures are diagnosed",
      body: [
        "Diagnosis is made on plain X-rays in nearly every case. CT scan is sometimes added when the fracture extends into the wrist joint and finer detail is needed for surgical planning. Most patients come from the emergency room already imaged.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Not every distal radius fracture needs surgery. Stable, well-aligned fractures heal beautifully in a cast, and Dr. Lee will never recommend an operation a patient doesn't need.",
      "When surgery is the right call, the goal is to restore the anatomy as closely as possible to what was there before the fall. Dr. Lee helped design fixed-angle volar plating systems now used by surgeons around the country, and selects the plate best suited to each fracture.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Fractures that are minimally displaced, stable, and not involving the joint are managed in a well-molded cast. The cast typically stays on for 5–6 weeks, with X-rays every 1–2 weeks to make sure the fracture is staying in good position. Hand therapy is usually started before the cast comes off.",
      ],
    },
    {
      heading: "Surgical treatment, volar plate fixation",
      body: [
        "When the fracture is displaced, unstable, or extends into the wrist joint, surgery offers a more reliable path to a normal-functioning wrist. Dr. Lee uses fixed-angle volar plating, an incision on the palm side of the wrist, the fracture reduced under direct vision, and the bone secured with a contoured titanium plate.",
        "The hardware Dr. Lee uses is hardware he helped design. The fixed-angle screws maintain reduction even in osteoporotic bone, and the low-profile plate sits beneath the pronator quadratus muscle to minimize tendon irritation. Most patients begin gentle finger and wrist motion within days.",
      ],
    },
  ],
  recoveryIntro: "Recovery timelines for surgical fixation:",
  recovery: [
    {
      when: "Day 0–7",
      what: "Splint for the first week. Begin finger range-of-motion immediately to prevent stiffness. Elevation and ice. Most patients are off narcotic pain medication within 3–5 days.",
    },
    {
      when: "Weeks 1–2",
      what: "Sutures removed. Transition to a removable wrist brace. Begin gentle active wrist motion. Hand therapy referral.",
    },
    {
      when: "Weeks 2–6",
      what: "Progressive return to daily activities. No lifting more than a coffee cup. Continued therapy. Bone is healing but not yet strong.",
    },
    {
      when: "Weeks 6–12",
      what: "Strength returns. Most patients return to office work by 2 weeks, manual work by 8–12 weeks, and sport by 3 months. Full bone healing takes 3–4 months.",
    },
  ],
  misconceptions: {
    intro: "Three things worth setting straight:",
    items: [
      {
        heading: "Cast vs. surgery is not always the obvious call.",
        body: "A cast is the right answer for many fractures and the wrong answer for others. The fracture pattern, displacement, and patient demands all matter, a good surgeon talks through both options honestly.",
      },
      {
        heading: "Wrist stiffness is the most common avoidable problem.",
        body: "Patients who immobilize the fingers and shoulder while the wrist heals end up with stiff hands. Early finger motion and shoulder mobility are non-negotiable.",
      },
      {
        heading: "The hardware usually stays.",
        body: "Modern low-profile volar plates are well-tolerated and do not need to be removed in most patients. Removal is occasionally needed for irritation or in younger patients planning future imaging.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Bone involved", value: "Distal radius (forearm at wrist)" },
    { label: "Cause", value: "Fall onto outstretched hand" },
    { label: "Surgical option", value: "Volar plate fixation (plating system Dr. Lee helped design)" },
    { label: "Anesthesia", value: "Regional block + light sedation" },
    { label: "Cast / brace", value: "5–6 weeks (non-surgical), 2 weeks then brace (surgical)" },
    { label: "Return to work", value: "Office work ~2 weeks, manual work 8–12 weeks" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Helped design the fixed-angle volar plating systems used in fixation",
    "Volar plating for displaced and intra-articular fractures",
    "Conservative, won't recommend surgery for fractures that don't need it",
  ],
  related: [
    { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
    { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
    { name: "Basal Joint Arthritis", slug: "basal-joint-arthroplasty" },
  ],
  ctaCard: {
    eyebrow: "Recent wrist injury?",
    headline: "Don't let a poorly-set wrist set the next 30 years.",
  },
  faqHeadline: "Distal radius fractures, answered.",
  faqs: [
    {
      question: "Do I need surgery for a broken wrist?",
      answer:
        "Not always. Fractures that are not displaced, are stable, and don't extend into the wrist joint usually heal well in a cast. Fractures that are displaced, unstable, or break into the joint surface generally do better with surgery, restoring the anatomy gives the best long-term wrist function. Dr. Lee discusses both options honestly and will not push an operation for a fracture that doesn't need one.",
    },
    {
      question: "What is a volar plate?",
      answer:
        "A volar plate is a small titanium plate placed on the palm-side surface of the radius to hold the fracture in correct alignment while it heals. Modern volar plates use fixed-angle screws, the screws lock into the plate, which makes the construct stable even in osteoporotic bone. Dr. Lee helped design the next-generation distal radius plating system.",
    },
    {
      question: "How long until I can use my hand again?",
      answer:
        "After surgery, finger motion begins immediately and most patients are typing within a week or two. Light hand use returns by 2–4 weeks. Heavy lifting, gripping, and impact sport are typically deferred until 8–12 weeks. Full bone healing takes 3–4 months.",
    },
    {
      question: "Will the plate need to be removed later?",
      answer:
        "Usually not. Modern low-profile volar plates are well-tolerated and most patients keep them indefinitely. Removal is occasionally needed if the plate becomes prominent or irritates the flexor tendons, and is sometimes elected by younger patients who want to avoid metal in their wrist long-term.",
    },
    {
      question: "Can I get a second opinion on a wrist fracture?",
      answer:
        "Yes, and many patients do. Dr. Lee sees second-opinion patients regularly, including patients told they need surgery elsewhere and patients told they don't. If you have imaging already, send it ahead and the visit will be substantive.",
    },
  ],
  bottomCtaTitle: "Broke your wrist recently?",
  bottomCtaItalic: "Get it set right the first time.",
  bottomCtaBody:
    "A distal radius fracture heals once. The quality of that healing depends heavily on the quality of the initial treatment. Whether you need surgery or not, the goal is the same, a wrist that works normally in 30 years.",
  metaTitle: "Distal Radius (Wrist) Fracture, Steven J. Lee, MD",
  metaDescription:
    "Distal radius (wrist) fracture treatment by Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital and an orthopedic implant designer. Volar plate fixation, cast treatment, recovery, and second opinions.",
  schemaDescription:
    "A distal radius fracture is a break of the radius bone at the wrist, usually caused by a fall onto an outstretched hand. Treatment options include cast immobilization for stable fractures and volar plate fixation for displaced or intra-articular fractures.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. Scapholunate Ligament Injury
const scapholunate: ConditionPageContent = {
  slug: "scapholunate",
  name: "Scapholunate Ligament Injury",
  region: "Hand & Wrist",
  headerTitle: "Scapholunate Ligament Injury:",
  headerItalic: "the wrist sprain that isn't just a sprain.",
  headerLede:
    "The scapholunate ligament holds two key wrist bones together. When it tears, the wrist mechanics change, and untreated, the wrist will eventually arthrose. Dr. Lee reconstructs scapholunate injuries using anchors he helped design.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "The scapholunate ligament is the most important ligament in the wrist, a small, strong band that holds the scaphoid and lunate bones together so they move as a unit. When this ligament tears, the two bones separate, the wrist mechanics change, and over years the cartilage wears down in a predictable pattern called SLAC wrist (scapholunate advanced collapse).",
    "The challenge with scapholunate injuries is that the initial injury is often dismissed as a sprain, and only diagnosed years later when arthritis is already developing. Catching the injury early opens treatment options that aren't available once the damage is done.",
  ],
  bodySections: [
    {
      heading: "How the injury happens",
      body: [
        "Most scapholunate injuries result from a fall onto an outstretched, extended wrist, the same mechanism that causes a distal radius fracture. The ligament can also be injured in sports, motor vehicle accidents, or from forceful twisting of the wrist.",
        "What makes the diagnosis tricky is that X-rays may look normal in the days after the injury. The clinical exam is what raises suspicion: tenderness directly over the scapholunate interval (about a centimeter distal to Lister's tubercle), and a positive scaphoid shift test.",
      ],
    },
    {
      heading: "How it's diagnosed",
      body: [
        "MRI with contrast (MR arthrogram) or wrist arthroscopy are the most reliable ways to confirm a scapholunate ligament tear. Plain X-rays can show a widened scapholunate interval ('Terry Thomas sign') in chronic or complete tears but are often normal in partial or acute injuries. Wrist arthroscopy lets Dr. Lee both diagnose the tear and treat it in the same setting.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Timing matters enormously with scapholunate injuries. A tear caught within the first few weeks of injury has the best chance of being repaired directly, sewing the ligament back to bone using anchors. After several months, the ligament tissue often can't be repaired and reconstruction becomes necessary.",
      "Dr. Lee helped design suture anchor and internal brace constructs used for ligament reconstruction. In scapholunate reconstruction he typically combines a tendon graft with an internal brace tape to support the repair during healing.",
    ],
  },
  treatmentSections: [
    {
      heading: "Acute repair (within ~6 weeks)",
      body: [
        "Acute scapholunate tears, where the ligament can still be identified and tissue quality is good, are repaired by reattaching the ligament to the bone with small suture anchors. The repair is protected with an internal brace tape, a synthetic 'seatbelt' that supports the ligament during healing.",
      ],
    },
    {
      heading: "Chronic reconstruction (after ligament quality has degraded)",
      body: [
        "When the ligament can no longer be repaired, reconstruction is performed using a tendon graft (often a slip of the flexor carpi radialis or extensor carpi radialis brevis) routed through bone tunnels to recreate the scapholunate connection. Dr. Lee augments these constructs with an internal brace using the anchor system he helped design.",
      ],
    },
  ],
  recoveryIntro: "Reconstruction recovery typically follows this pattern:",
  recovery: [
    {
      when: "Weeks 0–6",
      what: "Cast or splint immobilization. No wrist motion. Finger and shoulder motion encouraged. K-wires sometimes used to stabilize the bones during healing.",
    },
    {
      when: "Weeks 6–10",
      what: "Removable splint. Begin gentle active wrist motion under hand therapy guidance. K-wires removed if used.",
    },
    {
      when: "Weeks 10–16",
      what: "Progressive strengthening. Discontinue splint for daily activities. Light occupational use returns.",
    },
    {
      when: "Months 4–6",
      what: "Return to manual work, weight-bearing on the wrist, and most sport. Contact sport and high-impact wrist loading typically deferred to 6 months.",
    },
  ],
  misconceptions: {
    intro: "Common misunderstandings about scapholunate injuries:",
    items: [
      {
        heading: "A normal X-ray does not rule it out.",
        body: "Acute scapholunate tears can be invisible on plain films. MRI arthrogram or arthroscopy is often needed when the exam suggests the injury.",
      },
      {
        heading: "Delay narrows the options.",
        body: "Repair is possible within weeks of injury. Reconstruction becomes necessary months later. Once arthritis develops, salvage procedures (limited fusion, proximal row carpectomy) are the only options left.",
      },
      {
        heading: "It is not just a wrist sprain.",
        body: "A 'sprain' that doesn't improve over a few weeks deserves a closer look. Persistent wrist pain after a fall is the most common missed diagnosis in this region.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Ligament involved", value: "Scapholunate interosseous ligament" },
    { label: "Best treatment window", value: "Within 6 weeks of injury" },
    { label: "Surgical option", value: "Repair with internal brace, or tendon-graft reconstruction" },
    { label: "Implants used", value: "Suture anchors Dr. Lee helped design" },
    { label: "Immobilization", value: "6 weeks cast/splint after surgery" },
    { label: "Full return", value: "4–6 months" },
  ],
  whyDrLee: [
    "Co-designer of the anchor and internal brace system used in reconstruction",
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Wrist arthroscopy for both diagnosis and treatment",
    "Routinely sees patients told the injury 'can't be fixed' elsewhere",
  ],
  related: [
    { name: "Distal Radius Fracture", slug: "distal-radius-fracture" },
    { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
    { name: "Basal Joint Arthritis", slug: "basal-joint-arthroplasty" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
  ],
  ctaCard: {
    eyebrow: "Wrist pain after a fall?",
    headline: "Don't let a missed diagnosis become arthritis.",
  },
  faqHeadline: "Scapholunate injuries, answered.",
  faqs: [
    {
      question: "How is a scapholunate injury different from a sprain?",
      answer:
        "A scapholunate injury is a tear of a specific key ligament in the wrist that holds the scaphoid and lunate bones in alignment. A 'sprain' is a vague term that can mean almost anything. The reason scapholunate injuries get missed is that they often present as 'just a sprain', but unlike most sprains, untreated scapholunate tears lead to wrist arthritis over time.",
    },
    {
      question: "How long do I have to get this treated?",
      answer:
        "The ideal window for direct repair is within 6 weeks. After 3–6 months, repair often isn't possible and reconstruction with a tendon graft becomes necessary. After arthritis develops, the only options are salvage procedures (partial fusion, proximal row carpectomy). The earlier the injury is caught, the more options remain.",
    },
    {
      question: "Will my wrist be normal again?",
      answer:
        "Outcome depends heavily on timing. Acute repairs in good ligament tissue have excellent outcomes, most patients return to full activity. Late reconstructions are reliable but rarely restore a fully normal wrist. The goal in chronic cases is a pain-free, functional wrist that delays or prevents arthritis.",
    },
    {
      question: "What is the internal brace?",
      answer:
        "The internal brace is a strong synthetic tape, anchored into bone, that supports the ligament repair while it heals. Dr. Lee helped design the anchor and tape constructs used for these reconstructions. The internal brace allows for earlier, more confident rehab without overstressing the healing ligament.",
    },
    {
      question: "Can scapholunate injuries be treated arthroscopically?",
      answer:
        "Sometimes, acute partial tears can be treated arthroscopically with capsular shrinkage and immobilization, and arthroscopy is invaluable for diagnosis. Complete tears generally require an open procedure to do a durable repair or reconstruction. Dr. Lee uses arthroscopy in nearly every case to confirm the diagnosis and assess the cartilage.",
    },
  ],
  bottomCtaTitle: "Still calling it a sprain?",
  bottomCtaItalic: "Get a real diagnosis.",
  bottomCtaBody:
    "Persistent wrist pain after a fall deserves more than reassurance. Most scapholunate injuries are diagnosable on a careful exam and confirmed with the right imaging. The earlier the diagnosis, the more your wrist's future is on the table.",
  metaTitle: "Scapholunate Ligament Injury, Steven J. Lee, MD",
  metaDescription:
    "Scapholunate ligament tear treatment by Dr. Steven J. Lee, MD, co-designer of the internal brace and anchor system used in scapholunate reconstruction. Acute repair, chronic reconstruction, and second opinions.",
  schemaDescription:
    "A scapholunate ligament injury is a tear of the key wrist ligament connecting the scaphoid and lunate bones. Untreated tears lead to wrist arthritis (SLAC wrist). Treatment options include acute repair with internal brace augmentation and tendon-graft reconstruction for chronic injuries.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. Basal Joint Arthroplasty (Thumb CMC)
const basalJointArthroplasty: ConditionPageContent = {
  slug: "basal-joint-arthroplasty",
  name: "Basal Joint Arthritis (Thumb CMC)",
  region: "Hand & Wrist",
  headerTitle: "Basal Joint Arthritis:",
  headerItalic: "thumb pain, definitively treated.",
  headerLede:
    "The base of the thumb is one of the most common sites of arthritis in the hand. When conservative treatment fails, modern reconstruction, including internal brace techniques Dr. Lee co-designed, can relieve pain and restore a strong, functional thumb.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "Basal joint arthritis, arthritis at the base of the thumb, where the metacarpal meets the trapezium (the carpometacarpal or CMC joint), is one of the most common conditions in hand surgery. It is more common in women than men, often appears after the fourth or fifth decade of life, and can make even simple tasks like opening a jar, turning a key, or pinching a button feel impossible.",
    "Like many forms of arthritis, basal joint arthritis exists on a spectrum. Some patients live happily with mild arthritis for decades. Others develop disabling pain that no amount of bracing or injection will solve. The good news is that surgical treatment for advanced basal joint arthritis is highly successful, and most patients regain a strong, comfortable thumb.",
  ],
  bodySections: [
    {
      heading: "Symptoms of basal joint arthritis",
      body: ["Patients typically describe:"],
      bullets: [
        "Pain at the base of the thumb with pinching, gripping, and twisting",
        "A 'shoulder' or bump at the base of the thumb (subluxation of the metacarpal)",
        "Weakness with pinch, dropping objects, difficulty turning keys",
        "Stiffness, especially in the morning",
        "Pain that worsens with use and improves with rest, until the arthritis is advanced",
      ],
    },
    {
      heading: "How it's diagnosed",
      body: [
        "Diagnosis is made by combining the clinical exam (tenderness directly over the basal joint, a positive grind test, and visible deformity) with X-rays that grade the severity. The Eaton-Littler classification is the most commonly used grading system, ranging from Stage I (mild) to Stage IV (joint destruction and involvement of adjacent joints).",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Surgery for basal joint arthritis is one of the most successful operations in hand surgery, but timing matters. Dr. Lee does not push patients into surgery; mild arthritis is treated conservatively with splinting, injections, and activity modification, and many patients live happily with that approach for years.",
      "When surgery is the right call, Dr. Lee uses a modern reconstruction technique that combines removal of the arthritic trapezium with stabilization of the thumb using an internal brace, an anchor and tape construct he helped design. The result is a strong, well-positioned thumb without the prolonged immobilization required by traditional techniques.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most patients begin with one or more of the following:"],
      bullets: [
        "Thumb-spica splinting, usually a removable neoprene brace worn for activities that provoke pain",
        "NSAIDs for symptom control",
        "Corticosteroid injection, can provide months of relief and is often diagnostic",
        "Hand therapy for joint protection and adaptive techniques",
        "Activity modification, avoiding repetitive forceful pinch",
      ],
    },
    {
      heading: "Surgical reconstruction with internal brace",
      body: [
        "When conservative treatment fails, Dr. Lee performs a basal joint reconstruction, removing the arthritic trapezium, stabilizing the thumb metacarpal with an internal brace anchored into the index metacarpal, and reconstructing the supporting soft tissue. The internal brace construct uses anchors Dr. Lee helped design and provides immediate stability without the long immobilization required by traditional ligament reconstruction techniques.",
      ],
    },
  ],
  recoveryIntro: "Recovery is faster than the older 'LRTI' technique most patients have heard about:",
  recovery: [
    {
      when: "Weeks 0–2",
      what: "Splint with thumb included. Light hand use for daily activities. Finger motion encouraged. Most patients are off prescription pain medication within a week.",
    },
    {
      when: "Weeks 2–6",
      what: "Removable thumb-spica brace. Begin gentle thumb motion in therapy. Light typing and writing return.",
    },
    {
      when: "Weeks 6–12",
      what: "Discontinue brace for daily activities. Progressive strengthening. Most patients regain functional pinch by 8–10 weeks.",
    },
    {
      when: "Months 3–6",
      what: "Full return to manual work, sport, and forceful pinch. Strength continues to improve up to a year after surgery.",
    },
  ],
  misconceptions: {
    intro: "Things patients often don't hear elsewhere:",
    items: [
      {
        heading: "Modern technique avoids long immobilization.",
        body: "The traditional LRTI procedure typically requires 6 weeks of cast immobilization. The internal brace technique Dr. Lee uses provides immediate stability and substantially shortens that timeline.",
      },
      {
        heading: "An injection isn't a cure.",
        body: "Corticosteroid injection can buy months of relief, sometimes much longer. But it does not stop the underlying arthritis. The decision to operate is based on symptoms and function, not on imaging.",
      },
      {
        heading: "Both thumbs often go.",
        body: "Many patients eventually need surgery on the second thumb. The good news: outcomes are reliably good on both sides, and there is no urgency to operate on the second thumb until it's bothering you.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Joint involved", value: "Thumb carpometacarpal (CMC) / basal joint" },
    { label: "Typical patient", value: "Women 50+, often bilateral" },
    { label: "Surgical option", value: "Reconstruction with internal brace (anchors Dr. Lee helped design)" },
    { label: "Anesthesia", value: "Regional block + light sedation" },
    { label: "Brace duration", value: "2 weeks rigid, 4 more weeks soft" },
    { label: "Full strength", value: "6 months, improves up to a year" },
  ],
  whyDrLee: [
    "Co-designer of the anchor system used in basal joint reconstruction",
    "Internal brace technique, shorter immobilization than traditional LRTI",
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Conservative, won't operate on arthritis that hasn't earned an operation",
  ],
  related: [
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
    { name: "Distal Radius Fracture", slug: "distal-radius-fracture" },
    { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
    { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
  ],
  ctaCard: {
    eyebrow: "Thumb pain limiting your hands?",
    headline: "Modern reconstruction. Faster recovery.",
  },
  faqHeadline: "Basal joint arthritis, answered.",
  faqs: [
    {
      question: "How do I know if my thumb pain is basal joint arthritis?",
      answer:
        "Basal joint arthritis classically causes pain right at the base of the thumb, the small joint at the wrist end of the thumb, with pinching, opening jars, turning keys, and gripping. Many patients describe a visible 'shoulder' or bump at that spot. A physician's exam and a plain X-ray confirm the diagnosis. Many patients have been told they have 'arthritis' generally, basal joint specifically is a different conversation than wrist or finger arthritis.",
    },
    {
      question: "Do I need surgery, or will an injection be enough?",
      answer:
        "Many patients are well-managed for years with bracing, NSAIDs, and corticosteroid injections. Surgery is reserved for patients whose pain is interfering with daily life despite these measures. The decision is symptomatic, not based on the X-ray. Dr. Lee will not push surgery on someone managing well without it.",
    },
    {
      question: "What is internal brace reconstruction?",
      answer:
        "It's a modern technique that removes the arthritic trapezium bone and stabilizes the thumb using a synthetic tape (the 'internal brace') anchored into the adjacent index metacarpal. Dr. Lee helped design the anchor system used for this reconstruction. Compared with the traditional LRTI procedure, the internal brace allows for shorter immobilization and faster return of function.",
    },
    {
      question: "How long until I can use my hand normally?",
      answer:
        "Light hand use begins within days. Office work and writing return at 2–3 weeks. Most patients are using the thumb normally by 2–3 months, with full strength continuing to improve up to a year after surgery. Compared with older techniques, this is meaningfully faster.",
    },
    {
      question: "Will I need surgery on my other thumb eventually?",
      answer:
        "Often, yes. Basal joint arthritis is frequently bilateral, both sides develop arthritis, though usually not at the same rate. Outcomes are reliably good on both sides, and there is no need to operate on the second thumb until it's bothering you. Many patients have one side done, recover fully, and then decide on the other side months or years later.",
    },
  ],
  bottomCtaTitle: "Thumb pain making your hands feel old?",
  bottomCtaItalic: "It doesn't have to stay that way.",
  bottomCtaBody:
    "Modern basal joint reconstruction is one of the most reliably successful operations in hand surgery. Most patients regain a strong, comfortable thumb and wonder why they waited so long.",
  metaTitle: "Basal Joint Arthritis (Thumb CMC), Steven J. Lee, MD",
  metaDescription:
    "Basal joint (thumb CMC) arthritis treatment by Dr. Steven J. Lee, MD, co-designer of the internal brace system used in modern thumb reconstruction. Conservative treatment, surgery, and recovery explained.",
  schemaDescription:
    "Basal joint arthritis is osteoarthritis of the thumb carpometacarpal (CMC) joint, causing pain with pinching and gripping. Treatment ranges from splinting and corticosteroid injection to surgical reconstruction using internal brace techniques.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. Hand & Wrist Fractures
const handWristFractures: ConditionPageContent = {
  slug: "hand-wrist-fractures",
  name: "Hand & Wrist Fractures",
  region: "Hand & Wrist",
  headerTitle: "Hand & Wrist Fractures:",
  headerItalic: "treated with the hardware Dr. Lee helped design.",
  headerLede:
    "Metacarpal fractures, phalanx fractures, scaphoid fractures, and other small bone injuries of the hand and wrist. The principles are the same as larger fractures, restore the anatomy, allow early motion, prevent stiffness, applied with smaller-scale hardware.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "The hand and wrist contain 27 bones, and almost any of them can break. Common injuries include metacarpal fractures ('boxer's fractures'), phalanx fractures (the bones inside the fingers), and scaphoid fractures, small but consequential injuries that require expertise to treat well.",
    "Most hand and wrist fractures heal without surgery if they are stable and well-aligned. The fractures that need surgery, displaced fractures, intra-articular fractures, and unstable injuries, heal best with the same modern fixation hardware used in larger bone fractures, scaled to the size of the hand.",
  ],
  bodySections: [
    {
      heading: "Common hand and wrist fractures",
      body: ["The fractures Dr. Lee sees most often include:"],
      bullets: [
        "Metacarpal fractures, including 'boxer's fractures' of the small finger metacarpal",
        "Proximal and middle phalanx fractures, finger bone injuries that risk stiffness without proper treatment",
        "Scaphoid fractures, a wrist bone with notoriously fragile blood supply, prone to non-union",
        "Carpal bone fractures (other than scaphoid), less common but each with specific implications",
        "Intra-articular finger fractures, small injuries with outsized consequences if mistreated",
      ],
    },
    {
      heading: "Why hand fractures are different",
      body: [
        "Fractures in the hand carry a higher risk of stiffness than fractures elsewhere in the body. The fingers are surrounded by tendons that adhere quickly when immobilized, even a few weeks of stillness can leave a finger permanently stiff. The art of hand fracture treatment is choosing the approach that gives stable bony healing with the shortest possible period of immobilization, so motion can start early.",
      ],
    },
    {
      heading: "How fractures are diagnosed",
      body: [
        "Plain X-rays diagnose most hand and wrist fractures. Scaphoid fractures are the notable exception, they can be invisible on initial films and may require CT, MRI, or a repeat X-ray two weeks after injury. CT scans are sometimes ordered for intra-articular fractures when surgical planning needs more detail than X-ray provides.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Hand fracture treatment is one of the areas where Dr. Lee's implant-design work is most directly applied. He helped design plating systems for the distal radius, hand, and wrist now used by surgeons across the country.",
      "The treatment approach is conservative when conservative is right, and surgical when surgery is the better path. Many hand fractures do beautifully with proper buddy-taping, splinting, and hand therapy. The ones that need surgery do best when the hardware is small, well-contoured, and allows the finger or wrist to start moving early.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Stable, well-aligned fractures are typically managed with buddy-taping (taping the injured finger to its neighbor for support), a removable splint, or a short period of cast immobilization. Hand therapy begins early, often within the first week, to keep adjacent joints moving while the fracture heals.",
      ],
    },
    {
      heading: "Surgical fixation",
      body: [
        "Displaced, unstable, or intra-articular fractures are best treated with internal fixation, small plates and screws, or sometimes percutaneous pins. Dr. Lee helped design plating systems used for hand and wrist fractures. The construct is sized to the bone and contoured to sit beneath the surrounding tissue, allowing immediate finger motion in most cases.",
      ],
    },
  ],
  recoveryIntro: "Typical recovery after fixation of a hand fracture:",
  recovery: [
    {
      when: "Day 0–7",
      what: "Protective splint. Begin finger motion in unaffected fingers immediately. Elevation and ice for swelling. Most patients off prescription pain medication within 2–3 days.",
    },
    {
      when: "Weeks 1–3",
      what: "Sutures removed. Transition to removable splint. Begin gentle motion of the operated finger or wrist in hand therapy. Light hand use returns.",
    },
    {
      when: "Weeks 3–6",
      what: "Progressive strengthening. Most office workers return to full duty by 3–4 weeks. Manual workers and athletes around 6–8 weeks depending on the fracture.",
    },
    {
      when: "Weeks 6–12",
      what: "Full strength returns. Sport and impact activity resume. Stiffness, if present, is actively addressed in therapy, never accepted as the new normal.",
    },
  ],
  misconceptions: {
    intro: "A few things worth knowing:",
    items: [
      {
        heading: "Small fracture, big consequences.",
        body: "A subtle finger fracture treated as a 'jam' can leave a stiff, painful finger for years. Hand fractures benefit from prompt evaluation by a hand surgeon, especially when they involve a joint.",
      },
      {
        heading: "Pins are not as common as they used to be.",
        body: "Percutaneous pins still have a role but have largely been replaced by small, low-profile plates and screws that allow earlier motion and don't require pin removal.",
      },
      {
        heading: "Stiffness is treatable, but easier prevented.",
        body: "The single best predictor of finger stiffness is duration of immobilization. Treating a fracture properly often means accepting a slightly more involved procedure to allow earlier motion.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Bones involved", value: "Metacarpals, phalanges, scaphoid, other carpal bones" },
    { label: "Common cause", value: "Falls, sports, punches, crush injuries" },
    { label: "Surgical option", value: "Plate/screw fixation with hardware Dr. Lee helped design" },
    { label: "Immobilization", value: "1–4 weeks depending on fracture and fixation" },
    { label: "Hand therapy", value: "Begins within 1–2 weeks in most cases" },
    { label: "Full recovery", value: "6–12 weeks" },
  ],
  whyDrLee: [
    "Helped design the hand and wrist plating systems used in fixation",
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Early-motion focused, minimizes the risk of stiffness",
    "Treats both acute fractures and the stiffness from poorly-treated old fractures",
  ],
  related: [
    { name: "Distal Radius Fracture", slug: "distal-radius-fracture" },
    { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
    { name: "Basal Joint Arthritis", slug: "basal-joint-arthroplasty" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
  ],
  ctaCard: {
    eyebrow: "Hand fracture recently?",
    headline: "Get it set right, your hand has 30 years to thank you for it.",
  },
  faqHeadline: "Hand & wrist fractures, answered.",
  faqs: [
    {
      question: "How can I tell if my finger is broken or just jammed?",
      answer:
        "A 'jam' usually improves substantially over a week or two. Persistent swelling, visible deformity, inability to make a fist, or pain that doesn't fade after 7–10 days are reasons to get an X-ray. Subtle finger fractures that are mistreated as jams can become stiff, painful fingers, most are easily treated with prompt diagnosis.",
    },
    {
      question: "Do I need surgery, or is buddy-taping enough?",
      answer:
        "Most hand fractures do well with non-surgical management. Surgery is reserved for fractures that are displaced (the bone has moved out of position), unstable (will move out of position even when splinted), rotated (will leave the finger crossing under others when fisted), or involve a joint surface. Each fracture is decided on its merits.",
    },
    {
      question: "What hardware does Dr. Lee use?",
      answer:
        "Dr. Lee uses modern hand and wrist plating systems, including hardware he helped design. The plates are small, low-profile, contoured to the bone, and allow early motion in most cases.",
    },
    {
      question: "Will the plate need to be removed later?",
      answer:
        "Usually not. Modern low-profile plates are well-tolerated and most patients keep them indefinitely. Removal is occasionally considered if the plate becomes prominent or irritates tendons. In children, hardware is sometimes removed once the fracture is fully healed.",
    },
    {
      question: "How soon will my finger move again?",
      answer:
        "Earlier than most patients expect. Many hand fracture fixations allow gentle finger motion within a few days of surgery, preventing stiffness is one of the central goals. Hand therapy typically begins within the first 1–2 weeks. Most patients regain full finger motion by 6–8 weeks.",
    },
  ],
  bottomCtaTitle: "Hand fracture that's not healing right?",
  bottomCtaItalic: "It's still treatable.",
  bottomCtaBody:
    "Whether you have a fresh injury or a fracture that wasn't treated well the first time, Dr. Lee evaluates both. Many post-fracture problems, stiffness, malunion, non-union, are correctable when addressed by a hand surgeon.",
  metaTitle: "Hand & Wrist Fractures, Steven J. Lee, MD",
  metaDescription:
    "Hand and wrist fracture treatment by Dr. Steven J. Lee, MD, co-designer of the hand and wrist plating systems used in fixation. Metacarpal, phalanx, scaphoid, and other small bone fractures.",
  schemaDescription:
    "Hand and wrist fractures include metacarpal fractures (boxer's fractures), phalanx fractures, scaphoid fractures, and other small bone injuries. Treatment ranges from buddy-taping and splinting to internal fixation with small plates and screws.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. UCL Reconstruction (Tommy John)
const uclReconstruction: ConditionPageContent = {
  slug: "ucl-reconstruction",
  name: "UCL Reconstruction (Tommy John Surgery)",
  region: "Elbow",
  headerTitle: "UCL Reconstruction:",
  headerItalic: "Tommy John surgery, modern technique.",
  headerLede:
    "The ulnar collateral ligament (UCL) of the elbow is the throwing athlete's most vulnerable structure. Reconstruction uses anchors Dr. Lee helped design, combined with internal brace augmentation in selected cases.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Double Fellowship-Trained · Hand & Sports Medicine",
    reviewed: "May 2026",
  },
  overview: [
    "The ulnar collateral ligament, the UCL, sits on the inside of the elbow and resists the enormous valgus stress generated by throwing. When it tears, throwing velocity drops, accuracy fails, and continued play risks larger injuries to the ulnar nerve and surrounding structures.",
    "Tommy John surgery, named for the pitcher who underwent the first successful procedure in 1974, has evolved enormously over the past five decades. Modern techniques use stronger fixation, allow faster rehab, and now include internal brace augmentation for selected patients. The fundamental goal remains the same: a reconstructed elbow that can return to throwing at the same level as before.",
  ],
  bodySections: [
    {
      heading: "How UCL injuries happen",
      body: [
        "Most UCL tears occur in overhead throwing athletes, baseball pitchers most famously, but also football quarterbacks, javelin throwers, and high-level tennis players. The injury can be acute (a sudden pop during a throw) or chronic (progressive medial elbow pain over a season of throwing).",
        "The injury typically begins as partial tearing that worsens with continued throwing. Many athletes describe a drop in velocity, loss of control, or pain late in games before the ligament fails completely.",
      ],
    },
    {
      heading: "How UCL injuries are diagnosed",
      body: [
        "MRI is the standard imaging study for suspected UCL injury. MR arthrogram (MRI with contrast injected into the joint) improves sensitivity for partial tears. Stress radiography, comparing both elbows on X-ray under valgus stress, is sometimes used to assess joint opening. The clinical exam, including the moving valgus stress test, is highly suggestive in experienced hands.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Not every UCL injury requires surgery. Partial tears in non-throwers can be managed conservatively. Even some partial tears in throwers respond to a period of rest, structured rehab, and biologic injection (PRP). The decision to operate is based on the tear pattern, the patient's sport and level, and how the elbow responds to non-surgical treatment.",
      "When reconstruction is the right call, Dr. Lee uses the modern docking technique with internal brace augmentation in appropriate patients, using anchors he helped design. The internal brace allows for more confident early rehab and, in selected athletes, a shorter timeline to return to throwing.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Selected partial tears, particularly in athletes not committed to high-level throwing, can be managed with 6–12 weeks of throwing rest, structured rehab focused on hip/core/scapular mechanics, and in some cases PRP injection. A period of supervised return-to-throwing follows. Success depends on tear location, partial vs. complete, and the athlete's demands.",
      ],
    },
    {
      heading: "UCL reconstruction (modified docking technique)",
      body: [
        "When reconstruction is needed, a tendon graft, typically the patient's own palmaris longus or gracilis, is routed through bone tunnels to recreate the UCL. The construct is secured with the anchor system Dr. Lee co-designed. In selected patients, an internal brace tape is added to the construct, allowing for earlier confident rehab and, in some cases, a faster return to throwing.",
      ],
    },
  ],
  recoveryIntro: "Recovery for a thrower is a months-long structured progression:",
  recovery: [
    {
      when: "Weeks 0–2",
      what: "Posterior splint, then hinged brace. No elbow motion in the first 1–2 weeks to protect the graft. Begin hand and shoulder motion immediately.",
    },
    {
      when: "Weeks 2–6",
      what: "Hinged brace with progressive range of motion. Initiate light strengthening for shoulder, scapula, and core. No valgus stress.",
    },
    {
      when: "Months 2–4",
      what: "Brace off. Full range of motion. Progressive strengthening. No throwing yet.",
    },
    {
      when: "Months 4–9",
      what: "Begin interval throwing program at month 4–5. Progress through long-toss, mound work, and competitive throwing under guided protocol. Return to competitive pitching typically at 12–15 months, sometimes faster with internal brace augmentation.",
    },
  ],
  misconceptions: {
    intro: "What patients (and parents) often misunderstand:",
    items: [
      {
        heading: "Tommy John surgery does not throw harder.",
        body: "There is a persistent myth that UCL reconstruction improves velocity. It does not. The goal is to return to the same level as before, not to exceed it. Velocity recovery is a function of rehab, mechanics, and conditioning.",
      },
      {
        heading: "The graft is not the whole story.",
        body: "Outcomes depend as much on rehabilitation and throwing mechanics as on the surgery itself. Throwers returning to the same flawed mechanics that injured the first UCL are at risk for re-injury.",
      },
      {
        heading: "Not every UCL injury is a 12+ month story.",
        body: "Some partial tears can return to play in months without surgery. The internal brace augmentation, when appropriate, can shorten the post-surgical return to throwing in some athletes. Each case is individual.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Ligament involved", value: "Ulnar collateral ligament (medial elbow)" },
    { label: "Typical patient", value: "Overhead throwing athletes (baseball, football, tennis)" },
    { label: "Surgical option", value: "UCL reconstruction (docking technique) ± internal brace" },
    { label: "Implants used", value: "Anchors Dr. Lee helped design" },
    { label: "Throwing return", value: "Begins month 4–5; competition at 12–15 months" },
    { label: "Internal brace augmentation", value: "May shorten return in selected patients" },
  ],
  whyDrLee: [
    "Double fellowship-trained, hand & sports medicine",
    "Co-designer of the anchor system used in UCL reconstruction",
    "Modern docking technique with optional internal brace augmentation",
    "Sees second-opinion patients on UCL injuries regularly",
  ],
  related: [
    { name: "Biceps Tendon Rupture", slug: "biceps-rupture" },
    { name: "Rotator Cuff Tear", slug: "rotator-cuff" },
    { name: "ACL Tear", slug: "acl-reconstruction" },
    { name: "Achilles Tendon Rupture", slug: "achilles-rupture" },
  ],
  ctaCard: {
    eyebrow: "Throwing arm pain?",
    headline: "Get the right diagnosis before throwing through it.",
  },
  faqHeadline: "Tommy John surgery, answered.",
  faqs: [
    {
      question: "Do I need Tommy John surgery, or can my UCL heal on its own?",
      answer:
        "It depends on the tear. Partial tears in athletes who aren't committed to high-level throwing often improve with rest and rehab, sometimes with PRP. Complete tears in throwers usually require reconstruction to return to competitive throwing. The decision is individualized, Dr. Lee discusses both paths honestly and won't push surgery on an injury that doesn't require it.",
    },
    {
      question: "What is the internal brace, and do I need it?",
      answer:
        "The internal brace is a synthetic tape, anchored into bone, that augments the tendon graft used in UCL reconstruction. In selected patients, particularly skeletally mature athletes with good ligament tissue, the internal brace allows for more confident early rehab and, in some cases, a faster return to throwing. It is not appropriate for every patient. Dr. Lee discusses whether it makes sense in your case.",
    },
    {
      question: "How long until I can pitch again?",
      answer:
        "Traditional UCL reconstruction returns competitive pitching at 12–15 months. Lighter throwing begins around month 4–5. With internal brace augmentation in appropriate patients, that timeline can be shorter, though the underlying biology of graft maturation still requires patience. Returning too early is the single most common cause of re-injury.",
    },
    {
      question: "Will I throw as hard as before?",
      answer:
        "Most successfully-rehabilitated athletes return to their previous level of throwing. Tommy John surgery does not, as the myth has it, increase velocity above the patient's natural ceiling. What it does is restore the elbow's ability to withstand throwing, which often allows athletes who had been pitching through pain to return to their full mechanical potential.",
    },
    {
      question: "Can I get a second opinion if I've already been told I need surgery?",
      answer:
        "Yes, and many patients do. Dr. Lee sees UCL second opinions regularly, both for patients told they need surgery and for patients told they don't. If you have an MRI, sending it ahead lets the visit be substantive.",
    },
  ],
  bottomCtaTitle: "UCL injury or unexplained throwing arm pain?",
  bottomCtaItalic: "Get the right diagnosis first.",
  bottomCtaBody:
    "Throwing arm pain is rarely just 'soreness.' The athletes who do best are the ones who get an accurate diagnosis early, before continued throwing turns a partial tear into a complete one.",
  metaTitle: "Tommy John (UCL) Reconstruction, Steven J. Lee, MD",
  metaDescription:
    "Tommy John surgery (UCL reconstruction) by Dr. Steven J. Lee, MD, double fellowship-trained in hand and sports medicine. Uses anchors Dr. Lee helped design and offers internal brace augmentation in appropriate patients.",
  schemaDescription:
    "Tommy John surgery (UCL reconstruction) is the rebuilding of the ulnar collateral ligament of the elbow using a tendon graft, performed for throwing athletes with UCL insufficiency. Modern techniques include internal brace augmentation in appropriate patients.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. Biceps Rupture
const bicepsRupture: ConditionPageContent = {
  slug: "biceps-rupture",
  name: "Distal Biceps Tendon Rupture",
  region: "Elbow",
  headerTitle: "Distal Biceps Tendon Rupture:",
  headerItalic: "the elbow tendon, repaired definitively.",
  headerLede:
    "A distal biceps rupture is one of the few orthopedic injuries with a clear best-treatment answer for most patients: surgical repair. Dr. Lee uses anchor and cortical button constructs he helped design.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Double Fellowship-Trained · Hand & Sports Medicine",
    reviewed: "May 2026",
  },
  overview: [
    "The distal biceps tendon is the strong tendon that connects the biceps muscle to the radius bone at the elbow. When it ruptures, usually after a sudden eccentric load on the flexed elbow, like catching a heavy object, the tendon retracts up the arm, the biceps muscle balls up, and the patient loses meaningful elbow flexion and forearm supination strength.",
    "Distal biceps rupture is one of the few injuries where the surgical and non-surgical paths diverge sharply. Non-operative management is reasonable for low-demand patients, but most active adults, especially those who use their arms for work or sport, do meaningfully better with prompt surgical repair.",
  ],
  bodySections: [
    {
      heading: "How the injury happens",
      body: [
        "The classic mechanism is a sudden, unexpected eccentric load, the biceps is contracting to lift something heavy when the weight suddenly increases (catching a falling box, attempting to lift a load that's heavier than expected). The tendon fails at its insertion onto the radius. Most patients describe a sharp pop, immediate weakness, and pain in the antecubital crease.",
        "Bruising along the front of the elbow and up the arm typically appears within 24–48 hours. The biceps muscle balls up high in the arm, the 'Popeye sign', though this is less obvious than in proximal biceps ruptures.",
      ],
    },
    {
      heading: "How it's diagnosed",
      body: [
        "Distal biceps rupture is usually diagnosable on clinical exam. A 'hook test', the examiner cannot hook a finger under the intact biceps tendon, is highly specific. MRI confirms the diagnosis and can distinguish complete from partial tears, and Dr. Lee uses MRI to plan the surgical approach.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Distal biceps rupture is a tendon-to-bone reconstruction problem, and the quality of that fixation determines the outcome. Dr. Lee uses a single-incision anterior approach with cortical button and tenodesis screw fixation, a construct he helped design.",
      "The repair is durable enough to support early protected motion, which avoids the elbow stiffness that has historically been the biggest complication of biceps repair. Most patients are out of formal immobilization within 2–3 weeks.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Reasonable for low-demand patients (typically elderly, sedentary, or with significant medical comorbidities). Non-operative management results in approximately 30–40% loss of supination strength and 20–30% loss of flexion strength. Many patients functionally adapt to this, but it is a real and permanent change.",
      ],
    },
    {
      heading: "Surgical repair, single-incision anterior approach",
      body: [
        "Dr. Lee performs a single-incision anterior repair, the most widely used modern technique. A small horizontal incision is made in the antecubital crease. The retracted tendon is identified, debrided, and reattached to the bicipital tuberosity of the radius using a cortical button and tenodesis screw, a construct Dr. Lee helped design. The single-incision technique avoids the risk of heterotopic ossification associated with the older two-incision technique.",
      ],
    },
  ],
  recoveryIntro: "Recovery after a single-incision repair:",
  recovery: [
    {
      when: "Week 0–2",
      what: "Posterior splint immobilizing the elbow at 90 degrees of flexion. Begin shoulder and hand motion immediately. Most patients off prescription pain medication within 3–5 days.",
    },
    {
      when: "Weeks 2–6",
      what: "Hinged elbow brace with progressive range of motion. Active motion encouraged; no lifting. Light office work resumes.",
    },
    {
      when: "Weeks 6–12",
      what: "Discontinue brace. Begin strengthening. Light manual activity returns. No heavy lifting yet.",
    },
    {
      when: "Months 3–6",
      what: "Progressive strengthening to full. Return to manual work around month 3–4. Heavy lifting, sport, and full eccentric loading around month 4–6.",
    },
  ],
  misconceptions: {
    intro: "Three things often misunderstood about biceps rupture:",
    items: [
      {
        heading: "Time matters.",
        body: "Distal biceps repairs become technically harder over time as the tendon retracts and scars. Acute repair (within 2–4 weeks) is straightforward; delayed repairs sometimes require a tendon graft. The injury benefits from prompt evaluation.",
      },
      {
        heading: "The bulge doesn't always go away.",
        body: "The cosmetic 'Popeye' deformity improves substantially after repair but may not return entirely to normal. The functional outcome, strength and motion, is the more important measure.",
      },
      {
        heading: "Non-operative is a real option for the right patient.",
        body: "If lifting and supination strength are not part of your daily life, living with the tear is a legitimate choice. The decision belongs to the patient, with honest information about the functional trade-off.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Tendon involved", value: "Distal biceps tendon (insertion onto radius)" },
    { label: "Typical mechanism", value: "Sudden eccentric load on flexed elbow" },
    { label: "Surgical option", value: "Single-incision repair with cortical button + tenodesis screw" },
    { label: "Implants used", value: "Constructs Dr. Lee helped design" },
    { label: "Best repair window", value: "Within 2–4 weeks of injury" },
    { label: "Return to lifting", value: "Light at 6–8 weeks; full at 4–6 months" },
  ],
  whyDrLee: [
    "Co-designer of the cortical button and tenodesis screw used in repair",
    "Double fellowship-trained, hand & sports medicine",
    "Single-incision technique, avoids heterotopic ossification risk",
    "Treats both acute and chronic (delayed) biceps ruptures",
  ],
  related: [
    { name: "UCL Tear (Tommy John)", slug: "ucl-reconstruction" },
    { name: "Rotator Cuff Tear", slug: "rotator-cuff" },
    { name: "Achilles Tendon Rupture", slug: "achilles-rupture" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
  ],
  ctaCard: {
    eyebrow: "Felt a pop in your elbow?",
    headline: "Don't wait, early repair is easier.",
  },
  faqHeadline: "Distal biceps rupture, answered.",
  faqs: [
    {
      question: "Do I need surgery for a biceps tendon rupture?",
      answer:
        "Most active adults benefit from prompt surgical repair. Non-operative management is reasonable for low-demand or elderly patients, but typically leaves about 30–40% loss of supination strength and 20–30% loss of flexion strength. For patients who use their arms for work, sport, or daily lifting, repair restores essentially normal function and is generally the better choice.",
    },
    {
      question: "How long after the injury can it be repaired?",
      answer:
        "Acute repairs done within 2–4 weeks of injury are technically straightforward. Repairs done 4–12 weeks out are doable but increasingly difficult as the tendon retracts and scars. After about 3 months, the retracted tendon may not reach the bone and a tendon graft is needed to bridge the gap. Earlier evaluation gives more options.",
    },
    {
      question: "What is the cortical button?",
      answer:
        "The cortical button is a small fixation device, about the size of a piece of pencil eraser, that anchors the repaired biceps tendon to the back side of the radius bone. Combined with a tenodesis screw on the near side, it creates a 'sandwich' fixation that is biomechanically stronger than older suture-only techniques. Dr. Lee helped design this construct.",
    },
    {
      question: "When can I lift weights again?",
      answer:
        "Light lifting (under 5 pounds) begins around 6–8 weeks. Heavier lifting, eccentric loading, and full gym return is staged through months 3–6. Most patients return to manual work around 3–4 months and competitive lifting or contact sport at 4–6 months. Returning to heavy loading too early is the most common preventable cause of re-rupture.",
    },
    {
      question: "Will the muscle bulge come back?",
      answer:
        "Surgical repair pulls the retracted muscle back to its normal position and restores most of the contour. Subtle cosmetic differences may persist, but the functional outcome, strength and motion, is what matters. Most patients are highly satisfied with the cosmetic and functional result.",
    },
  ],
  bottomCtaTitle: "Suspect a biceps tendon rupture?",
  bottomCtaItalic: "Time is on your side, but not forever.",
  bottomCtaBody:
    "Distal biceps ruptures are best repaired within a few weeks of injury. If you felt a pop and the arm doesn't feel right, get evaluated. The earlier the diagnosis, the simpler the path back to a fully functional arm.",
  metaTitle: "Distal Biceps Tendon Rupture, Steven J. Lee, MD",
  metaDescription:
    "Distal biceps tendon rupture and repair by Dr. Steven J. Lee, MD, co-designer of the cortical button and tenodesis screw used in repair. Single-incision technique, recovery timeline, and when surgery is right.",
  schemaDescription:
    "A distal biceps tendon rupture is a tear of the biceps tendon at its insertion on the radius bone at the elbow, typically from sudden eccentric load. Treatment is usually surgical repair using cortical button and tenodesis screw fixation.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. Rotator Cuff Tear
const rotatorCuff: ConditionPageContent = {
  slug: "rotator-cuff",
  name: "Rotator Cuff Tear",
  region: "Shoulder",
  headerTitle: "Rotator Cuff Tear:",
  headerItalic: "from diagnosis to durable repair.",
  headerLede:
    "Rotator cuff tears are the most common cause of shoulder surgery in adults. Modern arthroscopic repair, when indicated, is reliable and durable, but not every tear needs an operation, and not every operation is necessary.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Double Fellowship-Trained · Hand & Sports Medicine",
    reviewed: "May 2026",
  },
  overview: [
    "The rotator cuff is a group of four small muscles and their tendons that wrap around the head of the humerus and control fine shoulder motion. Tears in the cuff, most commonly in the supraspinatus tendon, are extremely common, particularly with age. Many rotator cuff tears are asymptomatic and require no treatment.",
    "When a cuff tear is symptomatic, causing weakness, pain, or significant functional limitation, modern arthroscopic repair is reliable and durable. The art of cuff surgery is knowing which tears need repair, which are best managed conservatively, and which are too far gone for repair alone.",
  ],
  bodySections: [
    {
      heading: "Symptoms of a rotator cuff tear",
      body: ["Common symptoms include:"],
      bullets: [
        "Pain on the outside of the shoulder, often worse at night",
        "Weakness with overhead activity, reaching to a shelf, brushing hair",
        "A sensation of catching or grinding with motion",
        "Difficulty sleeping on the affected side",
        "Pain that radiates down the upper arm but not below the elbow",
      ],
    },
    {
      heading: "How rotator cuff tears are diagnosed",
      body: [
        "MRI is the standard imaging study for a suspected rotator cuff tear. The exam, assessing strength of each cuff muscle individually, guides the suspicion before imaging. Ultrasound is sometimes used as a screening tool and can be valuable when MRI is contraindicated.",
        "Plain X-rays are not used to diagnose cuff tears themselves but are taken to rule out arthritis, calcific deposits, or other conditions that may be causing the symptoms.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Not every rotator cuff tear needs surgery. Many are asymptomatic findings on MRI. Even some symptomatic tears respond well to a structured course of physical therapy, anti-inflammatories, and selective injection, particularly partial-thickness tears and small full-thickness tears in older patients.",
      "When surgery is appropriate, Dr. Lee performs all-arthroscopic repair using current-generation suture anchor constructs. The technique restores the tendon to its bony footprint with the strongest available fixation. Aggressive but disciplined rehabilitation gets the shoulder back to function, most patients regain the motion they had within months and the strength within a year.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Many patients respond well to a structured program of physical therapy focused on scapular mechanics, posterior cuff strengthening, and selective corticosteroid injection for inflammation. Patients with small partial tears, low functional demands, or atrophic muscle may do well without surgery indefinitely. A reasonable trial of conservative treatment is typically 6–12 weeks before reassessing.",
      ],
    },
    {
      heading: "Arthroscopic rotator cuff repair",
      body: [
        "When indicated, all-arthroscopic repair is performed through small portals around the shoulder. The torn tendon is mobilized, the bony footprint is prepared, and the tendon is secured back to bone with suture anchors. Single-row, double-row, and transosseous-equivalent constructs are used depending on the tear pattern. The surgery is typically outpatient with regional anesthesia plus light sedation.",
      ],
    },
  ],
  recoveryIntro: "Rotator cuff repair is a long rehabilitation. The roadmap:",
  recovery: [
    {
      when: "Weeks 0–6",
      what: "Sling immobilization. Passive range of motion only, therapist or other arm moves the shoulder. No active use of the cuff. Elbow, wrist, and hand motion encouraged.",
    },
    {
      when: "Weeks 6–12",
      what: "Sling discontinued. Begin active range of motion. No resistance. Pain typically declines significantly during this phase.",
    },
    {
      when: "Months 3–6",
      what: "Progressive strengthening. Functional return for daily activities and light occupational use.",
    },
    {
      when: "Months 6–12",
      what: "Continued strengthening to full. Return to sport, manual work, and overhead activity. Strength continues to improve up to a year after surgery.",
    },
  ],
  misconceptions: {
    intro: "Common misunderstandings about cuff tears:",
    items: [
      {
        heading: "Not every tear needs to be fixed.",
        body: "MRIs in adults over 60 frequently show cuff tears in shoulders that don't hurt. The decision to operate is based on symptoms and function, not on imaging alone.",
      },
      {
        heading: "Rehab is the surgery's job, not yours alone.",
        body: "The technical repair is one component. Outcome depends heavily on the post-operative therapy. Skipping or shortcutting the protocol is the most common cause of stiffness or re-tear.",
      },
      {
        heading: "Massive tears have other options.",
        body: "Some tears are too large or too retracted to repair primarily. Options for these include partial repair, superior capsular reconstruction, tendon transfer, or, in the right older patient, reverse shoulder replacement. Dr. Lee can discuss whether your tear is reparable based on your MRI.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Tendons involved", value: "Supraspinatus most commonly; can involve all four" },
    { label: "Typical patient", value: "Adults 40+, often after a fall or with chronic overhead use" },
    { label: "Surgical option", value: "All-arthroscopic repair with suture anchors" },
    { label: "Sling duration", value: "6 weeks" },
    { label: "Return to sport", value: "6–9 months depending on demand" },
    { label: "Full strength", value: "9–12 months" },
  ],
  whyDrLee: [
    "Double fellowship-trained, sports medicine and hand & upper extremity",
    "All-arthroscopic technique with current-generation anchor constructs",
    "Sees second-opinion patients on cuff surgery regularly",
    "Conservative, will recommend non-surgical management when appropriate",
  ],
  related: [
    { name: "UCL Tear (Tommy John)", slug: "ucl-reconstruction" },
    { name: "Biceps Tendon Rupture", slug: "biceps-rupture" },
    { name: "ACL Tear", slug: "acl-reconstruction" },
    { name: "Achilles Tendon Rupture", slug: "achilles-rupture" },
  ],
  ctaCard: {
    eyebrow: "Shoulder pain not getting better?",
    headline: "Find out whether it's the cuff, and whether it needs surgery.",
  },
  faqHeadline: "Rotator cuff tears, answered.",
  faqs: [
    {
      question: "Does every rotator cuff tear need surgery?",
      answer:
        "No. Many cuff tears are asymptomatic and never require treatment. Symptomatic partial tears and small full-thickness tears often respond well to physical therapy, anti-inflammatories, and selective corticosteroid injection. Surgery is typically considered when conservative treatment has failed for 6–12 weeks, when there is significant weakness, or when there is a sudden traumatic tear in an active patient.",
    },
    {
      question: "What is an arthroscopic repair?",
      answer:
        "Arthroscopic cuff repair is performed through small portals around the shoulder using a camera and specialized instruments. The torn tendon is mobilized and reattached to the bony footprint on the humerus using suture anchors. The technique avoids the larger open incision of traditional repair and allows for outpatient surgery with regional anesthesia.",
    },
    {
      question: "Why is the recovery so long?",
      answer:
        "Rotator cuff tissue heals to bone slowly, the biology of tendon-to-bone healing takes 3–4 months to reach reasonable strength. Loading the repair too early is the most common cause of re-tear. The 6-week sling and graduated rehab protect the healing tendon while it remodels into a durable construct.",
    },
    {
      question: "Will I get full strength and motion back?",
      answer:
        "Most patients regain essentially full motion and strength by 9–12 months. The exact outcome depends on the size of the tear, the quality of the tendon and muscle going in, and the patient's commitment to rehab. Larger and more chronic tears have somewhat lower success rates, though even massive tears often improve substantially with appropriate treatment.",
    },
    {
      question: "What if my tear is too large to repair?",
      answer:
        "Massive or retracted tears that can't be repaired primarily still have options. These include partial repair, superior capsular reconstruction (using an Achilles or dermal graft to bridge the defect), tendon transfer, or, in selected older patients, reverse shoulder arthroplasty. Dr. Lee reviews the MRI and discusses what makes sense for your specific tear.",
    },
  ],
  bottomCtaTitle: "Shoulder pain that won't settle?",
  bottomCtaItalic: "Find out what's actually going on.",
  bottomCtaBody:
    "Most shoulder pain has a treatable cause. A careful exam and appropriate imaging usually clarifies the diagnosis, and clarifies whether surgery is even on the table.",
  metaTitle: "Rotator Cuff Tear, Surgery & Treatment | Steven J. Lee, MD",
  metaDescription:
    "Rotator cuff tear treatment by Dr. Steven J. Lee, MD, fellowship-trained sports medicine surgeon. Arthroscopic repair, conservative management, recovery timeline, and when surgery is the right call.",
  schemaDescription:
    "A rotator cuff tear is a tear of one or more of the four tendons that surround the shoulder joint, most commonly the supraspinatus. Treatment ranges from physical therapy and corticosteroid injection to arthroscopic suture anchor repair.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. ACL Reconstruction
const aclReconstruction: ConditionPageContent = {
  slug: "acl-reconstruction",
  name: "ACL Tear & Reconstruction",
  region: "Knee & Sports",
  headerTitle: "ACL Reconstruction:",
  headerItalic: "knee surgery, designed around your sport.",
  headerLede:
    "An ACL tear is one of the most common athletic injuries in the knee. Reconstruction returns most athletes to their previous level, when the surgery, graft choice, and rehabilitation are matched to the patient.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Double Fellowship-Trained · Hand & Sports Medicine",
    reviewed: "May 2026",
  },
  overview: [
    "The anterior cruciate ligament, the ACL, is the central stabilizer of the knee, resisting forward translation of the tibia on the femur. ACL tears most commonly occur during non-contact pivoting injuries in sport: landing from a jump, cutting laterally, or planting and twisting.",
    "ACL reconstruction is one of the most studied operations in orthopedic surgery. The principles are well-established; the art is in the details, graft choice, tunnel position, fixation, and rehabilitation timing, all matched to the demands of the individual patient.",
  ],
  bodySections: [
    {
      heading: "How ACL injuries happen",
      body: [
        "Most ACL tears are non-contact injuries, the athlete plants the foot and the knee gives out, often with an audible pop. Swelling develops within hours. The classic mechanism is deceleration with the knee close to extension and the foot fixed on the ground, with internal rotation of the tibia.",
        "Roughly half of ACL tears are accompanied by other injuries, meniscus tears, MCL injuries, or chondral damage. The full picture is determined by MRI and the operative arthroscopy.",
      ],
    },
    {
      heading: "How ACL tears are diagnosed",
      body: [
        "The clinical exam, Lachman test, anterior drawer, pivot shift, is highly suggestive. MRI confirms the diagnosis and identifies associated injuries. Most ACL tears are diagnosable on exam alone in experienced hands, with imaging used to plan surgery and identify concurrent damage.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "The question of whether to reconstruct an ACL is partly about activity level and partly about associated injury. Sedentary patients with isolated tears can sometimes function well without surgery. Active patients, athletes, and patients with associated meniscus injuries generally do better with reconstruction.",
      "Dr. Lee discusses graft options, patellar tendon (BTB), quadriceps tendon, hamstring, or allograft, based on age, sport, activity level, and personal preference. In selected patients, internal brace augmentation can shorten the recovery timeline. The rehabilitation protocol is structured around the patient's goal sport.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Reasonable for sedentary or low-demand patients with isolated ACL tears, particularly older patients. Structured physical therapy can restore enough functional stability for many daily activities. Patients who choose this path should understand that they are at higher risk for meniscus injury and progressive cartilage damage if they later return to pivoting sport.",
      ],
    },
    {
      heading: "ACL reconstruction",
      body: [
        "Reconstruction is performed arthroscopically. A tendon graft, typically patellar tendon (BTB), quadriceps tendon, or hamstring autograft, or in selected patients an allograft, is routed through bone tunnels in the femur and tibia and secured with interference screws or cortical button constructs.",
        "Associated meniscus tears are repaired or trimmed at the same time. Cartilage injuries are addressed as needed. Dr. Lee uses modern fixation hardware throughout, the same constructs used by surgeons nationwide.",
      ],
    },
  ],
  recoveryIntro: "ACL reconstruction recovery follows a sport-specific timeline:",
  recovery: [
    {
      when: "Weeks 0–2",
      what: "Crutches, brace, ice, elevation. Focus on regaining full extension, controlling swelling, and beginning quadriceps activation. Most patients are off prescription pain medication within a week.",
    },
    {
      when: "Weeks 2–6",
      what: "Progressive weight-bearing. Discontinue crutches. Begin formal physical therapy. Goals: full range of motion, normal gait, beginning strength work.",
    },
    {
      when: "Months 2–6",
      what: "Strength training. Begin straight-line running around month 3–4 in many protocols. Sport-specific drills, cutting, and pivoting added in stages.",
    },
    {
      when: "Months 6–12",
      what: "Return to sport criteria typically met around 9–12 months. Functional testing, single-leg hop tests, strength symmetry, psychological readiness, guide return-to-sport decisions. Returning too early is the single most preventable cause of re-injury.",
    },
  ],
  misconceptions: {
    intro: "What patients (and parents) often misunderstand:",
    items: [
      {
        heading: "Return to sport at 6 months is usually too early.",
        body: "Despite what some marketing suggests, the biological remodeling of an ACL graft takes 9–12 months in most patients. Returning earlier is associated with higher re-tear rates.",
      },
      {
        heading: "Not every ACL tear needs surgery.",
        body: "Older or sedentary patients with isolated tears can sometimes function well non-operatively. The decision is about activity demands and associated injuries, not about the MRI alone.",
      },
      {
        heading: "Graft choice is not one-size-fits-all.",
        body: "BTB, quadriceps, hamstring, and allograft each have trade-offs. The right choice depends on age, sport, harvest site preference, and prior surgery. Dr. Lee discusses each option honestly.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Ligament involved", value: "Anterior cruciate ligament (ACL)" },
    { label: "Typical mechanism", value: "Non-contact pivoting / cutting injury" },
    { label: "Graft options", value: "BTB, quadriceps tendon, hamstring, or allograft" },
    { label: "Internal brace augmentation", value: "Available in selected patients" },
    { label: "Return to running", value: "Typically month 3–4" },
    { label: "Return to sport", value: "9–12 months with functional testing" },
  ],
  whyDrLee: [
    "Double fellowship-trained, sports medicine and hand & upper extremity",
    "Graft selection tailored to age, sport, and patient preference",
    "Modern fixation constructs throughout",
    "Functional return-to-sport testing, not calendar-based clearance",
  ],
  related: [
    { name: "Achilles Tendon Rupture", slug: "achilles-rupture" },
    { name: "UCL Tear (Tommy John)", slug: "ucl-reconstruction" },
    { name: "Rotator Cuff Tear", slug: "rotator-cuff" },
    { name: "Biceps Tendon Rupture", slug: "biceps-rupture" },
  ],
  ctaCard: {
    eyebrow: "Recent knee injury?",
    headline: "Get a real ACL evaluation before training around it.",
  },
  faqHeadline: "ACL tears and reconstruction, answered.",
  faqs: [
    {
      question: "Do I need ACL reconstruction?",
      answer:
        "It depends on your activity level and any associated injuries. Athletes and active patients who want to return to pivoting sports almost always do better with reconstruction. Sedentary patients with isolated tears can sometimes function well without surgery, though they accept a higher risk of future meniscus injury if they return to pivoting activity. Dr. Lee discusses both paths honestly.",
    },
    {
      question: "Which graft should I have?",
      answer:
        "There is no single best graft for every patient. BTB (bone-patellar tendon-bone) has the longest track record and is often chosen for high-level athletes. Quadriceps tendon is increasingly popular for similar reasons with potentially less anterior knee pain. Hamstring autograft has a smaller incision and good outcomes. Allograft avoids harvest site morbidity but has higher re-tear rates in young athletes. Dr. Lee discusses the trade-offs based on your age, sport, and preferences.",
    },
    {
      question: "How long until I can play sports again?",
      answer:
        "Return-to-sport is typically 9–12 months after reconstruction, with functional testing (strength symmetry, single-leg hop tests, psychological readiness) guiding the timing. Earlier return, especially before 9 months, is associated with higher re-tear rates. The goal is not just clearance by the calendar but readiness by objective testing.",
    },
    {
      question: "What is internal brace augmentation for the ACL?",
      answer:
        "Internal brace augmentation adds a synthetic tape, anchored alongside the graft, that protects the reconstruction during the early healing phase. It is appropriate in selected patients and may shorten the early protected timeline. Not every ACL needs it, and not every surgeon uses it; Dr. Lee discusses whether it makes sense in your case.",
    },
    {
      question: "Can I get a second opinion on a knee surgery I've been told I need?",
      answer:
        "Yes, and many patients do. If you have an MRI report and images, sending them ahead of the visit lets the conversation be substantive from minute one.",
    },
  ],
  bottomCtaTitle: "Knee felt wrong after a pivot?",
  bottomCtaItalic: "Get the diagnosis right the first time.",
  bottomCtaBody:
    "An ACL tear that's properly diagnosed early, and treated with surgery matched to your sport and life, usually returns you to the field. Get a real evaluation before you start training around the injury.",
  metaTitle: "ACL Tear & Reconstruction, Steven J. Lee, MD",
  metaDescription:
    "ACL reconstruction by Dr. Steven J. Lee, MD, double fellowship-trained in sports medicine. Graft options (BTB, quadriceps, hamstring, allograft), internal brace augmentation in selected patients, return-to-sport timing.",
  schemaDescription:
    "An ACL tear is a tear of the anterior cruciate ligament, typically from a non-contact pivoting injury. Treatment for active patients is usually ACL reconstruction using a tendon graft, with return to sport at 9–12 months.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 9. Achilles Rupture
const achillesRupture: ConditionPageContent = {
  slug: "achilles-rupture",
  name: "Achilles Tendon Rupture",
  region: "Foot & Ankle",
  headerTitle: "Achilles Tendon Rupture:",
  headerItalic: "from rupture to running.",
  headerLede:
    "The Achilles is the largest tendon in the body, and when it ruptures, the path back is months long. Dr. Lee has authored four peer-reviewed papers on Achilles repair and treats this injury with the urgency and precision it deserves.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Double Fellowship-Trained · Hand & Sports Medicine",
    reviewed: "May 2026",
  },
  overview: [
    "The Achilles tendon connects the calf muscles to the heel and transmits the force that allows pushing off the ground in walking, running, and jumping. Rupture typically happens during a sudden push-off, often during recreational sport in middle-aged adults, and produces an unmistakable pop followed by immediate weakness in the calf.",
    "Treatment of Achilles rupture has evolved significantly over the past decade. The previous orthodox of 'surgery for athletes, casting for everyone else' has given way to a more nuanced approach in which both surgical and structured non-operative pathways can produce excellent outcomes, when the protocol is right.",
  ],
  bodySections: [
    {
      heading: "How Achilles ruptures happen",
      body: [
        "The classic mechanism is a sudden eccentric load on the tendon, pushing off to start a sprint, jumping for a tennis shot, or stepping off a curb. Many patients describe a sensation of being kicked in the back of the leg before they realize what happened. The injury is most common in 'weekend warrior' athletes in their 30s and 40s.",
        "Achilles rupture is diagnosable in nearly every case on history and exam alone. A palpable gap in the tendon and a positive Thompson test (squeezing the calf produces no plantarflexion of the foot) are typically all that is needed.",
      ],
    },
    {
      heading: "How it's diagnosed",
      body: [
        "Clinical exam confirms the diagnosis in most cases. MRI is sometimes obtained to characterize the location and extent of the rupture, particularly for delayed presentations or planning surgical approach. Ultrasound is an alternative imaging modality.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Achilles rupture is one of the conditions Dr. Lee has studied most academically, he has authored four peer-reviewed papers on Achilles repair. Modern functional rehabilitation protocols have made non-operative treatment a legitimate option for many patients, while surgical repair retains advantages in selected athletes and active adults.",
      "The decision-making is individualized. Dr. Lee discusses both paths, operative and non-operative, with honest expectations about re-rupture risk, recovery timeline, and functional return. The patient's age, activity level, and risk tolerance all factor in.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment (functional rehabilitation)",
      body: [
        "Modern non-operative treatment is not 'casting and waiting.' It uses a functional bracing protocol that starts in equinus (toes-down position) and progressively brings the foot to neutral over 8–10 weeks. Early weight-bearing is encouraged. With this protocol, re-rupture rates approach those of surgical repair in appropriate patients.",
      ],
    },
    {
      heading: "Surgical repair",
      body: [
        "Open or percutaneous repair brings the torn ends of the tendon back together with strong suture constructs. Open repair allows for direct visualization and the strongest fixation but carries a small risk of wound healing problems. Percutaneous repair minimizes wound complications but is technically more demanding. Dr. Lee uses both techniques depending on the specific case.",
      ],
    },
  ],
  recoveryIntro: "Recovery follows a structured progression whether surgical or non-surgical:",
  recovery: [
    {
      when: "Weeks 0–2",
      what: "Splint or boot in equinus (toes down). Non-weight-bearing initially, transitioning to protected weight-bearing in the boot. Pain typically controlled with oral medication.",
    },
    {
      when: "Weeks 2–8",
      what: "Walking boot with heel lifts. Progressive heel-lift reduction to bring the foot toward neutral. Begin physical therapy. Increasing weight-bearing.",
    },
    {
      when: "Months 2–4",
      what: "Discontinue boot. Walking in normal shoes. Progressive calf strengthening. Stationary biking, then elliptical, then jogging in graduated steps.",
    },
    {
      when: "Months 4–9",
      what: "Return to running typically around month 4–5. Return to cutting sports and jumping around month 6–9 depending on the protocol and the patient's progress.",
    },
  ],
  misconceptions: {
    intro: "Three things commonly misunderstood:",
    items: [
      {
        heading: "Surgery is not the only good answer anymore.",
        body: "Modern functional bracing produces re-rupture rates close to surgical repair in appropriate patients. The 'surgery for athletes, casting for everyone else' rule is outdated.",
      },
      {
        heading: "The slow part is not the surgery, it's the biology.",
        body: "Tendon takes 6–9 months to remodel into something durable enough for running, cutting, and jumping. This is true regardless of whether the rupture was treated surgically or non-surgically.",
      },
      {
        heading: "Re-rupture risk is highest at 4–6 months.",
        body: "Patients feel good around month 4 and want to push training. The tendon, however, is still remodeling and is vulnerable. Most re-ruptures happen in this window, in patients who exceeded the protocol.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Tendon involved", value: "Achilles tendon (calf to heel)" },
    { label: "Typical mechanism", value: "Sudden push-off in recreational sport" },
    { label: "Treatment options", value: "Surgical repair OR functional bracing" },
    { label: "Boot duration", value: "8–10 weeks regardless of pathway" },
    { label: "Return to running", value: "Month 4–5" },
    { label: "Return to sport", value: "6–9 months" },
  ],
  whyDrLee: [
    "Four peer-reviewed publications on Achilles tendon repair",
    "Both surgical and non-surgical functional protocols",
    "Double fellowship-trained, sports medicine and hand & upper extremity",
    "Treats delayed and re-ruptured Achilles tendons",
  ],
  related: [
    { name: "ACL Tear", slug: "acl-reconstruction" },
    { name: "UCL Tear (Tommy John)", slug: "ucl-reconstruction" },
    { name: "Rotator Cuff Tear", slug: "rotator-cuff" },
    { name: "Biceps Tendon Rupture", slug: "biceps-rupture" },
  ],
  ctaCard: {
    eyebrow: "Felt a pop in the calf?",
    headline: "Get evaluated within days, not weeks.",
  },
  faqHeadline: "Achilles ruptures, answered.",
  faqs: [
    {
      question: "Do I need surgery for an Achilles rupture?",
      answer:
        "Not necessarily. Modern functional bracing protocols produce re-rupture rates close to surgical repair in appropriate patients. The decision depends on the patient's age, activity level, the location of the rupture, and individual risk tolerance. Dr. Lee discusses both paths honestly, with realistic expectations for each.",
    },
    {
      question: "How is functional bracing different from a cast?",
      answer:
        "Functional bracing uses a walking boot with adjustable heel lifts, allowing protected weight-bearing and ankle motion within a safe range. Casts immobilize the ankle entirely. Modern protocols using functional bracing have replaced traditional casting in most cases, because they allow earlier motion and weight-bearing while still protecting the tendon repair.",
    },
    {
      question: "Why does Dr. Lee have so many papers on Achilles?",
      answer:
        "Achilles tendon repair has been a particular research and clinical interest for Dr. Lee. He has authored four peer-reviewed papers in the orthopedic literature on Achilles repair techniques and outcomes. The combination of his sports medicine fellowship training and academic focus on this specific injury means that Achilles ruptures get the attention they deserve.",
    },
    {
      question: "When can I run again?",
      answer:
        "Most patients return to running between months 4 and 5 following the protocol. Earlier running attempts are the most common cause of re-rupture. The progression is gradual, walking, then walk-jog intervals, then full running, and adherence to the protocol is what prevents the re-injury that ends the recovery.",
    },
    {
      question: "What if I'm presenting weeks or months after the injury?",
      answer:
        "Delayed-presentation Achilles ruptures are not uncommon, patients sometimes 'walk it off' for weeks before realizing something is seriously wrong. These cases can still be treated, but treatment becomes more complex. Repair may require tendon transfer or grafting to bridge the gap. Get evaluated.",
    },
  ],
  bottomCtaTitle: "Suspect an Achilles rupture?",
  bottomCtaItalic: "The earlier the diagnosis, the more options remain.",
  bottomCtaBody:
    "Whether you ruptured the tendon yesterday or three weeks ago, treatment options are available. The earlier the evaluation, the simpler the path back to walking, running, and sport.",
  metaTitle: "Achilles Tendon Rupture, Steven J. Lee, MD",
  metaDescription:
    "Achilles tendon rupture treatment by Dr. Steven J. Lee, MD, author of four peer-reviewed Achilles repair papers and double fellowship-trained in sports medicine. Surgical repair and functional bracing protocols.",
  schemaDescription:
    "An Achilles tendon rupture is a tear of the large tendon connecting the calf muscles to the heel, typically from a sudden push-off injury. Treatment options include surgical repair and structured functional bracing protocols, with similar outcomes in appropriate patients.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 10. Carpal Tunnel Syndrome
const carpalTunnel: ConditionPageContent = {
  slug: "carpal-tunnel",
  name: "Carpal Tunnel Syndrome",
  region: "Hand & Wrist",
  headerTitle: "Carpal Tunnel Syndrome:",
  headerItalic: "diagnosis, treatment, and recovery.",
  headerLede:
    "The most common nerve compression in the body. When non-surgical treatment fails, endoscopic carpal tunnel release offers a minimally invasive solution with faster recovery than traditional open surgery.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "Carpal tunnel syndrome is compression of the median nerve as it passes through the carpal tunnel, a narrow passageway on the palm side of the wrist. It is the most common nerve compression in the body, affecting roughly 4–5% of adults, and one of the most frequent reasons patients are referred for hand surgery.",
    "Most patients describe a slow, gradual onset of numbness, tingling, and occasional sharp pain in the thumb, index, middle, and half of the ring finger. Symptoms classically worsen at night and during activities that hold the wrist in a flexed position, driving, holding a phone, reading.",
  ],
  bodySections: [
    {
      heading: "Anatomy of the carpal tunnel",
      body: [
        "The carpal tunnel is bordered on three sides by the wrist bones (carpals) and on the palm side by a strong fibrous band called the transverse carpal ligament. Nine flexor tendons and the median nerve share this small space. When the contents swell, or when the ligament thickens, the nerve is the first structure to suffer, pressure on the median nerve produces the classic symptoms.",
      ],
    },
    {
      heading: "Symptoms and red flags",
      body: ["In addition to night-time numbness, patients often notice:"],
      bullets: [
        "Weakness or clumsiness, dropping objects, difficulty buttoning shirts",
        "A burning or electric sensation that travels up the forearm",
        "Hand fatigue with prolonged gripping",
        'Symptoms that improve briefly when the hand is shaken out (the "flick sign")',
        "Wasting at the base of the thumb in long-standing severe cases",
      ],
      bulletsAfter:
        "Persistent numbness that does not come and go, visible muscle wasting at the base of the thumb, or severe hand weakness are signs that the nerve has been compressed long enough to cause damage, and that surgery should not be delayed.",
    },
    {
      heading: "How carpal tunnel is diagnosed",
      body: [
        "Diagnosis combines the clinical exam with an electrodiagnostic study (commonly called EMG/NCV, electromyography and nerve conduction velocity). The exam often includes provocative maneuvers, Tinel's test, Phalen's test, carpal compression, that reproduce the symptoms when the median nerve is irritated. The EMG/NCV objectively measures how well the nerve is conducting and helps grade severity. Imaging is rarely required unless an unusual cause is suspected.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Most patients with carpal tunnel syndrome do not need surgery, and they don't get surgery in Dr. Lee's practice. The first line of treatment is almost always a nighttime wrist splint, sometimes paired with a corticosteroid injection, and an honest conversation about which activities provoke symptoms.",
      "When symptoms are severe, conservative care has failed, or the EMG shows meaningful nerve damage, Dr. Lee performs endoscopic carpal tunnel release: a minimally invasive technique that delivers the same nerve decompression as traditional open surgery, but through one small incision and with substantially less scar tenderness afterward.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["For mild and moderate carpal tunnel, the following are tried first:"],
      bullets: [
        "Nighttime wrist splinting, keeps the wrist neutral while sleeping; often the single most effective non-surgical step",
        "Activity modification, reducing prolonged wrist flexion during the day",
        "Corticosteroid injection, reduces tendon inflammation in the tunnel; often diagnostic as well as therapeutic",
        "Ergonomic adjustments at work, neutral wrist position, supported forearms",
        "Physical and hand therapy, for select cases",
      ],
    },
    {
      heading: "Surgical treatment: endoscopic release",
      body: [
        "When surgery is appropriate, the goal is straightforward: release the transverse carpal ligament that is compressing the median nerve. The relief delivered by surgery is durable, recurrence is rare.",
        "In endoscopic carpal tunnel release, a small incision is made at the wrist crease, and a thin camera (the endoscope) is introduced into the tunnel. The ligament is then divided under direct visualization with a small blade. Because the palm itself is not cut, patients typically have less scar pain and return to normal hand use faster than with open surgery. The procedure is performed under local anesthesia with light sedation, no general anesthesia is required, and takes approximately 15 minutes per hand.",
      ],
    },
  ],
  recoveryIntro: "Recovery is faster than most patients expect. The summary:",
  recovery: [
    {
      when: "Day 0–3",
      what: "Light hand use the same day. Bulky dressing for the first 2–3 days. Elevate the hand above heart level to minimize swelling.",
    },
    {
      when: "Week 1",
      what: "Sutures removed. Begin normal daily activities, typing, light cooking, dressing. Avoid heavy gripping or lifting.",
    },
    {
      when: "Weeks 2–4",
      what: "Most patients have returned to office work. Numbness and tingling improve substantially. Scar massage begins.",
    },
    {
      when: "Weeks 4–6",
      what: "Return to heavier activities, exercise, manual labor, sports. Scar tenderness fades over the following months.",
    },
  ],
  misconceptions: {
    intro: "Three things are worth setting straight:",
    items: [
      {
        heading: "Carpal tunnel is not caused by typing alone.",
        body: "Genetics, anatomy, pregnancy, thyroid disease, and diabetes are all bigger contributors than keyboard use.",
      },
      {
        heading: "Delay can cost recovery.",
        body: "Severe, long-standing nerve compression may leave permanent numbness or weakness even after a perfect surgical release. If non-surgical treatment isn't working, don't wait too long.",
      },
      {
        heading: "Surgery does not require months off work.",
        body: "Most patients return to office work within a week and full activity within 4–6 weeks.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Affected area", value: "Median nerve at the wrist" },
    { label: "Typical age", value: "40–60, but seen across adulthood" },
    { label: "Surgical option", value: "Endoscopic release (Dr. Lee's preference)" },
    { label: "Procedure time", value: "~15 minutes per hand" },
    { label: "Return to activity", value: "Light use same day · full use 4–6 weeks" },
    { label: "Anesthesia", value: "Local + light sedation (no general)" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Endoscopic technique, minimally invasive, faster recovery",
    "Performs revision carpal tunnel for patients who had prior surgery elsewhere",
  ],
  related: [
    { name: "Distal Radius Fracture", slug: "distal-radius-fracture" },
    { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
    { name: "Basal Joint Arthritis", slug: "basal-joint-arthroplasty" },
    { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
  ],
  ctaCard: {
    eyebrow: "15-minute procedure",
    headline: "Most patients are home within an hour.",
  },
  faqHeadline: "Carpal tunnel, answered.",
  faqs: [
    {
      question: "How do I know if I have carpal tunnel syndrome?",
      answer:
        "The classic symptoms are numbness, tingling, and pain in the thumb, index, middle, and half of the ring finger. Symptoms are typically worse at night and often wake patients from sleep. Many patients also describe weakness or clumsiness, dropping objects, difficulty buttoning shirts, or trouble holding a phone. A definitive diagnosis is made by combining the clinical exam with a nerve conduction study (EMG/NCV). Imaging is sometimes used to rule out other conditions but is not required to diagnose carpal tunnel syndrome.",
    },
    {
      question: "Does carpal tunnel syndrome always require surgery?",
      answer:
        "No. Mild and early carpal tunnel syndrome often responds well to non-surgical treatment, particularly nighttime wrist splinting, activity modification, and corticosteroid injection. Dr. Lee typically recommends surgery only when symptoms are significant, when conservative treatment has failed, or when there is evidence of nerve damage on the EMG. Many of the patients Dr. Lee sees never need an operation.",
    },
    {
      question: "What is endoscopic carpal tunnel release?",
      answer:
        "Endoscopic carpal tunnel release is a minimally invasive technique in which the transverse carpal ligament is divided through one or two very small incisions, using a small camera (endoscope) to visualize the release. Compared with traditional open release, endoscopic release typically results in less scar tenderness, faster return to normal hand use, and a smaller visible scar. The relief of nerve compression is identical to open surgery, only the approach differs.",
    },
    {
      question: "How long is recovery after carpal tunnel surgery?",
      answer:
        "Most patients use the hand for light activities the same day. Heavy gripping, lifting, and high-impact use of the hand typically resume between 4 and 6 weeks. Numbness and tingling often improve within days to weeks; chronic symptoms or hand weakness may take longer to recover, and in cases of severe long-standing compression some residual numbness may remain. Hand therapy is occasionally recommended but is not required for most patients.",
    },
    {
      question: "Will carpal tunnel come back after surgery?",
      answer:
        "Recurrence after a properly performed carpal tunnel release is uncommon, approximately 1–2% of patients. If symptoms persist or return, it usually means either the diagnosis was incomplete (another nerve compression was missed) or the release was not adequate. A revision is occasionally needed and Dr. Lee performs these for patients who have had prior carpal tunnel surgery elsewhere.",
    },
  ],
  bottomCtaTitle: "Think you have carpal tunnel?",
  bottomCtaItalic: "Get it evaluated properly.",
  bottomCtaBody:
    "Most patients do well with non-surgical treatment. The ones who don't do best when they don't wait too long. Either way, the first step is an accurate diagnosis.",
  metaTitle: "Carpal Tunnel Syndrome, Steven J. Lee, MD",
  metaDescription:
    "Carpal tunnel syndrome, symptoms, diagnosis, and treatment options including endoscopic carpal tunnel release. Written by Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  schemaDescription:
    "Carpal tunnel syndrome is compression of the median nerve at the wrist, causing numbness, tingling, and weakness in the thumb, index, middle, and ring fingers. Treatment options range from splinting and injections to endoscopic carpal tunnel release.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Phase A rebuilds, May 2026.
// These four pages were the highest-trafficked condition URLs on the legacy
// Wix site (collateral ligament 7,347; extensor tendon subluxation 4,662;
// ulnar impaction 3,007; thumb UCL/RCL 1,061 page views in the trailing 12
// months). Drafted from existing Wix content in the new site's editorial
// voice; awaiting Dr. Lee's final clinical review.

const fingerCollateralLigament: ConditionPageContent = {
  slug: "finger-collateral-ligament",
  name: "Finger Collateral Ligament Injury",
  region: "Hand & Wrist",
  headerTitle: "Finger Collateral Ligament Injury:",
  headerItalic: "small joint, real consequences.",
  headerLede:
    "Collateral ligaments stabilize each finger joint during pinching and gripping. When they tear, the joint can feel unstable, weak, or painful with everyday use. Most injuries heal without surgery, but the ones that don't can leave long-term problems if not treated correctly.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "The collateral ligaments are short, strong bands of tissue on either side of every finger joint. They hold the joint together during the rotational forces of pinching, grasping, and gripping. A tear, often dismissed as a 'jammed finger', can range from a mild sprain to a complete rupture that destabilizes the joint.",
    "These injuries are easy to underestimate, especially when the finger is still bendable and an X-ray looks normal. But an unstable joint left untreated can lead to chronic weakness, pain with pinching, and early arthritis. Deciding what treatment is needed starts with an accurate stress examination of the joint.",
  ],
  bodySections: [
    {
      heading: "Anatomy of the finger joints",
      body: [
        "Each finger has three joints: distal interphalangeal (DIP), proximal interphalangeal (PIP), and metacarpophalangeal (MCP). The thumb has two: interphalangeal (IP) and MCP. Every joint has two collateral ligaments, one on each side, plus a thicker palmar plate underneath.",
        "The radial collateral ligament (RCL) sits on the thumb-facing side, and the ulnar collateral ligament (UCL) sits on the pinky-facing side. Together they resist the sideways forces generated during pinching and gripping.",
      ],
    },
    {
      heading: "How the injury happens",
      body: [
        "The classic mechanism is a sideways force the ligament was not prepared to absorb: a ball striking the fingertip, a fall onto an outstretched hand, a finger caught in a closing door, or a dog leash wrapping around a finger when the dog pulls.",
        "The injury can range from a stretch of the fibers (a sprain) to a partial tear to a complete rupture. In some cases the ligament pulls off a small fragment of bone (an avulsion fracture), and in more significant injuries the joint may dislocate entirely.",
      ],
    },
    {
      heading: "Symptoms",
      body: [
        "Pain and tenderness along the side of the affected joint, worse with pinching, gripping, or any sideways stress.",
        "Swelling and bruising around the joint, which can persist for weeks.",
        "A feeling that the joint is unstable or 'gives way' with pinching, opening and closing the hand, or sport.",
        "In significant injuries the joint may look visibly enlarged or angulated to one side.",
      ],
    },
    {
      heading: "Diagnosis",
      body: [
        "Physical examination is the foundation. Dr. Lee examines the joint at rest, then stress-tests the ligament by applying a gentle sideways force, comparing the injured finger to the same finger on the opposite hand. Increased opening on the injured side is the key finding.",
        "X-rays look for fractures, avulsion fragments, and joint dislocation, and they are usually normal in a sprain. MRI or ultrasound is occasionally used when the diagnosis is unclear or when surgery is being considered.",
      ],
    },
    {
      heading: "Non-surgical treatment",
      body: [
        "The majority of collateral ligament injuries heal with non-surgical care. The standard approach is buddy taping the injured finger to its neighbor so it can move within a safe range while the ligament heals, combined with a short period of splinting if the joint is unstable.",
        "Hand therapy plays an important role in restoring motion and strength once the ligament has begun to heal. Stiffness is the most common complication of these injuries, so guided motion is started as early as the injury allows. Healing typically takes 6 weeks at minimum, and full recovery often takes 3 months or more.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Surgery is considered for complete tears with significant joint instability, for avulsion fractures that are meaningfully displaced, and for injuries that have not healed after appropriate non-surgical care.",
        "The procedure is performed through a small incision over the affected ligament. The torn end is reattached to bone using small suture anchors. In many cases the ligament is augmented with an internal brace, which adds a strong suture-tape backbone to the repair and protects it during early motion.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee helped design the small-joint anchors and internal-brace constructs used to repair collateral ligaments in the hand. The internal-brace technique adds a strong suture-tape backbone to the repair, which protects it during early healing and lets patients begin guided hand therapy sooner than a traditional repair allows.",
      "The result is often a faster, more predictable return to gripping, pinching, and sport-specific activity, with less of the stiffness that can follow prolonged splinting.",
    ],
  },
  recoveryIntro:
    "Recovery depends on whether the injury was treated non-surgically or surgically, and on which joint and which ligament is involved.",
  recovery: [
    { when: "Week 1", what: "Buddy taping or splinting depending on the joint. Swelling and bruising peak in the first few days." },
    { when: "Weeks 2 to 4", what: "Edema management and gentle protected motion in hand therapy. Buddy taping continues during activity." },
    { when: "Weeks 4 to 6", what: "Progressive range of motion and light strengthening. Most patients return to office work." },
    { when: "Weeks 6 to 12", what: "Strengthening progresses. Most patients return to non-contact sports and unrestricted daily activity." },
    { when: "3 to 6 months", what: "Return to contact sports, gripping-heavy occupations, and full strength. Mild residual swelling can persist longer." },
  ],
  misconceptions: {
    intro: "Two common misunderstandings about finger ligament injuries.",
    items: [
      {
        heading: "'I can still move it, so it must be fine.'",
        body: "Movement does not equal stability. An unstable collateral ligament can still allow full bending and straightening, but it will give way or hurt with pinching, gripping, or any sideways stress. Stability is the key examination finding, not motion.",
      },
      {
        heading: "'A jammed finger always gets better on its own.'",
        body: "Most do. But a meaningful minority do not, and the difference matters: an unstable injury treated months later is harder to fix and the outcome is less predictable. An accurate stress exam in the first few weeks separates the two.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Healing time", value: "6 weeks minimum, often 3+ months" },
    { label: "Surgery rate", value: "Most heal without surgery" },
    { label: "Common in", value: "Athletes, falls, dog walkers" },
    { label: "Best evaluated by", value: "Hand specialist with stress exam" },
  ],
  whyDrLee: [
    "Helped design the small-joint anchors and internal-brace constructs used in collateral ligament repair.",
    "Treats finger ligament injuries regularly in athletes, climbers, and active patients.",
    "Same-week evaluation often available at the NYC and Scarsdale offices.",
  ],
  related: [
    { name: "Thumb UCL/RCL Tear (Skier's Thumb)", slug: "thumb-ucl-rcl" },
    { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
    { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
  ],
  ctaCard: {
    eyebrow: "Get evaluated",
    headline: "A jammed finger that does not feel right deserves an exam.",
  },
  faqHeadline: "Finger collateral ligament FAQ",
  faqs: [
    {
      question: "How do I know if I tore a finger ligament or just sprained it?",
      answer:
        "It is hard to tell from symptoms alone, because both can cause pain and swelling. The difference shows up on stress examination: a sprained ligament is tender but stable; a torn ligament allows the joint to open up to sideways pressure compared to the same finger on the other hand. An accurate exam in the first few weeks is the most important step.",
    },
    {
      question: "How long until I can use my finger normally?",
      answer:
        "Most patients can do desk work and light daily activity within 2 to 4 weeks while buddy-taping the finger. Pinching, gripping, and contact activity typically resume between 6 weeks and 3 months depending on the severity of the injury and whether surgery was needed. Mild stiffness and swelling can persist longer.",
    },
    {
      question: "Do all finger ligament tears need surgery?",
      answer:
        "No. Most collateral ligament injuries, including many complete tears at the PIP and DIP joints, heal well with buddy taping, protected motion, and hand therapy. Surgery is considered when the joint is grossly unstable, when an avulsion fracture is displaced, or when non-surgical care has failed to restore stability.",
    },
    {
      question: "What is an internal brace?",
      answer:
        "An internal brace is a strong suture-tape construct placed across a ligament repair to protect it during early healing. It does not replace the ligament; it supports it. The added strength allows earlier motion and a faster return to activity than a traditional repair, with less stiffness.",
    },
  ],
  bottomCtaTitle: "Got a jammed finger that isn't right?",
  bottomCtaItalic: "Get it evaluated.",
  bottomCtaBody:
    "The early evaluation is what separates injuries that heal on their own from the ones that need active treatment. Either way, the first step is an accurate diagnosis.",
  metaTitle: "Finger Collateral Ligament Injury, Steven J. Lee, MD",
  metaDescription:
    "Finger collateral ligament injury, including UCL and RCL tears of the PIP, DIP, and MCP joints. Symptoms, diagnosis, treatment options, and recovery, including internal brace repair. By Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  schemaDescription:
    "A finger collateral ligament injury is a sprain or tear of the ligaments on the side of a finger joint, usually caused by a sideways force during sport, a fall, or a finger caught on an object. Most injuries heal with buddy taping, splinting, and hand therapy. Unstable injuries may require surgical repair, often augmented with an internal brace.",
};

const extensorTendonSubluxation: ConditionPageContent = {
  slug: "extensor-tendon-subluxation",
  name: "Extensor Tendon Subluxation",
  region: "Hand & Wrist",
  headerTitle: "Extensor Tendon Subluxation:",
  headerItalic: "when the tendon slips off the knuckle.",
  headerLede:
    "The extensor tendons on the back of the hand should stay centered over each knuckle. When the small bands that hold them in place tear, the tendon slips into the valley between knuckles, and the finger feels weak or catches when you straighten it. Acute injuries often heal with splinting; chronic cases need surgical realignment.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "The extensor tendons are the structures that straighten your fingers. Each one runs over the back of a knuckle, held centered by a small soft-tissue sleeve called the sagittal band. When the sagittal band tears, the tendon slips off the knuckle and slides into the valley between the metacarpal heads.",
    "The usual cause is a punch, a fall onto a closed fist, or chronic inflammation of the joint, often from rheumatoid arthritis. Patients describe a snapping or catching as they straighten the finger, weakness when making a fist, or an inability to extend the finger fully.",
  ],
  bodySections: [
    {
      heading: "Anatomy",
      body: [
        "The extensor tendons run from forearm muscles, across the back of the wrist and hand, to attach to the fingers. They function like ropes that straighten the fingers. Over each metacarpophalangeal (MCP) joint, the tendon is held centered by the sagittal bands, thin but strong tissues on either side.",
        "When a sagittal band tears, the tendon loses its restraint and slips into the gap between knuckles, most often toward the ulnar (pinky) side.",
      ],
    },
    {
      heading: "Causes",
      body: [
        "Trauma is the most common cause: punching a hard object or falling onto a closed fist, sometimes called a 'boxer's knuckle'.",
        "Inflammatory conditions, especially rheumatoid arthritis, weaken the sagittal bands over time and can lead to spontaneous subluxation without a discrete injury.",
      ],
    },
    {
      heading: "Symptoms",
      body: [
        "A snapping or popping sensation as the tendon shifts off and back onto the knuckle.",
        "Pain over the back of the knuckle, especially when making a fist.",
        "Difficulty straightening the affected finger from a flexed position, while passive straightening is preserved.",
        "Some patients have a visible bump or asymmetry over the knuckle. In milder cases there are no symptoms at all and the diagnosis is incidental.",
      ],
    },
    {
      heading: "Diagnosis",
      body: [
        "The diagnosis is usually clinical. Dr. Lee can see and feel the tendon shift as the patient flexes and extends the finger.",
        "X-rays may be obtained to rule out fractures or arthritis. MRI or ultrasound is occasionally used when the picture is unclear, and rheumatologic workup is recommended when an inflammatory cause is suspected.",
      ],
    },
    {
      heading: "Non-surgical treatment",
      body: [
        "Acute injuries, treated within the first 2 to 3 weeks, often heal with splinting. The finger is held in full extension for 4 to 6 weeks to allow the sagittal band to scar back into place, then progressively weaned with the guidance of a hand therapist.",
        "When the injury is older or the splint trial has failed, conservative care alone is unlikely to restore stability.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Chronic subluxation and acute injuries that fail splinting are treated surgically. The procedure is performed as outpatient surgery through a small incision over the affected knuckle.",
        "The sagittal band is repaired directly when the tissue is good, or reconstructed using a slip of adjacent tendon when the native tissue is too damaged to hold. The goal is to re-center the tendon over the knuckle so it tracks normally with finger motion.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee tailors the approach to the cause: traumatic tears in younger patients are usually amenable to direct sagittal band repair, while inflammatory or chronic cases more often need a reconstruction. In either case the priority is centering the tendon and protecting the repair during early healing.",
      "Hand therapy is started early under careful supervision so the joint does not stiffen while the soft tissue heals.",
    ],
  },
  recovery: [
    { when: "Acute (splinting), weeks 1 to 6", what: "Continuous extension splint for 4 to 6 weeks, removed only for skin care, with gradual weaning under hand-therapy supervision." },
    { when: "Post-op, weeks 1 to 2", what: "Hand elevated above the heart; clean, dry dressing; sutures removed at 7 to 10 days." },
    { when: "Weeks 2 to 6", what: "Custom hand-therapy splint and protected motion. Most desk work resumes during this window." },
    { when: "Weeks 6 to 12", what: "Strengthening and gradual return to gripping, lifting, and recreational use." },
    { when: "3 months and beyond", what: "Return to contact sports, full strength, and any high-demand hand use." },
  ],
  sidebarFacts: [
    { label: "Common cause", value: "Punch injury or rheumatoid arthritis" },
    { label: "Splint window", value: "Best within 2 to 3 weeks of injury" },
    { label: "Surgery type", value: "Outpatient, small incision" },
    { label: "Return to work", value: "2 to 6 weeks depending on demands" },
  ],
  whyDrLee: [
    "Treats traumatic and rheumatologic hand conditions across thousands of cases.",
    "Coordinates with hand therapists at both NYC and Scarsdale offices for seamless post-op rehab.",
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  ],
  related: [
    { name: "Finger Collateral Ligament Injury", slug: "finger-collateral-ligament" },
    { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
  ],
  ctaCard: {
    eyebrow: "Catching knuckle?",
    headline: "Acute injuries do best when treated early.",
  },
  faqHeadline: "Extensor tendon subluxation FAQ",
  faqs: [
    {
      question: "What does extensor tendon subluxation feel like?",
      answer:
        "Most patients describe a snapping or popping over the knuckle when straightening the finger, often paired with weakness when making a fist and trouble extending the finger from a flexed position. There may be a visible bump or shift on the back of the hand. Some patients have no symptoms at all and the diagnosis is incidental.",
    },
    {
      question: "Can it be treated without surgery?",
      answer:
        "Acute injuries treated within 2 to 3 weeks often heal with an extension splint worn for 4 to 6 weeks, followed by guided hand therapy. Older injuries or those that have failed splinting usually need surgery, because the torn sagittal band will not scar back into place without help.",
    },
    {
      question: "What does surgery involve?",
      answer:
        "Surgery is a same-day, outpatient procedure done through a small incision over the affected knuckle. The torn sagittal band is repaired directly when the tissue is good. When it is not, a strip of nearby tendon is used to reconstruct the restraint. The goal is to re-center the tendon over the knuckle so it tracks normally during finger motion.",
    },
    {
      question: "How long is recovery after surgery?",
      answer:
        "Most patients are in a protective splint for 4 to 6 weeks post-op, with hand therapy throughout, and resume light desk work during that window. Strengthening and gradual return to gripping, lifting, and recreation typically happen between 6 and 12 weeks. Return to contact sports or high-demand hand use is usually at 3 months.",
    },
  ],
  bottomCtaTitle: "Catching, popping, or weakness over a knuckle?",
  bottomCtaItalic: "The window matters.",
  bottomCtaBody:
    "Acute extensor tendon subluxation often heals with a splint if treated within the first few weeks. Older injuries usually need surgery. Either way, an early evaluation is what keeps your options open.",
  metaTitle: "Extensor Tendon Subluxation, Steven J. Lee, MD",
  metaDescription:
    "Extensor tendon subluxation, also called sagittal band rupture or boxer's knuckle. Symptoms, diagnosis, splinting, and surgical reconstruction. By Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  schemaDescription:
    "Extensor tendon subluxation is when an extensor tendon on the back of the hand slips off the knuckle because the sagittal band restraint has torn. It is most often caused by a punch injury or by chronic inflammation. Acute cases can heal with splinting; chronic cases are treated with surgical sagittal band repair or reconstruction.",
};

const ulnarImpactionSyndrome: ConditionPageContent = {
  slug: "ulnar-impaction-syndrome",
  name: "Ulnar Impaction Syndrome",
  region: "Hand & Wrist",
  headerTitle: "Ulnar Impaction Syndrome:",
  headerItalic: "pinky-side wrist pain, explained.",
  headerLede:
    "When the ulna sits even a few millimeters longer than the radius, it can grind into the small bones on the pinky side of the wrist with every twist of the forearm. The result is ulnar-sided wrist pain that worsens with rotation, push-ups, and gripping. Treatment ranges from splinting and injections to a minimally invasive arthroscopic shortening.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "Ulnar impaction syndrome (sometimes called ulnocarpal abutment) is a common cause of pain on the pinky side of the wrist. It occurs when the ulna, one of the two forearm bones, is too long relative to the radius. With every forearm rotation the ulna impacts the small carpal bones and the TFCC (triangular fibrocartilage complex), causing pain, swelling, and sometimes cartilage damage.",
    "Some patients are born with a naturally long ulna ('ulnar positive variance'). In others the imbalance develops after a distal radius fracture that heals slightly shortened, making the ulna effectively longer. Inflammatory conditions can also play a role.",
  ],
  bodySections: [
    {
      heading: "Anatomy",
      body: [
        "The wrist sits at the intersection of three structures: the distal radius, the distal ulna, and the carpal bones. The TFCC is a small cartilage and ligament complex that cushions the load between the ulna and the carpal bones during forearm rotation and gripping.",
        "When the ulna is even 2 or 3 millimeters too long, the TFCC and adjacent cartilage take a load they were never designed for, and degenerative tears develop over time.",
      ],
    },
    {
      heading: "Causes",
      body: [
        "Congenital ulnar positive variance: a naturally longer ulna present from birth.",
        "Prior distal radius fracture that healed short, leaving the ulna relatively longer.",
        "Inflammatory arthritis affecting wrist alignment.",
      ],
    },
    {
      heading: "Symptoms",
      body: [
        "Pain on the pinky side of the wrist, worse with twisting motions (turning a doorknob, pouring a pot), wrist extension (push-ups), and gripping.",
        "Onset can be sudden after a specific activity or gradual from cumulative overuse.",
        "Some patients describe clicking, swelling, or a feeling of weakness with rotation.",
      ],
    },
    {
      heading: "Diagnosis",
      body: [
        "Examination focuses on point tenderness over the ulnar wrist and provocative maneuvers that load the TFCC. Dr. Lee compares wrist motion and stability to the opposite side.",
        "X-rays measure ulnar variance directly: a difference of a few millimeters is enough to be symptomatic. MRI may be ordered to assess the TFCC and adjacent cartilage when surgery is being considered.",
      ],
    },
    {
      heading: "Non-surgical treatment",
      body: [
        "Initial care emphasizes wrist rest, splinting in a removable wrist brace for 4 or more weeks, and avoiding the activities that load the joint (push-ups, gripping-heavy training, twisting).",
        "Corticosteroid injections can provide meaningful temporary pain relief and help confirm the diagnosis. PRP (platelet-rich plasma) is sometimes used in early or biologically promising cases. Dr. Lee was among the first surgeons in NYC to use PRP for upper-extremity injuries and performs more than 250 PRP procedures per year.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "When the variance is small (under 3 to 4 millimeters) and the cartilage is preserved, the ulna can often be shortened arthroscopically. The 'wafer procedure' removes a thin slice of bone from the end of the ulna through a wrist scope. Patients typically wear a removable splint for 4 to 6 weeks afterward.",
        "When the variance is larger or the cartilage is more involved, a formal ulnar shortening osteotomy with a plate and screws is the more reliable option. In selected inflammatory cases the head of the ulna is removed (Darrach or related procedures).",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee is fellowship trained in both Hand and Upper Extremity Surgery and Sports Medicine, and regularly instructs other surgeons in cadaver labs on the wafer procedure and ulnar shortening osteotomies. Procedure selection is matched to the variance, the cartilage status, and the patient's activity demands.",
      "For active patients with smaller variance, the arthroscopic wafer is favored when feasible because of the faster recovery. For larger variance or complex cases, a formal shortening with internal fixation is the more predictable solution.",
    ],
  },
  recovery: [
    { when: "Weeks 1 to 4 (wafer)", what: "Removable splint, gentle motion, and edema control." },
    { when: "Weeks 4 to 12 (wafer)", what: "Progressive hand therapy and return to most daily activities." },
    { when: "3 to 4 months (wafer)", what: "Return to full strength and most sport." },
    { when: "Weeks 1 to 4 (formal shortening)", what: "Long-arm cast or splint to protect the osteotomy." },
    { when: "Weeks 4 to 12 (formal shortening)", what: "Removable splint and hand therapy beginning around week 6 once bone-healing is confirmed." },
    { when: "3 to 6 months (formal shortening)", what: "Return to gripping, twisting, and contact sport." },
  ],
  sidebarFacts: [
    { label: "Common cause", value: "Long ulna (congenital or post-fracture)" },
    { label: "Variance threshold", value: "Symptoms often appear at 2 to 3 mm" },
    { label: "Procedure options", value: "Arthroscopic wafer or formal shortening" },
    { label: "Recovery (wafer)", value: "3 to 4 months" },
  ],
  whyDrLee: [
    "Among the first surgeons in NYC to use PRP for upper-extremity wrist pathology.",
    "Teaches the wafer procedure and ulnar shortening osteotomy to other surgeons in cadaver labs.",
    "Fellowship trained in both Hand and Upper Extremity Surgery and Sports Medicine.",
  ],
  related: [
    { name: "Distal Radius Fracture", slug: "distal-radius-fracture" },
    { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
  ],
  ctaCard: {
    eyebrow: "Pinky-side wrist pain?",
    headline: "Variance of a few millimeters is enough to be symptomatic.",
  },
  faqHeadline: "Ulnar impaction syndrome FAQ",
  faqs: [
    {
      question: "Why does my pinky-side wrist hurt only with certain motions?",
      answer:
        "If the ulna is even 2 to 3 millimeters longer than the radius, it will impact the small bones and TFCC on the pinky side of the wrist during forearm rotation and wrist extension, like twisting a doorknob or doing a push-up. Activities that don't load the joint in those positions often feel fine. An X-ray measurement of ulnar variance is what confirms the diagnosis.",
    },
    {
      question: "Do I need surgery, or can it be managed without?",
      answer:
        "Many patients do well with splinting for 4 or more weeks, activity modification, and either a corticosteroid injection or PRP. Surgery is considered when symptoms persist despite a real trial of conservative care, when imaging shows progressive cartilage damage, or when the variance is large enough that non-operative treatment is unlikely to succeed.",
    },
    {
      question: "What is the wafer procedure?",
      answer:
        "The wafer procedure is a minimally invasive arthroscopic surgery that shortens the ulna by removing a thin slice (wafer) of bone from its tip through a wrist scope. It is best for variance under 3 to 4 millimeters with preserved cartilage. Recovery is faster than a formal osteotomy because no plate or fracture-healing is involved.",
    },
    {
      question: "When is a formal ulnar shortening osteotomy needed instead?",
      answer:
        "When the variance is larger than about 3 to 4 millimeters, or when associated cartilage damage is more extensive, a formal shortening osteotomy with a plate and screws is more reliable. Bone-healing extends the recovery (typically 3 to 6 months to full strength) but the result is durable.",
    },
  ],
  bottomCtaTitle: "Pinky-side wrist pain that won't quit?",
  bottomCtaItalic: "Get the variance measured.",
  bottomCtaBody:
    "A few millimeters of ulnar variance is enough to cause significant pain, and an accurate X-ray measurement is the first step in deciding what treatment is right.",
  metaTitle: "Ulnar Impaction Syndrome, Steven J. Lee, MD",
  metaDescription:
    "Ulnar impaction syndrome (ulnocarpal abutment), the pinky-side wrist pain caused by a long ulna. Symptoms, diagnosis, splinting, PRP, arthroscopic wafer procedure, and formal ulnar shortening osteotomy. By Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  schemaDescription:
    "Ulnar impaction syndrome is wrist pain caused by an ulna that is too long relative to the radius, leading to repeated impact on the pinky-side carpal bones and TFCC. Treatment options range from splinting and corticosteroid or PRP injections to arthroscopic wafer ulnar shortening or formal ulnar shortening osteotomy.",
};

const thumbUclRcl: ConditionPageContent = {
  slug: "thumb-ucl-rcl",
  name: "Thumb UCL/RCL Tear (Skier's Thumb)",
  region: "Hand & Wrist",
  headerTitle: "Thumb UCL/RCL Tear:",
  headerItalic: "the ligament behind every pinch.",
  headerLede:
    "The ulnar collateral ligament at the base of the thumb is what lets you pinch and grip with strength. A fall, a ski-pole jam, or a sports collision can tear it, and without proper treatment the thumb stays weak and unstable. Most partial tears heal in a thumb spica splint; complete tears typically need surgical repair, often augmented with an internal brace.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "The thumb ulnar collateral ligament (UCL) is a thick band on the inner side of the thumb base. It is the structure that stabilizes the thumb during every pinch and grip. The radial collateral ligament (RCL) is its counterpart on the outer side. Either can tear, and the UCL is the more common.",
    "The classic injury patterns are 'skier's thumb' (an acute tear from a fall, often with the hand strapped to a ski pole) and 'gamekeeper's thumb' (a chronic stretch injury named for Scottish gamekeepers who repeatedly stressed the ligament). Both result in pain at the base of the thumb and a weak, unstable pinch.",
  ],
  bodySections: [
    {
      heading: "Anatomy",
      body: [
        "The thumb metacarpophalangeal (MCP) joint connects the thumb's metacarpal to the proximal phalanx. The UCL sits on the inner side of this joint, the RCL on the outer side. Together they create the stable platform that lets the thumb pinch against the fingers with force.",
        "A 'Stener lesion' is a particular pattern in which the torn UCL flips outward and gets trapped on top of the adductor aponeurosis. In this position the ligament cannot heal on its own, regardless of splinting, and surgery is required to put it back in place.",
      ],
    },
    {
      heading: "Causes",
      body: [
        "Acute injury, the most common pattern: a fall onto an outstretched hand, a ski pole that catches and forces the thumb sideways, or a sports collision that bends the thumb away from the index finger.",
        "Chronic injury: repeated stress on the ligament over time, classically described in gamekeepers and still seen in some occupations and sports.",
      ],
    },
    {
      heading: "Symptoms",
      body: [
        "Pain at the base of the thumb, on the inner side near the webspace.",
        "Swelling and bruising acutely, sometimes with a visible bump from the torn ligament.",
        "A feeling that the thumb is loose, unstable, or weak with pinching, gripping, opening jars, or turning keys.",
        "Difficulty performing tasks that require a strong pinch, like writing or using utensils.",
      ],
    },
    {
      heading: "Diagnosis",
      body: [
        "The exam is the most important step. Dr. Lee palpates for tenderness over the UCL and performs a careful stress test, applying gentle sideways force and comparing the joint opening to the uninjured thumb. Increased opening or a soft endpoint suggests a complete tear.",
        "X-rays rule out fractures and avulsion fragments. MRI may be used when the diagnosis is uncertain, when a Stener lesion is suspected, or when surgery is being planned.",
      ],
    },
    {
      heading: "Non-surgical treatment",
      body: [
        "Partial tears and stable injuries are treated in a thumb spica splint worn full-time for at least 6 weeks. The splint must be on continuously, removed only briefly for skin care, because intermittent splinting allows the ligament to stretch and prevents healing.",
        "Hand therapy begins after the splinting period to restore motion, strength, and pinch endurance. A meaningful number of partial tears heal completely with this approach.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Surgery is recommended for complete UCL tears, displaced avulsion fractures, suspected Stener lesions, and partial tears that have failed splinting. Delaying treatment of an unstable thumb can lead to chronic instability, weakness, and early arthritis.",
        "Through a small incision at the base of the thumb, Dr. Lee reattaches the torn ligament to bone using a suture anchor. When the ligament is too damaged for direct repair, it is reconstructed using a nearby tendon graft. In most repairs an internal brace is added across the ligament to add immediate strength and allow earlier protected motion.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee helped design the small-joint anchors and internal-brace constructs used in thumb UCL repair. The internal brace adds a strong suture-tape backbone across the ligament, which protects the repair during early healing and lets patients begin guided hand therapy sooner than a traditional repair allows.",
      "For active patients and athletes, this typically translates to an earlier, more predictable return to pinching, gripping, and sport, with less of the stiffness that can follow extended splinting.",
    ],
  },
  recovery: [
    { when: "Week 1 (post-op)", what: "Protective splint, hand elevated, clean dressing. Light use of fingers and wrist as comfort allows." },
    { when: "Weeks 1 to 2", what: "Wound check and suture removal at day 7 to 10. Transition to a custom hand-therapy thumb spica splint." },
    { when: "Weeks 2 to 6", what: "Continuous custom splint with brief, supervised motion sessions in hand therapy to prevent stiffness." },
    { when: "Weeks 6 to 12", what: "Progressive strengthening, scar management, and return to most daily activity. Pinch strength rebuilds gradually." },
    { when: "3 months and beyond", what: "Return to contact sports, racquet sports, skiing, and high-demand pinching activities, individualized by sport and patient." },
  ],
  sidebarFacts: [
    { label: "Common mechanism", value: "Fall, ski pole, contact sport" },
    { label: "Stener lesion", value: "Will not heal in a splint" },
    { label: "Splint duration", value: "6+ weeks, continuous" },
    { label: "Return to sport", value: "Often around 3 months" },
  ],
  whyDrLee: [
    "Helped design the small-joint anchors and internal-brace constructs used in thumb UCL repair.",
    "Treats skier's thumb and gamekeeper's thumb regularly in skiers, athletes, and active patients.",
    "Coordinates with hand therapists in NYC and Scarsdale for early, structured rehab.",
  ],
  related: [
    { name: "Finger Collateral Ligament Injury", slug: "finger-collateral-ligament" },
    { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
    { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
  ],
  ctaCard: {
    eyebrow: "Recent fall or ski accident?",
    headline: "Unstable thumbs do better when treated early.",
  },
  faqHeadline: "Thumb UCL/RCL FAQ",
  faqs: [
    {
      question: "How do I know if my thumb is sprained or actually torn?",
      answer:
        "A sprain is tender but stable on examination. A torn ligament allows the thumb joint to open up to sideways pressure compared to the uninjured side, and the endpoint of the motion feels soft rather than firm. An accurate stress exam, sometimes paired with an X-ray and MRI, is what distinguishes the two.",
    },
    {
      question: "Can a thumb UCL tear heal without surgery?",
      answer:
        "Partial tears often heal in a thumb spica splint worn continuously for at least 6 weeks, followed by hand therapy. Complete tears, especially those with a Stener lesion (where the torn ligament flips out of position), generally do not heal on their own and need surgery. Delaying treatment of an unstable thumb can lead to chronic weakness and early arthritis.",
    },
    {
      question: "What is a Stener lesion?",
      answer:
        "A Stener lesion is a specific pattern in which the torn end of the UCL flips out of position and becomes trapped above an overlying tendon. In that position the ligament cannot reach bone to heal, no matter how long the thumb is splinted. Stener lesions are typically diagnosed on examination or MRI and are treated surgically.",
    },
    {
      question: "How long until I can ski or play sports again?",
      answer:
        "Return to sport depends on the type of sport and on whether treatment was operative or non-operative. After surgical repair with an internal brace, most patients return to non-contact sport between 8 and 12 weeks, and to contact sports, racquet sports, and skiing around 3 months. Splint-treated injuries follow a similar timeline once stability is confirmed.",
    },
  ],
  bottomCtaTitle: "Thumb still weak or unstable after a fall?",
  bottomCtaItalic: "Get it examined.",
  bottomCtaBody:
    "An unstable thumb that isn't properly treated will not get stronger on its own. Most injuries do well with early, accurate care, whether that is a splint or a small surgery.",
  metaTitle: "Thumb UCL/RCL Tear (Skier's Thumb), Steven J. Lee, MD",
  metaDescription:
    "Thumb UCL and RCL tears, also known as skier's thumb and gamekeeper's thumb. Symptoms, diagnosis, splinting, and internal-brace ligament repair. By Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  schemaDescription:
    "A thumb UCL or RCL tear is an injury to the collateral ligament at the base of the thumb, usually caused by a fall, a ski-pole injury, or a sports collision. Partial tears often heal in a thumb spica splint; complete tears and Stener lesions are treated surgically, often with an internal brace to support earlier rehabilitation.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Phase B rebuild #1, May 2026. Wartenberg's syndrome is #5 by Google Search
// Console clicks (497 / 16mo) and currently has no dedicated page on the new
// site (was redirecting to /specialties/hand-wrist). Drafted from existing Wix
// content; awaiting Dr. Lee's clinical review.

const wartenbergsSyndrome: ConditionPageContent = {
  slug: "wartenbergs-syndrome",
  name: "Wartenberg's Syndrome",
  region: "Hand & Wrist",
  headerTitle: "Wartenberg's Syndrome:",
  headerItalic: "the watch-strap nerve.",
  headerLede:
    "A small sensory nerve runs over the back of the wrist toward the thumb. When it gets compressed, often by something as simple as a tight watch band, the result is burning, tingling, and pain across the back of the hand. Most cases resolve when the pressure is removed; surgery is reserved for the ones that do not.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "Wartenberg's syndrome (also called cheiralgia paresthetica) is compression of the superficial branch of the radial nerve as it travels along the back of the forearm and wrist. The nerve is purely sensory, so the symptoms are not weakness but pain, numbness, and tingling on the back of the thumb, index, middle, and half of the ring finger.",
    "Because the nerve sits in a relatively superficial location, the most common cause is simple external pressure: a tight watch band, a wristband, a purse strap, even handcuffs. Other cases come from trauma, swelling, scar tissue, or a scissoring effect between two forearm tendons. A meaningful share of cases have no identifiable cause at all.",
  ],
  bodySections: [
    {
      heading: "Anatomy",
      body: [
        "The radial nerve runs down the arm and branches into a deep motor portion and a superficial sensory portion. The superficial radial nerve carries sensation to the back of the thumb, the index and middle fingers, and the radial half of the ring finger.",
        "About 8 to 10 centimeters above the wrist crease, the nerve emerges from underneath the brachioradialis tendon and becomes superficial. From that point on it is vulnerable to anything pressing on it from outside.",
      ],
    },
    {
      heading: "Causes",
      body: [
        "External pressure is by far the most common cause: a tight watch band, an elastic wristband, a snug cuff, a heavy purse strap, or a cast that sits over the dorsal forearm. Most cases improve once the source of pressure is identified and removed.",
        "Trauma to the area, prior surgery near the wrist, or swelling that surrounds the nerve can also cause it. In some patients the tendons of the brachioradialis and extensor carpi radialis longus 'scissor' across the nerve when the forearm rotates, irritating it during repetitive activity. A meaningful share of cases are idiopathic.",
      ],
    },
    {
      heading: "Symptoms",
      body: [
        "Burning, tingling, or numbness on the back of the thumb, index, middle, and radial half of the ring finger. Pain on the back of the wrist or forearm. Some patients describe a 'pins and needles' sensation extending up the forearm.",
        "Symptoms typically worsen with activities that load or compress the area: gripping, twisting the forearm, wearing the offending watch or band, leaning on the forearm. They often improve briefly when the patient changes hand position or removes the compression. Many patients instinctively start avoiding pressure on the area, which itself becomes a diagnostic clue on exam.",
      ],
    },
    {
      heading: "Differentiating from de Quervain's tenosynovitis",
      body: [
        "Wartenberg's syndrome is commonly mistaken for de Quervain's tenosynovitis (irritation of the thumb tendons at the wrist), and the two conditions can also coexist. The distinction matters because the treatments are different.",
        "De Quervain's pain is mechanical: it hurts to move the thumb in specific directions, and tenderness is directly over the first dorsal compartment of the wrist. Wartenberg's symptoms are neurologic: tingling, numbness, or burning in a nerve distribution rather than along a tendon. A careful exam separates them, and an ultrasound or selective injection can help when the picture is mixed.",
      ],
    },
    {
      heading: "Diagnosis",
      body: [
        "The diagnosis is primarily clinical. Dr. Lee examines for tenderness along the course of the superficial radial nerve, performs a Tinel's test (tapping the nerve to reproduce the tingling), and checks sensation in the nerve's distribution. The exam typically reveals the diagnosis when the clinical picture is consistent.",
        "X-rays may be obtained when trauma is suspected. Nerve conduction studies (EMG/NCS) are sometimes ordered but are notoriously insensitive for this specific compression. A negative study does not rule out the diagnosis. Dr. Lee treats consistent clinical findings even when objective testing is normal, while using nerve studies primarily to exclude compression higher up at the elbow or neck.",
      ],
    },
    {
      heading: "Non-surgical treatment",
      body: [
        "The first step is removing the source of compression. That alone often resolves the symptoms. Replacing a tight watch with a looser band, switching shoulder-bag straps, padding seatbelt or cast contact points, and adjusting work-related forearm positioning are the routine starting points.",
        "A loose wrist splint worn intermittently can take pressure off the nerve during recovery. Oral anti-inflammatories help with associated swelling. When symptoms persist, a corticosteroid injection around the nerve can be therapeutic and confirms the diagnosis at the same time. Most patients respond to one or a combination of these measures.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Surgery is reserved for patients whose symptoms persist despite a real trial of conservative care, including pressure removal, splinting, and at least one injection. The procedure is a nerve decompression, performed through a small incision over the affected area.",
        "Anything compressing the nerve is released: tight fascial bands, scar tissue, the scissoring tendons if that pattern is present. The nerve itself is identified, preserved, and protected. Because the nerve is small and runs close to the skin, the procedure requires loupe magnification or an operating microscope, and is best performed by a surgeon experienced with peripheral-nerve work in the hand.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee treats Wartenberg's syndrome the way he treats most nerve compressions: he weights the clinical exam heavily and does not require positive nerve studies to make the diagnosis. The exam findings, the location of the patient's symptoms, and the response to pressure removal or a targeted injection typically tell the whole story.",
      "When surgery is needed, the procedure is performed with magnification, careful tissue handling, and identification of every branch of the nerve in the surgical field. The goal is a complete decompression without injuring the nerve being protected.",
    ],
  },
  recoveryIntro:
    "Recovery is generally fast for both non-surgical and surgical management. Surgical recovery follows a standard small-incision peripheral-nerve protocol.",
  recovery: [
    { when: "Non-surgical (most patients)", what: "Symptoms typically improve within days to weeks after the source of pressure is removed. A short course of splinting or a single injection often closes the gap." },
    { when: "Post-op, weeks 1 to 2", what: "Removable thumb spica or wrist splint, hand elevated, dressings kept clean and dry. Wound check and suture removal around day 10 to 14." },
    { when: "Weeks 2 to 4", what: "Splint weaned. Hand therapy begins for scar management, gentle nerve gliding, and gradual return of motion. Most patients return to office work in this window." },
    { when: "Weeks 4 to 6", what: "Most patients return to unrestricted daily activity. Some residual tenderness over the incision is normal and resolves over the next month or two." },
    { when: "3 months", what: "Final result usually achieved. Sensory recovery in the nerve's distribution can continue to improve for several more months after surgery." },
  ],
  misconceptions: {
    intro: "Two common mix-ups around Wartenberg's syndrome.",
    items: [
      {
        heading: "'My EMG was normal, so it can't be Wartenberg's.'",
        body: "Nerve conduction studies are insensitive for this particular compression. A normal EMG/NCS is the rule, not the exception, and does not rule the diagnosis out. The exam, history, and response to pressure removal carry more weight than the nerve study.",
      },
      {
        heading: "'It hurts on the radial side of my wrist, so it must be de Quervain's.'",
        body: "Pain on the radial side of the wrist is often assumed to be de Quervain's tenosynovitis, but Wartenberg's produces tingling and numbness in addition to pain, and the symptoms follow a nerve distribution rather than a tendon line. The two conditions can also coexist, which is why an accurate exam matters.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Also called", value: "Cheiralgia paresthetica" },
    { label: "Nerve involved", value: "Superficial radial (sensory only)" },
    { label: "Common trigger", value: "Tight watch, band, or cuff" },
    { label: "Most patients", value: "Improve without surgery" },
  ],
  whyDrLee: [
    "Treats peripheral-nerve compressions across thousands of cases per year.",
    "Uses loupe magnification and microscopic technique for hand-nerve surgery.",
    "Diagnoses on clinical findings rather than waiting for nerve studies that are often falsely negative.",
  ],
  related: [
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
    { name: "Finger Collateral Ligament Injury", slug: "finger-collateral-ligament" },
    { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
  ],
  ctaCard: {
    eyebrow: "Tingling on the back of the hand?",
    headline: "A good exam separates this from the conditions it mimics.",
  },
  faqHeadline: "Wartenberg's syndrome FAQ",
  faqs: [
    {
      question: "What is Wartenberg's syndrome?",
      answer:
        "Wartenberg's syndrome, also called cheiralgia paresthetica, is compression of the superficial radial nerve, a purely sensory nerve that supplies the back of the thumb, index, middle, and half of the ring finger. Compression most often comes from external pressure on the wrist or forearm, like a tight watch band. The symptoms are burning, tingling, or numbness in the nerve's territory, sometimes with pain, but no weakness because the nerve carries only sensation.",
    },
    {
      question: "How is Wartenberg's syndrome different from de Quervain's tenosynovitis?",
      answer:
        "De Quervain's is inflammation of the tendons that move the thumb at the wrist, and its symptoms are mechanical: pain with specific thumb motions and tenderness directly over the first dorsal compartment. Wartenberg's is a nerve problem and produces tingling and numbness in addition to pain, following the nerve's sensory distribution. The two can coexist, but the treatments differ, so an accurate exam matters.",
    },
    {
      question: "Can Wartenberg's syndrome heal without surgery?",
      answer:
        "Yes. Most cases of Wartenberg's syndrome resolve once the source of compression is identified and removed: a tighter watch, a backpack strap, or any pressure source over the forearm. Splinting, anti-inflammatories, and an occasional corticosteroid injection around the nerve close the gap for most of the remaining patients. Surgery is reserved for symptoms that persist despite a real trial of conservative care.",
    },
    {
      question: "Why was my nerve test normal if I have this condition?",
      answer:
        "Nerve conduction studies are not very sensitive for compression of the superficial radial nerve at the wrist, so a normal study is common and does not rule out the diagnosis. Wartenberg's syndrome is primarily a clinical diagnosis based on the location of symptoms, a positive Tinel's test, and the patient's history. The nerve study is mostly useful to rule out compression at a higher level, like the elbow or neck.",
    },
    {
      question: "What does the surgery involve?",
      answer:
        "Decompression of the superficial radial nerve is a small, outpatient procedure performed through a short incision over the affected area on the back of the forearm or wrist. Tight tissue bands, scar tissue, and any tendons scissoring across the nerve are released. The nerve is preserved and the wound is closed with absorbable sutures. Most patients return to office work within 2 to 4 weeks and to unrestricted activity by 4 to 6 weeks.",
    },
  ],
  bottomCtaTitle: "Tingling or burning on the back of the hand?",
  bottomCtaItalic: "Often a simple fix.",
  bottomCtaBody:
    "Most patients with Wartenberg's syndrome improve once the source of compression is identified and removed. An accurate diagnosis is the first step, and often the only step you need.",
  metaTitle: "Wartenberg's Syndrome, Steven J. Lee, MD",
  metaDescription:
    "Wartenberg's syndrome (cheiralgia paresthetica), compression of the superficial radial nerve at the wrist. Symptoms, diagnosis, splinting, injections, and surgical decompression. By Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  schemaDescription:
    "Wartenberg's syndrome is compression of the superficial radial nerve, a sensory nerve on the back of the wrist and hand. It is most often caused by external pressure such as a tight watch band, and produces burning, tingling, or numbness on the back of the thumb and adjacent fingers. Treatment ranges from removing the source of compression and splinting to corticosteroid injection or surgical decompression.",
};

const tfccTear: ConditionPageContent = {
  slug: "tfcc-tear",
  name: "TFCC Tear",
  region: "Hand & Wrist",
  headerTitle: "TFCC Tear:",
  headerItalic: "the meniscus of the wrist.",
  headerLede:
    "The triangular fibrocartilage complex sits on the pinky side of the wrist and cushions the joint during every forearm rotation. When it tears, the wrist clicks and aches with twisting, gripping, and push-ups. Many tears heal with splinting, injections, or PRP; the rest do well with arthroscopic surgery.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "The triangular fibrocartilage complex (TFCC) is a small but important cartilage-and-ligament structure on the pinky side of the wrist. It cushions the joint between the ulna and the small carpal bones and stabilizes the distal radioulnar joint as the forearm rotates. People sometimes describe it as the wrist's equivalent of a knee meniscus, which is reasonable shorthand: it absorbs load and gets torn in similar ways.",
    "TFCC tears come from acute trauma like a fall onto an outstretched hand, from cumulative wear over time, or from the chronic stress of a long ulna pressing into the carpal bones (ulnar positive variance). The result is pain, clicking, and weakness on the ulnar side of the wrist that gets worse with the activities that load the joint.",
  ],
  bodySections: [
    {
      heading: "Anatomy",
      body: [
        "The TFCC is made up of about six interrelated structures: an articular disc of fibrocartilage, the dorsal and volar radioulnar ligaments, the meniscus homolog, the ulnocarpal ligaments, and the sheath of the extensor carpi ulnaris tendon. Together they cushion the joint and hold the radius and ulna in proper alignment.",
        "Because so much load passes through the TFCC during rotation, even small tears can produce symptoms that are out of proportion to how the wrist looks on imaging.",
      ],
    },
    {
      heading: "Causes",
      body: [
        "Acute traumatic tears most often follow a fall onto an outstretched hand, a forced wrist twist, or a sudden loading event during sport. These are Palmer Class 1 tears in the standard classification.",
        "Degenerative tears develop more slowly from cumulative wear, often associated with ulnar positive variance (an ulna that sits slightly long relative to the radius). These Palmer Class 2 tears are common in middle-aged and older patients and often coexist with ulnar impaction syndrome and chondromalacia of the adjacent cartilage.",
      ],
    },
    {
      heading: "Symptoms",
      body: [
        "Pain on the pinky side of the wrist, worsened by forearm rotation (turning a doorknob, pouring a pot), wrist extension (push-ups), and gripping.",
        "A clicking, popping, or catching sensation with rotation. Some patients can reproduce the click voluntarily.",
        "Weakness and trouble carrying heavy objects with the affected hand.",
        "Swelling on the ulnar side of the wrist in acute injuries.",
      ],
    },
    {
      heading: "Diagnosis",
      body: [
        "Examination focuses on the classic ulnar-sided wrist findings: point tenderness over the TFCC, a positive ulnocarpal stress test, and pain reproduced with provocative loading of the joint.",
        "X-rays evaluate alignment and ulnar variance (often the missing piece of the picture when wear is the main mechanism). MRI, ideally with arthrogram contrast, is the imaging study of choice when the diagnosis is unclear or surgery is being planned. The combination of exam and imaging usually settles the question.",
      ],
    },
    {
      heading: "Non-surgical treatment",
      body: [
        "Most TFCC tears improve with a real trial of conservative care. The standard course is a wrist splint worn for at least 4 weeks continuously, removed only for hygiene, combined with activity modification to avoid the loading patterns that hurt. Anti-inflammatories help with associated swelling.",
        "When pain persists, a corticosteroid injection into the joint can provide meaningful relief. For tears with biological healing potential, PRP (platelet-rich plasma) is a useful alternative or addition. Dr. Lee was among the first surgeons in NYC to use PRP for upper-extremity injuries and performs more than 250 PRP procedures per year.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "When the wrist does not respond to a real trial of non-surgical care, or when the tear pattern is clearly surgical from the start, wrist arthroscopy is the procedure of choice. Through two small (4 mm) incisions, a camera and instruments are introduced into the joint to visualize and treat the TFCC under direct vision.",
        "Tears in the central, poorly-vascularized portion of the TFCC are debrided (the unstable flap is trimmed back to stable tissue). Peripheral tears with good blood supply are repaired with sutures arthroscopically. Complex or chronic tears with associated DRUJ instability occasionally require an open repair. Dr. Lee has performed wrist arthroscopy for over 20 years and teaches the technique to other surgeons in cadaver labs.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee favors arthroscopic management whenever the tear pattern allows it, because the camera-based approach lets the wrist be evaluated end-to-end (TFCC, cartilage surfaces, ligaments) and treated through 4 mm incisions instead of an open exposure. Faster recovery and less stiffness are the practical benefit.",
      "When ulnar impaction is contributing, the TFCC repair is often combined with an arthroscopic wafer procedure (a small shortening of the ulna). That combined approach treats both the tear and its underlying mechanical cause in one operation.",
    ],
  },
  recoveryIntro:
    "Recovery depends on whether the procedure was a debridement or a repair, and on the size of the surgical exposure.",
  recovery: [
    { when: "Debridement, weeks 1 to 2", what: "Non-removable splint or short-arm cast. Hand and finger motion encouraged." },
    { when: "Debridement, weeks 2 to 5", what: "Removable wrist brace, hand therapy begins for motion and gradual strengthening." },
    { when: "Debridement, weeks 5 to 10", what: "Brace weaned. Most patients return to most daily activities and non-contact sport in this window." },
    { when: "Repair, weeks 1 to 4", what: "Long-arm or short-arm immobilization (depending on tear pattern) to protect the repair." },
    { when: "Repair, weeks 4 to 8", what: "Removable splint and hand therapy. Gentle progressive loading." },
    { when: "Repair, 3 to 6 months", what: "Return to full strength, gripping-heavy work, contact sport. Some residual stiffness can persist longer." },
  ],
  misconceptions: {
    intro: "Two persistent misconceptions about ulnar-sided wrist pain.",
    items: [
      {
        heading: "'TFCC tears always need surgery.'",
        body: "Most do not. The majority of TFCC tears, including many complete tears in good locations, improve with splinting, activity modification, and a corticosteroid or PRP injection. Surgery is reserved for tears that fail a real trial of non-surgical care, or whose pattern is clearly unstable from the start.",
      },
      {
        heading: "'Pinky-side wrist pain is always a TFCC tear.'",
        body: "Not always. Ulnar impaction syndrome, ulnar styloid fractures, ECU tendon problems, lunotriquetral ligament tears, and DRUJ instability all produce similar pain in the same location. A careful exam and the right imaging separate them, and the right diagnosis changes the right treatment.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Sometimes called", value: "The wrist's meniscus" },
    { label: "Common location", value: "Pinky side of wrist" },
    { label: "Most patients", value: "Improve without surgery" },
    { label: "Surgery type", value: "Arthroscopic (two 4 mm portals)" },
  ],
  whyDrLee: [
    "Over 20 years of wrist arthroscopy experience.",
    "Teaches arthroscopic TFCC repair to other surgeons in cadaver labs.",
    "Among the first in NYC to use PRP for upper-extremity injuries (250+ per year).",
  ],
  related: [
    { name: "Ulnar Impaction Syndrome", slug: "ulnar-impaction-syndrome" },
    { name: "Distal Radius Fracture", slug: "distal-radius-fracture" },
    { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
  ],
  ctaCard: {
    eyebrow: "Wrist clicks with rotation?",
    headline: "An accurate exam separates TFCC from the conditions that mimic it.",
  },
  faqHeadline: "TFCC tear FAQ",
  faqs: [
    {
      question: "What is a TFCC tear?",
      answer:
        "A TFCC tear is an injury to the triangular fibrocartilage complex, a small cushion of cartilage and ligaments on the pinky side of the wrist that stabilizes the joint during forearm rotation. Tears can come from acute trauma like a fall onto an outstretched hand, or from cumulative wear over time, often associated with a long ulna (ulnar positive variance). Symptoms include pinky-side wrist pain, clicking with rotation, and weakness with gripping.",
    },
    {
      question: "Why does my wrist click and hurt when I rotate it?",
      answer:
        "Forearm rotation loads the TFCC directly, so a tear or instability in this structure produces clicking, pain, and a sense of catching with twisting motions. Activities that combine rotation with grip, like turning a doorknob or pouring a pot, are the classic provocateurs. Other ulnar-sided wrist conditions like ulnar impaction syndrome and ECU tendonitis can mimic this pattern, which is why an accurate exam matters.",
    },
    {
      question: "Do TFCC tears need surgery?",
      answer:
        "Most do not. The majority of TFCC tears improve with a real trial of conservative care: a wrist splint worn continuously for 4 or more weeks, activity modification, and either a corticosteroid or PRP injection. Surgery is considered when symptoms persist despite this trial, when imaging shows an unstable tear pattern from the start, or when the tear is associated with DRUJ instability that requires reconstruction.",
    },
    {
      question: "What is wrist arthroscopy?",
      answer:
        "Wrist arthroscopy is a minimally invasive surgery in which two small 4 mm incisions are made over the wrist. A pencil-sized camera is introduced through one and instruments through the other, allowing the joint to be evaluated and treated under direct video visualization. For TFCC tears, the camera lets the surgeon decide between debridement (trimming back unstable tissue) and repair (suturing the tear) based on the actual tear pattern, with much smaller incisions and less stiffness than an open approach.",
    },
    {
      question: "How long does recovery take?",
      answer:
        "After arthroscopic debridement, most patients are out of splinting at 2 weeks, into hand therapy at 2 to 5 weeks, and back to most daily activities and non-contact sport between 5 and 10 weeks. After a TFCC repair, recovery extends to about 3 to 6 months due to longer protected healing of the sutured tissue. Final outcomes are usually achieved by 6 months, with some residual stiffness possibly persisting longer in selected cases.",
    },
  ],
  bottomCtaTitle: "Pinky-side wrist pain that won't quit?",
  bottomCtaItalic: "Get it evaluated.",
  bottomCtaBody:
    "Most TFCC tears do well with conservative care; the rest do well with arthroscopic surgery. Either way, an accurate diagnosis is the first step, and that is what separates TFCC from the conditions it mimics.",
  metaTitle: "TFCC Tear, Steven J. Lee, MD",
  metaDescription:
    "TFCC tear (triangular fibrocartilage complex tear): pinky-side wrist pain from injury, wear, or ulnar impaction. Symptoms, diagnosis, splinting, PRP, and arthroscopic debridement or repair. By Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  schemaDescription:
    "A TFCC tear is an injury to the triangular fibrocartilage complex on the ulnar side of the wrist, which cushions the joint and stabilizes the distal radioulnar joint during forearm rotation. Causes include acute trauma and degenerative wear, often associated with ulnar positive variance. Treatment options range from splinting and corticosteroid or PRP injection to arthroscopic debridement or repair.",
};

const fingerPulleyInjury: ConditionPageContent = {
  slug: "finger-pulley-injury",
  name: "Finger Pulley Injury (Climber's Finger)",
  region: "Hand & Wrist",
  headerTitle: "Finger Pulley Injury:",
  headerItalic: "the climber's pop.",
  headerLede:
    "A2 and A4 are small bands of tissue that hold the flexor tendons tight against the finger bones. Climbers rupture them with the crimp grip; baseball pitchers and other athletes rupture them under sudden flexor load. Most isolated tears heal with taping and protected motion, but multiple-pulley ruptures need surgery to prevent permanent bowstringing.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "The flexor tendons that bend your fingers run through a series of small tunnels along the palm side of each finger. These tunnels (called annular pulleys, labeled A1 through A5) hold the tendons close to the bone so that when the muscle contracts, the finger curls efficiently. Without them, the tendon would bowstring out from the bone, which costs both strength and motion.",
    "A finger pulley injury is a tear of one or more of these pulleys. The A2 pulley (at the base of the finger) is the most commonly injured, followed by A4 (at the middle joint). These ruptures are classically described in rock climbers, who concentrate enormous force through a single fingertip in the crimp grip, but they also happen in baseball pitchers, in weightlifters, and after any sudden forceful flexion against resistance.",
  ],
  bodySections: [
    {
      heading: "Anatomy",
      body: [
        "Two flexor tendons run along the palm side of each finger: flexor digitorum profundus (which bends the fingertip) and flexor digitorum superficialis (which bends the middle joint). They pass through five annular pulleys (A1 to A5) and three cruciate pulleys, working together to keep the tendons in close apposition to the bones.",
        "Among these, the A2 and A4 pulleys are the most biomechanically important. They sit over the bones (proximal phalanx and middle phalanx), and damage to them is what produces visible bowstringing of the tendon when the finger is flexed under load.",
      ],
    },
    {
      heading: "How the injury happens",
      body: [
        "The classic mechanism is the climber's crimp grip: the finger is flexed at the middle joint with the fingertip hyperextended, the climber's full body weight loaded through that one finger, and the slip of a hold transfers the entire force to the tendon-pulley interface. The A2 pulley, the strongest of the group, often ruptures audibly with a pop.",
        "Other mechanisms include sudden flexor loading in baseball pitching, gripping a heavy weight that slips, and forced extension of an already-loaded finger (catching a bag, opening a stuck jar). Patients sometimes hear or feel a pop at the moment of injury, followed by pain and swelling at the base of the finger.",
      ],
    },
    {
      heading: "Symptoms",
      body: [
        "A pop at the moment of injury (not always present), followed by pain along the palm side of the affected finger.",
        "Swelling and bruising over the affected pulley, most often at the base of the finger (A2) or over the middle joint (A4).",
        "Weakness with gripping or crimping, sometimes dramatic in climbers.",
        "Visible bowstringing of the tendon when the finger is flexed against resistance, especially with multiple-pulley ruptures.",
        "Tenderness directly over the ruptured pulley on examination.",
      ],
    },
    {
      heading: "Diagnosis",
      body: [
        "Examination focuses on point tenderness over A2 and A4, range of motion, and a careful look for bowstringing during resisted flexion. The bowstringing test is the most specific exam finding: with the finger actively flexed against resistance, the tendon visibly lifts away from the bone if multiple pulleys are torn.",
        "Dynamic ultrasound is the imaging test of choice. It directly shows the gap between tendon and bone during resisted flexion, and unlike static MRI it captures the injury under the load that produces it. MRI is useful when the picture is unclear or when associated injuries are suspected. X-rays are obtained when there is concern for an avulsion fracture at the pulley insertion.",
      ],
    },
    {
      heading: "Non-surgical treatment",
      body: [
        "Most isolated single-pulley injuries (typically isolated A2 or isolated A4 ruptures) heal with non-surgical care. A protective splint or a pulley-protection ring is worn for roughly 6 weeks to support healing while keeping the tendon in apposition to the bone.",
        "Hand therapy starts as the splint comes off, focused on restoring range of motion, then graded strengthening. Climbers return to climbing gradually, starting on large holds (jugs) at low intensity and avoiding crimp grips for several months. Most patients recover full function.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Surgery is considered for ruptures of multiple pulleys (especially A2 plus A3, or A2 plus A4), for injuries with persistent bowstringing on exam, and for single-pulley injuries that fail non-operative care or remain painful.",
        "Pulley reconstruction uses a slip of tendon graft (most commonly palmaris longus, taken from the same forearm) to recreate the lost pulley. The graft is wrapped around the bone in the position of the original pulley and sutured to itself. The repair is then protected by a splint or pulley-protection ring while the graft heals into place.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee treats finger pulley injuries with a strong bias toward conservative care for isolated single-pulley ruptures, which is the right answer for the majority of patients. The risk of overtreating a Grade II injury with surgery is real; the cost of undertreating a Grade III or IV multiple-pulley injury is permanent bowstringing.",
      "When surgery is needed, Dr. Lee uses loupe magnification to protect the small adjacent neurovascular structures and reconstructs the pulley anatomically. Active climbers and athletes are managed with a graded return-to-sport protocol that respects healing biology while getting them back to the activities they value.",
    ],
  },
  recoveryIntro:
    "Recovery depends on whether the injury is treated with splinting alone or with surgical reconstruction.",
  recovery: [
    { when: "Non-surgical, weeks 1 to 6", what: "Pulley-protection splint or ring worn continuously. Hand may be used for light, non-crimping activities (typing, dressing)." },
    { when: "Non-surgical, weeks 6 to 12", what: "Splint or ring weaned. Hand therapy begins. Gradual return to gripping and large climbing holds (jugs)." },
    { when: "Non-surgical, 3 months", what: "Most patients return to most activities. Climbers begin progressive return to crimp grips under guidance." },
    { when: "Post-op, weeks 1 to 2", what: "Protective splint, hand elevated, dressings kept dry. Suture removal around day 10 to 14." },
    { when: "Post-op, weeks 2 to 6", what: "Pulley-protection ring during activity. Hand therapy for scar management, motion, and gentle strengthening." },
    { when: "Post-op, 3 to 6 months", what: "Progressive return to gripping, climbing, and sport. Crimping and full-effort climbing usually permitted around 6 months after surgical reconstruction." },
  ],
  misconceptions: {
    intro: "Two common misconceptions about pulley injuries.",
    items: [
      {
        heading: "'I heard a pop, so I need surgery.'",
        body: "Most pulley ruptures, including ones that pop audibly, are isolated A2 or A4 ruptures that heal well with 6 weeks of pulley protection and hand therapy. The decision to operate depends on which pulleys are torn and whether the tendon is bowstringing, not on the audibility of the pop.",
      },
      {
        heading: "'If it's not bowstringing on exam, it's fine to climb.'",
        body: "A single-pulley rupture often does not produce obvious bowstringing in the office, but climbing through it can convert a manageable single-pulley injury into a multiple-pulley problem that does require surgery. Even when imaging shows an isolated injury, a real protected-healing period is the right call.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Most commonly torn", value: "A2 (base of finger), then A4 (middle joint)" },
    { label: "Classic mechanism", value: "The crimp grip in climbing" },
    { label: "Isolated tears", value: "Usually heal without surgery" },
    { label: "Pulley-protection period", value: "About 6 weeks" },
  ],
  whyDrLee: [
    "Treats finger ligament and tendon injuries in athletes, climbers, and active patients regularly.",
    "Uses dynamic ultrasound rather than static MRI when bowstringing is the question, because the load-bearing exam reveals what a still image cannot.",
    "Strong conservative bias for isolated injuries; clear surgical criteria for multiple-pulley ruptures.",
  ],
  related: [
    { name: "Finger Collateral Ligament Injury", slug: "finger-collateral-ligament" },
    { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
    { name: "Thumb UCL/RCL Tear (Skier's Thumb)", slug: "thumb-ucl-rcl" },
  ],
  ctaCard: {
    eyebrow: "Popped a finger climbing?",
    headline: "The grade of injury drives the right treatment.",
  },
  faqHeadline: "Finger pulley injury FAQ",
  faqs: [
    {
      question: "What is a finger pulley injury?",
      answer:
        "A finger pulley injury is a tear of one or more of the small bands of tissue (annular pulleys A1 through A5) that hold the flexor tendons close to the finger bones. The A2 pulley at the base of the finger is the most commonly injured, followed by A4 at the middle joint. The injury is classically caused by the crimp grip in rock climbing but also occurs with any sudden forceful flexion against resistance, like baseball pitching or catching a heavy bag.",
    },
    {
      question: "Do I need surgery for a finger pulley injury?",
      answer:
        "Most isolated single-pulley injuries, including complete ruptures of an isolated A2 or A4, heal with 6 weeks of pulley protection (splint or ring), hand therapy, and a graded return to activity. Surgery is reserved for multiple-pulley ruptures (especially A2 plus A3, or A2 plus A4), injuries with persistent bowstringing on exam, and single-pulley injuries that fail conservative care.",
    },
    {
      question: "What does bowstringing mean?",
      answer:
        "Bowstringing is the visible lifting of the flexor tendon away from the finger bone when the finger is actively flexed against resistance. It happens because the ruptured pulley can no longer hold the tendon close to the bone. Bowstringing is the hallmark exam finding of a multiple-pulley injury and is the main indication for surgical reconstruction. Dynamic ultrasound shows it directly, which is why ultrasound is more useful than static MRI for this diagnosis.",
    },
    {
      question: "When can I climb again after a pulley injury?",
      answer:
        "After a non-surgical isolated pulley injury, most climbers begin a graded return to climbing around 6 to 8 weeks on large holds (jugs) at low intensity, with crimp grips deferred for several more months. After surgical reconstruction, full-effort climbing and crimping are usually permitted around 6 months. Every return-to-sport timeline should be individualized with a hand surgeon and a hand therapist who understand climbing-specific demands.",
    },
    {
      question: "What is a pulley-protection ring?",
      answer:
        "A pulley-protection ring is a small, custom or off-the-shelf ring (often thermoplastic or athletic tape) worn around the affected segment of the finger. It applies gentle, evenly distributed pressure that keeps the tendon close to the bone during healing, taking the place of the torn pulley while it scars in. Climbers often continue to wear pulley-protection tape or rings during early return to climbing for an extended period.",
    },
  ],
  bottomCtaTitle: "Climber's finger that won't quit?",
  bottomCtaItalic: "Get it graded properly.",
  bottomCtaBody:
    "Most pulley injuries heal with protection and time. The few that need surgery do best when treated early. Either way, an accurate grade of the injury is what tells you which path you are on.",
  metaTitle: "Finger Pulley Injury (Climber's Finger), Steven J. Lee, MD",
  metaDescription:
    "Finger pulley injury (A2 / A4 rupture, climber's finger). Anatomy, mechanism, diagnosis with dynamic ultrasound, non-surgical pulley protection, and surgical reconstruction. By Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  schemaDescription:
    "A finger pulley injury is a rupture of one or more of the annular pulleys (A1-A5) that hold the flexor tendons against the finger bones. The A2 pulley is the most commonly injured, classically from the crimp grip in rock climbing but also from any sudden forceful flexion against resistance. Treatment ranges from pulley-protection splinting for isolated injuries to surgical pulley reconstruction with tendon graft for multiple-pulley ruptures or persistent bowstringing.",
};

const olecranonFracture: ConditionPageContent = {
  slug: "olecranon-fracture",
  name: "Olecranon Fracture",
  region: "Elbow",
  headerTitle: "Olecranon Fracture:",
  headerItalic: "the broken elbow tip.",
  headerLede:
    "The olecranon is the bony point of the elbow you rest on a table. A direct fall onto a flexed elbow can fracture it, and because the triceps tendon attaches there, even a small displacement can rob you of the ability to actively straighten the arm. Non-displaced fractures heal in a splint; displaced fractures are fixed surgically with plates or wires.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "The olecranon is the prominent bony tip of the elbow, the end of the ulna where the triceps tendon attaches. It sits directly under the skin with almost no soft-tissue cushion, which is why a fall onto the back of the elbow lands force directly onto bone.",
    "Olecranon fractures range from a hairline crack with no displacement (which can heal in a splint) to a comminuted, intra-articular fracture with separated fragments (which needs surgical fixation). The key functional question with every olecranon fracture is the same: can the patient actively extend the elbow against gravity? When the answer is no, the triceps mechanism is disrupted and surgery is indicated.",
  ],
  bodySections: [
    {
      heading: "Anatomy",
      body: [
        "The olecranon forms the proximal end of the ulna and articulates with the trochlea of the humerus to make up the back half of the elbow joint. The triceps tendon inserts directly into the olecranon and is the only structure that actively extends the elbow.",
        "Because the bone sits superficially with no fat or muscle padding, fractures here are common after even moderate falls onto the elbow. The ulnar nerve runs in a groove just behind and below the olecranon (the funny bone), which is why some olecranon fractures present with pinky-side numbness or weakness.",
      ],
    },
    {
      heading: "Causes",
      body: [
        "The most common mechanism is a direct fall onto the tip of a flexed elbow. The bone takes the full impact because it has no cushion. Falls from height, sports collisions, and motor-vehicle crashes are typical scenarios.",
        "Less commonly, the fracture happens through an indirect mechanism: a sudden, forceful contraction of the triceps pulls the olecranon off the rest of the ulna (an avulsion fracture). This pattern is more common in older patients with osteoporotic bone.",
      ],
    },
    {
      heading: "Symptoms",
      body: [
        "Pain and swelling directly over the bony tip of the elbow, often with visible bruising that develops over the first day or two.",
        "Inability to actively straighten the elbow against gravity. This is the cardinal sign that the triceps mechanism is disrupted and that surgical fixation will likely be needed.",
        "A palpable gap or step-off at the back of the elbow when there is significant displacement.",
        "Pinky-side numbness, tingling, or weakness if the adjacent ulnar nerve is irritated or compressed by the fracture or its swelling.",
      ],
    },
    {
      heading: "Diagnosis",
      body: [
        "Standard elbow X-rays confirm the diagnosis and show the fracture pattern. A lateral view is most informative for olecranon fractures.",
        "A CT scan is added when the fracture extends into the joint surface, when the pattern is comminuted, or when surgical planning needs more detail. MRI is rarely needed unless an associated soft-tissue injury is suspected.",
      ],
    },
    {
      heading: "Non-surgical treatment",
      body: [
        "Non-surgical care is appropriate for fractures that are minimally displaced (typically less than 2 mm of separation), do not extend significantly into the joint, and in which the patient can actively extend the elbow against gravity.",
        "The standard course is immobilization in a long-arm splint or cast for 3 to 4 weeks, followed by a hinged elbow brace allowing progressive motion as the bone heals. Hand therapy is essential, because elbow stiffness is the single most common complication of olecranon injuries, surgical or non-surgical.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Surgery is indicated when the fracture is displaced more than 2 mm, when fragments separate (gapping at the fracture site), when the joint surface is disrupted, or when the triceps mechanism is broken (inability to actively extend the elbow).",
        "Two main fixation strategies are used. Tension-band wiring, with two parallel pins and a figure-of-eight stainless steel wire, is the classic approach for simple transverse fractures. Plate-and-screw fixation with low-profile precontoured olecranon plates is preferred for comminuted patterns, intra-articular fractures, and most modern reconstructions, because the construct is stronger and the rehabilitation can start sooner.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee favors plate-and-screw fixation for most displaced olecranon fractures because the rigid construct allows early protected motion, and early motion is the single best protection against the stiffness that haunts elbow trauma. Tension-band wiring is reserved for simple transverse patterns in good bone.",
      "He has helped design the orthopedic plating systems used by surgeons across the country, and brings that perspective to choosing the right construct for the patient's fracture pattern, bone quality, and activity demands.",
    ],
  },
  recoveryIntro:
    "Recovery from an olecranon fracture takes about 3 to 4 months in straightforward cases. The single best predictor of a good outcome is how aggressively elbow motion is restored in the first few weeks.",
  recovery: [
    { when: "Non-surgical, weeks 1 to 4", what: "Long-arm splint or cast. Fingers, wrist, and shoulder kept moving to prevent stiffness elsewhere." },
    { when: "Non-surgical, weeks 4 to 8", what: "Hinged elbow brace with progressive motion. Hand therapy starts." },
    { when: "Non-surgical, weeks 8 to 16", what: "Bone healing confirmed on X-ray. Progressive strengthening. Most patients return to most activities." },
    { when: "Post-op, weeks 1 to 2", what: "Non-removable splint, wound check and suture removal at 10 to 14 days." },
    { when: "Post-op, weeks 2 to 6", what: "Hinged elbow brace and active motion in hand therapy. Lifting restricted." },
    { when: "Post-op, weeks 6 to 12", what: "Progressive strengthening. Return to most daily activities and light sport." },
    { when: "3 to 4 months", what: "Most patients return to gripping-heavy work and most sport. Some elbow stiffness can persist. Hardware can be removed later if it irritates the skin." },
  ],
  misconceptions: {
    intro: "Two important misconceptions about elbow fractures.",
    items: [
      {
        heading: "'If I can bend it, it must not be broken.'",
        body: "Many olecranon fractures preserve passive elbow motion in the early days. The question that matters is whether the patient can actively extend the elbow against gravity. If the triceps mechanism is disrupted, passive motion can still feel reasonably good, but the elbow has lost its primary extensor.",
      },
      {
        heading: "'Once the bone is fixed, I should rest until it heals.'",
        body: "Wrong. Stiffness is the most common complication of olecranon fractures, and it is far harder to recover motion than to keep it. Early protected motion under a hand therapist's guidance is what produces good long-term outcomes. The fixation is designed to allow that early motion safely.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Common mechanism", value: "Direct fall onto the elbow" },
    { label: "Cardinal sign", value: "Inability to actively extend the elbow" },
    { label: "Surgical threshold", value: "More than 2 mm displacement, or any triceps disruption" },
    { label: "Most common complication", value: "Stiffness, addressed with early motion" },
  ],
  whyDrLee: [
    "Helped design the orthopedic plating systems used by surgeons across the country, including constructs used for elbow fractures.",
    "Coordinates with elbow-specialized hand therapists at both offices for aggressive early motion.",
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  ],
  related: [
    { name: "UCL Reconstruction (Tommy John)", slug: "ucl-reconstruction" },
    { name: "Biceps Rupture", slug: "biceps-rupture" },
    { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
  ],
  ctaCard: {
    eyebrow: "Fall onto the elbow?",
    headline: "The first question is whether you can still actively straighten it.",
  },
  faqHeadline: "Olecranon fracture FAQ",
  faqs: [
    {
      question: "What is an olecranon fracture?",
      answer:
        "An olecranon fracture is a break of the bony tip of the elbow, which is the end of the ulna where the triceps tendon attaches. It usually happens after a direct fall onto the back of a flexed elbow. Because the triceps tendon attaches here, an olecranon fracture often disrupts the patient's ability to actively straighten the elbow against gravity.",
    },
    {
      question: "Does every olecranon fracture need surgery?",
      answer:
        "No. Non-displaced fractures (less than 2 mm of separation) where the patient can still actively extend the elbow against gravity are treated non-surgically with splinting for 3 to 4 weeks followed by a hinged elbow brace and hand therapy. Surgery is indicated when the fracture is displaced more than 2 mm, when the joint surface is disrupted, or when the patient cannot actively extend the elbow.",
    },
    {
      question: "What does olecranon-fracture surgery involve?",
      answer:
        "Two main fixation strategies are used. Tension-band wiring, with two parallel pins and a figure-of-eight stainless steel wire across the fracture, is the classic option for simple transverse fractures in good bone. Plate-and-screw fixation with low-profile precontoured olecranon plates is preferred for comminuted patterns, intra-articular fractures, and most modern reconstructions because the construct is more rigid and allows earlier protected motion in therapy.",
    },
    {
      question: "Why is stiffness such a big concern after an elbow fracture?",
      answer:
        "The elbow is the joint most prone to stiffness after injury, and stiffness is harder to recover than to prevent. Scar tissue forms quickly in the surrounding capsule and muscles, and the longer the elbow stays immobile, the more it locks up. Early, supervised motion under a hand therapist starting in the first weeks after the fracture is the single best protection against permanent stiffness.",
    },
    {
      question: "How long does recovery take?",
      answer:
        "Bone healing takes 6 to 8 weeks, and most patients return to most daily activities between 8 and 12 weeks after a non-surgical or surgical olecranon fracture. Return to gripping-heavy work and sport is usually around 3 to 4 months. Some residual elbow stiffness can persist longer, especially without diligent hand therapy. Hardware (plates and screws or wires) can be removed in a second small procedure later if it irritates the skin.",
    },
  ],
  bottomCtaTitle: "Fell on your elbow and can't straighten it?",
  bottomCtaItalic: "Get it imaged.",
  bottomCtaBody:
    "The functional question with every olecranon fracture is whether the triceps mechanism is intact. An X-ray and a focused exam answer that, and the right answer changes whether you need surgery.",
  metaTitle: "Olecranon Fracture, Steven J. Lee, MD",
  metaDescription:
    "Olecranon fracture (broken tip of the elbow): symptoms, diagnosis, splinting for non-displaced fractures, surgical fixation with tension-band wiring or plate-and-screw constructs, and recovery. By Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  schemaDescription:
    "An olecranon fracture is a break of the bony tip of the elbow at the proximal ulna, where the triceps tendon attaches. It is most often caused by a direct fall onto a flexed elbow. Non-displaced fractures are treated with splinting; displaced fractures and those that disrupt active elbow extension are treated surgically with tension-band wiring or plate-and-screw fixation, followed by early protected motion to prevent stiffness.",
};

const mucousCyst: ConditionPageContent = {
  slug: "mucous-cyst",
  name: "Mucous Cyst",
  region: "Hand & Wrist",
  headerTitle: "Mucous Cyst:",
  headerItalic: "the arthritis bump.",
  headerLede:
    "A mucous cyst is a small fluid-filled bump that forms over the last joint of a finger, almost always in a finger with mild osteoarthritis. They are usually painless, but when they press on the nail-forming tissue they can deform the nail, and when the overlying skin thins they can rupture and become infected. Surgical excision removes the cyst plus the underlying bone spur that feeds it.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "A mucous cyst is a type of ganglion cyst that forms over the distal interphalangeal (DIP) joint of a finger, the joint closest to the nail. The fluid inside is the same lubricating synovial fluid that lines the joint itself; the cyst is the visible outpouching from a degenerated joint capsule.",
    "Mucous cysts develop almost exclusively in fingers with osteoarthritis at the DIP joint. The same wear that creates Heberden's nodes (the bony bumps of finger arthritis) creates small bone spurs (osteophytes) inside the joint, which irritate the joint lining and feed fluid into the cyst. Treating the cyst without addressing the spur is why recurrence is common when shortcuts are taken.",
  ],
  bodySections: [
    {
      heading: "Anatomy",
      body: [
        "The DIP joint is the small hinge joint at the tip of each finger, just behind the nail. The joint capsule sits directly below thin skin and nail-forming tissue (the germinal matrix). When a small bone spur from joint arthritis pushes against the capsule, a one-way leak of synovial fluid forms, creating the cyst.",
        "Because the cyst sits so close to the nail matrix, even a small mass can press on the cells that make the nail and produce a visible groove or ridge in the nail growing out beyond it.",
      ],
    },
    {
      heading: "Causes",
      body: [
        "The dominant cause is osteoarthritis of the DIP joint. The cysts can be thought of as the visible signal of a joint that is wearing down, and most patients with mucous cysts also have other signs of finger osteoarthritis (Heberden's nodes, joint stiffness, mild aching).",
        "Trauma to the finger can occasionally precipitate a cyst in a joint that was already wearing, but isolated injury without underlying arthritis is a less common cause.",
      ],
    },
    {
      heading: "Symptoms",
      body: [
        "A small, often rubbery bump over the back or side of the DIP joint of a finger, sometimes translucent if the overlying skin is thin.",
        "The cyst typically fluctuates in size over weeks or months, and can occasionally shrink on its own.",
        "Nail deformity, usually a longitudinal groove or ridge, when the cyst presses on the nail matrix.",
        "Mild aching or pain with motion, often difficult to separate from the underlying arthritis pain.",
        "Spontaneous rupture is the most concerning complication. Once the skin breaks open, the cyst communicates with the joint, and the result can be a deep joint infection.",
      ],
    },
    {
      heading: "Diagnosis",
      body: [
        "The diagnosis is almost always clinical. The location, appearance, and association with finger arthritis make mucous cysts straightforward to identify on exam.",
        "X-rays of the finger confirm the underlying DIP joint arthritis and show the bone spur that is feeding the cyst. This information matters for surgical planning, because removing the cyst without removing the spur leaves the source of the problem in place.",
      ],
    },
    {
      heading: "Non-surgical management",
      body: [
        "Asymptomatic mucous cysts that are not threatening the nail or skin can be observed. Many remain stable for years and never require intervention.",
        "Dr. Lee specifically advises against in-office aspiration and steroid injection of mucous cysts. Aspiration recurs at a high rate because the underlying bone spur is unchanged, and the puncture creates a tract from skin to the joint, which raises the risk of a deep joint infection. The cosmetic temptation to drain it should be resisted.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Surgery is indicated for cysts that are causing pain, threatening the skin (translucent or repeatedly draining), producing nail deformity, or that the patient finds cosmetically unacceptable. Any cyst that has already drained or shown signs of infection should be treated promptly.",
        "The procedure is performed as outpatient surgery, usually under local anesthesia, through a small incision over the cyst. The cyst is removed completely, and (critically) the underlying bone spur is removed from the joint at the same operation. This combined approach is what keeps the recurrence rate low. When the underlying joint is severely arthritic and painful in its own right, a joint fusion (arthrodesis) is sometimes recommended at the same operation.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee's approach to mucous cysts is conservative until the cyst earns its surgery: observation when it is small and asymptomatic, prompt removal when it threatens the nail or the skin. The single most common reason mucous cysts recur after surgery is failure to address the underlying osteophyte; Dr. Lee removes the bone spur at the same operation as a matter of course.",
      "Patients who have had a cyst aspirated elsewhere before being referred are a recognizable subgroup, and they need careful inspection for early signs of joint infection from the prior puncture.",
    ],
  },
  recoveryIntro:
    "Recovery from mucous cyst excision is straightforward, with most patients back to normal activity within a few weeks.",
  recovery: [
    { when: "Week 1", what: "Light dressing on the finger. The hand may be used for daily activity. The dressing is kept clean and dry." },
    { when: "Weeks 1 to 2", what: "Wound check and suture removal. Soft tissues continue to heal." },
    { when: "Weeks 2 to 4", what: "Most patients return to unrestricted activity. Some residual stiffness at the DIP joint is normal for several weeks." },
    { when: "Beyond 4 weeks", what: "Underlying arthritis at the joint persists, but the cyst-related symptoms (and any nail deformity from cyst pressure) resolve. The nail typically grows out normally over the next few months." },
  ],
  misconceptions: {
    intro: "Two persistent misconceptions about mucous cysts.",
    items: [
      {
        heading: "'Can't we just drain it in the office?'",
        body: "Aspiration is tempting because the cyst is right there under thin skin. But the recurrence rate is high (because the underlying bone spur is untouched), and the puncture creates a tract from skin into the joint, raising the risk of a deep joint infection. Most hand surgeons strongly advise against in-office aspiration of mucous cysts for this reason.",
      },
      {
        heading: "'It's just a bump, it can't really hurt my nail permanently.'",
        body: "If a cyst sits over the nail matrix long enough, it can leave a permanent groove in the nail even after the cyst is removed. Cysts that are causing visible nail changes should be addressed before the deformity becomes fixed.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Underlying cause", value: "DIP joint osteoarthritis (almost always)" },
    { label: "Most common complication", value: "Rupture into the joint, infection" },
    { label: "Aspiration", value: "Not recommended (high recurrence, infection risk)" },
    { label: "Surgery key", value: "Remove the underlying bone spur too" },
  ],
  whyDrLee: [
    "Treats mucous cysts and the related spectrum of DIP joint arthritis routinely.",
    "Removes the underlying osteophyte at the same operation, the single biggest factor in keeping recurrence rates low.",
    "Coordinates with hand therapists at both NYC and Scarsdale offices for any post-op finger-stiffness management.",
  ],
  related: [
    { name: "Finger Collateral Ligament Injury", slug: "finger-collateral-ligament" },
    { name: "Basal Joint Arthritis", slug: "basal-joint-arthroplasty" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
  ],
  ctaCard: {
    eyebrow: "Bump on the last knuckle?",
    headline: "Aspiration is the wrong move. Get it properly evaluated.",
  },
  faqHeadline: "Mucous cyst FAQ",
  faqs: [
    {
      question: "What is a mucous cyst?",
      answer:
        "A mucous cyst is a small fluid-filled ganglion cyst that forms over the distal interphalangeal (DIP) joint of a finger, the joint closest to the nail. The fluid inside is synovial fluid leaking from the joint through a degenerated capsule. Mucous cysts develop almost exclusively in fingers that already have osteoarthritis at the DIP joint, with bone spurs that irritate the joint lining and feed the cyst.",
    },
    {
      question: "Will the cyst go away on its own?",
      answer:
        "Sometimes. Mucous cysts can fluctuate in size and occasionally shrink or resolve, especially small ones. Watching an asymptomatic mucous cyst is a reasonable initial approach. Cysts that are growing, causing nail changes, producing thin or translucent skin, or causing pain are unlikely to resolve and are usually best treated surgically.",
    },
    {
      question: "Why shouldn't I just have it drained in the office?",
      answer:
        "Aspiration of a mucous cyst has two big problems: a high recurrence rate (because the underlying bone spur is unchanged and keeps producing the cyst) and a meaningful risk of deep joint infection (because the puncture creates a tract from skin into the joint). Most hand surgeons strongly advise against in-office aspiration of mucous cysts. Excision in the operating room, with removal of the underlying bone spur, is the standard treatment.",
    },
    {
      question: "Will my fingernail grow back normally after surgery?",
      answer:
        "Usually yes, if the cyst is removed before the nail deformity becomes fixed. The nail matrix (the cells that grow the nail) is just behind the cyst, and pressure relief after excision typically lets the nail grow back to its normal shape over the next 3 to 6 months. Long-standing cyst-induced nail deformities can sometimes leave a permanent residual groove even after the cyst is gone, which is one reason not to wait too long if nail changes are appearing.",
    },
    {
      question: "How long is recovery after surgery?",
      answer:
        "Mucous cyst excision is an outpatient procedure, usually under local anesthesia. Most patients use the hand for daily activities the same week, have sutures removed at 1 to 2 weeks, and return to unrestricted activity within 2 to 4 weeks. Some residual stiffness at the DIP joint is normal for several weeks, and the underlying arthritis at the joint persists, but the cyst-related symptoms and any nail deformity from cyst pressure usually resolve.",
    },
  ],
  bottomCtaTitle: "Bump on the last joint of a finger?",
  bottomCtaItalic: "Best not to ignore it.",
  bottomCtaBody:
    "Mucous cysts that are small and asymptomatic can usually be watched. The ones that are growing, threatening the skin, or causing nail changes should be removed properly, with the underlying bone spur, in the operating room.",
  metaTitle: "Mucous Cyst, Steven J. Lee, MD",
  metaDescription:
    "Mucous cyst of the finger: a ganglion cyst over the DIP joint, almost always associated with osteoarthritis. Symptoms, nail deformity risk, why aspiration is not recommended, surgical excision with osteophyte removal, and recovery. By Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  schemaDescription:
    "A mucous cyst is a ganglion cyst over the distal interphalangeal (DIP) joint of a finger, almost always associated with underlying osteoarthritis and an osteophyte. It can produce a visible bump, nail deformity, and the risk of skin rupture with joint infection. Standard treatment is surgical excision of the cyst together with the underlying bone spur to minimize recurrence; aspiration is generally discouraged because of recurrence and infection risk.",
};

const prpInjections: ConditionPageContent = {
  slug: "prp-injections",
  name: "PRP (Platelet-Rich Plasma) Injections",
  region: "Advanced Treatments",
  headerTitle: "PRP Injections:",
  headerItalic: "your own platelets, concentrated.",
  headerLede:
    "Platelet-rich plasma is a concentrated extract of the patient's own platelets and growth factors, prepared from a small blood draw and re-injected into an injured tendon, ligament, or joint. The goal is to amplify the body's natural healing response. Dr. Lee was among the first surgeons in NYC to use PRP for upper-extremity injuries and performs more than 250 PRP procedures per year.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "Platelet-rich plasma (PRP) is an autologous biologic treatment: the cells in the syringe come from the patient's own blood, not from a donor or a manufacturer. A small volume of blood is drawn, spun in a centrifuge to separate its components, and the platelet-rich layer is re-injected into the injury site under ultrasound guidance.",
    "The biological idea is straightforward. Platelets are not just for clotting; they also carry a dense load of growth factors that signal local cells to heal, build collagen, and form new blood vessels. Concentrating those platelets at the site of an injury is intended to amplify the body's natural healing response in tissues that are otherwise slow to recover.",
  ],
  bodySections: [
    {
      heading: "What PRP is, and what it isn't",
      body: [
        "PRP is a regenerative injection: it uses the patient's own biologic material to stimulate healing. It is fundamentally different from a corticosteroid (cortisone) injection, which suppresses inflammation but does not promote tissue repair.",
        "PRP is also distinct from stem cell or bone marrow aspirate concentrate (BMAC) treatments, which use different cell populations. The preparation method matters, the platelet concentration matters, and the indication matters. Not every musculoskeletal complaint is a candidate.",
      ],
    },
    {
      heading: "How the procedure works",
      body: [
        "The entire procedure takes about 30 to 45 minutes. A standard blood draw of roughly 10 to 15 mL is obtained from the patient's arm. The tube is placed in a centrifuge, which separates the blood into layers by density: red cells at the bottom, plasma at the top, and a thin straw-colored layer of concentrated platelets in between (the buffy coat).",
        "The platelet-rich layer is drawn into a syringe and injected directly into the injury site, typically under ultrasound guidance to ensure precise placement into the affected tendon, ligament, or joint. Local anesthetic may be used at the skin to reduce discomfort.",
      ],
    },
    {
      heading: "Conditions commonly treated",
      body: [
        "PRP is most often used for chronic tendon and ligament injuries that have not responded to a real trial of rest, physical therapy, and anti-inflammatories. Common upper-extremity indications include:",
      ],
      bullets: [
        "Lateral epicondylitis (tennis elbow)",
        "Medial epicondylitis (golfer's elbow)",
        "Rotator cuff partial tears and chronic tendinopathy",
        "Biceps tendinitis and tendinopathy",
        "Thumb basal joint arthritis",
        "TFCC tears and other wrist ligament injuries",
        "Knee osteoarthritis, mild to moderate",
        "Patellar tendinopathy (jumper's knee)",
        "Achilles tendinopathy",
      ],
      bulletsAfter:
        "PRP is generally not used as the first treatment for any of these conditions; it is reserved for cases where simpler measures have not delivered the expected result.",
    },
    {
      heading: "Who is a good candidate",
      body: [
        "The best candidates are patients with a chronic tendinopathy, partial-thickness tendon tear, or mild-to-moderate arthritis who have not improved with 6 to 12 weeks of standard non-surgical care (rest, activity modification, hand therapy, NSAIDs, sometimes a single corticosteroid injection).",
        "PRP is less likely to help in cases of severe arthritis with bone-on-bone changes, complete tendon ruptures, or end-stage joint disease where the structural problem is beyond what biology can repair. Dr. Lee determines candidacy on a case-by-case basis, weighing the imaging, the patient's activity demands, and the realistic biologic potential of the tissue.",
      ],
    },
    {
      heading: "What to expect after the injection",
      body: [
        "Most patients have moderate soreness at the injection site for 24 to 72 hours, sometimes longer. This is part of the biologic process: PRP triggers a controlled inflammatory response that drives healing. Patients are advised to avoid anti-inflammatory medications (NSAIDs like ibuprofen) for about a week after the injection so the healing cascade is not blunted.",
        "Clinical improvement is gradual, typically beginning at 4 to 6 weeks and continuing to develop for 3 to 6 months. PRP is not a same-day pain reliever; it is a regenerative treatment whose benefits accrue over time.",
      ],
    },
    {
      heading: "Series and protocol",
      body: [
        "PRP response appears to be dose-dependent for most indications. The standard protocol is a series of 3 injections spaced approximately one week apart. In selected cases (slow responders, more degenerative tissue), a 4th or occasionally 5th injection is added.",
        "Hand or physical therapy continues throughout the injection series and beyond. PRP is one component of a broader treatment plan, not a standalone replacement for the rehabilitation work that gets the tissue strong and re-loaded.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee was among the first surgeons in NYC to use PRP for upper-extremity injuries and performs more than 250 PRP procedures per year. That volume matters: it allows him to match the right concentration, the right injection technique, and the right post-injection protocol to each indication, rather than applying a one-size-fits-all approach.",
      "His honest framing for patients: PRP works well for some indications and modestly for others, and the evidence base is strongest for chronic tendinopathies and mild-to-moderate knee osteoarthritis. He recommends it where the literature and his clinical experience support real benefit, and he is comfortable telling patients when surgery is the better path.",
    ],
  },
  recoveryIntro:
    "PRP is not a procedure with a fixed recovery timeline like surgery; it is a series of office visits with progressive clinical change.",
  recovery: [
    { when: "Day of injection", what: "Local soreness, often noticeable within the first hour. No NSAIDs for one week after the injection." },
    { when: "Days 1 to 3", what: "Peak soreness at the injection site. Ice and acetaminophen are acceptable. Activity is limited to comfort." },
    { when: "Week 1 to series completion", what: "Second and third injections at one-week intervals. Continued hand therapy or physical therapy alongside the series." },
    { when: "Weeks 4 to 6", what: "Earliest improvement typically appears as reduced pain and improved function. Some patients feel changes earlier; some take longer." },
    { when: "3 to 6 months", what: "Full clinical effect realized. The injury is reassessed and next steps decided: continue therapy, repeat series, or revisit surgical options." },
  ],
  misconceptions: {
    intro: "Three common misconceptions about PRP.",
    items: [
      {
        heading: "'PRP is the same as a cortisone shot.'",
        body: "They are fundamentally different treatments. Cortisone suppresses inflammation and often provides fast but temporary pain relief; it does not heal tissue and can weaken it with repeated use. PRP triggers a controlled inflammatory response intended to stimulate healing and works on a slower, weeks-to-months timeline.",
      },
      {
        heading: "'One PRP injection should fix it.'",
        body: "PRP appears to be dose-dependent for most indications. The standard protocol is a series of 3 injections spaced one week apart. Expecting a single injection to deliver the result of a series is the most common reason patients walk away dissatisfied.",
      },
      {
        heading: "'PRP can fix anything.'",
        body: "PRP works best for chronic tendinopathies and mild-to-moderate arthritis. It is not a substitute for surgery in cases of complete tendon rupture, severe arthritis with bone loss, or end-stage joint disease. An honest evaluation about whether biology can solve the structural problem comes before recommending PRP.",
      },
    ],
  },
  sidebarFacts: [
    { label: "Source material", value: "Patient's own blood (autologous)" },
    { label: "Standard protocol", value: "3 injections, one week apart" },
    { label: "Time to improvement", value: "4 to 6 weeks (gradual)" },
    { label: "Best for", value: "Chronic tendinopathies, mild-moderate arthritis" },
  ],
  whyDrLee: [
    "Among the first surgeons in NYC to use PRP for upper-extremity injuries.",
    "Performs more than 250 PRP procedures per year (high-volume experience).",
    "Uses ultrasound guidance for precise injection placement.",
  ],
  related: [
    { name: "TFCC Tear", slug: "tfcc-tear" },
    { name: "Ulnar Impaction Syndrome", slug: "ulnar-impaction-syndrome" },
    { name: "Rotator Cuff Repair", slug: "rotator-cuff" },
  ],
  ctaCard: {
    eyebrow: "Tendon or joint that won't heal?",
    headline: "PRP can help in the right cases. Honest evaluation matters.",
  },
  faqHeadline: "PRP injection FAQ",
  faqs: [
    {
      question: "What is PRP?",
      answer:
        "PRP, or platelet-rich plasma, is a concentrated extract of the patient's own platelets and growth factors prepared from a small blood draw. Platelets contain growth factors that signal nearby cells to heal, produce collagen, and form new blood vessels. Concentrating those platelets at the site of an injury (a tendon, ligament, or joint) amplifies the body's natural healing response. PRP is autologous, meaning the cells come from the patient, not from a donor or a manufacturer.",
    },
    {
      question: "How is PRP made and given?",
      answer:
        "A standard blood draw of about 10 to 15 mL is obtained from the patient's arm. The tube is placed in a centrifuge that separates the blood into layers, and the platelet-rich layer (the buffy coat) is drawn into a syringe. That concentrated material is then injected directly into the affected tendon, ligament, or joint, typically under ultrasound guidance. The entire procedure takes about 30 to 45 minutes.",
    },
    {
      question: "Does PRP work, and for what?",
      answer:
        "The evidence is strongest for chronic tendinopathies (tennis elbow, golfer's elbow, rotator cuff tendinopathy, Achilles tendinopathy, patellar tendinopathy) and mild-to-moderate knee osteoarthritis. Results for ligament partial tears, basal joint arthritis, and TFCC tears are positive in many patients but variable in the literature. PRP is generally not effective for complete tendon ruptures, severe arthritis with bone-on-bone changes, or end-stage joint disease.",
    },
    {
      question: "How many injections will I need, and when will I feel better?",
      answer:
        "The standard protocol is a series of 3 injections spaced one week apart, with occasional addition of a 4th or 5th injection in selected cases. Clinical improvement is gradual, typically beginning at 4 to 6 weeks after the series and continuing to develop for 3 to 6 months. PRP is not a same-day pain reliever; it is a regenerative treatment whose benefits accrue over time.",
    },
    {
      question: "Are there side effects, and is PRP safe?",
      answer:
        "PRP uses the patient's own cells, which essentially eliminates the risk of allergic reaction or transmissible disease. The most common side effect is moderate soreness at the injection site for 24 to 72 hours after each injection, which is part of the controlled inflammatory response that drives healing. Patients are advised to avoid anti-inflammatory medications (ibuprofen, naproxen) for about a week after each injection so the healing cascade is not blunted. The procedure is accepted by all major professional sports leagues and the International Olympic Committee.",
    },
  ],
  bottomCtaTitle: "Stubborn tendon or joint?",
  bottomCtaItalic: "Could be a PRP candidate.",
  bottomCtaBody:
    "PRP works well for the right indications and is the wrong answer for others. An honest evaluation of the imaging, the failed prior treatments, and the realistic biologic potential of the tissue is what tells you whether PRP makes sense for your case.",
  metaTitle: "PRP (Platelet-Rich Plasma) Injections, Steven J. Lee, MD",
  metaDescription:
    "Platelet-rich plasma (PRP) injections for tendon, ligament, and joint injuries. What PRP is, how it's prepared, indications, the 3-injection protocol, what to expect after, and Dr. Lee's high-volume PRP experience (250+ procedures per year, among the first in NYC for upper extremity).",
  schemaDescription:
    "Platelet-rich plasma (PRP) injection is an autologous regenerative treatment in which the patient's own platelets and growth factors are concentrated from a blood draw and injected into an injured tendon, ligament, or joint to stimulate healing. PRP is most effective for chronic tendinopathies and mild-to-moderate arthritis, given as a series of approximately three injections one week apart, with clinical improvement developing gradually over weeks to months.",
};

const internalBrace: ConditionPageContent = {
  slug: "internal-brace",
  name: "Internal Brace",
  region: "Advanced Treatments",
  headerTitle: "Internal Brace:",
  headerItalic: "the seatbelt inside your repair.",
  headerLede:
    "An internal brace is a high-strength suture-tape construct that sits across a ligament or tendon repair, acting like a seatbelt that protects the healing tissue during the first weeks after surgery. The added strength lets patients begin guided motion sooner than a traditional repair allows, with faster return to function and less stiffness. Dr. Lee helped design the internal-brace constructs used in the upper extremity.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "Internal brace is a surgical technique, not a single product. The construct consists of a high-strength suture tape (a flat, woven tape several millimeters wide) fixed to bone on either side of a repaired ligament or tendon using small suture anchors. Across the repair, the tape acts as an additional load-bearing structure, taking force off the healing biological tissue during the period when it is most vulnerable.",
    "The clinical idea is straightforward. A repaired or reconstructed ligament is at its weakest in the first few weeks after surgery, when sutures alone hold it together. Traditionally, this meant extended immobilization in a cast or splint, with the trade-off of significant stiffness afterward. An internal brace shifts the balance: the tissue still heals on its own biology, but the construct lets the joint start moving sooner, which is what protects against the stiffness that often defines outcomes.",
  ],
  bodySections: [
    {
      heading: "How it works biomechanically",
      body: [
        "The tape itself is not designed to replace the ligament. The patient's own biological tissue is still what heals, scars in, and ultimately resists the loads of daily life. The tape's job is temporary load-sharing: while collagen is reorganizing and the repaired tissue is gaining strength, the tape carries enough of the load that the joint can move safely.",
        "Over months, the biological repair matures and the tape becomes a secondary structure. It typically remains in place permanently but contributes less and less as the patient's own tissue takes over.",
      ],
    },
    {
      heading: "Conditions where internal brace is used",
      body: [
        "Internal brace constructs are used in a growing list of orthopedic procedures in the upper extremity and beyond. The most established applications include:",
      ],
      bullets: [
        "Thumb UCL/RCL repair (Skier's thumb, gamekeeper's thumb)",
        "Finger collateral ligament repair",
        "Thumb basal joint reconstruction (CMC arthroplasty)",
        "Scapholunate ligament reconstruction",
        "TFCC repair and DRUJ stabilization",
        "Elbow UCL reconstruction (Tommy John)",
        "Elbow LUCL repair (lateral collateral ligament)",
        "Ankle ligament reconstruction (Broström procedure)",
      ],
      bulletsAfter:
        "The decision to add an internal brace to a particular repair depends on the tissue quality, the patient's activity demands, and the surgical pattern. Not every repair needs one, and not every repair is helped by one.",
    },
    {
      heading: "How it changes recovery",
      body: [
        "The headline change is the timing of motion. In traditional ligament repair, the joint is often held still in a splint or cast for 4 to 6 weeks to protect the sutures. With an internal brace, supervised motion under a hand therapist or physical therapist can typically begin within 1 to 2 weeks of surgery, depending on the procedure and the tissue.",
        "Earlier motion translates to less stiffness, faster strength recovery, and often an earlier return to sport and to gripping-heavy occupations. The biology of healing has not changed, but the rehabilitation curve is meaningfully different.",
      ],
    },
    {
      heading: "Who is a good candidate",
      body: [
        "Candidates for internal brace augmentation are patients who need surgical repair or reconstruction of a ligament where early motion would protect outcomes (active patients, athletes, occupations requiring fine motor function) and where the construct has been validated for the specific procedure.",
        "It is not a substitute for a poorly performed repair, and it does not rescue a ligament that is too damaged to repair. The underlying biology of the tissue still has to be respectable; the brace gives that biology room to work.",
      ],
    },
    {
      heading: "Dr. Lee's role in the technology",
      body: [
        "Dr. Lee has helped design the orthopedic implants and constructs used by surgeons across the country, including plating systems, suture anchors, and internal-brace constructs for the upper extremity. That collaboration with the manufacturer means his clinical use of internal brace is grounded in the technical development of the implants themselves.",
        "In practical terms, this informs how he chooses tape size, anchor configuration, and fixation strategy for each individual case. The construct that works for a thumb UCL is not the same construct that works for an elbow UCL, and matching the implant to the indication is part of the operation, not just an off-the-shelf addition.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee uses internal brace augmentation when it genuinely changes the outcome, not as a default. For thumb UCL injuries in active patients, finger collateral ligament reconstructions, and selected elbow procedures, the protected early motion an internal brace allows can shorten return-to-activity by weeks and reduce the stiffness that follows extended immobilization.",
      "For repairs where the biology is straightforward and the recovery is already predictable, he uses traditional techniques and skips the additional construct. The goal is the best result for the patient, not the most technology in the surgical field.",
    ],
  },
  recoveryIntro:
    "Recovery timelines depend on the specific procedure the internal brace augments. The headline difference from traditional repair is that supervised motion can typically begin sooner, often within 1 to 2 weeks instead of 4 to 6.",
  recovery: [
    { when: "Weeks 1 to 2", what: "Initial post-op splint with the hand or limb elevated. Wound check and suture removal at 10 to 14 days. Transition into custom hand-therapy splint when appropriate." },
    { when: "Weeks 2 to 6", what: "Supervised protected motion in hand or physical therapy. The internal brace allows ranges of motion that traditional repair would not at this stage. Lifting and gripping limited." },
    { when: "Weeks 6 to 12", what: "Progressive strengthening, scar management, and graded return to most daily activities. Sport-specific drills begin." },
    { when: "3 to 6 months", what: "Return to contact sport, gripping-heavy work, and full strength activities. The exact timing depends on the procedure (thumb UCL is faster than elbow UCL is faster than scapholunate reconstruction)." },
  ],
  misconceptions: {
    intro: "Two common misconceptions about internal brace.",
    items: [
      {
        heading: "'The tape replaces my ligament.'",
        body: "It does not. The patient's own biological tissue still does the long-term work of resisting loads; the tape is a temporary load-sharing structure that protects the repair during the first weeks of healing. Over months, the biology becomes dominant and the tape becomes a secondary structure.",
      },
      {
        heading: "'Internal brace means I can skip rehab.'",
        body: "No. It means rehab starts sooner under careful supervision. The protected motion the brace allows still needs to be guided by a hand or physical therapist, and the strengthening phase is essentially the same as a traditional repair. The difference is timing, not effort.",
      },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "Suture-tape augmentation across a repair" },
    { label: "What it does", value: "Temporary load-sharing while tissue heals" },
    { label: "Main benefit", value: "Earlier motion, less stiffness" },
    { label: "Stays in place", value: "Yes, permanently" },
  ],
  whyDrLee: [
    "Helped design the orthopedic plating systems, suture anchors, and internal-brace constructs used by surgeons nationwide.",
    "Uses internal brace augmentation where it genuinely changes the outcome, not as a default add-on.",
    "Matches tape size, anchor configuration, and fixation strategy to the specific indication.",
  ],
  related: [
    { name: "Thumb UCL/RCL Tear (Skier's Thumb)", slug: "thumb-ucl-rcl" },
    { name: "Finger Collateral Ligament Injury", slug: "finger-collateral-ligament" },
    { name: "UCL Reconstruction (Tommy John)", slug: "ucl-reconstruction" },
  ],
  ctaCard: {
    eyebrow: "Ligament surgery on the calendar?",
    headline: "Ask whether internal brace augmentation is right for your case.",
  },
  faqHeadline: "Internal brace FAQ",
  faqs: [
    {
      question: "What is an internal brace?",
      answer:
        "An internal brace is a surgical technique in which a high-strength suture tape (a flat, woven tape several millimeters wide) is fixed to bone with small anchors on either side of a repaired or reconstructed ligament. The tape acts like a seatbelt across the repair, taking load off the healing tissue during the first weeks after surgery so the patient can begin protected motion sooner. The patient's own biological tissue still heals and provides long-term strength; the tape is a load-sharing structure.",
    },
    {
      question: "Which surgeries use an internal brace?",
      answer:
        "Internal brace constructs are used in a growing list of orthopedic procedures, especially in the upper extremity. Established applications include thumb UCL and RCL repair (skier's thumb), finger collateral ligament repair, thumb basal joint reconstruction, scapholunate ligament reconstruction, TFCC and DRUJ procedures, elbow UCL reconstruction (Tommy John), elbow LUCL repair, and ankle ligament reconstruction (Broström). The decision to add an internal brace to any particular case depends on tissue quality, the patient's activity demands, and the surgical pattern.",
    },
    {
      question: "How does internal brace change recovery?",
      answer:
        "The main change is the timing of motion. In a traditional ligament repair, the joint is held still in a splint or cast for 4 to 6 weeks. With an internal brace, supervised protected motion under a hand or physical therapist can typically begin within 1 to 2 weeks of surgery. Earlier motion means less stiffness, faster strength recovery, and often an earlier return to sport. The biology of healing has not changed; the rehabilitation curve has.",
    },
    {
      question: "Does the tape come out, or does it stay forever?",
      answer:
        "The internal brace construct stays in place permanently. It is biologically inert and well-tolerated by the surrounding tissue. Over the months after surgery, the patient's own healing tissue becomes dominant, and the tape becomes a secondary structure that contributes less and less to load resistance. There is no second surgery to remove it under normal circumstances.",
    },
    {
      question: "Will I be able to return to sports faster?",
      answer:
        "For procedures where internal brace is used appropriately (thumb UCL repair, finger collateral ligament repair, selected elbow ligament reconstructions, ankle Broström), most patients can return to sport-specific drills and gradual return to play earlier than they would with a traditional repair. The exact timeline depends on the specific procedure and the demands of the sport, but for many upper-extremity ligament surgeries, the practical difference can be weeks earlier without compromising the durability of the repair.",
    },
  ],
  bottomCtaTitle: "Scheduled for ligament surgery?",
  bottomCtaItalic: "Ask whether internal brace is right.",
  bottomCtaBody:
    "Internal brace augmentation can shorten recovery and protect outcomes when it is used in the right cases. It is not a default add-on, and not every repair benefits. Dr. Lee can walk through whether the construct makes sense for your specific procedure and activity demands.",
  metaTitle: "Internal Brace, Steven J. Lee, MD",
  metaDescription:
    "Internal brace technology: a high-strength suture-tape augmentation across a ligament or tendon repair that allows earlier motion and faster return to activity. Used in thumb UCL, finger collateral, elbow UCL/LUCL, scapholunate, ankle Broström, and more. Dr. Steven J. Lee, MD helped design the internal-brace constructs used in the upper extremity.",
  schemaDescription:
    "An internal brace is a surgical technique that augments a repaired or reconstructed ligament with a high-strength suture-tape construct fixed to bone with small anchors. The tape protects the repair during early healing and allows earlier supervised motion than traditional repair, with less post-operative stiffness and earlier return to activity. The patient's own biological tissue still provides long-term strength.",
};

// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// Hand & Wrist additions (Dr. Lee feedback, May 2026)
const deQuervains: ConditionPageContent = {
  slug: "de-quervains",
  name: "De Quervain's Tenosynovitis",
  region: "Hand & Wrist",
  headerTitle: "De Quervain's Tenosynovitis:",
  headerItalic: "thumb-side wrist pain, explained.",
  headerLede:
    "Pain and swelling on the thumb side of the wrist, worse with lifting, gripping, and wringing. De Quervain's is one of the most common and most treatable causes of radial wrist pain, and most patients improve without surgery.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "De Quervain's tenosynovitis is irritation of the two tendons that run along the thumb side of the wrist, the abductor pollicis longus and the extensor pollicis brevis, where they pass through a tight tunnel called the first dorsal compartment. When the tendon sheath thickens, every thumb and wrist motion drags the swollen tendons through a space that no longer fits them, which produces pain.",
    "It is especially common in new parents who repeatedly lift an infant, and in anyone who has ramped up gripping, lifting, or repetitive thumb use. The pain sits at the base of the thumb and the radial wrist, and often radiates up the forearm.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "Pain and tenderness on the thumb side of the wrist",
        "Pain with lifting, gripping, pinching, or wringing a towel",
        "Swelling near the base of the thumb, sometimes with a small fluid-filled bump",
        "A catching or snapping sensation when the thumb moves",
        "Pain that travels up the forearm with use",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "De Quervain's is a clinical diagnosis. The Finkelstein test, bending the thumb into the palm and gently tilting the wrist toward the small finger, reproduces the pain when the condition is present. X-rays are usually normal and are used mainly to rule out arthritis at the base of the thumb, which can cause pain in a similar area.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "The large majority of De Quervain's cases settle without surgery. Dr. Lee starts with activity modification, a thumb-spica splint that rests the irritated tendons, and an honest look at the daily activities driving the problem. A corticosteroid injection into the first dorsal compartment is effective for many patients and can relieve symptoms for a long time, sometimes definitively.",
      "Surgery is reserved for the minority of patients whose pain persists despite splinting and injection. The release is a short outpatient procedure that opens the tight compartment so the tendons glide freely. Dr. Lee takes care to protect the small branches of the radial sensory nerve that cross the area, which is the part of the operation that most affects the result.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most patients begin here, and most never need more:"],
      bullets: [
        "Thumb-spica splinting to rest the first dorsal compartment",
        "Activity modification to reduce repetitive thumb loading",
        "Anti-inflammatory medication for symptom control",
        "Corticosteroid injection, often the single most effective non-surgical step",
      ],
    },
    {
      heading: "Surgical release",
      body: [
        "When symptoms persist despite a real trial of splinting and injection, the first dorsal compartment is opened through a small incision so the tendons are no longer compressed. The procedure is outpatient and takes about fifteen minutes. The main technical priority is protecting the radial sensory nerve branches in the area.",
      ],
    },
  ],
  recoveryIntro: "Recovery after a release is usually quick:",
  recovery: [
    { when: "Day 0 to 7", what: "Soft dressing and a light splint. Use the hand for daily activities. Keep the wound dry until the first visit." },
    { when: "Weeks 1 to 2", what: "Sutures removed. Begin gentle thumb and wrist motion. Most patients return to desk work in this window." },
    { when: "Weeks 2 to 6", what: "Progressive strengthening and return to lifting and gripping as comfort allows." },
  ],
  misconceptions: {
    intro: "A few things worth clearing up:",
    items: [
      { heading: "It is not arthritis.", body: "De Quervain's is a tendon problem, not a joint problem, though it can feel similar to thumb-base arthritis. The treatments are different, so an accurate exam matters." },
      { heading: "An injection is often enough.", body: "A well-placed corticosteroid injection resolves symptoms for a large share of patients, and many never need surgery." },
      { heading: "It is common after a new baby.", body: "Repeated lifting of an infant is a classic trigger. Symptoms often improve as the lifting pattern changes, supported by splinting and, when needed, an injection." },
    ],
  },
  sidebarFacts: [
    { label: "Tendons involved", value: "Abductor pollicis longus and extensor pollicis brevis" },
    { label: "Classic test", value: "Finkelstein test" },
    { label: "First-line treatment", value: "Splinting and corticosteroid injection" },
    { label: "Surgical option", value: "First dorsal compartment release" },
    { label: "Procedure time", value: "About 15 minutes, outpatient" },
    { label: "Return to desk work", value: "About 1 to 2 weeks after release" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Conservative first, with surgery reserved for cases that do not settle",
    "Careful protection of the radial sensory nerve during release",
    "Distinguishes De Quervain's from thumb-base arthritis and radial nerve irritation",
  ],
  related: [
    { name: "Wartenberg's Syndrome", slug: "wartenbergs-syndrome" },
    { name: "Basal Joint Arthritis", slug: "basal-joint-arthroplasty" },
    { name: "Ganglion Cyst", slug: "ganglion-cyst" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
  ],
  ctaCard: {
    eyebrow: "Thumb-side wrist pain?",
    headline: "Most cases improve without surgery.",
  },
  faqHeadline: "De Quervain's, answered.",
  faqs: [
    {
      question: "What does De Quervain's feel like?",
      answer:
        "Pain and tenderness on the thumb side of the wrist that worsens with lifting, gripping, pinching, or wringing. Many patients notice it when lifting a child, a kettle, or a phone. The pain can travel up the forearm, and there is sometimes swelling or a catching sensation at the base of the thumb.",
    },
    {
      question: "Will it go away on its own?",
      answer:
        "Mild cases often improve with rest, activity changes, and a thumb splint. When symptoms persist, a corticosteroid injection into the irritated compartment relieves pain for the large majority of patients. Surgery is reserved for the minority who do not improve with these measures.",
    },
    {
      question: "Does the injection work, and how long does it last?",
      answer:
        "The injection takes a moment and is generally well tolerated. It is one of the most effective non-surgical treatments for De Quervain's, and many patients get lasting relief from a single injection. A second injection or a surgical release is considered if symptoms return.",
    },
    {
      question: "What does surgery involve?",
      answer:
        "The first dorsal compartment is opened through a small incision so the tendons glide freely. It is a short outpatient procedure. The most important technical step is protecting the small radial sensory nerve branches in the area. Most patients return to desk work within one to two weeks.",
    },
  ],
  bottomCtaTitle: "Thumb-side wrist pain that will not quit?",
  bottomCtaItalic: "It is usually very treatable.",
  bottomCtaBody:
    "De Quervain's is one of the most treatable causes of wrist pain, and most patients improve without surgery. An accurate diagnosis is the first step, and it separates a tendon problem from thumb-base arthritis and nerve irritation, which are treated differently.",
  metaTitle: "De Quervain's Tenosynovitis, Steven J. Lee, MD",
  metaDescription:
    "De Quervain's tenosynovitis (thumb-side wrist pain) evaluated and treated by Dr. Steven J. Lee, MD. Splinting, corticosteroid injection, and first dorsal compartment release explained.",
  schemaDescription:
    "De Quervain's tenosynovitis is irritation of the abductor pollicis longus and extensor pollicis brevis tendons in the first dorsal compartment of the wrist, causing thumb-side wrist pain. Treatment ranges from splinting and corticosteroid injection to surgical release.",
};

// ─────────────────────────────────────────────────────────────────────────────
const dupuytrensDisease: ConditionPageContent = {
  slug: "dupuytrens-disease",
  name: "Dupuytren's Disease",
  region: "Hand & Wrist",
  headerTitle: "Dupuytren's Disease:",
  headerItalic: "when the fingers start to curl.",
  headerLede:
    "A slow thickening of the tissue under the skin of the palm that can pull one or more fingers into a bent position over time. Treatment is guided by how much the contracture limits the hand, and several options can straighten the finger without a large operation.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "Dupuytren's disease is a gradual thickening and tightening of the fascia, the layer of connective tissue just beneath the skin of the palm. Firm nodules and cords form, and over months to years those cords can contract and pull the fingers toward the palm. The ring and small fingers are most often affected.",
    "It is usually painless and progresses slowly. Many people have nodules for years without ever losing motion. The reason to treat is function: when a finger can no longer straighten, simple tasks like putting a hand in a pocket, washing a face, or shaking hands become difficult.",
  ],
  bodySections: [
    {
      heading: "Symptoms and progression",
      body: ["Dupuytren's tends to follow a recognizable course:"],
      bullets: [
        "A firm nodule in the palm, often first mistaken for a callus",
        "A thick cord that runs from the palm toward a finger",
        "Gradual loss of the ability to fully straighten the finger",
        "Difficulty laying the hand flat on a table, a useful self-test",
        "Usually no pain, though nodules can be tender early on",
      ],
    },
    {
      heading: "Who tends to get it",
      body: [
        "Dupuytren's is more common in men, in people of Northern European ancestry, and with increasing age. There is often a family history. It is associated with diabetes and with smoking and alcohol use. None of these cause it directly, but they shift the odds.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "The single most useful idea in Dupuytren's is that nodules alone do not need treatment. Dr. Lee treats the contracture, not the imaging or the lump. A nodule that is not bending a finger is watched, not operated on.",
      "When a finger has contracted enough to limit the hand, Dr. Lee matches the treatment to the pattern of disease. Many cords can be addressed with a minimally invasive needle technique or an enzyme injection that divides the cord without a formal operation. More extensive or recurrent disease is treated with surgical removal of the diseased tissue. The goal is to restore straightening and motion while protecting the nerves and arteries that run alongside the cords.",
    ],
  },
  treatmentSections: [
    {
      heading: "Observation",
      body: [
        "Nodules and mild cords that do not limit motion are monitored. A practical home test is to lay the palm flat on a table. As long as the hand lies flat, treatment can usually wait.",
      ],
    },
    {
      heading: "Needle aponeurotomy and enzyme injection",
      body: [
        "For suitable cords, the cord can be divided without open surgery. Needle aponeurotomy uses a needle to weaken and release the cord. Collagenase injection uses an enzyme to dissolve part of the cord, which is then straightened a day or two later. Both allow a fast return to activity, and both can be repeated or followed by surgery if the contracture returns.",
      ],
    },
    {
      heading: "Surgical fasciectomy",
      body: [
        "For thicker, more advanced, or recurrent disease, the diseased fascia is surgically removed. This is the most durable option and is often the right choice when the contracture is severe or involves the joints at the base of the finger. Recovery is longer than the needle or enzyme options and usually includes hand therapy.",
      ],
    },
  ],
  recoveryIntro: "Recovery depends on which treatment is used:",
  recovery: [
    { when: "Needle or enzyme", what: "Same-day or next-day return to light use. A night splint is often used for several weeks to hold the correction." },
    { when: "After fasciectomy, weeks 0 to 2", what: "Soft dressing or splint, wound care, and early finger motion to limit stiffness." },
    { when: "After fasciectomy, weeks 2 to 8", what: "Hand therapy, night splinting, and progressive return to full hand use." },
  ],
  misconceptions: {
    intro: "Common misunderstandings:",
    items: [
      { heading: "A nodule is not an emergency.", body: "Many people have palm nodules for years without losing motion. Treatment is based on contracture and function, not on the presence of a lump." },
      { heading: "It is not arthritis or a trigger finger.", body: "Dupuytren's involves the fascia under the skin, not the joints or the flexor tendon sheath. The catching of a trigger finger and the fixed bend of Dupuytren's are different problems." },
      { heading: "It can come back.", body: "Dupuytren's is a tendency in the tissue, not a single lesion. Any treatment can be followed by recurrence over years, which is normal and treatable. Starting with the least invasive effective option keeps future choices open." },
    ],
  },
  sidebarFacts: [
    { label: "Tissue involved", value: "Palmar fascia (not tendon or joint)" },
    { label: "Most affected fingers", value: "Ring and small fingers" },
    { label: "Self-test", value: "Can the palm lie flat on a table?" },
    { label: "Office options", value: "Needle aponeurotomy, collagenase injection" },
    { label: "Surgical option", value: "Fasciectomy for advanced or recurrent disease" },
    { label: "Pain", value: "Usually painless; treated for loss of motion" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Treats the contracture and function, not the nodule alone",
    "Offers in-office needle and enzyme options as well as surgery",
    "Careful dissection around the digital nerves and arteries during fasciectomy",
  ],
  related: [
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
    { name: "Ganglion Cyst", slug: "ganglion-cyst" },
    { name: "De Quervain's Tenosynovitis", slug: "de-quervains" },
    { name: "Mucous Cyst", slug: "mucous-cyst" },
  ],
  ctaCard: {
    eyebrow: "Finger starting to curl?",
    headline: "Several ways to straighten it.",
  },
  faqHeadline: "Dupuytren's disease, answered.",
  faqs: [
    {
      question: "Do I need surgery for Dupuytren's?",
      answer:
        "Not always. If a nodule or cord is not bending your finger, it can be watched. Treatment is considered when a finger can no longer straighten and the hand is limited. A common guide is whether the palm can still lie flat on a table; once it cannot, it is worth an evaluation.",
    },
    {
      question: "What is the difference between the needle, the injection, and surgery?",
      answer:
        "Needle aponeurotomy divides the cord with a needle. Collagenase injection uses an enzyme to dissolve part of the cord, which is straightened a day or two later. Both allow a quick return to activity. Surgical fasciectomy removes the diseased tissue and is the most durable option for advanced or recurrent disease, with a longer recovery and hand therapy.",
    },
    {
      question: "Will it come back after treatment?",
      answer:
        "It can. Dupuytren's is an ongoing tendency in the tissue rather than a single growth, so contractures can return over years after any treatment. Recurrence is treatable, and starting with the least invasive effective option keeps future choices open.",
    },
    {
      question: "Is Dupuytren's painful?",
      answer:
        "Usually not. The nodules can be mildly tender early on, but the main problem is loss of finger straightening rather than pain. Because it is generally painless, the decision to treat is based on how much the hand is limited.",
    },
  ],
  bottomCtaTitle: "Losing the ability to straighten a finger?",
  bottomCtaItalic: "There is usually a straightforward path back.",
  bottomCtaBody:
    "Dupuytren's is treated based on function, not on the presence of a lump. When a finger has contracted, options range from in-office needle and enzyme techniques to surgical removal of the diseased tissue. The right choice depends on the pattern and severity of the disease.",
  metaTitle: "Dupuytren's Disease, Steven J. Lee, MD",
  metaDescription:
    "Dupuytren's disease (Dupuytren's contracture) evaluated and treated by Dr. Steven J. Lee, MD. Observation, needle aponeurotomy, collagenase injection, and fasciectomy explained.",
  schemaDescription:
    "Dupuytren's disease is a progressive thickening of the palmar fascia that can contract one or more fingers toward the palm. Treatment ranges from observation to needle aponeurotomy, collagenase injection, and surgical fasciectomy.",
};

// ─────────────────────────────────────────────────────────────────────────────
const ganglionCyst: ConditionPageContent = {
  slug: "ganglion-cyst",
  name: "Ganglion Cyst",
  region: "Hand & Wrist",
  headerTitle: "Ganglion Cyst:",
  headerItalic: "the most common lump in the hand.",
  headerLede:
    "A fluid-filled cyst that arises from a joint or tendon sheath, most often on the back of the wrist. Ganglion cysts are benign, and many need no treatment at all. When they are painful or interfere with use, several options can address them.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "A ganglion cyst is a benign, fluid-filled sac that grows from the lining of a joint or a tendon sheath. The fluid is a thick, clear jelly. The most common location is the back of the wrist, followed by the palm side of the wrist, the base of a finger, and the last finger joint, where it is called a mucous cyst.",
    "Ganglion cysts are not cancer. They can appear quickly or slowly, change size, and sometimes disappear on their own. The reason to treat one is symptoms: pain, pressure on a nerve, interference with motion, or, for some patients, appearance.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["A ganglion cyst may cause:"],
      bullets: [
        "A visible or palpable lump, often on the back of the wrist",
        "A change in size with activity, sometimes shrinking with rest",
        "Aching or pressure with wrist motion or loading",
        "Tingling if the cyst presses on a nearby nerve",
        "No symptoms at all, which is common",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "Most ganglion cysts are diagnosed by examination. Shining a light through the lump, called transillumination, helps confirm that it is fluid-filled rather than solid. An ultrasound or MRI is used when the diagnosis is unclear, when the cyst is in an unusual location, or to map a cyst before surgery.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Reassurance is part of the treatment. A confirmed ganglion cyst that does not hurt and does not limit the hand can simply be watched, and a meaningful share resolve without any intervention. Dr. Lee does not operate on a lump that is not causing a problem.",
      "When a cyst is painful or interferes with use, the options are aspiration, drawing out the fluid with a needle, or surgical removal. Aspiration is quick but has a higher recurrence rate because the root of the cyst remains. Surgical excision removes the cyst along with its stalk and a small cuff of the joint capsule it arises from, which lowers the chance of recurrence. For some dorsal wrist cysts, removal can be done arthroscopically through small incisions.",
    ],
  },
  treatmentSections: [
    {
      heading: "Observation",
      body: ["A painless cyst can be left alone. Many shrink or disappear over time, and there is no harm in watching one that is not causing symptoms."],
    },
    {
      heading: "Aspiration",
      body: ["The fluid is drawn out with a needle in the office. This is simple and can relieve pressure quickly, but the cyst returns in a significant number of cases because the stalk that produces the fluid is still present. It is a reasonable first step for many patients."],
    },
    {
      heading: "Surgical excision",
      body: ["For cysts that are painful, recurrent, or interfering with use, surgical removal takes out the cyst and the stalk that connects it to the joint, along with a small portion of the capsule. Removing the root is what lowers the recurrence rate."],
    },
  ],
  recoveryIntro: "Recovery is usually straightforward:",
  recovery: [
    { when: "After aspiration", what: "Return to normal activity right away. A snug wrap is used for a day or two. Watch for the cyst to refill." },
    { when: "After excision, weeks 0 to 2", what: "Light splint or dressing. Begin gentle motion early to avoid wrist stiffness." },
    { when: "After excision, weeks 2 to 6", what: "Progressive return to full activity and strengthening as comfort allows." },
  ],
  misconceptions: {
    intro: "A few points patients appreciate:",
    items: [
      { heading: "It is not cancer.", body: "Ganglion cysts are benign. The concern is symptoms and function, not malignancy." },
      { heading: "The old remedy of hitting it is a bad idea.", body: "The folk practice of striking a ganglion with a heavy book can injure surrounding structures and does not reliably resolve the cyst. It is not recommended." },
      { heading: "Removing the root matters.", body: "Aspiration alone leaves the stalk that makes the fluid, so cysts often refill. Surgery removes the stalk and a cuff of capsule, which is why it recurs less often." },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "Benign fluid-filled cyst from a joint or tendon sheath" },
    { label: "Most common site", value: "Back of the wrist" },
    { label: "Bedside test", value: "Transillumination (light passes through fluid)" },
    { label: "Office option", value: "Aspiration (higher recurrence)" },
    { label: "Surgical option", value: "Excision of the cyst and its stalk" },
    { label: "Malignant risk", value: "None; ganglion cysts are benign" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Will reassure and watch a cyst that is not causing problems",
    "Offers aspiration and surgical excision when treatment is warranted",
    "Removes the stalk and capsule cuff to lower recurrence",
  ],
  related: [
    { name: "Mucous Cyst", slug: "mucous-cyst" },
    { name: "TFCC Tear", slug: "tfcc-tear" },
    { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
    { name: "De Quervain's Tenosynovitis", slug: "de-quervains" },
  ],
  ctaCard: {
    eyebrow: "Lump on the wrist?",
    headline: "Often harmless, always worth identifying.",
  },
  faqHeadline: "Ganglion cysts, answered.",
  faqs: [
    {
      question: "Is a ganglion cyst dangerous?",
      answer:
        "No. Ganglion cysts are benign, fluid-filled sacs, not tumors or cancer. The reason to treat one is symptoms such as pain, pressure on a nerve, or interference with motion. A cyst that does not bother you can be safely watched, and many resolve on their own.",
    },
    {
      question: "Should I have it drained or removed?",
      answer:
        "Aspiration with a needle is quick and can relieve symptoms, but the cyst often returns because the stalk that produces the fluid remains. Surgical excision removes the cyst and its stalk and has a lower recurrence rate. Many patients try aspiration first and consider surgery if the cyst returns or is very symptomatic.",
    },
    {
      question: "Why does a ganglion cyst come back?",
      answer:
        "A ganglion is fed by a stalk connected to a joint or tendon sheath. If only the fluid is removed, the stalk keeps producing more, so the cyst can refill. Surgery that removes the stalk and a small cuff of the capsule is what reduces the chance of recurrence.",
    },
    {
      question: "Can I just leave it alone?",
      answer:
        "Yes, if it is not painful and does not limit your hand. Ganglion cysts are benign and a significant number shrink or disappear over time. Watching a painless cyst is a perfectly reasonable choice.",
    },
  ],
  bottomCtaTitle: "Wondering about a lump on your wrist?",
  bottomCtaItalic: "Most are harmless, and identifying it brings peace of mind.",
  bottomCtaBody:
    "Ganglion cysts are the most common mass in the hand and wrist, and they are benign. Many need no treatment. When one is painful or limits the hand, aspiration and surgical excision are both options, and removing the stalk is what keeps a cyst from coming back.",
  metaTitle: "Ganglion Cyst, Steven J. Lee, MD",
  metaDescription:
    "Ganglion cyst of the wrist and hand evaluated and treated by Dr. Steven J. Lee, MD. Observation, aspiration, and surgical excision explained, with attention to lowering recurrence.",
  schemaDescription:
    "A ganglion cyst is a benign fluid-filled cyst arising from a joint or tendon sheath, most often on the back of the wrist. Treatment ranges from observation to aspiration and surgical excision of the cyst and its stalk.",
};

// ─────────────────────────────────────────────────────────────────────────────
const scaphoidFracture: ConditionPageContent = {
  slug: "scaphoid-fracture",
  name: "Scaphoid Fracture",
  region: "Hand & Wrist",
  headerTitle: "Scaphoid Fracture:",
  headerItalic: "the wrist fracture that hides.",
  headerLede:
    "The scaphoid is the most commonly fractured carpal bone, and its fragile blood supply makes early, accurate treatment important. A scaphoid fracture can be invisible on the first X-ray, so a wrist injury with snuffbox tenderness is treated as a fracture until proven otherwise.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "The scaphoid is a small bone on the thumb side of the wrist that links the two rows of carpal bones and is essential to normal wrist motion. It is the most commonly fractured of the carpal bones, usually from a fall onto an outstretched hand.",
    "The scaphoid has an unusual and fragile blood supply that enters from one end and runs backward through the bone. A fracture can cut off blood flow to part of the bone, which is why scaphoid fractures are prone to slow healing, non-union (failure to heal), and in some cases loss of the bone's blood supply. Prompt, correct treatment is what prevents those problems.",
  ],
  bodySections: [
    {
      heading: "Why it is easy to miss",
      body: [
        "Many scaphoid fractures do not show on the first set of X-rays. The classic sign is tenderness in the anatomic snuffbox, the small hollow at the base of the thumb. Because a missed scaphoid fracture can go on to non-union and arthritis, a wrist with this tenderness is splinted and treated as a fracture even when the initial X-ray looks normal, then re-imaged or studied with MRI or CT.",
      ],
    },
    {
      heading: "Symptoms",
      body: ["Common findings after a fall include:"],
      bullets: [
        "Pain and tenderness in the snuffbox at the base of the thumb",
        "Swelling and reduced grip on the thumb side of the wrist",
        "Pain with pinching or pushing through the wrist",
        "Symptoms that are easy to dismiss as a sprain",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee's first priority is not to miss the fracture. A wrist with snuffbox tenderness after a fall is protected and imaged appropriately, because the cost of treating a true fracture as a sprain is high.",
      "Once a fracture is confirmed, treatment depends on its location and stability. Non-displaced fractures of the waist or far end of the scaphoid can heal in a cast, though healing is slow. Fractures that are displaced, unstable, near the proximal end, or already showing signs of non-union are treated surgically with a small headless compression screw, sometimes with a bone graft to stimulate healing. The decision balances the reliability of healing against the time and immobilization a cast requires, which matters a great deal to active patients.",
    ],
  },
  treatmentSections: [
    {
      heading: "Cast treatment",
      body: ["Non-displaced, stable fractures can heal in a cast. Scaphoid bone heals slowly because of its blood supply, so casting can take two to three months or longer, and healing is confirmed on imaging before the cast comes off."],
    },
    {
      heading: "Screw fixation",
      body: ["Displaced or unstable fractures, proximal fractures, and many fractures in active patients are treated with a headless compression screw placed across the fracture, often through a small incision. Fixation stabilizes the bone, supports healing, and can shorten the period of immobilization compared with a cast."],
    },
    {
      heading: "Surgery for non-union",
      body: ["A scaphoid that has failed to heal is treated by removing the non-union tissue, restoring the bone's shape, adding a bone graft to stimulate healing, and fixing it with a screw. Addressing a non-union before arthritis develops is what protects the long-term function of the wrist."],
    },
  ],
  recoveryIntro: "Recovery depends on the fracture and the treatment:",
  recovery: [
    { when: "Cast, weeks 0 to 8 or longer", what: "Thumb-spica cast. Healing is confirmed on X-ray or CT before discontinuing immobilization." },
    { when: "After screw fixation, weeks 0 to 2", what: "Splint, wound care, and early finger and shoulder motion. Light use of the hand for daily tasks." },
    { when: "After screw fixation, weeks 2 to 12", what: "Progressive wrist motion and strengthening in hand therapy, with return to sport and heavy use guided by healing on imaging." },
  ],
  misconceptions: {
    intro: "What patients should know:",
    items: [
      { heading: "A normal first X-ray does not clear it.", body: "Scaphoid fractures are often invisible on the day of injury. Snuffbox tenderness is treated as a fracture until repeat imaging or MRI says otherwise." },
      { heading: "It is not just a sprain.", body: "A scaphoid fracture mistaken for a sprain and left untreated can fail to heal and lead to a predictable pattern of wrist arthritis. Early evaluation is what prevents that." },
      { heading: "Healing is slow by nature.", body: "Because of its blood supply, the scaphoid heals more slowly than many bones. Patience and confirmed healing on imaging are part of the process, whether treated in a cast or with a screw." },
    ],
  },
  sidebarFacts: [
    { label: "Bone involved", value: "Scaphoid (most fractured carpal bone)" },
    { label: "Classic sign", value: "Snuffbox tenderness after a fall" },
    { label: "Key risk", value: "Non-union and loss of blood supply" },
    { label: "Surgical option", value: "Headless compression screw, with bone graft when needed" },
    { label: "Imaging", value: "Repeat X-ray, MRI, or CT when the first film is normal" },
    { label: "Healing", value: "Slow; confirmed on imaging" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Treats snuffbox tenderness as a fracture until imaging proves otherwise",
    "Screw fixation for displaced, proximal, and unstable fractures",
    "Manages scaphoid non-unions with bone grafting and fixation",
  ],
  related: [
    { name: "Distal Radius Fracture", slug: "distal-radius-fracture" },
    { name: "Hand & Wrist Fractures", slug: "hand-wrist-fractures" },
    { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
    { name: "SLAC Wrist and Salvage Procedures", slug: "slac-wrist" },
  ],
  ctaCard: {
    eyebrow: "Wrist pain after a fall?",
    headline: "Snuffbox tenderness deserves a real look.",
  },
  faqHeadline: "Scaphoid fractures, answered.",
  faqs: [
    {
      question: "My wrist X-ray was normal but it still hurts. Could it be broken?",
      answer:
        "Yes. Scaphoid fractures frequently do not appear on the first X-ray. If you have tenderness in the snuffbox at the base of the thumb after a fall, it is treated as a fracture until repeat imaging, an MRI, or a CT confirms whether the bone is broken. Treating it this way prevents a missed fracture from failing to heal.",
    },
    {
      question: "Do I need surgery for a scaphoid fracture?",
      answer:
        "Not always. Non-displaced, stable fractures can heal in a cast, though healing is slow. Displaced or unstable fractures, fractures near the proximal end, and many fractures in active patients are treated with a small screw, which stabilizes the bone and can shorten immobilization. The choice depends on the fracture and your activity level.",
    },
    {
      question: "What happens if a scaphoid fracture is not treated?",
      answer:
        "Because of the bone's fragile blood supply, an untreated scaphoid fracture can fail to heal, a condition called non-union. Over time a chronic non-union leads to a predictable pattern of wrist arthritis. This is why early diagnosis and treatment matter, and why a non-union is addressed before arthritis sets in.",
    },
    {
      question: "How long does a scaphoid fracture take to heal?",
      answer:
        "Longer than many bones. Cast treatment often takes two to three months or more, with healing confirmed on imaging before the cast is removed. After screw fixation, hand use returns gradually over several weeks, with return to sport and heavy loading guided by evidence of healing rather than the calendar alone.",
    },
  ],
  bottomCtaTitle: "Wrist still sore after a fall?",
  bottomCtaItalic: "A scaphoid fracture is worth ruling out.",
  bottomCtaBody:
    "The scaphoid is the most commonly fractured carpal bone, and it can hide on the first X-ray. Snuffbox tenderness deserves a careful evaluation, because early, accurate treatment is what prevents non-union and the arthritis that can follow.",
  metaTitle: "Scaphoid Fracture, Steven J. Lee, MD",
  metaDescription:
    "Scaphoid fracture diagnosis and treatment by Dr. Steven J. Lee, MD. Casting, headless compression screw fixation, and bone grafting for non-union explained, with attention to the scaphoid's fragile blood supply.",
  schemaDescription:
    "A scaphoid fracture is a break of the scaphoid, the most commonly fractured carpal bone, which has a fragile blood supply that risks non-union. Treatment ranges from cast immobilization to headless compression screw fixation and bone grafting.",
};

// ─────────────────────────────────────────────────────────────────────────────
const slacWrist: ConditionPageContent = {
  slug: "slac-wrist",
  name: "SLAC Wrist and Salvage Procedures",
  region: "Hand & Wrist",
  headerTitle: "SLAC Wrist and Salvage Procedures:",
  headerItalic: "treating end-stage wrist arthritis.",
  headerLede:
    "SLAC wrist is a predictable pattern of wrist arthritis that develops after an untreated scapholunate ligament tear or a scaphoid non-union. When the cartilage is worn, salvage procedures can relieve pain and keep a functional, working wrist.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "SLAC stands for scapholunate advanced collapse. It is the most common pattern of wrist arthritis, and it follows a known sequence: a chronic scapholunate ligament tear changes how the wrist bones move, the cartilage wears in a predictable order, and over years the wrist becomes arthritic and painful. A similar pattern after a scaphoid non-union is called SNAC wrist (scaphoid non-union advanced collapse).",
    "By the time arthritis is established, the ligament can no longer be repaired or reconstructed. The goal shifts from restoring normal anatomy to relieving pain while preserving as much useful motion and strength as possible. These pain-relieving operations are called salvage procedures, and several reliable options exist.",
  ],
  bodySections: [
    {
      heading: "How SLAC develops",
      body: [
        "The cartilage damage in SLAC wrist progresses through recognized stages, which guides treatment. Early on, the arthritis is limited to a small area at the tip of the radius, and more of the wrist can be preserved. In later stages the arthritis spreads across the wrist, and the operations that work best change accordingly. Matching the procedure to the stage is the central decision.",
      ],
    },
    {
      heading: "Symptoms",
      body: ["Patients with SLAC or SNAC wrist usually describe:"],
      bullets: [
        "Wrist pain that has built up over months to years",
        "Stiffness and loss of wrist motion",
        "Weak grip and pain with loading the wrist",
        "Swelling on the back of the wrist",
        "A history of a wrist injury that was never fully treated",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "The first task is to confirm the diagnosis and stage the arthritis accurately, because the right salvage procedure depends on which joint surfaces are still healthy. Dr. Lee uses the examination and imaging, and sometimes arthroscopy, to map exactly where the cartilage is preserved.",
      "Dr. Lee favors the least drastic operation that reliably controls pain for a given stage. Many patients keep meaningful wrist motion with a proximal row carpectomy or a four-corner fusion. A complete wrist fusion is reserved for advanced disease or for heavy-demand patients who prioritize a strong, durable wrist over motion. For some patients a limited nerve procedure called denervation can reduce pain while preserving motion. The point is that end-stage wrist arthritis is treatable, and the choice is tailored to the patient's stage, demands, and goals.",
    ],
  },
  treatmentSections: [
    {
      heading: "Proximal row carpectomy",
      body: ["Removing the proximal row of carpal bones lets the wrist move on a new, healthier surface. It preserves useful motion and has a relatively quick recovery, and it is well suited to stages where the surfaces it relies on are still good."],
    },
    {
      heading: "Four-corner fusion",
      body: ["The scaphoid is removed and the four remaining carpal bones are fused together, which eliminates the arthritic joints while keeping motion at the main wrist joint. It is a durable option for more advanced patterns and is chosen based on which surfaces are involved."],
    },
    {
      heading: "Total wrist fusion",
      body: ["For advanced, whole-wrist arthritis or for heavy-labor patients who want maximum strength and durability, fusing the entire wrist reliably eliminates pain at the cost of wrist motion. Many patients function very well, because the hand and forearm compensate for wrist motion more than people expect."],
    },
    {
      heading: "Wrist denervation",
      body: ["Cutting selected small sensory nerves to the wrist can reduce pain while preserving motion. It does not address the arthritis itself, but for the right patient it is a lower-impact way to manage pain, sometimes as a first step."],
    },
  ],
  recoveryIntro: "Recovery varies by procedure, and hand therapy is part of all of them:",
  recovery: [
    { when: "Weeks 0 to 6", what: "Splint or cast depending on the procedure. Finger, elbow, and shoulder motion encouraged. Pain typically improves steadily." },
    { when: "Weeks 6 to 12", what: "Begin wrist motion for the motion-preserving procedures, or continue protection for a fusion, with progressive strengthening in therapy." },
    { when: "Months 3 to 6", what: "Return to work and most activities. Grip strength continues to improve, and final results settle over several months." },
  ],
  misconceptions: {
    intro: "What patients are often surprised to learn:",
    items: [
      { heading: "End-stage wrist arthritis is treatable.", body: "Even when the ligament cannot be reconstructed, salvage procedures reliably relieve pain. Being told a wrist cannot be fixed usually means reconstruction is off the table, not that nothing can be done." },
      { heading: "You do not always lose all motion.", body: "Motion-preserving options like proximal row carpectomy and four-corner fusion keep useful wrist movement. A complete fusion is only one of several choices, reserved for specific situations." },
      { heading: "A fused wrist still works well.", body: "Patients are often surprised how well they function after a wrist fusion, because the hand, fingers, and forearm rotation do more of the work than expected, with a strong and pain-free wrist." },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "Advanced wrist arthritis after an SL tear (SLAC) or scaphoid non-union (SNAC)" },
    { label: "Driven by", value: "The stage of cartilage wear" },
    { label: "Motion-preserving options", value: "Proximal row carpectomy, four-corner fusion" },
    { label: "Maximum durability", value: "Total wrist fusion" },
    { label: "Pain-focused option", value: "Wrist denervation" },
    { label: "Goal", value: "Relieve pain, keep a functional wrist" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Stages the arthritis carefully to match the procedure to the wrist",
    "Favors motion-preserving salvage when it will reliably control pain",
    "Routinely sees patients told their wrist cannot be fixed elsewhere",
  ],
  related: [
    { name: "Scapholunate Ligament Injury", slug: "scapholunate" },
    { name: "Scaphoid Fracture", slug: "scaphoid-fracture" },
    { name: "Distal Radius Fracture", slug: "distal-radius-fracture" },
    { name: "TFCC Tear", slug: "tfcc-tear" },
  ],
  ctaCard: {
    eyebrow: "Long-standing wrist arthritis?",
    headline: "Salvage procedures can relieve the pain.",
  },
  faqHeadline: "SLAC wrist and salvage surgery, answered.",
  faqs: [
    {
      question: "What is SLAC wrist?",
      answer:
        "SLAC stands for scapholunate advanced collapse, the most common pattern of wrist arthritis. It develops over years after an untreated scapholunate ligament tear changes how the wrist bones move and wears the cartilage in a predictable order. A similar pattern after a scaphoid non-union is called SNAC wrist.",
    },
    {
      question: "I was told my wrist cannot be fixed. Is that true?",
      answer:
        "Usually that means the ligament can no longer be reconstructed, not that nothing can be done. Once arthritis is established, salvage procedures reliably relieve pain. The right operation depends on which joint surfaces are still healthy, and several options preserve useful wrist motion.",
    },
    {
      question: "Will I lose all wrist motion?",
      answer:
        "Not necessarily. Motion-preserving procedures such as proximal row carpectomy and four-corner fusion keep useful movement while removing the arthritic surfaces. A complete wrist fusion, which trades motion for maximum strength and durability, is reserved for advanced arthritis or heavy-demand patients. The choice is matched to your stage and goals.",
    },
    {
      question: "How do you decide which salvage procedure I need?",
      answer:
        "The decision is based on the stage of the arthritis, specifically which cartilage surfaces are still healthy, along with your activity level and goals. Examination, imaging, and sometimes arthroscopy are used to map the wrist. The aim is the least drastic operation that will reliably control your pain.",
    },
  ],
  bottomCtaTitle: "Years of wrist pain after an old injury?",
  bottomCtaItalic: "End-stage wrist arthritis is treatable.",
  bottomCtaBody:
    "SLAC and SNAC wrist are common patterns of wrist arthritis that follow an untreated ligament tear or a scaphoid non-union. When the cartilage is worn, salvage procedures relieve pain and preserve a functional wrist. The right choice depends on the stage of the arthritis and your goals.",
  metaTitle: "SLAC Wrist and Salvage Procedures, Steven J. Lee, MD",
  metaDescription:
    "SLAC and SNAC wrist arthritis treated by Dr. Steven J. Lee, MD. Proximal row carpectomy, four-corner fusion, total wrist fusion, and wrist denervation explained, matched to the stage of arthritis.",
  schemaDescription:
    "SLAC (scapholunate advanced collapse) and SNAC (scaphoid non-union advanced collapse) describe patterns of advanced wrist arthritis. Salvage procedures include proximal row carpectomy, four-corner fusion, total wrist fusion, and wrist denervation.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Elbow additions (Dr. Lee feedback, June 2026)
const elbowByline = {
  name: "Steven J. Lee, MD",
  title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
  reviewed: "May 2026",
};

const elbowDislocation: ConditionPageContent = {
  slug: "elbow-dislocation",
  name: "Elbow Dislocation",
  region: "Elbow",
  headerTitle: "Elbow Dislocation:",
  headerItalic: "getting the joint back, and keeping it moving.",
  headerLede:
    "The elbow is one of the most commonly dislocated joints in adults. Most simple dislocations do well with prompt reduction and early protected motion. The ones with associated fractures need a plan that restores stability while avoiding the stiffness the elbow is prone to.",
  byline: elbowByline,
  overview: [
    "An elbow dislocation happens when the forearm bones are forced out of alignment with the upper arm, usually after a fall onto an outstretched hand. Dislocations are grouped as simple, no fracture, or complex, with one or more fractures of the radial head, coronoid, or olecranon.",
    "The elbow is unusually prone to stiffness after injury, so the modern approach favors restoring stability and then beginning motion early rather than long immobilization. The right balance depends on whether the joint is stable after reduction and whether fractures are present.",
  ],
  bodySections: [
    {
      heading: "Simple versus complex",
      body: [
        "A simple dislocation, with no fracture, is reduced (put back in place) and is usually stable afterward. A complex dislocation involves fractures and is more likely to be unstable, the most severe pattern is the 'terrible triad,' a dislocation with radial head and coronoid fractures, which almost always needs surgery.",
      ],
    },
    {
      heading: "Why early motion matters",
      body: [
        "Scar tissue forms quickly in the elbow, and the longer it is held still, the more it stiffens. Once the joint is stable, supervised motion in the first weeks is the single best protection against a permanently stiff elbow.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "After a dislocation is reduced, Dr. Lee tests the elbow's stability and uses imaging to look for fractures. A stable, simple dislocation is treated without surgery, with a brief period of protection followed by early guided motion.",
      "When the elbow is unstable or fractures are present, surgery restores the bony and ligament anatomy so motion can begin safely. Complex elbow trauma, including the terrible triad, is the kind of injury Dr. Lee is referred from outside hospitals.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "A simple, stable dislocation is reduced and protected briefly in a splint, then moved early under guidance. X-rays confirm the joint stays located as motion begins.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Unstable dislocations and those with fractures are treated surgically to repair or replace the radial head, fix the coronoid, and repair the torn ligaments, so the elbow is stable enough to move early. The goal is a stable joint that does not have to be immobilized into stiffness.",
      ],
    },
  ],
  recoveryIntro: "Recovery is built around protecting stability while starting motion early:",
  recovery: [
    { when: "Weeks 0 to 2", what: "Splint or hinged brace. Begin guided motion within a safe arc once the joint is confirmed stable. Hand, wrist, and shoulder motion encouraged." },
    { when: "Weeks 2 to 6", what: "Progressive range of motion in therapy, often in a hinged brace. Avoid forces that stress the healing ligaments." },
    { when: "Weeks 6 to 12", what: "Strengthening and return to activity as motion and stability allow. Some stiffness is normal and continues to improve." },
  ],
  misconceptions: {
    intro: "A few things worth knowing:",
    items: [
      { heading: "Stiffness, not re-dislocation, is the usual problem.", body: "Once a simple elbow dislocation is reduced and stable, the main risk is loss of motion from prolonged immobilization, which is why early guided motion is emphasized." },
      { heading: "A fracture changes the plan.", body: "A dislocation with fractures is a different injury than a simple one. Imaging matters, because a missed coronoid or radial head fracture can lead to a chronically unstable elbow." },
    ],
  },
  sidebarFacts: [
    { label: "Joint", value: "Elbow (ulnohumeral and radiocapitellar)" },
    { label: "Mechanism", value: "Fall onto an outstretched hand" },
    { label: "Two types", value: "Simple (no fracture) and complex (with fracture)" },
    { label: "Severe pattern", value: "Terrible triad (dislocation plus two fractures)" },
    { label: "Priority", value: "Stability first, then early motion" },
    { label: "Main risk", value: "Elbow stiffness" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Referral surgeon for complex elbow trauma, including the terrible triad",
    "Early-motion focus to protect against elbow stiffness",
    "Treats both acute dislocations and chronic instability afterward",
  ],
  related: [
    { name: "LUCL Injury", slug: "lucl-injury" },
    { name: "Radial Head Fracture", slug: "radial-head-fracture" },
    { name: "Olecranon Fracture", slug: "olecranon-fracture" },
    { name: "Biceps Tendon Rupture", slug: "biceps-rupture" },
  ],
  ctaCard: {
    eyebrow: "Dislocated elbow?",
    headline: "Stability first, motion early.",
  },
  faqHeadline: "Elbow dislocation, answered.",
  faqs: [
    {
      question: "Do I need surgery after an elbow dislocation?",
      answer:
        "Not always. A simple dislocation with no fracture is usually stable once reduced and is treated without surgery, with early guided motion. Dislocations that are unstable or come with fractures of the radial head, coronoid, or olecranon generally need surgery to restore stability so the elbow can move early.",
    },
    {
      question: "How long until my elbow moves normally again?",
      answer:
        "Motion usually begins within the first week or two once the joint is stable. Most patients regain a functional range over several weeks to a few months. Some loss of the last few degrees of motion is common, and gentle, supervised therapy is what protects against a stiff elbow.",
    },
    {
      question: "What is the 'terrible triad'?",
      answer:
        "It is an elbow dislocation combined with a radial head fracture and a coronoid fracture. It is an unstable injury that almost always needs surgery to repair or replace the radial head, fix the coronoid, and repair the ligaments. It is exactly the kind of complex elbow trauma Dr. Lee is referred to manage.",
    },
  ],
  bottomCtaTitle: "Elbow popped out, or feels unstable?",
  bottomCtaItalic: "The early plan shapes the outcome.",
  bottomCtaBody:
    "Most simple elbow dislocations recover well with prompt reduction and early motion. The injuries that come with fractures need a plan that restores stability without immobilizing the elbow into stiffness. An accurate early assessment is the first step.",
  metaTitle: "Elbow Dislocation, Steven J. Lee, MD",
  metaDescription:
    "Elbow dislocation evaluated and treated by Dr. Steven J. Lee, MD. Simple versus complex dislocations, the terrible triad, reduction, early motion, and surgery for unstable injuries explained.",
  schemaDescription:
    "An elbow dislocation is displacement of the forearm bones from the upper arm, classified as simple (no fracture) or complex (with fracture, including the terrible triad). Treatment ranges from reduction and early motion to surgical stabilization.",
};

const cubitalTunnel: ConditionPageContent = {
  slug: "cubital-tunnel",
  name: "Cubital Tunnel Syndrome",
  region: "Elbow",
  headerTitle: "Cubital Tunnel Syndrome:",
  headerItalic: "the other pinched nerve.",
  headerLede:
    "Compression of the ulnar nerve at the elbow, the 'funny bone' nerve, causing numbness in the ring and small fingers. It is the second most common nerve compression in the arm after carpal tunnel, and most cases improve without surgery.",
  byline: elbowByline,
  overview: [
    "Cubital tunnel syndrome is compression or irritation of the ulnar nerve as it passes behind the inside of the elbow. Bending the elbow stretches and tightens the space around the nerve, which is why symptoms are often worst at night or when the elbow is held flexed, like holding a phone.",
    "Most patients notice numbness and tingling in the ring and small fingers. When compression is more advanced, the hand can become weak or clumsy, and in long-standing cases the small muscles of the hand can waste. Catching it before that point matters.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "Numbness and tingling in the ring and small fingers",
        "Symptoms worse with the elbow bent or at night",
        "Aching on the inside of the elbow",
        "Weak grip, dropping things, or clumsiness in advanced cases",
        "Difficulty spreading the fingers if the nerve is severely affected",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "Diagnosis combines the history and exam with a nerve test (EMG and nerve conduction study) that measures how well the ulnar nerve is working across the elbow. The test also helps grade severity and guide whether surgery is warranted.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Most cubital tunnel cases respond to non-surgical care. Dr. Lee starts with activity changes, avoiding prolonged elbow flexion, a nighttime splint that keeps the elbow relatively straight, and an honest look at what provokes symptoms.",
      "Surgery is considered when symptoms persist despite these measures, when there is muscle weakness, or when the nerve test shows meaningful damage. The procedure releases the tight structures around the nerve, and in some cases moves the nerve to a less exposed position. Delaying surgery in the presence of weakness or wasting can limit recovery, so timing matters.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most patients start, and stay, here:"],
      bullets: [
        "A nighttime splint that keeps the elbow from bending fully",
        "Activity modification to reduce prolonged or repetitive elbow flexion",
        "Padding the inside of the elbow to limit direct pressure on the nerve",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "When conservative care fails or weakness is present, the nerve is decompressed by releasing the tight tissue over it. Depending on the situation, the nerve may be left in place (in situ decompression) or moved in front of the elbow (transposition). The choice depends on the anatomy and whether the nerve is unstable.",
      ],
    },
  ],
  recoveryIntro: "Recovery after surgery is usually straightforward:",
  recovery: [
    { when: "Day 0 to 7", what: "Soft dressing or light splint. Move the fingers immediately. Keep the wound dry until the first visit." },
    { when: "Weeks 1 to 4", what: "Begin gentle elbow motion. Numbness often improves first; strength recovers more gradually." },
    { when: "Weeks 4 to 12", what: "Progressive strengthening and return to activity. Nerve recovery can continue for months, especially in long-standing cases." },
  ],
  misconceptions: {
    intro: "Worth setting straight:",
    items: [
      { heading: "It is not carpal tunnel.", body: "Carpal tunnel affects the median nerve at the wrist (thumb-side fingers). Cubital tunnel affects the ulnar nerve at the elbow (ring and small fingers). The treatments are different, so the right diagnosis matters." },
      { heading: "Do not wait for weakness.", body: "Severe or long-standing compression can leave permanent numbness or muscle wasting even after a good operation. Persistent symptoms, especially with any weakness, are a reason to be evaluated rather than wait." },
    ],
  },
  sidebarFacts: [
    { label: "Nerve involved", value: "Ulnar nerve at the elbow" },
    { label: "Affected fingers", value: "Ring and small fingers" },
    { label: "Worse with", value: "Elbow bent, at night" },
    { label: "First-line treatment", value: "Night splinting and activity modification" },
    { label: "Surgical options", value: "In situ decompression or transposition" },
    { label: "Key point", value: "Treat before weakness or wasting sets in" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Conservative first, with surgery reserved for persistent or progressing cases",
    "Performs both in situ decompression and transposition based on the anatomy",
    "Distinguishes cubital tunnel from carpal tunnel and neck-related symptoms",
  ],
  related: [
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
    { name: "Wartenberg's Syndrome", slug: "wartenbergs-syndrome" },
    { name: "Radial Tunnel Syndrome", slug: "radial-tunnel" },
    { name: "Medial Epicondylitis", slug: "medial-epicondylitis" },
  ],
  ctaCard: {
    eyebrow: "Ring and small fingers asleep?",
    headline: "Most cubital tunnel improves without surgery.",
  },
  faqHeadline: "Cubital tunnel, answered.",
  faqs: [
    {
      question: "Why do my ring and small fingers go numb?",
      answer:
        "Those fingers are supplied by the ulnar nerve, which runs behind the inside of the elbow through the cubital tunnel. When the nerve is compressed or irritated there, often made worse by keeping the elbow bent, the result is numbness and tingling in the ring and small fingers, sometimes with aching at the elbow.",
    },
    {
      question: "Will I need surgery?",
      answer:
        "Usually not. Most cases improve with a nighttime splint that keeps the elbow from bending fully, along with activity changes. Surgery is considered when symptoms persist despite these measures, when there is weakness, or when nerve testing shows meaningful damage.",
    },
    {
      question: "What does the surgery involve?",
      answer:
        "The tight tissue compressing the ulnar nerve is released. Depending on the anatomy and whether the nerve is stable, it is either left in place or moved to the front of the elbow. Numbness often begins improving first, with strength returning more gradually over weeks to months.",
    },
  ],
  bottomCtaTitle: "Numb fingers and an achy elbow?",
  bottomCtaItalic: "It is usually very manageable.",
  bottomCtaBody:
    "Cubital tunnel syndrome is common and most cases settle with simple measures. The reason to be evaluated is to confirm the diagnosis and to treat it before weakness or muscle wasting develops, since those are harder to reverse.",
  metaTitle: "Cubital Tunnel Syndrome, Steven J. Lee, MD",
  metaDescription:
    "Cubital tunnel syndrome (ulnar nerve compression at the elbow) evaluated and treated by Dr. Steven J. Lee, MD. Splinting, activity modification, and decompression or transposition surgery explained.",
  schemaDescription:
    "Cubital tunnel syndrome is compression of the ulnar nerve at the elbow, causing numbness in the ring and small fingers. Treatment ranges from night splinting and activity modification to surgical decompression or ulnar nerve transposition.",
};

const luclInjury: ConditionPageContent = {
  slug: "lucl-injury",
  name: "LUCL Injury (Elbow Instability)",
  region: "Elbow",
  headerTitle: "LUCL Injury:",
  headerItalic: "the elbow that clicks and gives way.",
  headerLede:
    "Injury to the lateral ulnar collateral ligament, the main stabilizer on the outside of the elbow, leads to posterolateral rotatory instability. Dr. Lee reconstructs these injuries using anchor and internal-brace constructs he helped design.",
  byline: elbowByline,
  overview: [
    "The lateral ulnar collateral ligament (LUCL) is the key stabilizer on the outer side of the elbow. When it is torn or stretched, the joint can rotate and shift abnormally, a pattern called posterolateral rotatory instability (PLRI). It often follows an elbow dislocation, a fall, or, occasionally, prior surgery or repeated cortisone injections at the outer elbow.",
    "Patients describe clicking, clunking, or a feeling that the elbow is about to give way, usually when pushing up from a chair or with the arm extended and the palm up. Plain symptoms can be subtle, and the diagnosis is often missed until instability is specifically tested for.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common findings include:"],
      bullets: [
        "Clicking, clunking, or catching on the outer elbow",
        "A sense the elbow may slip or give way, especially pushing up with the palm up",
        "Pain and apprehension at the outer elbow",
        "A history of elbow dislocation or injury",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "The diagnosis rests on specific instability tests on examination, supported by MRI and sometimes an examination under anesthesia. Because routine imaging can look normal, an exam by a surgeon who tests for this pattern is what makes the diagnosis.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "The first step is recognizing the instability, which is frequently overlooked. Dr. Lee tests specifically for posterolateral rotatory instability and confirms it with imaging.",
      "When the ligament is repairable, it is reattached to the bone with suture anchors. When the tissue is insufficient, the ligament is reconstructed with a tendon graft. In both cases an internal brace tape protects the repair during healing and allows earlier motion. Dr. Lee helped design the anchor and internal-brace constructs used in this reconstruction.",
    ],
  },
  treatmentSections: [
    {
      heading: "Repair",
      body: [
        "When the ligament tissue is good, often in a more acute injury, it is reattached to the bone with suture anchors and protected with an internal brace tape, which supports the repair while it heals.",
      ],
    },
    {
      heading: "Reconstruction",
      body: [
        "When the ligament cannot be repaired, it is reconstructed with a tendon graft, again augmented with an internal brace. The construct restores the outer-side stability the elbow depends on.",
      ],
    },
  ],
  recoveryIntro: "Recovery protects the reconstruction while restoring motion:",
  recovery: [
    { when: "Weeks 0 to 2", what: "Hinged brace, protecting the repaired ligament. Begin guided motion within a safe arc. Hand and shoulder motion encouraged." },
    { when: "Weeks 2 to 6", what: "Progressive motion in the brace. Avoid positions that stress the repair." },
    { when: "Weeks 6 to 16", what: "Strengthening and a graded return to activity and sport, guided by stability and strength." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "It is often missed.", body: "Posterolateral rotatory instability can be subtle and is frequently overlooked, sometimes mislabeled as tennis elbow. A targeted instability exam is what uncovers it." },
      { heading: "Repeated cortisone at the outer elbow can contribute.", body: "Multiple steroid injections into the outer elbow can weaken the ligament. This is one reason injections for outer-elbow pain are used judiciously." },
    ],
  },
  sidebarFacts: [
    { label: "Ligament involved", value: "Lateral ulnar collateral ligament (LUCL)" },
    { label: "Result", value: "Posterolateral rotatory instability (PLRI)" },
    { label: "Common cause", value: "Elbow dislocation or injury" },
    { label: "Surgical options", value: "Repair with internal brace, or tendon-graft reconstruction" },
    { label: "Implants used", value: "Anchor and internal-brace constructs Dr. Lee helped design" },
    { label: "Key step", value: "Recognizing the instability on exam" },
  ],
  whyDrLee: [
    "Co-designer of the anchor and internal-brace system used in reconstruction",
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Tests specifically for posterolateral rotatory instability, which is often missed",
    "Treats instability after elbow dislocation and failed prior treatment",
  ],
  related: [
    { name: "Elbow Dislocation", slug: "elbow-dislocation" },
    { name: "UCL Tear (Tommy John)", slug: "ucl-reconstruction" },
    { name: "Radial Head Fracture", slug: "radial-head-fracture" },
    { name: "Lateral Epicondylitis", slug: "lateral-epicondylitis" },
  ],
  ctaCard: {
    eyebrow: "Elbow clicking or giving way?",
    headline: "Instability is treatable once it is found.",
  },
  faqHeadline: "LUCL injury and elbow instability, answered.",
  faqs: [
    {
      question: "What does a LUCL injury feel like?",
      answer:
        "Most people notice clicking, clunking, or a feeling that the elbow might slip or give way, often when pushing up from a chair with the palm turned up, or with the arm extended. There is usually pain and apprehension on the outer side of the elbow, frequently after a previous dislocation or injury.",
    },
    {
      question: "Why was it missed before?",
      answer:
        "Posterolateral rotatory instability can be subtle, and routine X-rays often look normal. It is diagnosed with specific instability tests on examination, supported by MRI. An evaluation by a surgeon who tests for this pattern is what typically makes the diagnosis.",
    },
    {
      question: "How is it fixed?",
      answer:
        "If the ligament tissue is good, it is reattached to the bone with suture anchors and protected with an internal brace tape. If the tissue is insufficient, it is reconstructed with a tendon graft, also augmented with an internal brace. Dr. Lee helped design the anchor and internal-brace constructs used for this reconstruction.",
    },
  ],
  bottomCtaTitle: "Elbow that clicks, catches, or feels unstable?",
  bottomCtaItalic: "The fix starts with the right diagnosis.",
  bottomCtaBody:
    "Lateral elbow instability is treatable, but it has to be recognized first. Dr. Lee tests specifically for posterolateral rotatory instability and reconstructs it with anchor and internal-brace techniques he helped design.",
  metaTitle: "LUCL Injury and Elbow Instability, Steven J. Lee, MD",
  metaDescription:
    "LUCL injury and posterolateral rotatory instability of the elbow, treated by Dr. Steven J. Lee, MD, co-designer of the anchor and internal-brace constructs used in reconstruction. Diagnosis, repair, and reconstruction explained.",
  schemaDescription:
    "A LUCL (lateral ulnar collateral ligament) injury causes posterolateral rotatory instability of the elbow. Treatment is ligament repair with an internal brace or tendon-graft reconstruction.",
};

const tricepsTear: ConditionPageContent = {
  slug: "triceps-tear",
  name: "Triceps Tendon Tear",
  region: "Elbow",
  headerTitle: "Triceps Tendon Tear:",
  headerItalic: "the tendon that straightens the elbow.",
  headerLede:
    "A tear of the triceps tendon where it attaches to the back of the elbow weakens the ability to straighten the arm. Complete tears are usually repaired surgically, and the results are reliable when treated promptly.",
  byline: elbowByline,
  overview: [
    "The triceps tendon attaches the triceps muscle to the olecranon, the bony point of the elbow, and it is what straightens the elbow against resistance. A tear most often happens from a fall onto an outstretched hand or a sudden forceful load, like a missed bench-press lockout.",
    "Triceps tendon ruptures are relatively uncommon, which is part of why they are sometimes missed. A complete tear leaves a gap and noticeable weakness with pushing, while partial tears may keep some strength. Distinguishing the two guides treatment.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common findings include:"],
      bullets: [
        "Pain and swelling at the back of the elbow after a fall or forceful effort",
        "Weakness straightening the elbow, especially pushing or pressing",
        "A palpable gap or divot above the elbow in complete tears",
        "Bruising along the back of the arm",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "The exam tests the ability to actively straighten the elbow against gravity and resistance. X-rays may show a small fleck of bone pulled off with the tendon, and MRI confirms whether the tear is partial or complete and how much tendon is involved.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "The key decision is whether the tear is complete. A complete rupture loses meaningful pushing strength and, in active patients, is repaired surgically, ideally sooner rather than later, because a retracted tendon is harder to bring back.",
      "Dr. Lee reattaches the tendon to the bone with a secure suture-anchor and transosseous construct that allows early, protected motion. Partial tears in lower-demand patients can often be managed without surgery, with bracing and a careful rehabilitation program.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Low-grade partial tears, particularly in lower-demand patients who retain good extension strength, can be treated with a period of bracing followed by progressive rehabilitation.",
      ],
    },
    {
      heading: "Surgical repair",
      body: [
        "Complete tears, and partial tears with meaningful weakness in active patients, are repaired by reattaching the tendon to the olecranon with a strong suture-anchor and transosseous construct. Secure fixation is what allows protected motion to start early and limits stiffness.",
      ],
    },
  ],
  recoveryIntro: "Recovery balances protecting the repair with restoring motion:",
  recovery: [
    { when: "Weeks 0 to 2", what: "Splint or hinged brace with the elbow relatively straight to protect the repair. Hand and shoulder motion encouraged." },
    { when: "Weeks 2 to 6", what: "Progressive guided motion in a brace, avoiding active straightening against resistance." },
    { when: "Weeks 6 to 16", what: "Strengthening and a graded return to pushing, pressing, and sport as healing allows." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "It is easy to underestimate.", body: "Because triceps ruptures are uncommon, they can be mistaken for a bruise or sprain. Persistent weakness straightening the elbow after an injury deserves an evaluation." },
      { heading: "Timing helps the repair.", body: "A complete tear repaired promptly is more straightforward than one addressed months later, after the tendon has retracted and scarred." },
    ],
  },
  sidebarFacts: [
    { label: "Tendon involved", value: "Triceps, at the olecranon" },
    { label: "Function lost", value: "Straightening the elbow against resistance" },
    { label: "Common cause", value: "Fall onto an outstretched hand or forceful load" },
    { label: "Surgical option", value: "Suture-anchor and transosseous reattachment" },
    { label: "Timing", value: "Earlier repair is more straightforward" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Secure reattachment that allows early protected motion",
    "Distinguishes partial from complete tears to guide treatment",
    "Treats both acute ruptures and neglected, retracted tears",
  ],
  related: [
    { name: "Biceps Tendon Rupture", slug: "biceps-rupture" },
    { name: "Olecranon Fracture", slug: "olecranon-fracture" },
    { name: "Elbow Dislocation", slug: "elbow-dislocation" },
    { name: "Lateral Epicondylitis", slug: "lateral-epicondylitis" },
  ],
  ctaCard: {
    eyebrow: "Weak straightening the elbow?",
    headline: "A triceps tear is worth ruling out.",
  },
  faqHeadline: "Triceps tendon tears, answered.",
  faqs: [
    {
      question: "How do I know if I tore my triceps?",
      answer:
        "The classic signs after a fall or forceful effort are pain and swelling at the back of the elbow, weakness straightening the arm against resistance, and sometimes a gap you can feel above the elbow. Weakness with pushing that does not recover deserves an evaluation, since complete tears are best treated promptly.",
    },
    {
      question: "Do all triceps tears need surgery?",
      answer:
        "No. Low-grade partial tears in lower-demand patients who keep good strength can be managed with bracing and rehabilitation. Complete tears, and partial tears with meaningful weakness in active patients, are usually repaired surgically by reattaching the tendon to the bone.",
    },
    {
      question: "How long is recovery after repair?",
      answer:
        "The elbow is protected early to let the tendon heal, with guided motion beginning in the first weeks and active straightening against resistance added later. Most patients work back to strengthening by around six weeks and a graded return to full activity over the following months.",
    },
  ],
  bottomCtaTitle: "Hurt the back of your elbow and lost pushing strength?",
  bottomCtaItalic: "Prompt evaluation protects the result.",
  bottomCtaBody:
    "A complete triceps tear is repaired most reliably when it is treated promptly, before the tendon retracts. If you have lasting weakness straightening the elbow after an injury, it is worth an evaluation.",
  metaTitle: "Triceps Tendon Tear, Steven J. Lee, MD",
  metaDescription:
    "Triceps tendon tear at the elbow evaluated and treated by Dr. Steven J. Lee, MD. Partial versus complete tears, bracing, and surgical reattachment explained.",
  schemaDescription:
    "A triceps tendon tear is a partial or complete rupture of the triceps at its attachment to the olecranon, weakening elbow extension. Treatment ranges from bracing to surgical reattachment.",
};

const lateralEpicondylitis: ConditionPageContent = {
  slug: "lateral-epicondylitis",
  name: "Lateral Epicondylitis (Tennis Elbow)",
  region: "Elbow",
  headerTitle: "Tennis Elbow:",
  headerItalic: "outer elbow pain, and how it actually heals.",
  headerLede:
    "Lateral epicondylitis, or tennis elbow, is pain at the outer elbow from wear in the tendon that extends the wrist. The large majority improve without surgery, though it can be slow, and most cases have nothing to do with tennis.",
  byline: elbowByline,
  overview: [
    "Tennis elbow is a wear-and-repair problem of the tendon that attaches the wrist-extensor muscles to the outer elbow, most often the ECRB tendon. Despite the name 'itis,' it is less an active inflammation than a tendon that has degenerated and failed to heal, which is why it can be stubborn.",
    "Pain sits at the bony point on the outside of the elbow and flares with gripping, lifting, or shaking hands. It is common in people who do repetitive gripping at work or in sport, and most people who have it have never played tennis.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "Pain and tenderness over the bony point on the outer elbow",
        "Pain with gripping, lifting, or turning a doorknob or jar",
        "A weak or painful grip",
        "Symptoms that come on gradually rather than from a single injury",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "It is largely a clinical diagnosis based on tenderness over the outer elbow and pain reproduced by resisted wrist and finger extension. Imaging is reserved for cases that do not improve as expected or when another problem, such as outer-elbow instability or nerve irritation, is suspected.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Tennis elbow is treated patiently and conservatively, because the large majority resolve with time and the right rehabilitation. Dr. Lee emphasizes activity modification, a structured eccentric exercise program, and a counterforce brace, the measures with the best track record.",
      "Corticosteroid injections can calm a bad flare but are used sparingly, because repeated steroid at the outer elbow can weaken the tendon and the supporting ligament. For cases that stall, PRP is an option Dr. Lee discusses, and surgery to remove the degenerated tendon tissue is reserved for the small minority who do not improve after a genuine, extended course of conservative care.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most patients improve with a combination of:"],
      bullets: [
        "Activity modification to reduce provocative gripping",
        "A structured eccentric strengthening program with a therapist",
        "A counterforce brace or wrist splint to offload the tendon",
        "A corticosteroid injection used sparingly for a significant flare",
      ],
    },
    {
      heading: "When conservative care stalls",
      body: [
        "PRP (platelet-rich plasma) is sometimes used for tendons that are not healing. Surgery, which removes the degenerated portion of the tendon and stimulates healing, is reserved for the small minority with pain that persists after an extended, genuine trial of conservative treatment.",
      ],
    },
  ],
  recoveryIntro: "Recovery is usually measured in weeks to months, not days:",
  recovery: [
    { when: "Weeks 0 to 6", what: "Activity modification, bracing, and a structured exercise program. Expect gradual, not immediate, improvement." },
    { when: "Weeks 6 to 12", what: "Continued strengthening and a graded return to gripping activities and sport." },
    { when: "After surgery (rare)", what: "Protected motion early, then progressive strengthening over two to three months, reserved for the small group who needed it." },
  ],
  misconceptions: {
    intro: "Worth setting straight:",
    items: [
      { heading: "It is not really inflammation.", body: "Tennis elbow is mostly tendon degeneration rather than active inflammation, which is why rest alone often is not enough and a loading program works better." },
      { heading: "Repeated cortisone is not the answer.", body: "A single injection can help a flare, but repeated steroid injections at the outer elbow can weaken the tendon and ligament, so they are used sparingly." },
      { heading: "Most cases never need surgery.", body: "The large majority of tennis elbow resolves with patience and rehabilitation. Surgery is for the small minority who do not improve after an extended trial." },
    ],
  },
  sidebarFacts: [
    { label: "Tendon involved", value: "Common wrist extensors (ECRB) at the outer elbow" },
    { label: "Nature", value: "Tendon degeneration more than inflammation" },
    { label: "First-line treatment", value: "Activity modification, eccentric exercise, bracing" },
    { label: "Injections", value: "Corticosteroid used sparingly; PRP an option" },
    { label: "Surgery", value: "Rare, for cases that fail extended conservative care" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Conservative, structured rehabilitation first, the approach with the best track record",
    "Uses steroid injections judiciously to protect the tendon and ligament",
    "Among the first surgeons in NYC to use PRP for upper-extremity tendon problems",
  ],
  related: [
    { name: "Medial Epicondylitis", slug: "medial-epicondylitis" },
    { name: "Radial Tunnel Syndrome", slug: "radial-tunnel" },
    { name: "LUCL Injury", slug: "lucl-injury" },
    { name: "PRP (Platelet-Rich Plasma) Injections", slug: "prp-injections" },
  ],
  ctaCard: {
    eyebrow: "Outer elbow pain with gripping?",
    headline: "Most tennis elbow heals without surgery.",
  },
  faqHeadline: "Tennis elbow, answered.",
  faqs: [
    {
      question: "Do I have to play tennis to get tennis elbow?",
      answer:
        "No. Most people with tennis elbow have never played tennis. It comes from repetitive gripping and wrist use at work, at home, or in sport, which wears the tendon that attaches to the outer elbow. The name refers to a common cause, not the only one.",
    },
    {
      question: "Will I need surgery?",
      answer:
        "Almost certainly not. The large majority of cases improve with activity modification, a structured eccentric exercise program, and a counterforce brace, though it can take weeks to months. Surgery is reserved for the small minority whose pain persists after an extended, genuine trial of conservative care.",
    },
    {
      question: "Are cortisone shots a good idea?",
      answer:
        "A single injection can settle a significant flare, but repeated steroid injections at the outer elbow can weaken the tendon and the nearby ligament, so they are used sparingly. For tendons that are not healing, PRP is an option to discuss, and a loading exercise program remains the foundation.",
    },
  ],
  bottomCtaTitle: "Outer elbow pain that will not settle?",
  bottomCtaItalic: "Patience and the right program usually win.",
  bottomCtaBody:
    "Tennis elbow can be stubborn, but the large majority resolve with activity modification, a structured exercise program, and bracing. Injections are used carefully, and surgery is rarely needed. An accurate diagnosis also rules out the conditions that mimic it.",
  metaTitle: "Lateral Epicondylitis (Tennis Elbow), Steven J. Lee, MD",
  metaDescription:
    "Tennis elbow (lateral epicondylitis) evaluated and treated by Dr. Steven J. Lee, MD. Activity modification, eccentric exercise, bracing, injections, PRP, and when surgery is considered, explained.",
  schemaDescription:
    "Lateral epicondylitis (tennis elbow) is degeneration of the common extensor tendon at the outer elbow, causing pain with gripping. Treatment is mainly activity modification, exercise, and bracing, with injections or surgery in selected cases.",
};

const medialEpicondylitis: ConditionPageContent = {
  slug: "medial-epicondylitis",
  name: "Medial Epicondylitis (Golfer's Elbow)",
  region: "Elbow",
  headerTitle: "Golfer's Elbow:",
  headerItalic: "inner elbow pain, treated patiently.",
  headerLede:
    "Medial epicondylitis, or golfer's elbow, is pain at the inner elbow from wear in the tendons that flex the wrist. Like tennis elbow, the large majority improve without surgery, with attention to the nearby ulnar nerve.",
  byline: elbowByline,
  overview: [
    "Golfer's elbow is a wear-and-repair problem of the flexor-pronator tendons where they attach to the inner side of the elbow. It is the inner-elbow counterpart to tennis elbow and, like it, is more tendon degeneration than active inflammation.",
    "Pain sits over the bony bump on the inside of the elbow and flares with gripping, lifting, and wrist flexion. Because the ulnar nerve runs just behind this area, some patients also have tingling in the ring and small fingers, which is checked for as part of the evaluation.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "Pain and tenderness over the bony bump on the inner elbow",
        "Pain with gripping, lifting, or flexing the wrist",
        "A weaker or painful grip",
        "Sometimes tingling in the ring and small fingers if the ulnar nerve is irritated",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "The diagnosis is clinical, based on tenderness over the inner elbow and pain with resisted wrist flexion and forearm rotation. Because the ulnar nerve is nearby, the exam also screens for cubital tunnel symptoms, which can coexist and change the plan.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "As with tennis elbow, golfer's elbow is treated patiently and conservatively, because the large majority resolve with time and a structured rehabilitation program. Dr. Lee emphasizes activity modification, eccentric strengthening, and bracing.",
      "Injections are used carefully because of the ulnar nerve's proximity. PRP is an option for tendons that are not healing, and surgery to address the degenerated tendon, sometimes alongside an ulnar nerve procedure, is reserved for the small minority who do not improve after an extended trial of conservative care.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most patients improve with:"],
      bullets: [
        "Activity modification to reduce provocative gripping and wrist flexion",
        "A structured eccentric strengthening program",
        "A counterforce brace or wrist splint",
        "A corticosteroid injection used sparingly, with care around the ulnar nerve",
      ],
    },
    {
      heading: "When conservative care stalls",
      body: [
        "PRP is sometimes used for a tendon that is not healing. Surgery, reserved for the small minority who do not improve after an extended trial, addresses the degenerated tendon and, when the ulnar nerve is involved, decompresses it at the same time.",
      ],
    },
  ],
  recoveryIntro: "Recovery is usually measured in weeks to months:",
  recovery: [
    { when: "Weeks 0 to 6", what: "Activity modification, bracing, and a structured exercise program. Improvement is gradual." },
    { when: "Weeks 6 to 12", what: "Progressive strengthening and a graded return to gripping activities and sport." },
    { when: "After surgery (rare)", what: "Protected motion early, then strengthening over two to three months, for the small group who needed it." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Check the nerve, not just the tendon.", body: "The ulnar nerve runs right behind the inner elbow, so tingling in the ring and small fingers may mean cubital tunnel is part of the picture, which changes treatment." },
      { heading: "It is mostly degeneration.", body: "Like tennis elbow, golfer's elbow is more a worn tendon than active inflammation, so a loading exercise program tends to work better than rest alone." },
    ],
  },
  sidebarFacts: [
    { label: "Tendons involved", value: "Flexor-pronator group at the inner elbow" },
    { label: "Nearby structure", value: "Ulnar nerve (check for cubital tunnel)" },
    { label: "First-line treatment", value: "Activity modification, eccentric exercise, bracing" },
    { label: "Injections", value: "Used carefully near the nerve; PRP an option" },
    { label: "Surgery", value: "Rare, for cases that fail extended conservative care" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Conservative, structured rehabilitation first",
    "Screens for ulnar nerve involvement that can accompany inner-elbow pain",
    "Among the first surgeons in NYC to use PRP for upper-extremity tendon problems",
  ],
  related: [
    { name: "Lateral Epicondylitis", slug: "lateral-epicondylitis" },
    { name: "Cubital Tunnel Syndrome", slug: "cubital-tunnel" },
    { name: "UCL Tear (Tommy John)", slug: "ucl-reconstruction" },
    { name: "PRP (Platelet-Rich Plasma) Injections", slug: "prp-injections" },
  ],
  ctaCard: {
    eyebrow: "Inner elbow pain with gripping?",
    headline: "Most golfer's elbow heals without surgery.",
  },
  faqHeadline: "Golfer's elbow, answered.",
  faqs: [
    {
      question: "What is the difference between golfer's elbow and tennis elbow?",
      answer:
        "They are the same kind of problem on opposite sides of the elbow. Golfer's elbow (medial epicondylitis) affects the flexor tendons on the inner side; tennis elbow (lateral epicondylitis) affects the extensor tendons on the outer side. Golfer's elbow also sits next to the ulnar nerve, so nerve symptoms are checked for.",
    },
    {
      question: "Will I need surgery?",
      answer:
        "Almost certainly not. The large majority improve with activity modification, a structured eccentric exercise program, and bracing, though it can take weeks to months. Surgery is reserved for the small minority whose pain persists after an extended, genuine trial of conservative care.",
    },
    {
      question: "Why do my ring and small fingers tingle with this?",
      answer:
        "The ulnar nerve runs just behind the inner elbow. When the area is irritated, the nerve can be too, producing tingling in the ring and small fingers. If that is present, cubital tunnel syndrome may be part of the picture, which is evaluated and addressed as part of the plan.",
    },
  ],
  bottomCtaTitle: "Inner elbow pain that lingers?",
  bottomCtaItalic: "A patient, structured approach usually works.",
  bottomCtaBody:
    "Golfer's elbow is stubborn but usually resolves with activity modification, a structured exercise program, and bracing. Injections are used carefully near the ulnar nerve, and surgery is rarely needed. The evaluation also checks the nerve, which can be part of the problem.",
  metaTitle: "Medial Epicondylitis (Golfer's Elbow), Steven J. Lee, MD",
  metaDescription:
    "Golfer's elbow (medial epicondylitis) evaluated and treated by Dr. Steven J. Lee, MD. Activity modification, eccentric exercise, bracing, injections, PRP, and the role of the ulnar nerve explained.",
  schemaDescription:
    "Medial epicondylitis (golfer's elbow) is degeneration of the flexor-pronator tendons at the inner elbow, causing pain with gripping. Treatment is mainly activity modification, exercise, and bracing, with attention to the nearby ulnar nerve.",
};

const radialTunnel: ConditionPageContent = {
  slug: "radial-tunnel",
  name: "Radial Tunnel Syndrome",
  region: "Elbow",
  headerTitle: "Radial Tunnel Syndrome:",
  headerItalic: "the deep forearm ache mistaken for tennis elbow.",
  headerLede:
    "Compression of the radial nerve in the forearm just past the elbow causes a deep, aching pain that is often confused with tennis elbow. Most cases improve without surgery once the diagnosis is made.",
  byline: elbowByline,
  overview: [
    "Radial tunnel syndrome is compression of the posterior interosseous nerve, a branch of the radial nerve, as it passes through the muscles of the upper forearm. The result is a deep, aching pain on the outer forearm, typically a few centimeters below the bony point of the elbow.",
    "Because the pain sits near the outer elbow, it is frequently mistaken for tennis elbow, and the two can coexist. The distinction matters, because the treatments differ. Unlike a related condition, radial tunnel syndrome is usually a pain problem without true muscle weakness.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "A deep, aching pain on the outer forearm, below the elbow",
        "Tenderness over the muscle a few centimeters past the bony outer elbow, not directly on it",
        "Pain worse with repetitive twisting of the forearm and gripping",
        "Usually no true weakness, which distinguishes it from a related nerve problem",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "Radial tunnel syndrome is a clinical diagnosis. The point of maximum tenderness is over the forearm muscle rather than the bony outer elbow, and specific provocative maneuvers reproduce the pain. A diagnostic nerve block can help confirm it, and nerve testing is often normal, which is part of why it is challenging to diagnose.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "The first task is to separate radial tunnel syndrome from tennis elbow, since they overlap and are treated differently. Dr. Lee localizes the tenderness carefully and uses provocative tests, and sometimes a diagnostic injection, to confirm the source.",
      "Most patients improve with activity modification, splinting, and time. When pain persists despite a genuine course of conservative care, surgical decompression releases the structures compressing the nerve. Because the diagnosis can be subtle, careful selection is what makes surgery worthwhile.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most patients improve with:"],
      bullets: [
        "Activity modification to reduce repetitive forearm rotation and gripping",
        "A wrist or forearm splint to rest the area",
        "Anti-inflammatory measures and a structured therapy program",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "When pain persists despite an adequate trial of conservative care, and the diagnosis is confirmed, the nerve is decompressed by releasing the tight structures of the radial tunnel. Careful patient selection is essential because the diagnosis can be subtle.",
      ],
    },
  ],
  recoveryIntro: "Recovery depends on the treatment:",
  recovery: [
    { when: "Non-surgical", what: "Activity modification and splinting over several weeks, with gradual improvement." },
    { when: "After surgery, weeks 0 to 2", what: "Soft dressing and a light splint. Early gentle motion of the hand and wrist." },
    { when: "After surgery, weeks 2 to 8", what: "Progressive motion and strengthening, with a graded return to forearm-intensive activity." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "It is not the same as tennis elbow.", body: "The tenderness in radial tunnel syndrome sits over the forearm muscle, not directly on the bony outer elbow. The two can coexist, but treating one will not fix the other." },
      { heading: "Normal tests do not rule it out.", body: "Nerve conduction studies are often normal in radial tunnel syndrome, which is part of why it is challenging to diagnose. The diagnosis rests on a careful exam and the response to a diagnostic block." },
    ],
  },
  sidebarFacts: [
    { label: "Nerve involved", value: "Posterior interosseous (radial) nerve in the forearm" },
    { label: "Pain location", value: "Outer forearm, below the elbow" },
    { label: "Often confused with", value: "Tennis elbow (they can coexist)" },
    { label: "Weakness", value: "Usually absent (distinguishes it from PIN syndrome)" },
    { label: "First-line treatment", value: "Activity modification and splinting" },
    { label: "Surgery", value: "Decompression for confirmed, persistent cases" },
  ],
  whyDrLee: [
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Experienced with peripheral-nerve compressions of the upper extremity",
    "Separates radial tunnel syndrome from tennis elbow, which often coexist",
    "Conservative first, with surgery reserved for confirmed, persistent cases",
  ],
  related: [
    { name: "Lateral Epicondylitis", slug: "lateral-epicondylitis" },
    { name: "Wartenberg's Syndrome", slug: "wartenbergs-syndrome" },
    { name: "Cubital Tunnel Syndrome", slug: "cubital-tunnel" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel" },
  ],
  ctaCard: {
    eyebrow: "Deep forearm ache near the elbow?",
    headline: "It may not be tennis elbow.",
  },
  faqHeadline: "Radial tunnel syndrome, answered.",
  faqs: [
    {
      question: "How is this different from tennis elbow?",
      answer:
        "Both cause outer-elbow-area pain, but the tender spot is different. In tennis elbow it is directly over the bony point of the outer elbow; in radial tunnel syndrome it is over the forearm muscle a few centimeters below it. The two can occur together, and they are treated differently, so localizing the pain carefully matters.",
    },
    {
      question: "Why were my nerve tests normal?",
      answer:
        "Nerve conduction studies are frequently normal in radial tunnel syndrome, because the problem is more a pain syndrome than a measurable loss of nerve function. The diagnosis rests on a careful examination, provocative tests, and sometimes the response to a diagnostic injection.",
    },
    {
      question: "Will I need surgery?",
      answer:
        "Most patients improve with activity modification, splinting, and time. Surgery, which decompresses the nerve, is reserved for confirmed cases whose pain persists despite a genuine course of conservative care. Careful patient selection is what makes it worthwhile.",
    },
  ],
  bottomCtaTitle: "Forearm pain that was called tennis elbow but is not improving?",
  bottomCtaItalic: "An accurate diagnosis changes the plan.",
  bottomCtaBody:
    "Radial tunnel syndrome is easy to confuse with tennis elbow, and the two can coexist. Localizing the pain and confirming the nerve as the source is what directs the right treatment. Most cases improve without surgery.",
  metaTitle: "Radial Tunnel Syndrome, Steven J. Lee, MD",
  metaDescription:
    "Radial tunnel syndrome evaluated and treated by Dr. Steven J. Lee, MD. How it differs from tennis elbow, why nerve tests can be normal, and conservative versus surgical treatment explained.",
  schemaDescription:
    "Radial tunnel syndrome is compression of the posterior interosseous (radial) nerve in the forearm, causing a deep aching pain often confused with tennis elbow. Treatment ranges from activity modification and splinting to surgical decompression.",
};

const radialHeadFracture: ConditionPageContent = {
  slug: "radial-head-fracture",
  name: "Radial Head Fracture",
  region: "Elbow",
  headerTitle: "Radial Head Fracture:",
  headerItalic: "the common elbow fracture, and early motion.",
  headerLede:
    "The radial head is the most commonly fractured bone in the adult elbow, usually after a fall onto an outstretched hand. Many are stable and treated with early motion; displaced fractures are fixed or replaced, using elbow hardware Dr. Lee helped design.",
  byline: elbowByline,
  overview: [
    "The radial head is part of the elbow joint on the thumb side, and it helps the forearm rotate and the elbow stay stable. It is the most commonly fractured bone in the adult elbow, almost always from a fall onto an outstretched hand.",
    "Radial head fractures are graded by how displaced and fragmented they are. Just as important is what comes with them, because these fractures can accompany elbow dislocations, ligament injuries, or, less commonly, a forearm injury that destabilizes the wrist. A careful look for associated injuries shapes the treatment.",
  ],
  bodySections: [
    {
      heading: "Why associated injuries matter",
      body: [
        "An isolated, non-displaced radial head fracture is a very different injury than one that comes with a dislocation or ligament tear. The radial head is a key stabilizer, so when it is fractured as part of a larger injury, restoring or replacing it is part of keeping the elbow stable.",
      ],
    },
    {
      heading: "Symptoms",
      body: ["Common findings after a fall include:"],
      bullets: [
        "Pain and swelling on the outer side of the elbow",
        "Pain and limitation turning the palm up and down",
        "Tenderness directly over the radial head",
        "A sense of blocking or catching with forearm rotation in displaced fractures",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee's first priority is to see the whole injury, not just the fracture, by checking the elbow for stability and looking for ligament injuries and forearm involvement. Many radial head fractures are stable and do beautifully with early motion rather than prolonged immobilization.",
      "When a fracture is displaced and blocks motion, it is fixed with small implants, or, when it is too fragmented to reconstruct, replaced. Dr. Lee uses fixation hardware, including elbow plating systems he helped design, and emphasizes starting motion early to protect against the stiffness the elbow is prone to.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Stable, minimally displaced fractures are treated with a brief period of support followed by early motion. Starting to move the elbow within the first week, once it is safe, is the best protection against stiffness.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Displaced fractures that block rotation are fixed with small screws or plates. When the radial head is too fragmented to reconstruct, or instability requires it, it is replaced with an implant. Dr. Lee uses elbow fixation hardware he helped design and prioritizes early, protected motion afterward.",
      ],
    },
  ],
  recoveryIntro: "Recovery centers on early, protected motion:",
  recovery: [
    { when: "Weeks 0 to 2", what: "Brief support, then begin gentle motion early once it is safe. Hand, wrist, and shoulder motion encouraged." },
    { when: "Weeks 2 to 6", what: "Progressive range of motion, including forearm rotation, in therapy." },
    { when: "Weeks 6 to 12", what: "Strengthening and a graded return to activity. Some loss of the last few degrees of motion is common." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Long immobilization causes stiffness.", body: "The old instinct to keep a fractured elbow still for weeks tends to backfire. For stable radial head fractures, early motion is what protects function." },
      { heading: "Look beyond the fracture.", body: "A radial head fracture can be the visible part of a larger injury that includes a dislocation or ligament tear. Checking elbow stability and the forearm changes the plan." },
    ],
  },
  sidebarFacts: [
    { label: "Bone involved", value: "Radial head (most fractured bone in the adult elbow)" },
    { label: "Mechanism", value: "Fall onto an outstretched hand" },
    { label: "Priority", value: "Check elbow stability and associated injuries" },
    { label: "Surgical options", value: "Screw or plate fixation, or radial head replacement" },
    { label: "Hardware", value: "Elbow fixation systems Dr. Lee helped design" },
    { label: "Recovery focus", value: "Early protected motion" },
  ],
  whyDrLee: [
    "Helped design elbow fixation systems used in these repairs",
    "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
    "Evaluates the whole injury, including ligaments and the forearm",
    "Early-motion focus to protect against elbow stiffness",
  ],
  related: [
    { name: "Elbow Dislocation", slug: "elbow-dislocation" },
    { name: "Olecranon Fracture", slug: "olecranon-fracture" },
    { name: "LUCL Injury", slug: "lucl-injury" },
    { name: "Biceps Tendon Rupture", slug: "biceps-rupture" },
  ],
  ctaCard: {
    eyebrow: "Outer elbow pain after a fall?",
    headline: "Stable fractures move early.",
  },
  faqHeadline: "Radial head fractures, answered.",
  faqs: [
    {
      question: "Do I need surgery for a radial head fracture?",
      answer:
        "Often not. Stable, minimally displaced fractures are treated with brief support and early motion. Surgery is for fractures that are displaced and block forearm rotation, or that come with instability, in which case the bone is fixed with small implants or, if too fragmented, replaced.",
    },
    {
      question: "Why start moving it so soon?",
      answer:
        "The elbow stiffens faster than almost any other joint when it is held still. For stable radial head fractures, beginning gentle motion within the first week, once it is safe, is the best protection against a permanently stiff elbow.",
    },
    {
      question: "What else is checked besides the fracture?",
      answer:
        "Because the radial head is an important stabilizer, Dr. Lee checks the elbow for ligament injuries and instability and looks at the forearm and wrist. A radial head fracture can be part of a larger injury, and recognizing that changes the treatment.",
    },
  ],
  bottomCtaTitle: "Hurt your elbow in a fall?",
  bottomCtaItalic: "Most radial head fractures do well with early motion.",
  bottomCtaBody:
    "The radial head is the most commonly fractured bone in the adult elbow. Many are stable and recover well with early motion, while displaced fractures are fixed or replaced. The key is to evaluate the whole injury and to avoid the stiffness that comes from immobilizing the elbow too long.",
  metaTitle: "Radial Head Fracture, Steven J. Lee, MD",
  metaDescription:
    "Radial head fracture evaluated and treated by Dr. Steven J. Lee, MD. Early motion for stable fractures, fixation or replacement for displaced ones, and the importance of associated injuries explained.",
  schemaDescription:
    "A radial head fracture is the most common fracture of the adult elbow, often from a fall onto an outstretched hand. Treatment ranges from early motion for stable fractures to screw or plate fixation or radial head replacement for displaced ones.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Shoulder additions (Dr. Lee feedback, June 2026)
const shoulderByline = {
  name: "Steven J. Lee, MD",
  title: "Double Fellowship-Trained · Hand & Sports Medicine",
  reviewed: "May 2026",
};

const acSeparation: ConditionPageContent = {
  slug: "ac-separation",
  name: "Shoulder Separation (AC Joint)",
  region: "Shoulder",
  headerTitle: "Shoulder Separation:",
  headerItalic: "the bump on top of the shoulder.",
  headerLede:
    "A shoulder separation is an injury to the acromioclavicular (AC) joint on top of the shoulder, usually from a fall directly onto the shoulder. Most low-grade separations recover without surgery; higher-grade injuries are evaluated for reconstruction.",
  byline: shoulderByline,
  overview: [
    "A shoulder separation is not the same as a shoulder dislocation. It is an injury to the acromioclavicular joint, where the collarbone meets the tip of the shoulder blade, almost always from a fall directly onto the point of the shoulder, common in cycling, contact sports, and skiing.",
    "Separations are graded by how much the ligaments are torn and how far the collarbone has shifted. Low grades stay well aligned and heal with time; higher grades leave a visible bump and may need reconstruction. The grade guides the plan.",
  ],
  bodySections: [
    {
      heading: "Grades, in plain terms",
      body: [
        "Low-grade separations (types 1 and 2) involve a sprain or partial tear and stay aligned. Type 3 is a complete ligament tear with a visible bump and is often treated without surgery first. High-grade separations (types 4 through 6) are more displaced and usually need surgery.",
      ],
    },
    {
      heading: "Symptoms",
      body: ["Common findings after a fall onto the shoulder include:"],
      bullets: [
        "Pain at the top of the shoulder over the AC joint",
        "A visible bump where the collarbone meets the shoulder",
        "Pain reaching across the body or overhead",
        "Tenderness directly over the joint",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Most shoulder separations, including many complete (type 3) injuries, recover well without surgery using a sling, pain control, and a structured return to motion and strength. The bump may persist, but function usually returns.",
      "Surgery is reserved for high-grade separations, for some active patients with type 3 injuries who do not regain function, and for chronic, symptomatic separations. Reconstruction restores the alignment of the collarbone using graft and fixation techniques. The decision weighs the grade, your activity, and how the shoulder is functioning.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Low and many intermediate-grade separations are treated with a brief period in a sling, pain control, and a progressive therapy program to restore motion and strength. A residual bump is common and usually does not limit function.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "High-grade separations, and selected active patients who do not recover function, are treated by reconstructing the torn ligaments and restoring the collarbone's position with graft and fixation. The goal is a stable, functional shoulder.",
      ],
    },
  ],
  recoveryIntro: "Recovery depends on the grade and treatment:",
  recovery: [
    { when: "Weeks 0 to 2", what: "Sling for comfort. Begin gentle motion as pain allows. Ice and pain control." },
    { when: "Weeks 2 to 6", what: "Progressive range of motion and early strengthening in therapy." },
    { when: "Weeks 6 to 12", what: "Strengthening and a graded return to sport and overhead activity." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "A separation is not a dislocation.", body: "A shoulder separation is an AC joint injury on top of the shoulder. A shoulder dislocation is the ball coming out of the socket. They are different injuries with different treatments." },
      { heading: "The bump may not need fixing.", body: "Many complete separations leave a visible bump but recover good function without surgery. The decision to operate is based on the grade and function, not on the bump alone." },
    ],
  },
  sidebarFacts: [
    { label: "Joint involved", value: "Acromioclavicular (AC) joint" },
    { label: "Mechanism", value: "Fall directly onto the shoulder" },
    { label: "Graded", value: "Types 1 to 6 by displacement" },
    { label: "Most cases", value: "Low and many type 3 injuries: non-surgical" },
    { label: "Surgery", value: "High-grade and selected active patients" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background for shoulder injuries",
    "Conservative first for low and many intermediate-grade separations",
    "Reconstruction for high-grade and symptomatic chronic separations",
    "Return-to-sport planning as part of the treatment",
  ],
  related: [
    { name: "Shoulder Dislocation & Instability", slug: "shoulder-dislocation" },
    { name: "AC Joint Arthritis", slug: "ac-arthritis" },
    { name: "Rotator Cuff Tear", slug: "rotator-cuff" },
    { name: "Shoulder Impingement Syndrome", slug: "shoulder-impingement" },
  ],
  ctaCard: {
    eyebrow: "Bump on top of the shoulder?",
    headline: "Most separations recover without surgery.",
  },
  faqHeadline: "Shoulder separation, answered.",
  faqs: [
    {
      question: "Is a separated shoulder the same as a dislocated shoulder?",
      answer:
        "No. A separated shoulder is an injury to the AC joint on top of the shoulder, where the collarbone meets the shoulder blade. A dislocated shoulder is the ball coming out of the socket. They feel different, look different, and are treated differently, so the distinction matters.",
    },
    {
      question: "Will I need surgery?",
      answer:
        "Usually not. Low-grade separations and many complete (type 3) separations recover well without surgery using a sling and a structured rehabilitation program, though a bump may remain. Surgery is reserved for high-grade separations and for selected active patients who do not regain function.",
    },
    {
      question: "Will the bump go away?",
      answer:
        "Often a visible bump remains even after the shoulder recovers, especially with complete separations treated without surgery. In most cases it does not limit function. The decision to reconstruct is based on the grade and how the shoulder works, not on appearance alone.",
    },
  ],
  bottomCtaTitle: "Fell on your shoulder and have a bump?",
  bottomCtaItalic: "The grade guides the plan.",
  bottomCtaBody:
    "Most shoulder separations recover well without surgery, while high-grade injuries are evaluated for reconstruction. An accurate grade and a look at how the shoulder is functioning are what determine the right treatment.",
  metaTitle: "Shoulder Separation (AC Joint), Steven J. Lee, MD",
  metaDescription:
    "Shoulder separation (AC joint injury) evaluated and treated by Dr. Steven J. Lee, MD. Grading, non-surgical recovery, and reconstruction for high-grade separations explained.",
  schemaDescription:
    "A shoulder separation is an injury to the acromioclavicular (AC) joint, graded by displacement. Most low and intermediate-grade separations are treated without surgery; high-grade injuries may need reconstruction.",
};

const shoulderDislocation: ConditionPageContent = {
  slug: "shoulder-dislocation",
  name: "Shoulder Dislocation & Instability",
  region: "Shoulder",
  headerTitle: "Shoulder Dislocation:",
  headerItalic: "when the shoulder comes out, and stays loose.",
  headerLede:
    "The shoulder is the most mobile joint in the body, which is why it is the most commonly dislocated. After a dislocation, especially in younger athletes, the shoulder can stay loose and dislocate again. Arthroscopic repair restores stability when instability recurs.",
  byline: shoulderByline,
  overview: [
    "A shoulder dislocation happens when the ball of the upper arm comes out of the socket, most often forward (anterior) after a fall or a forceful overhead movement. The first dislocation usually tears the labrum, the rim of cartilage that deepens the socket, which is what can leave the shoulder unstable afterward.",
    "Age and activity strongly influence what happens next. Younger athletes have a high rate of recurrent instability after a first dislocation, while older patients are more likely to have an associated rotator cuff tear. The pattern guides whether rehabilitation alone is enough or whether surgery is warranted.",
  ],
  bodySections: [
    {
      heading: "First-time versus recurrent",
      body: [
        "A first-time dislocation is reduced (put back in place) and rehabilitated. In young, active patients the chance of it happening again is high, and recurrent instability, where the shoulder dislocates or feels like it will with certain positions, is what tips toward surgical repair.",
      ],
    },
    {
      heading: "Symptoms",
      body: ["Common findings include:"],
      bullets: [
        "A shoulder that has come out of joint, or repeatedly feels like it will",
        "Apprehension with the arm raised and rotated outward",
        "A sense of looseness, slipping, or 'dead arm' in athletes",
        "Pain and weakness after an episode",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "After a first dislocation, Dr. Lee reduces and rehabilitates the shoulder and uses imaging to define the labral and bone injury. Many patients, especially older or lower-demand ones, do well with rehabilitation.",
      "When instability recurs, or in a young athlete at high risk of recurrence, arthroscopic repair reattaches the torn labrum to the socket rim with suture anchors, restoring stability. When there is significant bone loss, a bone-augmenting procedure may be needed. The plan is matched to the pattern of injury and the demands of the patient.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "A first-time dislocation is reduced and treated with a brief period of rest followed by a structured rehabilitation program focused on the rotator cuff and shoulder-blade muscles. Many patients, particularly older ones, regain a stable, functional shoulder this way.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "For recurrent instability, the torn labrum is reattached to the socket arthroscopically with current-generation suture anchors. When there is meaningful bone loss from repeated dislocations, a bone-augmentation procedure restores the socket. The goal is a stable shoulder that returns to activity.",
      ],
    },
  ],
  recoveryIntro: "Recovery after stabilization protects the repair while restoring motion:",
  recovery: [
    { when: "Weeks 0 to 4", what: "Sling to protect the repair. Begin gentle, guided motion within safe limits." },
    { when: "Weeks 4 to 12", what: "Progressive range of motion and rotator-cuff strengthening in therapy." },
    { when: "Months 3 to 6", what: "Sport-specific strengthening and a graded return to contact and overhead activity." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Age changes the risk.", body: "A young athlete who dislocates has a high chance of it happening again, while an older patient is more likely to have a rotator cuff tear. The right workup differs by age." },
      { heading: "Repeated dislocations cause damage.", body: "Each dislocation can wear away bone and cartilage. Recurrent instability is worth addressing before that bone loss makes the repair more complex." },
    ],
  },
  sidebarFacts: [
    { label: "Joint involved", value: "Glenohumeral (ball and socket)" },
    { label: "Common injury", value: "Labral (Bankart) tear" },
    { label: "Highest recurrence", value: "Young athletes" },
    { label: "Surgical option", value: "Arthroscopic labral repair with suture anchors" },
    { label: "Bone loss", value: "May need a bone-augmentation procedure" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Arthroscopic, anchor-based labral repair for recurrent instability",
    "Tailors the plan to age, activity, and the pattern of injury",
    "Return-to-sport planning built into the treatment",
  ],
  related: [
    { name: "SLAP Tear (Labral Injury)", slug: "slap-tear" },
    { name: "Rotator Cuff Tear", slug: "rotator-cuff" },
    { name: "Shoulder Separation (AC Joint)", slug: "ac-separation" },
    { name: "Shoulder Impingement Syndrome", slug: "shoulder-impingement" },
  ],
  ctaCard: {
    eyebrow: "Shoulder that keeps slipping?",
    headline: "Stability is restorable.",
  },
  faqHeadline: "Shoulder dislocation and instability, answered.",
  faqs: [
    {
      question: "My shoulder dislocated once. Will it happen again?",
      answer:
        "It depends mostly on age and activity. Young, active patients have a high chance of recurrent dislocation after a first episode, while older patients are less likely to re-dislocate but more likely to have a rotator cuff tear. Imaging and an exam define your specific risk and guide whether rehabilitation alone is enough.",
    },
    {
      question: "Do I need surgery after a dislocation?",
      answer:
        "Not always. Many first-time dislocations, especially in older patients, do well with rehabilitation. Surgery is considered for recurrent instability and for young athletes at high risk of it happening again. Arthroscopic repair reattaches the torn labrum to restore stability.",
    },
    {
      question: "What does the surgery involve?",
      answer:
        "Most stabilizations are done arthroscopically, reattaching the torn labrum to the rim of the socket with suture anchors through small incisions. If repeated dislocations have worn away bone, a bone-augmentation procedure may be added. Recovery protects the repair early, then progresses to strengthening and return to sport.",
    },
  ],
  bottomCtaTitle: "Shoulder that has come out, or feels loose?",
  bottomCtaItalic: "The right plan depends on the pattern.",
  bottomCtaBody:
    "Shoulder instability is common after a dislocation, especially in younger athletes. Many shoulders settle with rehabilitation, while recurrent instability is reliably treated with arthroscopic repair. An accurate assessment of the labrum and any bone loss directs the plan.",
  metaTitle: "Shoulder Dislocation & Instability, Steven J. Lee, MD",
  metaDescription:
    "Shoulder dislocation and instability evaluated and treated by Dr. Steven J. Lee, MD. First-time versus recurrent dislocations, rehabilitation, and arthroscopic labral repair explained.",
  schemaDescription:
    "A shoulder dislocation is displacement of the ball from the socket, often tearing the labrum and leaving the shoulder unstable. Treatment ranges from rehabilitation to arthroscopic labral repair for recurrent instability.",
};

const slapTear: ConditionPageContent = {
  slug: "slap-tear",
  name: "SLAP Tear (Labral Injury)",
  region: "Shoulder",
  headerTitle: "SLAP Tear:",
  headerItalic: "deep shoulder pain in throwers and lifters.",
  headerLede:
    "A SLAP tear is an injury to the top of the labrum where the biceps tendon anchors inside the shoulder. It causes deep shoulder pain and clicking, especially with overhead activity. Many are managed without surgery, and treatment is tailored to age and activity.",
  byline: shoulderByline,
  overview: [
    "SLAP stands for superior labrum, anterior to posterior. It is a tear of the top rim of the shoulder socket, at the spot where the biceps tendon attaches inside the joint. It is common in throwing athletes, in people who lift overhead, and after a fall onto an outstretched arm.",
    "SLAP tears can be hard to pin down, because deep shoulder pain and clicking overlap with other shoulder problems, and the labrum changes with age. The diagnosis combines the history, specific exam tests, and an MRI, often with contrast.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common complaints include:"],
      bullets: [
        "Deep, hard-to-localize shoulder pain, often with overhead activity",
        "Clicking, catching, or a popping sensation in the shoulder",
        "Pain or loss of velocity in throwing athletes",
        "Pain with lifting or pressing overhead",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "Diagnosis combines specific provocative exam tests with an MRI, frequently with contrast injected into the joint to outline the labrum. Because labral changes are common with age, the exam and the patient's activity matter as much as the image in deciding whether a tear is the source of symptoms.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Many SLAP tears improve without surgery. Dr. Lee starts with a rehabilitation program focused on the rotator cuff, shoulder blade, and, in throwers, the whole kinetic chain, along with activity modification.",
      "When surgery is warranted, the choice is tailored to age and activity. In younger patients the labrum is repaired with suture anchors; in many older patients, or where the biceps anchor is the pain source, a biceps tenodesis, which reattaches the biceps tendon outside the joint, is more reliable than repair. Matching the procedure to the patient is the key decision.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Most SLAP tears begin with rehabilitation, restoring rotator-cuff and shoulder-blade strength and, in throwers, correcting mechanics, along with activity modification and anti-inflammatory measures. Many patients improve enough to avoid surgery.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "When symptoms persist, surgery is arthroscopic. Younger patients usually have the labrum repaired with suture anchors. In older patients, or when the biceps anchor is the problem, a biceps tenodesis reattaches the biceps tendon and tends to be more reliable and predictable.",
      ],
    },
  ],
  recoveryIntro: "Recovery depends on the procedure:",
  recovery: [
    { when: "Weeks 0 to 4", what: "Sling to protect the repair or tenodesis. Begin gentle, guided motion." },
    { when: "Weeks 4 to 12", what: "Progressive range of motion and rotator-cuff strengthening." },
    { when: "Months 3 to 6", what: "Sport-specific strengthening and a graded return to throwing or overhead lifting." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "A labral change on MRI is not always the cause.", body: "The labrum changes with age, so an MRI finding does not by itself mean it is the source of pain. The exam and your activity level matter in deciding whether to treat it." },
      { heading: "Repair is not always best.", body: "In many older patients, repairing a SLAP tear is less reliable than a biceps tenodesis. The right procedure depends on age and activity, not a single rule." },
    ],
  },
  sidebarFacts: [
    { label: "Structure involved", value: "Superior labrum and biceps anchor" },
    { label: "Common in", value: "Throwers, overhead lifters, after a fall" },
    { label: "Imaging", value: "MRI, often with contrast" },
    { label: "First-line treatment", value: "Rehabilitation and activity modification" },
    { label: "Surgical options", value: "Arthroscopic repair or biceps tenodesis" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Matches the procedure (repair versus tenodesis) to age and activity",
    "Conservative first, since many SLAP tears improve without surgery",
    "Return-to-throwing planning for overhead athletes",
  ],
  related: [
    { name: "Shoulder Dislocation & Instability", slug: "shoulder-dislocation" },
    { name: "Biceps Tendonitis (Shoulder)", slug: "biceps-tendonitis" },
    { name: "Rotator Cuff Tear", slug: "rotator-cuff" },
    { name: "Shoulder Impingement Syndrome", slug: "shoulder-impingement" },
  ],
  ctaCard: {
    eyebrow: "Deep shoulder pain with overhead activity?",
    headline: "Often treatable without surgery.",
  },
  faqHeadline: "SLAP tears, answered.",
  faqs: [
    {
      question: "What is a SLAP tear?",
      answer:
        "It is a tear of the top rim of the shoulder socket (the labrum) where the biceps tendon attaches inside the joint. SLAP stands for superior labrum, anterior to posterior. It typically causes deep shoulder pain and clicking, especially with overhead activity, and is common in throwers and overhead lifters.",
    },
    {
      question: "Do I need surgery for a SLAP tear?",
      answer:
        "Many SLAP tears improve with a rehabilitation program and activity modification, so surgery is not always needed. When it is, the procedure is tailored to age and activity: younger patients often have the labrum repaired, while in many older patients a biceps tenodesis is more reliable.",
    },
    {
      question: "Why might a tenodesis be better than a repair?",
      answer:
        "In many patients, particularly those over their thirties or whose pain comes from the biceps anchor, reattaching the biceps tendon outside the joint (tenodesis) gives more reliable and predictable pain relief than repairing the labral attachment. The best choice depends on your age, activity, and the specific tear.",
    },
  ],
  bottomCtaTitle: "Deep shoulder pain that clicks with overhead activity?",
  bottomCtaItalic: "The right procedure depends on you.",
  bottomCtaBody:
    "SLAP tears are often manageable without surgery, and when surgery is needed, the choice between repair and biceps tenodesis is tailored to your age and activity. An accurate assessment, weighing the exam and imaging together, directs the plan.",
  metaTitle: "SLAP Tear (Labral Injury), Steven J. Lee, MD",
  metaDescription:
    "SLAP tear (superior labral injury) of the shoulder evaluated and treated by Dr. Steven J. Lee, MD. Rehabilitation, arthroscopic labral repair, and biceps tenodesis explained.",
  schemaDescription:
    "A SLAP tear is an injury to the superior labrum where the biceps tendon anchors in the shoulder. Treatment ranges from rehabilitation to arthroscopic labral repair or biceps tenodesis, tailored to age and activity.",
};

const acArthritis: ConditionPageContent = {
  slug: "ac-arthritis",
  name: "AC Joint Arthritis",
  region: "Shoulder",
  headerTitle: "AC Joint Arthritis:",
  headerItalic: "pinpoint pain on top of the shoulder.",
  headerLede:
    "Arthritis of the acromioclavicular joint causes well-localized pain at the top of the shoulder, worse reaching across the body. Most cases are managed without surgery, and a small arthroscopic procedure helps the few that are not.",
  byline: shoulderByline,
  overview: [
    "The acromioclavicular (AC) joint sits at the top of the shoulder where the collarbone meets the shoulder blade. Like any joint, it can wear out, from age, heavy lifting, or an old separation, and become arthritic.",
    "AC arthritis is often easy to localize, the pain sits right on top of the shoulder and is reproduced by reaching the arm across the body. It frequently coexists with rotator cuff and impingement problems, which is part of the evaluation.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common complaints include:"],
      bullets: [
        "Pinpoint pain on top of the shoulder over the AC joint",
        "Pain reaching the arm across the body or sleeping on the shoulder",
        "Pain with bench press, dips, or overhead lifting",
        "Sometimes a small bump or tenderness directly over the joint",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "AC arthritis is usually clear on examination, the pain is localized to the joint and reproduced by a cross-body test, supported by X-rays. Because it often coexists with rotator cuff or impingement problems, a diagnostic injection into the AC joint can confirm how much of the pain comes from there.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Most AC arthritis is managed without surgery. Dr. Lee starts with activity modification, anti-inflammatory measures, and, when needed, a corticosteroid injection into the joint, which is also diagnostic.",
      "When pain persists despite these measures, a small arthroscopic procedure removes the worn end of the collarbone (distal clavicle excision), relieving the painful joint contact. It is often done at the same time as treatment for a coexisting rotator cuff or impingement problem.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Activity modification (especially avoiding provocative pressing and cross-body loading), anti-inflammatory measures, and a corticosteroid injection into the joint manage the large majority of AC arthritis. The injection also helps confirm the joint as the pain source.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "For pain that persists, a distal clavicle excision removes a small amount of the worn end of the collarbone so the arthritic surfaces no longer rub. It is commonly performed arthroscopically and is often combined with treatment of any coexisting shoulder problem.",
      ],
    },
  ],
  recoveryIntro: "Recovery after a distal clavicle excision is usually quick:",
  recovery: [
    { when: "Weeks 0 to 2", what: "Sling for comfort. Begin gentle motion early." },
    { when: "Weeks 2 to 6", what: "Progressive range of motion and early strengthening." },
    { when: "Weeks 6 to 12", what: "Strengthening and a graded return to lifting and overhead activity." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "It often travels with other shoulder problems.", body: "AC arthritis frequently coexists with rotator cuff and impingement issues. A diagnostic injection helps sort out how much of the pain is coming from the AC joint." },
      { heading: "Surgery removes a little bone, not the joint hardware.", body: "The procedure simply removes the worn end of the collarbone so the surfaces no longer grind. There is no implant, and recovery is usually quick." },
    ],
  },
  sidebarFacts: [
    { label: "Joint involved", value: "Acromioclavicular (AC) joint" },
    { label: "Pain location", value: "Pinpoint, on top of the shoulder" },
    { label: "Provoked by", value: "Reaching across the body, pressing" },
    { label: "First-line treatment", value: "Activity modification and injection" },
    { label: "Surgical option", value: "Distal clavicle excision (often arthroscopic)" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Uses a diagnostic injection to confirm the AC joint as the pain source",
    "Arthroscopic distal clavicle excision when conservative care fails",
    "Treats coexisting rotator cuff or impingement problems at the same time",
  ],
  related: [
    { name: "Shoulder Separation (AC Joint)", slug: "ac-separation" },
    { name: "Shoulder Impingement Syndrome", slug: "shoulder-impingement" },
    { name: "Rotator Cuff Tear", slug: "rotator-cuff" },
    { name: "Shoulder Arthritis (Glenohumeral)", slug: "glenohumeral-arthritis" },
  ],
  ctaCard: {
    eyebrow: "Pinpoint pain on top of the shoulder?",
    headline: "Usually managed without surgery.",
  },
  faqHeadline: "AC joint arthritis, answered.",
  faqs: [
    {
      question: "How do I know my pain is from the AC joint?",
      answer:
        "AC joint pain is usually well localized to the top of the shoulder and is reproduced by reaching the arm across the body. X-rays support the diagnosis, and because it often coexists with rotator cuff or impingement problems, a small diagnostic injection into the joint can confirm how much of the pain comes from there.",
    },
    {
      question: "Will I need surgery?",
      answer:
        "Most AC arthritis is managed without surgery, using activity modification, anti-inflammatory measures, and a corticosteroid injection. Surgery, a small procedure that removes the worn end of the collarbone, is reserved for pain that persists despite these measures.",
    },
    {
      question: "What does the surgery involve?",
      answer:
        "A distal clavicle excision removes a small amount of the worn end of the collarbone so the arthritic surfaces no longer rub. It is often done arthroscopically and is frequently combined with treatment of a coexisting rotator cuff or impingement problem. Recovery is usually quick.",
    },
  ],
  bottomCtaTitle: "Sharp pain on top of the shoulder?",
  bottomCtaItalic: "It is usually very manageable.",
  bottomCtaBody:
    "AC joint arthritis is one of the more localized and treatable causes of shoulder pain. Most cases settle with activity modification and an injection, and the few that do not respond well to a small arthroscopic procedure. The evaluation also checks for coexisting shoulder problems.",
  metaTitle: "AC Joint Arthritis, Steven J. Lee, MD",
  metaDescription:
    "Acromioclavicular (AC) joint arthritis evaluated and treated by Dr. Steven J. Lee, MD. Activity modification, injections, and arthroscopic distal clavicle excision explained.",
  schemaDescription:
    "AC joint arthritis is wear of the acromioclavicular joint on top of the shoulder, causing localized pain. Treatment ranges from activity modification and injection to arthroscopic distal clavicle excision.",
};

const glenohumeralArthritis: ConditionPageContent = {
  slug: "glenohumeral-arthritis",
  name: "Shoulder Arthritis (Glenohumeral)",
  region: "Shoulder",
  headerTitle: "Shoulder Arthritis:",
  headerItalic: "deep, stiff, aching shoulder pain.",
  headerLede:
    "Glenohumeral arthritis is wear of the cartilage in the main ball-and-socket joint of the shoulder, causing deep pain, stiffness, and grinding. Many patients are managed well without surgery, and the full range of options is discussed when arthritis is advanced.",
  byline: shoulderByline,
  overview: [
    "Glenohumeral arthritis is the loss of the smooth cartilage that lines the ball and socket of the shoulder. As the cartilage wears, the bones rub, which produces deep aching pain, stiffness, and a grinding sensation. It can come from age, prior injury, or inflammatory conditions.",
    "Shoulder arthritis tends to progress slowly, and many people manage well for a long time with non-surgical care. The goal of treatment is to control pain and keep the shoulder functioning, with surgery considered when arthritis is advanced and quality of life is affected.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common complaints include:"],
      bullets: [
        "Deep, aching shoulder pain, often worse with activity and at night",
        "Stiffness and loss of motion, especially reaching behind the back",
        "Grinding or catching with movement",
        "Pain that has built up gradually over months to years",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "X-rays show the joint narrowing and bone changes of arthritis. An MRI is added when the cartilage, rotator cuff, or labrum needs closer evaluation, because the state of the rotator cuff influences which treatments are appropriate.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee treats shoulder arthritis conservatively for as long as it controls symptoms, with activity modification, a therapy program to maintain motion and strength, anti-inflammatory measures, and injections. Many patients do well with this approach for years.",
      "When arthritis is advanced and pain limits daily life, Dr. Lee discusses the full range of options honestly, from joint-preserving measures to joint replacement, which is the definitive treatment for advanced arthritis. The right path depends on the severity, the condition of the rotator cuff, and your goals.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Activity modification, a structured therapy program to maintain motion and strength, anti-inflammatory measures, and corticosteroid injections manage many patients well, often for years. The aim is to control pain and preserve function.",
      ],
    },
    {
      heading: "When arthritis is advanced",
      body: [
        "For advanced arthritis that limits daily life, joint replacement is the definitive treatment. Dr. Lee discusses the options honestly, weighing the severity of the arthritis, the condition of the rotator cuff, and your goals, and coordinates the appropriate surgical plan.",
      ],
    },
  ],
  recoveryIntro: "Recovery depends on the treatment and is guided individually:",
  recovery: [
    { when: "Non-surgical", what: "Ongoing activity modification, therapy, and periodic injections as needed to control symptoms." },
    { when: "After surgery, early", what: "Protected motion in a sling, with gentle guided range of motion as directed." },
    { when: "After surgery, later", what: "Progressive strengthening and a graded return to activity over several months." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "The rotator cuff matters.", body: "The condition of the rotator cuff strongly influences which treatments are appropriate for shoulder arthritis, which is why imaging looks at the cuff as well as the cartilage." },
      { heading: "Many patients avoid surgery for years.", body: "Shoulder arthritis usually progresses slowly. With activity modification, therapy, and injections, many people manage well for a long time before any operation is considered." },
    ],
  },
  sidebarFacts: [
    { label: "Joint involved", value: "Glenohumeral (ball and socket)" },
    { label: "Cause", value: "Cartilage wear from age, injury, or inflammation" },
    { label: "First-line treatment", value: "Activity modification, therapy, injections" },
    { label: "Advanced disease", value: "Joint replacement is the definitive option" },
    { label: "Key factor", value: "Condition of the rotator cuff" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Conservative management for as long as it controls symptoms",
    "Honest discussion of all options when arthritis is advanced",
    "Evaluation that accounts for the rotator cuff, not just the cartilage",
  ],
  related: [
    { name: "Rotator Cuff Tear", slug: "rotator-cuff" },
    { name: "AC Joint Arthritis", slug: "ac-arthritis" },
    { name: "Shoulder Impingement Syndrome", slug: "shoulder-impingement" },
    { name: "PRP (Platelet-Rich Plasma) Injections", slug: "prp-injections" },
  ],
  ctaCard: {
    eyebrow: "Deep, stiff shoulder pain?",
    headline: "Many patients are managed without surgery.",
  },
  faqHeadline: "Shoulder arthritis, answered.",
  faqs: [
    {
      question: "Do I need a shoulder replacement?",
      answer:
        "Not for most patients, at least not for a long time. Shoulder arthritis usually progresses slowly, and activity modification, therapy, and injections manage many people well for years. Joint replacement is the definitive treatment when arthritis is advanced and pain limits daily life, and Dr. Lee discusses the options honestly when that point is reached.",
    },
    {
      question: "Why does my shoulder grind and feel stiff?",
      answer:
        "As the cartilage that lines the ball and socket wears away, the bones begin to rub, which produces grinding, deep aching pain, and stiffness, especially reaching behind the back. X-rays confirm the diagnosis, and an MRI is added when the rotator cuff or cartilage needs closer evaluation.",
    },
    {
      question: "Can injections help?",
      answer:
        "Yes. Corticosteroid injections can relieve pain and, combined with activity modification and a therapy program, are a mainstay of non-surgical management. They do not reverse the arthritis, but they can keep the shoulder comfortable and functional, often for a long time.",
    },
  ],
  bottomCtaTitle: "Living with deep, stiff shoulder pain?",
  bottomCtaItalic: "There is a lot that can be done before surgery.",
  bottomCtaBody:
    "Shoulder arthritis usually progresses slowly, and many patients are managed well for years with activity modification, therapy, and injections. When arthritis is advanced, Dr. Lee discusses the full range of options honestly, including the definitive option of joint replacement.",
  metaTitle: "Shoulder Arthritis (Glenohumeral), Steven J. Lee, MD",
  metaDescription:
    "Glenohumeral (shoulder) arthritis evaluated and treated by Dr. Steven J. Lee, MD. Activity modification, therapy, injections, and the options for advanced arthritis explained.",
  schemaDescription:
    "Glenohumeral arthritis is wear of the cartilage in the ball-and-socket shoulder joint, causing deep pain and stiffness. Treatment ranges from activity modification, therapy, and injections to joint replacement for advanced disease.",
};

const shoulderImpingement: ConditionPageContent = {
  slug: "shoulder-impingement",
  name: "Shoulder Impingement Syndrome",
  region: "Shoulder",
  headerTitle: "Shoulder Impingement:",
  headerItalic: "the painful arc with overhead reaching.",
  headerLede:
    "Impingement is pinching of the rotator cuff and bursa beneath the bony arch of the shoulder, causing pain with overhead reaching. The large majority improve with a targeted therapy program, and surgery is reserved for stubborn cases.",
  byline: shoulderByline,
  overview: [
    "Shoulder impingement, also called subacromial pain syndrome, is irritation of the rotator cuff tendons and the bursa as they pass beneath the acromion, the bony roof of the shoulder. Reaching overhead narrows that space and pinches the tissue, which produces pain.",
    "It is one of the most common causes of shoulder pain and often responds well to rehabilitation that restores the balance and mechanics of the rotator cuff and shoulder blade. Impingement can also be an early stage on the way to a rotator cuff tear, so it is evaluated with that in mind.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common complaints include:"],
      bullets: [
        "Pain reaching overhead or out to the side, a 'painful arc'",
        "Pain sleeping on the shoulder or reaching behind the back",
        "Aching down the outside of the upper arm",
        "Weakness or pain lifting the arm",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "Impingement is largely a clinical diagnosis, based on the pattern of pain and specific tests that reproduce it. X-rays show the shape of the bony arch, and an MRI or ultrasound is used when a rotator cuff tear is suspected, since that changes the plan.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Most impingement improves without surgery. Dr. Lee emphasizes a structured rotator-cuff and shoulder-blade rehabilitation program, activity modification, and, when needed, a corticosteroid injection into the subacromial space, which can both relieve pain and help confirm the diagnosis.",
      "Surgery is reserved for impingement that does not settle after a genuine course of rehabilitation. An arthroscopic subacromial decompression makes more room for the cuff, and any associated problem, such as a cuff tear, is addressed at the same time. First, though, Dr. Lee makes sure there is not an unrecognized cuff tear driving the symptoms.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most patients improve with:"],
      bullets: [
        "A structured rotator-cuff and shoulder-blade strengthening program",
        "Activity modification to reduce provocative overhead loading",
        "Anti-inflammatory measures",
        "A subacromial corticosteroid injection, which is also diagnostic",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "When impingement persists despite a genuine course of rehabilitation, an arthroscopic subacromial decompression makes more room beneath the bony arch. Any associated problem, such as a cuff tear or AC arthritis, is treated at the same time.",
      ],
    },
  ],
  recoveryIntro: "Recovery is usually steady with rehabilitation:",
  recovery: [
    { when: "Weeks 0 to 6", what: "Structured therapy program and activity modification. Expect gradual improvement." },
    { when: "Weeks 6 to 12", what: "Progressive strengthening and a graded return to overhead activity." },
    { when: "After surgery (when needed)", what: "Early motion, then progressive strengthening over six to twelve weeks." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Rule out a cuff tear first.", body: "Impingement and rotator cuff tears can feel similar. Confirming whether the cuff is torn matters, because a tear changes the treatment." },
      { heading: "Rehabilitation usually works.", body: "The large majority of impingement settles with a targeted strengthening program. Surgery is for the minority that does not improve after a genuine rehabilitation effort." },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "Pinching of the rotator cuff and bursa under the acromion" },
    { label: "Hallmark", value: "A painful arc with overhead reaching" },
    { label: "First-line treatment", value: "Rotator-cuff and shoulder-blade rehabilitation" },
    { label: "Injection", value: "Subacromial corticosteroid, also diagnostic" },
    { label: "Surgery", value: "Arthroscopic decompression for stubborn cases" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Rehabilitation-first, since most impingement settles without surgery",
    "Confirms whether a rotator cuff tear is driving the symptoms",
    "Arthroscopic treatment when conservative care fails",
  ],
  related: [
    { name: "Rotator Cuff Tear", slug: "rotator-cuff" },
    { name: "Biceps Tendonitis (Shoulder)", slug: "biceps-tendonitis" },
    { name: "AC Joint Arthritis", slug: "ac-arthritis" },
    { name: "Shoulder Dislocation & Instability", slug: "shoulder-dislocation" },
  ],
  ctaCard: {
    eyebrow: "Pain reaching overhead?",
    headline: "Most impingement improves without surgery.",
  },
  faqHeadline: "Shoulder impingement, answered.",
  faqs: [
    {
      question: "What is shoulder impingement?",
      answer:
        "It is pinching of the rotator cuff tendons and the bursa as they pass beneath the bony roof of the shoulder. Reaching overhead narrows that space and irritates the tissue, producing a 'painful arc.' It is one of the most common causes of shoulder pain and usually responds to rehabilitation.",
    },
    {
      question: "Will I need surgery?",
      answer:
        "Almost certainly not. The large majority of impingement improves with a structured rotator-cuff and shoulder-blade strengthening program, activity modification, and sometimes an injection. Surgery, an arthroscopic decompression, is reserved for the minority whose pain persists after a genuine course of rehabilitation.",
    },
    {
      question: "How is it different from a rotator cuff tear?",
      answer:
        "Impingement is irritation of the cuff and bursa without a tear, while a rotator cuff tear is an actual defect in the tendon. They can feel similar and can coexist, so confirming whether the cuff is torn, with an MRI or ultrasound when needed, is part of the evaluation because it changes the treatment.",
    },
  ],
  bottomCtaTitle: "Shoulder pain every time you reach overhead?",
  bottomCtaItalic: "A targeted program usually fixes it.",
  bottomCtaBody:
    "Shoulder impingement is common and usually improves with a focused rehabilitation program. The evaluation confirms whether a rotator cuff tear is part of the picture, and surgery is reserved for the cases that do not settle with conservative care.",
  metaTitle: "Shoulder Impingement Syndrome, Steven J. Lee, MD",
  metaDescription:
    "Shoulder impingement (subacromial pain syndrome) evaluated and treated by Dr. Steven J. Lee, MD. Rotator-cuff rehabilitation, injections, and arthroscopic decompression explained.",
  schemaDescription:
    "Shoulder impingement is pinching of the rotator cuff and bursa beneath the acromion, causing pain with overhead reaching. Treatment is mainly rehabilitation, with arthroscopic subacromial decompression for stubborn cases.",
};

const bicepsTendonitis: ConditionPageContent = {
  slug: "biceps-tendonitis",
  name: "Biceps Tendonitis (Shoulder)",
  region: "Shoulder",
  headerTitle: "Biceps Tendonitis:",
  headerItalic: "pain at the front of the shoulder.",
  headerLede:
    "Irritation of the long head of the biceps tendon causes pain at the front of the shoulder, often alongside rotator cuff or labral problems. Most cases improve without surgery, and the few that do not respond well to a biceps tenodesis.",
  byline: shoulderByline,
  overview: [
    "The long head of the biceps tendon runs through the front of the shoulder and into the joint. When it becomes irritated or worn, it causes pain at the front of the shoulder that can radiate down the upper arm, worse with lifting and overhead activity.",
    "Biceps tendonitis rarely occurs in isolation. It usually accompanies rotator cuff disease, impingement, or a labral (SLAP) problem, so the evaluation looks at the whole shoulder rather than the tendon alone.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common complaints include:"],
      bullets: [
        "Aching pain at the front of the shoulder",
        "Pain radiating down the front of the upper arm",
        "Pain with lifting, pulling, or overhead activity",
        "Tenderness over the tendon at the front of the shoulder",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "The exam localizes tenderness to the biceps tendon and uses specific tests that load it. Because biceps tendonitis usually travels with other shoulder problems, an ultrasound or MRI evaluates the cuff and labrum as well, which shapes the treatment.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Most biceps tendonitis improves without surgery. Dr. Lee starts with activity modification, a rotator-cuff and shoulder-blade rehabilitation program, anti-inflammatory measures, and, when needed, a targeted injection.",
      "When pain persists, or when the tendon is significantly worn or part of a larger problem, a biceps tenodesis reattaches the tendon outside the joint, which reliably relieves the pain. It is frequently done at the same time as treatment for an associated rotator cuff or labral problem.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most patients improve with:"],
      bullets: [
        "Activity modification to reduce provocative lifting and overhead loading",
        "A rotator-cuff and shoulder-blade rehabilitation program",
        "Anti-inflammatory measures",
        "A targeted corticosteroid injection in selected cases",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "When pain persists or the tendon is significantly worn, a biceps tenodesis reattaches the tendon to the bone outside the joint, which reliably relieves the pain. It is often combined with treatment of a coexisting rotator cuff tear or labral injury.",
      ],
    },
  ],
  recoveryIntro: "Recovery depends on whether surgery is needed:",
  recovery: [
    { when: "Non-surgical", what: "Activity modification and a therapy program over several weeks, with gradual improvement." },
    { when: "After tenodesis, weeks 0 to 4", what: "Sling to protect the repair, with gentle guided motion." },
    { when: "After tenodesis, weeks 4 to 12", what: "Progressive strengthening and a graded return to lifting and overhead activity." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "It rarely travels alone.", body: "Biceps tendonitis usually accompanies a rotator cuff or labral problem, so treating only the tendon may miss the larger issue. The evaluation looks at the whole shoulder." },
      { heading: "Tenodesis is reliable.", body: "When surgery is needed, reattaching the biceps tendon outside the joint reliably relieves the pain and is often done alongside other shoulder treatment." },
    ],
  },
  sidebarFacts: [
    { label: "Structure involved", value: "Long head of the biceps tendon" },
    { label: "Pain location", value: "Front of the shoulder, down the upper arm" },
    { label: "Often with", value: "Rotator cuff, impingement, or labral problems" },
    { label: "First-line treatment", value: "Rehabilitation and activity modification" },
    { label: "Surgical option", value: "Biceps tenodesis" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Evaluates the whole shoulder, not just the tendon",
    "Rehabilitation-first, since most cases improve without surgery",
    "Biceps tenodesis when conservative care fails or the tendon is worn",
  ],
  related: [
    { name: "Rotator Cuff Tear", slug: "rotator-cuff" },
    { name: "SLAP Tear (Labral Injury)", slug: "slap-tear" },
    { name: "Shoulder Impingement Syndrome", slug: "shoulder-impingement" },
    { name: "Biceps Tendon Rupture", slug: "biceps-rupture" },
  ],
  ctaCard: {
    eyebrow: "Pain at the front of the shoulder?",
    headline: "Most cases improve without surgery.",
  },
  faqHeadline: "Biceps tendonitis, answered.",
  faqs: [
    {
      question: "Is this the same as a torn biceps?",
      answer:
        "No. Biceps tendonitis at the shoulder is irritation of the long head of the biceps tendon, not a rupture. A distal biceps rupture is a separate injury at the elbow. Tendonitis causes front-of-shoulder pain and usually improves without surgery.",
    },
    {
      question: "Why does my whole shoulder need to be checked?",
      answer:
        "Biceps tendonitis rarely occurs by itself. It usually accompanies a rotator cuff problem, impingement, or a labral (SLAP) injury, so an ultrasound or MRI evaluates those structures too. Treating only the tendon while missing the larger problem tends to disappoint, which is why the whole shoulder is assessed.",
    },
    {
      question: "What is a biceps tenodesis?",
      answer:
        "It is a procedure that reattaches the long head of the biceps tendon to the bone just outside the shoulder joint. For pain that persists despite rehabilitation, or when the tendon is significantly worn, it reliably relieves the pain and is often combined with treatment of an associated rotator cuff or labral problem.",
    },
  ],
  bottomCtaTitle: "Aching pain at the front of the shoulder?",
  bottomCtaItalic: "Usually treatable without surgery.",
  bottomCtaBody:
    "Biceps tendonitis improves without surgery in most cases, with rehabilitation and activity modification. Because it usually accompanies other shoulder problems, the evaluation looks at the whole shoulder, and a biceps tenodesis reliably relieves the pain when surgery is needed.",
  metaTitle: "Biceps Tendonitis (Shoulder), Steven J. Lee, MD",
  metaDescription:
    "Shoulder biceps tendonitis (long head of biceps) evaluated and treated by Dr. Steven J. Lee, MD. Rehabilitation, injections, and biceps tenodesis explained, with attention to associated shoulder problems.",
  schemaDescription:
    "Biceps tendonitis is irritation of the long head of the biceps tendon at the front of the shoulder, usually accompanying rotator cuff or labral problems. Treatment ranges from rehabilitation to biceps tenodesis.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Knee & Sports additions (Dr. Lee feedback, June 2026)
const sportsByline = {
  name: "Steven J. Lee, MD",
  title: "Double Fellowship-Trained · Hand & Sports Medicine",
  reviewed: "May 2026",
};

const patellofemoralSyndrome: ConditionPageContent = {
  slug: "patellofemoral-syndrome",
  name: "Patellofemoral Pain Syndrome",
  region: "Knee & Sports",
  headerTitle: "Patellofemoral Pain:",
  headerItalic: "the ache around the kneecap.",
  headerLede:
    "Patellofemoral pain, sometimes called runner's knee, is aching around or behind the kneecap, worse with stairs, squatting, and sitting. The large majority improve with a targeted rehabilitation program rather than surgery.",
  byline: sportsByline,
  overview: [
    "Patellofemoral pain syndrome is pain at the front of the knee, around or behind the kneecap, where it glides in a groove on the thighbone. It usually comes from a combination of overload and how the kneecap tracks, rather than a single injury.",
    "It is one of the most common knee complaints, especially in runners, athletes, and active adults. The encouraging part is that it is largely a mechanical and strength problem, which is why a well-designed rehabilitation program is so effective.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "Aching around or behind the kneecap",
        "Pain with stairs, squatting, kneeling, or running",
        "Pain after sitting with the knee bent for a while, the 'theater sign'",
        "Occasional grinding or a sense of the kneecap catching",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "Patellofemoral pain is largely a clinical diagnosis based on the pattern of pain and an exam of kneecap tracking, hip and thigh strength, and flexibility. Imaging is used mainly to rule out other problems when the picture is unclear or recovery stalls.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Patellofemoral pain is treated almost entirely without surgery. Dr. Lee focuses on the root causes, the strength and timing of the hip and thigh muscles, flexibility, footwear, and training load, through a structured therapy program.",
      "Activity modification, taping or bracing, and addressing training errors round out the plan. Surgery is rarely needed and is reserved for specific structural problems with the kneecap, not for typical patellofemoral pain.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["The foundation of treatment is rehabilitation:"],
      bullets: [
        "Hip and thigh strengthening, the single most effective measure",
        "Activity and training-load modification",
        "Flexibility work and, for some, taping or a brace",
        "Footwear and running-form adjustments where relevant",
      ],
    },
  ],
  recoveryIntro: "Recovery is steady with a consistent program:",
  recovery: [
    { when: "Weeks 0 to 6", what: "Structured strengthening and activity modification. Expect gradual improvement." },
    { when: "Weeks 6 to 12", what: "Progressive loading and a graded return to running and sport." },
    { when: "Ongoing", what: "Maintenance strengthening to keep symptoms from returning." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Rest alone rarely fixes it.", body: "Because patellofemoral pain is largely a strength and mechanics problem, resting helps short term but the pain returns with activity unless the underlying strength is addressed." },
      { heading: "It is rarely a surgical problem.", body: "Typical patellofemoral pain responds to rehabilitation. Surgery is reserved for specific structural issues, not for the common form of this condition." },
    ],
  },
  sidebarFacts: [
    { label: "Where it hurts", value: "Around or behind the kneecap" },
    { label: "Provoked by", value: "Stairs, squatting, prolonged sitting" },
    { label: "Common in", value: "Runners and active adults" },
    { label: "Main treatment", value: "Hip and thigh strengthening" },
    { label: "Surgery", value: "Rarely needed" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Targets the root causes: strength, mechanics, and training load",
    "Conservative, since the large majority resolve without surgery",
    "Return-to-sport planning for runners and athletes",
  ],
  related: [
    { name: "Patellar Tendonitis", slug: "patellar-tendonitis" },
    { name: "ACL Tear", slug: "acl-reconstruction" },
    { name: "Pes Anserine Bursitis", slug: "pes-anserine-bursitis" },
    { name: "Knee Collateral Ligament Injury", slug: "knee-collateral-ligament" },
  ],
  ctaCard: {
    eyebrow: "Aching at the front of the knee?",
    headline: "A targeted program usually fixes it.",
  },
  faqHeadline: "Patellofemoral pain, answered.",
  faqs: [
    {
      question: "What causes pain around my kneecap?",
      answer:
        "Patellofemoral pain usually comes from a combination of overload and how the kneecap tracks in its groove, influenced by hip and thigh strength, flexibility, and training. It is rarely from a single injury, which is why strengthening the hip and thigh muscles is the most effective treatment.",
    },
    {
      question: "Will I need surgery?",
      answer:
        "Almost certainly not. Typical patellofemoral pain responds to a structured rehabilitation program focused on hip and thigh strength, along with activity modification. Surgery is reserved for specific structural problems with the kneecap, not for the common form of this condition.",
    },
    {
      question: "How long until it gets better?",
      answer:
        "Most patients improve over six to twelve weeks of a consistent strengthening program, with continued gains after that. Because it is a strength and mechanics problem, ongoing maintenance work helps keep it from returning.",
    },
  ],
  bottomCtaTitle: "Front-of-knee pain with stairs and squatting?",
  bottomCtaItalic: "It is usually very treatable without surgery.",
  bottomCtaBody:
    "Patellofemoral pain is one of the most common and most treatable knee problems. A program that targets hip and thigh strength, flexibility, and training load resolves the large majority. Surgery is rarely necessary.",
  metaTitle: "Patellofemoral Pain Syndrome, Steven J. Lee, MD",
  metaDescription:
    "Patellofemoral pain syndrome (runner's knee) evaluated and treated by Dr. Steven J. Lee, MD. Hip and thigh strengthening, activity modification, and bracing explained.",
  schemaDescription:
    "Patellofemoral pain syndrome is pain around or behind the kneecap from overload and tracking, common in active adults. Treatment is mainly hip and thigh strengthening and activity modification.",
};

const kneeCollateralLigament: ConditionPageContent = {
  slug: "knee-collateral-ligament",
  name: "Knee Collateral Ligament Injury (MCL, LCL, PLC)",
  region: "Knee & Sports",
  headerTitle: "Collateral Ligament Injury:",
  headerItalic: "the side-to-side stabilizers of the knee.",
  headerLede:
    "Injuries to the knee's side ligaments range from the common, well-healing MCL sprain to the often-missed posterolateral corner injury that needs surgery. Sorting out which ligaments are involved is what guides treatment.",
  byline: sportsByline,
  overview: [
    "The collateral ligaments stabilize the knee from side to side. The medial collateral ligament (MCL) on the inner side is the most commonly injured, usually from a blow to the outside of the knee. The lateral collateral ligament (LCL) and the posterolateral corner (PLC) on the outer side are injured less often but are more serious.",
    "Most isolated MCL injuries heal well without surgery. LCL and posterolateral corner injuries, by contrast, often need surgery and are frequently part of a larger, multi-ligament injury, which is why a careful, complete examination matters.",
  ],
  bodySections: [
    {
      heading: "Why the side matters",
      body: [
        "An inner-side (MCL) sprain usually heals on its own with bracing and rehabilitation. An outer-side (LCL or posterolateral corner) injury behaves differently, it tends not to heal on its own and is more likely to leave the knee unstable, so it is treated more aggressively and is often reconstructed.",
      ],
    },
    {
      heading: "Symptoms",
      body: ["Common findings include:"],
      bullets: [
        "Pain and swelling along the inner or outer side of the knee",
        "A sense of the knee buckling or opening up to the side",
        "Pain with side-to-side stress on the knee",
        "Bruising and tenderness over the injured ligament",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "The first step is defining exactly which ligaments are injured, because the inner and outer sides are treated very differently. Dr. Lee examines the knee for side-to-side and rotational instability and confirms the pattern with MRI.",
      "Most isolated MCL injuries are treated without surgery, in a hinged brace with a structured rehabilitation program. LCL and posterolateral corner injuries, and combined injuries, are repaired or reconstructed, since they do not reliably heal on their own and can leave the knee unstable. The posterolateral corner in particular is often missed, and recognizing it changes the outcome.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Isolated MCL injuries are treated in a hinged brace with progressive motion and strengthening. Most heal reliably and return to full activity, even higher-grade tears in many cases.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "LCL and posterolateral corner injuries, and multi-ligament injuries, are repaired or reconstructed because they do not reliably heal and can leave the knee unstable. Restoring the outer-side and rotational stability is what protects the knee long term.",
      ],
    },
  ],
  recoveryIntro: "Recovery depends on which ligaments are involved:",
  recovery: [
    { when: "MCL, weeks 0 to 6", what: "Hinged brace with progressive motion and strengthening. Most heal without surgery." },
    { when: "After reconstruction, weeks 0 to 6", what: "Hinged brace protecting the repair, with guided motion and partial weight-bearing as directed." },
    { when: "Months 3 to 9", what: "Progressive strengthening and a graded return to sport, guided by stability and strength." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Inner and outer injuries are not the same.", body: "An MCL sprain usually heals on its own; an LCL or posterolateral corner injury often does not and may need surgery. Treating them the same way is a common error." },
      { heading: "The posterolateral corner is often missed.", body: "Posterolateral corner injuries are easy to overlook and, if untreated, can cause persistent instability and put other reconstructions at risk. A complete exam is what catches them." },
    ],
  },
  sidebarFacts: [
    { label: "Ligaments involved", value: "MCL (inner), LCL and posterolateral corner (outer)" },
    { label: "Most common", value: "MCL sprain, usually heals without surgery" },
    { label: "More serious", value: "LCL and posterolateral corner injuries" },
    { label: "Often missed", value: "Posterolateral corner" },
    { label: "Key step", value: "Defining exactly which ligaments are injured" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Careful exam for side-to-side and rotational instability",
    "Recognizes posterolateral corner injuries that are frequently missed",
    "Non-surgical care for most MCL injuries; reconstruction when needed",
  ],
  related: [
    { name: "ACL Tear", slug: "acl-reconstruction" },
    { name: "PCL Tear", slug: "pcl-tear" },
    { name: "Patellofemoral Pain Syndrome", slug: "patellofemoral-syndrome" },
    { name: "Tibial Plateau Fracture", slug: "tibial-plateau-fracture" },
  ],
  ctaCard: {
    eyebrow: "Knee that buckles to the side?",
    headline: "The side and pattern guide the plan.",
  },
  faqHeadline: "Collateral ligament injuries, answered.",
  faqs: [
    {
      question: "Does an MCL tear need surgery?",
      answer:
        "Usually not. Most isolated MCL injuries, including many higher-grade tears, heal reliably without surgery in a hinged brace with a structured rehabilitation program. Surgery is considered mainly when the MCL injury is part of a larger, multi-ligament injury.",
    },
    {
      question: "Why is an outer-side injury more serious?",
      answer:
        "The lateral collateral ligament and the posterolateral corner on the outer side tend not to heal on their own and are more likely to leave the knee unstable. They often need repair or reconstruction, and they are frequently part of a larger injury, so a complete examination matters.",
    },
    {
      question: "What is the posterolateral corner?",
      answer:
        "It is a group of structures on the outer-back of the knee that controls rotation and side-to-side stability. Injuries there are easy to miss and, if untreated, can cause persistent instability and jeopardize other reconstructions. Recognizing a posterolateral corner injury is what changes the outcome.",
    },
  ],
  bottomCtaTitle: "Side-of-knee injury that feels unstable?",
  bottomCtaItalic: "Which ligament matters.",
  bottomCtaBody:
    "Collateral ligament injuries range from the common, well-healing MCL sprain to the serious, often-missed posterolateral corner injury. A complete examination that defines exactly which ligaments are involved is what directs the right treatment.",
  metaTitle: "Knee Collateral Ligament Injury (MCL, LCL, PLC), Steven J. Lee, MD",
  metaDescription:
    "Knee collateral ligament injuries (MCL, LCL, posterolateral corner) evaluated and treated by Dr. Steven J. Lee, MD. Bracing for most MCL injuries and reconstruction for outer-side and combined injuries explained.",
  schemaDescription:
    "Knee collateral ligament injuries involve the MCL (inner), LCL, and posterolateral corner (outer). Most isolated MCL injuries heal without surgery, while LCL and posterolateral corner injuries often require repair or reconstruction.",
};

const pclTear: ConditionPageContent = {
  slug: "pcl-tear",
  name: "PCL Tear",
  region: "Knee & Sports",
  headerTitle: "PCL Tear:",
  headerItalic: "the cruciate ligament that often heals on its own.",
  headerLede:
    "The posterior cruciate ligament is injured less often than the ACL and, unlike the ACL, many isolated PCL tears are managed without surgery. The plan depends on the grade and whether other ligaments are involved.",
  byline: sportsByline,
  overview: [
    "The posterior cruciate ligament (PCL) sits deep in the center of the knee and keeps the shinbone from sliding backward. It is injured less commonly than the ACL, classically from a 'dashboard' impact to the front of the bent knee or a fall onto a bent knee.",
    "Unlike the ACL, many isolated PCL injuries do well without surgery, because the ligament has some capacity to heal and the knee can be stable enough for daily life and many sports with good quadriceps strength. The grade of the tear and whether other ligaments are torn guide the decision.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common findings include:"],
      bullets: [
        "Knee pain and swelling after a dashboard-type impact or a fall onto a bent knee",
        "A vague sense of instability, often less dramatic than an ACL tear",
        "Difficulty with stairs and slopes",
        "Pain at the back of the knee",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "The exam tests for backward sag and shift of the shinbone, and MRI confirms the grade of the PCL tear and whether other ligaments, especially the posterolateral corner, are involved. Identifying combined injuries is important, because they change the plan.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee treats most isolated, lower-grade PCL injuries without surgery, with a structured rehabilitation program focused heavily on quadriceps strength, sometimes with a specialized brace. Many patients return to full activity this way.",
      "Reconstruction is considered for high-grade tears, for combined ligament injuries, and for patients with persistent instability despite rehabilitation. Because PCL injuries often travel with posterolateral corner injuries, a complete assessment is what determines whether surgery is needed and what it should include.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Isolated, lower-grade PCL injuries are treated with a quadriceps-focused rehabilitation program, sometimes with a dynamic PCL brace. Many patients regain a stable, functional knee without surgery.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "High-grade tears, combined ligament injuries, and knees with persistent instability are treated with PCL reconstruction, addressing any associated ligament injury at the same time. Restoring stability protects the cartilage and the rest of the knee.",
      ],
    },
  ],
  recoveryIntro: "Recovery depends on the grade and treatment:",
  recovery: [
    { when: "Non-surgical, weeks 0 to 12", what: "Bracing as directed and a quadriceps-focused rehabilitation program, with a graded return to activity." },
    { when: "After reconstruction, weeks 0 to 6", what: "Brace protecting the graft, with guided motion and protected weight-bearing." },
    { when: "Months 3 to 9", what: "Progressive strengthening and a graded return to sport." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "A PCL tear is not an automatic surgery.", body: "Unlike the ACL, many isolated PCL injuries do well without reconstruction, especially with strong quadriceps. The decision depends on the grade and whether other ligaments are torn." },
      { heading: "Check the posterolateral corner.", body: "PCL injuries often accompany posterolateral corner injuries. Missing the corner is a common reason a PCL knee stays unstable, so a complete exam matters." },
    ],
  },
  sidebarFacts: [
    { label: "Ligament involved", value: "Posterior cruciate ligament (PCL)" },
    { label: "Classic cause", value: "Dashboard impact or fall onto a bent knee" },
    { label: "Many isolated tears", value: "Managed without surgery" },
    { label: "Rehab focus", value: "Quadriceps strength" },
    { label: "Check for", value: "Combined and posterolateral corner injuries" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Non-surgical, quadriceps-focused care for most isolated PCL injuries",
    "Evaluates for combined and posterolateral corner injuries",
    "Reconstruction for high-grade, combined, or persistently unstable knees",
  ],
  related: [
    { name: "ACL Tear", slug: "acl-reconstruction" },
    { name: "Knee Collateral Ligament Injury", slug: "knee-collateral-ligament" },
    { name: "Tibial Plateau Fracture", slug: "tibial-plateau-fracture" },
    { name: "Patellofemoral Pain Syndrome", slug: "patellofemoral-syndrome" },
  ],
  ctaCard: {
    eyebrow: "Knee hurt in a dashboard-type injury?",
    headline: "Many PCL tears heal without surgery.",
  },
  faqHeadline: "PCL tears, answered.",
  faqs: [
    {
      question: "Is a PCL tear treated like an ACL tear?",
      answer:
        "No. Unlike the ACL, many isolated PCL tears do well without surgery, because the ligament has some healing capacity and the knee can be stable with strong quadriceps. The decision depends on the grade of the tear and whether other ligaments are involved.",
    },
    {
      question: "How do I know if I need reconstruction?",
      answer:
        "Reconstruction is considered for high-grade PCL tears, for combined ligament injuries, and when the knee stays unstable despite a good rehabilitation program. An exam and MRI define the grade and look for associated injuries, especially of the posterolateral corner.",
    },
    {
      question: "What does PCL rehabilitation focus on?",
      answer:
        "The cornerstone is quadriceps strength, which helps stabilize the knee against the backward sag a PCL injury allows. A specialized brace is sometimes used during healing. Many patients regain a stable, functional knee with a consistent program.",
    },
  ],
  bottomCtaTitle: "Hurt the back of your knee?",
  bottomCtaItalic: "The grade guides the plan.",
  bottomCtaBody:
    "Many isolated PCL injuries recover well without surgery, with a quadriceps-focused program. Reconstruction is reserved for high-grade, combined, or persistently unstable knees. A complete assessment, including the posterolateral corner, directs the plan.",
  metaTitle: "PCL Tear, Steven J. Lee, MD",
  metaDescription:
    "Posterior cruciate ligament (PCL) tear evaluated and treated by Dr. Steven J. Lee, MD. Quadriceps-focused rehabilitation for most isolated tears and reconstruction for high-grade or combined injuries explained.",
  schemaDescription:
    "A PCL (posterior cruciate ligament) tear is a less common knee ligament injury. Many isolated tears are managed without surgery with quadriceps rehabilitation, while high-grade or combined injuries may need reconstruction.",
};

const pesAnserineBursitis: ConditionPageContent = {
  slug: "pes-anserine-bursitis",
  name: "Pes Anserine Bursitis",
  region: "Knee & Sports",
  headerTitle: "Pes Anserine Bursitis:",
  headerItalic: "inner-knee pain just below the joint.",
  headerLede:
    "Pes anserine bursitis is irritation of a small fluid sac on the inner side of the knee, a few centimeters below the joint line. It causes inner-knee pain and almost always settles without surgery.",
  byline: sportsByline,
  overview: [
    "The pes anserine bursa cushions the tendons that attach on the inner side of the shinbone, just below the knee. When it becomes irritated, it produces pain and tenderness in that spot, often mistaken for a problem inside the knee joint itself.",
    "It is common in runners, in people with knee arthritis, and in those carrying extra weight. It is a benign, self-limiting problem that responds well to simple measures.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "Pain and tenderness on the inner shin a few centimeters below the knee",
        "Pain with stairs, rising from a chair, or at night",
        "Sometimes mild swelling over the tender spot",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "The diagnosis is clinical, based on tenderness localized to the pes anserine area rather than the joint line. Imaging is used mainly to rule out other inner-knee problems, such as a meniscus tear or arthritis, when the picture is unclear.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Pes anserine bursitis is treated without surgery. Dr. Lee starts with activity modification, addressing any underlying cause such as tight hamstrings, gait, or knee arthritis, along with anti-inflammatory measures and a stretching and strengthening program.",
      "A corticosteroid injection into the bursa relieves stubborn cases. Because the bursitis is often a symptom of something else, like arthritis or a training error, treating that underlying factor is what keeps it from returning.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["The condition responds to simple measures:"],
      bullets: [
        "Activity modification and addressing the underlying cause",
        "Stretching and strengthening, especially the hamstrings",
        "Anti-inflammatory measures and ice",
        "A corticosteroid injection for stubborn cases",
      ],
    },
  ],
  recoveryIntro: "Recovery is usually steady over a few weeks:",
  recovery: [
    { when: "Weeks 0 to 4", what: "Activity modification, stretching, and anti-inflammatory measures." },
    { when: "Weeks 4 to 8", what: "Progressive strengthening and a graded return to activity, addressing the underlying cause." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "It is not a problem inside the joint.", body: "The pain is from a surface bursa on the inner shin, not from inside the knee. Confirming that avoids unnecessary worry about a meniscus or cartilage problem." },
      { heading: "It often points to something else.", body: "Pes anserine bursitis frequently accompanies knee arthritis, tight hamstrings, or a training error. Treating that underlying factor is what prevents it from coming back." },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "Irritation of the pes anserine bursa, inner shin below the knee" },
    { label: "Common in", value: "Runners, knee arthritis, extra weight" },
    { label: "Treatment", value: "Activity modification, stretching, injection" },
    { label: "Surgery", value: "Essentially never needed" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Treats the underlying cause, not just the bursa",
    "Conservative, since the condition resolves without surgery",
    "Distinguishes it from problems inside the knee joint",
  ],
  related: [
    { name: "Patellofemoral Pain Syndrome", slug: "patellofemoral-syndrome" },
    { name: "Prepatellar Bursitis", slug: "prepatellar-bursitis" },
    { name: "Knee Collateral Ligament Injury", slug: "knee-collateral-ligament" },
    { name: "Patellar Tendonitis", slug: "patellar-tendonitis" },
  ],
  ctaCard: {
    eyebrow: "Inner-knee pain below the joint?",
    headline: "Settles without surgery.",
  },
  faqHeadline: "Pes anserine bursitis, answered.",
  faqs: [
    {
      question: "Is this a knee joint problem?",
      answer:
        "No. Pes anserine bursitis is irritation of a small fluid sac on the inner shin, a few centimeters below the knee joint, not a problem inside the joint. The tenderness is localized to that spot, which is what distinguishes it from a meniscus or cartilage issue.",
    },
    {
      question: "How is it treated?",
      answer:
        "Without surgery. Activity modification, stretching and strengthening (especially the hamstrings), and anti-inflammatory measures resolve most cases, and a corticosteroid injection helps stubborn ones. Addressing the underlying cause, such as arthritis or a training error, keeps it from returning.",
    },
  ],
  bottomCtaTitle: "Tender, achy inner knee?",
  bottomCtaItalic: "A benign problem with a simple fix.",
  bottomCtaBody:
    "Pes anserine bursitis is a benign, self-limiting cause of inner-knee pain that responds to activity modification, stretching, and, when needed, an injection. The evaluation also confirms it is not a problem inside the joint.",
  metaTitle: "Pes Anserine Bursitis, Steven J. Lee, MD",
  metaDescription:
    "Pes anserine bursitis (inner-knee pain) evaluated and treated by Dr. Steven J. Lee, MD. Activity modification, stretching, and injection explained.",
  schemaDescription:
    "Pes anserine bursitis is irritation of a bursa on the inner side of the knee below the joint, causing inner-knee pain. It is treated without surgery using activity modification, stretching, and injection.",
};

const prepatellarBursitis: ConditionPageContent = {
  slug: "prepatellar-bursitis",
  name: "Prepatellar Bursitis",
  region: "Knee & Sports",
  headerTitle: "Prepatellar Bursitis:",
  headerItalic: "swelling on the front of the kneecap.",
  headerLede:
    "Prepatellar bursitis is swelling of the sac in front of the kneecap, often from kneeling or a direct blow. Most cases settle without surgery, but an infected bursa needs prompt treatment.",
  byline: sportsByline,
  overview: [
    "The prepatellar bursa is a thin sac between the skin and the front of the kneecap. Repeated kneeling or a direct blow can irritate it and fill it with fluid, producing a soft, swollen bump on the front of the knee, sometimes called housemaid's knee.",
    "Most prepatellar bursitis is irritation that settles with simple measures. The important exception is an infected bursa, which is red, warm, and tender and needs prompt treatment to avoid spreading.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common findings include:"],
      bullets: [
        "A soft, swollen bump on the front of the kneecap",
        "Pain with kneeling or pressure on the front of the knee",
        "Limited bending when the swelling is large",
        "Redness, warmth, and fever if the bursa is infected",
      ],
    },
    {
      heading: "When to act quickly",
      body: [
        "A bursa that is red, hot, very tender, or accompanied by fever may be infected (septic bursitis). That needs prompt evaluation, often with aspiration to test the fluid and antibiotics, and sometimes drainage. Distinguishing infected from simply irritated is the key first step.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "For a non-infected, irritated bursa, Dr. Lee uses activity modification (especially avoiding kneeling), padding, anti-inflammatory measures, and sometimes aspiration of the fluid. Most settle without surgery.",
      "When infection is suspected, the fluid is tested and treated with antibiotics, with drainage if needed. Surgical removal of the bursa is reserved for chronic, recurrent cases that do not respond to these measures.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most irritated bursae respond to:"],
      bullets: [
        "Avoiding kneeling and using knee padding",
        "Anti-inflammatory measures and ice",
        "Aspiration of the fluid in selected cases",
      ],
    },
    {
      heading: "Infection and recurrence",
      body: [
        "A suspected infected bursa is aspirated, tested, and treated with antibiotics, with drainage when needed. For chronic or repeatedly recurrent bursitis that does not settle, surgical removal of the bursa is an option.",
      ],
    },
  ],
  recoveryIntro: "Recovery is usually quick for an irritated bursa:",
  recovery: [
    { when: "Weeks 0 to 3", what: "Avoid kneeling, use padding, and apply anti-inflammatory measures. Swelling subsides gradually." },
    { when: "If infected", what: "Antibiotics and close follow-up, with drainage if the infection does not settle promptly." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Most are not infected.", body: "The majority of prepatellar bursitis is simple irritation that settles with padding and avoiding kneeling. But a red, hot, tender bursa needs prompt evaluation for infection." },
      { heading: "Repeated kneeling is the usual culprit.", body: "Occupations and activities that involve frequent kneeling are the classic cause. Padding and avoiding kneeling are both treatment and prevention." },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "Swelling of the bursa in front of the kneecap" },
    { label: "Common cause", value: "Kneeling or a direct blow" },
    { label: "Watch for", value: "Infection (red, hot, tender, fever)" },
    { label: "Treatment", value: "Padding, activity modification, aspiration" },
    { label: "Surgery", value: "Reserved for chronic, recurrent cases" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Distinguishes an infected bursa from a simply irritated one",
    "Conservative care for the typical, non-infected case",
    "Bursa removal reserved for chronic, recurrent bursitis",
  ],
  related: [
    { name: "Pes Anserine Bursitis", slug: "pes-anserine-bursitis" },
    { name: "Patellar Tendonitis", slug: "patellar-tendonitis" },
    { name: "Patellofemoral Pain Syndrome", slug: "patellofemoral-syndrome" },
    { name: "Patella Fracture", slug: "patella-fracture" },
  ],
  ctaCard: {
    eyebrow: "Swelling on the front of the knee?",
    headline: "Usually settles without surgery.",
  },
  faqHeadline: "Prepatellar bursitis, answered.",
  faqs: [
    {
      question: "What causes the swelling on the front of my knee?",
      answer:
        "It is usually fluid in the prepatellar bursa, the sac in front of the kneecap, from repeated kneeling or a direct blow. It produces a soft, swollen bump. Most cases are simple irritation, but a bursa that is red, hot, and very tender may be infected and needs prompt attention.",
    },
    {
      question: "Do I need surgery?",
      answer:
        "Almost never. Non-infected bursitis settles with avoiding kneeling, padding, anti-inflammatory measures, and sometimes aspiration. An infected bursa is treated with antibiotics and drainage if needed. Surgical removal is reserved for chronic, recurrent cases.",
    },
  ],
  bottomCtaTitle: "Soft, swollen bump on the kneecap?",
  bottomCtaItalic: "Usually simple, occasionally urgent.",
  bottomCtaBody:
    "Most prepatellar bursitis is simple irritation that settles with padding and avoiding kneeling. The one thing to act on quickly is a red, hot, tender bursa, which may be infected. The evaluation sorts out which one you have.",
  metaTitle: "Prepatellar Bursitis, Steven J. Lee, MD",
  metaDescription:
    "Prepatellar bursitis (kneecap swelling) evaluated and treated by Dr. Steven J. Lee, MD. Activity modification, aspiration, and the warning signs of infection explained.",
  schemaDescription:
    "Prepatellar bursitis is swelling of the bursa in front of the kneecap, often from kneeling. Most cases settle without surgery; an infected bursa needs prompt antibiotic treatment and sometimes drainage.",
};

const stressFracture: ConditionPageContent = {
  slug: "stress-fracture",
  name: "Stress Fracture",
  region: "Knee & Sports",
  headerTitle: "Stress Fracture:",
  headerItalic: "the overuse injury hiding as a shin or foot ache.",
  headerLede:
    "A stress fracture is a small crack in bone from repetitive loading rather than a single injury, common in runners and athletes who ramp up too fast. Most heal with activity modification, and treating why it happened is as important as treating the fracture.",
  byline: sportsByline,
  overview: [
    "A stress fracture is a tiny crack that develops when a bone is loaded repeatedly faster than it can repair itself. It shows up most often in the shin and the bones of the foot, typically after a spike in training, a change in surface or footwear, or a return from time off.",
    "The pain builds gradually, hurts with activity, and eases with rest at first, then becomes more constant. Catching it early matters, because some locations are at higher risk of not healing and need more protection.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common findings include:"],
      bullets: [
        "Activity-related pain that builds over weeks, eased by rest early on",
        "A focal, tender spot over the bone",
        "Pain that progresses to hurting with walking or at rest",
        "A history of a training spike or change in activity",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "Early stress fractures often do not show on X-rays, so an MRI is the most sensitive test and is used when the suspicion is high. The location matters, some sites are low risk and heal readily, while others are high risk for not healing and are treated more aggressively.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee treats most stress fractures with activity modification and a graded, monitored return to loading, protecting the bone while it heals. Just as important is finding why it happened, training errors, footwear, biomechanics, and bone-health or nutritional factors, so it does not recur.",
      "High-risk locations, and fractures that are not healing, may need a period of protected weight-bearing or, in select cases, surgery to support healing. Identifying the high-risk sites is what prevents a small crack from becoming a complete fracture.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most stress fractures heal with:"],
      bullets: [
        "Activity modification and a graded return to loading",
        "Protected weight-bearing for higher-risk sites",
        "Addressing training, footwear, and biomechanics",
        "Evaluating bone-health and nutritional factors",
      ],
    },
    {
      heading: "When more is needed",
      body: [
        "High-risk stress fractures and those that fail to heal may need stricter protection or, in select cases, surgical fixation to support healing. Recognizing a high-risk location early is what guides this.",
      ],
    },
  ],
  recoveryIntro: "Recovery is gradual and monitored:",
  recovery: [
    { when: "Weeks 0 to 6", what: "Activity modification and protected loading as directed, with attention to the underlying cause." },
    { when: "Weeks 6 to 12", what: "Graded return to loading and running, guided by symptoms and healing." },
    { when: "Ongoing", what: "Address training, footwear, and bone-health factors to prevent recurrence." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "A normal X-ray does not rule it out.", body: "Early stress fractures often do not appear on X-rays. When suspicion is high, an MRI is the test that confirms it." },
      { heading: "Why it happened matters.", body: "A stress fracture is usually a sign of a training, biomechanical, or bone-health issue. Treating only the crack, without that, sets up the next one." },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "A small crack in bone from repetitive loading" },
    { label: "Common sites", value: "Shin and bones of the foot" },
    { label: "Best test", value: "MRI when X-rays are normal" },
    { label: "Treatment", value: "Activity modification and graded loading" },
    { label: "Also address", value: "Training, footwear, and bone health" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Treats the fracture and the cause, so it does not recur",
    "Recognizes high-risk locations that need more protection",
    "Graded, monitored return to sport",
  ],
  related: [
    { name: "Shin Splints (Medial Tibial Stress Syndrome)", slug: "shin-splints" },
    { name: "Patellar Tendonitis", slug: "patellar-tendonitis" },
    { name: "Tibial Plateau Fracture", slug: "tibial-plateau-fracture" },
    { name: "Achilles Tendonitis", slug: "achilles-tendonitis" },
  ],
  ctaCard: {
    eyebrow: "Activity pain that keeps building?",
    headline: "A stress fracture is worth ruling out.",
  },
  faqHeadline: "Stress fractures, answered.",
  faqs: [
    {
      question: "My X-ray was normal but it still hurts. Could it be a stress fracture?",
      answer:
        "Yes. Early stress fractures frequently do not show on X-rays. When the pattern fits, a focal, activity-related ache that builds over weeks after a training spike, an MRI is the most sensitive test and is used to confirm it.",
    },
    {
      question: "Do stress fractures need surgery?",
      answer:
        "Most do not. The majority heal with activity modification and a graded return to loading. High-risk locations and fractures that fail to heal may need stricter protection or, in select cases, surgery to support healing. The location strongly influences the plan.",
    },
    {
      question: "Why do you look at my training and nutrition?",
      answer:
        "A stress fracture is usually a sign that loading outpaced the bone's ability to adapt, influenced by training, footwear, biomechanics, and bone health. Addressing those factors is what keeps the fracture from recurring once it heals.",
    },
  ],
  bottomCtaTitle: "A nagging shin or foot ache that worsens with activity?",
  bottomCtaItalic: "Catch it early.",
  bottomCtaBody:
    "Stress fractures heal well when caught early and loaded carefully, and the location guides how aggressive to be. Treating why it happened, training, footwear, and bone health, is what prevents the next one.",
  metaTitle: "Stress Fracture, Steven J. Lee, MD",
  metaDescription:
    "Stress fractures evaluated and treated by Dr. Steven J. Lee, MD. MRI diagnosis, activity modification, high-risk locations, and addressing the underlying cause explained.",
  schemaDescription:
    "A stress fracture is a small crack in bone from repetitive overload, common in the shin and foot. Most heal with activity modification and graded loading, with attention to high-risk locations and underlying causes.",
};

const shinSplints: ConditionPageContent = {
  slug: "shin-splints",
  name: "Shin Splints (Medial Tibial Stress Syndrome)",
  region: "Knee & Sports",
  headerTitle: "Shin Splints:",
  headerItalic: "exercise-related shin pain, and how to settle it.",
  headerLede:
    "Shin splints, or medial tibial stress syndrome, are a common overuse cause of inner-shin pain in runners. They are treated without surgery, and the main job is to distinguish them from a stress fracture.",
  byline: sportsByline,
  overview: [
    "Shin splints, medically called medial tibial stress syndrome, are pain along the inner edge of the shinbone from overuse, where the muscles and the bone's lining are irritated by repetitive loading. It is one of the most common complaints in runners and in anyone who increases activity quickly.",
    "Shin splints sit on a spectrum with stress fractures, and the early symptoms overlap. The most important step is sorting out which one is present, because a stress fracture needs more protection.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "Aching pain along the inner edge of the shin, over a broad area",
        "Pain at the start of activity that may ease as you warm up",
        "Tenderness along a length of the shin rather than one focal spot",
        "Pain that worsens with continued training",
      ],
    },
    {
      heading: "Shin splints versus stress fracture",
      body: [
        "Shin splints cause tenderness spread along the shin, while a stress fracture causes a focal, pinpoint tender spot and tends to hurt more, including at rest. When the picture is concerning, an MRI distinguishes the two. Getting this right changes how cautious the return to running needs to be.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Shin splints are treated without surgery. Dr. Lee starts with a relative rest period, then a graded return to running, while correcting the factors that caused it, training spikes, footwear, running surface, and mechanics.",
      "If the pain is focal and concerning, the first job is to rule out a stress fracture, because that needs more protection. Most shin splints settle with a sensible loading program and attention to the underlying cause.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Shin splints respond to:"],
      bullets: [
        "A relative rest period followed by a graded return to running",
        "Correcting training errors and progressing load gradually",
        "Footwear and running-form adjustments",
        "Calf and lower-leg strengthening and flexibility work",
      ],
    },
  ],
  recoveryIntro: "Recovery is gradual and depends on a sensible return:",
  recovery: [
    { when: "Weeks 0 to 4", what: "Relative rest, cross-training, and addressing the cause. Pain settles as loading is reduced." },
    { when: "Weeks 4 to 8", what: "Graded return to running, progressing slowly to avoid recurrence." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Pushing through can make it worse.", body: "Running through shin pain risks progressing to a stress fracture. A short period of relative rest and a graded return is faster in the long run." },
      { heading: "It is not always 'just' shin splints.", body: "Focal, pinpoint shin pain that hurts at rest may be a stress fracture, which needs more protection. When in doubt, it is worth confirming." },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "Overuse irritation along the inner shin" },
    { label: "Common in", value: "Runners and rapid activity increases" },
    { label: "Key distinction", value: "Stress fracture (focal, hurts at rest)" },
    { label: "Treatment", value: "Relative rest and graded return" },
    { label: "Surgery", value: "Not needed" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Distinguishes shin splints from a stress fracture",
    "Corrects the training and mechanical causes",
    "Graded, sensible return to running",
  ],
  related: [
    { name: "Stress Fracture", slug: "stress-fracture" },
    { name: "Patellar Tendonitis", slug: "patellar-tendonitis" },
    { name: "Achilles Tendonitis", slug: "achilles-tendonitis" },
    { name: "Plantar Fasciitis", slug: "plantar-fasciitis" },
  ],
  ctaCard: {
    eyebrow: "Inner-shin pain when you run?",
    headline: "Settles with a sensible plan.",
  },
  faqHeadline: "Shin splints, answered.",
  faqs: [
    {
      question: "How do I know it is shin splints and not a stress fracture?",
      answer:
        "Shin splints cause aching spread along a length of the inner shin and tend to ease as you warm up. A stress fracture causes a focal, pinpoint tender spot and often hurts more, including at rest. When the pain is focal or concerning, an MRI distinguishes the two, which matters because a stress fracture needs more protection.",
    },
    {
      question: "Can I keep running?",
      answer:
        "Running through worsening shin pain risks progressing to a stress fracture. A short period of relative rest, cross-training, and a graded return, while correcting training errors and footwear, settles most shin splints faster than pushing through.",
    },
  ],
  bottomCtaTitle: "Shin pain every time you ramp up running?",
  bottomCtaItalic: "Treat it before it becomes a fracture.",
  bottomCtaBody:
    "Shin splints settle with relative rest, a graded return, and correcting the training and mechanical causes. The key step is making sure it is not a stress fracture, which needs more protection.",
  metaTitle: "Shin Splints (Medial Tibial Stress Syndrome), Steven J. Lee, MD",
  metaDescription:
    "Shin splints (medial tibial stress syndrome) evaluated and treated by Dr. Steven J. Lee, MD. Relative rest, graded return to running, and distinguishing them from a stress fracture explained.",
  schemaDescription:
    "Shin splints (medial tibial stress syndrome) are an overuse cause of inner-shin pain in runners, treated without surgery. The main step is distinguishing them from a stress fracture.",
};

const osgoodSchlatter: ConditionPageContent = {
  slug: "osgood-schlatter",
  name: "Osgood-Schlatter Disease",
  region: "Knee & Sports",
  headerTitle: "Osgood-Schlatter:",
  headerItalic: "the growing athlete's knee bump.",
  headerLede:
    "Osgood-Schlatter is a common cause of knee pain in active, growing adolescents, a painful, prominent bump just below the kneecap. It is self-limiting and settles with growth, managed without surgery.",
  byline: sportsByline,
  overview: [
    "Osgood-Schlatter disease is irritation of the growth area at the top of the shinbone, where the patellar tendon attaches, just below the kneecap. During growth spurts, repetitive pull from the powerful thigh muscles irritates this area, producing pain and a tender, prominent bump.",
    "It is common in active adolescents, especially around growth spurts and in sports with a lot of running and jumping. It is benign and self-limiting, meaning it resolves as the bones finish growing, and it is managed without surgery.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints in a growing athlete include:"],
      bullets: [
        "Pain and a tender, prominent bump just below the kneecap",
        "Pain with running, jumping, kneeling, and stairs",
        "Pain that flares with activity and eases with rest",
        "Usually one knee, sometimes both",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "Osgood-Schlatter is a clinical diagnosis based on the age, the activity, and tenderness over the bump below the kneecap. X-rays are used mainly to rule out other causes when the picture is atypical.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Reassurance is a large part of the treatment, because Osgood-Schlatter is benign and resolves with skeletal maturity. Dr. Lee focuses on activity modification to a comfortable level rather than complete rest, along with stretching, strengthening, and ice after activity.",
      "The bump may remain into adulthood, but the pain almost always resolves as growth finishes. Surgery is essentially never needed for typical Osgood-Schlatter, and is reserved only for the rare adult with a persistent painful ossicle long after growth.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["The condition is managed with simple measures:"],
      bullets: [
        "Activity modification to a comfortable level, not complete rest",
        "Quadriceps and hamstring stretching and strengthening",
        "Ice after activity and anti-inflammatory measures as needed",
        "A patellar strap for some athletes during activity",
      ],
    },
  ],
  recoveryIntro: "The course is reassuring:",
  recovery: [
    { when: "Through the growing years", what: "Symptoms flare with activity and settle with rest and the measures above. Activity can usually continue at a comfortable level." },
    { when: "With skeletal maturity", what: "The pain almost always resolves as the bones finish growing. A painless bump may remain." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "It is not dangerous.", body: "Osgood-Schlatter is benign and self-limiting. Continuing activity at a comfortable level does not harm the knee, and the condition resolves with growth." },
      { heading: "Complete rest is usually not necessary.", body: "Most young athletes can keep playing at a tolerable level. The goal is to manage the pain, not to stop activity entirely." },
    ],
  },
  sidebarFacts: [
    { label: "Who it affects", value: "Active, growing adolescents" },
    { label: "Where it hurts", value: "Bump just below the kneecap" },
    { label: "Nature", value: "Benign and self-limiting" },
    { label: "Treatment", value: "Activity modification, stretching, ice" },
    { label: "Resolution", value: "Almost always with skeletal maturity" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Reassurance and activity modification rather than complete rest",
    "Keeps young athletes playing at a comfortable level when possible",
    "Especially attuned to the demands of growing, competitive athletes",
  ],
  related: [
    { name: "Patellar Tendonitis", slug: "patellar-tendonitis" },
    { name: "Patellofemoral Pain Syndrome", slug: "patellofemoral-syndrome" },
    { name: "Stress Fracture", slug: "stress-fracture" },
    { name: "Shin Splints (Medial Tibial Stress Syndrome)", slug: "shin-splints" },
  ],
  ctaCard: {
    eyebrow: "Adolescent with a painful knee bump?",
    headline: "Benign, and it resolves with growth.",
  },
  faqHeadline: "Osgood-Schlatter, answered.",
  faqs: [
    {
      question: "Is Osgood-Schlatter serious?",
      answer:
        "No. It is a benign, self-limiting condition of active, growing adolescents. The pain comes from irritation of the growth area below the kneecap during growth spurts, and it almost always resolves as the bones finish growing. A painless bump may remain.",
    },
    {
      question: "Does my child have to stop sports?",
      answer:
        "Usually not. Most young athletes can keep playing at a comfortable level, with activity modified to manage the pain rather than stopped entirely, along with stretching, strengthening, and ice after activity. Complete rest is rarely necessary.",
    },
    {
      question: "Will the bump go away?",
      answer:
        "The pain almost always resolves with skeletal maturity, but the bony bump below the kneecap often remains into adulthood. It is typically painless and does not require treatment. Surgery is reserved for the rare adult with a persistent painful fragment.",
    },
  ],
  bottomCtaTitle: "Growing athlete with knee pain below the kneecap?",
  bottomCtaItalic: "Reassuring, and very manageable.",
  bottomCtaBody:
    "Osgood-Schlatter is a common, benign cause of knee pain in growing athletes that resolves with skeletal maturity. It is managed with activity modification, stretching, and ice, and most young athletes can keep playing at a comfortable level.",
  metaTitle: "Osgood-Schlatter Disease, Steven J. Lee, MD",
  metaDescription:
    "Osgood-Schlatter disease in growing adolescents evaluated and managed by Dr. Steven J. Lee, MD. Activity modification, stretching, and reassurance about its self-limiting course explained.",
  schemaDescription:
    "Osgood-Schlatter disease is a self-limiting cause of knee pain in active, growing adolescents, with a tender bump below the kneecap. It is managed without surgery and resolves with skeletal maturity.",
};

const patellarTendonitis: ConditionPageContent = {
  slug: "patellar-tendonitis",
  name: "Patellar Tendonitis (Jumper's Knee)",
  region: "Knee & Sports",
  headerTitle: "Patellar Tendonitis:",
  headerItalic: "jumper's knee, treated with patience.",
  headerLede:
    "Patellar tendonitis, or jumper's knee, is pain in the tendon just below the kneecap from overload in jumping and running athletes. Like other tendon problems, it is mostly degeneration, and a loading exercise program is the foundation of treatment.",
  byline: sportsByline,
  overview: [
    "Patellar tendonitis is irritation and wear of the patellar tendon, which connects the kneecap to the shinbone. It is common in athletes who jump and change direction, basketball, volleyball, and similar sports, which is why it is nicknamed jumper's knee.",
    "Despite the name 'itis,' it is more a degenerative, failed-healing tendon than active inflammation, which is why rest alone often is not enough and a structured loading program works better. It can be stubborn, but the large majority improve without surgery.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "Pain in the tendon just below the kneecap",
        "Pain with jumping, landing, squatting, and stairs",
        "Stiffness and pain at the start of activity",
        "Tenderness directly over the tendon",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "It is largely a clinical diagnosis based on tenderness over the patellar tendon and pain reproduced by loading the knee. Ultrasound or MRI is used to assess the tendon when the picture is unclear or recovery stalls.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Patellar tendonitis is treated patiently and conservatively. Dr. Lee emphasizes a structured loading program, especially eccentric and heavy-slow resistance exercise, along with load management and activity modification, the measures with the best track record for tendons.",
      "For tendons that stall, PRP is an option Dr. Lee discusses. Surgery, which addresses the degenerated portion of the tendon, is reserved for the small minority with pain that persists after an extended, genuine course of conservative care.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["The foundation of treatment is loading the tendon, not resting it:"],
      bullets: [
        "A structured eccentric and heavy-slow resistance program",
        "Load and training-volume management",
        "Activity modification during flares",
        "PRP as an option for tendons that are not healing",
      ],
    },
    {
      heading: "When conservative care stalls",
      body: [
        "Surgery, which removes the degenerated portion of the tendon and stimulates healing, is reserved for the small minority whose pain persists after an extended, genuine trial of a loading program.",
      ],
    },
  ],
  recoveryIntro: "Recovery is measured in months, not days:",
  recovery: [
    { when: "Weeks 0 to 12", what: "A structured loading program with load management. Improvement is gradual." },
    { when: "Months 3 to 6", what: "Progressive return to jumping and sport as the tendon tolerates load." },
    { when: "After surgery (rare)", what: "Protected loading early, then a graded program over several months." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Rest alone usually is not enough.", body: "Because patellar tendonitis is mostly tendon degeneration, the tendon needs progressive loading to heal. Complete rest tends to feel better briefly, then the pain returns with activity." },
      { heading: "It takes patience.", body: "Tendons heal slowly. A loading program works, but over months rather than days, which is the part athletes find hardest." },
    ],
  },
  sidebarFacts: [
    { label: "Tendon involved", value: "Patellar tendon, below the kneecap" },
    { label: "Common in", value: "Jumping and cutting athletes" },
    { label: "Nature", value: "Degeneration more than inflammation" },
    { label: "Foundation", value: "Eccentric and heavy-slow loading" },
    { label: "Surgery", value: "Rare, for cases that fail extended care" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Loading-program-first, the approach with the best track record",
    "PRP as an option for tendons that are not healing",
    "Return-to-sport planning for jumping athletes",
  ],
  related: [
    { name: "Patellofemoral Pain Syndrome", slug: "patellofemoral-syndrome" },
    { name: "Osgood-Schlatter Disease", slug: "osgood-schlatter" },
    { name: "Patellar and Quadriceps Tendon Rupture", slug: "patellar-quad-tendon-rupture" },
    { name: "PRP (Platelet-Rich Plasma) Injections", slug: "prp-injections" },
  ],
  ctaCard: {
    eyebrow: "Pain below the kneecap with jumping?",
    headline: "A loading program is the foundation.",
  },
  faqHeadline: "Patellar tendonitis, answered.",
  faqs: [
    {
      question: "Why does rest not fix my jumper's knee?",
      answer:
        "Patellar tendonitis is mostly tendon degeneration rather than active inflammation. The tendon needs progressive, controlled loading to heal, so rest feels better briefly but the pain returns with activity. A structured eccentric and heavy-slow loading program is the treatment with the best track record.",
    },
    {
      question: "Will I need surgery?",
      answer:
        "Almost certainly not. The large majority of patellar tendonitis improves with a loading program and load management, though it takes months. Surgery, which addresses the degenerated portion of the tendon, is reserved for the small minority whose pain persists after an extended, genuine trial of conservative care.",
    },
    {
      question: "Does PRP help?",
      answer:
        "For tendons that are not healing despite a good loading program, PRP is an option Dr. Lee discusses. The loading program remains the foundation, with PRP considered as an adjunct in stubborn cases rather than a substitute for the exercise work.",
    },
  ],
  bottomCtaTitle: "Stubborn pain in the tendon below your kneecap?",
  bottomCtaItalic: "Patience and the right loading win.",
  bottomCtaBody:
    "Jumper's knee is stubborn but the large majority improve with a structured loading program and load management, with PRP an option for tendons that stall. Surgery is rarely needed.",
  metaTitle: "Patellar Tendonitis (Jumper's Knee), Steven J. Lee, MD",
  metaDescription:
    "Patellar tendonitis (jumper's knee) evaluated and treated by Dr. Steven J. Lee, MD. Eccentric and heavy-slow loading, load management, PRP, and when surgery is considered explained.",
  schemaDescription:
    "Patellar tendonitis (jumper's knee) is degeneration of the patellar tendon below the kneecap from overload. Treatment is mainly a structured loading exercise program, with PRP or surgery in selected cases.",
};

const patellarQuadRupture: ConditionPageContent = {
  slug: "patellar-quad-tendon-rupture",
  name: "Patellar and Quadriceps Tendon Rupture",
  region: "Knee & Sports",
  headerTitle: "Patellar and Quad Tendon Rupture:",
  headerItalic: "when the knee can no longer straighten.",
  headerLede:
    "A complete rupture of the patellar or quadriceps tendon breaks the knee's ability to straighten and needs prompt surgical repair. Treated quickly, the results are reliable.",
  byline: sportsByline,
  overview: [
    "The quadriceps and patellar tendons connect the powerful thigh muscles to the kneecap and then to the shinbone, forming the extensor mechanism that straightens the knee. A complete tear of either, usually from a forceful, off-balance load or a fall, breaks that mechanism, so the knee cannot actively straighten or hold against gravity.",
    "These are time-sensitive injuries. A complete rupture is repaired surgically, and repairing it promptly, before the tendon retracts and scars, makes the operation more straightforward and the result more reliable.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common findings include:"],
      bullets: [
        "A sudden pop and giving way, often while loading a bent knee",
        "Inability to straighten the knee or keep it straight against gravity",
        "A palpable gap above or below the kneecap",
        "A kneecap that sits too high or too low, with swelling and bruising",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "The exam tests the ability to actively straighten the knee, which is lost in a complete rupture. X-rays show the position of the kneecap, and ultrasound or MRI confirms whether the tear is partial or complete and which tendon is involved.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "The key recognition is that a lost ability to straighten the knee after an injury is a surgical emergency of timing, even if it is not a true emergency of the hour. Dr. Lee repairs complete ruptures promptly, reattaching the tendon to the kneecap with a secure suture-anchor or transosseous construct that allows protected motion to begin.",
      "Partial tears with an intact ability to straighten the knee can sometimes be treated without surgery, in a brace, with a careful rehabilitation program. Distinguishing complete from partial is the decision that drives everything.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "A partial tear that preserves the ability to actively straighten the knee can be treated in a brace with a progressive rehabilitation program, monitored closely to be sure the extensor mechanism stays intact.",
      ],
    },
    {
      heading: "Surgical repair",
      body: [
        "A complete rupture is repaired by reattaching the tendon to the kneecap with a secure construct, ideally sooner rather than later, before the tendon retracts. Strong fixation is what allows protected motion to start and limits stiffness.",
      ],
    },
  ],
  recoveryIntro: "Recovery protects the repair while restoring motion:",
  recovery: [
    { when: "Weeks 0 to 2", what: "Brace with the knee straight to protect the repair. Begin gentle, guided motion as directed." },
    { when: "Weeks 2 to 8", what: "Progressive range of motion in a brace, with weight-bearing as the repair allows." },
    { when: "Months 3 to 6", what: "Strengthening and a graded return to activity and sport." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Losing the ability to straighten is the red flag.", body: "If you cannot actively straighten the knee or keep it straight after an injury, the extensor mechanism may be torn, which needs prompt evaluation rather than waiting to see if it improves." },
      { heading: "Timing protects the result.", body: "A complete rupture repaired promptly is more straightforward than one addressed weeks later, after the tendon has retracted and scarred." },
    ],
  },
  sidebarFacts: [
    { label: "Structure involved", value: "Quadriceps or patellar tendon (extensor mechanism)" },
    { label: "Hallmark", value: "Cannot actively straighten the knee" },
    { label: "Complete tears", value: "Prompt surgical repair" },
    { label: "Partial tears", value: "Bracing if straightening is preserved" },
    { label: "Timing", value: "Earlier repair is more straightforward" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Recognizes a torn extensor mechanism as time-sensitive",
    "Secure repair that allows protected motion early",
    "Distinguishes complete from partial tears to guide treatment",
  ],
  related: [
    { name: "Patella Fracture", slug: "patella-fracture" },
    { name: "Patellar Tendonitis", slug: "patellar-tendonitis" },
    { name: "Patellofemoral Pain Syndrome", slug: "patellofemoral-syndrome" },
    { name: "Tibial Plateau Fracture", slug: "tibial-plateau-fracture" },
  ],
  ctaCard: {
    eyebrow: "Can't straighten your knee after an injury?",
    headline: "Prompt evaluation protects the result.",
  },
  faqHeadline: "Patellar and quad tendon rupture, answered.",
  faqs: [
    {
      question: "How do I know if I ruptured the tendon?",
      answer:
        "The hallmark is a sudden pop followed by the inability to actively straighten the knee or hold it straight against gravity, often with a gap you can feel above or below the kneecap and a kneecap that sits too high or too low. Losing the ability to straighten the knee after an injury deserves prompt evaluation.",
    },
    {
      question: "Does it always need surgery?",
      answer:
        "Complete ruptures do, because the knee cannot straighten without an intact tendon. They are repaired by reattaching the tendon to the kneecap, ideally promptly. Partial tears that preserve the ability to straighten the knee can sometimes be treated in a brace with rehabilitation.",
    },
    {
      question: "How soon should it be repaired?",
      answer:
        "A complete rupture is best repaired sooner rather than later, before the tendon retracts and scars, which makes the operation more straightforward and the result more reliable. It is a time-sensitive injury, even if not a same-hour emergency.",
    },
  ],
  bottomCtaTitle: "Sudden pop and a knee that won't straighten?",
  bottomCtaItalic: "This one is time-sensitive.",
  bottomCtaBody:
    "A complete patellar or quadriceps tendon rupture breaks the knee's ability to straighten and is repaired most reliably when treated promptly. If you cannot straighten the knee after an injury, it is worth an urgent evaluation.",
  metaTitle: "Patellar and Quadriceps Tendon Rupture, Steven J. Lee, MD",
  metaDescription:
    "Patellar and quadriceps tendon ruptures evaluated and treated by Dr. Steven J. Lee, MD. The lost ability to straighten the knee, prompt surgical repair, and recovery explained.",
  schemaDescription:
    "A patellar or quadriceps tendon rupture tears the knee's extensor mechanism, so the knee cannot actively straighten. Complete ruptures are repaired surgically, ideally promptly; some partial tears are braced.",
};

const patellaFracture: ConditionPageContent = {
  slug: "patella-fracture",
  name: "Patella Fracture",
  region: "Knee & Sports",
  headerTitle: "Patella Fracture:",
  headerItalic: "a broken kneecap, and whether you can straighten it.",
  headerLede:
    "A patella (kneecap) fracture usually comes from a direct blow or fall. The key question is whether the knee can still straighten. Fractures that stay aligned with an intact straightening mechanism heal without surgery; displaced ones are fixed.",
  byline: sportsByline,
  overview: [
    "The patella, or kneecap, sits within the tendon that straightens the knee. It usually breaks from a direct blow or a fall onto the front of the knee. Because the kneecap is part of the straightening mechanism, the most important question is whether the knee can still actively straighten.",
    "When the fragments stay aligned and the straightening mechanism is intact, many patella fractures heal without surgery. When the fragments are displaced or the knee cannot straighten, surgery restores the alignment and the mechanism.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common findings after a blow or fall include:"],
      bullets: [
        "Pain and swelling over the front of the knee",
        "Difficulty or inability to straighten the knee or keep it straight",
        "A palpable gap in the kneecap",
        "Bruising and tenderness directly over the patella",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "X-rays confirm the fracture and how displaced it is, and the exam tests whether the knee can actively straighten. Sometimes a CT scan adds detail for surgical planning. Whether the straightening mechanism is intact is what drives the decision.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee's central question is whether the knee can straighten and whether the fragments are aligned. A non-displaced fracture with an intact straightening mechanism is treated without surgery, immobilized briefly and then moved early to limit stiffness.",
      "Displaced fractures, and any fracture where the knee cannot straighten, are fixed surgically, restoring the alignment and the extensor mechanism with a tension-band or screw-and-plate construct. Early protected motion follows to protect against the stiffness the knee is prone to after immobilization.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "A non-displaced patella fracture with an intact ability to straighten the knee is treated in a brace, with early motion introduced as healing allows to avoid stiffness.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Displaced fractures, and fractures that disrupt the ability to straighten the knee, are fixed surgically to restore the kneecap's alignment and the straightening mechanism. Secure fixation allows protected motion to start early.",
      ],
    },
  ],
  recoveryIntro: "Recovery balances protection with early motion:",
  recovery: [
    { when: "Weeks 0 to 2", what: "Brace, with early gentle motion introduced as the treatment allows. Weight-bearing as directed." },
    { when: "Weeks 2 to 6", what: "Progressive range of motion and strengthening, protecting the healing fracture." },
    { when: "Weeks 6 to 12", what: "Strengthening and a graded return to activity as the fracture heals." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Can you straighten the knee?", body: "The ability to actively straighten the knee is the key question with a kneecap fracture. If it is lost, the straightening mechanism is disrupted and surgery is usually needed." },
      { heading: "Early motion limits stiffness.", body: "As with the elbow, the knee stiffens when held still too long. For stable fractures and after fixation, early protected motion is what protects function." },
    ],
  },
  sidebarFacts: [
    { label: "Bone involved", value: "Patella (kneecap)" },
    { label: "Mechanism", value: "Direct blow or fall onto the front of the knee" },
    { label: "Key question", value: "Can the knee still straighten?" },
    { label: "Non-displaced", value: "Treated without surgery" },
    { label: "Displaced", value: "Surgical fixation" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Decision driven by the straightening mechanism and alignment",
    "Early protected motion to limit stiffness",
    "Surgical fixation for displaced fractures",
  ],
  related: [
    { name: "Patellar and Quadriceps Tendon Rupture", slug: "patellar-quad-tendon-rupture" },
    { name: "Tibial Plateau Fracture", slug: "tibial-plateau-fracture" },
    { name: "Patellofemoral Pain Syndrome", slug: "patellofemoral-syndrome" },
    { name: "Prepatellar Bursitis", slug: "prepatellar-bursitis" },
  ],
  ctaCard: {
    eyebrow: "Broke your kneecap?",
    headline: "Whether you can straighten it guides the plan.",
  },
  faqHeadline: "Patella fractures, answered.",
  faqs: [
    {
      question: "Do I need surgery for a broken kneecap?",
      answer:
        "It depends on whether the fragments are displaced and whether you can still straighten the knee. A non-displaced fracture with an intact straightening mechanism is treated without surgery. Displaced fractures, or any fracture where the knee cannot straighten, are fixed surgically.",
    },
    {
      question: "Why does it matter if I can straighten my knee?",
      answer:
        "The kneecap is part of the mechanism that straightens the knee. If a fracture disrupts that, you cannot actively straighten the leg, which signals that the mechanism needs to be surgically restored. It is the single most important finding in deciding treatment.",
    },
    {
      question: "How long is recovery?",
      answer:
        "Whether treated in a brace or with surgery, early protected motion is introduced to limit stiffness, with strengthening and a graded return over the following weeks to a few months as the fracture heals. The exact pace depends on the fracture and the fixation.",
    },
  ],
  bottomCtaTitle: "Direct blow to the kneecap?",
  bottomCtaItalic: "The straightening test guides everything.",
  bottomCtaBody:
    "A patella fracture is treated based on alignment and whether the knee can straighten. Stable fractures with an intact mechanism heal without surgery, while displaced ones are fixed. Early protected motion protects against stiffness.",
  metaTitle: "Patella Fracture, Steven J. Lee, MD",
  metaDescription:
    "Patella (kneecap) fracture evaluated and treated by Dr. Steven J. Lee, MD. Non-surgical care for stable fractures and surgical fixation for displaced ones, with early motion explained.",
  schemaDescription:
    "A patella fracture is a break of the kneecap, often from a direct blow. Non-displaced fractures with an intact extensor mechanism are treated without surgery; displaced fractures are surgically fixed.",
};

const tibialPlateauFracture: ConditionPageContent = {
  slug: "tibial-plateau-fracture",
  name: "Tibial Plateau Fracture",
  region: "Knee & Sports",
  headerTitle: "Tibial Plateau Fracture:",
  headerItalic: "a fracture into the surface of the knee.",
  headerLede:
    "A tibial plateau fracture breaks the top of the shinbone where it forms the knee joint. Because it involves the joint surface, restoring a smooth, aligned surface is the priority. The treatment depends on how displaced and depressed the fracture is.",
  byline: sportsByline,
  overview: [
    "The tibial plateau is the top of the shinbone, the flat surface the thighbone rests on to form the knee joint. A fracture here, from a fall, a sports injury, or a higher-energy impact, involves the joint surface itself, which makes restoring a smooth, well-aligned surface the central goal.",
    "Because the joint surface is involved, how much the fracture is displaced or depressed strongly influences both treatment and the long-term health of the knee. These fractures also need a careful check of the surrounding soft tissues and the leg's circulation.",
  ],
  bodySections: [
    {
      heading: "Why the joint surface matters",
      body: [
        "An aligned, smooth joint surface lets the knee glide and share load evenly. When a fracture leaves the surface depressed or stepped, it raises the long-term risk of arthritis, which is why displaced tibial plateau fractures are realigned and fixed.",
      ],
    },
    {
      heading: "Symptoms and urgent checks",
      body: [
        "A tibial plateau fracture causes pain, swelling, and an inability to bear weight after the injury. Because of the energy involved, the evaluation also checks the soft tissues, the ligaments, and the leg's circulation, since significant swelling can occasionally threaten the muscles' blood supply and needs urgent attention.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee evaluates the fracture with X-rays and usually a CT scan to map the joint surface, and examines the soft tissues, ligaments, and circulation. Non-displaced fractures with a well-preserved joint surface are treated without surgery, with protected weight-bearing and early motion.",
      "Displaced or depressed fractures are fixed surgically to restore the joint surface and alignment, supporting it with plates and screws and, when needed, bone graft. The aim is a congruent surface and a stable knee, which is what protects against later arthritis.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Non-displaced fractures with a preserved joint surface are treated with protected weight-bearing, bracing, and early motion, monitored with imaging to be sure the alignment holds.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Displaced or depressed fractures are realigned and fixed with plates and screws, with bone graft when needed to support a restored joint surface. A congruent, stable surface is the goal, since it influences the long-term health of the knee.",
      ],
    },
  ],
  recoveryIntro: "Recovery protects the joint surface while restoring motion:",
  recovery: [
    { when: "Weeks 0 to 6", what: "Protected or limited weight-bearing with early motion to keep the knee from stiffening." },
    { when: "Weeks 6 to 12", what: "Progressive weight-bearing as healing allows, with continued range of motion and strengthening." },
    { when: "Months 3 to 6", what: "Strengthening and a graded return to activity as the fracture consolidates." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "It is a joint injury, not just a broken bone.", body: "Because the fracture involves the knee's surface, restoring a smooth, aligned surface matters for the long-term health of the joint, not only for the bone to heal." },
      { heading: "Weight-bearing is limited at first.", body: "Putting weight on a healing tibial plateau too early can displace the surface. Protected weight-bearing with early motion is the usual balance." },
    ],
  },
  sidebarFacts: [
    { label: "Bone involved", value: "Top of the tibia (knee joint surface)" },
    { label: "Why it matters", value: "Involves the joint surface" },
    { label: "Imaging", value: "X-ray plus CT to map the surface" },
    { label: "Non-displaced", value: "Protected weight-bearing and early motion" },
    { label: "Displaced", value: "Surgical realignment and fixation" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Restores the joint surface to protect long-term knee health",
    "Checks ligaments, soft tissues, and circulation, not just the bone",
    "Early protected motion to limit stiffness",
  ],
  related: [
    { name: "Patella Fracture", slug: "patella-fracture" },
    { name: "Knee Collateral Ligament Injury", slug: "knee-collateral-ligament" },
    { name: "ACL Tear", slug: "acl-reconstruction" },
    { name: "PCL Tear", slug: "pcl-tear" },
  ],
  ctaCard: {
    eyebrow: "Fracture into the knee surface?",
    headline: "Restoring the surface is the priority.",
  },
  faqHeadline: "Tibial plateau fractures, answered.",
  faqs: [
    {
      question: "Why is a tibial plateau fracture more involved than a regular break?",
      answer:
        "Because it breaks the top of the shinbone where it forms the knee joint, so the fracture involves the joint surface itself. Restoring a smooth, aligned surface matters for how the knee moves and shares load, and for the long-term risk of arthritis, which is why displaced fractures are realigned and fixed.",
    },
    {
      question: "Do I need surgery?",
      answer:
        "It depends on how displaced and depressed the joint surface is. Non-displaced fractures with a preserved surface are treated with protected weight-bearing, bracing, and early motion. Displaced or depressed fractures are fixed surgically with plates and screws, and bone graft when needed, to restore the surface.",
    },
    {
      question: "When can I put weight on it?",
      answer:
        "Weight-bearing is limited at first, because loading a healing tibial plateau too early can displace the joint surface. The usual approach is protected weight-bearing with early motion to prevent stiffness, progressing as imaging confirms the fracture is healing in good alignment.",
    },
  ],
  bottomCtaTitle: "Fracture at the top of the shinbone?",
  bottomCtaItalic: "The joint surface is what matters most.",
  bottomCtaBody:
    "A tibial plateau fracture involves the knee's joint surface, so restoring a smooth, aligned surface is the priority. Non-displaced fractures are protected and moved early, while displaced ones are realigned and fixed to protect the long-term health of the knee.",
  metaTitle: "Tibial Plateau Fracture, Steven J. Lee, MD",
  metaDescription:
    "Tibial plateau fracture evaluated and treated by Dr. Steven J. Lee, MD. Protected weight-bearing for non-displaced fractures and surgical fixation to restore the joint surface for displaced ones explained.",
  schemaDescription:
    "A tibial plateau fracture breaks the top of the shinbone at the knee joint surface. Non-displaced fractures are treated with protected weight-bearing; displaced or depressed fractures are surgically realigned and fixed.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Foot & Ankle additions (Dr. Lee feedback, June 2026). Reuses sportsByline.
const ankleSprain: ConditionPageContent = {
  slug: "ankle-sprain",
  name: "Ankle Sprain and Instability",
  region: "Foot & Ankle",
  headerTitle: "Ankle Sprain and Instability:",
  headerItalic: "the rolled ankle, and the one that keeps giving way.",
  headerLede:
    "Ankle sprains are among the most common injuries in sport. Most heal with functional rehabilitation rather than prolonged immobilization. When the ankle keeps giving way, ligament repair restores stability.",
  byline: sportsByline,
  overview: [
    "An ankle sprain is a stretch or tear of the ligaments on the outer side of the ankle, usually from rolling the foot inward. Most are treated successfully with early, functional rehabilitation, and the old approach of long immobilization has largely been replaced by guided motion and strengthening.",
    "The problem to watch for is chronic instability, when the ankle keeps turning or giving way after the initial injury heals. That is what tips a simple sprain toward needing a brace program or, occasionally, surgery, and it is also a reason to look for injuries a sprain can hide.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common findings include:"],
      bullets: [
        "Pain, swelling, and bruising on the outer ankle after rolling it",
        "Difficulty bearing weight early on",
        "A sense of the ankle giving way or turning easily afterward",
        "Recurrent sprains with progressively less force",
      ],
    },
    {
      heading: "What a sprain can hide",
      body: [
        "Persistent pain after an ankle sprain deserves a closer look, because a sprain can accompany or be mistaken for a fracture, a cartilage lesion of the ankle (OCD), or a tendon injury on the outer ankle. Sorting these out is part of the evaluation when symptoms do not settle.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "For an acute sprain, Dr. Lee favors functional rehabilitation, early protected motion, balance and strength training, and a graded return to activity, which recovers faster and more completely than prolonged immobilization.",
      "When the ankle remains unstable despite a genuine rehabilitation and bracing program, surgery repairs or reconstructs the torn outer ligaments to restore stability. Persistent pain prompts a search for an associated cartilage or tendon problem that may need its own treatment.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most sprains, and many unstable ankles, respond to:"],
      bullets: [
        "Early functional rehabilitation rather than long immobilization",
        "Balance (proprioception) and strength training",
        "A brace during return to sport for unstable ankles",
        "A graded return to cutting and pivoting activity",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "For chronic instability that persists despite a genuine rehabilitation and bracing program, the torn outer ligaments are repaired or reconstructed to restore stability. Any associated cartilage or tendon problem is addressed at the same time.",
      ],
    },
  ],
  recoveryIntro: "Recovery emphasizes functional rehabilitation:",
  recovery: [
    { when: "Weeks 0 to 2", what: "Protected weight-bearing and early motion. Control swelling. Begin balance work as comfort allows." },
    { when: "Weeks 2 to 6", what: "Progressive strengthening and balance training, then a graded return to running and cutting." },
    { when: "After surgery", what: "A brace early, then progressive strengthening and a graded return to sport over the following months." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Rest-only is not the best plan.", body: "Functional rehabilitation, early guided motion, balance, and strength work, recovers an ankle sprain faster and more completely than prolonged immobilization." },
      { heading: "A sprain that will not settle deserves a second look.", body: "Persistent pain after a sprain can mean an associated fracture, cartilage lesion, or tendon injury that a sprain can hide. That is worth evaluating rather than assuming it is just a slow sprain." },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "Stretch or tear of the outer ankle ligaments" },
    { label: "Best early treatment", value: "Functional rehabilitation" },
    { label: "Watch for", value: "Chronic instability, recurrent giving way" },
    { label: "Surgery", value: "Ligament repair or reconstruction for instability" },
    { label: "If pain persists", value: "Look for a hidden cartilage or tendon injury" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Functional rehabilitation first, the faster and more complete approach",
    "Ligament repair or reconstruction for chronic instability",
    "Looks for the cartilage and tendon injuries a sprain can hide",
  ],
  related: [
    { name: "Osteochondritis Dissecans (OCD)", slug: "osteochondritis-dissecans" },
    { name: "Achilles Tendon Rupture", slug: "achilles-rupture" },
    { name: "Jones and Pseudo-Jones Fracture", slug: "jones-fracture" },
    { name: "Achilles Tendonitis", slug: "achilles-tendonitis" },
  ],
  ctaCard: {
    eyebrow: "Ankle that keeps rolling?",
    headline: "Stability is restorable.",
  },
  faqHeadline: "Ankle sprains and instability, answered.",
  faqs: [
    {
      question: "Should I immobilize a sprained ankle?",
      answer:
        "For most sprains, no. Functional rehabilitation, early protected motion, balance training, and progressive strengthening, recovers the ankle faster and more completely than prolonged immobilization. A brief period of protection is fine early on, but the goal is to get the ankle moving and strong.",
    },
    {
      question: "Why does my ankle keep giving way?",
      answer:
        "After a sprain, the outer ligaments can heal loose, and the ankle's balance reflexes can be impaired, leading to recurrent turning or giving way. A targeted balance and strengthening program with a brace resolves many cases. When instability persists, surgery to repair or reconstruct the ligaments restores stability.",
    },
    {
      question: "My ankle still hurts months after a sprain. Why?",
      answer:
        "Persistent pain after a sprain is worth evaluating, because a sprain can accompany or hide a fracture, a cartilage lesion of the ankle (OCD), or a tendon injury on the outer ankle. Identifying one of these explains the lingering pain and directs the right treatment.",
    },
  ],
  bottomCtaTitle: "Sprained ankle that won't settle, or keeps rolling?",
  bottomCtaItalic: "There is usually a clear path back.",
  bottomCtaBody:
    "Most ankle sprains recover well with functional rehabilitation, and chronic instability is reliably treated with a brace program or ligament surgery. Persistent pain prompts a look for the cartilage or tendon injuries a sprain can hide.",
  metaTitle: "Ankle Sprain and Instability, Steven J. Lee, MD",
  metaDescription:
    "Ankle sprains and chronic ankle instability evaluated and treated by Dr. Steven J. Lee, MD. Functional rehabilitation, bracing, and ligament repair or reconstruction explained.",
  schemaDescription:
    "An ankle sprain is a tear of the outer ankle ligaments, usually treated with functional rehabilitation. Chronic instability is treated with bracing or ligament repair or reconstruction.",
};

const osteochondritisDissecans: ConditionPageContent = {
  slug: "osteochondritis-dissecans",
  name: "Osteochondritis Dissecans (OCD)",
  region: "Foot & Ankle",
  headerTitle: "Osteochondritis Dissecans:",
  headerItalic: "a cartilage-and-bone lesion in the joint.",
  headerLede:
    "Osteochondritis dissecans is a lesion of the cartilage and the bone beneath it, often in the ankle or knee. Stable lesions can heal without surgery; unstable or loose ones are treated arthroscopically.",
  byline: sportsByline,
  overview: [
    "Osteochondritis dissecans (OCD) is a problem of the cartilage and the layer of bone just beneath it, where a segment loses its blood supply or is injured and can begin to separate. In the ankle it usually affects the talus, the bone of the lower ankle joint, and it also occurs in the knee.",
    "OCD can follow an injury, such as an ankle sprain, or develop from repetitive stress. Whether it is treated without surgery depends largely on whether the lesion is stable and still attached, or unstable and at risk of becoming a loose fragment in the joint.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Common findings include:"],
      bullets: [
        "Deep, aching joint pain, often after an ankle injury that did not fully settle",
        "Swelling with activity",
        "Catching, locking, or a sense of something loose in the joint",
        "Pain that lingers well beyond a typical sprain",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "X-rays may show the lesion, but MRI is the key test, it shows the cartilage, the bone beneath, and whether the fragment is stable or separating. That stability assessment is what guides whether surgery is needed.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "The central question is stability. A stable OCD lesion, especially in a younger patient with open growth plates, can often heal without surgery, with a period of protected weight-bearing and activity modification.",
      "An unstable lesion, a loose fragment, or a lesion that has not healed with non-surgical care is treated arthroscopically, by stabilizing the fragment, stimulating new cartilage, or addressing the underlying bone, depending on the size and condition of the lesion. Identifying instability early is what protects the joint surface.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: [
        "Stable lesions are treated with protected weight-bearing and activity modification, giving the cartilage and bone a chance to heal. This is more often successful in younger patients with growth remaining.",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "Unstable lesions, loose fragments, and lesions that fail non-surgical care are treated arthroscopically. Depending on the lesion, the surgery stabilizes the fragment, stimulates new cartilage, or addresses the bone beneath. The goal is a stable, smooth joint surface.",
      ],
    },
  ],
  recoveryIntro: "Recovery depends on stability and treatment:",
  recovery: [
    { when: "Non-surgical", what: "A period of protected weight-bearing and activity modification, monitored with imaging." },
    { when: "After surgery, weeks 0 to 6", what: "Protected weight-bearing with early motion, depending on the procedure." },
    { when: "Months 3 to 6", what: "Progressive return to loading and sport as the cartilage and bone heal." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "It can hide behind a 'sprain.'", body: "An OCD lesion in the ankle often follows a sprain and explains pain that lingers well beyond it. Persistent post-sprain pain is a reason to look at the cartilage with an MRI." },
      { heading: "Stability drives the plan.", body: "Whether an OCD lesion needs surgery depends mostly on whether it is stable and attached, or unstable and separating. The MRI assessment of stability is the key piece." },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "A cartilage-and-bone lesion in a joint" },
    { label: "Common site", value: "Talus (ankle), also the knee" },
    { label: "Best test", value: "MRI for lesion stability" },
    { label: "Stable lesions", value: "Often heal without surgery" },
    { label: "Unstable or loose", value: "Treated arthroscopically" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Bases the plan on lesion stability, the key factor",
    "Arthroscopic treatment for unstable or loose lesions",
    "Considers OCD when post-sprain pain lingers",
  ],
  related: [
    { name: "Ankle Sprain and Instability", slug: "ankle-sprain" },
    { name: "Achilles Tendonitis", slug: "achilles-tendonitis" },
    { name: "Stress Fracture", slug: "stress-fracture" },
    { name: "PRP (Platelet-Rich Plasma) Injections", slug: "prp-injections" },
  ],
  ctaCard: {
    eyebrow: "Deep joint pain after an injury?",
    headline: "Stability decides the treatment.",
  },
  faqHeadline: "Osteochondritis dissecans, answered.",
  faqs: [
    {
      question: "What is osteochondritis dissecans?",
      answer:
        "It is a lesion of the cartilage and the bone just beneath it, where a segment is injured or loses its blood supply and can begin to separate. In the ankle it usually affects the talus, and it also occurs in the knee. It can follow an injury like an ankle sprain or develop from repetitive stress.",
    },
    {
      question: "Do I need surgery?",
      answer:
        "It depends on whether the lesion is stable. A stable, attached lesion, especially in a younger patient, can often heal with protected weight-bearing and activity modification. An unstable lesion, a loose fragment, or one that fails non-surgical care is treated arthroscopically. An MRI assessment of stability guides the decision.",
    },
    {
      question: "Could this be why my ankle still hurts after a sprain?",
      answer:
        "Possibly. An OCD lesion of the ankle often follows a sprain and explains deep pain, swelling, or catching that lingers well beyond a typical sprain. Persistent post-sprain pain is a reason to look at the cartilage with an MRI.",
    },
  ],
  bottomCtaTitle: "Deep joint pain that lingers after an injury?",
  bottomCtaItalic: "The cartilage is worth a look.",
  bottomCtaBody:
    "Osteochondritis dissecans is a cartilage-and-bone lesion that often hides behind a stubborn ankle sprain. Stable lesions can heal without surgery, while unstable ones are treated arthroscopically. An MRI assessment of stability directs the plan.",
  metaTitle: "Osteochondritis Dissecans (OCD), Steven J. Lee, MD",
  metaDescription:
    "Osteochondritis dissecans (OCD) of the ankle and knee evaluated and treated by Dr. Steven J. Lee, MD. Non-surgical care for stable lesions and arthroscopic treatment for unstable ones explained.",
  schemaDescription:
    "Osteochondritis dissecans (OCD) is a lesion of cartilage and underlying bone, often in the ankle (talus) or knee. Stable lesions may heal without surgery; unstable or loose lesions are treated arthroscopically.",
};

const achillesTendonitis: ConditionPageContent = {
  slug: "achilles-tendonitis",
  name: "Achilles Tendonitis",
  region: "Foot & Ankle",
  headerTitle: "Achilles Tendonitis:",
  headerItalic: "the runner's heel-cord ache.",
  headerLede:
    "Achilles tendonitis is pain and stiffness in the heel cord from overuse. Like other tendon problems, it is mostly degeneration, and a loading exercise program is the foundation. The key is to treat it before the tendon is at risk of rupture.",
  byline: sportsByline,
  overview: [
    "Achilles tendonitis, more accurately tendinopathy, is overuse irritation and wear of the Achilles tendon, the heel cord that connects the calf to the heel. It comes in two main forms, midportion (a few centimeters above the heel) and insertional (right at the heel bone), which are treated somewhat differently.",
    "It is common in runners and in people who increase activity quickly. Despite the name 'itis,' it is largely degeneration rather than active inflammation, which is why a structured loading program, not rest alone, is the foundation of treatment.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "Pain and stiffness in the heel cord, worse in the morning and at the start of activity",
        "Tenderness and sometimes thickening of the tendon",
        "Pain with running, jumping, and climbing stairs",
        "A creaking sensation in the tendon in some cases",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "Achilles tendonitis is largely a clinical diagnosis based on tenderness and pain with loading the tendon. Ultrasound or MRI is used to assess the tendon when the picture is unclear, recovery stalls, or there is concern about a partial tear.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Dr. Lee treats Achilles tendonitis patiently and conservatively, with a structured loading program, especially eccentric and heavy-slow calf exercise, the approach with the best track record for this tendon, along with load management and footwear or heel-lift adjustments.",
      "For tendons that stall, PRP is an option Dr. Lee discusses. Surgery is reserved for the small minority with persistent pain after an extended program. One caution shapes everything: a tendon weakened by chronic tendinopathy is at some risk of rupture, so loading is progressed sensibly and steroid injection into the tendon is avoided.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["The foundation is loading the tendon, not resting it:"],
      bullets: [
        "A structured eccentric and heavy-slow calf-loading program",
        "Load and training-volume management",
        "A heel lift or footwear adjustment, particularly for the insertional form",
        "PRP as an option for tendons that are not healing",
      ],
    },
    {
      heading: "When conservative care stalls",
      body: [
        "Surgery, which addresses the degenerated portion of the tendon and any bone spur in the insertional form, is reserved for the small minority whose pain persists after an extended, genuine loading program. Steroid injection into the tendon is avoided because it can weaken it.",
      ],
    },
  ],
  recoveryIntro: "Recovery is measured in months and depends on consistent loading:",
  recovery: [
    { when: "Weeks 0 to 12", what: "A structured calf-loading program with load management. Improvement is gradual." },
    { when: "Months 3 to 6", what: "Progressive return to running and sport as the tendon tolerates load." },
    { when: "After surgery (rare)", what: "Protected loading early, then a graded program over several months." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Rest alone usually is not enough.", body: "Because Achilles tendonitis is mostly degeneration, the tendon needs progressive loading to heal. Complete rest helps briefly, then the pain returns with activity." },
      { heading: "Avoid steroid injections into the tendon.", body: "Injecting steroid directly into the Achilles can weaken it and raise the risk of rupture, so it is avoided. The loading program is the safer, more effective foundation." },
    ],
  },
  sidebarFacts: [
    { label: "Tendon involved", value: "Achilles (heel cord)" },
    { label: "Two forms", value: "Midportion and insertional" },
    { label: "Nature", value: "Degeneration more than inflammation" },
    { label: "Foundation", value: "Eccentric and heavy-slow calf loading" },
    { label: "Caution", value: "Avoid steroid injection into the tendon" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Loading-program-first, the approach with the best track record",
    "Avoids steroid injection into the tendon to protect against rupture",
    "Has authored peer-reviewed papers on Achilles tendon repair",
  ],
  related: [
    { name: "Achilles Tendon Rupture", slug: "achilles-rupture" },
    { name: "Plantar Fasciitis", slug: "plantar-fasciitis" },
    { name: "Shin Splints (Medial Tibial Stress Syndrome)", slug: "shin-splints" },
    { name: "PRP (Platelet-Rich Plasma) Injections", slug: "prp-injections" },
  ],
  ctaCard: {
    eyebrow: "Stiff, achy heel cord?",
    headline: "A loading program is the foundation.",
  },
  faqHeadline: "Achilles tendonitis, answered.",
  faqs: [
    {
      question: "Why does rest not fix my Achilles pain?",
      answer:
        "Achilles tendonitis is mostly degeneration of the tendon rather than active inflammation. The tendon needs progressive, controlled loading to heal, so rest feels better briefly but the pain returns with activity. A structured eccentric and heavy-slow calf-loading program is the treatment with the best track record.",
    },
    {
      question: "Can I get a cortisone shot for it?",
      answer:
        "Injecting steroid directly into the Achilles tendon is avoided, because it can weaken the tendon and raise the risk of rupture. The loading exercise program is the safer and more effective foundation, with PRP an option Dr. Lee discusses for tendons that are not healing.",
    },
    {
      question: "Could it turn into a rupture?",
      answer:
        "A tendon weakened by chronic tendinopathy carries some risk of rupture, which is why loading is progressed sensibly and steroid injections into the tendon are avoided. Treating the tendonitis with a structured program is part of protecting the tendon.",
    },
  ],
  bottomCtaTitle: "Heel-cord pain that will not settle?",
  bottomCtaItalic: "Patience and the right loading win.",
  bottomCtaBody:
    "Achilles tendonitis is stubborn but the large majority improve with a structured calf-loading program and load management, with PRP an option for tendons that stall. Steroid injections into the tendon are avoided, and surgery is rarely needed.",
  metaTitle: "Achilles Tendonitis, Steven J. Lee, MD",
  metaDescription:
    "Achilles tendonitis (tendinopathy) evaluated and treated by Dr. Steven J. Lee, MD. Eccentric and heavy-slow loading, load management, PRP, and why steroid injections into the tendon are avoided explained.",
  schemaDescription:
    "Achilles tendonitis (tendinopathy) is overuse degeneration of the heel cord, in midportion and insertional forms. Treatment is mainly a structured calf-loading program, with PRP or surgery in selected cases.",
};

const plantarFasciitis: ConditionPageContent = {
  slug: "plantar-fasciitis",
  name: "Plantar Fasciitis",
  region: "Foot & Ankle",
  headerTitle: "Plantar Fasciitis:",
  headerItalic: "the first-step-in-the-morning heel pain.",
  headerLede:
    "Plantar fasciitis is the most common cause of heel pain, classically worst with the first steps in the morning. It is stubborn but the large majority resolve without surgery, with stretching, support, and patience.",
  byline: sportsByline,
  overview: [
    "Plantar fasciitis is irritation and wear of the plantar fascia, the thick band of tissue along the bottom of the foot that supports the arch. The hallmark is sharp heel pain with the first steps in the morning or after sitting, which eases as you walk and then returns with prolonged standing.",
    "It comes from overload, a spike in activity, tight calves, unsupportive footwear, or time on hard surfaces. It can be slow to settle, but it is reassuring that the large majority resolve without surgery.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "Sharp heel pain with the first steps in the morning or after rest",
        "Pain that eases with walking, then returns with prolonged standing",
        "Tenderness at the inner part of the heel",
        "Pain worse on hard surfaces or in unsupportive shoes",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "Plantar fasciitis is a clinical diagnosis based on the classic pattern and tenderness at the heel. Imaging is used mainly to rule out other causes, such as a stress fracture or nerve entrapment, when the picture is atypical or recovery stalls.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Plantar fasciitis is treated conservatively, and patiently. Dr. Lee emphasizes the measures with the best track record, calf and plantar-fascia stretching, supportive footwear or orthotics, a night splint, and activity modification, which resolve the large majority over weeks to months.",
      "For stubborn cases, options include a corticosteroid injection used judiciously (since repeated steroid can weaken the fascia), shockwave therapy, and PRP. Surgery is reserved for the small minority with pain that persists after an extended, genuine course of conservative care.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["The large majority resolve with:"],
      bullets: [
        "Calf and plantar-fascia stretching, the most effective single measure",
        "Supportive footwear or an orthotic insert",
        "A night splint that holds a gentle stretch",
        "Activity modification and load management",
      ],
    },
    {
      heading: "When conservative care stalls",
      body: [
        "For stubborn cases, a judicious corticosteroid injection, shockwave therapy, or PRP are options. Surgery, which releases part of the fascia, is reserved for the small minority whose pain persists after an extended, genuine trial of conservative care.",
      ],
    },
  ],
  recoveryIntro: "Recovery is gradual and rewards consistency:",
  recovery: [
    { when: "Weeks 0 to 6", what: "Daily stretching, supportive footwear, a night splint, and activity modification." },
    { when: "Weeks 6 to 12 and beyond", what: "Continued stretching and load management, with gradual resolution. Most improve over a few months." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "The heel spur is usually not the problem.", body: "Many people with plantar fasciitis have a heel spur, but the spur is usually not the source of pain and rarely needs to be removed. Treatment targets the fascia and calf, not the spur." },
      { heading: "It takes patience.", body: "Plantar fasciitis can be slow to settle. Consistent stretching and support over weeks to months works for the large majority, even when progress feels gradual." },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "Irritation of the plantar fascia on the sole" },
    { label: "Hallmark", value: "First-step-in-the-morning heel pain" },
    { label: "Most effective measure", value: "Calf and plantar-fascia stretching" },
    { label: "Adjuncts", value: "Orthotics, night splint, shockwave, PRP" },
    { label: "Surgery", value: "Rare, for cases that fail extended care" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Conservative, stretching-and-support-first approach",
    "Uses steroid injections judiciously to protect the fascia",
    "Surgery reserved for the small minority who need it",
  ],
  related: [
    { name: "Achilles Tendonitis", slug: "achilles-tendonitis" },
    { name: "Stress Fracture", slug: "stress-fracture" },
    { name: "Morton's Neuroma", slug: "mortons-neuroma" },
    { name: "Shin Splints (Medial Tibial Stress Syndrome)", slug: "shin-splints" },
  ],
  ctaCard: {
    eyebrow: "Heel pain with your first steps?",
    headline: "It resolves without surgery for most.",
  },
  faqHeadline: "Plantar fasciitis, answered.",
  faqs: [
    {
      question: "Why does my heel hurt most in the morning?",
      answer:
        "Overnight the plantar fascia tightens, and the first steps in the morning stretch the irritated tissue, producing sharp heel pain that eases as you warm up and then returns with prolonged standing. That classic pattern is the hallmark of plantar fasciitis.",
    },
    {
      question: "Will I need surgery?",
      answer:
        "Almost certainly not. The large majority of plantar fasciitis resolves with calf and plantar-fascia stretching, supportive footwear or orthotics, a night splint, and activity modification, though it can take weeks to months. Surgery is reserved for the small minority whose pain persists after an extended, genuine course of conservative care.",
    },
    {
      question: "Do I need my heel spur removed?",
      answer:
        "Usually not. Many people with plantar fasciitis have a heel spur, but the spur is generally not the source of the pain and rarely needs to be removed. Treatment focuses on the plantar fascia and calf rather than the spur.",
    },
  ],
  bottomCtaTitle: "Stubborn heel pain that just won't quit?",
  bottomCtaItalic: "Consistency and patience usually win.",
  bottomCtaBody:
    "Plantar fasciitis is one of the most common and most treatable causes of heel pain. Stretching, supportive footwear, and a night splint resolve the large majority over a few months. Injections are used carefully, and surgery is rarely needed.",
  metaTitle: "Plantar Fasciitis, Steven J. Lee, MD",
  metaDescription:
    "Plantar fasciitis (heel pain) evaluated and treated by Dr. Steven J. Lee, MD. Stretching, orthotics, night splints, injections, shockwave, PRP, and when surgery is considered explained.",
  schemaDescription:
    "Plantar fasciitis is irritation of the plantar fascia on the sole of the foot, causing first-step heel pain. The large majority resolve with stretching, support, and activity modification.",
};

const mortonsNeuroma: ConditionPageContent = {
  slug: "mortons-neuroma",
  name: "Morton's Neuroma",
  region: "Foot & Ankle",
  headerTitle: "Morton's Neuroma:",
  headerItalic: "the pebble-in-the-shoe forefoot pain.",
  headerLede:
    "Morton's neuroma is an irritated, thickened nerve between the toes, usually causing burning forefoot pain and a sensation like a pebble in the shoe. Most cases improve with footwear changes and simple measures.",
  byline: sportsByline,
  overview: [
    "Morton's neuroma is a thickening and irritation of one of the small nerves that run between the long bones of the foot to the toes, most often between the third and fourth toes. The nerve becomes compressed and inflamed, producing pain and altered sensation in the forefoot.",
    "People often describe burning pain into the toes, numbness, or the feeling of a pebble underfoot or a sock bunched up. Tight or narrow shoes and high heels make it worse, which is why footwear is the first thing addressed.",
  ],
  bodySections: [
    {
      heading: "Symptoms",
      body: ["Typical complaints include:"],
      bullets: [
        "Burning or sharp pain in the ball of the foot, often into the toes",
        "A sensation of a pebble underfoot or a bunched-up sock",
        "Numbness or tingling between the toes",
        "Relief when taking the shoe off and rubbing the foot",
      ],
    },
    {
      heading: "How it is diagnosed",
      body: [
        "Morton's neuroma is usually diagnosed by examination, squeezing the forefoot reproduces the pain and sometimes a click. Ultrasound or MRI confirms it and rules out other causes when the picture is unclear, and a diagnostic injection can help.",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "Most Morton's neuromas improve without surgery. Dr. Lee starts with the highest-yield change, wider, lower-heeled shoes with a roomy toe box, along with a metatarsal pad that takes pressure off the nerve, and activity modification.",
      "A corticosteroid injection relieves many cases that do not settle with footwear alone. For persistent pain, options include further injections or surgery to decompress or remove the irritated nerve. The plan escalates only as far as the symptoms require.",
    ],
  },
  treatmentSections: [
    {
      heading: "Non-surgical treatment",
      body: ["Most patients improve with:"],
      bullets: [
        "Wider, lower-heeled shoes with a roomy toe box",
        "A metatarsal pad to offload the nerve",
        "Activity modification",
        "A corticosteroid injection for cases that do not settle with footwear",
      ],
    },
    {
      heading: "Surgical treatment",
      body: [
        "For pain that persists despite footwear changes and injections, surgery either decompresses the nerve by releasing the tight tissue over it or removes the irritated segment of nerve. The choice depends on the situation and prior treatment.",
      ],
    },
  ],
  recoveryIntro: "Recovery depends on the treatment:",
  recovery: [
    { when: "Non-surgical", what: "Footwear changes and a metatarsal pad bring relief over weeks; an injection can speed it." },
    { when: "After surgery, weeks 0 to 4", what: "Protected weight-bearing in a stiff-soled shoe, with wound care." },
    { when: "Weeks 4 to 8", what: "Progressive return to normal footwear and activity." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "It is a nerve, not a tumor.", body: "Despite the name 'neuroma,' it is an irritated, thickened nerve, not a cancer. The concern is symptoms and function, not malignancy." },
      { heading: "Shoes matter most at first.", body: "The single highest-yield change is roomier, lower-heeled footwear with a metatarsal pad. Many cases settle with footwear and a pad before any injection or surgery." },
    ],
  },
  sidebarFacts: [
    { label: "What it is", value: "Irritated, thickened nerve between the toes" },
    { label: "Common site", value: "Between the third and fourth toes" },
    { label: "Hallmark", value: "Burning forefoot pain, pebble-like sensation" },
    { label: "First-line treatment", value: "Footwear changes and a metatarsal pad" },
    { label: "Surgery", value: "Decompression or nerve excision for persistent cases" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Experienced with peripheral-nerve problems of the limb",
    "Footwear-and-pad first, escalating only as symptoms require",
    "Decompression or excision for cases that do not settle",
  ],
  related: [
    { name: "Plantar Fasciitis", slug: "plantar-fasciitis" },
    { name: "Stress Fracture", slug: "stress-fracture" },
    { name: "Jones and Pseudo-Jones Fracture", slug: "jones-fracture" },
    { name: "Wartenberg's Syndrome", slug: "wartenbergs-syndrome" },
  ],
  ctaCard: {
    eyebrow: "Feels like a pebble in your shoe?",
    headline: "Most cases improve without surgery.",
  },
  faqHeadline: "Morton's neuroma, answered.",
  faqs: [
    {
      question: "What does Morton's neuroma feel like?",
      answer:
        "Most people describe burning or sharp pain in the ball of the foot that radiates into the toes, often with numbness and the sensation of a pebble underfoot or a bunched-up sock. Tight or high-heeled shoes make it worse, and taking the shoe off and rubbing the foot brings relief.",
    },
    {
      question: "Is it a tumor?",
      answer:
        "No. Despite the name 'neuroma,' it is an irritated, thickened nerve between the toes, not a cancer. The reason to treat it is the pain and altered sensation it causes, not any concern about malignancy.",
    },
    {
      question: "Will I need surgery?",
      answer:
        "Usually not. Most Morton's neuromas improve with roomier, lower-heeled footwear and a metatarsal pad, and a corticosteroid injection helps many that do not settle with footwear alone. Surgery, which decompresses or removes the irritated nerve, is reserved for pain that persists despite these measures.",
    },
  ],
  bottomCtaTitle: "Burning forefoot pain like a pebble underfoot?",
  bottomCtaItalic: "Start with the simple things.",
  bottomCtaBody:
    "Morton's neuroma is an irritated nerve between the toes, and most cases improve with footwear changes, a metatarsal pad, and sometimes an injection. Surgery is reserved for pain that persists despite these measures.",
  metaTitle: "Morton's Neuroma, Steven J. Lee, MD",
  metaDescription:
    "Morton's neuroma (forefoot nerve pain) evaluated and treated by Dr. Steven J. Lee, MD. Footwear changes, metatarsal pads, injections, and surgery for persistent cases explained.",
  schemaDescription:
    "Morton's neuroma is an irritated, thickened nerve between the toes causing burning forefoot pain. Most cases improve with footwear changes, a metatarsal pad, and injection; surgery is for persistent cases.",
};

const jonesFracture: ConditionPageContent = {
  slug: "jones-fracture",
  name: "Jones and Pseudo-Jones Fracture",
  region: "Foot & Ankle",
  headerTitle: "Jones Fracture:",
  headerItalic: "two different breaks of the same bone.",
  headerLede:
    "Fractures at the base of the fifth metatarsal, on the outer side of the foot, come in two types that behave very differently. A true Jones fracture has a poor blood supply and often needs a screw, while a pseudo-Jones avulsion usually heals on its own.",
  byline: sportsByline,
  overview: [
    "The fifth metatarsal is the long bone on the outer edge of the foot, and its base is a common fracture site, usually from rolling the ankle and foot inward. Two patterns occur close together but behave differently, which is why telling them apart matters.",
    "A pseudo-Jones, or avulsion, fracture is at the very tip of the bone where a tendon pulls off a fragment, and it usually heals on its own. A true Jones fracture sits a bit farther along, in a zone with a poor blood supply, and is prone to slow healing or non-union, so it is treated more aggressively, especially in athletes.",
  ],
  bodySections: [
    {
      heading: "Why the two types differ",
      body: [
        "The difference is location and blood supply. The avulsion (pseudo-Jones) fragment has a good blood supply and reliably heals with protected weight-bearing. The true Jones fracture sits in a watershed zone with poor blood supply, so it heals slowly and is at real risk of non-union, which is why screw fixation is often chosen, particularly for active patients.",
      ],
    },
    {
      heading: "Symptoms",
      body: ["Common findings after rolling the foot include:"],
      bullets: [
        "Pain, swelling, and tenderness on the outer edge of the foot",
        "Difficulty bearing weight on the outer foot",
        "Bruising along the outer border of the foot",
        "An injury easily mistaken for an ankle sprain",
      ],
    },
  ],
  drLeeApproach: {
    paragraphs: [
      "The first step is identifying which fracture is present, because the two are managed differently. Dr. Lee confirms the pattern on X-ray and treats a pseudo-Jones avulsion with protected weight-bearing, since it reliably heals.",
      "A true Jones fracture is treated based on the patient and the fracture. Non-athletes may be treated with strict non-weight-bearing immobilization, but because of the poor blood supply and non-union risk, screw fixation is often the better choice, especially for athletes who want a more reliable, faster return to sport.",
    ],
  },
  treatmentSections: [
    {
      heading: "Pseudo-Jones (avulsion) fracture",
      body: [
        "This fracture at the tip of the bone has a good blood supply and reliably heals with protected weight-bearing in a stiff-soled shoe or boot, followed by a graded return to activity. Surgery is rarely needed.",
      ],
    },
    {
      heading: "True Jones fracture",
      body: [
        "Because it sits in a zone of poor blood supply with a real risk of non-union, a true Jones fracture is treated either with strict non-weight-bearing immobilization or, often, with a screw placed across the fracture. Screw fixation is frequently chosen for athletes for a more reliable, faster return to sport.",
      ],
    },
  ],
  recoveryIntro: "Recovery depends on the fracture type and treatment:",
  recovery: [
    { when: "Pseudo-Jones", what: "Protected weight-bearing in a boot or stiff-soled shoe, with a graded return over several weeks." },
    { when: "True Jones, non-surgical", what: "A period of strict non-weight-bearing immobilization, monitored with imaging for healing." },
    { when: "True Jones, after screw fixation", what: "Protected weight-bearing, then a graded return to sport guided by healing on imaging." },
  ],
  misconceptions: {
    intro: "Worth knowing:",
    items: [
      { heading: "Not all fifth-metatarsal fractures are the same.", body: "A pseudo-Jones avulsion heals readily; a true Jones fracture has a poor blood supply and a real risk of non-union. Telling them apart is what guides treatment." },
      { heading: "It is easily mistaken for a sprain.", body: "A fracture at the base of the fifth metatarsal can feel like an ankle sprain. Outer-foot pain after rolling the ankle deserves an X-ray." },
    ],
  },
  sidebarFacts: [
    { label: "Bone involved", value: "Base of the fifth metatarsal (outer foot)" },
    { label: "Two types", value: "Pseudo-Jones (avulsion) and true Jones" },
    { label: "Pseudo-Jones", value: "Good blood supply, heals reliably" },
    { label: "True Jones", value: "Poor blood supply, non-union risk" },
    { label: "Surgical option", value: "Screw fixation, often for athletes" },
  ],
  whyDrLee: [
    "Double fellowship-trained, with a sports-medicine background",
    "Distinguishes a true Jones fracture from a pseudo-Jones avulsion",
    "Screw fixation for Jones fractures when reliability and faster return matter",
    "Return-to-sport planning for athletes",
  ],
  related: [
    { name: "Ankle Sprain and Instability", slug: "ankle-sprain" },
    { name: "Stress Fracture", slug: "stress-fracture" },
    { name: "Morton's Neuroma", slug: "mortons-neuroma" },
    { name: "Osteochondritis Dissecans (OCD)", slug: "osteochondritis-dissecans" },
  ],
  ctaCard: {
    eyebrow: "Outer-foot pain after rolling your ankle?",
    headline: "Which fracture matters.",
  },
  faqHeadline: "Jones and pseudo-Jones fractures, answered.",
  faqs: [
    {
      question: "What is the difference between a Jones and a pseudo-Jones fracture?",
      answer:
        "Both are at the base of the fifth metatarsal, but a pseudo-Jones (avulsion) fracture is at the very tip where a tendon pulls off a fragment and has a good blood supply, so it heals reliably. A true Jones fracture sits a bit farther along, in a zone with poor blood supply, so it heals slowly and is at real risk of non-union.",
    },
    {
      question: "Do I need surgery?",
      answer:
        "A pseudo-Jones avulsion rarely needs surgery and heals with protected weight-bearing. A true Jones fracture is treated either with strict non-weight-bearing immobilization or with a screw across the fracture. Because of the poor blood supply, screw fixation is often chosen, especially for athletes who want a more reliable, faster return to sport.",
    },
    {
      question: "I thought I just sprained my ankle. Could it be a fracture?",
      answer:
        "Yes. A fracture at the base of the fifth metatarsal happens from the same rolling-in mechanism as an ankle sprain and can feel similar. Pain and tenderness on the outer edge of the foot after rolling the ankle deserve an X-ray to tell the two apart.",
    },
  ],
  bottomCtaTitle: "Pain on the outer edge of your foot after a roll?",
  bottomCtaItalic: "The exact break determines the plan.",
  bottomCtaBody:
    "Fractures at the base of the fifth metatarsal come in two types that heal very differently. A pseudo-Jones avulsion heals on its own, while a true Jones fracture often needs a screw because of its poor blood supply. Telling them apart is the first step.",
  metaTitle: "Jones and Pseudo-Jones Fracture, Steven J. Lee, MD",
  metaDescription:
    "Fifth metatarsal base fractures (Jones and pseudo-Jones) evaluated and treated by Dr. Steven J. Lee, MD. Why the two types differ, protected weight-bearing, and screw fixation explained.",
  schemaDescription:
    "Jones and pseudo-Jones fractures are two patterns at the base of the fifth metatarsal. The pseudo-Jones avulsion heals reliably; the true Jones fracture has a poor blood supply and often needs screw fixation.",
};

export const conditionPages: ConditionPageContent[] = [
  carpalTunnel,
  distalRadiusFracture,
  scapholunate,
  basalJointArthroplasty,
  handWristFractures,
  uclReconstruction,
  bicepsRupture,
  rotatorCuff,
  aclReconstruction,
  achillesRupture,
  // Phase A additions (highest historical Wix traffic), May 2026:
  fingerCollateralLigament,
  extensorTendonSubluxation,
  ulnarImpactionSyndrome,
  thumbUclRcl,
  // Phase B additions (next-tier GSC clicks), May 2026:
  wartenbergsSyndrome,
  tfccTear,
  fingerPulleyInjury,
  olecranonFracture,
  mucousCyst,
  prpInjections,
  internalBrace,
  // Hand & Wrist additions (Dr. Lee feedback, May 2026):
  deQuervains,
  dupuytrensDisease,
  ganglionCyst,
  scaphoidFracture,
  slacWrist,
  // Elbow additions (Dr. Lee feedback, June 2026):
  elbowDislocation,
  cubitalTunnel,
  luclInjury,
  tricepsTear,
  lateralEpicondylitis,
  medialEpicondylitis,
  radialTunnel,
  radialHeadFracture,
  // Shoulder additions (Dr. Lee feedback, June 2026):
  acSeparation,
  shoulderDislocation,
  slapTear,
  acArthritis,
  glenohumeralArthritis,
  shoulderImpingement,
  bicepsTendonitis,
  // Knee & Sports additions (Dr. Lee feedback, June 2026):
  patellofemoralSyndrome,
  kneeCollateralLigament,
  pclTear,
  pesAnserineBursitis,
  prepatellarBursitis,
  stressFracture,
  shinSplints,
  osgoodSchlatter,
  patellarTendonitis,
  patellarQuadRupture,
  patellaFracture,
  tibialPlateauFracture,
  // Foot & Ankle additions (Dr. Lee feedback, June 2026):
  ankleSprain,
  osteochondritisDissecans,
  achillesTendonitis,
  plantarFasciitis,
  mortonsNeuroma,
  jonesFracture,
];

export function conditionPageBySlug(slug: string) {
  return conditionPages.find((c) => c.slug === slug);
}

// Named procedures that treat each condition, keyed by slug. Feeds the
// MedicalCondition JSON-LD (possibleTreatment -> MedicalProcedure -> performer:
// Dr. Lee), which is the strongest condition-to-procedure co-citation signal for
// AI search. Names mirror the procedures described on each page; keep them
// factual and free of superlatives. A slug with no entry falls back to the
// generic treatment node in buildConditionSchema.
export const conditionProcedures: Record<string, string[]> = {
  "ankle-sprain": ["Functional Rehabilitation", "Ligament Repair or Reconstruction"],
  "osteochondritis-dissecans": ["Protected Weight-Bearing", "Arthroscopic Treatment"],
  "achilles-tendonitis": ["Eccentric Calf-Loading Program", "PRP Injection"],
  "plantar-fasciitis": [
    "Stretching and Orthotics",
    "Corticosteroid Injection",
    "Plantar Fascia Release",
  ],
  "mortons-neuroma": [
    "Footwear Modification and Metatarsal Pad",
    "Corticosteroid Injection",
    "Nerve Decompression or Excision",
  ],
  "jones-fracture": ["Protected Weight-Bearing", "Screw Fixation"],
  "patellofemoral-syndrome": ["Physical Therapy and Activity Modification", "Bracing or Taping"],
  "knee-collateral-ligament": [
    "Hinged Bracing and Rehabilitation",
    "Ligament Repair or Reconstruction",
  ],
  "pcl-tear": ["Quadriceps Rehabilitation and Bracing", "PCL Reconstruction"],
  "pes-anserine-bursitis": ["Activity Modification and Therapy", "Corticosteroid Injection"],
  "prepatellar-bursitis": ["Aspiration and Activity Modification", "Bursa Excision"],
  "stress-fracture": ["Activity Modification and Protected Loading", "Risk-Factor Evaluation"],
  "shin-splints": ["Relative Rest and Gait Training", "Graded Return to Running"],
  "osgood-schlatter": ["Activity Modification", "Stretching and Strengthening"],
  "patellar-tendonitis": ["Eccentric Loading Program", "PRP Injection"],
  "patellar-quad-tendon-rupture": ["Tendon Repair"],
  "patella-fracture": ["Bracing with Early Motion", "Open Reduction and Internal Fixation"],
  "tibial-plateau-fracture": ["Protected Weight-Bearing", "Open Reduction and Internal Fixation"],
  "ac-separation": ["Sling and Rehabilitation", "AC Joint Reconstruction"],
  "shoulder-dislocation": ["Closed Reduction", "Arthroscopic Labral (Bankart) Repair"],
  "slap-tear": ["Arthroscopic SLAP Repair", "Biceps Tenodesis"],
  "ac-arthritis": ["Corticosteroid Injection", "Distal Clavicle Excision"],
  "glenohumeral-arthritis": ["Corticosteroid Injection", "Shoulder Arthroscopy"],
  "shoulder-impingement": [
    "Rotator-Cuff Rehabilitation",
    "Arthroscopic Subacromial Decompression",
  ],
  "biceps-tendonitis": ["Rehabilitation and Injection", "Biceps Tenodesis"],
  "elbow-dislocation": ["Closed Reduction", "Ligament Repair with Internal Brace"],
  "cubital-tunnel": ["Ulnar Nerve Decompression", "Ulnar Nerve Transposition"],
  "lucl-injury": ["LUCL Repair with Internal Brace", "Tendon-Graft Reconstruction"],
  "triceps-tear": ["Triceps Tendon Repair"],
  "lateral-epicondylitis": [
    "Eccentric Rehabilitation Program",
    "PRP Injection",
    "Extensor Tendon Debridement",
  ],
  "medial-epicondylitis": [
    "Eccentric Rehabilitation Program",
    "PRP Injection",
    "Flexor Tendon Debridement",
  ],
  "radial-tunnel": ["Activity Modification and Splinting", "Radial Tunnel Decompression"],
  "radial-head-fracture": [
    "Early Motion Protocol",
    "Screw or Plate Fixation",
    "Radial Head Replacement",
  ],
  "de-quervains": ["First Dorsal Compartment Release", "Corticosteroid Injection"],
  "dupuytrens-disease": [
    "Needle Aponeurotomy",
    "Collagenase Injection",
    "Open Fasciectomy",
  ],
  "ganglion-cyst": ["Ganglion Cyst Excision", "Cyst Aspiration"],
  "scaphoid-fracture": [
    "Headless Compression Screw Fixation",
    "Bone Grafting for Non-Union",
  ],
  "slac-wrist": [
    "Proximal Row Carpectomy",
    "Four-Corner Fusion",
    "Total Wrist Fusion",
  ],
  "carpal-tunnel": ["Endoscopic Carpal Tunnel Release", "Corticosteroid Injection"],
  "distal-radius-fracture": ["Volar Plate Fixation", "Cast Immobilization"],
  scapholunate: [
    "Scapholunate Ligament Repair with Internal Brace",
    "Tendon-Graft Reconstruction",
  ],
  "basal-joint-arthroplasty": [
    "Basal Joint Reconstruction with Internal Brace",
    "Corticosteroid Injection",
  ],
  "hand-wrist-fractures": [
    "Internal Fixation with Plates and Screws",
    "Splinting and Buddy Taping",
  ],
  "ucl-reconstruction": [
    "UCL Reconstruction (Tommy John Surgery)",
    "Internal Brace Augmentation",
  ],
  "biceps-rupture": ["Distal Biceps Tendon Repair"],
  "rotator-cuff": ["Arthroscopic Rotator Cuff Repair", "Corticosteroid Injection"],
  "acl-reconstruction": ["ACL Reconstruction"],
  "achilles-rupture": ["Achilles Tendon Repair", "Functional Bracing Protocol"],
  "finger-collateral-ligament": [
    "Collateral Ligament Repair with Internal Brace",
    "Buddy Taping and Splinting",
  ],
  "extensor-tendon-subluxation": [
    "Sagittal Band Repair",
    "Sagittal Band Reconstruction",
  ],
  "ulnar-impaction-syndrome": [
    "Arthroscopic Wafer Procedure",
    "Ulnar Shortening Osteotomy",
    "PRP Injection",
  ],
  "thumb-ucl-rcl": ["Thumb Collateral Ligament Repair with Internal Brace"],
  "wartenbergs-syndrome": [
    "Superficial Radial Nerve Decompression",
    "Corticosteroid Injection",
  ],
  "tfcc-tear": [
    "Arthroscopic TFCC Repair",
    "Arthroscopic TFCC Debridement",
    "PRP Injection",
  ],
  "finger-pulley-injury": ["Pulley Reconstruction with Tendon Graft"],
  "olecranon-fracture": ["Tension-Band Wiring", "Plate-and-Screw Fixation"],
  "mucous-cyst": ["Mucous Cyst Excision with Osteophyte Removal"],
  "prp-injections": ["Platelet-Rich Plasma Injection"],
  "internal-brace": ["Internal Brace Augmentation"],
};
