import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Credentials & Awards — Steven J. Lee, MD",
  description:
    "Credentials, board certifications, fellowships, and awards for Dr. Steven J. Lee, MD — orthopedic surgeon.",
  alternates: { canonical: "https://www.stevenjleemd.com/about/credentials" },
};

export default function CredentialsPage() {
  return (
    <>
      <PageHeader
        kicker="Credentials & Awards"
        title="Board certifications, fellowships,"
        italic="and recognition."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Credentials", href: "/about/credentials" },
        ]}
      />
      <ComingSoon
        title="Full credentials and awards list coming soon."
        description="A detailed page is being prepared with confirmed dates and recognitions. In the meantime, the homepage features a summary of major awards including Castle Connolly Top Doctor (since 2008), New York Times Super Doctors, U.S. News & World Report Best Doctors, and New York Magazine Best Doctors."
        preview={[
          "American Board of Orthopaedic Surgery — Board Certification",
          "Hand Surgery Fellowship",
          "Shoulder & Elbow Surgery Fellowship",
          "Castle Connolly Top Doctor (annual since 2008)",
          "NY Times Super Doctors — Hall of Fame",
          "U.S. News & World Report Best Doctors",
          "New York Magazine Best Doctors",
          "Vitals Compassionate Doctor Award",
          "Hospital appointments and committee leadership",
        ]}
      />
    </>
  );
}
