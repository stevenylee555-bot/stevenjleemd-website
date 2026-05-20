import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Blog — Steven J. Lee, MD",
  description:
    "Notes and updates from Dr. Steven J. Lee, MD on orthopedic surgery, implant design, biologics, and the practice.",
  alternates: { canonical: "https://www.stevenjleemd.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        kicker="Blog"
        title="Notes from"
        italic="the practice."
        lede="Occasional writing on orthopedic surgery, implant design, biologics, recovery, and the evolution of the field."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />
      <ComingSoon
        title="Blog launching soon."
        description="Dr. Lee will share notes on advances in orthopedic care, implant design developments, biologics evidence, and practice updates. New posts will appear here as they are published."
        preview={[
          "Implant design and what it means for patients",
          "When biologics work — and when they don't",
          "Recovery realities surgeons don't always discuss",
          "Practice updates and announcements",
        ]}
      />
    </>
  );
}
