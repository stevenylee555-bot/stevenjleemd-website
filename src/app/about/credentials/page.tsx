import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { getCredentialsPage } from "@/sanity/getCredentialsPage";

export const metadata: Metadata = {
  title: "Credentials & Awards, Steven J. Lee, MD",
  description:
    "Board certifications, fellowships, hospital appointments, and the 85+ awards and distinctions of Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  alternates: { canonical: "https://www.stevenjleemd.com/about/credentials" },
};

const appointments = [
  {
    role: "Chief, Surgery of the Hand and Upper Extremity",
    org: "Department of Orthopaedic Surgery, Lenox Hill Hospital",
    years: "2013 – Present",
  },
  {
    role: "Lenox Hill Hospital Medical Board",
    org: "Lenox Hill Hospital",
    years: "2023 – Present",
  },
  {
    role: "Associate Director",
    org: "Nicholas Institute of Sports Medicine and Athletic Trauma (NISMAT)",
    years: "2006 – Present",
  },
  {
    role: "Attending Physician",
    org: "Department of Orthopaedic Surgery, Lenox Hill Hospital",
    years: "2000 – Present",
  },
  {
    role: "Police Surgeon",
    org:
      "NYC PBA · New York State Troopers, Inc. · Amtrak Fraternal Order of Police",
    years: "2007 – Present",
  },
];

const certifications = [
  "American Board of Orthopaedic Surgery, Board Certified",
  "American Board of Medical Specialties, Orthopaedic Surgery of the Hand (Subspecialty Certified)",
  "National Boards of Medical Examiners (NBME), Diplomate, Certification # 438187 (1994)",
  "New York State Medical License, Current",
  "New York State DEA, Active",
];

const memberships = [
  "Member, American Orthopaedic Association (since 2013)",
  "Fellow, American Academy of Orthopaedic Surgeons",
  "Diplomate, American Board of Orthopaedic Surgeons",
  "Founding Member, Haun Society",
  "Member, American Association for Hand Surgeons",
  "Member, New York Society for Surgery of the Hand",
  "Member, National Orthopaedic Education Society (NOES)",
  "Member, Eastern Orthopaedic Association",
];

const recognition = [
  {
    title: "Castle Connolly Top Doctor",
    detail:
      "Annually since 2014, including Castle Connolly New York Metro Area listings",
  },
  {
    title: "New York Times Super Doctors",
    detail: "Listed since 2008 · Hall of Fame inductee since 2019",
  },
  {
    title: "New York Magazine Best Doctor for Orthopaedic Surgery",
    detail: "Annually since 2014",
  },
  {
    title: "Guide to America's Top Orthopedists",
    detail:
      "Consumer's Research Council of America, multiple years (2007–2013)",
  },
];

const teaching = [
  {
    title: "Chitranjan S. Ranawat, MD Mentorship Award",
    detail:
      "Voted by Lenox Hill orthopaedic residents, 7 times (2010, 2014, 2015, 2017, 2018, 2019, 2023)",
  },
  {
    title: "James A. Nicholas Award for Distinction in Orthopaedic Residency Education",
    detail: "Voted by Lenox Hill residents, twice (2021, 2022)",
  },
  {
    title: "Maurice Cowen, MD Memorial Award for Excellence in Medical Education",
    detail: "Teacher of the Year, twice (2003, 2009)",
  },
];

const research = [
  {
    title: "William A. Grana Award for Best Original Research",
    detail:
      "Most outstanding research paper in the Orthopaedic Journal of Sports Medicine, 2017",
  },
  {
    title: "Excellence in Research Award",
    detail: "Sports Physical Therapy Section, 2009",
  },
  {
    title: "Award for Best Research",
    detail:
      "Lenox Hill Alumni Meeting, 2000 (coracoclavicular ligament reconstruction)",
  },
  {
    title: "Editorial Reviewer",
    detail:
      "Journal of the American Academy of Orthopaedic Surgeons, since March 2009",
  },
];

