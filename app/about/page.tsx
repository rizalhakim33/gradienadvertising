import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali Gradien Advertising, penyedia jasa signage profesional di Bandung yang menggabungkan inovasi, desain, dan karya berkualitas.",
};

const achievements = [
  {
    title: "Inovasi Desain",
    desc: "Menerapkan teknologi terkini untuk desain signage yang menarik dan efektif.",
  },
  {
    title: "Penghargaan Industri",
    desc: "Mendapatkan penghargaan sebagai penyedia signage terbaik dalam kategori inovasi.",
  },
  {
    title: "Kemitraan Strategis",
    desc: "Bermitra dengan berbagai perusahaan untuk menyediakan solusi signage terintegrasi.",
  },
  {
    title: "Proyek Besar",
    desc: "Menyelesaikan proyek signage besar yang berkontribusi pada branding klien secara signifikan.",
  },
];

const values = [
  {
    title: "Kualitas",
    desc: "Kami menghargai kualitas tinggi dalam setiap aspek pekerjaan, menggunakan bahan terbaik untuk menghasilkan signage yang tidak hanya menarik tetapi juga tahan lama, sehingga memenuhi harapan dan kebutuhan klien.",
  },
  {
    title: "Integritas & Transparansi",
    desc: "Integritas dan transparansi adalah landasan etika bisnis kami, memastikan setiap hubungan dengan klien dan mitra dibangun di atas kepercayaan dan komunikasi yang jujur.",
  },
  {
    title: "Inovasi Berkelanjutan",
    desc: "Kami percaya inovasi berkelanjutan adalah kunci untuk memberikan solusi signage yang memenuhi kebutuhan dinamis pasar dan klien, sehingga kami selalu mengembangkan teknologi dan desain terbaru.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="inline-flex items-center gap-2 border border-paper/20 px-3 py-1.5 font-display text-sm font-semibold uppercase tracking-[0.25em] text-paper/80">
            <span className="h-2 w-2 bg-brand" aria-hidden="true" />
            Tentang Kami
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Kenali Gradien Advertising
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
            Penyedia solusi signage unggul yang menggabungkan inovasi, desain, dan karya
            berkualitas untuk membantu bisnis Anda menonjol di pasar.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-brand" aria-hidden="true" />
            <div className="border border-ink/10 bg-paper-dark">
              <Image
                src="/images/about-main.jpg"
                alt="Gradien Advertising mengerjakan proyek signage"
                width={960}
                height={960}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink">
                Misi &amp; Visi
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Misi kami adalah menciptakan signage berkualitas tinggi yang membantu klien
                membangun identitas merek dan menarik perhatian pelanggan dengan solusi yang
                inovatif.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Visi kami adalah menjadi penyedia signage terkemuka yang diakui karena
                inovasi, kualitas, dan dedikasi dalam memenuhi kebutuhan pelanggan.
              </p>
            </div>

            <div className="mt-10 space-y-4 border border-ink/10 bg-paper-dark p-7">
              <p className="text-base leading-relaxed text-ink">
                Kami menawarkan berbagai layanan signage seperti <strong>huruf timbul</strong>,
                <strong> neon box</strong>, dan <strong>billboard</strong>. Keunggulan kami
                terletak pada pelayanan yang berfokus pada klien. Gradien Advertising telah
                mendapatkan pengakuan atas kualitas dan kreativitas dalam setiap proyek.
              </p>
              <p className="text-base leading-relaxed text-ink">
                Dengan pengalaman bertahun-tahun, kami berkomitmen untuk memberikan hasil
                terbaik bagi setiap kebutuhan signage Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper-dark">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Pencapaian Kami"
            title="Inovasi & Pencapaian yang Mengesankan"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {achievements.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-5 border border-ink/10 bg-paper p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand font-display text-2xl font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Nilai-Nilai Kami"
          title="Panduan Kami dalam Setiap Proyek"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <div key={value.title} className="flex flex-col border-t-2 border-brand p-7">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                0{i + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-wide text-ink">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{value.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-brand">
                <CheckIcon className="h-4 w-4" />
                Komitmen Kami
              </span>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}