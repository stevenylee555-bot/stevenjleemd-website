import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Referral Network, Steven J. Lee, MD",
  description:
    "Trusted specialists Dr. Steven J. Lee personally recommends, physical therapists, hand therapists, dermatologists, nutritionists, trainers, and more.",
  alternates: { canonical: "https://www.stevenjleemd.com/referral-network" },
};

export default function ReferralNetworkPage() {
  return (
    <>
      <PageHeader
        kicker="Referral Network"
        title="The specialists Dr. Lee"
        italic="personally recommends."
        lede="A curated directory of providers across the disciplines patients ask Dr. Lee about most often, physical therapy, hand therapy, dermatology, nutrition, training, and more."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Referral Network", href: "/referral-network" },
        ]}
      />
      <ComingSoon
        title="Referral directory coming soon."
        description="Dr. Lee is assembling a searchable, categorized list of providers he refers patients to, across physical therapy, hand therapy, dermatology, nutrition, training, home care, and more. Each listing will include specialty, location, and a brief note from Dr. Lee."
        preview={[
          "Physical Therapists",
          "Hand Therapists",
          "Dermatologists",
          "Nutritionists & Dieticians",
          "Personal Trainers",
          "Home Care Nurses",
          "Brace Specialists",
        ]}
      />
    </>
  );
}
