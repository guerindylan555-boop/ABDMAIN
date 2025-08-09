import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Tarifs — AB Digital",
  description:
    "Offres harmonisées et cumulatives: Starter, Croissance, Performance. Texte clair, lisible, et logique pour choisir sereinement.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Tarifs — AB Digital",
    description: "Starter → Croissance → Performance: montez en gamme selon vos objectifs.",
    type: "website",
    url: "/tarifs",
  },
};

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex justify-center items-start gap-2">
      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />
      {children}
    </li>
  );
}

export default function TarifsPage() {
  return (
    <SectionPage
      title="Tarifs"
      description="Trois niveaux cumulés. Un texte simple et des listes claires pour comparer en un coup d’œil."
      tag="Tarifs"
      toc={[
        { id: "starter", label: "Starter" },
        { id: "croissance", label: "Croissance" },
        { id: "performance", label: "Performance" },
      ]}
    >
      {/* Starter */}
      <section id="starter" className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">
          Starter <span className="text-neutral-400 text-base font-normal">— 300€</span>
        </h2>
        <p className="text-neutral-300">
          Un site vitrine 5 pages sur‑mesure, rapide et optimisé, avec un suivi SEO de base pour être trouvé. Parfait
          pour démarrer sur des fondations solides.
        </p>
        <h3 className="font-semibold">Inclus</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>Site sur‑mesure (5 pages) optimisé</Bullet>
          <Bullet>Suivi SEO mensuel Basic</Bullet>
          <Bullet>5 modifications/mois incluses</Bullet>
          <Bullet>Formulaires & conformité RGPD</Bullet>
          <Bullet>Tracking de base (GA4/GSC)</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Résultats attendus</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>Core Web Vitals sous contrôle (LCP/CLS/INP)</Bullet>
          <Bullet>Indexation et premières impressions/clics</Bullet>
          <Bullet>Formulaires et appels tracés</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Mise en place & délais</h3>
        <ol className="mt-2 space-y-2 list-decimal pl-5">
          <li>Audit & brief (48h)</li>
          <li>Maquettes & contenu (3–5 j)</li>
          <li>Développement & mise en ligne (7–10 j)</li>
        </ol>
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Délai moyen: 2–3 semaines</span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Maintenance: 69€/mois</span>
        </div>
        <a
          href="/reservation-appel"
          className="inline-flex mx-auto mt-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20"
        >
          Audit gratuit
        </a>
        <p className="text-[12px] text-neutral-400">
          Remarque: les 5 modifications/mois couvrent textes, images et petites sections (hors refonte structurelle).
        </p>
      </section>

      {/* Croissance */}
      <section id="croissance" className="space-y-4 mt-12 text-center">
        <h2 className="text-2xl font-semibold">
          Croissance <span className="text-neutral-400 text-base font-normal">— Sur devis</span>
        </h2>
        <p className="text-neutral-300">
          Inclut Starter + modifications illimitées (fair use), SEO complet (technique, contenus, maillage), gestion
          Google Business et début d’automatisation (emails/SMS).
        </p>
        <h3 className="font-semibold">Ajouts par rapport à Starter</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>Modifications illimitées (fair use)</Bullet>
          <Bullet>SEO complet: contenus, maillage interne, technique</Bullet>
          <Bullet>Gestion Google Business: posts, avis, cohérence NAP</Bullet>
          <Bullet>Automatisation de base: emails/SMS de relance & réactivation CRM</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Résultats attendus</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>Trafic organique en hausse, positions qui progressent</Bullet>
          <Bullet>Actions Google Business (appels, itinéraires, clics site)</Bullet>
          <Bullet>Leads et RDV issus des relances</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Mise en place & délais</h3>
        <ol className="mt-2 space-y-2 list-decimal pl-5">
          <li>Kick‑off & feuille de route 90 jours</li>
          <li>Sprints hebdomadaires (SEO/GB/automations)</li>
          <li>Rapport mensuel & priorisation continue</li>
        </ol>
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Abonnement minimum: 3 mois</span>
        </div>
        <a
          href="/reservation-appel"
          className="inline-flex mx-auto mt-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20"
        >
          Audit gratuit
        </a>
        <p className="text-[12px] text-neutral-400">
          Fair use: modifications illimitées = changements de contenus/visuels et ajustements UX courants; refontes
          majeures et développements spécifiques devisés.
        </p>
      </section>

      {/* Performance */}
      <section id="performance" className="space-y-4 mt-12 text-center">
        <h2 className="text-2xl font-semibold">
          Performance <span className="text-neutral-400 text-base font-normal">— Sur devis</span>
        </h2>
        <p className="text-neutral-300">
          Inclut Croissance + SEO avancé & netlinking, automations complètes (appels/SMS/IA, prise d’appels/RDV) et
          campagnes publicitaires (Google/Meta) avec A/B testing et dashboard.
        </p>
        <h3 className="font-semibold">Ajouts par rapport à Croissance</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>SEO avancé + Netlinking piloté par la data</Bullet>
          <Bullet>Automatisations complètes: appels, voice drops, SMS/Emails, RDV</Bullet>
          <Bullet>Publicité payante (Google Ads, Meta Ads) orientée business</Bullet>
          <Bullet>A/B testing continu, dashboard & support prioritaire</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Résultats attendus</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>CPA/CPL/ROAS maîtrisés et en amélioration</Bullet>
          <Bullet>Pipeline clair (leads → RDV → ventes)</Bullet>
          <Bullet>Part de voix et notoriété locale en hausse</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Mise en place & délais</h3>
        <ol className="mt-2 space-y-2 list-decimal pl-5">
          <li>Audit avancé & plan média + scénarios d’automation</li>
          <li>Mise en route campagnes & orchestrations</li>
          <li>Optimisations hebdo & comité mensuel</li>
        </ol>
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Abonnement minimum: 6 mois</span>
        </div>
        <a
          href="/reservation-appel"
          className="inline-flex mx-auto mt-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20"
        >
          Audit gratuit
        </a>
        <p className="text-[12px] text-neutral-400">
          Ads: budgets/créations publicitaires soumis à validation. Automations: respect strict RGPD (opt‑in/STOP,
          preuves de consentement).
        </p>
      </section>
    </SectionPage>
  );
}

