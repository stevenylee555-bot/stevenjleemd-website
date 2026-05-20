import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Knee & Sports Medicine — Steven J. Lee, MD",
  description:
    "Knee and sports medicine surgery with Dr. Steven J. Lee, MD — ACL reconstruction, knee arthroscopy, meniscus repair, and Achilles tendon repair. Author of multiple peer-reviewed Achilles papers.",
  alternates: { canonical: "https://www.stevenjleemd.com/specialties/knee" },
};

export default function KneePage() {
  return (
    <>
      <PageHeader
        kicker="Knee & Sports Medicine"
        title="ACL, meniscus, Achilles,"
        italic="and the return to sport."
        lede="Dr. Lee treats knee injuries, sports trauma, and Achilles tendon ruptures — combining arthroscopic technique with the same biologics expertise he pioneered for the upper extremity."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Specialties", href: "/specialties" },
          { label: "Knee & Sports", href: "/specialties/knee" },
        ]}
      />
      <ComingSoon
        title="Full knee & sports medicine overview coming soon."
        description="A detailed specialty page is in development. ACL Reconstruction and Achilles Tendon Rupture are among the priority condition pages being published in the Conditions Library."
        preview={[
          "ACL reconstruction (autograft and allograft)",
          "Meniscus repair and partial meniscectomy",
          "Knee arthroscopy",
          "Achilles tendon repair (4+ peer-reviewed papers authored by Dr. Lee)",
          "Sports injury management",
          "Biologics-augmented healing protocols",
        ]}
      />
    </>
  );
}
