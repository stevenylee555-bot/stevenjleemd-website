// List every Sanity document with a pending draft, and show what changed vs.
// the published version, field by field.
//
// Run: node --env-file=.env.local --import tsx scripts/show-drafts.ts

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

// Human-friendly labels for each document type. Falls back to the raw _type.
const TYPE_LABELS: Record<string, string> = {
  homePage: "Homepage",
  aboutPage: "About hub",
  bioPage: "Biography",
  credentialsPage: "Credentials & Awards",
  publicationsPage: "Publications & Research",
  cvPage: "Curriculum Vitae",
  secondOpinionsPage: "Second Opinions",
  conditionsIndexPage: "Conditions (index page)",
  conditionPage: "Condition page",
  specialtiesIndexPage: "Specialties (index page)",
  specialty: "Specialty page",
  testimonial: "Testimonial",
};

type AnyDoc = Record<string, unknown> & { _id: string; _type: string };

function truncate(s: string, max: number) {
  if (s.length <= max) return s;
  return s.slice(0, max - 1) + "…";
}

function label(doc: AnyDoc) {
  const friendly = TYPE_LABELS[doc._type] ?? doc._type;
  const title =
    (doc.name as string) ||
    (doc.headerTitle as string) ||
    (doc.headline as string) ||
    (doc.quote as string) ||
    undefined;
  if (title) return `${friendly}: ${truncate(title, 60)}`;
  return friendly;
}

function isObject(v: unknown): v is Record<string, unknown> {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

function diffField(field: string, draft: unknown, published: unknown): string | null {
  if (field.startsWith("_")) return null;
  if (draft === published) return null;
  if (draft === undefined && published === undefined) return null;

  if (published === undefined) {
    if (typeof draft === "string") return `  + ${field}: "${truncate(draft, 80)}" (new)`;
    if (Array.isArray(draft)) return `  + ${field}: new (${draft.length} items)`;
    return `  + ${field}: new`;
  }
  if (draft === undefined) return `  - ${field}: removed`;

  if (typeof draft === "string" && typeof published === "string") {
    return `  ~ ${field}\n      before: "${truncate(published, 80)}"\n      after:  "${truncate(draft, 80)}"`;
  }
  if (Array.isArray(draft) && Array.isArray(published)) {
    if (JSON.stringify(draft) === JSON.stringify(published)) return null;
    return `  ~ ${field} (was ${published.length} items, now ${draft.length} items, items modified)`;
  }
  if (isObject(draft) && isObject(published)) {
    if (JSON.stringify(draft) === JSON.stringify(published)) return null;
    return `  ~ ${field} (object modified)`;
  }
  return `  ~ ${field} (changed)`;
}

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }

  // Skip Sanity's internal system documents (e.g. sanity.previewUrlSecret
   // created by the Presentation tool); those are not editorial content.
  const drafts: AnyDoc[] = await client.fetch(
    `*[_id in path("drafts.**") && !(_type match "sanity.*")]`
  );

  if (drafts.length === 0) {
    console.log("\nNo pending drafts. Everything in Sanity matches what is published.\n");
    return;
  }

  console.log(`\n${drafts.length} document${drafts.length === 1 ? "" : "s"} with pending edits:`);

  for (const draft of drafts) {
    const publishedId = draft._id.replace(/^drafts\./, "");
    const published = await client.fetch<AnyDoc | null>(`*[_id == $id][0]`, { id: publishedId });

    console.log(`\n${"=".repeat(70)}`);
    console.log(label(draft));
    console.log(`  type: ${draft._type}`);
    console.log(`  id:   ${publishedId}`);
    const updated = draft._updatedAt as string | undefined;
    if (updated) {
      console.log(`  last edit: ${new Date(updated).toLocaleString()}`);
    }

    if (!published) {
      console.log(`  (new document, no published version yet)`);
      continue;
    }

    const fields = new Set<string>([...Object.keys(draft), ...Object.keys(published)]);
    const changes: string[] = [];
    for (const f of fields) {
      const d = diffField(f, draft[f], published[f]);
      if (d) changes.push(d);
    }

    if (changes.length === 0) {
      console.log(`  (no field-level differences; may be a touch-only edit)`);
    } else {
      for (const c of changes) console.log(c);
    }
  }

  console.log(`\n${"=".repeat(70)}`);
  console.log(`Open each document in Studio to review and publish (or discard).\n`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
