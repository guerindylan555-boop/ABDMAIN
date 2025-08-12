import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Publicité payante (Google & Meta Ads) — AB Digital",
  description:
    "Générez un trafic qualifié rapidement avec Google Ads et Meta Ads. Structure de comptes, créas, suivi des conversions (GA4) et optimisation hebdomadaire.",
  alternates: { canonical: "/publicite-payante" },
  openGraph: {
    title: "Publicité payante (Google & Meta Ads) — AB Digital",
    description:
      "Campagnes orientées business: acquisition rapide, suivi fiable et ROAS en progression.",
    type: "website",
    url: "/publicite-payante",
  },
};

export default function PublicitePayantePage() {
  return (
    <SectionPage
      title="Publicité payante (Google Ads, Meta Ads)"
      description="Trafic qualifié rapide, suivi fiable et optimisation continue. Focus sur le CPA/CPL, la qualité des leads et le ROAS."
      tag="Paid"
      toc={[
        { id: "offre", label: "Ce que nous faisons" },
        { id: "process", label: "Process" },
        { id: "kpi", label: "KPI" },
        { id: "tracking", label: "Tracking" },
        { id: "faq", label: "FAQ" },
      ]}
    >
      <section id="offre" className="space-y-3">
        <h2 className="text-2xl font-semibold">Ce que nous faisons</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Audit des comptes et structure orientée objectifs</li>
          <li>Recherche de mots‑clés/audiences et créas adaptées</li>
          <li>Suivi des conversions GA4 et tagging cohérent</li>
          <li>Optimisations hebdomadaires et tests</li>
        </ul>
      </section>

      <section id="process" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Process</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Audit et plan média (objectifs, budget, canaux)</li>
          <li>Création/Refonte des campagnes et des créas</li>
          <li>Suivi quotidien, optimisations hebdo</li>
          <li>Reporting mensuel et recommandations</li>
        </ol>
      </section>

      <section id="kpi" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">KPI</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>CPA/CPL, ROAS, taux de conversion</li>
          <li>Qualité des leads et volume de ventes</li>
          <li>Score de qualité/mise en concurrence</li>
        </ul>
      </section>

      <section id="tracking" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Tracking</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>GA4 + conversions importées dans Google Ads/Meta</li>
          <li>Événements: formulaires, clics call, RDV, ventes</li>
          <li>Tableau de bord lisible et actionnable</li>
        </ul>
      </section>

      <section id="faq" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Budget conseillé, délais et mode de collaboration</li>
          <li>Créas: incluses ou optionnelles selon l’offre</li>
          <li>Optimisation par objectifs business, pas seulement par clics</li>
        </ul>
      </section>
    </SectionPage>
  );
}


