export const SITE = {
  name: "Gradien Advertising",
  tagline: "Sekali Lihat, Langsung Ingat",
  description:
    "Jasa signage profesional di Bandung: huruf timbul, neon box, neon sign, dan billboard. Pengalaman 15+ tahun.",
  url: "https://gradienadvertising.com",
  phoneDisplay: "+62 812-2338-8546",
  phoneWaLegacy: "6281223388546",
  email: "gradien.adv@gmail.com",
  address: {
    line1: "Jl Cibodas Raya No. 17 Antapani",
    line2: "Bandung, Jawa Barat, Indonesia",
  },
  area: "Bandung dan sekitarnya",
  instagram: "https://instagram.com/gradien.adv",
  instagramHandle: "@gradien.adv",
  tiktok: "https://www.tiktok.com/@gradienadvertising",
  tiktokHandle: "@gradienadvertising",
};

export const WA_LINK = `https://wa.me/${SITE.phoneWaLegacy}`;
export const WA_LINK_TEXT = `${WA_LINK}?text=${encodeURIComponent(
  "Halo Gradien Advertising, saya ingin konsultasi tentang signage.",
)}`;

export function waLink(message: string) {
  return `https://wa.me/${SITE.phoneWaLegacy}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/services", label: "Layanan" },
  { href: "/contact", label: "Kontak" },
];