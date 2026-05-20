"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Clock, Globe2, FileSearch, CheckCircle2 } from "lucide-react";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

const pillars = [
  {
    Icon: Clock,
    title: "Same-week availability",
    body: "Urgent and pre-surgical second opinions are accommodated quickly.",
  },
  {
    Icon: Globe2,
    title: "International & telemedicine",
    body: "Virtual consults for patients outside New York or traveling for care.",
  },
  {
    Icon: FileSearch,
    title: "Imaging & records review",
    body: "Direct review of MRIs, X-rays, and prior surgical plans.",
  },
  {
    Icon: CheckCircle2,
    title: "Confident decisions",
    body: "Understand your options before committing to surgery.",
  },
];

export default function SecondOpinion() {
  return (
    <section className="relative bg-navy-900 text-white overflow-hidden">
      {/* Editorial top number */}
      <div className="absolute -top-8 right-6 lg:right-10 font-serif text-[14rem] leading-none text-white/[0.04] select-none pointer-events-none">
        02
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          {...inViewProps}
          variants={stagger(0, 0.1)}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-400">Second Opinions</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.02em] mb-8"
            >
              Been told you need surgery?{" "}
              <span className="serif-italic text-gold-400">Get a real second look.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/65 text-lg leading-[1.65] font-light max-w-xl mb-6"
            >
              A second opinion from a world-class specialist is rarely wasted. Dr. Lee
              reviews imaging, records, and prior surgical plans for patients who have
              been told they need orthopedic surgery — and helps them understand whether
              an operation, a different operation, or no operation is the right call.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/50 text-base leading-relaxed max-w-xl mb-10"
            >
              In-person in NYC or Scarsdale. Telemedicine consultations available for
              out-of-state and international patients.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="/second-opinions"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-base shadow-[0_10px_40px_-12px_rgba(201,168,76,0.5)] hover:-translate-y-0.5"
              >
                Request a Second Opinion
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>

          {/* Pillars */}
          <motion.div
            variants={stagger(0.15, 0.08)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="bg-navy-900 p-6 lg:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold-500/10 ring-1 ring-gold-500/30 mb-5">
                  <p.Icon size={18} className="text-gold-400" strokeWidth={1.6} />
                </div>
                <div className="font-serif text-lg text-white mb-2 tracking-[-0.01em]">
                  {p.title}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
