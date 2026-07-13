import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { ALL_PROCEDURE_PROTOCOLS_QUERY } from "./queries";
import {
  procedureProtocols,
  type ProcedureProtocol,
  type ProtocolSection,
} from "@/lib/procedureProtocols";

type DocSection = { heading?: string; body?: string[]; bullets?: string[] };
type ProtocolDoc = {
  slug?: string;
  officialTitle?: string;
  sections?: DocSection[];
  warningsHeading?: string;
  warnings?: string[];
  erWarningsHeading?: string;
  erWarnings?: string[];
  disclaimer?: string;
};

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

// Returns every live protocol, in the code-defined order, merging Sanity edits
// over the in-code fallback (same rule as getProcedureProtocol, one query for
// the whole set). Identity/ordering stay in code; editable prose comes from
// Sanity when present. Falls back cleanly to code content on any error.
export async function getAllProcedureProtocols(): Promise<ProcedureProtocol[]> {
  const base = procedureProtocols.filter((p) => p.status === "live");

  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }

  let docs: ProtocolDoc[] = [];
  try {
    const { data } = await sanityFetch({
      query: ALL_PROCEDURE_PROTOCOLS_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    docs = (data as ProtocolDoc[]) ?? [];
  } catch {
    docs = [];
  }

  const bySlug = new Map(docs.filter((d) => d.slug).map((d) => [d.slug as string, d]));

  return base.map((b) => {
    const doc = bySlug.get(b.slug);
    if (!doc) return b;
    return {
      ...b,
      officialTitle: doc.officialTitle ?? b.officialTitle,
      sections: mergeSections(doc.sections, b.sections),
      warnings: doc.warnings?.length ? doc.warnings : b.warnings,
      erWarnings: doc.erWarnings?.length ? doc.erWarnings : b.erWarnings,
      disclaimer: doc.disclaimer ?? b.disclaimer,
    };
  });
}
