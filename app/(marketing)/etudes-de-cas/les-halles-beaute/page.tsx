import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Étude de cas — Les Halles Beauté (Institut de beauté à Tours) | AB Digital",
  description:
    "+30 avis en 90 jours (4,8★), no‑show −22% via rappels SMS, créneaux 'pause déjeuner' remplis. SEO local et Google Business pour un institut de beauté à Tours.",
  alternates: { canonical: "/etudes-de-cas/les-halles-beaute" },
  openGraph: {
    title: "Étude de cas — Les Halles Beauté (Tours)",
    description:
      "+30 avis en 90 jours et no‑show réduit de 22% grâce aux rappels SMS et à l’optimisation Google Business.",
    type: "article",
    url: "/etudes-de-cas/les-halles-beaute",
  },
};

export default function CaseStudyPage() {
  return (
    <SectionPage
      title="Les Halles Beauté — Institut de beauté à Tours"
      description="SEO local, Google Business et automatisations SMS pour remplir les créneaux 'pause déjeuner' et réduire le no‑show."
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
          Institut de beauté situé au <strong>14 Rue des Halles, 37000 Tours</strong>, positionné sur des soins visage orientés résultats et des formats express (30–60–90 min) pour une clientèle active du centre.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Catégorie Google Business: Institut de beauté</li>
          <li>Mots‑clés: « institut de beauté Tours », « épilation Tours centre », « rehaussement cils Tours »</li>
          <li>Objectifs 90j: +30 avis (≥4,8), no‑show −20%, 2 cures/semaine</li>
        </ul>
      </section>

      <section id="actions" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Actions clés</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">SEO local & contenu</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pages services locales: épilation, rehaussement, manucure, modelage</li>
              <li>Optimisation NAP, catégories, attributs et posts hebdo Google Business</li>
              <li>Galeries avant/après (sourcils) et maillage interne</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Automatisations appels/SMS</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rappels RDV J‑1 et J0 (+3h) pour réduire le no‑show</li>
              <li>Slots express 12h30 mis en avant (mardi‑jeudi)</li>
              <li>Relance réactivation J+30 et abandon de panier carte cadeau</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="resultats" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Résultats</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>+30 avis</strong> en 90 jours (note moyenne 4,8★)</li>
          <li><strong>No‑show −22%</strong> grâce aux rappels SMS</li>
          <li>Créneaux « pause déjeuner » remplis sous 4 semaines</li>
        </ul>
        <blockquote className="mt-3 border-l-2 pl-4 text-neutral-700 dark:text-neutral-300">
          « Les rappels SMS et les posts réguliers ont vraiment fait la différence. » — Les Halles Beauté
        </blockquote>
      </section>

      <section id="faq" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <details className="rounded-lg border border-white/10 p-4">
          <summary className="cursor-pointer font-medium">Combien de temps pour voir des résultats locaux ?</summary>
          <p className="mt-2 text-sm text-neutral-300">En général 4–8 semaines pour les actions sur la fiche, 8–12 semaines pour les pages locales.</p>
        </details>
        <details className="rounded-lg border border-white/10 p-4">
          <summary className="cursor-pointer font-medium">Peut‑on réduire le no‑show rapidement ?</summary>
          <p className="mt-2 text-sm text-neutral-300">Oui, avec des rappels J‑1 et J0 (+3h), un lien d’annulation simple et des créneaux de re‑booking.</p>
        </details>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="/reservation-appel" className="inline-flex rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20">Réserver un audit gratuit</a>
        <a href="/seo-google-business" className="inline-flex text-sm text-[--brand] hover:underline">Voir notre offre SEO local</a>
      </div>
    </SectionPage>
  );
}



