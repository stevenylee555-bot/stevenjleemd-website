import type { Metadata } from "next";
import SpecialtyTemplate from "@/components/SpecialtyTemplate";
import { specialtyBySlug } from "@/lib/specialties";
import { getSpecialty } from "@/sanity/getSpecialty";

const slug = "elbow";
const fallback = specialtyBySlug(slug)!;

export const metadata: Metadata = {
  title: fallback.metaTitle,
  description: fallback.metaDescription,
  alternates: {
    canonical: `https://www.stevenjleemd.com/specialties/${fallback.slug}`,
  },
};

export default async function ElbowPage() {
  const specialty = (await getSpecialty(slug)) ?? fallback;
  return <SpecialtyTemplate specialty={specialty} />;
}
