"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { Calendar, ChevronRight, Phone, MapPin, Video, Award } from "lucide-react";
import { heroReveal, stagger } from "@/lib/motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      {/* Layered background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        {/* Subtle grid lines for surgical-precision feel */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Gold radial accent */}
        <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-navy-700/40 blur-3xl" />
      </div>

      {/* Left gold rule */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <motion.div
          variants={stagger(0, 0.12)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center"
        >
          {/* Copy column */}
          <div>
            <motion.div variants={heroReveal} className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold-500" />
              <span className="kicker text-gold-400">
                Chief of Hand &amp; Upper Extremity Surgery · Lenox Hill Hospital
              </span>
            </motion.div>

            <motion.h1
              variants={heroReveal}
              className="font-serif text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.02] tracking-[-0.02em] text-white mb-8"
            >
              The surgeon who{" "}
              <span className="serif-italic text-gold-400">designed</span>{" "}
              the hardware.
            </motion.h1>

            <motion.p
              variants={heroReveal}
              className="text-white/70 text-lg md:text-xl leading-[1.5] max-w-xl mb-8 font-light"
            >
              Double fellowship-trained orthopedic surgeon. Arthrex implant designer.
              The first physician in New York to perform PRP therapy for upper extremity
              injuries.
            </motion.p>

            {/* Recognition block — accolades front and center */}
            <motion.div variants={heroReveal} className="mb-10">
              <div className="kicker text-white/40 mb-4">Recognized by</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 max-w-xl">
                {[
                  { name: "Castle Connolly Top Doctor", note: "Annually since 2008" },
                  { name: "New York Times Super Doctors", note: null },
                  { name: "US News Top Doctor", note: null },
                  { name: "New York Magazine Top Doctor", note: null },
                ].map((a) => (
                  <li
                    key={a.name}
                    className="flex items-baseline gap-3 text-[14.5px]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0 translate-y-[5px]" />
                    <span className="text-white/85">
                      <span className="font-medium text-white">{a.name}</span>
                      {a.note && (
                        <span className="text-white/45"> · {a.note}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={heroReveal}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="https://www.zocdoc.com/doctor/steven-lee-md"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all duration-300 text-base shadow-[0_10px_40px_-12px_rgba(201,168,76,0.6)] hover:shadow-[0_18px_50px_-12px_rgba(201,168,76,0.8)] hover:-translate-y-0.5"
              >
                <Calendar size={18} strokeWidth={2} />
                Book an Appointment
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <Link
                href="/second-opinions"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
              >
                Request a Second Opinion
                <ChevronRight
                  size={16}
                  className="opacity-60 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            <motion.div
              variants={heroReveal}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/55"
            >
              <a
                href="tel:+12127373301"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} strokeWidth={1.8} />
                (212) 737-3301
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} strokeWidth={1.8} />
                NYC · Scarsdale
              </span>
              <span className="inline-flex items-center gap-2">
                <Video size={14} strokeWidth={1.8} />
                Telemedicine available
              </span>
            </motion.div>
          </div>

          {/* Portrait column */}
          <motion.div
            variants={heroReveal}
            style={{ y, opacity }}
            className="relative hidden lg:block"
          >
            {/* Gold accent frame */}
            <div className="absolute -top-3 -left-3 h-24 w-24 border-t-2 border-l-2 border-gold-500" />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-2 border-r-2 border-gold-500" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-navy-800 ring-1 ring-white/10 shadow-2xl">
              {!imgFailed ? (
                <Image
                  src="/images/dr-lee-headshot.jpg"
                  alt="Dr. Steven J. Lee, MD"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                // Editorial fallback if headshot is missing — silhouette + monogram.
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
                  <svg
                    viewBox="0 0 400 500"
                    className="absolute inset-0 h-full w-full text-white/10"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="silG" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    <circle cx="200" cy="180" r="78" fill="url(#silG)" />
                    <path
                      d="M60,500 C60,360 130,300 200,300 C270,300 340,360 340,500 Z"
                      fill="url(#silG)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <div className="font-serif text-7xl text-gold-400/80 leading-none">SJL</div>
                    <div className="kicker text-white/40 mt-4">
                      Portrait placeholder · drop dr-lee-headshot.jpg in /public/images/
                    </div>
                  </div>
                </div>
              )}
              {/* Subtle navy gradient overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

              {/* Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-navy-950/85 backdrop-blur-md rounded-sm px-4 py-3 ring-1 ring-white/10">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/30">
                  <Award size={16} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold leading-tight">
                    Castle Connolly Top Doctor
                  </div>
                  <div className="text-white/50 text-xs mt-0.5">
                    Recognized annually since 2008
                  </div>
                </div>
              </div>
            </div>

            {/* Floating credential tag */}
            <div className="absolute -top-4 right-6 hidden xl:block">
              <div className="rotate-[-3deg] bg-cream text-navy-900 px-3 py-1.5 text-xs font-semibold tracking-wide shadow-xl">
                ARTHREX IMPLANT DESIGNER
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
