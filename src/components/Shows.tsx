const shows = [
  ["24 May 2026", "London, UK", "TBA"],
  ["06 Jun 2026", "Manchester, UK", "TBA"],
  ["21 Jun 2026", "Bristol, UK", "TBA"],
];

export default function Shows() {
  return (
    <section
      id="shows"
      className="section-padding relative overflow-hidden bg-[#f4f4f1] text-black"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/patterns/tribal-diamond-soft.png')] bg-[length:280px_280px] bg-center opacity-[0.05]" />

      <div className="brand-container relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.26em] text-black/45 sm:tracking-[0.35em]">
              Performance
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[0.12em] sm:text-6xl sm:tracking-[0.14em]">
              Shows
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-base leading-8 text-black/65 sm:text-lg">
            <p>Built for sound systems.</p>
            <p>
              DJ and hybrid electronic sets for clubs, festivals and
              dancefloors.
            </p>
            <a
              href="#contact"
              className="elastic-motion flex min-h-12 w-full items-center justify-center border border-black/20 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-black/65 transition hover:-translate-y-0.5 hover:scale-105 hover:border-black hover:bg-black hover:text-white sm:inline-flex sm:w-auto sm:tracking-[0.28em]"
            >
              Bookings
            </a>
          </div>
        </div>

        <div className="mt-14 border-y border-black/10">
          {shows.map(([date, city, status]) => (
            <div
              key={`${date}-${city}`}
              className="grid gap-3 border-b border-black/10 py-6 text-sm uppercase tracking-[0.14em] last:border-b-0 sm:tracking-[0.18em] md:grid-cols-[1fr_1.4fr_0.5fr] md:items-center"
            >
              <p className="font-semibold text-black">{date}</p>
              <p className="text-black/60">{city}</p>
              <p className="text-black/45 md:text-right">{status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
