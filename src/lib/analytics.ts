// GA4 analytics helpers. Every function no-ops safely when analytics is not
// loaded (no NEXT_PUBLIC_GA_ID set, server-side render, or before gtag.js
// hydrates), so it is safe to call from anywhere.

// GA4 measurement ID (looks like "G-XXXXXXXXXX"). Set via env so the site ships
// without analytics until the client provides the real ID. Inlined at build
// time because of the NEXT_PUBLIC_ prefix.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
