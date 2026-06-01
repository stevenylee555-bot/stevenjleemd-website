// Lightweight client-side site search index. Built from the live conditions
// data plus the specialties and key static pages, with curated synonyms so
// patient phrasing ("thumb arthritis," "tommy john," "broken wrist") resolves
// to the right page. Pure functions, no dependencies, safe in the client bundle.
import { conditions } from "@/lib/conditions";

export type SearchCategory = "Condition" | "Specialty" | "Page";

export type SearchEntry = {
  title: string;
  href: string;
  category: SearchCategory;
  keywords: string;
};

// Patient-language synonyms keyed by condition slug. Title and blurb are always
// searched too; this just widens recall for how people actually type.
const conditionSynonyms: Record<string, string> = {
  "carpal-tunnel": "median nerve hand numbness tingling night pain pins and needles endoscopic release",
  "basal-joint-arthroplasty": "thumb arthritis cmc joint thumb pain base of thumb",
  "ucl-reconstruction": "tommy john elbow ligament pitcher throwing ucl tear",
  "acl-reconstruction": "acl tear knee ligament sports knee blown knee",
  "rotator-cuff": "shoulder tear cuff repair shoulder pain torn shoulder",
  "distal-radius-fracture": "broken wrist colles fracture wrist break",
  "scaphoid-fracture": "broken wrist snuffbox scaphoid carpal bone",
  "de-quervains": "de quervain thumb tendonitis wrist tendonitis mommy thumb finkelstein new mom wrist",
  "dupuytrens-disease": "dupuytren finger contracture palm cord bent finger claw hand",
  "ganglion-cyst": "wrist lump bump cyst mass on wrist",
  "slac-wrist": "wrist arthritis snac scapholunate advanced collapse salvage wrist fusion",
  "scapholunate": "sl ligament wrist ligament tear scapholunate",
  "tfcc-tear": "tfcc ulnar wrist pain pinky side wrist cartilage",
  "biceps-rupture": "distal biceps popeye biceps tear elbow",
  "achilles-rupture": "achilles heel cord calf torn achilles",
  "hand-wrist-fractures": "broken hand finger fracture metacarpal boxer fracture phalanx",
  "thumb-ucl-rcl": "skier thumb gamekeeper thumb sprain",
  "trigger-finger": "trigger finger locking finger catching finger",
  "meniscus": "meniscus tear torn cartilage knee",
  "prp-injections": "prp platelet rich plasma biologics regenerative injection",
  "prp-bmac": "bmac bone marrow stem cell biologics",
  "peptide-therapy": "peptides regenerative biologics",
  "internal-brace": "internal brace ligament augmentation suture tape",
  "wartenbergs-syndrome": "radial nerve wartenberg hand numbness tight watch",
  "mucous-cyst": "finger cyst dip cyst nail bump",
  "ulnar-impaction-syndrome": "ulnar wrist pain ulnar impaction wafer",
  "finger-pulley-injury": "climber finger pulley a2 crimp",
};

const specialtyEntries: SearchEntry[] = [
  { title: "Hand & Wrist Surgery", href: "/specialties/hand-wrist", category: "Specialty", keywords: "hand wrist carpal tunnel fractures arthritis tendon" },
  { title: "Elbow Surgery", href: "/specialties/elbow", category: "Specialty", keywords: "elbow tommy john ucl biceps trauma arthroscopy" },
  { title: "Shoulder Surgery", href: "/specialties/shoulder", category: "Specialty", keywords: "shoulder rotator cuff labral arthroscopy instability" },
  { title: "Knee & Sports Medicine", href: "/specialties/knee", category: "Specialty", keywords: "knee acl meniscus sports medicine achilles arthroscopy" },
  { title: "PRP & Advanced Treatments", href: "/specialties/advanced-treatments", category: "Specialty", keywords: "prp bmac peptides biologics regenerative stem cell" },
];

const pageEntries: SearchEntry[] = [
  { title: "Home", href: "/", category: "Page", keywords: "homepage main" },
  { title: "Conditions Library", href: "/conditions", category: "Page", keywords: "conditions treatments library all" },
  { title: "Specialties", href: "/specialties", category: "Page", keywords: "specialties areas of focus" },
  { title: "Biography", href: "/about/bio", category: "Page", keywords: "about dr lee biography background story who" },
  { title: "Credentials & Awards", href: "/about/credentials", category: "Page", keywords: "credentials awards board certified fellowship recognition" },
  { title: "Publications & Research", href: "/about/publications", category: "Page", keywords: "publications research papers studies pubmed" },
  { title: "Curriculum Vitae", href: "/about/cv", category: "Page", keywords: "cv curriculum vitae resume download" },
  { title: "Videos", href: "/about/videos", category: "Page", keywords: "videos watch" },
  { title: "Second Opinions", href: "/second-opinions", category: "Page", keywords: "second opinion review my case told i need surgery" },
  { title: "Therapy Protocols", href: "/therapy-protocols", category: "Page", keywords: "rehab physical therapy recovery protocol exercises" },
  { title: "Testimonials", href: "/testimonials", category: "Page", keywords: "testimonials reviews patient stories outcomes" },
  { title: "Referral Network", href: "/referral-network", category: "Page", keywords: "referral refer physician send patient" },
  { title: "Contact", href: "/contact", category: "Page", keywords: "contact appointment office location address phone book call directions" },
];

export const searchIndex: SearchEntry[] = [
  ...conditions.map((c): SearchEntry => ({
    title: c.name,
    // Priority conditions have their own page; phase-2 ones live on the index.
    href: c.status === "priority" ? `/conditions/${c.slug}` : "/conditions",
    category: "Condition",
    keywords: `${c.region} ${conditionSynonyms[c.slug] ?? ""} ${c.blurb ?? ""}`,
  })),
  ...specialtyEntries,
  ...pageEntries,
];

// Shown when the field is focused but empty, so the menu is never blank.
const popularHrefs = [
  "/conditions/carpal-tunnel",
  "/conditions/ucl-reconstruction",
  "/conditions/rotator-cuff",
  "/conditions/acl-reconstruction",
  "/conditions/prp-injections",
  "/second-opinions",
];
export const popularSearches: SearchEntry[] = popularHrefs
  .map((href) => searchIndex.find((e) => e.href === href))
  .filter((e): e is SearchEntry => Boolean(e));

export function searchSite(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);

  const scored: Array<{ entry: SearchEntry; score: number }> = [];
  for (const entry of searchIndex) {
    const title = entry.title.toLowerCase();
    const haystack = `${title} ${entry.category.toLowerCase()} ${entry.keywords.toLowerCase()}`;
    // Require every token to appear somewhere (AND semantics).
    if (!tokens.every((t) => haystack.includes(t))) continue;

    let score = 0;
    if (title === q) score += 200;
    else if (title.startsWith(q)) score += 120;
    else if (title.includes(q)) score += 80;
    for (const t of tokens) if (title.includes(t)) score += 20;
    if (entry.category === "Condition") score += 6;
    else if (entry.category === "Specialty") score += 4;

    scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
  return scored.slice(0, limit).map((s) => s.entry);
}
