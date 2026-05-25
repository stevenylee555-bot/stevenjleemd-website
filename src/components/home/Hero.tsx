"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { Calendar, ChevronRight, Phone, MapPin, Video } from "lucide-react";
import { heroReveal, stagger, fadeUp } from "@/lib/motion";

const recognition: { name: string; years: string }[] = [
  { name: "Castle Connolly Top Doctor", years: "2014–Present" },
  { name: "NY Times Super Doctors", years: "Since 2008" },
  { name: "Super Doctors Hall of Fame", years: "Since 2019" },
  { name: "New York Magazine Best Doctors", years: "2014–Present" },
  { name: "U.S. News Top Doctor", years: "Multiple years" },
];

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
                25 Years of Excellence in New York City
              </span>
            </motion.div>

            <motion.h1
              variants={heroReveal}
              className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] tracking-[-0.02em] text-white mb-6 max-w-2xl"
            >
              <span className="serif-italic text-gold-400">Leading the future</span>{" "}
              of hand and upper extremity surgery, sports medicine, and orthopedic
              innovation.
            </motion.h1>

            <motion.p
              variants={heroReveal}
              className="text-white/70 text-lg md:text-xl leading-[1.55] max-w-xl mb-12 font-light"
            >
              As Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital,
              Dr. Lee combines elite clinical expertise with pioneering advancements
              in implants and biological therapies to restore peak performance.
            </motion.p>

            {/* Editorial Recognition list: serif names + gold years, divider rules.
                Matches the About section treatment for visual rhyme. */}
            <motion.div variants={heroReveal} className="mb-12 max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-gold-500/70" aria-hidden="true" />
                <span className="kicker text-white/55">Recognition</span>
              </div>
              <motion.ul
                variants={stagger(0.08, 0.06)}
                className="divide-y divide-white/10"
              >
                {recognition.map((a) => (
                  <motion.li
                    key={a.name}
                    variants={fadeUp}
                    className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-6"
                  >
                    <span className="font-serif text-white text-[17px] lg:text-[19px] leading-snug tracking-[-0.01em]">
                      {a.name}
                    </span>
                    <span className="text-gold-400/90 shrink-0 text-[13px] lg:text-sm font-semibold uppercase tracking-[0.08em]">
                      {a.years}
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
            {/* Gold accent frame, draws in from corners after portrait reveal */}
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
                // Editorial fallback if headshot is missing, silhouette + monogram.
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
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Patent stamp, enters after portrait. A newer credential than
                  Castle Connolly (which is now in the Recognition list above)
                  so it adds rather than duplicates. */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-5 left-5 right-5 sm:right-auto inline-flex items-center gap-3 bg-navy-950/85 backdrop-blur-md px-4 py-2.5 ring-1 ring-white/10"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0"
                  aria-hidden="true"
                />
                <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-white/85 leading-tight">
                  US Patent <span className="text-gold-400">·</span> Surgical
                  Instrumentation <span className="text-gold-400">·</span> 2026
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
