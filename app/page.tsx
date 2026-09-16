import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { SITE, WA_LINK, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jasa Signage & Reklame Profesional di Bandung",
  description:
    "Jasa desain, produksi, dan instalasi signage berkualitas di Bandung. Huruf timbul, neon box, neon sign, signage toko, dan billboard. Konsultasi gratis via WhatsApp.",
};

const stats = [
  { value: "1000+", label: "Proyek Selesai" },
  { value: "96%", label: "Pelanggan Puas" },
  { value: "10+", label: "Tim Profesional" },
];

const services = [
  {
    no: "01",
    title: "Huruf Timbul",
    desc: "Solusi signage elegan untuk toko, kantor, dan restoran agar brand terlihat profesional, rapi, dan mudah dikenali dari jarak jauh.",
    src: "/images/hero.png",
    width: 1024,
    height: 1024,
  },
  {
    no: "02",
    title: "Neon Box",
    desc: "Media signage bercahaya yang efektif menarik perhatian siang maupun malam. Cocok untuk usaha kuliner, retail, dan lainnya.",
    src: "/images/neonbox.png",
    width: 1024,
    height: 1024,
  },
  {
    no: "03",
    title: "Billboard",
    desc: "Media promosi berukuran besar yang meningkatkan awareness brand di area strategis dengan visibilitas tinggi.",
    src: "/images/billboard.jpg",
    width: 1024,
    height: 683,
  },
];

const values = [
  {
    no: "01",
    title: "Pengalaman & Keahlian",
    desc: "Didukung tim berpengalaman di industri signage untuk hasil yang rapi dan presisi.",
  },
  {
    no: "02",
    title: "Kustomisasi Penuh",
    desc: "Setiap desain disesuaikan dengan identitas brand dan kebutuhan bisnis Anda.",
  },
  {
    no: "03",
    title: "Garansi Kualitas",
    desc: "Menggunakan material pilihan dengan hasil signage yang kuat, awet, dan tahan cuaca.",
  },
];

