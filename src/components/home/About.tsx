"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

const awards = [
  { name: "Castle Connolly Top Doctor", years: "2014–Present" },
  { name: "NY Times Super Doctors", years: "Since 2008" },
  { name: "NY Times Super Doctors Hall of Fame", years: "Since 2019" },
  { name: "New York Magazine Best Doctors", years: "2014–Present" },
  { name: "U.S. News & World Report Best Doctors", years: "Multiple years" },
];

const credentials = [
  "Chief of Hand and Upper Extremity Surgery, Lenox Hill Hospital",
  "Associate Director, NISMAT",
  "Double Fellowship-Trained",
  "Board-Certified Orthopedic Surgery",
  "Arthrex Implant Design Team",
];

export default function About() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          {...inViewProps}
          variants={stagger(0, 0.1)}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-600">About Dr. Lee</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-navy-950 mb-10"
            >
              A surgeon at the{" "}
              <span className="serif-italic text-gold-600">leading edge</span> of his field.
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-5 text-navy-900/75 text-[17px] leading-[1.7] font-light max-w-2xl">
              <p>
                Dr. Steven J. Lee is Chief of Hand and Upper Extremity Surgery at Lenox
                Hill Hospital — one of New York&apos;s premier medical centers. He is
                double fellowship-trained in Hand Surgery and Shoulder &amp; Elbow Surgery,
                and board-certified by the American Board of Orthopaedic Surgery.
              </p>
              <p>
                What sets Dr. Lee apart is his direct role advancing the field. He is on
                the design team for several{" "}
                <span className="text-navy-950 font-medium">Arthrex</span> implants used
                worldwide — including the Mini Comprehensive Fixation System (hand), the
                Elbow Fracture Plating System, the 3.5 DX SwiveLock anchor, the
                NanoCorkscrew FT, and the FiberLock CMC Suspensionplasty for thumb
                reconstruction.
              </p>
              <p>
                He was among the first surgeons in New York to perform PRP therapy for
                upper extremity injuries — performing 250+ PRP procedures annually
                today — and published what is believed to be the first review paper on
                the use of peptides in an orthopedic journal.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-2">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="text-xs font-medium tracking-wide text-navy-900 bg-cream border border-navy-900/10 px-3 py-1.5 rounded-full"
                >
                  {c}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <Link
                href="/about/bio"
                className="group inline-flex items-center gap-2 text-navy-950 font-semibold hover:text-gold-600 transition-colors"
              >
                <span className="border-b border-navy-950 group-hover:border-gold-600 pb-0.5">
                  Read the full biography
                </span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>

          {/* Awards column — editorial list, not cards */}
          <motion.aside variants={fadeUp} className="lg:pt-4">
            <div className="kicker text-navy-900/40 mb-6">Recognition</div>

            <ul className="divide-y divide-navy-900/10">
              {awards.map((a) => (
                <li
                  key={a.name}
                  className="py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4"
                >
                  <span className="font-serif text-navy-950 text-lg leading-snug tracking-[-0.01em]">
                    {a.name}
                  </span>
                  <span className="kicker text-navy-900/55 shrink-0">{a.years}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-navy-900/10">
              <div className="kicker text-navy-900/40 mb-4">Hospital Affiliations</div>
              <ul className="space-y-3 text-navy-900/75 text-sm">
                <li className="flex items-baseline gap-3">
                  <span className="h-1 w-1 rounded-full bg-gold-500 shrink-0 translate-y-[2px]" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-navy-950">Lenox Hill Hospital</span>
                    {" — "}Chief of Hand and Upper Extremity Surgery
                  </span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="h-1 w-1 rounded-full bg-gold-500 shrink-0 translate-y-[2px]" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-navy-950">NISMAT</span>
                    {" — "}Associate Director (Nicholas Institute of Sports Medicine &amp; Athletic Trauma)
                  </span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="h-1 w-1 rounded-full bg-gold-500 shrink-0 translate-y-[2px]" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-navy-950">
                      Manhattan Eye, Ear &amp; Throat Hospital
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
