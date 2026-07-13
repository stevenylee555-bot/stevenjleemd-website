import Link from "next/link";
import { ArrowUpRight, Calendar, ExternalLink, ChevronLeft } from "lucide-react";
import { ZOCDOC_URL } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import ProtocolBody from "@/components/ProtocolBody";
import ProtocolPrintHeader from "@/components/ProtocolPrintHeader";
import PrintProtocolButton from "@/components/PrintProtocolButton";
import {
  buildMedicalWebPageSchema,
  buildMedicalProcedureSchema,
  SITE_URL,
} from "@/lib/schema";
import type { ProcedureProtocol } from "@/lib/procedureProtocols";

export default function ProtocolTemplate({ data }: { data: ProcedureProtocol }) {
  const pageUrl = `${SITE_URL}/therapy-protocols/${data.slug}`;
  const title = data.officialTitle || data.name;
  const webPageSchema = buildMedicalWebPageSchema({
    url: pageUrl,
    title: `${title}: Post-Operative Instructions`,
    description: `Post-operative care and recovery instructions for ${data.name}, from the practice of Steven J. Lee, MD.`,
  });
  const procedureSchema = buildMedicalProcedureSchema({
    name: title,
    description: `Post-operative recovery protocol for ${data.name}.`,
    url: pageUrl,
    slug: data.slug,
    bodyLocation: data.region,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <div className="no-print">
        <PageHeader
          kicker={`Post-Op Instructions · ${data.region}`}
          title={data.officialTitle || data.name}
          lede="What to expect and how to care for yourself after your procedure. These are Dr. Lee's general guidelines. Always follow the specific instructions given to you after your own surgery."
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Post-Op Instructions", href: "/therapy-protocols" },
            { label: data.name, href: `/therapy-protocols/${data.slug}` },
          ]}
        />
      </div>

      <section className="bg-cream print:bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-14 lg:py-20 print:py-0 print:px-0">
          <div className="no-print flex flex-wrap items-center justify-between gap-4 mb-10">
            <Link
              href="/therapy-protocols"
              className="inline-flex items-center gap-1.5 text-navy-900/70 hover:text-gold-600 text-[13px] font-medium transition-colors"
            >
              <ChevronLeft size={15} />
              All post-op instructions
            </Link>
            <PrintProtocolButton />
          </div>

          {/* Letterhead: print only */}
          <ProtocolPrintHeader title={title} region={data.region} />

          <ProtocolBody data={data} />
        </div>
      </section>

      {/* CTA */}
      <section className="no-print bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">Questions about your recovery</span>
            <span className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.02em] leading-[1.08] mb-6">
            Reach Dr. Lee&rsquo;s team.
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            Call the office at{" "}
            <a href="tel:+12127373301" className="text-gold-400 hover:text-gold-300 underline underline-offset-4">
              (212) 737-3301
            </a>{" "}
            with any questions. Always follow the specific instructions given to you after your own surgery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ZOCDOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all text-base shadow-[0_10px_50px_-12px_rgba(201,168,76,0.7)] hover:-translate-y-0.5"
            >
              <Calendar size={18} strokeWidth={2} />
              Book via ZocDoc
              <ExternalLink size={14} className="opacity-70" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all text-base font-medium"
            >
              Contact the office
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
