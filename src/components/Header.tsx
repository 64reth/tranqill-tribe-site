"use client";

import { useEffect, useState } from "react";

const navLinks = [
  ["Music", "#music"],
  ["Collective", "#collective"],
  ["Production", "#production"],
  ["Shows", "#shows"],
  ["Contact", "#contact"],
];

const socialLinks = [
  ["IG", "Instagram", "https://www.instagram.com/tranqill_tribe/"],
  ["TT", "TikTok", "https://www.tiktok.com/@tranqilltribe"],
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full px-4 py-3 text-white transition duration-500 sm:px-6 ${
        isScrolled || isMenuOpen
          ? "border-b border-white/10 bg-black/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="elastic-motion group flex min-w-0 items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:scale-[1.015] hover:text-white min-[375px]:gap-3 min-[375px]:tracking-[0.24em] sm:text-xs sm:tracking-[0.35em]"
        >
          <img
            src="/logos/logo.png"
            alt=""
            className="elastic-motion h-10 w-10 shrink-0 rounded-full object-cover opacity-85 ring-1 ring-white/15 transition group-hover:scale-105 group-hover:opacity-100 min-[375px]:h-11 min-[375px]:w-11 sm:h-12 sm:w-12 md:h-14 md:w-14"
          />
          <span className="truncate">Tranqill Tribe</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="elastic-motion text-xs uppercase tracking-[0.25em] text-white/55 transition hover:-translate-y-0.5 hover:scale-105 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="elastic-motion border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition hover:-translate-y-0.5 hover:scale-105 hover:border-white hover:bg-white hover:text-black"
          >
            Enquire
          </a>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            {socialLinks.map(([shortLabel, label, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="elastic-motion text-xs uppercase tracking-[0.25em] text-white/45 transition hover:-translate-y-0.5 hover:scale-105 hover:text-white"
              >
                {shortLabel}
              </a>
            ))}
          </div>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="elastic-motion flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-2 border border-white/15 text-white/75 transition hover:scale-105 hover:border-white/40 hover:text-white active:scale-95 min-[375px]:h-12 min-[375px]:w-12 md:hidden"
        >
          <span
            className={`elastic-motion h-0.5 w-6 bg-current transition ${
              isMenuOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`elastic-motion h-0.5 w-6 bg-current transition ${
              isMenuOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="mobile-menu-panel elastic-motion mx-auto mt-4 grid max-w-7xl origin-top gap-2 border-t border-white/10 bg-black/70 py-5 backdrop-blur-xl transition md:hidden">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="elastic-motion flex min-h-12 items-center py-3 text-sm uppercase tracking-[0.24em] text-white/65 transition hover:translate-x-1 hover:scale-[1.02] hover:text-white active:scale-[0.99] sm:tracking-[0.28em]"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="elastic-motion mt-4 flex min-h-12 items-center justify-center border border-white/25 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white/75 transition hover:scale-[1.02] hover:bg-white hover:text-black active:scale-[0.99] sm:tracking-[0.28em]"
          >
            Enquire
          </a>
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
            {socialLinks.map(([, label, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="elastic-motion flex min-h-12 items-center justify-center border border-white/15 px-3 py-4 text-center text-xs uppercase tracking-[0.18em] text-white/60 transition hover:scale-[1.02] hover:border-white/35 hover:text-white active:scale-[0.99] min-[375px]:tracking-[0.24em] sm:px-5 sm:tracking-[0.28em]"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
