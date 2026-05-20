import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "PRP, Stem Cells & Advanced Treatments — Steven J. Lee, MD",
  description:
    "PRP therapy, BMAC stem cell injections, and peptide treatments with Dr. Steven J. Lee, MD — the first surgeon in NYC to perform PRP for upper extremity injuries.",
  alternates: { canonical: "https://www.stevenjleemd.com/specialties/advanced-treatments" },
};

export default function AdvancedTreatmentsPage() {
  return (
    <>
      <PageHeader
        kicker="Advanced Treatments"
        title="PRP, stem cells, peptides —"
        italic="and the data behind them."
        lede="Dr. Lee was the first surgeon in New York City to perform PRP therapy for upper extremity injuries. He has continued to pioneer the use of biologics — including the first orthopedic-journal review paper on peptides."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Specialties", href: "/specialties" },
          { label: "Advanced Treatments", href: "/specialties/advanced-treatments" },
        ]}
      />
      <ComingSoon
        title="Full advanced treatments overview coming soon."
        description="A detailed specialty page is in development. Each treatment will have its own dedicated page explaining indications, evidence, and what to expect."
        preview={[
          "Platelet-Rich Plasma (PRP) injections",
          "BMAC (Bone Marrow Aspirate Concentrate) stem cell therapy",
          "Peptide therapy — including the first orthopedic-journal review paper authored by Dr. Lee",
          "Internal brace augmentation for ligament repair",
          "Biologics-enhanced surgical protocols",
          "When biologics are — and aren't — the right tool",
        ]}
      />
    </>
  );
}
