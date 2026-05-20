import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Publications & Research — Steven J. Lee, MD",
  description:
    "Peer-reviewed publications and research from Dr. Steven J. Lee, MD — including 4+ papers on Achilles repair and the first orthopedic-journal review on peptides.",
  alternates: { canonical: "https://www.stevenjleemd.com/about/publications" },
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        kicker="Publications & Research"
        title="50+ peer-reviewed papers,"
        italic="across hand, elbow, shoulder, knee, and biologics."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Publications", href: "/about/publications" },
        ]}
      />
      <ComingSoon
        title="Full publications list coming soon."
        description="A complete, PubMed-linked publications page is being prepared. Highlights include four peer-reviewed papers on Achilles tendon repair and a recent review paper believed to be the first on peptides in an orthopedic journal."
        preview={[
          "Achilles tendon repair (4+ peer-reviewed papers)",
          "Peptides in orthopedic surgery — review paper",
          "Hand and wrist fracture fixation",
          "UCL reconstruction and internal brace technique",
          "Basal joint reconstruction with internal brace",
          "PRP and biologics in upper extremity injuries",
          "All entries with PubMed links and DOI references",
        ]}
      />
    </>
  );
}
