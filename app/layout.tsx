import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { SITE } from "@/lib/site";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Jasa Signage & Reklame Profesional di Bandung — Gradien Advertising",
    template: "%s — Gradien Advertising",
  },
  description: SITE.description,
  keywords: [
    "jasa signage bandung",
    "huruf timbul bandung",
    "neon box bandung",
    "neon sign",
    "papan nama toko",
    "billboard",
    "reklame bandung",
    "jasa reklame",
  ],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: SITE.name,
    title: "Jasa Signage & Reklame Profesional di Bandung — Gradien Advertising",
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/images/hero.png", width: 1200, height: 900, alt: "Gradien Advertising" }],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#c1121f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}