"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

type Group = {
  region: string;
  conditions: { name: string; href: string }[];
};

const groups: Group[] = [
  {
    region: "Hand & Wrist",
    conditions: [
      { name: "Carpal Tunnel Syndrome", href: "/conditions/carpal-tunnel" },
      { name: "Distal Radius Fracture", href: "/conditions/distal-radius-fracture" },
      { name: "Scapholunate Ligament Injury", href: "/conditions/scapholunate" },
      { name: "Basal Joint Arthritis", href: "/conditions/basal-joint-arthroplasty" },
      { name: "Hand & Wrist Fractures", href: "/conditions/hand-wrist-fractures" },
    ],
  },
  {
    region: "Elbow & Shoulder",
    conditions: [
      { name: "UCL Tear (Tommy John)", href: "/conditions/ucl-reconstruction" },
      { name: "Rotator Cuff Tear", href: "/conditions/rotator-cuff" },
      { name: "Biceps Tendon Rupture", href: "/conditions/biceps-rupture" },
    ],
  },
  {
    region: "Knee & Sports",
    conditions: [
      { name: "ACL Tear", href: "/conditions/acl-reconstruction" },
      { name: "Achilles Tendon Rupture", href: "/conditions/achilles-rupture" },
    ],
  },
];

export default function ConditionsPreview() {
  return (
    <section className="relative bg-bone border-t border-navy-900/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          {...inViewProps}
          variants={stagger(0, 0.1)}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-600" />
              <span className="kicker text-gold-700 text-gold-600">Conditions Library</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-navy-950 mb-5"
            >
              Read what your surgeon would tell you in the office —{" "}
              <span className="serif-italic text-gold-600">in your own time.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-navy-900/65 text-lg font-light leading-relaxed">
              Comprehensive, physician-authored pages on every condition Dr. Lee treats —
              from diagnosis through surgery and recovery protocols. Patients are
              encouraged to revisit the relevant page after their visit.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="shrink-0">
            <Link
              href="/conditions"
              className="group inline-flex items-center gap-2 text-navy-950 font-semibold hover:text-gold-600 transition-colors"
            >
              <span className="border-b border-navy-950 group-hover:border-gold-600 pb-0.5">
                View the full library
              </span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          {...inViewProps}
          variants={stagger(0.1, 0.1)}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
        >
          {groups.map((g) => (
            <motion.div key={g.region} variants={fadeUp}>
              <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-navy-900/15">
                <span className="font-serif text-2xl text-navy-950 tracking-[-0.01em]">
                  {g.region}
                </span>
                <span className="kicker text-navy-900/40">
                  {g.conditions.length.toString().padStart(2, "0")}
                </span>
              </div>
              <ul className="space-y-1">
                {g.conditions.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="group flex items-center justify-between py-3 text-navy-900/85 hover:text-gold-600 transition-colors border-b border-navy-900/[0.06]"
                    >
                      <span className="text-[15px] font-medium leading-snug">
                        {c.name}
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-navy-900/30 group-hover:text-gold-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
