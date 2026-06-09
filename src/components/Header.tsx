export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 px-6 py-4 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em]">
          <img
            src="/logos/logo.png"
            alt=""
            className="h-9 w-9 rounded-full object-cover ring-1 ring-white/15"
          />
          <span>Tranqill Tribe</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          <a href="#music" className="text-xs uppercase tracking-[0.25em] text-white/60">
            Music
          </a>
          <a href="#collective" className="text-xs uppercase tracking-[0.25em] text-white/60">
            Collective
          </a>
          <a href="#shows" className="text-xs uppercase tracking-[0.25em] text-white/60">
            Shows
          </a>
          <a href="#contact" className="text-xs uppercase tracking-[0.25em] text-white/60">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
