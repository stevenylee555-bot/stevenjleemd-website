import { conditions, priorityConditions } from "@/lib/conditions";
import { specialties } from "@/lib/specialties";
import { ZOCDOC_URL } from "@/lib/site";

// Serves /llms.txt — an emerging convention that gives AI assistants a clean,
// link-rich markdown summary of the site. Generated from the same data that
// drives the sitemap and condition/specialty pages, so it never drifts. The
// standard is unproven as a ranking lever (no major LLM has publicly committed
// to consuming it as of 2026), but it is cheap to maintain here and signals
// intent. Mirrors the dynamic robots.ts / sitemap.ts pattern in this repo.

export const dynamic = "force-static";

const BASE = "https://www.stevenjleemd.com";

export function GET() {
  const priority = priorityConditions();

  const conditionLines = priority
    .map(
      (c) =>
        `- [${c.name}](${BASE}/conditions/${c.slug}): ${normalizeWhitespace(c.blurb)}`,
    )
    .join("\n");

  const specialtyLines = specialties
    .map((s) => `- [${s.name}](${BASE}/specialties/${s.slug}): ${s.lede}`)
    .join("\n");

  const upcoming = conditions
    .filter((c) => c.status === "phase2")
    .map((c) => c.name)
    .join(", ");

  const body = `# Steven J. Lee, MD: Orthopedic Surgeon (New York City & Scarsdale)

> Dr. Steven J. Lee is a double fellowship-trained, board-certified orthopedic surgeon specializing in hand, wrist, elbow, shoulder, and sports medicine. He is Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital and Associate Director at NISMAT. He sees patients in Manhattan (Upper East Side) and Scarsdale, NY, and accepts out-of-network and second-opinion patients, including internationally via telemedicine.

Distinguishing facts (all verifiable):
- Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital (Northwell Health).
- Helped design orthopedic implants used by surgeons nationwide, including plating systems and internal-brace constructs for the upper extremity.
- Among the first surgeons in New York to perform PRP (platelet-rich plasma) therapy for upper extremity injuries; performs 250+ PRP procedures per year.
- Published what is believed to be the first review paper on peptides in an orthopedic journal.
- Authored four peer-reviewed papers on Achilles tendon repair.

Booking: patients book online via ZocDoc (${ZOCDOC_URL}) or call (212) 737-3301. The website's contact form is for non-clinical callback requests only; patients are asked not to send medical details through it.

## Specialties
${specialtyLines}

## Conditions treated (with dedicated pages)
${conditionLines}

## Key pages
- [Home](${BASE}/): overview of practice, specialties, and credentials
- [About & Biography](${BASE}/about/bio): background, training, and career
- [Credentials & Awards](${BASE}/about/credentials): board certification, fellowships, hospital roles
- [Publications](${BASE}/about/publications): peer-reviewed research with PubMed links
- [Curriculum Vitae](${BASE}/about/cv): full CV
- [Second Opinions](${BASE}/second-opinions): how to request a surgical second opinion
- [Conditions library](${BASE}/conditions): full list of conditions treated
- [Contact / Request a callback](${BASE}/contact): non-clinical callback request
- [Book via ZocDoc](${ZOCDOC_URL}): online appointment booking

## Locations
- Manhattan: 159 East 74th Street, New York, NY 10021. Phone: (212) 737-3301.
- Scarsdale: 2 Overhill Road, Suite 310, Scarsdale, NY 10583. Phone: (914) 725-6970.
- Telemedicine available for domestic and international patients.

## Additional pages in development
${upcoming || "None"}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

function normalizeWhitespace(s: string) {
  return s.replace(/\s+/g, " ").trim();
}
