import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import SmoothScroll from "./smooth-scroll";

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
    <html lang="fr">
      <body className="antialiased bg-white text-neutral-900">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