import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Tarifs — AB Digital",
  description: "Des plans mensuels sans engagement, pensés pour la performance et la clarté.",
  alternates: { canonical: "/tarifs" },
  openGraph: { title: "Tarifs — AB Digital", description: "Plans mensuels sans engagement.", type: "website", url: "/tarifs" },
};

const plans = [
  {
    name: "Starter",
    price: "490€/mois",
    description: "Idéal pour démarrer et valider l’offre.",
    items: ["Site vitrine", "Google Business", "Suivi mensuel"],
  },
  {
    name: "Croissance",
    price: "890€/mois",
    description: "Pour accélérer l’acquisition et la conversion.",
    items: ["SEO + contenus", "Automations SMS", "Tableau de bord"],
  },
  {
    name: "Performance",
    price: "1290€/mois",
    description: "Le pack complet pour scaler.",
    items: [
      "SEO avancé + Netlinking",
      "Séquences IA personnalisées",
      "Tests A/B multi‑canaux",
      "Workshop mensuel",
      "Support prioritaire",
    ],
  },
];

export default function TarifsPage() {
  return (
    <SectionPage title="Tarifs mensuels" description="Sans engagement, pilotés par les résultats." tag="Tarifs">
      <div className="grid gap-6 md:grid-cols-3 items-stretch">
        {plans.map((p) => (
          <div key={p.name} className="flex flex-col rounded-xl p-6 border border-white/10 bg-white/10 backdrop-blur">
            <h3 className="font-semibold text-lg text-white">{p.name}</h3>
            <div className="mt-2 text-3xl font-extrabold text-white">{p.price}</div>
            <p className="text-xs text-neutral-300">Sans engagement</p>
            <p className="mt-2 text-sm text-neutral-200">{p.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-200 flex-1">
              {p.items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-6" />
            <a href="/reservation-appel" className="inline-flex w-full justify-center rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 font-medium hover:bg-white/30">
              Audit gratuit
            </a>
          </div>
        ))}
      </div>
    </SectionPage>
  );
}

import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Tarifs — AB Digital",
  description:
    "Offres harmonisées et cumulatives: Starter, Croissance, Performance. Texte clair, lisible, et logique pour choisir sereinement.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Tarifs — AB Digital",
    description: "Starter → Croissance → Performance: montez en gamme selon vos objectifs.",
    type: "website",
    url: "/tarifs",
  },
};

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex justify-center items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]" />{children}</li>
  );
}

