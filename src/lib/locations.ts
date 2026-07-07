import { BUSINESS_ID, SCARSDALE_BUSINESS_ID } from "@/lib/schema";

// Location landing pages. These target local "hand surgeon <neighborhood>"
// queries that the condition and specialty pages do not rank for, and they
// reinforce each verified Google Business Profile. Content is claim-safe and
// answer-first; the FAQs carry FAQPage schema.

export type LocationPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  // Which MedicalBusiness node (declared in schema.ts, emitted site-wide) this
  // page is about.
  businessId: string;
  kicker: string;
  headerTitle: string;
  headerItalic: string;
  headerLede: string;
  intro: string[];
  treatsHeading: string;
  treats: string[];
  whyHeading: string;
  why: string[];
  office: {
    addressLines: string[];
    phone: { display: string; tel: string };
    hours: string;
    gettingThere: string;
    serving?: string;
  };
  faqHeadline: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaItalic: string;
  ctaBody: string;
};

const TREATS = [
  "Carpal tunnel and nerve compression",
  "Hand and wrist fractures",
  "Thumb and wrist arthritis",
  "Tendon and ligament injuries",
  "Elbow, shoulder, and sports injuries",
  "PRP and biologic treatments",
];

export const locations: LocationPage[] = [
  {
    slug: "hand-surgeon-upper-east-side",
    metaTitle: "Hand Surgeon on the Upper East Side | Steven J. Lee, MD",
    metaDescription:
      "Board-certified hand and upper-extremity surgeon on the Upper East Side of Manhattan. Steven J. Lee, MD, Chief of Hand Surgery at Lenox Hill Hospital, at 159 East 74th Street. Carpal tunnel, arthritis, fractures, sports injuries, and second opinions.",
    businessId: BUSINESS_ID,
    kicker: "Upper East Side, Manhattan",
    headerTitle: "Hand and upper extremity surgery",
    headerItalic: "on the Upper East Side.",
    headerLede:
      "Dr. Steven J. Lee, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, sees patients at 159 East 74th Street. Board-certified, double fellowship-trained, and an orthopedic implant designer.",
    intro: [
      "Dr. Steven J. Lee is a board-certified, double fellowship-trained orthopedic surgeon specializing in the hand, wrist, elbow, shoulder, and sports medicine. His Manhattan office sits on the Upper East Side at 159 East 74th Street, a short distance from Lenox Hill Hospital, where he serves as Chief of Hand and Upper Extremity Surgery.",
      "Upper East Side patients come to Dr. Lee for the full range of hand and upper-extremity care, from carpal tunnel and arthritis to complex fractures, ligament injuries, and sports injuries. He also sees patients nationally and internationally for second opinions, and offers telemedicine consultations for those who prefer to start virtually.",
    ],
    treatsHeading: "What Dr. Lee treats on the Upper East Side",
    treats: TREATS,
    whyHeading: "Why patients choose Dr. Lee",
    why: [
      "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
      "Double fellowship-trained in hand and upper extremity and in sports medicine",
      "Board-certified by the American Board of Orthopaedic Surgery",
      "Has helped design orthopedic implants used by surgeons nationwide",
      "Among the first surgeons in New York to perform PRP for the upper extremity",
    ],
    office: {
      addressLines: ["159 East 74th Street", "New York, NY 10021"],
      phone: { display: "(212) 737-3301", tel: "+12127373301" },
      hours: "Monday to Friday, 8:00 AM to 5:00 PM",
      gettingThere:
        "On the Upper East Side between Lexington and Third Avenue, close to the 6 train at 77th Street and a short distance from Lenox Hill Hospital.",
    },
    faqHeadline: "Upper East Side office, common questions.",
    faqs: [
      {
        question: "Where is Dr. Lee's Upper East Side office?",
        answer:
          "Dr. Lee's Manhattan office is at 159 East 74th Street, New York, NY 10021, on the Upper East Side between Lexington and Third Avenue. It is close to Lenox Hill Hospital and the 6 train at 77th Street.",
      },
      {
        question: "What does Dr. Lee treat at the Upper East Side office?",
        answer:
          "At his Upper East Side office, Dr. Lee treats hand, wrist, elbow, and shoulder conditions, including carpal tunnel, arthritis, fractures, and tendon and ligament injuries, along with sports injuries, PRP, and second-opinion consultations.",
      },
      {
        question: "Does Dr. Lee accept out-of-network patients?",
        answer:
          "Yes. Dr. Lee sees both in-network and out-of-network patients. His office can review your benefits and provide the paperwork, a superbill, needed to seek out-of-network reimbursement from your insurer. Call the office to check your coverage before your visit.",
      },
      {
        question: "How do I book an appointment on the Upper East Side?",
        answer:
          "You can book directly through ZocDoc or call the office at (212) 737-3301. Out-of-area patients can begin with a telemedicine consultation before coming in for an in-person visit.",
      },
      {
        question: "Is Dr. Lee affiliated with a hospital nearby?",
        answer:
          "Yes. Dr. Lee is Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, a Northwell Health hospital on the Upper East Side, a short distance from his 159 East 74th Street office.",
      },
    ],
    ctaTitle: "See a hand specialist",
    ctaItalic: "on the Upper East Side.",
    ctaBody:
      "Book an in-person visit at 159 East 74th Street, or start with a telemedicine consultation. Second opinions welcome.",
  },
  {
    slug: "hand-surgeon-scarsdale",
    metaTitle: "Hand & Orthopedic Surgeon in Scarsdale, NY | Steven J. Lee, MD",
    metaDescription:
      "Board-certified hand and upper-extremity surgeon in Scarsdale, Westchester. Steven J. Lee, MD, Chief of Hand Surgery at Lenox Hill Hospital, at 2 Overhill Road. Carpal tunnel, arthritis, fractures, sports injuries, and second opinions.",
    businessId: SCARSDALE_BUSINESS_ID,
    kicker: "Scarsdale, Westchester",
    headerTitle: "Hand and upper extremity surgery",
    headerItalic: "in Scarsdale.",
    headerLede:
      "Dr. Steven J. Lee sees Westchester patients at 2 Overhill Road, Suite 310 in Scarsdale. Board-certified, double fellowship-trained, and Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
    intro: [
      "Dr. Steven J. Lee brings his Manhattan hand and upper-extremity practice to Westchester. His Scarsdale office at 2 Overhill Road, Suite 310 serves patients across Scarsdale, White Plains, and the surrounding area, so they can be seen close to home without traveling into the city.",
      "Dr. Lee is board-certified and double fellowship-trained in hand and upper extremity and in sports medicine, and serves as Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital. Scarsdale patients see him for carpal tunnel, arthritis, fractures, tendon and ligament injuries, sports injuries, and second opinions.",
    ],
    treatsHeading: "What Dr. Lee treats in Scarsdale",
    treats: TREATS,
    whyHeading: "Why Westchester patients choose Dr. Lee",
    why: [
      "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital",
      "Double fellowship-trained in hand and upper extremity and in sports medicine",
      "Board-certified by the American Board of Orthopaedic Surgery",
      "Two offices: Scarsdale and the Upper East Side of Manhattan",
      "Telemedicine available for Westchester patients who prefer to start virtually",
    ],
    office: {
      addressLines: ["2 Overhill Road, Suite 310", "Scarsdale, NY 10583"],
      phone: { display: "(914) 725-6970", tel: "+19147256970" },
      hours: "Monday to Friday, 8:00 AM to 5:00 PM",
      gettingThere:
        "In central Scarsdale, convenient to White Plains and Westchester County, so patients can be seen without traveling into Manhattan.",
      serving: "Serving Scarsdale, White Plains, and Westchester County",
    },
    faqHeadline: "Scarsdale office, common questions.",
    faqs: [
      {
        question: "Where is Dr. Lee's Scarsdale office?",
        answer:
          "Dr. Lee's Westchester office is at 2 Overhill Road, Suite 310, Scarsdale, NY 10583, serving patients across Scarsdale, White Plains, and Westchester County.",
      },
      {
        question: "Do I have to go to Manhattan to see Dr. Lee?",
        answer:
          "No. Dr. Lee sees Westchester patients at his Scarsdale office at 2 Overhill Road, so many patients can be evaluated and treated close to home. If a procedure is best performed in the city, he will discuss those options with you.",
      },
      {
        question: "What does Dr. Lee treat in Scarsdale?",
        answer:
          "At his Scarsdale office, Dr. Lee treats hand, wrist, elbow, and shoulder conditions, including carpal tunnel, arthritis, fractures, and tendon and ligament injuries, along with sports injuries, PRP, and second-opinion consultations.",
      },
      {
        question: "Does Dr. Lee see out-of-network or international patients in Scarsdale?",
        answer:
          "Yes. Dr. Lee sees in-network and out-of-network patients and provides the paperwork needed to seek out-of-network reimbursement. Out-of-area and international patients can begin with a telemedicine consultation.",
      },
      {
        question: "How do I book an appointment in Scarsdale?",
        answer:
          "You can book through ZocDoc or call the Scarsdale office at (914) 725-6970. Telemedicine consultations are available for Westchester patients who prefer to start virtually.",
      },
    ],
    ctaTitle: "See a hand specialist",
    ctaItalic: "in Westchester.",
    ctaBody:
      "Book an in-person visit at the Scarsdale office, or start with a telemedicine consultation. Second opinions welcome.",
  },
];

export function getLocation(slug: string): LocationPage | undefined {
  return locations.find((l) => l.slug === slug);
}
