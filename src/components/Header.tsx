"use client";

import { useEffect, useState } from "react";

const navLinks = [
  ["Music", "#music"],
  ["Collective", "#collective"],
  ["Production", "#production"],
  ["Shows", "#shows"],
  ["Contact", "#contact"],
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
      className={`fixed top-0 z-50 w-full px-5 py-3 text-white transition duration-500 sm:px-6 ${
        isScrolled || isMenuOpen
          ? "border-b border-white/10 bg-black/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#home"
          onClick={closeMenu}
          className="elastic-motion group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:scale-[1.015] hover:text-white"
        >
          <img
            src="/logos/logo.png"
            alt=""
            className="elastic-motion h-12 w-12 rounded-full object-cover opacity-85 ring-1 ring-white/15 transition group-hover:scale-105 group-hover:opacity-100 md:h-14 md:w-14"
          />
          <span>Tranqill Tribe</span>
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
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="elastic-motion flex h-12 w-12 flex-col items-center justify-center gap-2 border border-white/15 text-white/75 transition hover:scale-105 hover:border-white/40 hover:text-white active:scale-95 md:hidden"
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
        <nav className="mobile-menu-panel elastic-motion mx-auto mt-4 grid max-w-7xl origin-top gap-2 border-t border-white/10 bg-black/70 py-6 backdrop-blur-xl transition md:hidden">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="elastic-motion py-3 text-sm uppercase tracking-[0.28em] text-white/65 transition hover:translate-x-1 hover:scale-[1.02] hover:text-white active:scale-[0.99]"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="elastic-motion mt-4 border border-white/25 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-white/75 transition hover:scale-[1.02] hover:bg-white hover:text-black active:scale-[0.99]"
          >
            Enquire
          </a>
        </nav>
      )}
    </header>
  );
}
