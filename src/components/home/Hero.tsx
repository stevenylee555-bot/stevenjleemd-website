"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { Calendar, ChevronRight, Phone, MapPin, Video, Award, Check } from "lucide-react";
import { heroReveal, stagger, fadeUp } from "@/lib/motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 72]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-navy-950 text-white hero-grain"
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-24 lg:pt-32 lg:pb-32">
        <motion.div
          variants={stagger(0, 0.12)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center"
        >
          {/* Copy column */}
          <div>
            <motion.div variants={heroReveal} className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
              <span className="kicker text-gold-400">
                Arthrex Design Team · Lenox Hill Hospital
              </span>
            </motion.div>

            <motion.h1
              variants={heroReveal}
              className="font-serif text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.02] tracking-[-0.025em] text-white mb-6"
            >
              The surgeon who{" "}
              <span className="serif-italic text-gold-400">helped design</span>{" "}
              the hardware.
            </motion.h1>

            <motion.p
              variants={heroReveal}
              className="text-white/70 text-lg md:text-xl leading-[1.5] max-w-xl mb-10 font-light"
            >
              Double fellowship-trained orthopedic surgeon. On the design team
              for multiple Arthrex implants. Among the first in New York to perform
              PRP therapy for upper extremity injuries.
            </motion.p>

            {/* Recognition block — accolades front and center, individually staggered */}
            <motion.div variants={heroReveal} className="mb-10">
              <div className="kicker text-white/40 mb-4">Recognized by</div>
              <motion.ul
                variants={stagger(0.1, 0.08)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 max-w-xl"
              >
                {[
                  { name: "Castle Connolly Top Doctor", note: "Annually since 2014" },
                  { name: "NY Times Super Doctors", note: "Hall of Fame since 2019" },
                  { name: "New York Magazine Top Doctor", note: "Since 2014" },
                  { name: "Associate Director, NISMAT", note: null },
                ].map((a) => (
                  <motion.li
                    key={a.name}
                    variants={fadeUp}
                    className="flex items-start gap-2.5 text-[14.5px]"
                  >
                    <Check
                      size={15}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="text-gold-500 shrink-0 mt-[3px]"
                    />
                    <span className="text-white/85">
                      <span className="font-medium text-white">{a.name}</span>
                      {a.note && (
                        <span className="text-white/65"> · {a.note}</span>
                      )}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={heroReveal}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="https://www.zocdoc.com/doctor/steven-lee-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book an appointment via ZocDoc (opens in new tab)"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all duration-300 text-base shadow-[0_8px_24px_-12px_rgba(201,168,76,0.45)] hover:shadow-[0_12px_28px_-12px_rgba(201,168,76,0.65)] hover:-translate-y-0.5"
              >
                <Calendar size={18} strokeWidth={2} aria-hidden="true" />
                Book an Appointment
                <ChevronRight
                  size={16}
                  aria-hidden="true"
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
              className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-y-2 text-sm text-white/70 sm:divide-x sm:divide-white/15"
            >
              <a
                href="tel:+12127373301"
                aria-label="Call office at (212) 737-3301"
                className="inline-flex items-center gap-2 sm:pr-5 hover:text-gold-400 transition-colors"
              >
                <Phone size={14} strokeWidth={1.5} className="text-white/55" aria-hidden="true" />
                (212) 737-3301
              </a>
              <span className="inline-flex items-center gap-2 sm:px-5">
                <MapPin size={14} strokeWidth={1.5} className="text-white/55" aria-hidden="true" />
                NYC · Scarsdale
              </span>
              <span className="inline-flex items-center gap-2 sm:pl-5">
                <Video size={14} strokeWidth={1.5} className="text-white/55" aria-hidden="true" />
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
            {/* Gold accent frame — draws in from corners after portrait reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top left" }}
              className="absolute -top-2 -left-2 h-16 w-16 border-t-[1.5px] border-l-[1.5px] border-gold-500"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "bottom right" }}
              className="absolute -bottom-2 -right-2 h-16 w-16 border-b-[1.5px] border-r-[1.5px] border-gold-500"
            />

            <div className="group/portrait relative aspect-[4/5] overflow-hidden rounded-sm bg-navy-800 ring-1 ring-white/10 shadow-2xl transition-shadow duration-700 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
              {!imgFailed ? (
                <Image
                  src="/images/dr-lee-headshot.jpg"
                  alt="Dr. Steven J. Lee, MD"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover/portrait:scale-[1.02]"
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

              {/* Badge — reads as a stamp, not a banner; enters after portrait */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-navy-950/85 backdrop-blur-md px-4 py-3 ring-1 ring-white/10"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/30">
                  <Award size={16} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold leading-tight">
                    Castle Connolly Top Doctor
                  </div>
                  <div className="text-white/60 text-xs mt-0.5">
                    Recognized annually since 2014
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
