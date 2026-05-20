import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type PageHeaderProps = {
  kicker?: string;
  title: string;
  italic?: string;
  lede?: string;
  breadcrumb?: { label: string; href: string }[];
};

export default function PageHeader({
  kicker,
  title,
  italic,
  lede,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden="true">
          <defs>
            <pattern
              id="phgrid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 64 0 L 0 0 0 64"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#phgrid)" />
        </svg>
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-white/50 mb-8"
          >
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-2">
                <Link
                  href={b.href}
                  className="hover:text-gold-400 transition-colors uppercase tracking-wider"
                >
                  {b.label}
                </Link>
                {i < breadcrumb.length - 1 && (
                  <ChevronRight size={12} className="opacity-50" />
                )}
              </span>
            ))}
          </nav>
        )}

        {kicker && (
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold-500" />
            <span className="kicker text-gold-400">{kicker}</span>
          </div>
        )}

        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.04] tracking-[-0.02em] text-white max-w-4xl">
          {title}{" "}
          {italic && (
            <span className="serif-italic text-gold-400">{italic}</span>
          )}
        </h1>

        {lede && (
          <p className="mt-8 text-white/65 text-lg md:text-xl leading-[1.6] font-light max-w-2xl">
            {lede}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
