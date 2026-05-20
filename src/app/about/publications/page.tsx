import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Publications & Research, Steven J. Lee, MD",
  description:
    "Peer-reviewed publications, book chapters, and research from Dr. Steven J. Lee, MD, including the 2026 review of therapeutic peptides in orthopaedics (JAAOS Global Research & Reviews), four papers on Achilles tendon repair, scapholunate ligament reconstruction, and coracoclavicular ligament biomechanics.",
  alternates: {
    canonical: "https://www.stevenjleemd.com/about/publications",
  },
};

type Pub = {
  citation: string;
  journal: string;
  year: string;
  link?: string;
  highlight?: boolean;
};

// Highlighted recent + frequently-cited publications, by year (descending).
// Full 37-entry list is in the CV PDF.
const recent: Pub[] = [
  {
    citation:
      "Rahman OF, Lee SJ, Seeds WA. Therapeutic Peptides in Orthopaedics: Applications, Challenges, and Future Directions.",
    journal: "JAAOS Global Research & Reviews 10(1):e25.00236",
    year: "January 2026",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12753158/",
    highlight: true,
  },
  {
    citation:
      "Kessler RE, Day MS, Tyler TF, McHugh MP, Bedford BB, Lee SJ, Nicholas SJ. Predictive Value of MRI in Outcomes of Non-Surgical Treatment of Lateral Epicondylitis.",
    journal: "JSES International 6(2):305-308",
    year: "January 2022",
  },
  {
    citation:
      "Lee SJ, Bedford BB, Kim AH, Rahman OF, Zbeda RM. Elbow Osteochondral Allograft Transplantation and Lateral Ulnar Collateral Ligament Repair with Internal Brace: A Case Report.",
    journal: "JBJS Case Connector 12(1)",
    year: "January 2022",
  },
  {
    citation:
      "Zbeda RM, Lee SJ. Internal Brace for Carpal Instability. In: Wrist and Elbow Arthroscopy with Selected Open Procedures.",
    journal: "Springer Nature Switzerland, pp 203-215",
    year: "January 2022",
  },
  {
    citation:
      "Lee SJ, Rabinovich RV, Kim A. Proximal Row Carpectomy Using Decellularized Dermal Allograft: Preliminary Results.",
    journal: "Journal of Wrist Surgery 10(2)",
    year: "April 2021",
  },
  {
    citation:
      "Lee SJ, Rabinovich RV, Bedford B, Rahman OF. Elbow Ulnar Collateral Ligament Reconstruction using Suture Tape Augmentation.",
    journal: "JSES Reviews, Reports & Techniques",
    year: "February 2021",
  },
  {
    citation:
      "Lee SJ, Rabinovich RV, Kim A. Thumb Ulnar Collateral Ligament Repair with Suture Tape Augmentation.",
    journal: "Journal of Hand Surgery (Asian-Pacific) 25(1)",
    year: "March 2020",
  },
  {
    citation:
      "Rabinovich RV, Lee SJ. Proximal Row Carpectomy Using Decellularized Dermal Allograft.",
    journal: "Journal of Hand Surgery (American) 43(4)",
    year: "April 2018",
  },
  {
    citation:
      "Orishimo KF, Schwartz-Balle S, Tyler TF, McHugh MP, Bedford BB, Lee SJ, Nicholas SJ. Can Weakness in End-Range Plantar Flexion After Achilles Tendon Repair Be Prevented?",
    journal: "Orthopaedic Journal of Sports Medicine 6(5)",
    year: "May 2018",
  },
  {
    citation:
      "Nicholas SJ, Lee SJ, Mullaney MJ, Tyler TF, Fukunaga T, Johnson CD, McHugh MP. Functional Outcomes after Double-Row versus Single-Row Rotator Cuff Repair.",
    journal: "Orthopaedic Journal of Sports Medicine 4(10)",
    year: "October 2016",
  },
];

