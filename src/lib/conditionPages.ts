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
    "The base of the thumb is one of the most common sites of arthritis in the hand. When conservative treatment fails, modern reconstruction, including internal brace techniques Dr. Lee co-designed, restores a strong, painless thumb.",
  byline: {
    name: "Steven J. Lee, MD",
    title: "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
    reviewed: "May 2026",
  },
  overview: [
    "Basal joint arthritis, arthritis at the base of the thumb, where the metacarpal meets the trapezium (the carpometacarpal or CMC joint), is one of the most common conditions in hand surgery. It is more common in women than men, often appears after the fourth or fifth decade of life, and can make even simple tasks like opening a jar, turning a key, or pinching a button feel impossible.",
    "Like many forms of arthritis, basal joint arthritis exists on a spectrum. Some patients live happily with mild arthritis for decades. Others develop disabling pain that no amount of bracing or injection will solve. The good news is that surgical treatment for advanced basal joint arthritis is highly successful, most patients regain a strong, pain-free thumb.",
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
    "Modern basal joint reconstruction is one of the most reliably successful operations in hand surgery. Most patients regain a pain-free, strong thumb and wonder why they waited so long.",
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
    "Tommy John surgery, named for the pitcher who underwent the first successful procedure in 1974, has evolved enormously over the past five decades. Modern techniques use stronger fixation, allow faster rehab, and now include internal brace augmentation for selected patients. The fundamental goal remains the same: a reconstructed elbow that can throw at the same level as before, or higher.",
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

// ─────────────────────────────────────────────────────────────────────────────
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
];

export function conditionPageBySlug(slug: string) {
  return conditionPages.find((c) => c.slug === slug);
}
