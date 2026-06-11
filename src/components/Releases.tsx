"use client";

import { useEffect, useRef, useState } from "react";
import { releases } from "@/data/releases";

const fallbackArtwork = "/logos/tranqill-circle.png";

type AudioStatus = "idle" | "playing" | "paused" | "error";

export default function Releases() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playRequestRef = useRef(0);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [audioStatus, setAudioStatus] = useState<AudioStatus>("idle");
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      playRequestRef.current += 1;
      audioRef.current?.pause();
      audioRef.current?.removeAttribute("src");
      audioRef.current?.load();
      audioRef.current = null;
    };
  }, []);

  async function togglePreview(preview: string, slug: string) {
    if (pendingSlug) {
      return;
    }

    if (!preview) {
      setActiveSlug(slug);
      setAudioStatus("error");
      return;
    }

    if (activeSlug === slug && audioStatus === "playing") {
      audioRef.current?.pause();
      setAudioStatus("paused");
      return;
    }

    const requestId = playRequestRef.current + 1;
    playRequestRef.current = requestId;
    setPendingSlug(slug);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute("src");
      audioRef.current.load();
      audioRef.current = null;
    }

    const audio = new Audio(preview);
    audio.preload = "metadata";
    audioRef.current = audio;
    setActiveSlug(slug);

    audio.addEventListener("ended", () => {
      if (audioRef.current === audio && playRequestRef.current === requestId) {
        setAudioStatus("paused");
      }
    });

    audio.addEventListener("error", () => {
      if (audioRef.current === audio && playRequestRef.current === requestId) {
        setAudioStatus("error");
        setPendingSlug(null);
      }
    });

    try {
      await audio.play();
      if (audioRef.current === audio && playRequestRef.current === requestId) {
        setAudioStatus("playing");
      }
    } catch {
      if (audioRef.current === audio && playRequestRef.current === requestId) {
        setAudioStatus("error");
      }
    } finally {
      if (playRequestRef.current === requestId) {
        setPendingSlug(null);
      }
    }
  }

  function getStatusText(slug: string, preview: string) {
    if (activeSlug !== slug) {
      return preview ? "Preview" : "Preview unavailable";
    }

    if (audioStatus === "playing") {
      return "Playing";
    }

    if (audioStatus === "paused") {
      return "Paused";
    }

    if (audioStatus === "error") {
      return "Preview unavailable";
    }

    return preview ? "Preview" : "Preview unavailable";
  }

  return (
    <section id="music" className="section-padding bg-black text-white">
      <div className="brand-container">
        <div className="mb-12 grid gap-8 sm:mb-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.26em] text-white/50 sm:tracking-[0.35em]">
              Latest Releases
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[0.12em] sm:text-6xl sm:tracking-[0.16em]">
              The sound
            </h2>
          </div>

          <div className="max-w-3xl space-y-5 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            <p>Electronic music without borders.</p>
            <p>
              House, afro house, electronic soul and festival records.
            </p>
            <a
              href="#music"
              className="elastic-motion flex min-h-12 w-full items-center justify-center border border-white/20 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/65 transition hover:-translate-y-0.5 hover:scale-105 hover:border-white hover:bg-white hover:text-black sm:inline-flex sm:w-auto sm:tracking-[0.28em]"
            >
              Listen Now
            </a>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {releases.map((release, index) => {
            const isPlaying =
              activeSlug === release.slug && audioStatus === "playing";
            const isPending = pendingSlug === release.slug;
            const statusText = getStatusText(release.slug, release.preview);

            return (
              <article
                key={release.slug}
                className="group border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.05]"
              >
                <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),rgba(255,255,255,0.035)_42%,rgba(255,255,255,0.01)_100%)]">
                  <img
                    src={fallbackArtwork}
                    alt={`${release.title} artwork`}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <span className="absolute left-4 top-4 text-xs uppercase tracking-[0.28em] text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => togglePreview(release.preview, release.slug)}
                    disabled={Boolean(pendingSlug)}
                    className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/35 bg-black/20 text-xs font-semibold uppercase tracking-[0.08em] text-white/75 backdrop-blur transition group-hover:border-white group-hover:bg-white group-hover:text-black disabled:cursor-wait disabled:opacity-60 sm:h-14 sm:w-14 sm:text-sm sm:font-normal sm:normal-case sm:tracking-normal"
                    aria-label={`${isPlaying ? "Pause" : "Play"} ${release.title} preview`}
                  >
                    {isPending ? "Load" : isPlaying ? "Pause" : "Play"}
                  </button>
                </div>

                <h3 className="mt-5 overflow-wrap-anywhere text-lg font-bold uppercase tracking-[0.09em] text-white sm:text-xl sm:tracking-[0.12em]">
                  {release.title}
                </h3>

                <p className="mt-2 text-sm text-white/45">{release.artist}</p>

                <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 min-[430px]:flex-row min-[430px]:items-center min-[430px]:justify-between min-[430px]:gap-4">
                  <p className="min-w-0 text-xs uppercase tracking-[0.14em] text-white/35 sm:tracking-[0.22em]">
                    {release.bpm} BPM / {release.genre}
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-white/45 min-[430px]:text-right sm:tracking-[0.22em]">
                    {statusText}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
