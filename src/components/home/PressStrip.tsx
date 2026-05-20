const press = [
  "Castle Connolly Top Doctor",
  "NY Times Super Doctors",
  "U.S. News & World Report",
  "New York Magazine Best Doctors",
  "Vitals Compassionate Doctor",
  "Healthgrades Top Surgeon",
];

export default function PressStrip() {
  // Duplicate the list so the marquee can loop seamlessly.
  const doubled = [...press, ...press];

  return (
    <section
      aria-label="Press recognition"
      className="relative bg-navy-950 text-white/55 border-t border-white/[0.06] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center gap-8">
        <div className="hidden md:block shrink-0 kicker text-gold-500/80">
          As featured in
        </div>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee whitespace-nowrap will-change-transform">
            {doubled.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-3 px-8 shrink-0"
              >
                <span className="h-1 w-1 rounded-full bg-gold-500/60" />
                <span className="font-serif text-sm md:text-base tracking-wide text-white/65 font-light">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