export default function TarifsPage() {
  return (
    <SectionPage
      title="Tarifs"
      description="Trois niveaux cumulés. Un texte simple et des listes claires pour comparer en un coup d’œil."
      tag="Tarifs"
      toc={[
        { id: "starter", label: "Starter" },
        { id: "croissance", label: "Croissance" },
        { id: "performance", label: "Performance" },
      ]}
    >
      {/* Starter */}
      <section id="starter" className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Starter <span className="text-neutral-400 text-base font-normal">— 300€</span></h2>
        <p className="text-neutral-300">Un site vitrine 5 pages sur‑mesure, rapide et optimisé, avec un suivi SEO de base pour être trouvé. Parfait pour démarrer sur des fondations solides.</p>
        <h3 className="font-semibold">Inclus</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>Site sur‑mesure (5 pages) optimisé</Bullet>
          <Bullet>Suivi SEO mensuel Basic</Bullet>
          <Bullet>5 modifications/mois incluses</Bullet>
          <Bullet>Formulaires & conformité RGPD</Bullet>
          <Bullet>Tracking de base (GA4/GSC)</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Résultats attendus</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>Core Web Vitals sous contrôle (LCP/CLS/INP)</Bullet>
          <Bullet>Indexation et premières impressions/clics</Bullet>
          <Bullet>Formulaires et appels tracés</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Mise en place & délais</h3>
        <ol className="mt-2 space-y-2 list-decimal pl-5">
          <li>Audit & brief (48h)</li>
          <li>Maquettes & contenu (3–5 j)</li>
          <li>Développement & mise en ligne (7–10 j)</li>
        </ol>
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Délai moyen: 2–3 semaines</span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Maintenance: 69€/mois</span>
        </div>
        <a href="/contact#contact" className="inline-flex mx-auto mt-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20">Choisir Starter</a>
        <p className="text-[12px] text-neutral-400">Remarque: les 5 modifications/mois couvrent textes, images et petites sections (hors refonte structurelle).</p>
      </section>

      {/* Croissance */}
      <section id="croissance" className="space-y-4 mt-12 text-center">
        <h2 className="text-2xl font-semibold">Croissance <span className="text-neutral-400 text-base font-normal">— Sur devis</span></h2>
        <p className="text-neutral-300">Inclut Starter + modifications illimitées (fair use), SEO complet (technique, contenus, maillage), gestion Google Business et début d’automatisation (emails/SMS).</p>
        <h3 className="font-semibold">Ajouts par rapport à Starter</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>Modifications illimitées (fair use)</Bullet>
          <Bullet>SEO complet: contenus, maillage interne, technique</Bullet>
          <Bullet>Gestion Google Business: posts, avis, cohérence NAP</Bullet>
          <Bullet>Automatisation de base: emails/SMS de relance & réactivation CRM</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Résultats attendus</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>Trafic organique en hausse, positions qui progressent</Bullet>
          <Bullet>Actions Google Business (appels, itinéraires, clics site)</Bullet>
          <Bullet>Leads et RDV issus des relances</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Mise en place & délais</h3>
        <ol className="mt-2 space-y-2 list-decimal pl-5">
          <li>Kick‑off & feuille de route 90 jours</li>
          <li>Sprints hebdomadaires (SEO/GB/automations)</li>
          <li>Rapport mensuel & priorisation continue</li>
        </ol>
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Abonnement minimum: 3 mois</span>
        </div>
        <a href="/contact#contact" className="inline-flex mx-auto mt-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20">Parler de Croissance</a>
        <p className="text-[12px] text-neutral-400">Fair use: modifications illimitées = changements de contenus/visuels et ajustements UX courants; refontes majeures et développements spécifiques devisés.</p>
      </section>

      {/* Performance */}
      <section id="performance" className="space-y-4 mt-12 text-center">
        <h2 className="text-2xl font-semibold">Performance <span className="text-neutral-400 text-base font-normal">— Sur devis</span></h2>
        <p className="text-neutral-300">Inclut Croissance + SEO avancé & netlinking, automations complètes (appels/SMS/IA, prise d’appels/RDV) et campagnes publicitaires (Google/Meta) avec A/B testing et dashboard.</p>
        <h3 className="font-semibold">Ajouts par rapport à Croissance</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>SEO avancé + Netlinking piloté par la data</Bullet>
          <Bullet>Automatisations complètes: appels, voice drops, SMS/Emails, RDV</Bullet>
          <Bullet>Publicité payante (Google Ads, Meta Ads) orientée business</Bullet>
          <Bullet>A/B testing continu, dashboard & support prioritaire</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Résultats attendus</h3>
        <ul className="mt-2 space-y-2">
          <Bullet>CPA/CPL/ROAS maîtrisés et en amélioration</Bullet>
          <Bullet>Pipeline clair (leads → RDV → ventes)</Bullet>
          <Bullet>Part de voix et notoriété locale en hausse</Bullet>
        </ul>
        <h3 className="font-semibold mt-4">Mise en place & délais</h3>
        <ol className="mt-2 space-y-2 list-decimal pl-5">
          <li>Audit avancé & plan média + scénarios d’automation</li>
          <li>Mise en route campagnes & orchestrations</li>
          <li>Optimisations hebdo & comité mensuel</li>
        </ol>
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Abonnement minimum: 6 mois</span>
        </div>
        <a href="/contact#contact" className="inline-flex mx-auto mt-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20">Passer en Performance</a>
        <p className="text-[12px] text-neutral-400">Ads: budgets/créations publicitaires soumis à validation. Automations: respect strict RGPD (opt‑in/STOP, preuves de consentement).</p>
      </section>
    </SectionPage>
  );
}


