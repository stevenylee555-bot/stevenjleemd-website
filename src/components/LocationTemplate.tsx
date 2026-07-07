import Link from "next/link";
import {
  Calendar,
  ExternalLink,
  MapPin,
  Phone,
  Clock,
  Navigation,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { ZOCDOC_URL } from "@/lib/site";
import {
  buildFaqSchema,
  buildMedicalWebPageSchema,
  SITE_URL,
} from "@/lib/schema";
import type { LocationPage } from "@/lib/locations";

export default function LocationTemplate({ data }: { data: LocationPage }) {
  const pageUrl = `${SITE_URL}/${data.slug}`;
  const webPageSchema = {
    ...buildMedicalWebPageSchema({
      url: pageUrl,
      title: data.metaTitle,
      description: data.metaDescription,
    }),
    about: { "@id": data.businessId },
  };
  const faqSchema = buildFaqSchema(data.faqs, pageUrl);

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
        kicker={data.kicker}
        title={data.headerTitle}
        italic={data.headerItalic}
        lede={data.headerLede}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: data.kicker, href: `/${data.slug}` },
        ]}
      />

      {/* Intro + office card */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
            <div className="max-w-[640px] text-navy-900/90 text-[17px] leading-[1.75] space-y-5">
              {data.intro.map((para, i) => (
                <p key={i} className={i === 0 ? "text-[18px]" : ""}>
                  {para}
                </p>
              ))}
            </div>

            {/* Office card */}
            <aside className="lg:sticky lg:top-28">
              <div className="bg-cream/70 border border-navy-900/[0.08] p-7 lg:p-8 rounded-sm">
                <div className="kicker text-gold-600 mb-5">The office</div>
                <div className="space-y-5 text-[15px] text-navy-900/90 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-gold-600 shrink-0 mt-0.5" strokeWidth={1.6} />
                    <div>
                      {data.office.addressLines.map((line) => (
                        <div key={line} className={line === data.office.addressLines[0] ? "text-navy-950 font-medium" : ""}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-gold-600 shrink-0 mt-0.5" strokeWidth={1.6} />
                    <div>{data.office.hours}</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Navigation size={16} className="text-gold-600 shrink-0 mt-0.5" strokeWidth={1.6} />
                    <div>{data.office.gettingThere}</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-gold-600 shrink-0 mt-0.5" strokeWidth={1.6} />
                    <a href={`tel:${data.office.phone.tel}`} className="hover:text-gold-600 transition-colors">
                      {data.office.phone.display}
                    </a>
                  </div>
                </div>
                {data.office.serving && (
                  <p className="mt-5 pt-5 border-t border-navy-900/10 text-[13px] uppercase tracking-wider text-navy-900/70">
                    {data.office.serving}
                  </p>
                )}
                <a
                  href={ZOCDOC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-sm"
                >
                  <Calendar size={14} />
                  Book via ZocDoc
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* What Dr. Lee treats */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-18 lg:py-24">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">Conditions treated</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.02em] leading-[1.1] text-navy-950">
              {data.treatsHeading}
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {data.treats.map((t) => (
              <li key={t} className="flex items-baseline gap-3 text-[16.5px] text-navy-900/90">
                <CheckCircle2 size={16} className="text-gold-600 shrink-0 mt-1" strokeWidth={1.5} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Dr. Lee */}
      <section className="bg-bone">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-18 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold-500" />
                <span className="kicker text-gold-600">Why Dr. Lee</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.02em] leading-[1.1] text-navy-950">
                {data.whyHeading}
              </h2>
            </div>
            <ul className="space-y-4">
              {data.why.map((c) => (
                <li key={c} className="flex items-baseline gap-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0 translate-y-[6px]" />
                  <span className="text-navy-900/85 text-[16.5px] leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
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

      {/* Bottom CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">Next step</span>
            <span className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.02em] leading-[1.05] mb-8">
            {data.ctaTitle}{" "}
            <span className="serif-italic text-gold-400">{data.ctaItalic}</span>
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            {data.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={ZOCDOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-base shadow-[0_10px_50px_-12px_rgba(201,168,76,0.7)] hover:-translate-y-0.5"
            >
              <Calendar size={18} strokeWidth={2} />
              Book via ZocDoc
              <ExternalLink size={14} className="opacity-70" />
            </a>
            <Link
              href="/second-opinions"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
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
