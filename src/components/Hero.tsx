import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-stage.png')] bg-cover bg-center opacity-65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.58)_48%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black" />

      <div className="brand-container relative z-10 pt-28 text-center">
        <p className="tribal-line mb-8 text-white/70">╱╲╱╲╱╲╱╲╱╲</p>

        <h1 className="mx-auto max-w-6xl text-6xl font-black uppercase tracking-[0.16em] sm:text-8xl lg:whitespace-nowrap lg:text-9xl">
          Tranqill Tribe
        </h1>

        <div className="mx-auto mt-8 max-w-3xl space-y-2 text-lg leading-8 text-white/75 sm:text-xl">
          <p>Music that moves the body.</p>
          <p>Sound that wakes the soul.</p>
        </div>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="#music"
            className="border border-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] transition hover:bg-white hover:text-black"
          >
            Listen Now
          </Link>

          <Link
            href="#contact"
            className="border border-white/25 px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:border-white hover:text-white"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
