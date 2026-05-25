"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { fadeUp, inViewProps, stagger } from "@/lib/motion";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  caption: string;
};

const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Years in practice", caption: "Attending at Lenox Hill since 2000" },
  { value: 15000, suffix: "+", label: "Procedures performed", caption: "Across hand, elbow, shoulder, knee" },
  { value: 35, suffix: "+", label: "Peer-reviewed publications", caption: "Plus 84 national lectures and presentations" },
  { value: 5, suffix: "", label: "Implants designed", caption: "In wide use nationwide, plus a US patent for surgical instrumentation" },
];

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

function CountUp({ value, suffix, run }: { value: number; suffix: string; run: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!run) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setDisplay(value);
      return;
    }

    const duration = 1600;
    const start = Date.now();
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      const t = Math.min(1, (Date.now() - start) / duration);
      setDisplay(Math.round(easeOutQuart(t) * value));
      if (t < 1) setTimeout(tick, 32);
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, [run, value]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AnimatedStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as { __statsMount?: number }).__statsMount = Date.now();
    }
    const el = sectionRef.current;
    if (!el) return;
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
        setRun(true);
        window.removeEventListener("scroll", check);
        return true;
      }
      return false;
    };
    if (check()) return;
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <section ref={sectionRef} data-run={run ? "true" : "false"} className="relative bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <motion.div
          {...inViewProps}
          variants={stagger(0, 0.1)}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="relative"
            >
              <div className="kicker text-gold-600 mb-4" aria-hidden="true">0{i + 1}</div>
              <div
                className="font-serif text-4xl md:text-6xl text-navy-950 leading-none tracking-[-0.02em] mb-3"
                aria-hidden="true"
              >
                <CountUp value={stat.value} suffix={stat.suffix} run={run} />
              </div>
              {/* Screen reader: announce the final, parsed value */}
              <span className="sr-only">
                {stat.value.toLocaleString()}{stat.suffix} {stat.label}.
              </span>
              <div className="text-navy-900 font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-navy-900/70 text-xs leading-relaxed max-w-[200px]">
                {stat.caption}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
