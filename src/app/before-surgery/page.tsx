import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, ExternalLink, Phone, Mail, Printer, MapPin } from "lucide-react";
import { ZOCDOC_URL } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import { getBeforeSurgeryPage } from "@/sanity/getBeforeSurgeryPage";

export const metadata: Metadata = {
  title: "Preparing for Surgery, Steven J. Lee, MD",
  description:
    "How to prepare for surgery with Dr. Steven J. Lee, MD: surgical scheduling with the coordinator, pre-operative instructions (medications, food, transportation), and NYC surgical locations.",
  alternates: { canonical: "https://www.stevenjleemd.com/before-surgery" },
};

export default async function BeforeSurgeryPage() {
  const d = await getBeforeSurgeryPage();
  const { planning, coordinator, instructions, locations } = d;
  return (
    <>
      <PageHeader
        kicker="Surgical Info"
        title={d.header.title}
        italic={d.header.italic}
        lede={d.header.lede}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Preparing for Surgery", href: "/before-surgery" },
        ]}
      />

      {/* Scheduling + coordinator */}
      <section className="bg-white border-b border-navy-900/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          <div>
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.25rem)] tracking-[-0.02em] text-navy-950 leading-[1.15] mb-6">
              {planning.heading}
            </h2>
            <div className="space-y-5 text-navy-900/90 text-[17px] leading-[1.7] max-w-2xl">
              {planning.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>{planning.paperworkIntro}</p>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {planning.paperwork.map((p, i) => (
                <li key={i} className="flex items-baseline gap-3 text-[15px] text-navy-900/90">
                  <span className="h-1 w-1 rounded-full bg-gold-500 shrink-0 translate-y-[7px]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:pt-2">
            <div className="border border-navy-900/10 bg-cream rounded-sm p-7">
              <div className="kicker text-gold-600 mb-3">Your surgical coordinator</div>
              <div className="font-serif text-2xl text-navy-950 tracking-[-0.01em]">{coordinator.name}</div>
              <div className="text-navy-900/70 text-sm mb-5">{coordinator.role}</div>
              <ul className="space-y-3 text-[14.5px] text-navy-900/90">
                <li className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-gold-600 shrink-0 mt-0.5" />
                  <span>{coordinator.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={15} className="text-gold-600 shrink-0" />
                  <span>{coordinator.phone}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={15} className="text-gold-600 shrink-0" />
                  <a href={`mailto:${coordinator.email}`} className="hover:text-gold-600 underline underline-offset-2 break-all">
                    {coordinator.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Printer size={15} className="text-gold-600 shrink-0" />
                  <span>Fax {coordinator.fax}</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Pre-op instructions */}
      <section className="bg-cream border-b border-navy-900/[0.06]">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-16 lg:py-20">
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.25rem)] tracking-[-0.02em] text-navy-950 leading-[1.15] mb-4">
            {instructions.heading}
          </h2>
          <p className="text-navy-900/90 text-[17px] leading-[1.7] max-w-2xl mb-9">{instructions.intro}</p>
          <div className="bg-white border border-navy-900/10 rounded-sm divide-y divide-navy-900/10">
            {instructions.items.map((it, i) => (
              <div key={i} className="p-6 lg:px-8 lg:py-6">
                <p className="text-navy-900/90 text-[16px] leading-[1.7]">
                  <span className="font-semibold text-navy-950">{it.term}</span> {it.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgical locations */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16 lg:py-20">
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.25rem)] tracking-[-0.02em] text-navy-950 leading-[1.15] mb-4">
            {locations.heading}
          </h2>
          <p className="text-navy-900/90 text-[17px] leading-[1.7] max-w-3xl mb-6">{locations.intro}</p>
          <div className="flex flex-col sm:flex-row gap-x-12 gap-y-4 mb-12 text-[15px]">
            <div>
              <div className="kicker text-gold-600 mb-2">Out-patient centers</div>
              <ul className="space-y-1 text-navy-900/90">
                {locations.outpatient.map((o, i) => <li key={i}>{o}</li>)}
              </ul>
            </div>
            <div>
              <div className="kicker text-gold-600 mb-2">In-patient centers</div>
              <ul className="space-y-1 text-navy-900/90">
                {locations.inpatient.map((o, i) => <li key={i}>{o}</li>)}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.facilities.map((f, i) => (
              <div key={i} className="border border-navy-900/10 rounded-sm p-6 flex flex-col">
                <h3 className="font-serif text-xl text-navy-950 tracking-[-0.01em] mb-3">{f.name}</h3>
                <div className="text-navy-900/80 text-[14px] leading-relaxed mb-4">
                  {f.address.map((a, ai) => <div key={ai}>{a}</div>)}
                </div>
                {f.description?.map((p, pi) => (
                  <p key={pi} className="text-navy-900/85 text-[14px] leading-[1.65] mb-3">{p}</p>
                ))}
                <div className="mt-auto pt-3 text-[14px] text-navy-900/90 flex items-center gap-2">
                  <Phone size={14} className="text-gold-600 shrink-0" />
                  {f.contact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">After surgery</span>
            <span className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.02em] leading-[1.08] mb-6">
            Already scheduled? Know what comes next.
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            Read the recovery instructions for your specific procedure, and review the nutrition guidance that helps you heal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/therapy-protocols"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-base shadow-[0_10px_50px_-12px_rgba(201,168,76,0.7)] hover:-translate-y-0.5"
            >
              Post-op instructions
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/surgery-nutrition"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
            >
              Nutrition &amp; recovery
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
