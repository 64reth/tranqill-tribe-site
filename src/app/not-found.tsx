import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <div className="mx-auto max-w-xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/45">
          Tranqill Tribe
        </p>
        <h1 className="text-4xl font-black uppercase tracking-[0.14em] sm:text-6xl">
          Signal not found.
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-base leading-7 text-white/60">
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link
          href="/"
          className="elastic-motion mt-10 inline-flex border border-white/25 px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:-translate-y-0.5 hover:scale-105 hover:border-white hover:bg-white hover:text-black"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
