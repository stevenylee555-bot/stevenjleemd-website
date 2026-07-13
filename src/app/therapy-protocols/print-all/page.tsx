import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ProtocolBody from "@/components/ProtocolBody";
import ProtocolPrintHeader from "@/components/ProtocolPrintHeader";
import PrintProtocolButton from "@/components/PrintProtocolButton";
import { getAllProcedureProtocols } from "@/sanity/getAllProcedureProtocols";

export const metadata: Metadata = {
  title: "Print All Post-Op Protocols, Steven J. Lee, MD",
  description:
    "Print or save the full set of Dr. Steven J. Lee's post-operative protocols as one packet.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.stevenjleemd.com/therapy-protocols/print-all" },
};

export default async function PrintAllProtocolsPage() {
  const protocols = await getAllProcedureProtocols();

  return (
    <section className="bg-cream print:bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-14 lg:py-20 print:py-0 print:px-0">
        {/* Screen-only controls and guidance */}
        <div className="no-print">
          <Link
            href="/therapy-protocols"
            className="inline-flex items-center gap-1.5 text-navy-900/70 hover:text-gold-600 text-[13px] font-medium transition-colors mb-8"
          >
            <ChevronLeft size={15} />
            All post-op instructions
          </Link>
          <h1 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] tracking-[-0.02em] text-navy-950 leading-[1.15] mb-4">
            Print all post-op protocols
          </h1>
          <p className="text-navy-900/85 text-[16px] leading-[1.7] max-w-2xl mb-8">
            This page stacks all {protocols.length} post-operative protocols into a single
            packet, each starting on its own page. Use the button below to print the full set
            or save it as one PDF. Each protocol also prints on its own from its individual page.
          </p>
          <PrintProtocolButton label={`Print / Save all ${protocols.length} as PDF`} className="mb-2" />
        </div>

        {/* The packet: one protocol per page when printed */}
        {protocols.map((data) => (
          <div key={data.slug} className="protocol-print-page mt-16 first:mt-12 print:mt-0">
            <ProtocolPrintHeader title={data.officialTitle || data.name} region={data.region} />
            <ProtocolBody data={data} />
          </div>
        ))}
      </div>
    </section>
  );
}
