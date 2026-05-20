import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Elbow Surgery — Steven J. Lee, MD",
  description:
    "Elbow surgery with Dr. Steven J. Lee, MD — Tommy John UCL reconstruction, LUCL repair, complex elbow trauma, biceps ruptures. Implant designer for the internal brace constructs used in these procedures.",
  alternates: { canonical: "https://www.stevenjleemd.com/specialties/elbow" },
};

export default function ElbowPage() {
  return (
    <>
      <PageHeader
        kicker="Elbow Surgery"
        title="Tommy John, complex trauma,"
        italic="and the internal brace he designed."
        lede="Dr. Lee is fellowship-trained in Shoulder & Elbow Surgery and the designer of internal brace anchors used in UCL reconstruction and other elbow ligament repairs."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Specialties", href: "/specialties" },
          { label: "Elbow", href: "/specialties/elbow" },
        ]}
      />
      <ComingSoon
        title="Full elbow surgery overview coming soon."
        description="A detailed specialty page is in development. Dedicated condition pages are being published in the Conditions Library — UCL Tear and Biceps Rupture are among the priority pages."
        preview={[
          "UCL (Tommy John) reconstruction with internal brace",
          "LUCL repair for lateral elbow instability",
          "Distal biceps repair using Arthrex anchors Dr. Lee designed",
          "Complex elbow trauma and fracture-dislocations",
          "Elbow arthroscopy",
          "Cubital tunnel release",
        ]}
      />
    </>
  );
}
