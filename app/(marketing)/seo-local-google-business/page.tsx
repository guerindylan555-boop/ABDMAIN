import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "SEO local & Google Business — AB Digital",
  description:
    "Gagnez en visibilité locale avec l’optimisation SEO et Google Business: audit, contenus, avis et posts. Accompagnement mensuel, sans engagement.",
  alternates: { canonical: "/seo-local-google-business" },
  openGraph: {
    title: "SEO local & Google Business — AB Digital",
    description:
      "Optimisation Google Business, contenus SEO local et maillage interne pour capter la demande qualifiée dans votre zone.",
    type: "website",
    url: "/seo-local-google-business",
  },
};

export default function SeoLocalPage() {
  return (
    <SectionPage
      title="SEO local & Google Business"
      description="Remontez sur les requêtes locales et captez la demande qualifiée: optimisation on‑page, pages locales, fiche Google Business et gestion d’avis."
      tag="SEO"
      toc={[
        { id: "actions", label: "Ce que nous faisons" },
        { id: "kpi", label: "KPI suivis" },
      ]}
    >
      <section id="actions" className="space-y-3">
        <h2 className="text-2xl font-semibold">Ce que nous faisons</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Audit technique & sémantique</li>
          <li>On‑Page, maillage interne et pages locales</li>
          <li>Optimisation Google Business (profil, posts, gestion d’avis)</li>
          <li>Reporting mensuel et plan d’actions</li>
        </ul>
      </section>

      <section id="kpi" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">KPI suivis</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Positions, impressions et clics</li>
          <li>Actions (appels, itinéraires, clics site) depuis la fiche</li>
          <li>Leads organiques et taux de conversion local</li>
        </ul>
      </section>
    </SectionPage>
  );
}