const themed: { theme: string; items: Pub[] }[] = [
  {
    theme: "Achilles tendon repair",
    items: [
      {
        citation:
          "Lee SJ, Sileo MJ, Kremenic IJ, Orishimo K, Ben-Avi S, Nicholas S, McHugh MP. Cyclic Loading of Three Achilles Tendon Repairs Simulating Early Postoperative Forces.",
        journal: "American Journal of Sports Medicine 37(4):786-790",
        year: "April 2009",
      },
      {
        citation:
          "Lee SJ, Goldsmith S, Nicholas SJ, McHugh MP, Kremenic I, Ben-Avi S. Optimizing Achilles tendon repair: Effect of epitendinous suture augmentation on the strength of Achilles tendon repairs.",
        journal: "Foot and Ankle International 29(4):427-432",
        year: "April 2008",
      },
      {
        citation:
          "Orishimo KF, Burstein G, Mullaney MJ, Kremenic IJ, Nesse M, McHugh MP, Lee SJ. Effect of knee flexion angle on Achilles tendon force and ankle joint plantarflexion moment during passive dorsiflexion.",
        journal: "Journal of Foot & Ankle Surgery 47(1):34-39",
        year: "January 2008",
      },
      {
        citation:
          "Mullaney MJ, McHugh MP, Tyler TF, Lee SJ, Nicholas SJ. Weakness in End-Range Plantarflexion Following Achilles Tendon Repair: Evidence of Tendon Lengthening.",
        journal: "American Journal of Sports Medicine 34(7)",
        year: "July 2006",
      },
    ],
  },
  {
    theme: "Coracoclavicular ligament reconstruction (shoulder)",
    items: [
      {
        citation:
          "Kowalsky MS, Kremenic IJ, Orishimo KF, McHugh MP, Nicholas SJ, Lee SJ. The Effect of Distal Clavicle Excision on In Situ Graft Forces in Coracoclavicular Ligament Reconstruction.",
        journal: "American Journal of Sports Medicine",
        year: "August 2010",
      },
      {
        citation:
          "Lee SJ, Keefer EP, McHugh MP, Kremenic IJ, Orishimo KF, Ben-Avi S, Nicholas SJ. Cyclical Loading of Coracoclavicular Ligament Reconstructions. A comparative biomechanical study.",
        journal: "American Journal of Sports Medicine 36(10)",
        year: "October 2008",
      },
      {
        citation:
          "Nicholas SJ, Lee SJ, Mullaney MJ, Tyler TF, McHugh MP. Clinical Outcomes of Coracoclavicular Ligament Reconstructions using Tendon Grafts.",
        journal: "American Journal of Sports Medicine 35:1912-1917",
        year: "November 2007",
      },
      {
        citation:
          "Lee SJ, Nicholas SJ, Akizuki K, McHugh MP, Ben-Avi SS, Kremenic IJ. Reconstruction of the coracoclavicular ligaments with tendon grafts. A comparative biomechanical study.",
        journal: "American Journal of Sports Medicine 31(5)",
        year: "September 2003",
      },
    ],
  },
  {
    theme: "Hand & wrist surgery",
    items: [
      {
        citation:
          "Plate AM, Lee SJ, Steiner G, Posner MA. Benign Tumors of the Hand and Wrist.",
        journal:
          "Journal of the American Academy of Orthopaedic Surgeons 11(2):129-141",
        year: "March/April 2003",
      },
      {
        citation:
          "Lee SJ, Montgomery K. Athletic hand injuries.",
        journal: "Orthopaedic Clinics of North America 33(3):547-554",
        year: "July 2002",
      },
      {
        citation:
          "Stein DA, Lee SJ, Raskin KB. Compartment syndrome of the hand caused by CT contrast infiltration: A case report and review of the literature.",
        journal: "Orthopedics 26(3):333-334",
        year: "March 2003",
      },
    ],
  },
  {
    theme: "Elbow ligament reconstruction",
    items: [
      {
        citation:
          "Alaia MJ, Shearin JW, Kremenic IJ, McHugh MP, Nicholas SJ, Lee SJ. Restoring Isometry in Lateral Ulnar Collateral Ligament Reconstruction.",
        journal: "Journal of Hand Surgery (American) 40(7):1421-1427",
        year: "2015",
      },
      {
        citation:
          "Lee SJ, Mendez-Zfass M. Minimally Invasive Treatment of Lateral Ulnar Collateral Ligament Injury. In: Scuderi GR, Tria AJ (eds.) Minimally Invasive Surgery in Orthopedics.",
        journal: "Springer International Publishing",
        year: "2016",
      },
    ],
  },
];

