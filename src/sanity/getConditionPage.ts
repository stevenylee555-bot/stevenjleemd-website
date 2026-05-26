import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { CONDITION_QUERY } from "./queries";
import {
  conditionPageBySlug,
  type ConditionPageContent,
  type ConditionBodySection,
} from "@/lib/conditionPages";

type DocSection = {
  heading?: string;
  body?: string[];
  bullets?: string[];
  bulletsAfter?: string;
};

type ConditionDoc = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  overview?: string[];
  bodySections?: DocSection[];
  drLeeApproach?: string[];
  treatmentSections?: DocSection[];
  recoveryIntro?: string;
  recovery?: Array<{ when?: string; what?: string }>;
  misconceptions?: { intro?: string; items?: Array<{ heading?: string; body?: string }> };
  sidebarFacts?: Array<{ label?: string; value?: string }>;
  whyDrLee?: string[];
  ctaCard?: { eyebrow?: string; headline?: string };
  faqHeadline?: string;
  faqs?: Array<{ question?: string; answer?: string }>;
  bottomCtaTitle?: string;
  bottomCtaItalic?: string;
  bottomCtaBody?: string;
} | null;

function mergeSections(
  docSections: DocSection[] | undefined,
  base: ConditionBodySection[] | undefined
): ConditionBodySection[] | undefined {
  if (!docSections?.length) return base;
  return docSections.map((s) => ({
    heading: s.heading ?? "",
    body: s.body ?? [],
    bullets: s.bullets,
    bulletsAfter: s.bulletsAfter,
  }));
}

// Returns the condition page content for `slug`, merged over the code fallback in
// src/lib/conditionPages.ts: identity (slug/name/region), the author byline,
// related-condition cross-links, and SEO stay in code; editable prose comes from
// Sanity when present.
export async function getConditionPage(slug: string): Promise<ConditionPageContent | null> {
  const base = conditionPageBySlug(slug);
  if (!base) return null;

  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }

  let doc: ConditionDoc = null;
  try {
    const { data } = await sanityFetch({
      query: CONDITION_QUERY,
      params: { slug },
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    doc = (data as ConditionDoc) ?? null;
  } catch {
    doc = null;
  }
  if (!doc) return base;

  return {
    ...base,
    headerTitle: doc.headerTitle ?? base.headerTitle,
    headerItalic: doc.headerItalic ?? base.headerItalic,
    headerLede: doc.headerLede ?? base.headerLede,
    overview: doc.overview?.length ? doc.overview : base.overview,
    bodySections: mergeSections(doc.bodySections, base.bodySections) ?? base.bodySections,
    drLeeApproach: doc.drLeeApproach?.length
      ? { paragraphs: doc.drLeeApproach }
      : base.drLeeApproach,
    treatmentSections: mergeSections(doc.treatmentSections, base.treatmentSections),
    recoveryIntro: doc.recoveryIntro ?? base.recoveryIntro,
    recovery: doc.recovery?.length
      ? doc.recovery.map((r) => ({ when: r.when ?? "", what: r.what ?? "" }))
      : base.recovery,
    misconceptions: doc.misconceptions?.items?.length
      ? {
          intro: doc.misconceptions.intro ?? "",
          items: doc.misconceptions.items.map((m) => ({
            heading: m.heading ?? "",
            body: m.body ?? "",
          })),
        }
      : base.misconceptions,
    sidebarFacts: doc.sidebarFacts?.length
      ? doc.sidebarFacts.map((f) => ({ label: f.label ?? "", value: f.value ?? "" }))
      : base.sidebarFacts,
    whyDrLee: doc.whyDrLee?.length ? doc.whyDrLee : base.whyDrLee,
    ctaCard: doc.ctaCard?.headline
      ? {
          eyebrow: doc.ctaCard.eyebrow ?? base.ctaCard.eyebrow,
          headline: doc.ctaCard.headline ?? base.ctaCard.headline,
        }
      : base.ctaCard,
    faqHeadline: doc.faqHeadline ?? base.faqHeadline,
    faqs: doc.faqs?.length
      ? doc.faqs.map((f) => ({ question: f.question ?? "", answer: f.answer ?? "" }))
      : base.faqs,
    bottomCtaTitle: doc.bottomCtaTitle ?? base.bottomCtaTitle,
    bottomCtaItalic: doc.bottomCtaItalic ?? base.bottomCtaItalic,
    bottomCtaBody: doc.bottomCtaBody ?? base.bottomCtaBody,
  };
}
