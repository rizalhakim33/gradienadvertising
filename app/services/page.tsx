import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan signage profesional: huruf timbul, neon box, neon sign, signage toko, dan billboard di Bandung. Desain custom sesuai brand Anda.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="inline-flex items-center gap-2 border border-paper/20 px-3 py-1.5 font-display text-sm font-semibold uppercase tracking-[0.25em] text-paper/80">
            <span className="h-2 w-2 bg-brand" aria-hidden="true" />
            Layanan Kami
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Pilih Layanan Signage Sesuai Kebutuhan
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
            Dari huruf timbul hingga billboard — setiap produk dirancang, diproduksi, dan
            dipasang dengan standar kualitas yang tinggi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Produk & Layanan"
          title="Signage untuk Brand yang Lebih Terlihat"
        />

        <div className="mt-16 space-y-20">
          {services.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={service.slug}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <div className="relative">
                    <div
                      className={
                        "absolute top-4 h-24 w-24 border-t-2 border-brand " +
                        (flip ? "-left-4 border-l-2" : "-right-4 border-r-2")
                      }
                      aria-hidden="true"
                    />
                    <div className="border border-ink/10 bg-paper-dark">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={service.imageWidth}
                        height={service.imageHeight}
                        className="h-auto w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className={flip ? "lg:order-1" : ""}>
                  <p className="flex items-center gap-3 font-display text-6xl font-bold uppercase text-brand-tinted">
                    {service.no}
                    <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight text-ink sm:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                    {service.shortDesc}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-8 inline-flex items-center gap-3 bg-brand px-6 py-3.5 font-display text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
                  >
                    Selengkapnya
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Butuh Solusi Signage Lainnya?"
        description="Hubungi kami untuk kebutuhan signage custom. Tim Gradien Advertising siap membantu dari konsultasi, desain, produksi, hingga instalasi."
      />
    </>
  );
}
