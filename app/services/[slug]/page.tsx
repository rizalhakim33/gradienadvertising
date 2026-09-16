import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${SITE.url}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE.url}/services/${service.slug}`,
      images: [
        {
          url: service.image,
          width: service.imageWidth,
          height: service.imageHeight,
          alt: service.imageAlt,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE.url}/services/${service.slug}`,
    image: `${SITE.url}${service.image}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      url: SITE.url,
      telephone: "+6281223388546",
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.line1,
        addressLocality: "Bandung",
        addressRegion: "Jawa Barat",
        addressCountry: "ID",
      },
    },
    areaServed: "Bandung dan sekitarnya",
    serviceType: service.title,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="inline-flex items-center gap-2 border border-paper/20 px-3 py-1.5 font-display text-sm font-semibold uppercase tracking-[0.25em] text-paper/80">
            <span className="h-2 w-2 bg-brand" aria-hidden="true" />
            Layanan Kami
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Jasa {service.title} Bandung
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* DESKRIPSI + IMAGE */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-4 -bottom-4 h-24 w-24 border-b-2 border-l-2 border-brand" aria-hidden="true" />
            <div className="border border-ink/10 bg-paper-dark">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={service.imageWidth}
                height={service.imageHeight}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Tentang Layanan"
              title={`Apa Itu ${service.title}?`}
            />
            <p className="mt-6 leading-relaxed text-ink-soft sm:text-lg">
              {service.description}
            </p>
            <a
              href={waLink(
                `Halo Gradien Advertising, saya ingin konsultasi tentang ${service.title}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 bg-brand px-6 py-3.5 font-display text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
            >
              Konsultasi Gratis
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* DETAIL LAYANAN */}
      <section className="border-y border-ink/10 bg-paper-dark">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Detail Layanan"
            title="Pilihan yang Tersedia"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.details.map((detail) => (
              <div
                key={detail.label}
                className="border-t-2 border-brand bg-paper p-7"
              >
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                  {detail.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {detail.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-ink-soft"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          <Faq items={service.faqs} />
        </div>
      </section>

      {/* LAYANAN LAINNYA */}
      <section className="border-y border-ink/10 bg-paper-dark">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Layanan Lainnya"
            title="Signage Lainnya"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col border border-ink/10 bg-paper transition-colors hover:border-brand"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    width={s.imageWidth}
                    height={s.imageHeight}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 bg-brand px-2.5 py-1 font-display text-sm font-bold text-white">
                    {s.no}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {s.shortDesc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-display text-base font-semibold uppercase tracking-widest text-brand transition-colors group-hover:text-brand-dark">
                    Selengkapnya
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Butuh ${service.title}?`}
        description={`Hubungi kami untuk kebutuhan ${service.title.toLowerCase()} Anda. Tim Gradien Advertising siap membantu dari konsultasi, desain, produksi, hingga instalasi.`}
      />
    </>
  );
}