const implantDesign = [
  {
    title: "Mini Comprehensive Fixation System",
    detail: "Hand fracture plating system · Arthrex design team",
  },
  {
    title: "Elbow Fracture Plating System",
    detail: "Elbow fracture fixation · Arthrex design team",
  },
  {
    title: "3.5 DX SwiveLock Anchor",
    detail:
      "Suture anchor used in internal-brace ligament reconstruction · Arthrex design team",
  },
  {
    title: "NanoCorkscrew FT",
    detail: "Tendon-to-bone repair anchor · Arthrex design team",
  },
  {
    title: "FiberLock CMC Suspensionplasty",
    detail: "Thumb basal-joint reconstruction construct · Arthrex design team",
  },
];

const patents = [
  {
    title: "US Patent #12,622,710 B2",
    detail:
      "Center of Rotation Guide, surgical instrumentation · Awarded May 12, 2026",
  },
  {
    title: "Additional patents pending",
    detail: "Further inventions are in the patent application process.",
  },
];

const teamPhysician = [
  {
    title: "PGA Tour, Northeast Division",
    detail:
      "Orthopaedic Surgery Consultant via Physiotherapy Associates / Stryker (2006–2008)",
  },
  {
    title: "New Jersey Red Dogs · New Jersey Gladiators (Arena Football)",
    detail: "Team Orthopaedic Physician, 2000–2002",
  },
  {
    title: "Hofstra University Athletic Teams",
    detail: "Team Orthopaedic Physician, 2000–2002",
  },
];

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20 lg:mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16">
        <div className="lg:max-w-[260px]">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
            <span className="kicker text-gold-600">{kicker}</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] leading-[1.1]">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default async function CredentialsPage() {
  const cred = await getCredentialsPage();
  const appointmentsList = cred?.appointments?.length ? cred.appointments : appointments;
  const certificationsList = cred?.certifications?.length ? cred.certifications : certifications;
  const recognitionList = cred?.recognition?.length ? cred.recognition : recognition;
  const teachingList = cred?.teaching?.length ? cred.teaching : teaching;
  const researchList = cred?.research?.length ? cred.research : research;
  const implantDesignList = cred?.implantDesign?.length ? cred.implantDesign : implantDesign;
  const patentsList = cred?.patents?.length ? cred.patents : patents;
  const teamPhysicianList = cred?.teamPhysician?.length ? cred.teamPhysician : teamPhysician;
  const membershipsList = cred?.memberships?.length ? cred.memberships : memberships;

  return (
    <>
      <PageHeader
        kicker="Credentials & Awards"
        title={cred?.headerTitle ?? "A 25-year record at"}
        italic={cred?.headerItalic ?? "Lenox Hill Hospital."}
        lede={cred?.headerLede ?? "Board certifications, hospital appointments, recognition, teaching honors, research awards, and a 2026 US patent. Full CV available as a PDF download."}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Credentials", href: "/about/credentials" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-20 lg:py-24">
          <Section kicker="Appointments" title="Hospital & faculty roles.">
            <ul className="border-t border-navy-900/10">
              {appointmentsList.map((a) => (
                <li
                  key={a.role}
                  className="py-5 border-b border-navy-900/10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6"
                >
                  <div>
                    <div className="font-serif text-lg text-navy-950 tracking-[-0.01em] leading-snug">
                      {a.role}
                    </div>
                    <div className="text-navy-900/80 text-sm mt-0.5">{a.org}</div>
                  </div>
                  <span className="kicker text-navy-900/80 shrink-0">
                    {a.years}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section kicker="Board certifications" title="License & subspecialty.">
            <ul className="space-y-3">
              {certificationsList.map((c) => (
                <li
                  key={c}
                  className="flex items-baseline gap-3 text-[16px] text-navy-900/85 leading-relaxed"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0 translate-y-[6px]"
                    aria-hidden="true"
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section
            kicker="Recognition"
            title={
              <>
                Top doctor{" "}
                <span className="serif-italic text-gold-600">listings.</span>
              </>
            }
          >
            <ul className="border-t border-navy-900/10">
              {recognitionList.map((r) => (
                <li key={r.title} className="py-5 border-b border-navy-900/10">
                  <div className="font-serif text-lg text-navy-950 tracking-[-0.01em] leading-snug mb-1">
                    {r.title}
                  </div>
                  <div className="text-navy-900/80 text-sm leading-relaxed">
                    {r.detail}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section kicker="Teaching" title="Mentorship & education awards.">
            <ul className="border-t border-navy-900/10">
              {teachingList.map((r) => (
                <li key={r.title} className="py-5 border-b border-navy-900/10">
                  <div className="font-serif text-lg text-navy-950 tracking-[-0.01em] leading-snug mb-1">
                    {r.title}
                  </div>
                  <div className="text-navy-900/80 text-sm leading-relaxed">
                    {r.detail}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section kicker="Research" title="Awards & editorial roles.">
            <ul className="border-t border-navy-900/10">
              {researchList.map((r) => (
                <li key={r.title} className="py-5 border-b border-navy-900/10">
                  <div className="font-serif text-lg text-navy-950 tracking-[-0.01em] leading-snug mb-1">
                    {r.title}
                  </div>
                  <div className="text-navy-900/80 text-sm leading-relaxed">
                    {r.detail}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section kicker="Implant Design" title="Implants & fixation systems.">
            <p className="text-navy-900/80 text-[15.5px] leading-relaxed mb-6 max-w-2xl">
              {cred?.implantDesignIntro ??
                "Dr. Lee has served on the design teams for several orthopedic implants now used by surgeons across the country. Selected contributions:"}
            </p>
            <ul className="border-t border-navy-900/10">
              {implantDesignList.map((d) => (
                <li key={d.title} className="py-5 border-b border-navy-900/10">
                  <div className="font-serif text-lg text-navy-950 tracking-[-0.01em] leading-snug mb-1">
                    {d.title}
                  </div>
                  <div className="text-navy-900/80 text-sm leading-relaxed">
                    {d.detail}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section kicker="Patent" title="Surgical instrumentation.">
            <ul className="border-t border-navy-900/10">
              {patentsList.map((p) => (
                <li key={p.title} className="py-5 border-b border-navy-900/10">
                  <div className="font-serif text-lg text-navy-950 tracking-[-0.01em] leading-snug mb-1">
                    {p.title}
                  </div>
                  <div className="text-navy-900/80 text-sm leading-relaxed">
                    {p.detail}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section kicker="Team physician history" title="Pro and collegiate.">
            <ul className="border-t border-navy-900/10">
              {teamPhysicianList.map((t) => (
                <li key={t.title} className="py-5 border-b border-navy-900/10">
                  <div className="font-serif text-lg text-navy-950 tracking-[-0.01em] leading-snug mb-1">
                    {t.title}
                  </div>
                  <div className="text-navy-900/80 text-sm leading-relaxed">
                    {t.detail}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section kicker="Memberships" title="Societies & associations.">
            <ul className="space-y-3">
              {membershipsList.map((m) => (
                <li
                  key={m}
                  className="flex items-baseline gap-3 text-[15.5px] text-navy-900/85 leading-relaxed"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0 translate-y-[6px]"
                    aria-hidden="true"
                  />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
                <span className="kicker text-gold-400">Full record</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] leading-[1.1] mb-6">
                {cred?.ctaHeadingLead ?? "The complete CV is available"}{" "}
                <span className="serif-italic text-gold-400">
                  {cred?.ctaHeadingEmphasis ?? "as a PDF."}
                </span>
              </h2>
              <p className="text-white/85 text-[16px] leading-[1.7] font-light max-w-xl">
                {cred?.ctaBody ??
                  "The full document includes 35+ peer-reviewed publications, 34 national presentations, 50 invited lectures, and the complete 85+ award list."}
              </p>
            </div>
            <div className="lg:pt-12">
              <div className="flex flex-col gap-3">
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
                  href="/about/publications"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all font-medium"
                >
                  View publications
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
