import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Site web sur‑mesure — AB Digital",
  description:
    "Créez un site vitrine rapide et orienté conversion: UX soignée, Core Web Vitals, CMS headless (Prismic) et tracking complet.",
  alternates: { canonical: "/site-web-sur-mesure" },
  openGraph: {
    title: "Site web sur‑mesure — AB Digital",
    description:
      "Sites rapides (95+ Lighthouse), UX claire et CMS headless. Formulaires, RGPD et mesure intégrés.",
    type: "website",
    url: "/site-web-sur-mesure",
  },
};

export default function SiteWebPage() {
  return (
    <SectionPage
      title="Site web sur‑mesure"
      description="Vitrine moderne, rapide et orientée conversion. Optimisée SEO et Core Web Vitals dès la conception, livrée avec un CMS simple et un tracking fiable."
      tag="Service"
      toc={[
        { id: "benefices", label: "Bénéfices" },
        { id: "livrables", label: "Livrables" },
        { id: "kpi", label: "KPI suivis" },
        { id: "process", label: "Méthode" },
        { id: "rgpd", label: "Tracking & RGPD" },
      ]}
    >
      <section id="benefices" className="space-y-3">
        <h2 className="text-2xl font-semibold">Bénéfices</h2>
        <p>
          Un site qui se charge vite, explique clairement votre valeur et convertit mieux vos visiteurs en demandes et
          en ventes. L’architecture de contenu est pensée pour le SEO dès le départ.
        </p>
      </section>

      <section id="livrables" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Livrables</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Design responsive, maquettes UI et systèmes de composants</li>
          <li>Implémentation Next.js avec optimisation des performances</li>
          <li>Contenus orientés bénéfices, preuves et CTA</li>
          <li>CMS headless (Prismic) et modèles de pages réutilisables</li>
        </ul>
      </section>

      <section id="kpi" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">KPI suivis</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Core Web Vitals (LCP/CLS/INP) et score Lighthouse</li>
          <li>Impressions, clics et conversions</li>
          <li>Formulaires soumis, appels et RDV</li>
        </ul>
      </section>

      <section id="process" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Méthode</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Audit rapide et cadrage (objectifs, personas, sitemap)</li>
          <li>Maquettes et contenu (bénéfices, preuves, CTA)</li>
          <li>Développement et optimisations de performance</li>
          <li>Recette, mise en ligne, suivi et évolutions</li>
        </ol>
      </section>

      <section id="rgpd" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Tracking & conformité</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Mise en place GA4, Search Console et objectifs clés</li>
          <li>Formulaires conformes RGPD (consentements, mentions)</li>
          <li>Dashboard simple pour suivre vos résultats</li>
        </ul>
      </section>
    </SectionPage>
  );
}


