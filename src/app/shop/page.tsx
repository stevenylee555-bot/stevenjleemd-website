import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Recovery Shop, Steven J. Lee, MD",
  description:
    "Braces, supplements, and recovery equipment personally recommended by Dr. Steven J. Lee, MD. Curated product referrals via Recovery Shop.",
  alternates: { canonical: "https://www.stevenjleemd.com/shop" },
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        kicker="Recovery Shop"
        title="Braces, equipment, and supplements"
        italic="Dr. Lee personally recommends."
        lede="A curated collection of recovery products via Recovery Shop. Each product is something Dr. Lee uses in his practice or recommends to his patients."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
        ]}
      />
      <ComingSoon
        title="Recovery Shop integration coming soon."
        description="A curated shop of braces, splints, vitamins and supplements, recovery tools, and equipment Dr. Lee uses with patients. No inventory or checkout on this site, products link directly to Recovery Shop."
        preview={[
          "Post-operative braces and splints",
          "Cold therapy and compression",
          "Joint support supplements",
          "Hand therapy putty and tools",
          "Strength and rehab equipment",
          "Sleep and recovery essentials",
        ]}
      />
    </>
  );
}
