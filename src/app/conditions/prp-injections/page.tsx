import type { Metadata } from "next";
import ConditionTemplate from "@/components/ConditionTemplate";
import { conditionPageBySlug } from "@/lib/conditionPages";
import { getConditionPage } from "@/sanity/getConditionPage";

const slug = "prp-injections";
const fallback = conditionPageBySlug(slug)!;

export const metadata: Metadata = {
  title: fallback.metaTitle,
  description: fallback.metaDescription,
  alternates: {
    canonical: `https://www.stevenjleemd.com/conditions/${fallback.slug}`,
  },
};

export default async function Page() {
  const data = (await getConditionPage(slug)) ?? fallback;
  return <ConditionTemplate data={data} />;
}
