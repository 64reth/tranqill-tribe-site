"use client";

import { useEffect, useRef, useState } from "react";
import { releases } from "@/data/releases";

const fallbackArtwork = "/logos/tranqill-circle.png";

type AudioStatus = "idle" | "playing" | "paused" | "error";

export default function Releases() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [audioStatus, setAudioStatus] = useState<AudioStatus>("idle");

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  async function togglePreview(preview: string, slug: string) {
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

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(preview);
    audioRef.current = audio;
    setActiveSlug(slug);
    setAudioStatus("playing");

    audio.addEventListener("ended", () => {
      if (audioRef.current === audio) {
        setAudioStatus("paused");
      }
    });

    audio.addEventListener("error", () => {
      if (audioRef.current === audio) {
        setAudioStatus("error");
      }
    });

    try {
      await audio.play();
    } catch {
      setAudioStatus("error");
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
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">
              Latest Releases
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[0.16em] sm:text-6xl">
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
              className="elastic-motion inline-flex border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/65 transition hover:-translate-y-0.5 hover:scale-105 hover:border-white hover:bg-white hover:text-black"
            >
              Listen Now
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {releases.map((release, index) => {
            const isPlaying =
              activeSlug === release.slug && audioStatus === "playing";
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
                    className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-black/20 text-sm text-white/75 backdrop-blur transition group-hover:border-white group-hover:bg-white group-hover:text-black"
                    aria-label={`${isPlaying ? "Pause" : "Play"} ${release.title} preview`}
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </button>
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
