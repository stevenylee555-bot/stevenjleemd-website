import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { regions, conditionsByRegion } from "@/lib/conditions";

export const metadata: Metadata = {
  title: "Conditions Treated — Steven J. Lee, MD",
  description:
    "Comprehensive library of orthopedic conditions treated by Dr. Steven J. Lee, MD — Chief of Hand Surgery at Lenox Hill Hospital. Hand, wrist, elbow, shoulder, knee, and Achilles. Physician-authored treatment information.",
  alternates: { canonical: "https://www.stevenjleemd.com/conditions" },
};

export default function ConditionsIndexPage() {
  return (
    <>
      <PageHeader
        kicker="Conditions Library"
        title="Physician-authored information"
        italic="on every condition Dr. Lee treats."
        lede="From diagnosis through surgery and recovery — read what your surgeon would tell you in the office. Detailed pages are rolling out across the conditions Dr. Lee sees most often. Patients are encouraged to revisit the relevant page after their visit."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/conditions" },
        ]}
      />

      {/* Index by region */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="space-y-20 lg:space-y-24">
            {regions.map((region) => {
              const list = conditionsByRegion(region);
              if (list.length === 0) return null;
              return (
                <div key={region}>
                  <div className="flex items-baseline justify-between gap-6 mb-8 pb-5 border-b border-navy-900/15">
                    <h2 className="font-serif text-2xl md:text-3xl tracking-[-0.01em] text-navy-950">
                      {region}
                    </h2>
                    <span className="kicker text-navy-900/40 shrink-0">
                      {list.length.toString().padStart(2, "0")} conditions
                    </span>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy-900/10 border border-navy-900/10">
                    {list.map((c) => {
                      const isPriority = c.status === "priority";
                      return (
                        <li key={c.slug} className="bg-white">
                          {isPriority ? (
                            <Link
                              href={`/conditions/${c.slug}`}
                              className="group block p-6 lg:p-8 hover:bg-cream transition-colors"
                            >
                              <div className="flex items-start justify-between gap-4 mb-3">
                                <h3 className="font-serif text-xl text-navy-950 tracking-[-0.01em] leading-snug group-hover:text-gold-600 transition-colors">
                                  {c.name}
                                </h3>
                                <ArrowUpRight
                                  size={16}
                                  className="text-navy-900/30 group-hover:text-gold-600 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1.5"
                                />
                              </div>
                              <p className="text-navy-900/60 text-[14.5px] leading-relaxed">
                                {c.blurb}
                              </p>
                            </Link>
                          ) : (
                            <div className="p-6 lg:p-8 opacity-90">
                              <div className="flex items-start justify-between gap-4 mb-3">
                                <h3 className="font-serif text-xl text-navy-950/85 tracking-[-0.01em] leading-snug">
                                  {c.name}
                                </h3>
                                <span className="text-[10px] uppercase tracking-wider text-gold-600 font-semibold shrink-0 mt-2">
                                  Coming soon
                                </span>
                              </div>
                              <p className="text-navy-900/55 text-[14.5px] leading-relaxed">
                                {c.blurb}
                              </p>
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

      {/* Note + CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-gold-500" />
                <span className="kicker text-gold-400">A note from Dr. Lee</span>
              </div>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] tracking-[-0.02em] leading-[1.15] mb-6">
                These pages aren&apos;t a substitute for a visit —{" "}
                <span className="serif-italic text-gold-400">they&apos;re a complement to one.</span>
              </h2>
              <p className="text-white/65 text-[16px] leading-[1.75] font-light">
                Patients leave the office with a lot of information and remember a fraction of it.
                These pages are written so you can come back to them as you make decisions about
                your care, and so you can share them with family or referring physicians.
              </p>
            </div>

            <div className="lg:pt-12">
              <div className="kicker text-gold-400 mb-4">Ready to talk about your case?</div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.zocdoc.com/doctor/steven-lee-md"
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
                  Request a second opinion
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
