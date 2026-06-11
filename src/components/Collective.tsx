export default function Collective() {
  return (
    <section id="collective" className="relative overflow-hidden bg-[#f5f5f5] py-20 text-black sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/tribal-diamond-soft.png')] bg-[length:280px_280px] bg-center opacity-[0.05]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 md:grid-cols-[1fr_0.75fr] md:items-center lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.26em] text-black/50 sm:mb-6 sm:tracking-[0.35em]">
            The Collective
          </p>

          <h2 className="text-4xl font-black uppercase tracking-[0.1em] sm:text-6xl sm:tracking-[0.14em]">
            The Collective
          </h2>

          <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-black/70 sm:mt-8 sm:text-lg">
            <p>A songwriting, production and performance collective.</p>
            <p>Built around melody, rhythm and feeling.</p>
          </div>

          <a
            href="#collective"
            className="elastic-motion mt-9 flex min-h-12 w-full items-center justify-center border border-black/20 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-black/65 transition hover:-translate-y-0.5 hover:scale-105 hover:border-black hover:bg-black hover:text-white sm:mt-10 sm:inline-flex sm:w-auto sm:tracking-[0.28em]"
          >
            The Collective
          </a>
        </div>

        <div className="mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center rounded-full border border-black/10 bg-black/5 p-9 sm:max-w-[360px] sm:p-12 lg:max-w-none">
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
