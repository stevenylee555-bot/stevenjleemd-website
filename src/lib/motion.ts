"use client";

import type { Variants, Transition } from "motion/react";

// Shared eased transition, premium, restrained
export const ease: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1], // out-quart
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: ease },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: ease },
};

export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});

export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { ...ease, duration: 0.9 } },
};

// `amount: "some"` triggers as soon as any pixel of the element is in view.
// `0.25` (previous value) silently broke on mobile for tall grids (e.g. the
// Specialties grid is ~2010px in a ~844px viewport — the IntersectionObserver
// never reached the 25% threshold reliably, leaving cards stuck at opacity 0).
export const inViewProps = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: "some" },
} as const;
