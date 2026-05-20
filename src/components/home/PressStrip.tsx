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
      aria-labelledby="press-strip-heading"
      className="relative bg-navy-950 text-white/65 border-t border-white/[0.06] border-b border-white/[0.06] overflow-hidden"
    >
      <h2 id="press-strip-heading" className="sr-only">Press recognition</h2>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center gap-8">
        <div className="hidden md:block shrink-0 kicker text-gold-400">
          As featured in
        </div>
        <div
          className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          aria-hidden="true"
        >
          <div className="flex animate-marquee whitespace-nowrap will-change-transform">
            {doubled.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-3 px-8 shrink-0"
              >
                <span className="h-1 w-1 rounded-full bg-gold-500/60" aria-hidden="true" />
                <span className="font-serif text-sm md:text-base tracking-wide text-white/75 font-light">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Screen-reader-only list of the same recognitions, without duplicates */}
        <ul className="sr-only">
          {press.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
