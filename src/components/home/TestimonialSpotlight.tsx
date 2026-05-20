"use client";

import { motion } from "motion/react";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

export default function TestimonialSpotlight() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <motion.div {...inViewProps} variants={stagger(0, 0.12)}>
          <motion.div
            variants={fadeUp}
            aria-hidden="true"
            className="font-serif text-[10rem] md:text-[14rem] leading-[0.7] text-gold-500/30 mb-4 select-none"
          >
            &ldquo;
          </motion.div>

          <motion.blockquote
            variants={fadeUp}
            className="font-serif text-[clamp(1.75rem,3.3vw,2.75rem)] leading-[1.25] tracking-[-0.01em] text-navy-950 max-w-4xl mx-auto -mt-6"
          >
            Dr. Lee was the third surgeon I saw for an elbow injury I&apos;d been told
            would end my season. He looked at the same MRI and laid out a plan no one else
            had considered. <span className="serif-italic text-gold-600">Six weeks later I was throwing again.</span>
          </motion.blockquote>

          <motion.figcaption
            variants={fadeUp}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-gold-500" aria-hidden="true" />
            <cite className="text-left not-italic">
              <div className="font-semibold text-navy-950 text-sm">M.K.</div>
              <div className="text-navy-900/60 text-xs uppercase tracking-wider">
                Professional athlete · Second opinion patient
              </div>
            </cite>
            <div className="h-px w-12 bg-gold-500" aria-hidden="true" />
          </motion.figcaption>

          <motion.div
            variants={fadeUp}
            className="mt-14 text-xs text-navy-900/60 max-w-md mx-auto leading-relaxed"
          >
            Quoted with permission. Additional patient testimonials — including
            notable public figures — are featured on the testimonials page.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