const faqs = [
  {
    question: "Apa saja layanan signage yang disediakan Gradien Advertising?",
    answer:
      "Kami melayani berbagai kebutuhan signage dan reklame seperti neon box, huruf timbul, billboard, papan nama toko, hingga desain dan instalasi signage custom sesuai kebutuhan bisnis Anda.",
  },
  {
    question: "Apakah Gradien Advertising melayani area selain Bandung?",
    answer:
      "Ya. Selain Bandung, kami juga melayani pengerjaan signage untuk area Bandung Raya dan sekitarnya serta beberapa daerah di Jawa Barat, tergantung jenis proyek dan kebutuhan instalasi.",
  },
  {
    question: "Berapa lama proses pembuatan signage?",
    answer:
      "Waktu pengerjaan bervariasi tergantung jenis signage dan tingkat kerumitan desain. Rata-rata proses produksi memakan waktu 3–10 hari kerja setelah desain disetujui.",
  },
  {
    question: "Apakah bisa custom desain sesuai brand?",
    answer:
      "Tentu bisa. Kami menyediakan layanan desain custom yang disesuaikan dengan identitas brand, warna, konsep, dan kebutuhan visual bisnis Anda.",
  },
  {
    question: "Bagaimana cara konsultasi dan pemesanan signage?",
    answer:
      "Anda bisa menghubungi kami melalui tombol WhatsApp atau halaman kontak untuk konsultasi gratis sebelum menentukan jenis signage yang sesuai.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: "+6281223388546",
  email: SITE.email,
  image: `${SITE.url}/images/hero.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  areaServed: "Bandung dan sekitarnya",
  sameAs: [SITE.instagram, SITE.tiktok],
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-12 lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 border border-paper/20 px-3 py-1.5 font-display text-sm font-semibold uppercase tracking-[0.25em] text-paper/80">
              <span className="h-2 w-2 bg-brand" aria-hidden="true" />
              Jasa Signage &amp; Reklame Bandung
            </p>
            <h1 className="mt-6 font-display text-6xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Sekali Lihat,
              <br />
              Langsung <span className="text-brand-tint">Ingat.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
              Jasa desain, produksi, dan instalasi signage berkualitas dengan pengalaman
              lebih dari <strong className="font-semibold text-white">15 tahun</strong>.
              Dipercaya oleh UMKM, restoran, dan perusahaan untuk signage yang rapi,
              awet, dan tepat sasaran.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={waLink("Halo Gradien Advertising, saya ingin konsultasi gratis tentang signage.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand px-6 py-3.5 font-display text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Konsultasi Gratis
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 border border-paper/30 px-6 py-3.5 font-display text-lg font-semibold uppercase tracking-widest text-paper transition-colors hover:border-brand hover:text-brand-tint"
              >
                Lihat Layanan
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
            <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.25em] text-paper/50">
              Melayani {SITE.area}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-brand" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-brand" aria-hidden="true" />
            <div className="border border-paper/15 bg-paper-dark/5 p-2">
              <Image
                src="/images/hero.png"
                alt="Contoh signage huruf timbul Gradien Advertising"
                width={1024}
                height={1024}
                priority
                className="mx-auto h-auto max-h-[520px] w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-ink/10 bg-paper-dark">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-ink/10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-10 text-center sm:px-6">
              <p className="font-display text-5xl font-bold uppercase text-brand sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 font-display text-base font-semibold uppercase tracking-widest text-ink-soft">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TENTANG */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-4 -bottom-4 h-24 w-24 border-b-2 border-l-2 border-brand" aria-hidden="true" />
            <div className="border border-ink/10 bg-paper-dark">
              <Image
                src="/images/about-main.jpg"
                alt="Tim Gradien Advertising mengerjakan signage"
                width={960}
                height={960}
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-6 right-4 bg-brand px-5 py-4 text-white sm:right-8">
              <p className="font-display text-4xl font-bold uppercase leading-none">15+</p>
              <p className="mt-1 font-display text-sm font-semibold uppercase tracking-widest">
                Tahun Pengalaman
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Tentang Kami"
              title="Mitra Terpercaya untuk Solusi Signage Anda"
            />
            <p className="mt-6 leading-relaxed text-ink-soft">
              Gradien Advertising adalah penyedia jasa signage profesional yang fokus
              membantu bisnis tampil lebih menonjol dan mudah dikenali. Kami menggabungkan
              desain yang kuat, material berkualitas, dan proses instalasi yang rapi untuk
              menghasilkan signage yang tidak hanya menarik secara visual, tetapi juga tahan
              lama.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Desain kuat yang memperkuat identitas brand",
                "Material berkualitas, awet, dan tahan cuaca",
                "Proses instalasi rapi dan tepat waktu",
                "Pendekatan profesional dari konsultasi hingga pemasangan",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-brand text-white">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="leading-relaxed text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink("Halo Gradien Advertising, saya ingin mendapatkan penawaran signage.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-display text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand"
            >
              Dapatkan Penawaran
              <ArrowUpRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* PRODUK & LAYANAN */}
      <section className="border-y border-ink/10 bg-paper-dark">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Produk & Layanan"
              title="Signage yang Meningkatkan Visibilitas Brand"
            />
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-3 border border-ink/20 px-5 py-3 font-display text-base font-semibold uppercase tracking-widest text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Semua Layanan
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.no}
                className="group flex flex-col border border-ink/10 bg-paper"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.src}
                    alt={service.title}
                    width={service.width}
                    height={service.height}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 bg-brand px-2.5 py-1 font-display text-sm font-bold text-white">
                    {service.no}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {service.desc}
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 font-display text-base font-semibold uppercase tracking-widest text-brand transition-colors group-hover:text-brand-dark"
                  >
                    Baca Selengkapnya
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NILAI UNIK */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Nilai Unik Kami"
          title="Kenapa Memilih Gradien?"
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.no}
              className="group border-t-2 border-brand p-7 transition-colors hover:bg-ink"
            >
              <p className="font-display text-6xl font-bold uppercase text-brand-tinted transition-colors group-hover:text-brand">
                {value.no}
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-ink transition-colors group-hover:text-white">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft transition-colors group-hover:text-paper/70">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section className="border-t border-ink/10 bg-paper-dark">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Portofolio"
            title="Proyek Signage yang Pernah Kami Kerjakan"
            description="Berbagai proyek signage untuk beragam jenis usaha dan kebutuhan branding — dari toko, kafe, restoran, hingga billboard."
          />
          <div className="mt-14">
            <PortfolioGrid />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          align="center"
        />
        <div className="mt-12">
          <Faq items={faqs} />
        </div>
        <div className="mt-10 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand px-6 py-3.5 font-display text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Konsultasi Gratis
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}