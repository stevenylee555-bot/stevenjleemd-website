"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

const capabilities = [
  "Plating systems, hand, wrist & elbow",
  "Suture anchors & internal-brace constructs",
  "Tendon-to-bone repair fixation",
  "Thumb basal-joint reconstruction",
  "US patent, surgical instrumentation",
];

export default function InnovationFeature() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden">
      {/* Soft gold radial */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[640px] w-[640px] rounded-full bg-gold-500/[0.08] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          {...inViewProps}
          variants={stagger(0, 0.12)}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-20 items-center"
        >
          {/* Left column, copy */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-400">Implant Design & Innovation</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.05] tracking-[-0.02em] mb-8 max-w-xl"
            >
              He didn&apos;t just learn the procedure.{" "}
              <span className="serif-italic text-gold-400">He helped design the hardware.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/75 text-lg leading-[1.65] font-light mb-6 max-w-xl"
            >
              Dr. Lee has helped design orthopedic implants now used by surgeons across
              the country, including plating systems for the hand and elbow and the
              anchor and internal-brace constructs used in ligament reconstruction.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/85 text-sm leading-relaxed mb-10 max-w-xl"
            >
              That engineering perspective informs how he approaches every repair: the
              right construct, sized and placed for the individual patient.
            </motion.p>

            <motion.ul
              variants={stagger(0.1, 0.05)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl"
            >
              {capabilities.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-gold-500" />
                  <span className="text-white/85">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right column, Dr. Lee teaching */}
          <motion.div variants={fadeUp} className="relative">
            {/* Gold accent corners */}
            <div
              className="absolute -top-2 -left-2 h-14 w-14 border-t-[1.5px] border-l-[1.5px] border-gold-500 z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-2 -right-2 h-14 w-14 border-b-[1.5px] border-r-[1.5px] border-gold-500 z-10"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/3] w-full max-w-[560px] mx-auto overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <Image
                src="/images/dr-lee-arthrex-podium.jpg"
                alt="Dr. Steven J. Lee teaching surgical technique at a national skills course"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />

              {/* Caption stamp */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[80%] bg-navy-950/85 backdrop-blur-md px-4 py-3 ring-1 ring-white/10">
                <div className="kicker text-gold-400 mb-1">Faculty</div>
                <div className="text-white text-sm leading-snug">
                  Teaching surgical technique at a national skills course
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
