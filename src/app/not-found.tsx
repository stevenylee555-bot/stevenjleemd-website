import Link from "next/link";
import { ArrowUpRight, Calendar, ExternalLink, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative bg-navy-950 text-white min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-3xl" />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/60 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
        <div className="font-serif text-[clamp(6rem,16vw,12rem)] leading-none text-gold-400/30 mb-4 select-none">
          404
        </div>
        <div className="kicker text-gold-400 mb-6">Page not found</div>
        <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] mb-8">
          That page isn&apos;t here —{" "}
          <span className="serif-italic text-gold-400">but Dr. Lee is.</span>
        </h1>
        <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-12 font-light">
          The link may be outdated, or the page is still being prepared. Use the navigation above,
          return home, or book directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-md transition-all shadow-[0_10px_30px_-12px_rgba(201,168,76,0.5)] hover:-translate-y-0.5"
          >
            <Home size={16} />
            Back to home
          </Link>
          <a
            href="https://www.zocdoc.com/doctor/steven-lee-md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all font-medium"
          >
            <Calendar size={16} />
            Book via ZocDoc
            <ExternalLink size={12} className="opacity-70" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 rounded-md transition-all font-medium"
          >
            Contact the office
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
