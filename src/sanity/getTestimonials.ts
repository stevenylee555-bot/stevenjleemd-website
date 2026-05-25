import { draftMode } from "next/headers";
import { stegaClean } from "next-sanity";
import { urlForImage } from "./image";
import { sanityFetch } from "./live";
import { TESTIMONIALS_QUERY } from "./queries";
import type { Testimonial } from "@/components/home/TestimonialsCarousel";

function initialsFrom(name: string): string {
  return stegaClean(name)
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

// Fetches published testimonials (or drafts, with click-to-edit metadata, when
// visual editing is active) and maps them to the carousel's shape. Photo is
// resolved to a plain URL server-side. Returns [] if none exist, so the carousel
// falls back to its built-in placeholders until Dr. Lee adds real ones.
export async function getTestimonials(): Promise<Testimonial[]> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }

  let docs: SanityTestimonial[] = [];
  try {
    const { data } = await sanityFetch({
      query: TESTIMONIALS_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    docs = (data as SanityTestimonial[]) || [];
  } catch {
    return [];
  }

  return docs
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
