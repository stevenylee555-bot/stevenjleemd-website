import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { ZOCDOC_URL } from "@/lib/site";
import { getBioPage } from "@/sanity/getBioPage";

export const metadata: Metadata = {
  title: "Biography, Steven J. Lee, MD",
  description:
    "Biography of Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital and Associate Director at NISMAT. Double board certified, double fellowship-trained in hand and upper extremity surgery and sports medicine, serving NYC and Scarsdale.",
  alternates: { canonical: "https://www.stevenjleemd.com/about/bio" },
};

const credentials = [
  "Chief of Hand & Upper Extremity Surgery, Lenox Hill Hospital (since 2013)",
  "Associate Director, NISMAT (since 2006)",
  "Lenox Hill Hospital Medical Board (since 2023)",
  "Double Fellowship-Trained: Hand & Upper Extremity, Sports Medicine",
  "Double Board Certified: Orthopaedic Surgery & Surgery of the Hand",
  "Fellow, American Orthopaedic Association (AOA)",
  "Founding Member, Haun Society",
  "11x Teacher of the Year, Lenox Hill (institution record)",
  "Orthopedic Implant Designer & US Patent Holder",
];

const training: { institution: string; detail: string; note?: string }[] = [
  {
    institution: "Lehigh University / Medical College of Pennsylvania",
    detail: "Doctor of Medicine, combined 6-year accelerated program",
  },
  {
    institution: "Stony Brook University",
    detail: "Residency, Orthopedic Surgery",
  },
  {
    institution: "NYU / Hospital for Joint Diseases",
    detail: "Fellowship, Hand & Upper Extremity Surgery",
  },
  {
    institution: "Lenox Hill Hospital",
    detail: "Fellowship, Sports Medicine",
    note: "One of the oldest and most prestigious sports medicine fellowships in the country.",
  },
];

const athleteRoles = [
  "Team physician, New Jersey Red Dogs & Gladiators (professional arena football)",
  "Team physician, Hofstra University Athletics",
  "Care of the New York Jets, Islanders & Rangers during training",
];

const sportsTreated = [
  "Hockey",
  "Football",
  "Tennis",
  "Squash",
  "Golf",
  "Baseball",
  "Soccer",
  "Boxing & MMA",
];

const galleryImages = [
  {
    src: "/images/dr-lee-fellowship-forum.jpg",
    alt: "Dr. Lee speaking at a surgical fellowship forum",
    width: 3372,
    height: 5995,
    kicker: "Fellowship Forum",
    caption: "Speaking on technique and outcomes",
  },
  {
    src: "/images/dr-lee-scapholunate-talk.jpg",
    alt: "Dr. Lee presenting Scapholunate Tear Options at NISMAT",
    width: 7360,
    height: 4912,
    kicker: "NISMAT · Scapholunate Tear Options",
    caption: "Academic lecture on a published surgical series",
  },
  {
    src: "/images/dr-lee-arthrex-panel.jpg",
    alt: "Dr. Lee on a faculty panel of upper-extremity surgeons",
    width: 7952,
    height: 5304,
    kicker: "Upper-Extremity Faculty Panel",
    caption: "Faculty panel on advanced upper-extremity surgery",
  },
  {
    src: "/images/dr-lee-nfl-fracture-panel.jpg",
    alt: "Dr. Lee on an NFL fracture management faculty panel",
    width: 7952,
    height: 5304,
    kicker: "NFL Fracture Management",
    caption: "Faculty panel on professional-athlete fracture care",
  },
];

function SectionKicker({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
      <span className={"kicker " + (light ? "text-gold-400" : "text-gold-600")}>
        {label}
      </span>
    </div>
  );
}

