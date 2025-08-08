import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import SmoothScroll from "./smooth-scroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SeoJsonLd from "./components/SeoJsonLd";
import NoFlashScript from "./components/NoFlashScript";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: {
    default: "AB Digital — Sites web, SEO, Google Business, automatisation et IA",
    template: "%s | AB Digital",
  },
  description:
    "Agence digitale: sites web, SEO, Google Business, automatisation appels/SMS et offres IA — accompagnements mensuels.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    title: "AB Digital",
    description:
      "Sites web, SEO, Google Business, automatisation appels/SMS et offres IA — accompagnements mensuels.",
    url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
    siteName: "AB Digital",
    locale: "fr_FR",
  },
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${GeistSans.variable} ${GeistMono.variable} site-bg-fixed`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased site-bg text-[--text]">
        <NoFlashScript />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-neutral-900 focus:text-white focus:px-3 focus:py-2">Aller au contenu</a>
        <SmoothScroll />
        <SeoJsonLd />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
