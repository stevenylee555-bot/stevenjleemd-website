import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { specialties } from "@/lib/specialties";
import {
  HandIcon,
  ElbowIcon,
  ShoulderIcon,
  KneeIcon,
  BiologicsIcon,
} from "@/components/home/icons/AnatomyIcons";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Specialties, Steven J. Lee, MD",
  description:
    "Orthopedic specialties of Dr. Steven J. Lee, MD, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital. Hand and wrist, elbow, shoulder, knee and sports, and advanced biologic treatments including PRP, BMAC, and peptide therapy.",
  alternates: { canonical: "https://www.stevenjleemd.com/specialties" },
};

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  hand: HandIcon,
  elbow: ElbowIcon,
  shoulder: ShoulderIcon,
  knee: KneeIcon,
  biologics: BiologicsIcon,
};

export default function SpecialtiesIndexPage() {
  return (
    <>
      <PageHeader
        kicker="Areas of Expertise"
        title="Surgery and sports medicine,"
        italic="from fingertip to knee."
        lede="Dr. Lee's practice spans upper extremity surgery, sports medicine, and advanced biologics, with particular depth in the procedures he helped pioneer and the hardware he helped design."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Specialties", href: "/specialties" },
        ]}
      />

      {/* Editorial intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">A doubly-trained surgeon</span>
            </div>
            <div className="space-y-6">
              <p className="text-navy-900/80 text-[18px] leading-[1.7] font-light">
                Most orthopedic surgeons specialize in one body region. Dr. Lee is{" "}
                <em className="serif-italic text-navy-950">double fellowship-trained</em> in
                hand &amp; upper extremity surgery and in sports medicine, a
                combination that lets him treat both the fine reconstructive work
                of the hand and the high-demand return-to-sport considerations of
                the shoulder, elbow, and knee.
              </p>
              <p className="text-navy-900/80 text-[18px] leading-[1.7] font-light">
                He has also helped design several orthopedic implants now used by
                surgeons across the country, including plating systems for the hand and
                elbow and the anchor and internal-brace constructs used in ligament
                reconstruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties grid */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy-900/10 border border-navy-900/10">
            {specialties.map((s) => {
              const Icon = iconMap[s.iconKey];
              return (
                <Link
                  key={s.slug}
                  href={`/specialties/${s.slug}`}
                  className="group relative flex flex-col bg-cream hover:bg-bone p-8 lg:p-12 transition-colors duration-500"
                >
                  <div className="mb-8 text-navy-900 group-hover:text-gold-600 transition-colors duration-500">
                    {Icon && <Icon size={56} />}
                  </div>
                  <div className="kicker text-gold-600 mb-3">{s.eyebrow}</div>
                  <h2 className="font-serif text-2xl lg:text-3xl text-navy-950 tracking-[-0.01em] leading-snug mb-4">
                    {s.name}
                  </h2>
                  <p className="text-navy-900/80 text-[15.5px] leading-relaxed mb-8 flex-1 max-w-[42ch]">
                    {s.lede}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-navy-900 group-hover:text-gold-600 transition-colors">
                    <span>Explore {s.shortName}</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-500 group-hover:w-full" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-gold-500" />
                <span className="kicker text-gold-400">Not sure where you fit?</span>
              </div>
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] tracking-[-0.02em] leading-[1.15] mb-6">
                Send your imaging and we&apos;ll point you{" "}
                <span className="serif-italic text-gold-400">to the right place.</span>
              </h2>
              <p className="text-white/85 text-[16px] leading-[1.75] font-light">
                Patients often come in unsure whether their problem is hand, elbow,
                shoulder, or systemic. Dr. Lee&apos;s second-opinion process is
                designed for exactly that.
              </p>
            </div>

            <div className="lg:pt-12">
              <div className="kicker text-gold-400 mb-4">Next step</div>
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
