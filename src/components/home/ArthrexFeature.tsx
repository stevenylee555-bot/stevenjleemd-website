"use client";

import { motion } from "motion/react";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";
import { ImplantPlateIcon } from "./icons/AnatomyIcons";

const implants = [
  { label: "Hand & Elbow Plating Systems", status: "designed" },
  { label: "Internal Brace Anchors", status: "designed" },
  { label: "Tendon-to-Bone Anchors", status: "designed" },
  { label: "Basal Joint Internal Brace", status: "designed" },
  { label: "Next-Gen Clavicle Plate", status: "upcoming" },
  { label: "Next-Gen Distal Radius Plate", status: "upcoming" },
];

export default function ArthrexFeature() {
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
          {/* Left column — copy */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-400">Arthrex Implant Designer</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.05] tracking-[-0.02em] mb-8 max-w-xl"
            >
              He didn&apos;t just learn the procedure.{" "}
              <span className="serif-italic text-gold-400">He designed the hardware.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/65 text-lg leading-[1.65] font-light mb-6 max-w-xl"
            >
              Dr. Lee has designed plating systems, suture anchors, and internal brace
              constructs for Arthrex — one of the world&apos;s leading orthopedic device
              companies. Patients undergoing hand fracture repair, UCL reconstruction,
              tendon repair, and basal joint arthroplasty may literally be receiving
              hardware he helped create.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/50 text-sm leading-relaxed mb-10 max-w-xl"
            >
              He is slated to join the design teams for the next generation of clavicle
              plates and distal radius plates — the most common fracture orthopedic
              surgeons treat.
            </motion.p>

            <motion.ul
              variants={stagger(0.1, 0.05)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl"
            >
              {implants.map((item) => (
                <motion.li
                  key={item.label}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-sm"
                >
                  <span
                    className={
                      "h-1.5 w-1.5 rounded-full shrink-0 " +
                      (item.status === "designed"
                        ? "bg-gold-500"
                        : "bg-white/30 ring-1 ring-gold-500/40")
                    }
                  />
                  <span className="text-white/85">{item.label}</span>
                  {item.status === "upcoming" && (
                    <span className="text-[10px] uppercase tracking-wider text-gold-400/80 font-semibold ml-auto">
                      Upcoming
                    </span>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right column — implant illustration */}
          <motion.div variants={fadeUp} className="relative">
            <div className="relative aspect-square w-full max-w-[520px] mx-auto">
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-white/15" />
              <div className="absolute inset-24 rounded-full border border-gold-500/30" />

              {/* Diagonal accent rules */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gold-400">
                  <ImplantPlateIcon className="w-[78%] max-w-[420px]" />
                </div>
              </div>

              {/* Annotations */}
              <div className="absolute top-4 right-4 text-right">
                <div className="kicker text-gold-500/70 mb-1">Plate · Hand &amp; Elbow</div>
                <div className="text-xs text-white/40 max-w-[160px]">
                  Low-profile titanium with locking screw geometry
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="kicker text-gold-500/70 mb-1">Anchor · Internal Brace</div>
                <div className="text-xs text-white/40 max-w-[160px]">
                  Knotless ligament reinforcement
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
