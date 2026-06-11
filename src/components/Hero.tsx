import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-stage.png')] bg-cover bg-center opacity-65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.58)_48%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black" />

      <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
        <div className="w-full max-w-full px-5 pt-24 sm:px-6 sm:pt-28">
          <p className="tribal-line mb-7 text-white/70 sm:mb-8">
            ╱╲╱╲╱╲╱╲╱╲
          </p>

          <h1 className="hero-title mx-auto w-full max-w-full text-center font-black uppercase">
            <span className="block whitespace-nowrap lg:hidden">Tranqill</span>
            <span className="block whitespace-nowrap lg:hidden">Tribe</span>
            <span className="hidden whitespace-nowrap lg:block">
              Tranqill Tribe
            </span>
          </h1>

          <div className="mx-auto mt-7 max-w-3xl space-y-2 px-1 text-base leading-7 text-white/75 sm:mt-8 sm:text-xl sm:leading-8">
            <p>Music that moves the body.</p>
            <p>Sound that wakes the soul.</p>
          </div>

          <div className="mx-auto mt-10 flex w-full max-w-sm flex-col justify-center gap-4 sm:mt-12 sm:max-w-none sm:flex-row">
            <Link
              href="#music"
              className="flex min-h-12 w-full items-center justify-center border border-white px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] transition hover:bg-white hover:text-black sm:w-auto sm:px-8 sm:tracking-[0.28em]"
            >
              Listen Now
            </Link>

            <Link
              href="#contact"
              className="flex min-h-12 w-full items-center justify-center border border-white/25 px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:border-white hover:text-white sm:w-auto sm:px-8 sm:tracking-[0.28em]"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
