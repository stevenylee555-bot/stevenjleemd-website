import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { PROCEDURE_PROTOCOL_QUERY } from "./queries";
import {
  procedureBySlug,
  type ProcedureProtocol,
  type ProtocolSection,
} from "@/lib/procedureProtocols";

type DocSection = { heading?: string; body?: string[]; bullets?: string[] };
type ProtocolDoc = {
  officialTitle?: string;
  sections?: DocSection[];
  warningsHeading?: string;
  warnings?: string[];
  erWarningsHeading?: string;
  erWarnings?: string[];
  disclaimer?: string;
} | null;

function mergeSections(
  docSections: DocSection[] | undefined,
  base: ProtocolSection[]
): ProtocolSection[] {
  if (!docSections?.length) return base;
  return docSections.map((s) => ({
    heading: s.heading ?? "",
    body: s.body ?? [],
    bullets: s.bullets ?? [],
  }));
}

// Returns the protocol for `slug`, merging Sanity edits over the code fallback in
// src/lib/procedureProtocols.ts. Identity (slug/name/region/status) stays in code;
// editable prose comes from Sanity when present. Falls back cleanly on any error.
export async function getProcedureProtocol(slug: string): Promise<ProcedureProtocol | null> {
  const base = procedureBySlug(slug);
  if (!base) return null;

  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }

  let doc: ProtocolDoc = null;
  try {
    const { data } = await sanityFetch({
      query: PROCEDURE_PROTOCOL_QUERY,
      params: { slug },
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    doc = (data as ProtocolDoc) ?? null;
  } catch {
    doc = null;
  }
  if (!doc) return base;

  return {
    ...base,
    officialTitle: doc.officialTitle ?? base.officialTitle,
    sections: mergeSections(doc.sections, base.sections),
    warnings: doc.warnings?.length ? doc.warnings : base.warnings,
    erWarnings: doc.erWarnings?.length ? doc.erWarnings : base.erWarnings,
    disclaimer: doc.disclaimer ?? base.disclaimer,
  };
}
