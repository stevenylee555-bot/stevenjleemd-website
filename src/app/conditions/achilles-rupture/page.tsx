import type { Metadata } from "next";
import ConditionTemplate from "@/components/ConditionTemplate";
import { conditionPageBySlug } from "@/lib/conditionPages";

const data = conditionPageBySlug("achilles-rupture")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: `https://www.stevenjleemd.com/conditions/${data.slug}`,
  },
};

export default function Page() {
  return <ConditionTemplate data={data} />;
}
