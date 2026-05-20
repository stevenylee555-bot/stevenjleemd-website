import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Patient Testimonials — Steven J. Lee, MD",
  description:
    "Testimonials from patients of Dr. Steven J. Lee, MD — including notable figures who have trusted him with their orthopedic care.",
  alternates: { canonical: "https://www.stevenjleemd.com/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        kicker="Testimonials"
        title="What patients say"
        italic="about their care."
        lede="A collection of testimonials from patients who have trusted Dr. Lee with their surgical and second-opinion consultations — including notable public figures."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Testimonials", href: "/testimonials" },
        ]}
      />
      <ComingSoon
        title="Testimonials page coming soon."
        description="Patient testimonials are being collected with signed consent forms. Notable figures who have given permission to share their experiences will be featured alongside testimonials from a range of patient backgrounds."
        preview={[
          "Notable public figures (with written consent)",
          "Surgical case outcomes",
          "Second-opinion stories",
          "Sports and performance recoveries",
          "International patient experiences",
        ]}
      />
    </>
  );
}
