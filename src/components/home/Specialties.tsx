"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";
import {
  HandIcon,
  ElbowIcon,
  ShoulderIcon,
  KneeIcon,
  BiologicsIcon,
  SecondOpinionIcon,
} from "./icons/AnatomyIcons";

// Order intentionally leads with sports medicine + upper-extremity surgery (per Dr. Lee's PDF:
// hand patients flow in via LHH Chief role; he wants to grow shoulders, elbows, knees).
const specialties = [
  {
    title: "Shoulder",
    eyebrow: "Sports medicine",
    description:
      "Rotator cuff repair, shoulder arthroscopy, clavicle fractures, and minimally invasive techniques for athletes and active adults.",
    href: "/specialties/shoulder",
    Icon: ShoulderIcon,
  },
  {
    title: "Elbow",
    eyebrow: "UCL · Complex trauma",
    description:
      "Tommy John (UCL) reconstruction, LUCL repair, complex elbow trauma, biceps ruptures. On the Arthrex design team for the internal brace constructs used in these procedures.",
    href: "/specialties/elbow",
    Icon: ElbowIcon,
  },
  {
    title: "Knee & Sports",
    eyebrow: "ACL · Meniscus",
    description:
      "ACL reconstruction, knee arthroscopy, meniscus repair, Achilles repair. Sports injury management at the level of the team physician.",
    href: "/specialties/knee",
    Icon: KneeIcon,
  },
  {
    title: "Hand & Wrist",
    eyebrow: "Chief at Lenox Hill",
    description:
      "Carpal tunnel (endoscopic), distal radius fractures, scapholunate ligament repair, basal joint, and the full spectrum of hand surgery.",
    href: "/specialties/hand-wrist",
    Icon: HandIcon,
  },
  {
    title: "PRP & Biologics",
    eyebrow: "Among the first in NYC for upper extremity",
    description:
      "PRP injections (250+ annually), BMAC stem cell therapy, and peptide treatments, including the first orthopedic-journal review paper on peptides.",
    href: "/specialties/advanced-treatments",
    Icon: BiologicsIcon,
  },
  {
    title: "Second Opinions",
    eyebrow: "In-person · Telemedicine",
    description:
      "World-class second opinion consultations for patients told they need orthopedic surgery. Available globally via telemedicine.",
    href: "/second-opinions",
    Icon: SecondOpinionIcon,
  },
];

export default function Specialties() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          {...inViewProps}
          variants={stagger(0, 0.08)}
          className="mb-16 lg:mb-20 max-w-3xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-600">Areas of Expertise</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-navy-950 mb-6"
          >
            Surgery and sports medicine, from{" "}
            <span className="serif-italic text-gold-600">fingertip to knee.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-navy-900/65 text-lg leading-relaxed font-light">
            Dr. Lee&apos;s practice spans upper extremity surgery, sports medicine, and advanced
            biologics, with particular depth in the procedures he helped pioneer.
          </motion.p>
        </motion.div>

        <motion.div
          {...inViewProps}
          variants={stagger(0.1, 0.08)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-900/10"
        >
          {specialties.map((s) => (
            <motion.div key={s.href} variants={fadeUp}>
              <Link
                href={s.href}
                className="group relative flex flex-col h-full bg-white hover:bg-cream p-8 lg:p-10 transition-colors duration-500"
              >
                {/* Icon */}
                <div className="mb-8 text-navy-900 group-hover:text-gold-600 transition-colors duration-500">
                  <s.Icon size={52} />
                </div>

                <div className="kicker text-gold-600 mb-3">{s.eyebrow}</div>
                <h3 className="font-serif text-2xl lg:text-3xl text-navy-950 tracking-[-0.01em] mb-4">
                  {s.title}
                </h3>
                <p className="text-navy-900/65 text-[15px] leading-relaxed mb-8 flex-1 max-w-[34ch]">
                  {s.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-navy-900 group-hover:text-gold-600 transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Bottom border accent on hover */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-500 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
