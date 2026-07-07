import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  FileText,
  Phone,
  ClipboardCheck,
  Send,
  Globe,
} from "lucide-react";
import { ZOCDOC_URL } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import {
  buildFaqSchema,
  buildMedicalWebPageSchema,
  SITE_URL,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insurance, Out-of-Network & Costs",
  description:
    "How insurance and payment work with Dr. Steven J. Lee, MD in NYC and Scarsdale: in-network and out-of-network visits, superbills and reimbursement, second opinions, telemedicine, international patients, and self-pay treatments like PRP.",
  alternates: { canonical: "https://www.stevenjleemd.com/insurance-and-costs" },
};

// Process-focused by design: no dollar figures. Fees change and depend on the
// case; the page owns the how-it-works query and routes pricing questions to
// the office.
const FAQS = [
  {
    question: "Does Dr. Lee take my insurance?",
    answer:
      "Dr. Lee sees both in-network and out-of-network patients. Because participation varies by plan and can change, the most reliable way to confirm your coverage is to call the office at (212) 737-3301 with your insurance card. The staff will verify your benefits before your visit.",
  },
  {
    question: "What does out-of-network mean, and can I still see Dr. Lee?",
    answer:
      "Out-of-network means Dr. Lee does not have a direct contract with your insurance plan. You can still see him: you pay the office directly and receive a superbill, an itemized receipt with the codes your insurer needs, to submit for reimbursement. Many PPO plans reimburse a portion of out-of-network care once the deductible is met.",
  },
  {
    question: "What is a superbill and how do I use it?",
    answer:
      "A superbill is an itemized statement listing the diagnosis and procedure codes from your visit. You submit it to your insurance company, usually through the member portal or by mail, and the insurer reimburses you directly according to your out-of-network benefits. Dr. Lee's office provides a superbill for every out-of-network visit.",
  },
  {
    question: "How do I find out what my plan reimburses?",
    answer:
      "Call the member-services number on your insurance card and ask three things: whether your plan includes out-of-network benefits, what your out-of-network deductible is, and what percentage the plan pays for out-of-network specialist visits and surgery. The office can supply the procedure codes so your insurer can quote you specific numbers.",
  },
  {
    question: "Are second opinions and telemedicine visits covered?",
    answer:
      "Second opinions are a routine, widely covered service: most plans cover them like any specialist visit, in-network or out-of-network. Telemedicine consultations follow your plan's telehealth rules. International and self-pay patients can simply pay directly, and the office quotes the consultation fee when you book.",
  },
  {
    question: "Why are PRP and other biologic treatments self-pay?",
    answer:
      "Most insurers classify PRP and other regenerative injections as elective, so they are typically not covered and are paid directly. Dr. Lee's office tells you the expected cost and the likely number of sessions before you commit, so there are no surprises.",
  },
  {
    question: "Does surgery cost more at a hospital or a surgery center?",
    answer:
      "The facility fee, anesthesia fee, and surgeon's fee are billed separately, and facility fees are generally lower at outpatient surgery centers than at hospitals. Where your procedure happens depends first on what is medically appropriate. The office and your insurer can walk through the components in advance so you know what to expect.",
  },
];

const STEPS = [
  {
    icon: Phone,
    title: "Verify your benefits",
    body: "Call the office with your insurance card. The staff confirms whether your plan is in-network and, if not, what your out-of-network benefits look like.",
  },
  {
    icon: ClipboardCheck,
    title: "Know before your visit",
    body: "You get a clear picture of what your visit involves before you come in, including which costs your plan is expected to cover and which are yours.",
  },
  {
    icon: FileText,
    title: "Receive your superbill",
    body: "After an out-of-network visit, the office provides an itemized superbill with every code your insurer needs for reimbursement.",
  },
  {
    icon: Send,
    title: "Submit and get reimbursed",
    body: "Submit the superbill through your insurer's member portal or by mail. Reimbursement goes directly to you, per your plan's out-of-network schedule.",
  },
];

