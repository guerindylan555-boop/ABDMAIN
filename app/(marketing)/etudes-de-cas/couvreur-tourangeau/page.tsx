import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Étude de cas — Couvreur Tourangeau (Toiture & zinguerie à Tours) | AB Digital",
  description:
    "Top‑3 sur 'couvreur Tours' & 'démoussage toiture Tours'. 10 études de cas publiées et +25 avis en 90 jours.",
  alternates: { canonical: "/etudes-de-cas/couvreur-tourangeau" },
  openGraph: {
    title: "Étude de cas — Couvreur Tourangeau",
    description:
      "SEO local, pages services et études de cas pour se positionner en Top‑3 sur les requêtes prioritaires à Tours.",
    type: "article",
    url: "/etudes-de-cas/couvreur-tourangeau",
  },
};

export default function CaseStudyPage() {
  return (
    <SectionPage
      title="Couvreur Tourangeau — Couvreur à Saint‑Avertin / Tours"
      description="SEO local et contenu d’autorité pour l’ardoise/zinc, urgences 48h et conformité ABF."
      tag="Étude de cas"
      toc={[
        { id: "contexte", label: "Contexte & objectifs" },
        { id: "actions", label: "Actions clés" },
        { id: "resultats", label: "Résultats" },
        { id: "faq", label: "FAQ" },
      ]}
    >
      <section id="contexte" className="space-y-3">
        <h2 className="text-2xl font-semibold">Contexte & objectifs</h2>
        <p>
          Couvreur basé au <strong>3 Rue Mirabeau, 37550 Saint‑Avertin</strong>, intervenant sur Tours Métropole. Positionnement fort sur la rénovation ardoise/zinc et les urgences 48h.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Catégorie Google Business: Couvreur</li>
          <li>Mots‑clés: « couvreur Tours », « toiture ardoise Tours », « démoussage toiture Tours »</li>
          <li>Objectifs 90j: 10 études de cas publiées, +25 avis (≥4,7), Top‑3 sur 3 requêtes</li>
        </ul>
      </section>

      <section id="actions" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Actions clés</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Pages & sémantique</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pages services: Toiture ardoise, Zinguerie, Réparation fuite 48h, Velux, Démoussage, Isolation</li>
              <li>Études de cas: ABF en Vieux‑Tours, Velux à Saint‑Cyr, démoussage à Joué‑lès‑Tours</li>
              <li>Maillage interne: requêtes locales par commune</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Parcours urgence</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>SMS auto « Photo + adresse + dispo » pour qualifier en 1 minute</li>
              <li>Créneaux de diagnostic en 48h, agenda partagé</li>
              <li>Relance devis J+2 et J+7 avec photo du toit</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="resultats" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Résultats</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Top‑3</strong> sur « couvreur Tours », « démoussage toiture Tours », « ardoise Tours »</li>
          <li>10 études de cas publiées avec photos drone et détails techniques</li>
          <li><strong>+25 avis</strong> (note moyenne 4,7★)</li>
        </ul>
        <blockquote className="mt-3 border-l-2 pl-4 text-neutral-700 dark:text-neutral-300">
          « Les demandes d’urgence sont mieux qualifiées et traitées en 48h. Les pages techniques rassurent. » — Couvreur Tourangeau
        </blockquote>
      </section>

      <section id="faq" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <details className="rounded-lg border border-white/10 p-4">
          <summary className="cursor-pointer font-medium">Comment capter les urgences toiture ?</summary>
          <p className="mt-2 text-sm text-neutral-300">Via une page dédiée « fuite 48h », un numéro d’astreinte et un SMS de qualification immédiate.</p>
        </details>
        <details className="rounded-lg border border-white/10 p-4">
          <summary className="cursor-pointer font-medium">Quid des contraintes ABF ?</summary>
          <p className="mt-2 text-sm text-neutral-300">Pages et cas conformes (ardoise traditionnelle, teintes, techniques), rassurant en Vieux‑Tours.</p>
        </details>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="/audit-custom" className="inline-flex rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20">Réserver un audit gratuit</a>
        <a href="/seo-google-business" className="inline-flex text-sm text-[--brand] hover:underline">Voir notre offre SEO local</a>
      </div>
    </SectionPage>
  );
}




