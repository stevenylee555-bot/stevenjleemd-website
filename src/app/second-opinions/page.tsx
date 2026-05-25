import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  ArrowUpRight,
  Clock,
  Globe2,
  FileSearch,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Orthopedic Surgery Second Opinions, Steven J. Lee, MD",
  description:
    "Get a world-class second opinion from Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital and an orthopedic implant designer. In-person consultations in NYC and Scarsdale, telemedicine available for out-of-state and international patients.",
  alternates: { canonical: "https://www.stevenjleemd.com/second-opinions" },
};

const faqs = [
  {
    question: "What is a second opinion consultation with Dr. Lee?",
    answer:
      "A second opinion is a focused review of a diagnosis and proposed treatment plan, typically when another physician has recommended orthopedic surgery. Dr. Lee reviews your imaging, medical records, and prior surgical plan, then provides his independent assessment of the diagnosis, whether surgery is appropriate, and what surgical approach he would recommend. Second opinion visits are conducted in-person at the NYC or Scarsdale offices, or via telemedicine.",
  },
  {
    question: "Who should consider a second opinion from Dr. Lee?",
    answer:
      "Patients who have been told they need surgery on the hand, wrist, elbow, shoulder, knee, or Achilles tendon. Patients facing complex or unusual cases. Patients who want confirmation from a recognized specialist before committing to surgery. Out-of-state and international patients seeking access to a New York surgeon with implant-design experience.",
  },
  {
    question: "How do I prepare for a second opinion visit?",
    answer:
      "Bring your imaging studies (MRI, CT, X-rays) on disc or via electronic transfer, any recent medical records, the prior physician's surgical plan or operative report if available, and a list of medications. For telemedicine visits, you can transfer imaging digitally before the consultation.",
  },
  {
    question: "Are telemedicine second opinions available?",
    answer:
      "Yes. Telemedicine consultations are available for patients in the United States and internationally. Imaging can be reviewed remotely. Telemedicine is especially appropriate for second-opinion visits, where the conversation and imaging review are central and a physical examination is less critical.",
  },
  {
    question: "Is a second opinion covered by insurance?",
    answer:
      "Many insurance plans cover second opinion consultations, particularly when surgery has been recommended. Dr. Lee sees both in-network and out-of-network patients. The office can provide superbills to support out-of-network reimbursement. International patients typically pay directly.",
  },
];

const pillars = [
  {
    Icon: Clock,
    title: "Same-week availability",
    body: "Urgent and pre-surgical second opinions are accommodated quickly, often within the same week.",
  },
  {
    Icon: Globe2,
    title: "Worldwide telemedicine",
    body: "Virtual consults for patients traveling for care or living outside New York, across the U.S. and internationally.",
  },
  {
    Icon: FileSearch,
    title: "Imaging & records review",
    body: "Direct review of MRIs, CT scans, X-rays, operative reports, and prior surgical plans before and during the visit.",
  },
  {
    Icon: CheckCircle2,
    title: "Confident decisions",
    body: "Understand your options before committing to surgery. Sometimes the right answer is a different operation, or no operation at all.",
  },
];

const cases = [
  {
    label: "Hand & Wrist",
    text: "Distal radius fractures, scapholunate ligament tears, basal joint arthroplasty, complex fracture revisions, carpal tunnel.",
  },
  {
    label: "Elbow",
    text: "UCL (Tommy John) reconstruction, LUCL repair, biceps ruptures, complex elbow trauma.",
  },
  {
    label: "Shoulder",
    text: "Rotator cuff repair, shoulder arthroscopy, recurrent instability, clavicle fractures.",
  },
  {
    label: "Knee & Sports Medicine",
    text: "ACL reconstruction, meniscus injuries, Achilles tendon ruptures, sports trauma.",
  },
];

