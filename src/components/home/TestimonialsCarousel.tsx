"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play, ArrowUpRight } from "lucide-react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  emphasis?: string;
  name: string;
  detail: string;
  image?: string;
  initials: string;
};

// Verified patient testimonials carried over from Dr. Lee's prior site, where
// they were published with the patient's consent. Shown until Dr. Lee curates
// testimonials in the Studio, at which point published Sanity entries replace
// these automatically. No patient photos are used; the carousel renders initials.
const fallbackTestimonials: Testimonial[] = [
  {
    quote:
      "Dr. Lee is a world class doctor and person who has been my friend for decades. As a golf teaching professional I have had several students with very bad hand injuries.",
    emphasis: "I sent them to Dr. Lee and he saved each of them.",
    name: "Jim McLean",
    detail: "Hand & Upper Extremity · Golf Instructor",
    initials: "JM",
  },
  {
    quote:
      "It has been an absolute pleasure having Dr. Steven Lee as my doctor. Dr. Lee has looked after me for years.",
    emphasis: "As a retired professional tennis player, I have had many aches and pains.",
    name: "Katrina Adams",
    detail: "Sports Medicine · Professional Tennis",
    initials: "KA",
  },
  {
    quote:
      "Back in March 2016 I had Steven do my procedure. It was bothering me for some time until it was time to get it done. I had meniscus tears and cartilage damage.",
    emphasis: "All went well and I have never looked back.",
    name: "Clive Leach",
    detail: "Meniscus Repair · Knee & Sports",
    initials: "CL",
  },
];

const AUTO_ADVANCE_MS = 7000;

function PatientPhoto({ t }: { t: Testimonial }) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(t.image) && !failed;

  return (
    <div className="relative aspect-[4/5] w-[240px] lg:w-[340px]">
      <div
        className="absolute -top-2 -left-2 h-12 w-12 border-t-2 border-l-2 border-gold-500"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-2 -right-2 h-12 w-12 border-b-2 border-r-2 border-gold-500"
        aria-hidden="true"
      />
      <div className="relative h-full w-full overflow-hidden rounded-sm bg-navy-800 ring-1 ring-navy-900/10 shadow-xl">
        {showImage ? (
          <Image
            src={t.image as string}
            alt={`Dr. Lee with patient ${t.name}`}
            fill
            sizes="(min-width: 1024px) 340px, 240px"
            className="object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-center px-6">
            <div className="font-serif text-6xl text-gold-400/80 leading-none">
              {t.initials}
            </div>
            <div className="kicker text-white/45 mt-4">Patient photo</div>
          </div>
        )}
      </div>
    </div>
  );
}

function Slide({ t }: { t: Testimonial }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center h-full">
      <div className="flex justify-center lg:justify-start">
        <PatientPhoto t={t} />
      </div>

      <figure className="max-w-2xl">
        <div
          aria-hidden="true"
          className="font-serif text-[5rem] leading-[0.5] text-gold-500/25 select-none mb-3"
        >
          &ldquo;
        </div>
        <blockquote className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.3] tracking-[-0.01em] text-navy-950">
          {t.quote}
          {t.emphasis && (
            <>
              {" "}
              <span className="serif-italic text-gold-600">{t.emphasis}</span>
            </>
          )}
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <span className="h-px w-10 bg-gold-500 shrink-0" aria-hidden="true" />
          <div>
            <div className="font-semibold text-navy-950 text-[15px]">{t.name}</div>
            <div className="text-navy-900/90 text-[12.5px] uppercase tracking-[0.12em] mt-1">
              {t.detail}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default function TestimonialsCarousel({
  items,
}: {
  items?: Testimonial[];
}) {
  const reduce = useReducedMotion();
  const data = items && items.length > 0 ? items : fallbackTestimonials;
  const count = data.length;

  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);

  const goTo = useCallback(
    (target: number, dir: number) => {
      setSlide([(target + count) % count, dir]);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  // Always auto-advances; pauses on hover, focus, or the pause button. Under
  // prefers-reduced-motion it still rotates but the slide animation collapses
  // to a quick fade (handled in `variants`/transition below).
  const autoActive = !paused && !hovering && !focusWithin && count > 1;

  // Advance after a full interval following each settle. Keying the timeout on
  // `index` restarts the clock after manual navigation too, so a tap never
  // leaves a half-length wait before the next auto-advance.
  useEffect(() => {
    if (!autoActive) return;
    const id = setTimeout(() => {
      setSlide(([i]) => [(i + 1) % count, 1]);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [autoActive, index, count]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: reduce ? 0 : dir >= 0 ? 56 : -56,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: reduce ? 0 : dir >= 0 ? -56 : 56,
    }),
  };

  const active = data[index];

  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
          <span className="kicker text-gold-600">Patient Stories</span>
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.02em] leading-[1.1] text-navy-950 mb-12 lg:mb-16 max-w-2xl">
          Outcomes that speak{" "}
          <span className="serif-italic text-gold-600">for themselves.</span>
        </h2>

        {/* Carousel */}
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Patient testimonials"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setFocusWithin(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setFocusWithin(false);
            }
          }}
          onKeyDown={onKeyDown}
        >
          <div className="relative min-h-[600px] sm:min-h-[520px] lg:min-h-[440px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ ...ease, duration: reduce ? 0.25 : 0.6 }}
                className="absolute inset-0"
              >
                <Slide t={active} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Screen-reader live position */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            Testimonial {index + 1} of {count}: {active.name}, {active.detail}
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between gap-4 border-t border-navy-900/10 pt-6">
            <div className="flex items-center gap-2.5" aria-hidden="true">
              {data.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  tabIndex={-1}
                  onClick={() => goTo(i, i >= index ? 1 : -1)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-7 bg-gold-500"
                      : "w-2 bg-navy-900/25 hover:bg-navy-900/45"
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play testimonials" : "Pause testimonials"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 hover:border-gold-500 hover:text-gold-600 transition-colors"
              >
                {paused ? (
                  <Play size={16} strokeWidth={1.75} aria-hidden="true" />
                ) : (
                  <Pause size={16} strokeWidth={1.75} aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 hover:border-gold-500 hover:text-gold-600 transition-colors"
              >
                <ChevronLeft size={18} strokeWidth={1.75} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 hover:border-gold-500 hover:text-gold-600 transition-colors"
              >
                <ChevronRight size={18} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Footnote + link */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-navy-900/90 text-[13px] leading-relaxed max-w-md">
            Shared with each patient&apos;s permission.
          </p>
          <Link
            href="/testimonials"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-950 hover:text-gold-600 transition-colors"
          >
            <span className="border-b border-navy-950/30 group-hover:border-gold-600 pb-0.5">
              Read more patient stories
            </span>
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
