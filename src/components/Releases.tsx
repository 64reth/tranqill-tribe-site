"use client";

import { releases } from "@/data/releases";

export default function Releases() {
  return (
    <section id="music" className="section-padding bg-black text-white">
      <div className="brand-container">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">
              Latest Releases
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[0.16em] sm:text-6xl">
              The sound
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/50 md:text-right">
            Records built to hook instantly, resonate deeply and stay with
            listeners long after the final note fades.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {releases.map((release, index) => (
            <article
              key={release.slug}
              className="group border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.05]"
            >
              <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),rgba(255,255,255,0.035)_42%,rgba(255,255,255,0.01)_100%)]">
                {release.artwork && (
                  <img
                    src={release.artwork}
                    alt={`${release.title} artwork`}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                )}
                <span className="absolute left-4 top-4 text-xs uppercase tracking-[0.28em] text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-black/20 text-sm text-white/75 backdrop-blur transition group-hover:border-white group-hover:bg-white group-hover:text-black">
                  Play
                </div>
              </div>

              <h3 className="mt-5 text-lg font-bold uppercase tracking-[0.12em] text-white sm:text-xl">
                {release.title}
              </h3>

              <p className="mt-2 text-sm text-white/45">{release.artist}</p>

              <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                  {release.bpm} BPM / {release.genre}
                </p>
                <p className="text-right text-xs uppercase tracking-[0.22em] text-white/45">
                  {release.preview ? "Play Preview" : "Preview Coming Soon"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
