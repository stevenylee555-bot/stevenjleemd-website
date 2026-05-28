// JSON-LD schema builders for GEO (Generative Engine Optimization).
//
// Strategy: every entity has a stable @id (absolute URL with a fragment) so
// nodes can cross-reference each other across pages — e.g. a MedicalCondition
// on /conditions/carpal-tunnel can point its `possibleTreatment.performer` at
// the Physician declared on the homepage. This is the @graph pattern Google
// and the major AI engines recommend in 2026 for richer entity understanding.
//
// Conventions:
// - The Physician and the (primary) MedicalBusiness are emitted on every page
//   via the root layout, wrapped in a single @graph script.
// - Page-specific entities (MedicalCondition, MedicalProcedure, FAQPage,
//   BreadcrumbList, Review) are emitted by the page's template, in their own
//   <script> tags. Multiple JSON-LD blocks per page are explicitly allowed.

import { ZOCDOC_URL } from "@/lib/site";

export const SITE_URL = "https://www.stevenjleemd.com";

// Stable IDs — referenced by string from other entities.
export const PHYSICIAN_ID = `${SITE_URL}/#physician`;
export const BUSINESS_ID = `${SITE_URL}/#medical-business`;
export const LENOX_HILL_ID = "https://lenoxhill.northwell.edu/#hospital";

// ─────────────────────────────────────────────────────────────────────────────
// Physician

export const physicianNode = {
  "@type": "Physician",
  "@id": PHYSICIAN_ID,
  name: "Steven J. Lee, MD",
  url: SITE_URL,
  image: `${SITE_URL}/images/dr-lee-headshot.jpg`,
  description:
    "Dr. Steven J. Lee is a double fellowship-trained, board-certified orthopedic surgeon specializing in hand, wrist, elbow, shoulder, and sports medicine. Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital and Associate Director at NISMAT. He has helped design orthopedic implants used by surgeons nationwide, including plating systems and internal-brace constructs for the upper extremity. Among the first surgeons in New York to perform PRP therapy for upper extremity injuries, with 250+ PRP procedures performed annually.",
  medicalSpecialty: [
    "Orthopedic Surgery",
    "Hand Surgery",
    "Upper Extremity Surgery",
    "Sports Medicine",
    "Minimally Invasive Surgery",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Board Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "American Board of Orthopaedic Surgery",
      },
    },
  ],
  affiliation: [
    {
      "@type": "Hospital",
      "@id": LENOX_HILL_ID,
      name: "Lenox Hill Hospital",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "NY",
      },
    },
  ],
  worksFor: { "@id": BUSINESS_ID },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "159 East 74th Street",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10021",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "2 Overhill Road, Suite 310",
      addressLocality: "Scarsdale",
      addressRegion: "NY",
      postalCode: "10583",
      addressCountry: "US",
    },
  ],
  telephone: "+1-212-737-3301",
  faxNumber: "+1-212-737-4876",
  sameAs: [
    ZOCDOC_URL,
    "https://www.healthgrades.com/physician/dr-steven-lee",
    "https://www.vitals.com/doctors/Dr_Steven_Lee",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// MedicalBusiness

export const medicalBusinessNode = {
  "@type": "MedicalBusiness",
  "@id": BUSINESS_ID,
  name: "Steven J. Lee, MD, Orthopedic Surgery",
  url: SITE_URL,
  telephone: "+1-212-737-3301",
  priceRange: "$$$$",
  medicalSpecialty: ["Orthopedic", "Hand"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "159 East 74th Street",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10021",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7724,
    longitude: -73.9587,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "New York" },
    { "@type": "City", name: "Scarsdale" },
    { "@type": "State", name: "New York" },
  ],
};

// Back-compat exports for any callers that still use the standalone shapes.
export const physicianSchema = {
  "@context": "https://schema.org",
  ...physicianNode,
};
export const medicalBusinessSchema = {
  "@context": "https://schema.org",
  ...medicalBusinessNode,
};

// ─────────────────────────────────────────────────────────────────────────────
// Builders

export function buildGraph(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function buildFaqSchema(
  faqs: { question: string; answer: string }[],
  pageUrl?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { "@id": `${pageUrl}#faq` } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildConditionSchema(condition: {
  name: string;
  description: string;
  url: string;
  procedureNames?: string[]; // optional list of procedure names that treat it
}) {
  const possibleTreatment = (condition.procedureNames ?? []).map((name) => ({
    "@type": "MedicalProcedure",
    name,
    performer: { "@id": PHYSICIAN_ID },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "@id": `${condition.url}#condition`,
    name: condition.name,
    description: condition.description,
    url: condition.url,
    associatedAnatomy: undefined,
    ...(possibleTreatment.length > 0
      ? { possibleTreatment }
      : {
          // Fallback: at least name Dr. Lee as the treating physician.
          possibleTreatment: {
            "@type": "MedicalTherapy",
            name: "Orthopedic Surgery and Conservative Management",
            performer: { "@id": PHYSICIAN_ID },
          },
        }),
  };
}

export function buildMedicalProcedureSchema(procedure: {
  name: string;
  description: string;
  url: string;
  /** kebab-case id segment, must be unique within a page */
  slug: string;
  procedureType?: string;
  bodyLocation?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${procedure.url}#procedure-${procedure.slug}`,
    name: procedure.name,
    description: procedure.description,
    url: procedure.url,
    ...(procedure.procedureType ? { procedureType: procedure.procedureType } : {}),
    ...(procedure.bodyLocation ? { bodyLocation: procedure.bodyLocation } : {}),
    performer: { "@id": PHYSICIAN_ID },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[],
  pageUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Review + AggregateRating — scaffolding only. Do not emit until we have at
// least 3 published testimonials with documented written consent, per
// FTC/HIPAA guidance. The Sanity `testimonial` schema is the source of truth.
export function buildReviewSchema(review: {
  author: string;
  body: string;
  ratingValue: number; // 1-5
  datePublished: string; // ISO date
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewBody: review.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: review.datePublished,
    ...(review.url ? { url: review.url } : {}),
    itemReviewed: { "@id": PHYSICIAN_ID },
  };
}

export function buildAggregateRatingSchema(args: {
  ratingValue: number;
  reviewCount: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "@id": `${SITE_URL}/#aggregate-rating`,
    ratingValue: args.ratingValue,
    reviewCount: args.reviewCount,
    bestRating: 5,
    worstRating: 1,
    itemReviewed: { "@id": PHYSICIAN_ID },
  };
}
