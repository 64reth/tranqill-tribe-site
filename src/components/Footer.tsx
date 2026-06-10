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
        <div className="flex items-center gap-4">
          <Image
            src="/logos/logo.png"
            alt="Tranqill Tribe logo"
            width={54}
            height={54}
            className="rounded-full"
          />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em]">
              Tranqill Tribe
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/40">
              Music for the emotionally awake.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.22em] text-white/45">
          <Link href="#music" className="transition hover:text-white">
            Music
          </Link>
          <Link href="#shows" className="transition hover:text-white">
            Shows
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            Contact
          </Link>
          {socialLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
