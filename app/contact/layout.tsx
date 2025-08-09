import type { Metadata } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Contact — AB Digital",
  description:
    "Parlez-nous de votre projet : site web, SEO (Google Business), automatisations appels/SMS et offres IA. Réponse rapide, sans engagement.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    type: "website",
    title: "Contact — AB Digital",
    description:
      "Discutons de vos objectifs : plus d’appels, de devis et de ventes grâce au SEO, à un site performant et à l’automatisation.",
    url: `${siteUrl}/contact`,
    siteName: "AB Digital",
    locale: "fr_FR",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



