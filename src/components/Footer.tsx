import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  ["Instagram", "https://www.instagram.com/tranqill_tribe/"],
  ["TikTok", "https://www.tiktok.com/@tranqilltribe"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-10">
      <div className="brand-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <Image
            src="/logos/logo.png"
            alt="Tranqill Tribe logo"
            width={54}
            height={54}
            className="rounded-full"
          />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.28em]">
              Tranqill Tribe
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/40 sm:tracking-[0.22em]">
              Music for the emotionally awake.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs uppercase tracking-[0.18em] text-white/45 sm:gap-6 sm:tracking-[0.22em]">
          <Link href="#music" className="min-h-10 py-3 transition hover:text-white">
            Music
          </Link>
          <Link href="#shows" className="min-h-10 py-3 transition hover:text-white">
            Shows
          </Link>
          <Link href="#contact" className="min-h-10 py-3 transition hover:text-white">
            Contact
          </Link>
          {socialLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-10 py-3 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
