import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import {
  HandIcon,
  ElbowIcon,
  ShoulderIcon,
  KneeIcon,
  BiologicsIcon,
} from "@/components/home/icons/AnatomyIcons";

export const metadata: Metadata = {
  title: "Specialties — Steven J. Lee, MD",
  description:
    "Specialties of Dr. Steven J. Lee, MD: hand & wrist surgery, elbow surgery (including Tommy John UCL reconstruction), shoulder surgery, knee & sports medicine, and PRP / biologics / advanced treatments.",
  alternates: { canonical: "https://www.stevenjleemd.com/specialties" },
};

const specialties = [
  {
    Icon: ShoulderIcon,
    title: "Shoulder",
    eyebrow: "Sports medicine",
    body: "Rotator cuff repair, shoulder arthroscopy, clavicle fractures, and recurrent instability. Care for athletes and active adults.",
    href: "/specialties/shoulder",
  },
  {
    Icon: ElbowIcon,
    title: "Elbow",
    eyebrow: "UCL · Complex trauma",
    body: "Tommy John (UCL) reconstruction, LUCL repair, biceps ruptures, and complex elbow trauma. Implant designer for the internal brace constructs used in these procedures.",
    href: "/specialties/elbow",
  },
  {
    Icon: KneeIcon,
    title: "Knee & Sports",
    eyebrow: "ACL · Meniscus · Achilles",
    body: "ACL reconstruction, knee arthroscopy, meniscus repair, and Achilles tendon repair. Author of multiple peer-reviewed Achilles papers.",
    href: "/specialties/knee",
  },
  {
    Icon: HandIcon,
    title: "Hand & Wrist",
    eyebrow: "Chief at Lenox Hill",
    body: "Carpal tunnel (endoscopic), distal radius fractures, scapholunate ligament repair, basal joint arthroplasty, and the full spectrum of hand surgery.",
    href: "/specialties/hand-wrist",
  },
  {
    Icon: BiologicsIcon,
    title: "PRP & Advanced Treatments",
    eyebrow: "First in NYC for upper extremity",
    body: "PRP injections, BMAC stem cell therapy, and peptide treatments. First surgeon in NYC to perform PRP for upper-extremity injuries.",
    href: "/specialties/advanced-treatments",
  },
];

export default function SpecialtiesIndexPage() {
  return (
    <>
      <PageHeader
        kicker="Areas of Expertise"
        title="Surgery and sports medicine,"
        italic="from fingertip to knee."
        lede="Dr. Lee's practice spans upper extremity surgery, sports medicine, and advanced biologics — with particular depth in the procedures he helped pioneer and the implants he designed for Arthrex."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Specialties", href: "/specialties" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-900/10 border border-navy-900/10">
            {specialties.map((s) => (
              <li key={s.href} className="bg-white">
                <Link
                  href={s.href}
                  className="group relative flex flex-col h-full p-8 lg:p-10 hover:bg-cream transition-colors duration-500"
                >
                  <div className="mb-7 text-navy-900 group-hover:text-gold-600 transition-colors">
                    <s.Icon size={52} />
                  </div>
                  <div className="kicker text-gold-600 mb-3">{s.eyebrow}</div>
                  <h2 className="font-serif text-2xl lg:text-3xl text-navy-950 tracking-[-0.01em] mb-4">
                    {s.title}
                  </h2>
                  <p className="text-navy-900/65 text-[15px] leading-relaxed mb-8 flex-1">
                    {s.body}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-navy-950 group-hover:text-gold-600 transition-colors">
                    <span>Learn more</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
