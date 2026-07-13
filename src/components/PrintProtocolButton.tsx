"use client";

import { Printer } from "lucide-react";

// Triggers the browser print dialog, which doubles as "Save as PDF" in every
// modern browser. The @media print stylesheet (globals.css) strips the site
// chrome and formats the page as a clinical letterhead, so one button covers
// both printing and PDF export. Marked `.no-print` so it never appears in output.
export default function PrintProtocolButton({
  label = "Print / Save as PDF",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`no-print inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-navy-900/20 text-navy-900 hover:border-gold-500 hover:text-gold-600 rounded-md transition-colors text-[14px] font-medium ${className}`}
    >
      <Printer size={16} strokeWidth={1.9} />
      {label}
    </button>
  );
}
