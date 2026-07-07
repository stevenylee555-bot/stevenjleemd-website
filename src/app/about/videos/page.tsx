import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Videos, Steven J. Lee, MD",
  description:
    "Operative videos, surgical technique demonstrations, and lectures from Dr. Steven J. Lee, MD via national educational platforms and VuMedi.",
  alternates: { canonical: "https://www.stevenjleemd.com/about/videos" },
  // Placeholder page: keep out of the index until it holds real content.
  robots: { index: false, follow: true },
};

export default function VideosPage() {
  return (
    <>
      <PageHeader
        kicker="Videos"
        title="Operative technique and lectures,"
        italic="straight from the surgeon."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Videos", href: "/about/videos" },
        ]}
      />
      <ComingSoon
        title="Video library coming soon."
        description="Operative videos, surgical technique demonstrations, and teaching content from Dr. Lee, published via national educational platforms and VuMedi, will be embedded here."
        preview={[
          "UCL reconstruction with internal brace",
          "Basal joint arthroplasty technique",
          "Distal radius plate application",
          "Tendon-to-bone anchor repair",
          "Implant design walkthroughs",
          "Conference and grand rounds lectures",
        ]}
      />
    </>
  );
}
