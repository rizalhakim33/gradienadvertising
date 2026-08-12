import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE, WA_LINK } from "@/lib/site";
import { InstagramIcon, MailIcon, PhoneIcon, PinIcon, TikTokIcon, WhatsAppIcon } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo.png"
              alt="Gradien Advertising"
              width={150}
              height={47}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              Jasa signage &amp; reklame profesional di Bandung sejak 15+ tahun.
              Huruf timbul, neon box, neon sign, signage toko, dan billboard.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-widest text-white">
              Menu
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/70 transition-colors hover:text-brand-tint">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-widest text-white">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-paper/70">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 transition-colors hover:text-brand-tint"
                >
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-start gap-2 transition-colors hover:text-brand-tint">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-widest text-white">
              Ikuti Kami
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center border border-paper/20 text-paper/80 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-11 w-11 items-center justify-center border border-paper/20 text-paper/80 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center border border-paper/20 text-paper/80 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-wa px-4 py-2.5 font-display text-base font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-wa-dark hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row">
          <p>Hak Cipta © {year} {SITE.name}</p>
          <p>
            Signage • Reklame • Huruf Timbul • Neon Box di {SITE.area}
          </p>
        </div>
      </div>
    </footer>
  );
}