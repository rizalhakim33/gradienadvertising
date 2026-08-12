import type { Metadata } from "next";
import Image from "next/image";
import {
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { SITE, WA_LINK, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Gradien Advertising untuk kebutuhan signage dan reklame. Telepon/WhatsApp, email, dan alamat workshop di Bandung.",
};

const contactCards = [
  {
    label: "Telepon / WhatsApp",
    value: SITE.phoneDisplay,
    sub: "Fast response untuk konsultasi & penawaran",
    href: WA_LINK,
    icon: PhoneIcon,
    external: true,
  },
  {
    label: "Email",
    value: SITE.email,
    sub: "Untuk proposal dan kebutuhan resmi",
    href: `mailto:${SITE.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "Alamat",
    value: `${SITE.address.line1}, ${SITE.address.line2}`,
    sub: "Antapani, Bandung",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${SITE.address.line1}, Bandung`,
    )}`,
    icon: PinIcon,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="inline-flex items-center gap-2 border border-paper/20 px-3 py-1.5 font-display text-sm font-semibold uppercase tracking-[0.25em] text-paper/80">
            <span className="h-2 w-2 bg-brand" aria-hidden="true" />
            Hubungi Kami
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Kami Siap Membantu Anda
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
            Silakan hubungi kami untuk pertanyaan atau kolaborasi. Kami siap menjawab
            kebutuhan signage dan periklanan Anda dengan cepat dan profesional.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="absolute -left-4 -bottom-4 h-24 w-24 border-b-2 border-l-2 border-brand" aria-hidden="true" />
              <div className="border border-ink/10 bg-paper-dark">
                <Image
                  src="/images/contact.png"
                  alt="Contoh neon sign branding"
                  width={1024}
                  height={1024}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-2">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-start gap-5 border border-ink/10 bg-paper-dark p-6 transition-colors hover:border-brand"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand text-white transition-colors group-hover:bg-brand-dark">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand">
                      {card.label}
                    </p>
                    <p className="mt-1.5 break-words font-semibold text-ink">{card.value}</p>
                    <p className="mt-1 text-sm text-ink-soft">{card.sub}</p>
                  </div>
                </a>
              );
            })}

            <div className="flex items-start gap-5 border border-ink/10 bg-paper-dark p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink text-white">
                <InstagramIcon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand">
                  Ikuti Kami
                </p>
                <div className="mt-2.5 flex flex-wrap gap-3">
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-ink/15 px-3 py-1.5 font-display text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {SITE.instagramHandle}
                  </a>
                  <a
                    href={SITE.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-ink/15 px-3 py-1.5 font-display text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    <TikTokIcon className="h-4 w-4" />
                    {SITE.tiktokHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border border-ink/10 bg-ink px-6 py-12 text-center sm:px-12">
          <p className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Lebih Cepat Via WhatsApp
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-paper/70 sm:text-base">
            Kirim pertanyaan atau kebutuhan signage Anda sekarang. Tim kami akan merespons
            dengan penawaran dan konsultasi gratis.
          </p>
          <a
            href={waLink("Halo Gradien Advertising, saya ingin konsultasi tentang signage.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-wa px-7 py-4 font-display text-xl font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-wa-dark hover:text-white"
          >
            <WhatsAppIcon className="h-6 w-6" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}