export default function InsuranceAndCostsPage() {
  const pageUrl = `${SITE_URL}/insurance-and-costs`;
  const webPageSchema = buildMedicalWebPageSchema({
    url: pageUrl,
    title: "Insurance, Out-of-Network & Costs",
    description:
      "How insurance and payment work with Dr. Steven J. Lee, MD: in-network and out-of-network visits, superbills and reimbursement, second opinions, telemedicine, and self-pay treatments.",
  });
  const faqSchema = buildFaqSchema(FAQS, pageUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHeader
        kicker="For Patients"
        title="Insurance, out-of-network,"
        italic="and what things cost."
        lede="Straight answers about how payment works with Dr. Lee's practice: in-network and out-of-network visits, superbills and reimbursement, second opinions, telemedicine, and self-pay treatments. No surprises."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Insurance & Costs", href: "/insurance-and-costs" },
        ]}
      />

      {/* Intro */}
      <section className="bg-white border-b border-navy-900/[0.06]">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-16 lg:py-20">
          <div className="space-y-5 text-navy-900/90 text-[17px] leading-[1.75]">
            <p className="text-[18px]">
              Seeing the right surgeon matters more than staying inside a
              network directory, and for many patients the difference in
              out-of-pocket cost is smaller than they expect. Dr. Lee&rsquo;s
              office is set up to make either path straightforward: in-network
              patients are billed as usual, and out-of-network patients receive
              complete paperwork for reimbursement.
            </p>
            <p>
              The office verifies your benefits before your visit, tells you
              what to expect, and answers cost questions directly at{" "}
              <a
                href="tel:+12127373301"
                className="text-gold-600 hover:text-gold-500 underline underline-offset-4"
              >
                (212) 737-3301
              </a>
              . Nothing on this page is a quote; your plan and your case
              determine the numbers, and the staff walks you through both.
            </p>
          </div>
        </div>
      </section>

      {/* Out-of-network process */}
      <section className="bg-cream border-b border-navy-900/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16 lg:py-20">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">Out-of-network, step by step</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.02em] leading-[1.1] text-navy-950">
              How reimbursement works.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-900/10 border border-navy-900/10">
            {STEPS.map((s, i) => (
              <div key={s.title} className="bg-cream p-7 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-gold-600 text-xl tabular-nums">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <s.icon size={18} className="text-gold-600" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-lg text-navy-950 tracking-[-0.01em] mb-2.5">
                  {s.title}
                </h3>
                <p className="text-navy-900/85 text-[14.5px] leading-[1.65]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International & self-pay */}
      <section className="bg-white border-b border-navy-900/[0.06]">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-16 lg:py-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-600">International & self-pay</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.02em] leading-[1.1] text-navy-950 mb-6">
            No insurance? Also simple.
          </h2>
          <div className="space-y-5 text-navy-900/90 text-[17px] leading-[1.75]">
            <p>
              International patients and patients paying directly are quoted
              the consultation fee when they book, and receive a clear picture
              of costs before agreeing to any procedure. Many begin with a{" "}
              <Link
                href="/second-opinions"
                className="text-gold-600 hover:text-gold-500 underline underline-offset-4"
              >
                telemedicine second opinion
              </Link>{" "}
              to decide whether traveling for treatment makes sense.
            </p>
            <p className="flex items-start gap-3">
              <Globe size={18} className="text-gold-600 shrink-0 mt-1.5" strokeWidth={1.6} />
              <span>
                The office coordinates records, imaging, and scheduling for
                out-of-area patients so in-person time in New York is used
                efficiently.
              </span>
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion
        kicker="Costs & coverage"
        headline="Insurance and cost questions, answered."
        faqs={FAQS}
      />

      {/* CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">Next step</span>
            <span className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.02em] leading-[1.08] mb-6">
            Get your coverage questions answered.
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            Call the office at{" "}
            <a
              href="tel:+12127373301"
              className="text-gold-400 hover:text-gold-300 underline underline-offset-4"
            >
              (212) 737-3301
            </a>{" "}
            with your insurance card, or book a visit and the staff will verify
            your benefits before you come in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ZOCDOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-base shadow-[0_10px_50px_-12px_rgba(201,168,76,0.7)] hover:-translate-y-0.5"
            >
              <Calendar size={18} strokeWidth={2} />
              Book via ZocDoc
              <ExternalLink size={14} className="opacity-70" />
            </a>
            <Link
              href="/second-opinions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
            >
              Request a second opinion
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
