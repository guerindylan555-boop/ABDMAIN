import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";
import Link from "next/link";
import { ButtonLink } from "@/app/components/ui/button";

export const metadata: Metadata = {
  title: "Offres — AB Digital",
  description:
    "Trois packs clairs et cumulables pour passer d’un site performant à une croissance pilotée (SEO, Google Business, Automations & Ads).",
  alternates: { canonical: "/offres" },
  openGraph: {
    title: "Offres — AB Digital",
    description:
      "Starter → Croissance → Performance — choisissez le bon niveau et montez en puissance selon vos objectifs.",
    type: "website",
    url: "/offres",
  },
};

// La page n'affiche plus de grille de cartes; le comparatif vient en premier

export default function OffresPage() {
  return (
    <SectionPage
      title="Nos offres"
      description="Comparez d’abord les inclusions, puis découvrez le détail de chaque pack. Sans engagement, montée en puissance selon vos objectifs."
      tag="Offres"
      hideAside
    >
      {/* Comparatif en premier */}
      <section id="comparatif" className="space-y-4">
        <h2 className="text-2xl font-semibold">Comparatif des offres</h2>
        <div className="overflow-x-auto rounded-2xl glass p-2">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold text-white">Fonctionnalités</th>
                <th className="px-4 py-3 font-semibold text-white">DIY</th>
                <th className="px-4 py-3 font-semibold text-white">DWY</th>
                <th className="px-4 py-3 font-semibold text-white">DFY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                { label: "Site/Funnel haute conversion", diy: false, dwy: false, dfy: true },
                { label: "Sous‑compte (CRM, tunnels, calendriers)", diy: false, dwy: true, dfy: true },
                { label: "Templates & snapshots", diy: true, dwy: true, dfy: false },
                { label: "SEO local & Google Business", diy: false, dwy: true, dfy: true },
                { label: "Automations (appels/SMS/IA)", diy: false, dwy: true, dfy: true },
                { label: "A/B testing & dashboard", diy: false, dwy: false, dfy: true },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="px-4 py-3 text-neutral-300">{row.label}</td>
                  {[row.diy, row.dwy, row.dfy].map((v, i) => (
                    <td key={i} className="px-4 py-3 text-center">
                      {v ? (
                        <span
                          aria-label="Inclus"
                          className="inline-grid h-5 w-5 place-items-center rounded-full bg-[--brand] text-white text-[10px] shadow"
                        >
                          ✓
                        </span>
                      ) : (
                        <span aria-hidden className="text-neutral-600">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="#diy"
            className="inline-flex items-center rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 backdrop-blur hover:bg-white/30"
          >
            Détail DIY →
          </Link>
          <Link
            href="#dwy"
            className="inline-flex items-center rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 backdrop-blur hover:bg-white/30"
          >
            Détail DWY →
          </Link>
          <Link
            href="#dfy"
            className="inline-flex items-center rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 backdrop-blur hover:bg-white/30"
          >
            Détail DFY →
          </Link>
        </div>
      </section>

      {/* Détails par offre (ex-"Tarifs") */}
      <section id="diy" className="space-y-4 mt-12">
        <div className="flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold">DIY</h2>
          <span className="text-neutral-400 text-base">49–99€/mois</span>
        </div>
        <p className="text-neutral-300 max-w-3xl">
          Lancer vite: templates & snapshots (sites, funnels, agents IA, automations) avec guides et vidéos.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Ce qui est inclus</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Templates & snapshots</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Vidéos & checklists</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Mises à jour régulières</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Résultats attendus</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Mise en ligne en jours (pas semaines)</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Funnel/agent IA opérationnels</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2"></div>
          </div>
        </div>
        <ButtonLink href="/solutions/diy" variant="glow" className="inline-flex mt-2">Choisir DIY</ButtonLink>
      </section>

      <section id="dwy" className="space-y-4 mt-12">
        <div className="flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold">DWY</h2>
          <span className="text-neutral-400 text-base">Sur devis</span>
          <span className="ml-2 inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/15 px-2 py-1 text-[10px] uppercase tracking-wide text-white">Populaire</span>
        </div>
        <p className="text-neutral-300 max-w-3xl">
          Accélérez: publiez régulièrement, améliorez vos positions et alimentez le pipeline avec des relances intelligentes.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Ce qui s’ajoute à Starter</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Modifications illimitées (fair use)</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>SEO complet: technique, contenus, maillage</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Gestion Google Business: posts, avis, NAP</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Automatisations de base: emails/SMS & réactivation CRM</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Impact attendu</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Trafic organique en hausse, positions qui progressent</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Actions Google Business (appels, itinéraires, clics site)</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Leads & RDV issus des relances</li>
            </ul>
            <div className="mt-3"><span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Abonnement minimum: 3 mois</span></div>
          </div>
        </div>
        <ButtonLink href="/solutions/dwy" variant="glow" className="inline-flex mt-2">Choisir DWY</ButtonLink>
        <p className="text-[12px] text-neutral-400">Fair use: modifications illimitées = contenus/visuels et ajustements UX courants; refontes majeures et développements spécifiques devisés.</p>
      </section>

      <section id="dfy" className="space-y-4 mt-12">
        <div className="flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold">DFY</h2>
          <span className="text-neutral-400 text-base">Sur devis</span>
        </div>
        <p className="text-neutral-300 max-w-3xl">
          Tout centralisé pour scaler: SEO avancé, automations complètes (appels/SMS/IA, prise d’appels/RDV) et campagnes Ads
          pilotées par les résultats.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Ce qui s’ajoute à Croissance</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>SEO avancé + Netlinking piloté par la data</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Automatisations complètes (appels, voice drops, SMS/Emails, RDV)</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Publicité payante (Google Ads, Meta Ads) orientée business</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>A/B testing continu, dashboard & support prioritaire</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Impact attendu</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>CPA/CPL/ROAS maîtrisés et en amélioration</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Pipeline clair (leads → RDV → ventes)</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Part de voix et notoriété locale en hausse</li>
            </ul>
            <div className="mt-3"><span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Abonnement minimum: 6 mois</span></div>
          </div>
        </div>
        <ButtonLink href="/solutions/dfy" variant="glow" className="inline-flex mt-2">Choisir DFY</ButtonLink>
        <p className="text-[12px] text-neutral-400">Ads: budgets/créations publicitaires soumis à validation. Automations: respect strict RGPD (opt‑in/STOP, preuves de consentement).</p>
      </section>

      

      {/* FAQ */}
      <section id="faq" className="space-y-4 mt-10">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="rounded-2xl glass overflow-hidden">
          {[
            { q: 'Y a‑t‑il un engagement ?', a: 'Non. Accompagnements mensuels, résiliables à tout moment.' },
            { q: 'Mensuel vs Annuel: comment marche la remise ?', a: 'Le plan annuel applique -20% sur le prix mensuel. Nous affichons l’équivalent mensuel remisé, la facturation est annuelle.' },
            { q: 'Quelles différences entre Starter, Croissance et Performance ?', a: 'Starter = site/blog/CRM/GB/rapports essentiels; Croissance = + pages illimitées, jusqu’à 50 articles/mois, optimisation des notes, automatisations; Performance = + audit sur‑mesure et intégrations avancées.' },
            { q: 'Puis‑je migrer mon site sans perdre le SEO ?', a: 'Oui: redirections, reprise de contenu, suivi via Search Console et analytics pour éviter les pertes.' },
          ].map((item) => (
            <details key={item.q} className="group">
              <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between gap-4">
                <span className="font-medium">{item.q}</span>
                <span className="text-neutral-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-neutral-300">{item.a}</div>
              <div className="h-px bg-white/10" />
            </details>
          ))}
        </div>
        <div className="pt-2">
          <ButtonLink href="/audit-custom" variant="glow">Réserver un audit gratuit</ButtonLink>
        </div>
      </section>
    </SectionPage>
  );
}


