// Print-only letterhead for post-op protocol handouts. Hidden on screen
// (`.print-only`), revealed by the @media print block in globals.css. Gives PAs
// a clean clinical header when they print or Save-as-PDF: practice identity,
// both office addresses, phone, and the procedure title.
export default function ProtocolPrintHeader({
  title,
  region,
}: {
  title: string;
  region?: string;
}) {
  return (
    <div className="print-only protocol-print-header">
      <div className="protocol-print-brand">
        <div className="protocol-print-name">Steven J. Lee, MD</div>
        <div className="protocol-print-contact">
          159 East 74th Street, New York, NY 10021 &nbsp;·&nbsp; 2 Overhill Road, Suite 310, Scarsdale, NY 10583
          <br />
          (212) 737-3301 &nbsp;·&nbsp; www.stevenjleemd.com
        </div>
      </div>
      <div className="protocol-print-title-block">
        <div className="protocol-print-kicker">
          Post-Operative Instructions{region ? ` · ${region}` : ""}
        </div>
        <h1 className="protocol-print-title">{title}</h1>
      </div>
    </div>
  );
}
