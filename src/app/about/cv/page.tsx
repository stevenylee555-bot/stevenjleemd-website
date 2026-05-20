import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  Download,
  FileText,
  GraduationCap,
  Award,
  Stethoscope,
  Mic,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Curriculum Vitae — Steven J. Lee, MD",
  description:
    "Download the curriculum vitae of Dr. Steven J. Lee, MD — Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital and Associate Director at NISMAT. 35+ peer-reviewed publications, 84 lectures and presentations, US patent for surgical instrumentation.",
  alternates: { canonical: "https://www.stevenjleemd.com/about/cv" },
};

const stats = [
  { Icon: FileText, label: "Peer-reviewed publications", value: "35+" },
  { Icon: Mic, label: "Lectures & presentations", value: "84" },
  { Icon: Award, label: "Awards & distinctions", value: "85+" },
  { Icon: Stethoscope, label: "Years at Lenox Hill Hospital", value: "25+" },
];

const trainingTimeline = [
  {
    year: "1987–1991",
    title: "B.A., Lehigh University",
    detail: "6-year accelerated combined B.A.–M.D. program",
  },
  {
    year: "1989–1993",
    title: "M.D., The Medical College of Pennsylvania",
    detail: "Conferred June 1993",
  },
  {
    year: "1993–1994",
    title: "Surgical Internship",
    detail: "Stony Brook University Hospital",
  },
  {
    year: "1994–1998",
    title: "Orthopaedic Residency",
    detail:
      "Stony Brook University Hospital · Administrative Superchief during chief year",
  },
  {
    year: "1998–1999",
    title: "Emanuel B. Kaplan Hand & Upper Extremity Fellowship",
    detail: "Hospital for Joint Diseases / NYU Medical Center",
  },
  {
    year: "1999–2000",
    title: "James A. Nicholas Sports Medicine Fellowship",
    detail: "Lenox Hill Hospital",
  },
];

export default function CVPage() {
  return (
    <>
      <PageHeader
        kicker="Curriculum Vitae"
        title="The complete record,"
        italic="available as a PDF."
        lede="Education, fellowships, hospital appointments, publications, presentations, awards, and patents. Patients, referring physicians, and institutions are welcome to download."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "CV", href: "/about/cv" },
        ]}
      />

      {/* Download CTA */}
      <section className="bg-cream border-b border-navy-900/[0.08]">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
                <span className="kicker text-gold-600">Download</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-950 tracking-[-0.01em] leading-[1.1] mb-6">
                Full CV as a PDF.
              </h2>
              <p className="text-navy-900/75 text-[17px] leading-[1.7] font-light max-w-xl mb-8">
                Includes education, professional and faculty appointments, peer-reviewed
                publications, national presentations, invited lectures, professional
                memberships, and the full awards and distinctions list.
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
                  Download CV (PDF)
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-navy-900/20 hover:border-navy-950 text-navy-900 hover:bg-bone rounded-md transition-all font-medium"
                >
                  Contact the office
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-navy-900/10 border border-navy-900/10">
              {stats.map((s) => (
                <div key={s.label} className="bg-white p-5 lg:p-6">
                  <s.Icon
                    size={18}
                    className="text-gold-600 mb-3"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <div className="font-serif text-2xl lg:text-3xl text-navy-950 tracking-[-0.01em] leading-none mb-1.5">
                    {s.value}
                  </div>
                  <div className="text-navy-900/65 text-xs leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education timeline */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
                <span className="kicker text-gold-600">Training</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-950 tracking-[-0.01em] leading-[1.1] lg:max-w-[280px]">
                Education
                <br />
                <span className="serif-italic text-gold-600">&amp; fellowships.</span>
              </h2>
            </div>

            <ol className="border-t border-navy-900/10">
              {trainingTimeline.map((t) => (
                <li
                  key={t.title}
                  className="grid grid-cols-[88px_1fr] sm:grid-cols-[140px_1fr] gap-3 sm:gap-8 py-5 border-b border-navy-900/10"
                >
                  <div className="font-serif text-sm sm:text-base text-gold-600 tracking-[-0.01em]">
                    {t.year}
                  </div>
                  <div>
                    <div className="font-serif text-lg sm:text-xl text-navy-950 tracking-[-0.01em] leading-snug mb-1">
                      {t.title}
                    </div>
                    <div className="text-navy-900/65 text-sm leading-relaxed">
                      {t.detail}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Sibling pages */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
              <span className="kicker text-gold-600">Drill down</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-950 tracking-[-0.01em] leading-[1.1]">
              Or explore by section.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-900/10 border border-navy-900/10">
            {[
              {
                Icon: GraduationCap,
                title: "Credentials & Awards",
                body:
                  "Board certifications, fellowships, hospital appointments, professional memberships, and the 85+ awards and distinctions.",
                href: "/about/credentials",
              },
              {
                Icon: FileText,
                title: "Publications",
                body:
                  "Peer-reviewed papers and book chapters — including the 2026 review of therapeutic peptides in orthopaedics.",
                href: "/about/publications",
              },
              {
                Icon: Calendar,
                title: "Biography",
                body:
                  "The career narrative — from Lehigh through Arthrex implant design and 35+ peer-reviewed publications.",
                href: "/about/bio",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group bg-cream hover:bg-white p-8 lg:p-10 transition-colors duration-500"
              >
                <l.Icon
                  size={24}
                  className="text-navy-900 group-hover:text-gold-600 transition-colors mb-6"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
                <div className="font-serif text-xl text-navy-950 tracking-[-0.01em] mb-3 group-hover:text-gold-600 transition-colors">
                  {l.title}
                </div>
                <p className="text-navy-900/65 text-sm leading-relaxed mb-6">
                  {l.body}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 group-hover:text-gold-600 transition-colors">
                  <span>Read more</span>
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
