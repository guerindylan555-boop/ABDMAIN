import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";
import Link from "next/link";

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
                <th className="px-4 py-3 font-semibold text-white">Starter</th>
                <th className="px-4 py-3 font-semibold text-white">Croissance</th>
                <th className="px-4 py-3 font-semibold text-white">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                { label: "Site sur‑mesure rapide (5+ pages)", s: true, c: true, p: true },
                { label: "Modifications illimitées (fair use)", s: false, c: true, p: true },
                { label: "SEO Basic", s: true, c: false, p: false },
                { label: "SEO complet (technique, contenus, maillage)", s: false, c: true, p: true },
                { label: "SEO avancé + Netlinking", s: false, c: false, p: true },
                { label: "Google Business (posts, avis, NAP)", s: false, c: true, p: true },
                { label: "Automatisations de base (emails/SMS)", s: false, c: true, p: false },
                { label: "Automatisations complètes (appels/SMS/IA, RDV)", s: false, c: false, p: true },
                { label: "Publicité payante (Google/Meta)", s: false, c: false, p: true },
                { label: "A/B testing & dashboard", s: false, c: false, p: true },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="px-4 py-3 text-neutral-300">{row.label}</td>
                  {[row.s, row.c, row.p].map((v, i) => (
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
            href="#starter"
            className="inline-flex items-center rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 backdrop-blur hover:bg-white/30"
          >
            Détail Starter →
          </Link>
          <Link
            href="#croissance"
            className="inline-flex items-center rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 backdrop-blur hover:bg-white/30"
          >
            Détail Croissance →
          </Link>
          <Link
            href="#performance"
            className="inline-flex items-center rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 backdrop-blur hover:bg-white/30"
          >
            Détail Performance →
          </Link>
        </div>
      </section>

      {/* Détails par offre (ex-"Tarifs") */}
      <section id="starter" className="space-y-4 mt-12">
        <div className="flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold">Starter</h2>
          <span className="text-neutral-400 text-base">300€</span>
        </div>
        <p className="text-neutral-300 max-w-3xl">
          Démarrez vite et bien: un site vitrine 5 pages, rapide, clair et optimisé, avec le nécessaire pour être visible et
          convertir vos premiers prospects.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Ce qui est inclus</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Site sur‑mesure (5 pages) optimisé</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Suivi SEO mensuel Basic</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>5 modifications/mois incluses</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Formulaires & conformité RGPD</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Tracking de base (GA4/GSC)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Résultats attendus</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Core Web Vitals maîtrisés (LCP/CLS/INP)</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Indexation et premières impressions/clics</li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[--brand]"/>Formulaires et appels tracés</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Délai moyen: 2–3 semaines</span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">Maintenance: 69€/mois</span>
            </div>
          </div>
        </div>
        <a href="/contact#contact" className="inline-flex mt-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20">Choisir Starter</a>
        <p className="text-[12px] text-neutral-400">Les 5 modifications/mois couvrent textes, images et petites sections (hors refonte structurelle).</p>
      </section>

      <section id="croissance" className="space-y-4 mt-12">
        <div className="flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold">Croissance</h2>
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
        <a href="/contact#contact" className="inline-flex mt-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20">Parler de Croissance</a>
        <p className="text-[12px] text-neutral-400">Fair use: modifications illimitées = contenus/visuels et ajustements UX courants; refontes majeures et développements spécifiques devisés.</p>
      </section>

      <section id="performance" className="space-y-4 mt-12">
        <div className="flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold">Performance</h2>
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
        <a href="/contact#contact" className="inline-flex mt-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20">Passer en Performance</a>
        <p className="text-[12px] text-neutral-400">Ads: budgets/créations publicitaires soumis à validation. Automations: respect strict RGPD (opt‑in/STOP, preuves de consentement).</p>
      </section>

      

      {/* FAQ */}
      <section id="faq" className="space-y-4 mt-10">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="rounded-2xl glass overflow-hidden">
          {[
            {
              q: "Y a‑t‑il un engagement ?",
              a: "Non. Accompagnements mensuels, résiliables à tout moment.",
            },
            {
              q: "Combien de temps pour voir des résultats ?",
              a: "Entre 4 et 8 semaines sur le trafic et les conversions, selon le point de départ.",
            },
            {
              q: "Puis‑je évoluer d’un pack à l’autre ?",
              a: "Oui. Les packs sont pensés pour être cumulés: vous pouvez monter en puissance à tout moment.",
            },
            {
              q: "Les publicités incluent‑elles le budget média ?",
              a: "Non, les budgets publicitaires sont définis et validés séparément.",
            },
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
          <Link
            href="/reservation-appel"
            className="inline-flex items-center rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 backdrop-blur hover:bg-white/30"
          >
            Réserver un audit gratuit
          </Link>
        </div>
      </section>
    </SectionPage>
  );
}


