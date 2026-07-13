import { AlertCircle, AlertTriangle } from "lucide-react";
import type { ProcedureProtocol } from "@/lib/procedureProtocols";

// Printable protocol content: the instruction sections, the warning callouts,
// and the disclaimer. Extracted from ProtocolTemplate so the single-procedure
// page and the /therapy-protocols/print-all packet render byte-identical bodies.
// The `.protocol-print-section` class lets the print stylesheet keep each block
// from splitting across page breaks.
export default function ProtocolBody({ data }: { data: ProcedureProtocol }) {
  const sections = data.sections?.filter((s) => s.heading || s.body?.length || s.bullets?.length) ?? [];

  return (
    <>
      {/* Instruction sections */}
      <div className="bg-white border border-navy-900/10 rounded-sm divide-y divide-navy-900/10">
        {sections.map((s, si) => (
          <div key={si} className="protocol-print-section p-8 lg:p-10">
            {s.heading && (
              <h2 className="font-serif text-xl md:text-2xl text-navy-950 tracking-[-0.01em] mb-4">
                {s.heading}
              </h2>
            )}
            {s.body?.map((p, pi) => (
              <p
                key={pi}
                className="text-navy-900/90 text-[16px] leading-[1.75] max-w-3xl [&:not(:last-child)]:mb-4"
              >
                {p}
              </p>
            ))}
            {s.bullets && s.bullets.length > 0 && (
              <ul className="mt-4 space-y-3">
                {s.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-baseline gap-3 text-[15.5px] leading-[1.7] text-navy-900/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0 translate-y-[6px]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Warning callouts */}
      {(data.warnings?.length > 0 || data.erWarnings?.length > 0) && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.warnings?.length > 0 && (
            <div className="protocol-print-section border border-gold-500/40 bg-gold-500/[0.07] rounded-sm p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertCircle size={18} className="text-gold-600 shrink-0" strokeWidth={1.9} />
                <span className="kicker text-gold-600">Call the office immediately for</span>
              </div>
              <ul className="space-y-2.5">
                {data.warnings.map((w, wi) => (
                  <li key={wi} className="flex items-baseline gap-2.5 text-[14.5px] leading-[1.6] text-navy-900/90">
                    <span className="h-1 w-1 rounded-full bg-gold-600 shrink-0 translate-y-[7px]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {data.erWarnings?.length > 0 && (
            <div className="protocol-print-section border border-red-700/30 bg-red-700/[0.05] rounded-sm p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertTriangle size={18} className="text-red-700 shrink-0" strokeWidth={1.9} />
                <span className="kicker text-red-700">Go to the ER immediately for</span>
              </div>
              <ul className="space-y-2.5">
                {data.erWarnings.map((w, wi) => (
                  <li key={wi} className="flex items-baseline gap-2.5 text-[14.5px] leading-[1.6] text-navy-900/90">
                    <span className="h-1 w-1 rounded-full bg-red-700 shrink-0 translate-y-[7px]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Disclaimer */}
      {data.disclaimer && (
        <p className="mt-8 text-navy-900/70 text-[14px] leading-[1.7] italic">{data.disclaimer}</p>
      )}
    </>
  );
}
