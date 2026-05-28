"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Plus, BookOpen, ArrowRight } from "lucide-react";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

export type Faq = { question: string; answer: string };

export default function FAQSection({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          {...inViewProps}
          variants={stagger(0, 0.1)}
          className="mb-14 max-w-3xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-600">Frequently Asked</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-navy-950"
          >
            Common patient questions.
          </motion.h2>
        </motion.div>

        <motion.ul
          {...inViewProps}
          variants={stagger(0.1, 0.06)}
          className="border-t border-navy-900/15"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <motion.li
                key={faq.question}
                variants={fadeUp}
                className="border-b border-navy-900/15"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="group w-full flex items-start justify-between gap-6 py-7 text-left"
                >
                  <span className="font-serif text-xl md:text-2xl text-navy-950 tracking-[-0.01em] leading-[1.3] group-hover:text-gold-600 transition-colors">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={
                      "shrink-0 mt-1.5 transition-all duration-500 " +
                      (isOpen ? "rotate-45 text-gold-600" : "text-navy-900/90")
                    }
                  >
                    <Plus size={22} strokeWidth={1.5} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-navy-900/90 text-[17px] leading-[1.7] pb-8 pr-12 max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          {...inViewProps}
          variants={fadeUp}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-navy-900/90"
        >
          <BookOpen
            size={18}
            className="text-gold-600 shrink-0"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span className="text-sm">More questions answered across the</span>
          <Link
            href="/conditions"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950 hover:text-gold-600 border-b border-navy-950 hover:border-gold-600 pb-0.5 transition-colors"
          >
            full conditions library
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
