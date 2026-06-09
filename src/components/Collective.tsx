export default function Collective() {
  return (
    <section id="collective" className="bg-[#f5f5f5] py-24 text-black">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-black/50">
            The Collective
          </p>

          <h2 className="text-5xl font-black uppercase tracking-[0.14em] sm:text-6xl">
            A collective built on feeling
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-black/70">
            Tranqill Tribe functions less like a traditional production team and
            more like a creative think tank for sound — songwriters, producers
            and DJs working together to develop records that are melodically
            addictive, emotionally resonant and culturally scalable.
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">
            Names and faces remain secondary. In a world driven by visibility,
            the music deserves to stand on its own terms.
          </p>
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