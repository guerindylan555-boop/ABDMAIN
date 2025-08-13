import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";
import { ButtonLink } from "@/app/components/ui/button";
import Pricing from "@/app/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Nos solutions — AB Digital",
  description:
    "Des solutions sur‑mesure, pilotées par l’IA. Processus en 3 étapes: diagnostic personnalisé (60 min), plan d’action opérationnel, suivi & coaching continu.",
  alternates: { canonical: "/solutions" },
};

type OverviewCard = {
  id: string;
  title: string;
  badges: string[];
  points: string[];
  cta: { label: string; href: string };
};

const overview: OverviewCard[] = [
  {
    id: "starter",
    title: "Starter",
    badges: ["Core", "Web"],
    points: [
      "Site rapide (5 pages)",
      "1 article/mois",
      "GB avis + tableaux de bord",
    ],
    cta: { label: "Découvrir Starter", href: "#starter" },
  },
  {
    id: "croissance",
    title: "Croissance",
    badges: ["SEO local", "Automations"],
    points: [
      "Pages illimitées",
      "Jusqu’à 50 articles/mois",
      "Récupération des appels manqués + déclencheurs",
    ],
    cta: { label: "Découvrir Croissance", href: "#croissance" },
  },
  {
    id: "performance",
    title: "Performance",
    badges: ["Sur‑mesure", "Conseil"],
    points: [
      "Audits 100% personnalisés",
      "Intégrations sur‑mesure",
      "Gestion systèmes/formation",
    ],
    cta: { label: "Découvrir Performance", href: "#performance" },
  },
];

