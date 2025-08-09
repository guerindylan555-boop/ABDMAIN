import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Services — AB Digital",
  description:
    "Découvrez nos services: création de sites web performants, SEO (Google Business) et automatisations appels/SMS avec IA. Accompagnement mensuel, sans engagement.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — AB Digital",
    description:
      "Sites web rapides, SEO local et automatisations IA pour générer plus d’appels, de devis et de ventes.",
    type: "website",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <SectionPage
      title="Nos services"
      description="Sites performants, SEO local, automatisations IA. Focus ROI et accompagnement mensuel."
      tag="Services"
      toc={[
        { id: "web", label: "Création de site web" },
        { id: "seo", label: "SEO & Google Business" },
        { id: "auto", label: "Automatisations appels & SMS" },
      ]}
    >
      <section id="web" className="space-y-3">
        <h2 className="text-2xl font-semibold">Création de site web</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Design responsive & UX</li>
          <li>Core Web Vitals et vitesse 95+ Lighthouse</li>
          <li>CMS headless (Prismic)</li>
          <li>Formulaires & conformité RGPD</li>
        </ul>
      </section>

      <section id="seo" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">SEO & Google Business</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Audit technique & sémantique</li>
          <li>On‑Page, maillage interne et contenus optimisés</li>
          <li>Gestion de la fiche Google Business (posts/avis)</li>
          <li>Reporting mensuel</li>
        </ul>
      </section>

      <section id="auto" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Automatisations appels & SMS</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Rappels, séquences et relances</li>
          <li>Intégrations CRM (HubSpot, Notion…)</li>
          <li>Calendly / Click‑to‑call</li>
          <li>A/B testing et mesure des conversions</li>
        </ul>
      </section>
    </SectionPage>
  );
}



