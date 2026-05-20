import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Curriculum Vitae — Steven J. Lee, MD",
  description:
    "Download the full curriculum vitae of Dr. Steven J. Lee, MD — Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital.",
  alternates: { canonical: "https://www.stevenjleemd.com/about/cv" },
};

export default function CVPage() {
  return (
    <>
      <PageHeader
        kicker="Curriculum Vitae"
        title="Dr. Lee's full CV,"
        italic="available as a PDF."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "CV", href: "/about/cv" },
        ]}
      />
      <ComingSoon
        title="CV download coming soon."
        description="Dr. Lee's complete curriculum vitae will be available here as a downloadable PDF for patients, referring physicians, and institutions. It includes education, training, hospital appointments, board certifications, fellowships, awards, publications, presentations, and teaching positions."
        preview={[
          "Education and training history",
          "Hospital appointments and leadership roles",
          "Board certifications and licensure",
          "Awards and honors",
          "Complete publications list",
          "Invited lectures and presentations",
          "Teaching and academic positions",
        ]}
      />
    </>
  );
}
