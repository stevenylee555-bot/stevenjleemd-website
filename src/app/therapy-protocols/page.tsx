import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Therapy Protocols — Steven J. Lee, MD",
  description:
    "Physical therapy and hand therapy protocols recommended by Dr. Steven J. Lee, MD for post-operative recovery and non-surgical management.",
  alternates: { canonical: "https://www.stevenjleemd.com/therapy-protocols" },
};

export default function TherapyProtocolsPage() {
  return (
    <>
      <PageHeader
        kicker="Therapy Protocols"
        title="The PT and hand-therapy protocols"
        italic="Dr. Lee recommends."
        lede="A patient-facing library of recovery protocols — what to do, when, and why — for both post-operative care and non-surgical management."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Therapy Protocols", href: "/therapy-protocols" },
        ]}
      />
      <ComingSoon
        title="Therapy protocol library coming soon."
        description="Detailed, physician-authored recovery protocols are being assembled for every major procedure Dr. Lee performs. Patients will be able to download or print the protocol relevant to their procedure and share it with their therapist."
        preview={[
          "Post-op carpal tunnel release",
          "Distal radius fracture recovery (operative and non-operative)",
          "UCL reconstruction return-to-throw timeline",
          "Rotator cuff repair phases I–IV",
          "ACL reconstruction return-to-sport",
          "Achilles repair functional progression",
          "Basal joint arthroplasty hand-therapy timeline",
          "Non-surgical management protocols",
        ]}
      />
    </>
  );
}
