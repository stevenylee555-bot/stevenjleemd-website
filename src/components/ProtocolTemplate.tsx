import Link from "next/link";
import { ArrowUpRight, Calendar, ExternalLink, AlertCircle, AlertTriangle, ChevronLeft } from "lucide-react";
import { ZOCDOC_URL } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import {
  buildMedicalWebPageSchema,
  buildMedicalProcedureSchema,
  SITE_URL,
} from "@/lib/schema";
import type { ProcedureProtocol } from "@/lib/procedureProtocols";

export default function ProtocolTemplate({ data }: { data: ProcedureProtocol }) {
  const sections = data.sections?.filter((s) => s.heading || s.body?.length || s.bullets?.length) ?? [];

  const pageUrl = `${SITE_URL}/therapy-protocols/${data.slug}`;
  const title = data.officialTitle || data.name;
  const webPageSchema = buildMedicalWebPageSchema({
    url: pageUrl,
    title: `${title}: Post-Operative Instructions`,
    description: `Post-operative care and recovery instructions for ${data.name}, from the practice of Steven J. Lee, MD.`,
  });
  const procedureSchema = buildMedicalProcedureSchema({
    name: title,
    description: `Post-operative recovery protocol for ${data.name}.`,
    url: pageUrl,
    slug: data.slug,
    bodyLocation: data.region,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <PageHeader
        kicker={`Post-Op Instructions · ${data.region}`}
        title={data.officialTitle || data.name}
        lede="What to expect and how to care for yourself after your procedure. These are Dr. Lee's general guidelines. Always follow the specific instructions given to you after your own surgery."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Post-Op Instructions", href: "/therapy-protocols" },
          { label: data.name, href: `/therapy-protocols/${data.slug}` },
        ]}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-14 lg:py-20">
          <Link
            href="/therapy-protocols"
            className="inline-flex items-center gap-1.5 text-navy-900/70 hover:text-gold-600 text-[13px] font-medium transition-colors mb-10"
          >
            <ChevronLeft size={15} />
            All post-op instructions
          </Link>

          {/* Instruction sections */}
          <div className="bg-white border border-navy-900/10 rounded-sm divide-y divide-navy-900/10">
            {sections.map((s, si) => (
              <div key={si} className="p-8 lg:p-10">
                {s.heading && (
                  <h2 className="font-serif text-xl md:text-2xl text-navy-950 tracking-[-0.01em] mb-4">
                    {s.heading}
                  </h2>
                )}
                {s.body?.map((p, pi) => (
                  <p
                    key={pi}
                    className="text-navy-900/90 text-[16px] leading-[1.75] max-w-3xl [&:not(:last-child)]:mb-4"
                  >
                    {p}
                  </p>
                ))}
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mt-4 space-y-3">
                    {s.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-baseline gap-3 text-[15.5px] leading-[1.7] text-navy-900/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0 translate-y-[6px]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Warning callouts */}
          {(data.warnings?.length > 0 || data.erWarnings?.length > 0) && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.warnings?.length > 0 && (
                <div className="border border-gold-500/40 bg-gold-500/[0.07] rounded-sm p-6">
                  <div className="flex items-center gap-2.5 mb-4">
                    <AlertCircle size={18} className="text-gold-600 shrink-0" strokeWidth={1.9} />
                    <span className="kicker text-gold-600">Call the office immediately for</span>
                  </div>
                  <ul className="space-y-2.5">
                    {data.warnings.map((w, wi) => (
                      <li key={wi} className="flex items-baseline gap-2.5 text-[14.5px] leading-[1.6] text-navy-900/90">
                        <span className="h-1 w-1 rounded-full bg-gold-600 shrink-0 translate-y-[7px]" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {data.erWarnings?.length > 0 && (
                <div className="border border-red-700/30 bg-red-700/[0.05] rounded-sm p-6">
                  <div className="flex items-center gap-2.5 mb-4">
                    <AlertTriangle size={18} className="text-red-700 shrink-0" strokeWidth={1.9} />
                    <span className="kicker text-red-700">Go to the ER immediately for</span>
                  </div>
                  <ul className="space-y-2.5">
                    {data.erWarnings.map((w, wi) => (
                      <li key={wi} className="flex items-baseline gap-2.5 text-[14.5px] leading-[1.6] text-navy-900/90">
                        <span className="h-1 w-1 rounded-full bg-red-700 shrink-0 translate-y-[7px]" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Disclaimer */}
          {data.disclaimer && (
            <p className="mt-8 text-navy-900/70 text-[14px] leading-[1.7] italic">{data.disclaimer}</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">Questions about your recovery</span>
            <span className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.02em] leading-[1.08] mb-6">
            Reach Dr. Lee&rsquo;s team.
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            Call the office at{" "}
            <a href="tel:+12127373301" className="text-gold-400 hover:text-gold-300 underline underline-offset-4">
              (212) 737-3301
            </a>{" "}
            with any questions. Always follow the specific instructions given to you after your own surgery.
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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
            >
              Contact the office
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
