import { WA_LINK_TEXT } from "@/lib/site";
import { ArrowUpRightIcon, WhatsAppIcon } from "@/components/icons";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export default function CtaBand({
  title = "Siap Meningkatkan Tampilan Bisnis Anda?",
  description = "Konsultasikan kebutuhan signage Anda sekarang dan dapatkan solusi terbaik dari tim Gradien Advertising.",
}: CtaBandProps) {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paper/70 sm:text-lg">{description}</p>
          </div>
          <a
            href={WA_LINK_TEXT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 bg-brand px-7 py-4 font-display text-xl font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Hubungi Kami
            <ArrowUpRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}