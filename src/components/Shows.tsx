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
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/45">
              Live
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[0.14em] sm:text-6xl">
              Shows
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-black/65">
            Festival-scale DJ and hybrid electronic sets designed as emotional
            journeys rather than playlists.
          </p>
        </div>

        <div className="mt-14 border-y border-black/10">
          {shows.map(([date, city, status]) => (
            <div
              key={`${date}-${city}`}
              className="grid gap-3 border-b border-black/10 py-6 text-sm uppercase tracking-[0.18em] last:border-b-0 md:grid-cols-[1fr_1.4fr_0.5fr] md:items-center"
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