export default function SolutionsIndex() {
  return (
    <SectionPage
      title="Nos solutions"
      description="Trois niveaux pour avancer selon vos besoins: lancez vite, accélérez la cadence, ou passez au sur‑mesure piloté par l’IA."
      tag="Solutions"
      toc={[]}
      hideAside
    >
      {/* CTA header supprimé */}

      {/* Aperçu rapide */}
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {overview.map((card) => (
          <div key={card.id} className="glass-card rounded-xl border border-white/10 p-6 flex flex-col">
            <div className="flex flex-wrap items-center gap-1.5">
              {card.badges.map((b) => (
                <span key={b} className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide">{b}</span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <h3 className="text-h3 font-semibold">{card.title}</h3>
              {card.id === 'croissance' && (
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide">Populaire</span>
              )}
            </div>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
              {card.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <ButtonLink href={card.cta.href} variant="default" className="w-full justify-center">{card.cta.label}</ButtonLink>
            </div>
          </div>
        ))}
      </section>

      {/* Comparatif essentiel supprimé */}

      {/* Détails Starter */}
      <section id="starter" className="mt-12">
        <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col">
          <h2 className="text-h2 font-bold">Starter — Site performant + base IA</h2>
          <p className="mt-2 text-lead text-neutral-300">Idéal pour lancer vite avec les fondamentaux.</p>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 border border-white/10">
              <h3 className="font-semibold">Inclus</h3>
              <ul className="mt-2 space-y-1 text-sm text-neutral-300">
                {[
                  "Site web & Blog sur mesure (5 pages)",
                  "1 article/mois",
                  "Chat IA",
                  "CRM & Email & SMS & DM Marketing",
                  "Google Business (gestion des avis)",
                  "Tableaux de bord",
                  "Support basic + chat quotidien",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-xl p-4 border border-white/10 flex flex-col">
              <h3 className="font-semibold">Résultats attendus</h3>
              <ul className="mt-2 space-y-1 text-sm text-neutral-300 flex-1">
                {[
                  "Mise en ligne rapide",
                  "Tracking propre et mesure lisible",
                  "Base d’acquisition prête",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2">
                <ButtonLink href="/reservation-appel" variant="glow" size="lg" className="flex-1 justify-center">Démarrer avec Starter</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Détails Croissance */}
      <section id="croissance" className="mt-12">
        <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col">
          <div className="flex items-center gap-2">
            <h2 className="text-h2 font-bold">Croissance — Publier, optimiser, scaler</h2>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide">Populaire</span>
          </div>
          <p className="mt-2 text-lead text-neutral-300">Idéal pour accélérer la production, GMB et les automations.</p>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 border border-white/10">
              <h3 className="font-semibold">Inclus</h3>
              <ul className="mt-2 space-y-1 text-sm text-neutral-300">
                {[
                  "Tout Starter",
                  "Pages illimitées",
                  "Jusqu’à 50 articles/mois",
                  "Google Business — optimisation des notes",
                  "Récupération des appels manqués",
                  "Automatisations personnalisées & déclencheurs",
                  "Support prioritaire",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-xl p-4 border border-white/10 flex flex-col">
              <h3 className="font-semibold">Résultats attendus</h3>
              <ul className="mt-2 space-y-1 text-sm text-neutral-300 flex-1">
                {[
                  "Hausse du trafic et des positions",
                  "+ d’actions sur Google Business et + de RDV",
                  "Pipeline qui se remplit via les relances",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2">
                <ButtonLink href="/reservation-appel" variant="glow" size="lg" className="flex-1 justify-center">Passer à Croissance</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Détails Performance (nouvelle section spécifique) */}
      <section id="performance" className="mt-12">
        <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col">
          <h2 className="text-h2 font-bold">Performance — Propulsez votre entreprise avec des solutions sur‑mesure et innovantes</h2>
          <p className="mt-2 text-lead text-neutral-300">
            Nous avons conçu un processus en trois étapes pour garantir votre succès: analyse précise, plan d’action opérationnel, puis mise en œuvre et optimisation continue. Le tout, sur‑mesure et orienté résultats.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {/* 1. Diagnostic personnalisé */}
            <div className="glass-card rounded-xl p-4 border border-white/10 flex flex-col">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wide opacity-80">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/5">1</span>
                Diagnostic personnalisé (60 min)
              </div>
              <h3 className="mt-2 font-semibold">Clarté immédiate</h3>
              <div className="mt-2">
                <p className="text-sm text-neutral-300">Ce que vous obtenez:</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-300">
                  {[
                    "Clarté sur vos enjeux et objectifs",
                    "Analyse de vos processus, outils et stratégies actuelles",
                    "Identification des leviers de croissance et opportunités",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <p className="text-sm text-neutral-300">Pourquoi c’est essentiel:</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-300">
                  {[
                    "Vision limpide de votre situation",
                    "Priorisation précise: vous gagnez du temps",
                    "Feuille de route validée avant d’agir",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Plan d'action sur-mesure */}
            <div className="glass-card rounded-xl p-4 border border-white/10 flex flex-col">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wide opacity-80">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/5">2</span>
                Plan d’action sur‑mesure
              </div>
              <h3 className="mt-2 font-semibold">Outils, automatisations et stratégie</h3>
              <div className="mt-2">
                <p className="text-sm text-neutral-300">Ce que vous obtenez:</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-300">
                  {[
                    "Un document opérationnel (objectifs, étapes, indicateurs)",
                    "Liste d’outils et d’automatisations adaptés à vos besoins",
                    "Calendrier d’implémentation orchestrant chaque action",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <p className="text-sm text-neutral-300">Ce que vous gagnez:</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-300">
                  {[
                    "Sérénité: la marche à suivre est claire",
                    "Efficacité: priorisation et optimisation par l’IA",
                    "Gain de temps: automatisation des tâches répétitives",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Suivi et coaching */}
            <div className="glass-card rounded-xl p-4 border border-white/10 flex flex-col">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wide opacity-80">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/5">3</span>
                Suivi et coaching continu
              </div>
              <h3 className="mt-2 font-semibold">Optimisation en continu</h3>
              <div className="mt-2">
                <p className="text-sm text-neutral-300">Ce que vous obtenez:</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-300">
                  {[
                    "Rendez‑vous réguliers pour ajuster le plan",
                    "Accompagnement pour lever les blocages en temps réel",
                    "Optimisations continues selon le marché et les données",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <p className="text-sm text-neutral-300">Pourquoi c’est vital:</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-300">
                  {[
                    "Adaptation continue aux opportunités/contraintes",
                    "ROI maximisé en restant focalisé sur les résultats",
                    "Soutien expert pour monter en compétence",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <ButtonLink href="/reservation-appel" variant="glow" size="lg" className="flex-1 justify-center">Réserver une visio stratégique (60 min)</ButtonLink>
            <ButtonLink href="/offres" variant="outline" className="flex-1 justify-center">Voir Offres & Tarifs</ButtonLink>
          </div>
        </div>
      </section>

      {/* Offres & Tarifs inséré ici */}
      <section className="mt-12">
        <Pricing />
      </section>

      {/* FAQ + CTA final */}
      <section className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="glass-panel rounded-2xl p-6 border border-white/10">
          <h3 className="text-h3 font-semibold">Questions fréquentes</h3>
          <p className="mt-2 text-sm text-neutral-300">Retrouvez des réponses sur l’engagement, les délais et l’évolution d’un pack à l’autre.</p>
          <div className="mt-4">
            <ButtonLink href="/offres#faq" variant="outline">Voir la FAQ</ButtonLink>
          </div>
        </div>
        <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col">
          <h3 className="text-h3 font-semibold">Prêts à avancer ?</h3>
          <p className="mt-2 text-sm text-neutral-300">Parlez‑nous de vos objectifs et repart ez avec des actions concrètes.</p>
          <div className="mt-auto flex gap-2 pt-4">
            <ButtonLink href="/reservation-appel" variant="glow" className="flex-1 justify-center">Parler à un expert</ButtonLink>
            <ButtonLink href="/offres" variant="outline" className="flex-1 justify-center">Voir Offres & Tarifs</ButtonLink>
          </div>
        </div>
      </section>
    </SectionPage>
  );
}
