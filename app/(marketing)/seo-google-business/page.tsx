import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "SEO local & Google Business — AB Digital",
  description:
    "Optimisez votre fiche Google Business et votre SEO local: posts, avis, pages locales et citations NAP.",
  alternates: { canonical: "/seo-google-business" },
  openGraph: {
    title: "SEO local & Google Business — AB Digital",
    description:
      "Remontez dans le Pack Local avec une fiche active, des pages locales optimisées et des avis.",
    type: "website",
    url: "/seo-google-business",
  },
};

export default function SeoGoogleBusinessPage() {
  return (
    <SectionPage
      title="SEO local & Google Business"
      description="Capter la demande qualifiée dans votre zone: fiche Google Business optimisée, pages locales efficaces et stratégie d’avis."
      tag="Service"
      toc={[
        { id: "fiche", label: "Fiche Google Business" },
        { id: "pages-locales", label: "Pages locales" },
        { id: "avis", label: "Avis & réputation" },
        { id: "mesure", label: "Mesure & reporting" },
        { id: "process", label: "Process" },
      ]}
    >
      <section id="fiche" className="space-y-3">
        <h2 className="text-2xl font-semibold">Fiche Google Business</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Catégories, attributs et description claire</li>
          <li>Posts hebdomadaires avec UTM</li>
          <li>Photos récentes et cohérence NAP</li>
        </ul>
      </section>

      <section id="pages-locales" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Pages locales</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Modèles ville/service, témoignages et FAQ</li>
          <li>Schema LocalBusiness et maillage interne</li>
          <li>Interconnexions avec la fiche</li>
        </ul>
      </section>

      <section id="avis" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Avis & réputation</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Demande d’avis systématisée (lien/QR)</li>
          <li>Réponses types et gestion des négatifs</li>
          <li>Intégration d’avis sur vos pages</li>
        </ul>
      </section>

      <section id="mesure" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Mesure & reporting</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>GA4, Search Console et statistiques Google Business</li>
          <li>Événements clés: clics téléphone, itinéraire, site</li>
          <li>Reporting mensuel actionnable</li>
        </ul>
      </section>

      <section id="process" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Process</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Audit fiche et visibilité locale (catégories, cohérence NAP)</li>
          <li>Plan d’actions: posts, avis, pages locales et interconnexions</li>
          <li>Exécution et suivi hebdomadaire</li>
          <li>Mesure et ajustements mensuels</li>
        </ol>
      </section>
    </SectionPage>
  );
}


