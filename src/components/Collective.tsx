export default function Collective() {
  return (
    <section id="collective" className="relative overflow-hidden bg-[#f5f5f5] py-24 text-black">
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/tribal-diamond-soft.png')] bg-[length:280px_280px] bg-center opacity-[0.05]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-black/50">
            The Collective
          </p>

          <h2 className="text-5xl font-black uppercase tracking-[0.14em] sm:text-6xl">
            The Collective
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-lg leading-8 text-black/70">
            <p>A songwriting, production and performance collective.</p>
            <p>Built around melody, rhythm and feeling.</p>
          </div>

          <a
            href="#collective"
            className="elastic-motion mt-10 inline-flex border border-black/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/65 transition hover:-translate-y-0.5 hover:scale-105 hover:border-black hover:bg-black hover:text-white"
          >
            The Collective
          </a>
        </div>

        <div className="flex aspect-square items-center justify-center rounded-full border border-black/10 bg-black/5 p-12">
          <img
            src="/logos/logo.png"
            alt="Tranqill Tribe logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
