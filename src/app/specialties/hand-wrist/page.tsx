import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Hand & Wrist Surgery — Steven J. Lee, MD",
  description:
    "Hand and wrist surgery with Dr. Steven J. Lee, MD — Chief of Hand Surgery at Lenox Hill Hospital. Endoscopic carpal tunnel, distal radius fractures, scapholunate repair, basal joint arthroplasty, and more.",
  alternates: { canonical: "https://www.stevenjleemd.com/specialties/hand-wrist" },
};

export default function HandWristPage() {
  return (
    <>
      <PageHeader
        kicker="Hand & Wrist Surgery"
        title="Chief of Hand Surgery"
        italic="at Lenox Hill Hospital."
        lede="Hand and wrist surgery is the foundation of Dr. Lee's practice — and the area where his Arthrex implant designs have made the largest impact."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Specialties", href: "/specialties" },
          { label: "Hand & Wrist", href: "/specialties/hand-wrist" },
        ]}
      />
      <ComingSoon
        title="Full hand & wrist surgery overview coming soon."
        description="A detailed specialty page is in development. In the meantime, dedicated condition pages are being published in the Conditions Library, and you can book a consultation directly via ZocDoc."
        preview={[
          "Endoscopic carpal tunnel release",
          "Distal radius fracture fixation (Arthrex plates Dr. Lee helped design)",
          "Scapholunate ligament repair with internal brace",
          "Basal joint arthroplasty with internal brace",
          "Hand and finger fractures",
          "Tendon repair using Dr. Lee's anchor designs",
          "Trigger finger release",
          "Wrist arthroscopy",
        ]}
      />
    </>
  );
}
