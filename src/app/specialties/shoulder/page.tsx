import type { Metadata } from "next";
import SpecialtyTemplate from "@/components/SpecialtyTemplate";
import { specialtyBySlug } from "@/lib/specialties";

const specialty = specialtyBySlug("shoulder")!;

export const metadata: Metadata = {
  title: specialty.metaTitle,
  description: specialty.metaDescription,
  alternates: {
    canonical: `https://www.stevenjleemd.com/specialties/${specialty.slug}`,
  },
};

export default function ShoulderPage() {
  return <SpecialtyTemplate specialty={specialty} />;
}
