import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";
import { ButtonLink } from "@/app/components/ui/button";

export const metadata: Metadata = {
  title: "Solutions — AB Digital",
  description:
    "Trois niveaux pour avancer: Starter (lancer vite), Croissance (accélérer), Performance (sur‑mesure).",
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
      "Récup. appels + déclencheurs",
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
      title="Solutions"
      description="Trois niveaux pour avancer selon vos besoins: lancez vite, accélérez la cadence, ou allez au sur‑mesure."
      tag="Solutions"
      toc={[]}
      hideAside
    >
      {/* CTA header */}
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/reservation-appel" variant="glow">Parler à un expert</ButtonLink>
        <ButtonLink href="/offres" variant="outline">Voir Offres & Tarifs</ButtonLink>
      </div>

      {/* Aperçu rapide */}
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {overview.map((card) => (
          <div key={card.id} className="glass-card rounded-xl border border-white/10 p-6 flex flex-col">
            <div className="flex flex-wrap items-center gap-1.5">
              {card.badges.map((b) => (
                <span key={b} className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide">{b}</span>
              ))}
            </div>
            <h3 className="mt-3 text-h3 font-semibold">{card.title}</h3>
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

      {/* Comparatif essentiel */}
      <section className="mt-10 rounded-2xl glass p-4 border border-white/10">
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="px-3 py-2">Fonctionnalités</th>
                <th className="px-3 py-2">Starter</th>
                <th className="px-3 py-2">Croissance</th>
                <th className="px-3 py-2">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                { label: "Pages", s: "5", c: "Illimitées", p: "Illimitées" },
                { label: "Articles/mois", s: "1", c: "Jusqu’à 50", p: "Selon besoin" },
                { label: "Google Business", s: "Avis", c: "Optimisation notes", p: "Avancé" },
                { label: "Automations", s: "Base", c: "Personnalisées", p: "Sur‑mesure" },
                { label: "Support", s: "Basic", c: "Prioritaire", p: "Prioritaire" },
              ].map((r) => (
                <tr key={r.label}>
                  <td className="px-3 py-2 text-neutral-300">{r.label}</td>
                  <td className="px-3 py-2">{r.s}</td>
                  <td className="px-3 py-2">{r.c}</td>
                  <td className="px-3 py-2">{r.p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3">
          <ButtonLink href="/offres" variant="outline">Voir le tableau complet</ButtonLink>
        </div>
      </section>

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
                <ButtonLink href="/reservation-appel" variant="glow" className="flex-1 justify-center">Démarrer avec Starter</ButtonLink>
                <ButtonLink href="/offres" variant="outline" className="flex-1 justify-center">Voir Offres & Tarifs</ButtonLink>
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
                <ButtonLink href="/reservation-appel" variant="glow" className="flex-1 justify-center">Passer à Croissance</ButtonLink>
                <ButtonLink href="/offres" variant="outline" className="flex-1 justify-center">Voir Offres & Tarifs</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Détails Performance */}
      <section id="performance" className="mt-12">
        <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col">
          <h2 className="text-h2 font-bold">Performance — Sur‑mesure piloté par les résultats</h2>
          <p className="mt-2 text-lead text-neutral-300">Idéal pour des besoins spécifiques, intégrations et montée en compétence des équipes.</p>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 border border-white/10">
              <h3 className="font-semibold">Inclus</h3>
              <ul className="mt-2 space-y-1 text-sm text-neutral-300">
                {[
                  "Tout Croissance",
                  "Audits 100% personnalisés",
                  "Conception & intégrations sur‑mesure",
                  "Gestion des systèmes et/ou formation des équipes",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-xl p-4 border border-white/10 flex flex-col">
              <h3 className="font-semibold">Résultats attendus</h3>
              <ul className="mt-2 space-y-1 text-sm text-neutral-300 flex-1">
                {[
                  "Architecture scalable et fiable",
                  "Automatisations avancées adaptées à vos cas",
                  "Équipe outillée et formée",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{i}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2">
                <ButtonLink href="/reservation-appel" variant="outline" className="flex-1 justify-center">Réserver un audit</ButtonLink>
                <ButtonLink href="/offres" variant="outline" className="flex-1 justify-center">Voir Offres & Tarifs</ButtonLink>
              </div>
            </div>
          </div>
        </div>
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
