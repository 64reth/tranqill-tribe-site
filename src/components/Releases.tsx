const releases = [
  "Healing Now",
  "Step Rise",
  "All U Need",
  "Bad Intentions",
  "Hardest Thing To Do",
  "Hurt People",
];

export default function Releases() {
  return (
    <section id="music" className="section-padding bg-black">
      <div className="brand-container">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">
              Latest Releases
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[0.16em] sm:text-6xl">
              The sound
            </h2>
          </div>

          <p className="hidden max-w-md text-right text-sm leading-7 text-white/50 md:block">
            Records built to hook instantly, resonate deeply and stay with
            listeners long after the final note fades.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {releases.map((title, index) => (
            <article
              key={title}
              className="group border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/40"
            >
              <div className="flex aspect-square items-center justify-center border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 transition group-hover:bg-white group-hover:text-black">
                  ▶
                </div>
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/40">
                0{index + 1}
              </p>

              <h3 className="mt-2 text-xl font-bold uppercase tracking-[0.12em]">
                {title}
              </h3>

              <p className="mt-2 text-sm text-white/45">Tranqill Tribe</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}