const pillars = [
  "Songwriting discipline",
  "Electronic production innovation",
  "Crowd psychology",
  "Melodic architecture",
  "Rhythmic engineering",
];

export default function Production() {
  return (
    <section id="production" className="section-padding bg-[#111111] text-white">
      <div className="brand-container">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
              Production
            </p>
            <h2 className="max-w-3xl text-4xl font-black uppercase tracking-[0.14em] sm:text-6xl">
              Records are built
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Tranqill Tribe develops songs from the ground up: disciplined
            songwriting, precise electronic production, artist development and
            the architecture required to create crossover records with emotional
            weight and club-scale impact.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => (
            <article
              key={pillar}
              className="border border-white/10 bg-black/20 p-6 transition hover:border-white/25 hover:bg-black/35"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-white/35">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 text-sm font-semibold uppercase leading-6 tracking-[0.18em] text-white/85">
                {pillar}
              </h3>
            </article>
          ))}
        </div>

        <blockquote className="mt-16 border-l border-white/25 pl-6 text-2xl font-black uppercase leading-tight tracking-[0.1em] text-white sm:max-w-3xl sm:text-4xl">
          &ldquo;What does this music make people feel?&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
