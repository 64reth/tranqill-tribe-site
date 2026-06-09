import Image from "next/image";
import Link from "next/link";

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

        <div className="flex gap-6 text-xs uppercase tracking-[0.22em] text-white/45">
          <Link href="#music" className="hover:text-white">
            Music
          </Link>
          <Link href="#shows" className="hover:text-white">
            Shows
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