export default function SecondOpinionsPage() {
  const faqSchema = buildFaqSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHeader
        kicker="Second Opinions"
        title="Been told you need surgery?"
        italic="Get a real second look."
        lede="A second opinion from a world-class specialist is rarely wasted. Dr. Lee reviews imaging, records, and prior surgical plans for patients who have been told they need orthopedic surgery, and helps them decide whether an operation, a different operation, or no operation is the right call."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Second Opinions", href: "/second-opinions" },
        ]}
      />

      {/* Why Dr. Lee */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-500" />
                <span className="kicker text-gold-600">Why Dr. Lee</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] text-navy-950 leading-[1.1] mb-8">
                The opinion of a surgeon who{" "}
                <span className="serif-italic text-gold-600">helped design the hardware.</span>
              </h2>
              <div className="space-y-5 text-navy-900/80 text-[17px] leading-[1.7] font-light max-w-xl">
                <p>
                  Dr. Lee is Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital and a
                  designer of plating systems, suture anchors, and internal-brace constructs now
                  used by surgeons across the country.
                </p>
                <p>
                  When a procedure involves the hardware he helped design, his perspective is
                  not just expert, it&apos;s sometimes the most informed in the country.
                </p>
                <p>
                  Patients come to Dr. Lee for second opinions on hand, wrist, elbow, shoulder,
                  knee, and Achilles injuries from across New York, the United States, and abroad.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-navy-900/10 border border-navy-900/10">
              {pillars.map((p) => (
                <div key={p.title} className="bg-white p-6 lg:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold-500/15 ring-1 ring-gold-500/30 mb-5">
                    <p.Icon size={18} className="text-gold-600" strokeWidth={1.5} />
                  </div>
                  <div className="font-serif text-lg text-navy-950 tracking-[-0.01em] mb-2">
                    {p.title}
                  </div>
                  <p className="text-navy-900/80 text-[14px] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's reviewed */}
      <section className="bg-cream border-y border-navy-900/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">What gets reviewed</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] text-navy-950 leading-[1.1]">
              The cases Dr. Lee sees{" "}
              <span className="serif-italic text-gold-600">most often.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-900/10 border border-navy-900/10">
            {cases.map((c) => (
              <div key={c.label} className="bg-white p-8">
                <div className="kicker text-gold-600 mb-3">{c.label}</div>
                <p className="text-navy-900/80 text-[15px] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-600">What to expect</span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] text-navy-950 leading-[1.1] mb-12">
            How the visit works.
          </h2>

          <ol className="border-t border-navy-900/10">
            {[
              {
                step: "01",
                title: "Send imaging and records ahead of the visit",
                body: "MRI, CT, X-rays, operative reports, and any prior physician notes. The office can guide you on secure transfer. For telemedicine visits, this happens before the consultation begins.",
              },
              {
                step: "02",
                title: "Sit down with Dr. Lee",
                body: "An in-person or virtual consultation. Dr. Lee reviews the imaging with you, examines the relevant joint if in person, and walks through the diagnosis and treatment options.",
              },
              {
                step: "03",
                title: "Leave with a clear recommendation",
                body: "Whether surgery is appropriate, what surgical approach he would recommend, what non-surgical options are available, and a realistic recovery timeline. You can follow up by email if questions come up later.",
              },
            ].map((s) => (
              <li
                key={s.step}
                className="grid grid-cols-[auto_1fr] gap-6 lg:gap-10 py-8 border-b border-navy-900/10"
              >
                <div className="font-serif text-3xl md:text-4xl text-gold-600 tracking-[-0.01em]">
                  {s.step}
                </div>
                <div>
                  <div className="font-serif text-xl md:text-2xl text-navy-950 tracking-[-0.01em] mb-3">
                    {s.title}
                  </div>
                  <p className="text-navy-900/80 text-[16px] leading-[1.7] font-light max-w-2xl">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-28 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">Ready to begin</span>
            <span className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] mb-8">
            Request a second opinion.
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Most patients schedule online via ZocDoc. The office can also help arrange telemedicine
            visits and coordinate imaging transfer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.zocdoc.com/doctor/steven-lee-md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-base shadow-[0_10px_50px_-12px_rgba(201,168,76,0.7)] hover:-translate-y-0.5"
            >
              <Calendar size={18} strokeWidth={2} />
              Book via ZocDoc
              <ExternalLink size={14} className="opacity-70" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
            >
              Contact the office
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">Frequently Asked</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] text-navy-950 leading-[1.1]">
              Second-opinion questions.
            </h2>
          </div>

          <ul className="border-t border-navy-900/15">
            {faqs.map((faq) => (
              <li key={faq.question} className="border-b border-navy-900/15">
                <details className="group">
                  <summary className="flex items-start justify-between gap-6 py-7 cursor-pointer list-none">
                    <span className="font-serif text-xl md:text-2xl text-navy-950 tracking-[-0.01em] leading-[1.3] group-hover:text-gold-600 transition-colors">
                      {faq.question}
                    </span>
                    <ChevronRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-navy-900/80 shrink-0 mt-1.5 transition-transform group-open:rotate-90"
                    />
                  </summary>
                  <p className="text-navy-900/80 text-[17px] leading-[1.7] pb-8 pr-12 font-light max-w-3xl">
                    {faq.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
