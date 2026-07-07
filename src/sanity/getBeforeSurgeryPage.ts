import { draftMode } from "next/headers";
import { sanityFetch } from "./live";
import { BEFORE_SURGERY_QUERY } from "./queries";
import { beforeSurgery, type PrepInstruction, type SurgicalFacility } from "@/lib/surgicalInfo";

export type BeforeSurgeryContent = {
  header: { title: string; italic: string; lede: string };
  planning: { heading: string; body: string[]; paperworkIntro: string; paperwork: string[] };
  coordinator: { name: string; role: string; address: string; phone: string; email: string; fax: string };
  instructions: { heading: string; intro: string; items: PrepInstruction[] };
  locations: {
    heading: string;
    intro: string;
    outpatient: string[];
    inpatient: string[];
    facilities: SurgicalFacility[];
  };
};

type Doc = {
  headerTitle?: string;
  headerItalic?: string;
  headerLede?: string;
  planningHeading?: string;
  planningBody?: string[];
  paperworkIntro?: string;
  paperwork?: string[];
  coordinator?: Partial<BeforeSurgeryContent["coordinator"]>;
  instructionsHeading?: string;
  instructionsIntro?: string;
  instructions?: Array<{ term?: string; detail?: string }>;
  locationsHeading?: string;
  locationsIntro?: string;
  outpatient?: string[];
  inpatient?: string[];
  facilities?: Array<{ name?: string; address?: string[]; description?: string[]; contact?: string }>;
} | null;

const base: BeforeSurgeryContent = beforeSurgery;
const arr = <T>(v: T[] | undefined | null, fallback: T[]): T[] => (v && v.length ? v : fallback);

// Merges Sanity edits over the in-code content (src/lib/surgicalInfo.ts). Falls
// back cleanly on any error or missing field, so the page never breaks.
export async function getBeforeSurgeryPage(): Promise<BeforeSurgeryContent> {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }

  let doc: Doc = null;
  try {
    const { data } = await sanityFetch({
      query: BEFORE_SURGERY_QUERY,
      perspective: isDraft ? "drafts" : "published",
      stega: isDraft,
    });
    doc = (data as Doc) ?? null;
  } catch {
    doc = null;
  }
  if (!doc) return base;

  return {
    header: {
      title: doc.headerTitle ?? base.header.title,
      italic: doc.headerItalic ?? base.header.italic,
      lede: doc.headerLede ?? base.header.lede,
    },
    planning: {
      heading: doc.planningHeading ?? base.planning.heading,
      body: arr(doc.planningBody, base.planning.body),
      paperworkIntro: doc.paperworkIntro ?? base.planning.paperworkIntro,
      paperwork: arr(doc.paperwork, base.planning.paperwork),
    },
    coordinator: {
      name: doc.coordinator?.name ?? base.coordinator.name,
      role: doc.coordinator?.role ?? base.coordinator.role,
      address: doc.coordinator?.address ?? base.coordinator.address,
      phone: doc.coordinator?.phone ?? base.coordinator.phone,
      email: doc.coordinator?.email ?? base.coordinator.email,
      fax: doc.coordinator?.fax ?? base.coordinator.fax,
    },
    instructions: {
      heading: doc.instructionsHeading ?? base.instructions.heading,
      intro: doc.instructionsIntro ?? base.instructions.intro,
      items: doc.instructions?.length
        ? doc.instructions.map((i) => ({ term: i.term ?? "", detail: i.detail ?? "" }))
        : base.instructions.items,
    },
    locations: {
      heading: doc.locationsHeading ?? base.locations.heading,
      intro: doc.locationsIntro ?? base.locations.intro,
      outpatient: arr(doc.outpatient, base.locations.outpatient),
      inpatient: arr(doc.inpatient, base.locations.inpatient),
      facilities: doc.facilities?.length
        ? doc.facilities.map((f) => ({
            name: f.name ?? "",
            address: f.address ?? [],
            description: f.description,
            contact: f.contact ?? "",
          }))
        : base.locations.facilities,
    },
  };
}
