import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Services — AB Digital",
  description:
    "Découvrez nos services: création de sites web performants, SEO (Google Business) et automatisations appels/SMS avec IA. Accompagnement mensuel, sans engagement.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — AB Digital",
    description:
      "Sites web rapides, SEO local et automatisations IA pour générer plus d’appels, de devis et de ventes.",
    type: "website",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <SectionPage
      title="Nos services"
      description="Sites performants, SEO local, automatisations IA et campagnes payantes. Focus ROI, accompagnement mensuel et conformité."
      tag="Services"
      toc={[
        { id: "web", label: "Création de site web" },
        { id: "seo", label: "SEO mensuel & Google Business" },
        { id: "auto", label: "Automatisations IA" },
        { id: "ads", label: "Publicité payante" },
        { id: "ia", label: "Offres IA" },
      ]}
    >
      <section id="web" className="space-y-3">
        <h2 className="text-2xl font-semibold">Création de site web sur‑mesure</h2>
        <p>
          Des sites rapides, clairs et orientés conversion: pensés SEO dès le cadrage et livrés avec un
          <a className="text-[--brand] hover:underline" href="/site-web-sur-mesure"> plan d’optimisation</a>.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Ce que vous obtenez</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Design responsive, hiérarchie claire et composants réutilisables</li>
              <li>Core Web Vitals optimisés (LCP/CLS/INP) et 95+ Lighthouse</li>
              <li>CMS headless (Prismic) avec blocs éditoriaux</li>
              <li>Formulaires, captation de leads et conformité RGPD</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Impact mesurable</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Temps de chargement réduit et meilleur taux de conversion</li>
              <li>Impressions organiques et clics en hausse</li>
              <li>Plus de demandes de devis et d’appels</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="seo" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">SEO mensuel & Google Business</h2>
        <p>
          Un accompagnement mensuel pour faire croître durablement votre trafic organique et dominer le Pack Local
          via une <a className="text-[--brand] hover:underline" href="/seo-google-business">fiche Google Business optimisée</a>.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Livrables</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Audit technique et sémantique initial, feuille de route 90 jours</li>
              <li>On‑Page, maillage interne, pages de services/locales</li>
              <li>Stratégie d’avis et posts Google Business</li>
              <li>Reporting mensuel actionnable</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Indicateurs suivis</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Positions, impressions, clics et part de voix</li>
              <li>Actions sur la fiche (appels, itinéraires, clics site)</li>
              <li>Leads organiques et valeur estimée du trafic</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="auto" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Automatisations & IA (appels, emails, SMS, RDV)</h2>
        <p>
          Réactivez votre base clients existante (CRM) et ne perdez plus de leads: séquences de relances intelligentes,
          offres personnalisées, qualification automatique et prise de
          <a className="text-[--brand] hover:underline" href="/automatisations-appels-sms"> rendez‑vous</a>.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Cas d’usage</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Relances de devis et paniers abandonnés</li>
              <li>Rappels de rendez‑vous et réduction du no‑show</li>
              <li>Qualification et scoring des leads, réactivation base CRM</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Conformité</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Opt‑in clair, message STOP pour SMS, registre des consentements</li>
              <li>Plages horaires d’envoi respectueuses</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ads" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Publicité payante (Google Ads, Meta Ads)</h2>
        <p>
          Générez un trafic qualifié rapidement avec des campagnes mesurables et un suivi des conversions fiable.
          <a className="text-[--brand] hover:underline" href="/publicite-payante"> Découvrir notre approche</a>.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Ce que nous gérons</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Structure de comptes, mots‑clés, audiences et créas</li>
              <li>Suivi des conversions (GA4) et attribution</li>
              <li>Optimisations hebdo et A/B testing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">KPI</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>CPA/CPL, ROAS et taux de conversion</li>
              <li>Qualité des leads et volume de ventes</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ia" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Offres IA et personnalisation</h2>
        <p>
          Activez des offres contextuelles et des messages adaptés au parcours pour maximiser vos conversions.
          <a className="text-[--brand] hover:underline" href="/offres-ia"> En savoir plus</a>.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Exemples</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Promotions dynamiques selon l’intérêt et l’urgence</li>
              <li>Emails/SMS assistés par IA</li>
              <li>Chatbots de qualification et prise de RDV</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Mesure</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Taux d’ouverture, de clics et de réponse</li>
              <li>RDV bookés et chiffre d’affaires incrémental</li>
            </ul>
          </div>
        </div>
      </section>
    </SectionPage>
  );
}



