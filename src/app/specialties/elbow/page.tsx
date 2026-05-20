import type { Metadata } from "next";
import SpecialtyTemplate from "@/components/SpecialtyTemplate";
import { specialtyBySlug } from "@/lib/specialties";

const specialty = specialtyBySlug("elbow")!;

export const metadata: Metadata = {
  title: specialty.metaTitle,
  description: specialty.metaDescription,
  alternates: {
    canonical: `https://www.stevenjleemd.com/specialties/${specialty.slug}`,
  },
};

export default function ElbowPage() {
  return <SpecialtyTemplate specialty={specialty} />;
}
