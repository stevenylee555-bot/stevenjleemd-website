"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

// Recognition list now lives in the Hero only, avoids the awards-listed-twice
// problem. About leans on training + affiliations for the right column instead.

const credentials = [
  "Double Fellowship-Trained",
  "Board-Certified, Orthopaedic Surgery",
  "Orthopedic Implant Designer",
];

const affiliations: { name: string; role: string }[] = [
  { name: "Lenox Hill Hospital", role: "Chief, Hand & UE · Since 2013" },
  { name: "NISMAT", role: "Associate Director · Since 2006" },
  { name: "Manhattan Eye, Ear & Throat Hospital", role: "Attending" },
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
                Hill Hospital, one of New York&apos;s premier medical centers. He is
                double fellowship-trained in Hand Surgery and Sports Medicine, and
                board-certified by the American Board of Orthopaedic Surgery.
              </p>
              <p>
                What sets Dr. Lee apart is his direct role advancing the field. He has
                helped design several orthopedic implants now used by surgeons across the
                country, including plating systems for the hand and elbow and the
                internal-brace constructs used in ligament reconstruction.
              </p>
              <p>
                He has authored 35+ peer-reviewed papers, including what is believed to
                be the first review paper on the use of peptides in an orthopedic
                journal. His advanced-treatment practice includes 250+ PRP procedures
                annually.
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

          {/* Affiliations column. The Recognition list moved fully into Hero,
              so this column carries the institutional credentials only, with
              the same editorial treatment for visual rhyme. */}
          <motion.aside variants={fadeUp} className="lg:pt-4">
            <div className="kicker text-navy-900/65 mb-6">Hospital Affiliations</div>

            <ul className="divide-y divide-navy-900/10">
              {affiliations.map((a) => (
                <li
                  key={a.name}
                  className="py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4"
                >
                  <span className="font-serif text-navy-950 text-lg leading-snug tracking-[-0.01em]">
                    {a.name}
                  </span>
                  <span className="kicker text-navy-900/75 shrink-0">{a.role}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-navy-900/75 text-sm leading-relaxed">
              NISMAT is the Nicholas Institute of Sports Medicine &amp; Athletic
              Trauma, founded in 1973 as the country&apos;s first hospital-based
              sports medicine center.
            </p>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
