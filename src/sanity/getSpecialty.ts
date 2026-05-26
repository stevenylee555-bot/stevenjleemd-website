import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { SPECIALTY_QUERY } from "./queries";
import { specialtyBySlug, type Specialty } from "@/lib/specialties";

type SpecialtyDoc = {
  eyebrow?: string;
  headline?: string;
  headlineItalic?: string;
  lede?: string;
  introTitle?: string;
  introBody?: string[];
  approach?: Array<{ title?: string; body?: string }>;
  credentials?: string[];
  implantDesign?: { title?: string; body?: string };
} | null;

// Returns the specialty page content for `slug`, merged over the code fallback in
// src/lib/specialties.ts: identity, icon, conditions list, and SEO stay in code;
// editable prose comes from Sanity when present.
export async function getSpecialty(slug: string): Promise<Specialty | null> {
  const base = specialtyBySlug(slug);
  if (!base) return null;

  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }

  let doc: SpecialtyDoc = null;
  try {
    const { data } = await sanityFetch({
      query: SPECIALTY_QUERY,
      params: { slug },
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    doc = (data as SpecialtyDoc) ?? null;
  } catch {
    doc = null;
  }
  if (!doc) return base;

  return {
    ...base,
    eyebrow: doc.eyebrow ?? base.eyebrow,
    headline: doc.headline ?? base.headline,
    headlineItalic: doc.headlineItalic ?? base.headlineItalic,
    lede: doc.lede ?? base.lede,
    introTitle: doc.introTitle ?? base.introTitle,
    introBody: doc.introBody?.length ? doc.introBody : base.introBody,
    approach: doc.approach?.length
      ? doc.approach.map((a) => ({ title: a.title ?? "", body: a.body ?? "" }))
      : base.approach,
    credentials: doc.credentials?.length ? doc.credentials : base.credentials,
    implantDesign:
      doc.implantDesign && (doc.implantDesign.title || doc.implantDesign.body)
        ? {
            title: doc.implantDesign.title ?? base.implantDesign?.title ?? "",
            body: doc.implantDesign.body ?? base.implantDesign?.body ?? "",
          }
        : base.implantDesign,
  };
}
