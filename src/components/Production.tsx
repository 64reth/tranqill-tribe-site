export default function Production() {
  return (
    <section id="production" className="section-padding bg-[#111111] text-white">
      <div className="brand-container">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
              Songwriting & Production
            </p>
            <h2 className="max-w-3xl text-4xl font-black uppercase tracking-[0.14em] sm:text-6xl">
              Production
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-base leading-8 text-white/60 sm:text-lg">
            <p>Songwriting and production.</p>
            <p>
              Built to last longer than a release cycle.
            </p>
            <a
              href="#contact"
              className="elastic-motion inline-flex border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/65 transition hover:-translate-y-0.5 hover:scale-105 hover:border-white hover:bg-white hover:text-black"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