export default async function BioPage() {
  const bio = await getBioPage();
  const introParagraphs =
    bio?.introParagraphs && bio.introParagraphs.length > 0
      ? bio.introParagraphs
      : [
          "Dr. Steven J. Lee is double board certified and double fellowship-trained in Hand & Upper Extremity Surgery and Sports Medicine, and specializes in the most complex disorders of the hand, wrist, elbow, shoulder, knee, and ankle.",
          "He is Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital in New York City, and Associate Director of the Nicholas Institute of Sports Medicine and Athletic Trauma (NISMAT), the first hospital-based facility in the country dedicated to the study of sports medicine and research.",
          "Dr. Lee is perennially recognized as one of New York Magazine's Best Doctors, a Castle Connolly Top Doctor in Orthopedic Surgery, one of America's Top Orthopedists, a U.S. News & World Report Top Doctor, and a New York Super Doctors Hall of Fame honoree.",
        ];
  const credentialsList = bio?.credentials?.length ? bio.credentials : credentials;
  const trainingList = bio?.training?.length ? bio.training : training;
  const athleteRolesList = bio?.athleteRoles?.length ? bio.athleteRoles : athleteRoles;
  const sportsTreatedList = bio?.sportsTreated?.length ? bio.sportsTreated : sportsTreated;
  const galleryList = galleryImages.map((img, i) => ({
    ...img,
    kicker: bio?.galleryCaptions?.[i]?.kicker ?? img.kicker,
    caption: bio?.galleryCaptions?.[i]?.caption ?? img.caption,
  }));

  return (
    <>
      <PageHeader
        kicker="Biography"
        title={bio?.headerTitle ?? "A surgeon at the"}
        italic={bio?.headerItalic ?? "leading edge of his field."}
        lede={bio?.headerLede ?? "Double board certified and double fellowship-trained, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, and the surgeon many physicians refer the cases they find too complex."}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Biography", href: "/about/bio" },
        ]}
      />

      {/* Intro + sticky sidebar */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-20">
            <article className="max-w-[660px]">
              <div className="space-y-6 text-navy-900/90 text-[17px] leading-[1.75] font-light">
                {introParagraphs.map((p, i) =>
                  i === 0 ? (
                    <p
                      key={i}
                      className="text-navy-950 text-[19px] md:text-[20px] font-normal leading-[1.55] tracking-[-0.005em]"
                    >
                      {p}
                    </p>
                  ) : (
                    <p key={i}>{p}</p>
                  )
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:pt-1">
              <div className="lg:sticky lg:top-28">
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

                <div className="kicker text-navy-900/90 mb-4">Credentials</div>
                <ul className="space-y-3 mb-10">
                  {credentialsList.map((c) => (
                    <li key={c} className="flex items-baseline gap-3 text-[14.5px] text-navy-900/85">
                      <span className="h-1 w-1 rounded-full bg-gold-500 shrink-0 translate-y-[2px]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="kicker text-navy-900/90 mb-3">Hospital Affiliations</div>
                <ul className="space-y-3 mb-10 text-[14.5px] text-navy-900/85">
                  <li>
                    <span className="font-semibold text-navy-950">Lenox Hill Hospital</span>
                    <div className="text-navy-900/90 text-xs mt-0.5">Chief of Hand and Upper Extremity Surgery</div>
                  </li>
                  <li>
                    <span className="font-semibold text-navy-950">NISMAT</span>
                    <div className="text-navy-900/90 text-xs mt-0.5">Associate Director (Sports Medicine &amp; Athletic Trauma)</div>
                  </li>
                  <li>
                    <span className="font-semibold text-navy-950">
                      Manhattan Eye, Ear &amp; Throat Hospital
                    </span>
                  </li>
                </ul>

                <a
                  href={ZOCDOC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book an appointment via ZocDoc (opens in new tab)"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-sm shadow-[0_8px_24px_-12px_rgba(201,168,76,0.45)] hover:-translate-y-0.5"
                >
                  <Calendar size={14} aria-hidden="true" />
                  Book an Appointment
                  <ExternalLink size={12} className="opacity-70" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Training & Education */}
      <section className="bg-cream border-t border-navy-900/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div className="lg:pt-1">
              <SectionKicker label="Training & Education" />
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-navy-950 tracking-[-0.02em] leading-[1.1]">
                {bio?.trainingHeading ?? "A foundation built at New York's teaching hospitals."}
              </h2>
            </div>

            <ol className="border-t border-navy-900/10 lg:mt-1">
              {trainingList.map((t, i) => (
                <li
                  key={t.institution}
                  className="grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-7 py-6 border-b border-navy-900/10"
                >
                  <span className="font-serif text-[1.05rem] text-gold-600/85 leading-none pt-[5px] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-serif text-navy-950 text-xl lg:text-[1.35rem] leading-snug tracking-[-0.01em]">
                      {t.institution}
                    </div>
                    <div className="text-navy-900/90 text-[15px] leading-relaxed mt-1.5">
                      {t.detail}
                    </div>
                    {t.note && (
                      <p className="text-navy-900/90 text-[13.5px] italic leading-relaxed mt-2 max-w-md">
                        {t.note}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Athletes & Sports Medicine */}
      <section className="relative bg-navy-950 text-white overflow-hidden hero-grain">
        <div className="absolute inset-0 -z-0" aria-hidden="true">
          <div className="absolute -top-32 -right-24 h-[460px] w-[460px] rounded-full bg-gold-500/[0.08] blur-3xl" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <SectionKicker label="Athletes & Sports Medicine" light />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] tracking-[-0.02em] leading-[1.1] mb-7">
              {bio?.athletesHeadingLead ?? "Trained at the center of"}{" "}
              <span className="serif-italic text-gold-400">
                {bio?.athletesHeadingEmphasis ?? "New York sports medicine."}
              </span>
            </h2>
            <p className="text-white/75 text-[17px] lg:text-lg leading-[1.7] font-light">
              {bio?.athletesIntro ??
                "Few orthopedic surgeons are fellowship-trained in both hand and upper extremity surgery and sports medicine. That combination gives Dr. Lee a distinct advantage with athletes, who place far greater demands on a repaired joint or tendon and almost always need to return to their sport on a timeline."}
            </p>
          </div>

          <blockquote className="my-12 lg:my-16 max-w-3xl border-t border-white/15 pt-8">
            <p className="font-serif text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.25] tracking-[-0.01em] text-white">
              {bio?.athletesQuoteLead ?? "He treats the athlete, not just the injury,"}{" "}
              <span className="serif-italic text-gold-400">
                {bio?.athletesQuoteEmphasis ?? "tailoring care to the demands of the sport and the timeline to return."}
              </span>
            </p>
          </blockquote>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="kicker text-white/80 mb-5">Team Physician & Training Roles</div>
              <ul className="space-y-4">
                {athleteRolesList.map((r) => (
                  <li key={r} className="flex items-baseline gap-3 text-white/85 text-[15.5px] leading-relaxed">
                    <span className="h-1 w-1 rounded-full bg-gold-500 shrink-0 translate-y-[6px]" aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="kicker text-white/80 mb-5">Professional Athletes Treated</div>
              <div className="flex flex-wrap gap-2.5">
                {sportsTreatedList.map((s) => (
                  <span
                    key={s}
                    className="text-[13px] font-medium tracking-wide text-white/85 bg-white/[0.06] border border-white/10 px-3.5 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-white/85 text-[14.5px] leading-relaxed">
                {bio?.athletesNote ??
                  "Especially attuned to collegiate and recruiting athletes: all three of Dr. Lee's children are Division I athletes."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-20">
            <div className="max-w-[660px]">
              <SectionKicker label="Research & Innovation" />
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-navy-950 tracking-[-0.02em] leading-[1.1] mb-8">
                {bio?.researchHeading ?? "Advancing the tools of the field."}
              </h2>
              <div className="space-y-6 text-navy-900/90 text-[17px] leading-[1.75] font-light">
                <p>
                  {bio?.researchPara1 ??
                    "Dr. Lee has been a pioneer in orthopedic research and is nationally recognized for innovative techniques to treat the most difficult disorders in orthopedics. He has designed numerous orthopedic implants now in wide use, including among the most advanced plating systems for fracture fixation of the hand, wrist, elbow, and upper extremity. His anchor designs helped pioneer the use of internal bracing for the upper extremity."}
                </p>
                <p>
                  He has also helped advance the use of biologics in orthopedic care. Dr.
                  Lee was among the first surgeons in New York City to perform
                  platelet-rich plasma (PRP) therapy, including for upper extremity
                  injuries, and performs more than 250 PRP procedures a year. His work
                  extends to BMAC stem cell therapy and, more recently, peptides. In 2026
                  he co-authored{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12753158/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-950 font-medium border-b border-gold-500/60 hover:border-gold-600 transition-colors"
                  >
                    &quot;Therapeutic Peptides in Orthopaedics: Applications, Challenges,
                    and Future Directions&quot;
                  </a>{" "}
                  in <em className="serif-italic">JAAOS Global Research &amp; Reviews</em>,
                  believed to be the first peer-reviewed review paper on therapeutic
                  peptides in an orthopedic journal.
                </p>
              </div>
            </div>

            {/* Patent highlight */}
            <aside className="lg:pt-2">
              <div className="relative bg-cream rounded-sm p-7 lg:p-8 ring-1 ring-navy-900/10">
                <div className="absolute -top-2 -left-2 h-12 w-12 border-t-2 border-l-2 border-gold-500" aria-hidden="true" />
                <div className="absolute -bottom-2 -right-2 h-12 w-12 border-b-2 border-r-2 border-gold-500" aria-hidden="true" />
                <div className="kicker text-gold-600 mb-4">US Patent</div>
                <div className="font-serif text-3xl lg:text-4xl text-navy-950 tracking-[-0.01em] leading-none mb-3">
                  {bio?.patentNumber ?? "12,622,710 B2"}
                </div>
                <p className="text-navy-900/90 text-[14.5px] leading-relaxed">
                  {bio?.patentDesc ??
                    "Center of Rotation Guide, a surgical instrumentation design granted in 2026, with several additional patents pending."}
                </p>
                <div className="mt-6 pt-5 border-t border-navy-900/10 text-navy-900/90 text-[14.5px] leading-relaxed">
                  {bio?.patentNote ??
                    "Implants designed by Dr. Lee are now used by surgeons across the country."}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Teaching & Academics */}
      <section className="bg-cream border-t border-navy-900/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-[720px]">
            <SectionKicker label="Teaching & Academics" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-navy-950 tracking-[-0.02em] leading-[1.1] mb-8">
              {bio?.teachingHeading ?? "A teacher first, recognized by his own residents."}
            </h2>
            <div className="space-y-6 text-navy-900/90 text-[17px] leading-[1.75] font-light">
              <p>
                Dr. Lee is actively involved in the instruction of physicians and allied
                health professionals and frequently teaches courses across the country.
                He has authored 35+ peer-reviewed publications and book chapters and
                delivered 84 national lectures and presentations, with particular focus
                on Achilles tendon repair, the subject of several of his papers, and
                scapholunate ligament reconstruction. He serves as a journal reviewer for
                the{" "}
                <em className="serif-italic">
                  Journal of the American Academy of Orthopaedic Surgeons
                </em>
                .
              </p>
              <p>
                {bio?.teachingPara2 ??
                  "His teaching has been recognized repeatedly by the Lenox Hill orthopedic residents, who have voted him the Chitranjan S. Ranawat Mentorship Award seven times (2010, 2014, 2015, 2017, 2018, 2019, 2023), the James A. Nicholas Award for Distinction in Orthopaedic Residency Education twice (2021, 2022), and the Maurice Cowen Award for Excellence in Medical Education twice (2003, 2009), eleven teaching honors in all and the most in Lenox Hill Hospital's history. At Lenox Hill he sits on the orthopedic residency and sports medicine fellowship admissions committees, the Program Evaluation Committee, and the Hospital Medical Board."}
              </p>
              <p>
                {bio?.teachingPara3 ??
                  "He is a Fellow of the American Academy of Orthopaedic Surgeons, a founding member of the Haun Society, and a Fellow of the American Orthopaedic Association, an honor reserved for fewer than 10% of practicing orthopedists globally and a marker of exceptional leadership in the field."}
              </p>
            </div>

            <blockquote className="mt-10 pt-8 border-t border-navy-900/10">
              <p className="font-serif text-2xl md:text-[1.75rem] leading-[1.3] tracking-[-0.01em] text-navy-950">
                {bio?.teachingQuoteLead ?? "By his own account, he is proudest of, and best known among his peers for,"}{" "}
                <span className="serif-italic text-gold-600">
                  {bio?.teachingQuoteEmphasis ?? "his surgical skill."}
                </span>
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Teaching & Speaking gallery */}
      <section className="bg-white border-t border-navy-900/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <SectionKicker label="Teaching & Speaking" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-navy-950 tracking-[-0.02em] leading-[1.1] mb-6">
              {bio?.galleryHeadingLead ?? "84 lectures and presentations."}{" "}
              <span className="serif-italic text-gold-600">
                {bio?.galleryHeadingEmphasis ?? "Counting."}
              </span>
            </h2>
            <p className="text-navy-900/90 text-[17px] leading-[1.7] font-light">
              {bio?.galleryIntro ??
                "National podium presentations at AAOS, AOSSM, and ASSH. Invited lectures at national meetings and educational platforms including the Orthopaedic Summit, the Philadelphia Hand Meeting, VuMedi, and the IFSSH. Course faculty and cadaver-lab instructor at national surgical skills programs. Below, selected moments."}
            </p>
          </div>

          <div className="lg:columns-2 lg:gap-10 xl:gap-12 space-y-10 lg:space-y-0">
            {galleryList.map((img) => (
              <figure key={img.src} className="group lg:break-inside-avoid lg:mb-10 xl:mb-12">
                <div className="relative w-full overflow-hidden bg-navy-800 ring-1 ring-navy-900/10">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="w-full h-auto transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-4 lg:mt-5">
                  <div className="kicker text-gold-600 mb-1.5">{img.kicker}</div>
                  <div className="text-navy-900/90 text-[15px] leading-snug">{img.caption}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Practice today + closing links */}
      <section className="bg-cream border-t border-navy-900/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
            <div className="max-w-[620px]">
              <SectionKicker label="Practice Today" />
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-navy-950 tracking-[-0.02em] leading-[1.1] mb-6">
                {bio?.practiceHeading ?? "Two New York offices, in person and online."}
              </h2>
              <p className="text-navy-900/90 text-[17px] leading-[1.75] font-light">
                {bio?.practicePara ??
                  "Dr. Lee sees patients at two offices: his primary practice on Manhattan's East 74th Street and a second office in Scarsdale, Westchester. He offers in-person and telemedicine consultations and treats both in-network and out-of-network patients, including international patients who travel specifically to consult with him."}
              </p>

              <a
                href={ZOCDOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book an appointment via ZocDoc (opens in new tab)"
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-sm shadow-[0_8px_24px_-12px_rgba(201,168,76,0.45)] hover:-translate-y-0.5"
              >
                <Calendar size={15} aria-hidden="true" />
                Book an Appointment
                <ExternalLink size={12} className="opacity-70" aria-hidden="true" />
              </a>
            </div>

            <div className="lg:pt-2">
              <div className="kicker text-navy-900/90 mb-5">Continue</div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: "Credentials & Awards", href: "/about/credentials" },
                  { label: "Publications", href: "/about/publications" },
                  { label: "Download CV", href: "/about/cv" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group flex items-center justify-between p-4 bg-white border border-navy-900/10 rounded-sm hover:border-gold-500 transition-colors"
                  >
                    <span className="text-sm font-semibold text-navy-950 group-hover:text-gold-600 transition-colors">
                      {l.label}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-navy-900/85 group-hover:text-gold-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
