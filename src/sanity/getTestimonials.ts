import { client } from "./client";
import { urlForImage } from "./image";
import { TESTIMONIALS_QUERY } from "./queries";
import type { Testimonial } from "@/components/home/TestimonialsCarousel";

function initialsFrom(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type SanityTestimonial = {
  _id: string;
  name?: string;
  detail?: string;
  quote?: string;
  emphasis?: string;
  photo?: { asset?: { _ref?: string } };
};

// Fetches published testimonials from Sanity, mapped to the carousel's shape
// (photo resolved to a plain URL server-side so the client component stays
// Sanity-agnostic). Returns [] if none exist, so the carousel falls back to
// its built-in placeholders until Dr. Lee adds real ones.
export async function getTestimonials(): Promise<Testimonial[]> {
  let docs: SanityTestimonial[] = [];
  try {
    docs = await client.fetch(TESTIMONIALS_QUERY);
  } catch {
    return [];
  }

  return (docs || [])
    .filter((d) => d.quote && d.name)
    .map((d) => ({
      quote: d.quote as string,
      emphasis: d.emphasis || undefined,
      name: d.name as string,
      detail: d.detail || "",
      image: d.photo?.asset?._ref
        ? urlForImage(d.photo).width(680).height(850).fit("crop").url()
        : undefined,
      initials: initialsFrom(d.name as string),
    }));
}
