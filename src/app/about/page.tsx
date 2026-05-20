import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, User, Award, BookOpen, Video, FileText } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Dr. Lee — Steven J. Lee, MD",
  description:
    "About Dr. Steven J. Lee, MD — Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, Arthrex implant designer, double fellowship-trained orthopedic surgeon. Biography, credentials, publications, and CV.",
  alternates: { canonical: "https://www.stevenjleemd.com/about" },
};

const links = [
  {
    Icon: User,
    title: "Biography",
    body: "Training, career, and the story behind the practice.",
    href: "/about/bio",
  },
  {
    Icon: Award,
    title: "Credentials & Awards",
    body: "Board certification, fellowships, and recognition.",
    href: "/about/credentials",
  },
  {
    Icon: BookOpen,
    title: "Publications & Research",
    body: "Peer-reviewed papers, including 4 on Achilles repair and a peptides review.",
    href: "/about/publications",
  },
  {
    Icon: Video,
    title: "Videos",
    body: "Operative videos, teaching content, and Arthrex presentations.",
    href: "/about/videos",
  },
  {
    Icon: FileText,
    title: "Curriculum Vitae",
    body: "Full CV available as a downloadable PDF.",
    href: "/about/cv",
  },
];

export default function AboutIndexPage() {
  return (
    <>
      <PageHeader
        kicker="About Dr. Lee"
        title="Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital,"
        italic="and the surgeon who designed the hardware."
        lede="Dr. Steven J. Lee is a double fellowship-trained, board-certified orthopedic surgeon specializing in hand, wrist, elbow, shoulder, and sports medicine. Designer of plating systems, suture anchors, and internal brace constructs for Arthrex. First in NYC to perform PRP therapy for upper extremity injuries."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-900/10 border border-navy-900/10">
            {links.map((l) => (
              <li key={l.href} className="bg-white">
                <Link
                  href={l.href}
                  className="group flex flex-col h-full p-8 lg:p-10 hover:bg-cream transition-colors duration-500"
                >
                  <div className="mb-7 text-navy-900 group-hover:text-gold-600 transition-colors">
                    <l.Icon size={32} strokeWidth={1.3} />
                  </div>
                  <h2 className="font-serif text-2xl text-navy-950 tracking-[-0.01em] mb-3 group-hover:text-gold-600 transition-colors">
                    {l.title}
                  </h2>
                  <p className="text-navy-900/65 text-[15px] leading-relaxed mb-8 flex-1">
                    {l.body}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-navy-950 group-hover:text-gold-600 transition-colors">
                    <span>Read more</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
