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
import { SpeedInsights } from "@vercel/speed-insights/next";
import DeferredClient from "./components/DeferredClient";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AB Digital — Agence digitale: sites web, SEO, Google Business & automatisations IA",
    template: "%s | AB Digital",
  },
  description:
    "AB Digital conçoit des sites web rapides et optimisés, renforce votre SEO (dont Google Business) et met en place des automatisations IA (appels/SMS) pour générer plus d’appels, devis et ventes. Accompagnements mensuels, sans engagement.",
  keywords: [
    "agence digitale",
    "création de site web",
    "agence SEO",
    "Google Business Profile",
    "automatisation SMS",
    "automatisation d’appels",
    "marketing automation",
    "IA marketing",
    "accompagnement mensuel",
    "agence web France",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "AB Digital" }],
  category: "Marketing",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  openGraph: {
    type: "website",
    title: "AB Digital — Sites web, SEO, Google Business & automatisations IA",
    description:
      "Sites performants, SEO local et automatisations IA pour convertir plus et plus vite. Sans engagement.",
    url: siteUrl,
    siteName: "AB Digital",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "AB Digital — Agence digitale",
    description:
      "Sites web rapides, SEO local et automatisations IA pour générer plus d’appels, devis et ventes.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased gradient-background text-[--text] dark" data-halo-anim="on">
        <NoFlashScript />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-neutral-900 focus:text-white focus:px-3 focus:py-2">Aller au contenu</a>
        <SmoothScroll />
        <SeoJsonLd />
        <Header />
        <main id="main">{children}</main>
        <DeferredClient />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
