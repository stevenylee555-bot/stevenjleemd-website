import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Shoulder Surgery — Steven J. Lee, MD",
  description:
    "Shoulder surgery with Dr. Steven J. Lee, MD — rotator cuff repair, arthroscopy, recurrent instability, and clavicle fracture fixation. Sports medicine for athletes and active adults.",
  alternates: { canonical: "https://www.stevenjleemd.com/specialties/shoulder" },
};

export default function ShoulderPage() {
  return (
    <>
      <PageHeader
        kicker="Shoulder Surgery"
        title="Arthroscopic repair"
        italic="and sports-medicine reconstruction."
        lede="Dr. Lee treats rotator cuff tears, shoulder instability, labral injuries, and clavicle fractures — with a focus on minimally invasive techniques."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Specialties", href: "/specialties" },
          { label: "Shoulder", href: "/specialties/shoulder" },
        ]}
      />
      <ComingSoon
        title="Full shoulder surgery overview coming soon."
        description="A detailed specialty page is in development. In the meantime, the Rotator Cuff Tear condition page will be published in the Conditions Library as a priority release."
        preview={[
          "Rotator cuff repair (arthroscopic)",
          "Shoulder arthroscopy for labral and instability injuries",
          "Bankart and SLAP repairs",
          "Clavicle fracture fixation (next-gen Arthrex plate Dr. Lee is helping design)",
          "AC joint reconstruction",
          "Sports return-to-play protocols",
        ]}
      />
    </>
  );
}
