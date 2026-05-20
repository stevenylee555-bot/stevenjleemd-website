import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Biography — Steven J. Lee, MD",
  description:
    "Biography of Dr. Steven J. Lee, MD — Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, on the Arthrex implant design team, double fellowship-trained orthopedic surgeon serving NYC and Scarsdale.",
  alternates: { canonical: "https://www.stevenjleemd.com/about/bio" },
};

const credentials = [
  "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital (since 2013)",
  "Associate Director, NISMAT (since 2006)",
  "Lenox Hill Hospital Medical Board (since 2023)",
  "Double Fellowship-Trained — Hand & Upper Extremity, Sports Medicine",
  "Board-Certified, American Board of Orthopaedic Surgery",
  "Subspecialty Certified, Orthopaedic Surgery of the Hand",
  "Arthrex Implant Design Team",
  "US Patent #12,622,710 B2 — Center of Rotation Guide (2026)",
];

export default function BioPage() {
  return (
    <>
      <PageHeader
        kicker="Biography"
        title="A surgeon at the"
        italic="leading edge of his field."
        lede="From Lenox Hill Hospital to Arthrex implant design — the career of an orthopedic surgeon known for treating the cases other physicians find too complex."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Biography", href: "/about/bio" },
        ]}
      />

      {/* Body */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-20">
            {/* Prose — capped at ~70ch for editorial readability */}
            <article className="max-w-[640px]">
              <div className="space-y-6 text-navy-900/80 text-[17px] leading-[1.75] font-light">
                <p className="text-navy-900/90 text-[18px] font-normal">
                  Dr. Steven J. Lee is Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital
                  — one of New York&apos;s premier medical centers — and a double fellowship-trained
                  orthopedic surgeon.
                </p>

                <p>
                  He is board-certified by the American Board of Orthopaedic Surgery and
                  fellowship-trained in both Hand Surgery and Shoulder &amp; Elbow Surgery. His practice
                  spans hand and wrist surgery, elbow surgery, shoulder arthroscopy, knee
                  reconstruction, and sports medicine — with particular depth in the cases that
                  other surgeons consider technically demanding.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-12 mb-2 leading-tight">
                  The surgeon on the team that designed the hardware
                </h2>
                <p>
                  What sets Dr. Lee apart is his direct role in advancing the field. He is on the
                  design team for several{" "}
                  <strong className="text-navy-950 font-semibold">Arthrex</strong> implants used
                  worldwide: the Mini Comprehensive Fixation System for hand fractures, the Elbow
                  Fracture Plating System, the 3.5 DX SwiveLock anchor (used in internal brace
                  reconstructions for the UCL, scapholunate, and other ligament repairs), the
                  NanoCorkscrew FT for tendon-to-bone repair, and the FiberLock CMC
                  Suspensionplasty for thumb basal joint reconstruction.
                </p>
                <p>
                  Patients undergoing hand fracture repair, UCL reconstruction, tendon repair, or
                  basal joint arthroplasty with Dr. Lee may literally be receiving hardware he
                  helped create.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-12 mb-2 leading-tight">
                  Biologics and the future of repair
                </h2>
                <p>
                  Dr. Lee was among the first surgeons in New York City to perform PRP
                  (Platelet-Rich Plasma) therapy, and 99% sure the first specifically for upper
                  extremity injuries — at a time when biologics were still considered experimental
                  in the orthopedic mainstream. He performs over 250 PRP procedures annually today,
                  across the full body. He has continued to pioneer the use of biologics in
                  orthopedic care, including BMAC stem cell therapy and, more recently, peptides.
                  In 2026 he co-authored{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12753158/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-950 font-medium border-b border-gold-500/60 hover:border-gold-600 transition-colors"
                  >
                    &quot;Therapeutic Peptides in Orthopaedics: Applications, Challenges, and Future
                    Directions&quot;
                  </a>{" "}
                  in <em className="serif-italic">JAAOS Global Research &amp; Reviews</em> —
                  believed to be the first peer-reviewed review paper on therapeutic peptides
                  in an orthopedic journal.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-12 mb-2 leading-tight">
                  Research and teaching
                </h2>
                <p>
                  Dr. Lee has authored 35+ peer-reviewed publications and book chapters across
                  hand, elbow, shoulder, and knee surgery, with a particular focus on Achilles
                  tendon repair (the subject of 4 of his papers) and scapholunate ligament
                  reconstruction. He has given 84 national lectures and presentations to date,
                  teaches surgical technique through Arthrex&apos;s educational platform and VuMedi,
                  and serves as a journal reviewer for the{" "}
                  <em className="serif-italic">Journal of the American Academy of Orthopaedic Surgeons</em>.
                </p>
                <p>
                  At Lenox Hill, he sits on the residency and sports medicine fellowship selection
                  committees and the Program Evaluation Committee. He has received the
                  Chitranjan S. Ranawat Mentorship Award seven times (2010, 2014, 2015, 2017,
                  2018, 2019, 2023) and the Maurice H. Cowen Teacher of the Year award twice
                  (2003, 2009) — both voted by the Lenox Hill orthopaedic residents.
                </p>
                <p>
                  In 2026 he was awarded{" "}
                  <strong className="text-navy-950 font-semibold">US Patent #12,622,710 B2</strong>{" "}
                  for a Center of Rotation Guide — a surgical instrumentation design.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-12 mb-2 leading-tight">
                  Practice today
                </h2>
                <p>
                  Dr. Lee sees patients at two offices — a primary practice in Manhattan&apos;s East 56th
                  Street and a second office in Scarsdale, Westchester. He accommodates in-person and
                  telemedicine consultations, and sees both in-network and out-of-network patients,
                  including international patients who travel specifically to consult with him.
                </p>

                <p className="text-navy-900/55 text-sm !mt-10 italic">
                  Full credentials, publications list, and CV are available from the links below.
                </p>
              </div>

              {/* Inline links to sibling pages */}
              <div className="mt-12 pt-10 border-t border-navy-900/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Credentials & Awards", href: "/about/credentials" },
                  { label: "Publications", href: "/about/publications" },
                  { label: "Download CV", href: "/about/cv" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group flex items-center justify-between p-4 border border-navy-900/10 rounded-sm hover:border-gold-500 hover:bg-cream transition-colors"
                  >
                    <span className="text-sm font-semibold text-navy-950 group-hover:text-gold-600 transition-colors">
                      {l.label}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-navy-900/40 group-hover:text-gold-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:pt-2">
              <div className="lg:sticky lg:top-28">
                {/* Portrait */}
                <div className="relative aspect-[4/5] w-full max-w-[340px] mb-8">
                  <div className="absolute -top-2 -left-2 h-16 w-16 border-t-2 border-l-2 border-gold-500" />
                  <div className="absolute -bottom-2 -right-2 h-16 w-16 border-b-2 border-r-2 border-gold-500" />
                  <div className="relative h-full w-full overflow-hidden rounded-sm bg-navy-800 ring-1 ring-navy-900/10">
                    <Image
                      src="/images/dr-lee-headshot.jpg"
                      alt="Dr. Steven J. Lee, MD"
                      fill
                      sizes="(min-width: 1024px) 340px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="kicker text-navy-900/40 mb-4">Credentials</div>
                <ul className="space-y-3 mb-10">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-baseline gap-3 text-[14.5px] text-navy-900/85">
                      <span className="h-1 w-1 rounded-full bg-gold-500 shrink-0 translate-y-[2px]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="kicker text-navy-900/55 mb-3">Hospital Affiliations</div>
                <ul className="space-y-3 mb-10 text-[14.5px] text-navy-900/85">
                  <li>
                    <span className="font-semibold text-navy-950">Lenox Hill Hospital</span>
                    <div className="text-navy-900/60 text-xs mt-0.5">Chief of Hand and Upper Extremity Surgery</div>
                  </li>
                  <li>
                    <span className="font-semibold text-navy-950">NISMAT</span>
                    <div className="text-navy-900/60 text-xs mt-0.5">Associate Director (Sports Medicine &amp; Athletic Trauma)</div>
                  </li>
                  <li>
                    <span className="font-semibold text-navy-950">
                      Manhattan Eye, Ear &amp; Throat Hospital
                    </span>
                  </li>
                </ul>

                <a
                  href="https://www.zocdoc.com/doctor/steven-lee-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-sm shadow-[0_10px_30px_-12px_rgba(201,168,76,0.5)] hover:-translate-y-0.5"
                >
                  <Calendar size={14} />
                  Book an Appointment
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
