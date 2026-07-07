import { ChevronRight } from "lucide-react";

// Shared FAQ accordion section. Callers emit the matching FAQPage schema
// themselves (buildFaqSchema) so schema stays a page-level, code-owned concern.
export default function FaqAccordion({
  kicker = "Patient questions",
  headline,
  faqs,
}: {
  kicker?: string;
  headline: string;
  faqs: Array<{ question: string; answer: string }>;
}) {
  if (!faqs.length) return null;
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 lg:py-24">
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-600">{kicker}</span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.02em] text-navy-950 leading-[1.1]">
            {headline}
          </h2>
        </div>
        <ul className="border-t border-navy-900/15">
          {faqs.map((faq, i) => (
            <li key={faq.question} className="border-b border-navy-900/15">
              <details className="group" open={i === 0}>
                <summary className="flex items-start justify-between gap-6 py-7 cursor-pointer list-none">
                  <span className="font-serif text-xl md:text-2xl text-navy-950 tracking-[-0.01em] leading-[1.3] group-hover:text-gold-600 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-navy-900/90 shrink-0 mt-1.5 transition-transform group-open:rotate-90"
                  />
                </summary>
                <p className="text-navy-900/90 text-[17px] leading-[1.7] pb-8 pr-12 max-w-3xl">
                  {faq.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
