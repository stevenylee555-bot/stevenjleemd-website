import Link from "next/link";
import {
  Calendar,
  ArrowUpRight,
  Activity,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { buildFaqSchema, buildConditionSchema } from "@/lib/schema";
import type { ConditionPageContent } from "@/lib/conditionPages";

export default function ConditionTemplate({
  data,
}: {
  data: ConditionPageContent;
}) {
  const faqSchema = buildFaqSchema(data.faqs);
  const conditionSchema = buildConditionSchema({
    name: data.name,
    description: data.schemaDescription,
    url: `https://www.stevenjleemd.com/conditions/${data.slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionSchema) }}
      />

      <PageHeader
        kicker={data.region}
        title={data.headerTitle}
        italic={data.headerItalic}
        lede={data.headerLede}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/conditions" },
          { label: data.name, href: `/conditions/${data.slug}` },
        ]}
      />

      {/* Byline */}
      <section className="bg-white border-b border-navy-900/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-navy-900/80">
            <span className="kicker text-navy-900/65 mr-3">Written by</span>
            <span className="font-semibold text-navy-950">{data.byline.name}</span>
            <span className="text-navy-900/80"> · {data.byline.title}</span>
          </div>
          <div className="text-xs text-navy-900/80 uppercase tracking-wider">
            Last reviewed · {data.byline.reviewed}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-20">
            {/* Main column, capped at ~70ch for editorial readability */}
            <article className="max-w-[640px]">
              <div className="text-navy-900/80 text-[17px] leading-[1.75] font-light">
                {/* Overview */}
                {data.overview.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-navy-900/90 text-[18px] font-normal"
                        : ""
                    }
                  >
                    {para}
                  </p>
                ))}

                {/* Body sections */}
                {data.bodySections.map((section) => (
                  <BodySection key={section.heading} section={section} />
                ))}

                {/* Dr. Lee's approach, full-card editorial treatment, no side-stripe */}
                <div className="!my-14 relative bg-cream/70 border border-navy-900/12 p-7 lg:p-9">
                  <div className="flex items-center gap-3 mb-5 pb-5 border-b border-navy-900/10">
                    <span className="h-px w-8 bg-gold-500" />
                    <span className="kicker text-gold-600">
                      Dr. Lee&apos;s approach
                    </span>
                  </div>
                  {data.drLeeApproach.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-navy-950 text-[17px] leading-[1.7] font-normal mb-4"
                          : "text-navy-900/80 text-[17px] leading-[1.7] font-light"
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {/* Treatment sections */}
                {data.treatmentSections?.map((section) => (
                  <BodySection key={section.heading} section={section} />
                ))}

                {/* Recovery timeline */}
                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-14 mb-3 leading-tight">
                  Recovery timeline
                </h2>
                {data.recoveryIntro && <p>{data.recoveryIntro}</p>}
                <ol className="!my-8 border-t border-navy-900/10">
                  {data.recovery.map((r) => (
                    <li
                      key={r.when}
                      className="grid grid-cols-[88px_1fr] sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 py-5 border-b border-navy-900/10"
                    >
                      <div className="font-serif text-base sm:text-lg text-gold-600 tracking-[-0.01em]">
                        {r.when}
                      </div>
                      <div className="text-navy-900/80 text-[15px] leading-relaxed">
                        {r.what}
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Misconceptions */}
                {data.misconceptions && (
                  <>
                    <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-14 mb-3 leading-tight">
                      What patients commonly misunderstand
                    </h2>
                    <p>{data.misconceptions.intro}</p>
                    <ul className="!my-5 space-y-3">
                      {data.misconceptions.items.map((item) => (
                        <li key={item.heading} className="flex items-baseline gap-3">
                          <AlertTriangle
                            size={16}
                            className="text-gold-600 mt-1 shrink-0"
                            strokeWidth={1.5}
                          />
                          <span>
                            <strong className="text-navy-950">{item.heading}</strong>{" "}
                            {item.body}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <p className="!mt-12 text-navy-900/80 text-sm italic">
                  This page is general educational content authored by Dr. Lee.
                  It is not a substitute for individual medical advice. Every
                  patient&apos;s case is different, book a consultation to discuss
                  yours.
                </p>
              </div>

              {/* Inline CTA */}
              <div className="mt-12 pt-10 border-t border-navy-900/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.zocdoc.com/doctor/steven-lee-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all shadow-[0_10px_30px_-12px_rgba(201,168,76,0.5)] hover:-translate-y-0.5"
                >
                  <Calendar size={16} />
                  Book an appointment
                  <ExternalLink size={12} className="opacity-70" />
                </a>
                <Link
                  href="/second-opinions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-navy-900/20 hover:border-navy-950 text-navy-900 hover:bg-cream rounded-md transition-all font-medium"
                >
                  Request a second opinion
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky lg:top-28 space-y-10">
                {/* At a glance */}
                <div className="bg-cream/60 border border-navy-900/[0.08] p-6 lg:p-7 rounded-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <Activity
                      size={16}
                      className="text-gold-600"
                      strokeWidth={1.5}
                    />
                    <span className="kicker text-gold-600">At a glance</span>
                  </div>
                  <dl className="space-y-4">
                    {data.sidebarFacts.map((f) => (
                      <div key={f.label}>
                        <dt className="text-xs uppercase tracking-wider text-navy-900/80 font-semibold mb-1">
                          {f.label}
                        </dt>
                        <dd className="text-[14.5px] text-navy-900/85 leading-snug">
                          {f.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Why Dr. Lee */}
                <div>
                  <div className="kicker text-navy-900/65 mb-3">Why Dr. Lee</div>
                  <ul className="space-y-3 text-[14.5px] text-navy-900/85">
                    {data.whyDrLee.map((item) => (
                      <li key={item} className="flex items-baseline gap-3">
                        <CheckCircle2
                          size={14}
                          className="text-gold-600 mt-1 shrink-0"
                          strokeWidth={1.5}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related conditions */}
                <div>
                  <div className="kicker text-navy-900/65 mb-3">
                    Related conditions
                  </div>
                  <ul className="divide-y divide-navy-900/[0.08]">
                    {data.related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/conditions/${r.slug}`}
                          className="group flex items-center justify-between py-3 text-[14.5px] text-navy-900/80 hover:text-gold-600 transition-colors"
                        >
                          <span>{r.name}</span>
                          <ChevronRight
                            size={14}
                            className="text-navy-900/30 group-hover:text-gold-600 transition-all group-hover:translate-x-0.5"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA card */}
                <div className="bg-navy-950 text-white p-6 lg:p-7 rounded-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock
                      size={16}
                      className="text-gold-400"
                      strokeWidth={1.5}
                    />
                    <span className="kicker text-gold-400">
                      {data.ctaCard.eyebrow}
                    </span>
                  </div>
                  <div className="font-serif text-xl text-white tracking-[-0.01em] leading-snug mb-5">
                    {data.ctaCard.headline}
                  </div>
                  <a
                    href="https://www.zocdoc.com/doctor/steven-lee-md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-sm"
                  >
                    <Calendar size={14} />
                    Book via ZocDoc
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">Patient questions</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] text-navy-950 leading-[1.1]">
              {data.faqHeadline}
            </h2>
          </div>

          <ul className="border-t border-navy-900/15">
            {data.faqs.map((faq, i) => (
              <li key={faq.question} className="border-b border-navy-900/15">
                <details className="group" open={i === 0}>
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

      {/* Bottom CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">Next step</span>
            <span className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.02em] leading-[1.05] mb-8">
            {data.bottomCtaTitle}{" "}
            <span className="serif-italic text-gold-400">
              {data.bottomCtaItalic}
            </span>
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            {data.bottomCtaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.zocdoc.com/doctor/steven-lee-md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-base shadow-[0_10px_50px_-12px_rgba(201,168,76,0.7)] hover:-translate-y-0.5"
            >
              <Calendar size={18} strokeWidth={2} />
              Book via ZocDoc
              <ExternalLink size={14} className="opacity-70" />
            </a>
            <Link
              href="/conditions"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
            >
              View other conditions
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function BodySection({
  section,
}: {
  section: ConditionPageContent["bodySections"][number];
}) {
  return (
    <>
      <h2 className="font-serif text-2xl md:text-3xl text-navy-950 tracking-[-0.01em] !mt-14 mb-3 leading-tight">
        {section.heading}
      </h2>
      {section.body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {section.bullets && (
        <ul className="!my-5 space-y-2">
          {section.bullets.map((b) => (
            <li key={b} className="flex items-baseline gap-3">
              <span className="h-1 w-1 rounded-full bg-gold-500 shrink-0 translate-y-[2px]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {section.bulletsAfter && <p>{section.bulletsAfter}</p>}
    </>
  );
}