function PubItem({ pub }: { pub: Pub }) {
  return (
    <li
      className={
        "py-5 border-b border-navy-900/10 " +
        (pub.highlight ? "bg-cream/60 -mx-4 px-4 lg:-mx-6 lg:px-6" : "")
      }
    >
      {pub.highlight && (
        <div className="kicker text-gold-600 mb-2">Latest publication</div>
      )}
      <div className="text-navy-900/85 text-[15.5px] leading-relaxed mb-2">
        {pub.citation}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
        <div className="text-navy-900/65 text-[13.5px] leading-relaxed italic">
          {pub.journal}
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="kicker text-navy-900/55">{pub.year}</span>
          {pub.link && (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open publication in PubMed (opens in new tab)"
              className="inline-flex items-center gap-1 text-xs font-semibold text-navy-950 hover:text-gold-600 transition-colors"
            >
              PubMed
              <ExternalLink size={11} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        kicker="Publications & Research"
        title="35+ peer-reviewed publications,"
        italic="across hand, elbow, shoulder, knee, and biologics."
        lede="Selected publications below. The complete bibliography, 37 entries including book chapters, is available in the CV PDF. Dr. Lee has also given 34 national presentations and 50 invited lectures."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Publications", href: "/about/publications" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
          {/* Recent publications */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
              <span className="kicker text-gold-600">Recent publications</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-950 tracking-[-0.01em] leading-[1.1] mb-10">
              The last decade of work.
            </h2>

            <ul className="border-t border-navy-900/10">
              {recent.map((pub) => (
                <PubItem key={pub.citation} pub={pub} />
              ))}
            </ul>
          </div>

          {/* Themed selections */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
              <span className="kicker text-gold-600">By theme</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-950 tracking-[-0.01em] leading-[1.1] mb-12">
              Areas of focused research.
            </h2>

            <div className="space-y-16">
              {themed.map((group) => (
                <div key={group.theme}>
                  <h3 className="font-serif text-xl md:text-2xl text-navy-950 tracking-[-0.01em] mb-2">
                    {group.theme}
                  </h3>
                  <div className="kicker text-navy-900/55 mb-6">
                    {group.items.length} selected
                  </div>
                  <ul className="border-t border-navy-900/10">
                    {group.items.map((pub) => (
                      <PubItem key={pub.citation} pub={pub} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Note + CV link */}
          <div className="bg-cream border border-navy-900/10 p-7 lg:p-9">
            <div className="kicker text-gold-600 mb-3">A note on this list</div>
            <p className="text-navy-900/80 text-[16px] leading-[1.7] mb-6">
              The publications above are selected highlights. The full 37-entry
              bibliography, including early biomechanical work from residency, all
              Achilles repair papers, the scapholunate reconstruction series, and the
              2022 lateral epicondylitis MRI study, is documented in the CV.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/downloads/Dr-Steven-Lee-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                aria-label="Download Dr. Lee's CV as PDF (opens in new tab)"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all shadow-[0_8px_24px_-12px_rgba(201,168,76,0.45)] hover:-translate-y-0.5"
              >
                <Download size={16} aria-hidden="true" />
                Download full CV (PDF)
              </a>
              <Link
                href="/about/credentials"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-navy-900/20 hover:border-navy-950 text-navy-900 hover:bg-bone rounded-md transition-all font-medium"
              >
                View credentials &amp; awards
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
