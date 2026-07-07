import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, ExternalLink } from "lucide-react";
import { ZOCDOC_URL } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import {
  buildFaqSchema,
  buildMedicalWebPageSchema,
  SITE_URL,
} from "@/lib/schema";
import { type NutritionGroup } from "@/lib/surgicalInfo";
import { getSurgeryNutritionPage } from "@/sanity/getSurgeryNutritionPage";

export const metadata: Metadata = {
  title: "Nutrition & Substance Use Before and After Surgery, Steven J. Lee, MD",
  description:
    "How to optimize your diet for surgery and recovery: calories, protein, key vitamins and minerals (Vitamin C, Calcium, Vitamin D), and guidance on smoking, alcohol, and other substances, from Dr. Steven J. Lee, MD.",
  alternates: { canonical: "https://www.stevenjleemd.com/surgery-nutrition" },
};

// Code-owned (not CMS-editable), answer-first, general education only. These
// summarize the visible page content so the FAQ schema matches what renders.
const FAQS = [
  {
    question: "What should I eat before and after surgery?",
    answer:
      "Healing raises your body's energy and protein needs, so eat regular, balanced meals with adequate protein from sources such as fish, poultry, eggs, dairy, beans, and nuts. Surgery is not the time for a restrictive weight-loss diet.",
  },
  {
    question: "Which vitamins and minerals support surgical recovery?",
    answer:
      "Vitamin C supports collagen and soft-tissue healing, while calcium and vitamin D support bone healing. Getting them from food is preferred. Ask Dr. Lee's team before starting any new supplement, since some interfere with surgery or medications.",
  },
  {
    question: "Does smoking affect healing after surgery?",
    answer:
      "Yes. Smoking and vaping reduce blood flow and are strongly associated with slower bone and tendon healing, wound problems, and higher complication rates. Stopping before surgery, even temporarily, measurably improves healing.",
  },
  {
    question: "Can I drink alcohol before or after surgery?",
    answer:
      "Heavy alcohol use impairs healing and can interact with anesthesia and pain medication. Limit alcohol in the weeks around surgery and avoid it entirely while taking prescription pain medication.",
  },
  {
    question: "Do I need protein shakes or supplements to heal?",
    answer:
      "Not necessarily. Most patients can meet their healing needs with regular food. Protein shakes can help if your appetite is low after surgery, but check with Dr. Lee's team before adding supplements, since some affect bleeding or medications.",
  },
];

function Foods({ intro, foods }: { intro?: string; foods?: string[] }) {
  if (!foods?.length) return null;
  return (
    <div className="mt-3">
      {intro && <p className="text-navy-900/80 text-[15px] leading-[1.65] mb-3">{intro}</p>}
      <ul className="flex flex-wrap gap-2">
        {foods.map((f, i) => (
          <li key={i} className="text-[13.5px] text-navy-900/90 bg-bone border border-navy-900/10 rounded-full px-3 py-1">
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((b, i) => (
        <li key={i} className="flex items-baseline gap-3 text-[15.5px] leading-[1.7] text-navy-900/90">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0 translate-y-[6px]" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Group({ g }: { g: NutritionGroup }) {
  return (
    <div className="mt-6 pl-5 border-l-2 border-gold-500/30">
      <h4 className="font-serif text-lg text-navy-950 tracking-[-0.01em] mb-3">{g.heading}</h4>
      <Bullets items={g.bullets} />
      <Foods intro={g.foodsIntro} foods={g.foods} />
    </div>
  );
}

export default async function SurgeryNutritionPage() {
  const d = await getSurgeryNutritionPage();
  const pageUrl = `${SITE_URL}/surgery-nutrition`;
  const webPageSchema = buildMedicalWebPageSchema({
    url: pageUrl,
    title: "Nutrition & Substance Use Before and After Surgery",
    description:
      "How to optimize your diet for surgery and recovery: calories, protein, key vitamins and minerals, and guidance on smoking and alcohol.",
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
        kicker="Surgical Info"
        title={d.header.title}
        italic={d.header.italic}
        lede={d.header.lede}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Nutrition & Recovery", href: "/surgery-nutrition" },
        ]}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-16 lg:py-20 space-y-8">
          {d.sections.map((s, i) => {
            const isSmoking = s.heading === "Smoking and vaping";
            return (
              <article key={i} className="bg-white border border-navy-900/10 rounded-sm p-8 lg:p-10">
                <h2 className="font-serif text-2xl md:text-[1.7rem] text-navy-950 tracking-[-0.01em] mb-5">
                  {s.heading}
                </h2>
                {s.body?.map((p, pi) => (
                  <p key={pi} className="text-navy-900/90 text-[16px] leading-[1.75] mb-4 max-w-3xl">
                    {p}
                  </p>
                ))}
                {s.bullets && s.bullets.length > 0 && <Bullets items={s.bullets} />}
                <Foods intro={s.foodsIntro} foods={s.foods} />
                {s.groups?.map((g, gi) => <Group key={gi} g={g} />)}
                {isSmoking && (
                  <p className="mt-5 text-navy-900/90 text-[15.5px] leading-[1.7]">{d.smokingClosing}</p>
                )}
              </article>
            );
          })}

          <p className="text-navy-900/70 text-[14px] leading-[1.7] italic px-2">{d.disclaimer}</p>
        </div>
      </section>

      <FaqAccordion
        headline="Nutrition and recovery, common questions."
        faqs={FAQS}
      />

      {/* CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">Before &amp; after surgery</span>
            <span className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.02em] leading-[1.08] mb-6">
            Questions about preparing to heal?
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            Review how to prepare for surgery, read the recovery instructions for your procedure, or contact the office at{" "}
            <a href="tel:+12127373301" className="text-gold-400 hover:text-gold-300 underline underline-offset-4">
              (212) 737-3301
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/before-surgery"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-base shadow-[0_10px_50px_-12px_rgba(201,168,76,0.7)] hover:-translate-y-0.5"
            >
              Preparing for surgery
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/therapy-protocols"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
            >
              Post-op instructions
              <ArrowUpRight size={16} />
            </Link>
            <a
              href={ZOCDOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
            >
              <Calendar size={16} />
              Book via ZocDoc
              <ExternalLink size={13} className="opacity-70" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
