import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

export type ComingSoonProps = {
  title: string;
  description: string;
  // Optional list of items teasing what'll appear here
  preview?: string[];
};

export default function ComingSoon({ title, description, preview }: ComingSoonProps) {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-gold-500" />
          <span className="kicker text-gold-600">In Progress</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.01em] text-navy-950 leading-[1.15] mb-6">
          {title}
        </h2>

        <p className="text-navy-900/80 text-lg leading-relaxed font-light max-w-2xl mb-10">
          {description}
        </p>

        {preview && preview.length > 0 && (
          <div className="border border-navy-900/10 rounded-sm bg-cream/60 p-6 lg:p-8 mb-10">
            <div className="kicker text-navy-900/80 mb-4">What this page will include</div>
            <ul className="space-y-3">
              {preview.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 text-[15px] text-navy-900/80"
                >
                  <span className="h-1 w-1 rounded-full bg-gold-500 shrink-0 translate-y-[2px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="hairline mb-10" />

        <p className="text-navy-900/80 text-base leading-relaxed mb-8">
          In the meantime, you can <strong className="text-navy-950 font-semibold">book an appointment</strong> directly,
          or contact the office with questions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.zocdoc.com/doctor/steven-lee-md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all shadow-[0_10px_30px_-12px_rgba(201,168,76,0.5)] hover:-translate-y-0.5"
          >
            <Calendar size={16} />
            Book via ZocDoc
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-navy-900/20 hover:border-navy-900 text-navy-900 hover:bg-cream rounded-md transition-all font-medium"
          >
            Contact the office
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
