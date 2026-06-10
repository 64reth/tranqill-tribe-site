"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <div className="mx-auto max-w-xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/45">
          Tranqill Tribe
        </p>
        <h1 className="text-4xl font-black uppercase tracking-[0.14em] sm:text-6xl">
          Something went out of phase.
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-base leading-7 text-white/60">
          Refresh the page or return home.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="elastic-motion border border-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] transition hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-black"
          >
            Refresh
          </button>
          <Link
            href="/"
            className="elastic-motion border border-white/25 px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:-translate-y-0.5 hover:scale-105 hover:border-white hover:text-white"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
