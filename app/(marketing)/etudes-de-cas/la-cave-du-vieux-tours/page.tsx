import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Étude de cas — La Cave du Vieux‑Tours (Caviste) | AB Digital",
  description:
    "+40 avis en 90 jours (4,8★), 2 événements/mois et 50 abonnés « 3 bouteilles/mois ». SEO local et événements pour un caviste rue Colbert.",
  alternates: { canonical: "/etudes-de-cas/la-cave-du-vieux-tours" },
  openGraph: {
    title: "Étude de cas — La Cave du Vieux‑Tours",
    description:
      "Arrivages, agenda dégustations et pages Vouvray/Chinon pour booster la visibilité locale et la fidélisation.",
    type: "article",
    url: "/etudes-de-cas/la-cave-du-vieux-tours",
  },
};

export default function CaseStudyPage() {
  return (
    <SectionPage
      title="La Cave du Vieux‑Tours — Caviste rue Colbert"
      description="SEO local, contenus Loire (Vouvray/Chinon) et événementiel pour augmenter avis, trafic et abonnements."
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
          Caviste au <strong>32 Rue Colbert, 37000 Tours</strong>, spécialisé Loire (Vouvray/Chenin, Chinon/Cabernet Franc), vignerons indépendants et bio/biodynamie.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Catégorie Google Business: Caviste</li>
          <li>Mots‑clés: « caviste Tours », « vouvray caviste Tours », « dégustation vin Tours », « coffret vin Tours »</li>
          <li>Objectifs 90j: +40 avis (≥4,8), 2 événements/mois, 50 abonnés</li>
        </ul>
      </section>

      <section id="actions" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Actions clés</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">SEO local & pages produits</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pages: « Vouvray: nos 12 domaines », « Chinon/Bourgueil: rouges de Loire »</li>
              <li>Agenda « dégustations/événements » et pages coffrets d’entreprise</li>
              <li>Posts Google Business: arrivages, vin de la semaine, accords des Halles</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Fidélisation & abonnements</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Abonnement « 3 bouteilles/mois » avec relance J+25</li>
              <li>Rappels événement J‑3 / J‑1 + remerciement et code 10% seconde visite</li>
              <li>Alertes « arrivage limité » aux abonnés</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="resultats" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Résultats</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>+40 avis</strong> en 90 jours (note moyenne 4,8★)</li>
          <li>2 événements/mois avec ≥20 inscrits</li>
          <li>50 abonnés « 3 bouteilles/mois »</li>
        </ul>
        <blockquote className="mt-3 border-l-2 pl-4 text-neutral-700 dark:text-neutral-300">
          « Les pages Vouvray/Chinon et l’agenda ont dynamisé les visites et l’abonnement mensuel. » — La Cave du Vieux‑Tours
        </blockquote>
      </section>

      <section id="faq" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <details className="rounded-lg border border-white/10 p-4">
          <summary className="cursor-pointer font-medium">Comment lancer un abonnement caviste ?</summary>
          <p className="mt-2 text-sm text-neutral-300">Proposez 3 niveaux, un avantage « arrivage limité » et une relance J+25 pour consolider.</p>
        </details>
        <details className="rounded-lg border border-white/10 p-4">
          <summary className="cursor-pointer font-medium">Quels contenus SEO en priorité ?</summary>
          <p className="mt-2 text-sm text-neutral-300">Les pages Loire (Vouvray/Chenin, Chinon/Cabernet Franc), agenda dégustations et coffrets entreprise.</p>
        </details>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="/reservation-appel" className="inline-flex rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20">Réserver un audit gratuit</a>
        <a href="/seo-google-business" className="inline-flex text-sm text-[--brand] hover:underline">Voir notre offre SEO local</a>
      </div>
    </SectionPage>
  );
}




