import type { Metadata } from "next";

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
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Nos services</h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        Nous concevons des sites web rapides, optimisons votre visibilité avec le SEO (dont Google Business) et automatisons vos relances
        appels/SMS pour convertir plus vite. Chaque mois, nous priorisons les actions à plus fort impact.
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Création de site web</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Design responsive & UX</li>
          <li>Core Web Vitals et vitesse 95+ Lighthouse</li>
          <li>CMS headless (Prismic)</li>
          <li>Formulaires & conformité RGPD</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">SEO & Google Business</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Audit technique & sémantique</li>
          <li>On‑Page, maillage interne et contenus optimisés</li>
          <li>Gestion de la fiche Google Business (posts/avis)</li>
          <li>Reporting mensuel</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Automatisations appels & SMS</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Rappels, séquences et relances</li>
          <li>Intégrations CRM (HubSpot, Notion…)</li>
          <li>Calendly / Click‑to‑call</li>
          <li>A/B testing et mesure des conversions</li>
        </ul>
      </section>
    </main>
  );
}



