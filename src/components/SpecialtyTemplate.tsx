import Link from "next/link";
import { ArrowUpRight, Calendar, ChevronRight, ExternalLink, MapPin, Phone, Video } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { type Specialty } from "@/lib/specialties";
import { conditionsByRegion } from "@/lib/conditions";
import { ZOCDOC_URL } from "@/lib/site";
import {
  buildGraph,
  buildFaqSchema,
  buildMedicalProcedureSchema,
  buildMedicalWebPageSchema,
  SITE_URL,
} from "@/lib/schema";
import {
  HandIcon,
  ElbowIcon,
  ShoulderIcon,
  KneeIcon,
  BiologicsIcon,
} from "@/components/home/icons/AnatomyIcons";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function iconFor(key: Specialty["iconKey"]) {
  switch (key) {
    case "hand":
      return HandIcon;
    case "elbow":
      return ElbowIcon;
    case "shoulder":
      return ShoulderIcon;
    case "knee":
      return KneeIcon;
    case "biologics":
      return BiologicsIcon;
  }
}

export default function SpecialtyTemplate({ specialty }: { specialty: Specialty }) {
  const Icon = iconFor(specialty.iconKey);
  const allConditions = specialty.conditionRegions.flatMap((r) =>
    conditionsByRegion(r)
  );

  const pageUrl = `${SITE_URL}/specialties/${specialty.slug}`;
  const webPageSchema = buildMedicalWebPageSchema({
    url: pageUrl,
    title: specialty.metaTitle,
    description: specialty.metaDescription,
  });
  const procedureGraph = buildGraph(
    specialty.approach.map((p) =>
      buildMedicalProcedureSchema({
        name: p.title,
        description: p.body,
        url: pageUrl,
        slug: slugify(p.title),
        bodyLocation: specialty.shortName,
      }),
    ),
  );
  const faqSchema =
    specialty.faqs && specialty.faqs.length > 0
      ? buildFaqSchema(specialty.faqs, pageUrl)
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureGraph) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <PageHeader
        kicker={specialty.eyebrow}
        title={specialty.headline}
        italic={specialty.headlineItalic}
        lede={specialty.lede}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Specialties", href: "/specialties" },
          { label: specialty.shortName, href: `/specialties/${specialty.slug}` },
        ]}
      />

      {/* Intro, editorial two-column */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
            <div>
              <div className="text-navy-900 mb-6">
                <Icon size={64} />
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-500" />
                <span className="kicker text-gold-600">The approach</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] tracking-[-0.02em] leading-[1.1] text-navy-950">
                {specialty.introTitle}
              </h2>
            </div>
            <div className="space-y-6 lg:pt-2">
              {specialty.introBody.map((para, i) => (
                <p
                  key={i}
                  className="text-navy-900/90 text-[17px] leading-[1.75]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach pillars */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">How Dr. Lee operates</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1.08] text-navy-950">
              Procedures &{" "}
              <span className="serif-italic text-gold-600">techniques.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy-900/10 border border-navy-900/10">
            {specialty.approach.map((item, i) => (
              <div
                key={item.title}
                className="bg-cream p-8 lg:p-10 flex flex-col"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-serif text-gold-600 text-xl tabular-nums">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl text-navy-950 tracking-[-0.01em] leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-navy-900/90 text-[15px] leading-relaxed pl-10">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implant-design callout (if applicable) */}
      {specialty.implantDesign && (
        <section className="bg-navy-950 text-white">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-gold-500" />
                  <span className="kicker text-gold-400">Implant Design</span>
                </div>
                <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] tracking-[-0.02em] leading-[1.1] mb-6">
                  {specialty.implantDesign.title}
                </h2>
                <p className="text-white/85 text-[17px] leading-[1.75] font-light">
                  {specialty.implantDesign.body}
                </p>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="text-gold-400/50">
                  <Icon size={140} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Conditions treated */}
      {allConditions.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
            <div className="max-w-3xl mb-14">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-500" />
                <span className="kicker text-gold-600">Conditions treated</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1.08] text-navy-950">
                What patients come in for.
              </h2>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy-900/10 border border-navy-900/10">
              {allConditions.map((c) => {
                const isPriority = c.status === "priority";
                return (
                  <li key={c.slug} className="bg-white">
                    {isPriority ? (
                      <Link
                        href={`/conditions/${c.slug}`}
                        className="group block p-6 lg:p-7 hover:bg-cream transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-serif text-lg lg:text-xl text-navy-950 tracking-[-0.01em] leading-snug group-hover:text-gold-600 transition-colors">
                            {c.name}
                          </h3>
                          <ArrowUpRight
                            size={15}
                            className="text-navy-900/30 group-hover:text-gold-600 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1"
                          />
                        </div>
                        <p className="text-navy-900/90 text-sm leading-relaxed">
                          {c.blurb}
                        </p>
                      </Link>
                    ) : (
                      <div className="p-6 lg:p-7 opacity-90">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-serif text-lg lg:text-xl text-navy-950/85 tracking-[-0.01em] leading-snug">
                            {c.name}
                          </h3>
                          <span className="text-[10px] uppercase tracking-wider text-gold-600 font-semibold shrink-0 mt-1.5">
                            Coming soon
                          </span>
                        </div>
                        <p className="text-navy-900/90 text-sm leading-relaxed">
                          {c.blurb}
                        </p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* Why Dr. Lee */}
      <section className="bg-bone">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-500" />
                <span className="kicker text-gold-600">Why Dr. Lee</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.02em] leading-[1.1] text-navy-950">
                Credentials that{" "}
                <span className="serif-italic text-gold-600">matter here.</span>
              </h2>
            </div>
            <ul className="space-y-4">
              {specialty.credentials.map((c) => (
                <li key={c} className="flex items-baseline gap-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0 translate-y-[6px]" />
                  <span className="text-navy-900/85 text-[16.5px] leading-relaxed">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {specialty.faqs && specialty.faqs.length > 0 && (
        <section className="bg-cream">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
            <div className="mb-12 max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-500" />
                <span className="kicker text-gold-600">Patient questions</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] text-navy-950 leading-[1.1]">
                {specialty.shortName} questions, answered.
              </h2>
            </div>

            <ul className="border-t border-navy-900/15">
              {specialty.faqs.map((faq, i) => (
                <li key={faq.question} className="border-b border-navy-900/15">
                  <details className="group" open={i === 0}>
                    <summary className="flex items-start justify-between gap-6 py-7 cursor-pointer list-none">
                      <span className="font-serif text-xl md:text-2xl text-navy-950 tracking-[-0.01em] leading-[1.3] group-hover:text-gold-600 transition-colors">
                        {faq.question}
                      </span>
                      <ChevronRight
                        size={20}
                        strokeWidth={1.5}
                        className="text-navy-900/90 shrink-0 mt-1.5 transition-transform group-open:rotate-90"
                      />
                    </summary>
                    <p className="text-navy-900/90 text-[17px] leading-[1.7] pb-8 pr-12 max-w-3xl">
                      {faq.answer}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Booking CTA */}
      <section className="bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-gold-500/8 blur-3xl" />
        <div className="absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-gold-500/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-gold-500" />
                <span className="kicker text-gold-400">Book a consultation</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,3rem)] tracking-[-0.02em] leading-[1.08] mb-6">
                Ready to talk about{" "}
                <span className="serif-italic text-gold-400">your case?</span>
              </h2>
              <p className="text-white/85 text-[17px] leading-[1.7] font-light max-w-xl mb-8">
                In-person visits in NYC or Scarsdale. International and out-of-area
                patients can begin with a telemedicine consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={ZOCDOC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all shadow-[0_10px_30px_-12px_rgba(201,168,76,0.5)] hover:-translate-y-0.5"
                >
                  <Calendar size={16} />
                  Book via ZocDoc
                  <ExternalLink size={14} className="opacity-70" />
                </a>
                <Link
                  href="/second-opinions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all font-medium"
                >
                  Second opinion
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="space-y-5 lg:pt-12">
              <div className="flex items-start gap-3 text-white/75">
                <MapPin size={16} className="text-gold-400 shrink-0 mt-1" />
                <div className="text-[15px] leading-relaxed">
                  <div className="text-white font-medium mb-0.5">
                    Manhattan office
                  </div>
                  <div>159 East 74th Street · New York, NY</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/75">
                <MapPin size={16} className="text-gold-400 shrink-0 mt-1" />
                <div className="text-[15px] leading-relaxed">
                  <div className="text-white font-medium mb-0.5">
                    Westchester office
                  </div>
                  <div>2 Overhill Road, Suite 310 · Scarsdale, NY</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/75">
                <Phone size={16} className="text-gold-400 shrink-0 mt-1" />
                <a
                  href="tel:+12127373301"
                  className="text-[15px] leading-relaxed hover:text-gold-400 transition-colors"
                >
                  (212) 737-3301
                </a>
              </div>
              <div className="flex items-start gap-3 text-white/75">
                <Video size={16} className="text-gold-400 shrink-0 mt-1" />
                <div className="text-[15px] leading-relaxed">
                  Telemedicine available, domestic & international
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
