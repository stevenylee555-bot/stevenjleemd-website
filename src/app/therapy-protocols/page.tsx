import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, ExternalLink } from "lucide-react";
import { AlertCircle, AlertTriangle } from "lucide-react";
import { ZOCDOC_URL } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import { getTherapyProtocolsPage } from "@/sanity/getTherapyProtocolsPage";
import { procedureRegions, proceduresByRegion } from "@/lib/procedureProtocols";
import { generalPostOp as g } from "@/lib/surgicalInfo";

export const metadata: Metadata = {
  title: "Post-Operative Instructions, Steven J. Lee, MD",
  description:
    "Procedure-by-procedure post-operative recovery instructions from Dr. Steven J. Lee, MD: what to expect, how to care for your surgical site, activity guidance, and when to call the office. Hand, wrist, elbow, shoulder, knee, and ankle.",
  alternates: { canonical: "https://www.stevenjleemd.com/therapy-protocols" },
};

export default async function TherapyProtocolsPage() {
  const tp = await getTherapyProtocolsPage();

  return (
    <>
      <PageHeader
        kicker="Post-Op Instructions"
        title={tp?.headerTitle ?? "Post-operative instructions,"}
        italic={tp?.headerItalic ?? "procedure by procedure."}
        lede={
          tp?.headerLede ??
          "Find your procedure below to read Dr. Lee's recovery instructions: what to expect, how to care for your surgical site, and when to call the office. Please always follow the specific instructions you were given after your own surgery."
        }
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Post-Op Instructions", href: "/therapy-protocols" },
        ]}
      />

      {/* General "what to expect after surgery" guidance */}
      <section className="bg-white border-b border-navy-900/[0.06]">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 lg:py-20">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] tracking-[-0.02em] text-navy-950 leading-[1.15] mb-6">
            {g.heading}
          </h2>
          <div className="space-y-4 text-navy-900/90 text-[17px] leading-[1.7] max-w-3xl mb-10">
            {g.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7 mb-10">
            {g.topics.map((t, i) => (
              <div key={i}>
                <h3 className="font-serif text-lg text-navy-950 tracking-[-0.01em] mb-2">{t.heading}</h3>
                <p className="text-navy-900/85 text-[15px] leading-[1.7]">{t.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="border border-gold-500/40 bg-gold-500/[0.07] rounded-sm p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertCircle size={18} className="text-gold-600 shrink-0" strokeWidth={1.9} />
                <span className="kicker text-gold-600">Call the office immediately for</span>
              </div>
              <ul className="space-y-2.5">
                {g.callOffice.map((w, i) => (
                  <li key={i} className="flex items-baseline gap-2.5 text-[14.5px] leading-[1.6] text-navy-900/90">
                    <span className="h-1 w-1 rounded-full bg-gold-600 shrink-0 translate-y-[7px]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-700/30 bg-red-700/[0.05] rounded-sm p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertTriangle size={18} className="text-red-700 shrink-0" strokeWidth={1.9} />
                <span className="kicker text-red-700">Call 911 or go to the ER for</span>
              </div>
              <ul className="space-y-2.5">
                {g.call911.map((w, i) => (
                  <li key={i} className="flex items-baseline gap-2.5 text-[14.5px] leading-[1.6] text-navy-900/90">
                    <span className="h-1 w-1 rounded-full bg-red-700 shrink-0 translate-y-[7px]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-navy-900/85 text-[15px] leading-[1.7] max-w-3xl">
            <span className="font-semibold text-navy-950">Follow-up appointment.</span> {g.followUp}
          </p>
        </div>
      </section>

      {/* Library by region */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="mb-12 lg:mb-16">
            <div className="kicker text-gold-600 mb-3">Procedure-specific instructions</div>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] tracking-[-0.02em] text-navy-950 leading-[1.15] max-w-3xl">
              Find your procedure for detailed recovery instructions.
            </h2>
          </div>
          <div className="space-y-20 lg:space-y-24">
            {procedureRegions.map((region) => {
              const list = proceduresByRegion(region);
              if (list.length === 0) return null;
              return (
                <div
                  key={region}
                  id={region.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
                  className="scroll-mt-28"
                >
                  <div className="flex items-baseline justify-between gap-6 mb-8 pb-5 border-b border-navy-900/15">
                    <h2 className="font-serif text-2xl md:text-3xl tracking-[-0.01em] text-navy-950">
                      {region}
                    </h2>
                    <span className="kicker text-navy-900/85 shrink-0">
                      {list.length.toString().padStart(2, "0")} procedures
                    </span>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy-900/10 border border-navy-900/10">
                    {list.map((p) => {
                      const isLive = p.status === "live";
                      return (
                        <li key={p.slug} className="bg-white">
                          {isLive ? (
                            <Link
                              href={`/therapy-protocols/${p.slug}`}
                              className="group flex items-center justify-between gap-4 p-6 lg:p-7 hover:bg-cream transition-colors"
                            >
                              <h3 className="font-serif text-lg lg:text-xl text-navy-950 tracking-[-0.01em] leading-snug group-hover:text-gold-600 transition-colors">
                                {p.name}
                              </h3>
                              <ArrowUpRight
                                size={16}
                                className="text-navy-900/30 group-hover:text-gold-600 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                            </Link>
                          ) : (
                            <div className="flex items-center justify-between gap-4 p-6 lg:p-7 opacity-90">
                              <h3 className="font-serif text-lg lg:text-xl text-navy-950/85 tracking-[-0.01em] leading-snug">
                                {p.name}
                              </h3>
                              <span className="text-[10px] uppercase tracking-wider text-gold-600 font-semibold shrink-0">
                                Coming soon
                              </span>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-cream border-y border-navy-900/[0.06]">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-14 lg:py-16">
          <div className="kicker text-navy-900/70 mb-4">{tp?.disclaimerHeading ?? "Please note"}</div>
          <p className="text-navy-900/80 text-[15px] leading-[1.7] max-w-3xl">
            {tp?.disclaimer ??
              "These instructions are general guidance and do not replace the specific instructions you were given after your own surgery. Recovery varies from patient to patient. If your instructions differ from what you read here, follow the instructions from your surgery, and contact the office with any questions."}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-28 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">Questions about your recovery</span>
            <span className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] mb-8">
            {tp?.ctaHeading ?? "Talk through your recovery plan."}
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            {tp?.ctaBody ??
              "For questions specific to your procedure and recovery, book a visit or contact the office. Always follow the instructions given to you after your own surgery."}
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
