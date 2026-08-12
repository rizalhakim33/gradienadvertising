"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS, WA_LINK } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Gradien Advertising"
            width={150}
            height={47}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "font-display text-lg font-semibold uppercase tracking-widest transition-colors " +
                  (active ? "text-brand" : "text-ink hover:text-brand")
                }
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand px-5 py-2.5 font-display text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Hubungi Kami
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={"h-0.5 w-6 bg-ink transition-transform " + (open ? "translate-y-2 rotate-45" : "")} />
          <span className={"h-0.5 w-6 bg-ink transition-opacity " + (open ? "opacity-0" : "")} />
          <span className={"h-0.5 w-6 bg-ink transition-transform " + (open ? "-translate-y-2 -rotate-45" : "")} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-paper px-4 pb-6 pt-3 md:hidden" aria-label="Navigasi mobile">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    "border-b border-ink/5 py-3 font-display text-xl font-semibold uppercase tracking-widest " +
                    (active ? "text-brand" : "text-ink")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-brand px-5 py-3 font-display text-lg font-semibold uppercase tracking-widest text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Hubungi Kami
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}