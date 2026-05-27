// JSON-LD schema builders for GEO (Generative Engine Optimization)

import { ZOCDOC_URL } from "@/lib/site";

export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Steven J. Lee, MD",
  url: "https://www.stevenjleemd.com",
  image: "https://www.stevenjleemd.com/images/dr-lee-headshot.jpg",
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
      recognizedBy: { "@type": "Organization", name: "American Board of Orthopaedic Surgery" },
    },
  ],
  affiliation: [
    {
      "@type": "Hospital",
      name: "Lenox Hill Hospital",
      address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY" },
    },
  ],
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

export const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Steven J. Lee, MD, Orthopedic Surgery",
  url: "https://www.stevenjleemd.com",
  telephone: "+1-212-737-3301",
  priceRange: "$$$$",
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
};

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.name,
    description: condition.description,
    url: condition.url,
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Orthopedic Surgery and Conservative Management",
      provider: {
        "@type": "Physician",
        name: "Steven J. Lee, MD",
        url: "https://www.stevenjleemd.com",
      },
    },
  };
}
