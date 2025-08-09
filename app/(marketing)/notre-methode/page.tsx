import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Notre méthode — AB Digital",
  description:
    "Méthodologie en 4 étapes: 1) Analyse complète des besoins et des axes d'amélioration, 2) Fondations solides avec un site sur‑mesure ultra optimisé, 3) Trafic multicanal (SEO, Google Business, Ads) pour des résultats concrets, 4) Automatisations d'appels et de prise de rendez‑vous pour convertir sans pertes.",
  alternates: { canonical: "/notre-methode" },
  openGraph: {
    title: "Notre méthode — AB Digital",
    description:
      "Analyse → Fondations → Trafic → Conversion & Automatisations: une boucle d’amélioration continue orientée résultats.",
    type: "website",
    url: "/notre-methode",
  },
};

export default function NotreMethodePage() {
  return (
    <SectionPage
      title="Notre méthode"
      description="Une méthode en 4 étapes pour passer de la clarté stratégique aux résultats concrets: Analyse approfondie, Fondations solides (site ultra optimisé), Trafic multicanal et Conversion automatisée (appels/RDV)."
      tag="Méthode"
      toc={[
        { id: "analyse", label: "1. Analyse complète & opportunités" },
        { id: "fondations", label: "2. Fondations: site sur‑mesure ultra optimisé" },
        { id: "trafic", label: "3. Trafic & visibilité: SEO, GB, Ads" },
        { id: "conversion", label: "4. Conversion & automatisations d’appels/RDV" },
      ]}
    >
      <section id="analyse" className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Analyse complète & opportunités</h2>
        <p>
          Nous commençons par une analyse complète et détaillée de vos besoins, de votre marché et de vos performances
          actuelles. Nous identifions les axes d’amélioration prioritaires en alignant vos objectifs business (appels,
          devis, ventes) avec les contraintes réelles (ressources, saisonnalité, marge) pour construire un plan réaliste
          et rentable.
        </p>
        <p>
          Cette phase inclut la revue de votre positionnement, de l’expérience utilisateur, du SEO technique et
          sémantique, de votre fiche Google Business, de vos campagnes payantes existantes, ainsi que de votre CRM et de
          vos processus de suivi. Nous définissons les <strong>KPI</strong> de traction et de conversion et une feuille de route 90 jours
          priorisée.
        </p>
      </section>

      <section id="fondations" className="space-y-4 mt-8">
        <h2 className="text-2xl font-semibold">2. Fondations: site sur‑mesure ultra optimisé</h2>
        <p>
          Nous posons des bases solides avec un site sur‑mesure, ultra optimisé pour la vitesse, le SEO et la
          conversion. L’architecture de contenu, l’UX et les performances (Core Web Vitals) sont travaillées dès la
          conception pour maximiser la lisibilité de votre offre et la prise de contact.
        </p>
        <p>
          Nous mettons en place le <strong>tracking</strong> fiable (GA4, Search Console, événements clés), les formulaires conformes
          <strong>RGPD</strong>, et un <strong>CRM</strong> connecté. Vous gardez la main sur les contenus via un <strong>CMS</strong> simple et des blocs
          réutilisables. Objectif: un socle technique et éditorial qui convertit et qui se référence.
        </p>
        <p className="text-sm text-neutral-300">
          En savoir plus: <a className="text-[--brand] hover:underline" href="/site-web-sur-mesure">Site web sur‑mesure</a>
        </p>
      </section>

      <section id="trafic" className="space-y-4 mt-8">
        <h2 className="text-2xl font-semibold">3. Trafic & visibilité: SEO, Google Business, Ads</h2>
        <p>
          Nous amplifions votre afflux de clients par tous les leviers pertinents: <strong>SEO</strong> (on‑page, contenus, maillage,
          pages locales), <strong>Google Business</strong> (posts, avis, cohérence NAP) et <strong>publicité payante</strong> (Google Ads, Meta Ads)
          quand un boost rapide est nécessaire. Chaque canal est évalué pour son ROI et optimisé en continu.
        </p>
        <p>
          Nous produisons des contenus ciblés, optimisons votre présence locale et assurons un suivi des conversions
          fiable. Le tout s’intègre à votre CRM pour une vision claire du pipeline et des performances.
        </p>
        <p className="text-sm text-neutral-300">
          En savoir plus: <a className="text-[--brand] hover:underline" href="/seo-google-business">SEO & Google Business</a> —
          <a className="text-[--brand] hover:underline ml-2" href="/publicite-payante"> Publicité payante</a>
        </p>
      </section>

      <section id="conversion" className="space-y-4 mt-8">
        <h2 className="text-2xl font-semibold">4. Conversion & automatisations d’appels/RDV</h2>
        <p>
          Nous sécurisons la conversion: <strong>automatisation de prise d’appels</strong>, <strong>prise de rendez‑vous</strong> et relances pour ne
          rater aucun prospect issu de vos campagnes. Nous réactivons aussi votre base clients existante (CRM) avec des
          offres personnalisées par email/SMS et des séquences d’appels intelligentes.
        </p>
        <p>
          Tests A/B, scoring des leads, rappels automatiques et suivi des no‑shows permettent d’augmenter le nombre de
          rendez‑vous honorés et le chiffre d’affaires. Les tableaux de bord mensuels guident les itérations.
        </p>
        <p className="text-sm text-neutral-300">
          En savoir plus: <a className="text-[--brand] hover:underline" href="/automatisations-appels-sms">Automatisations & IA</a>
        </p>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Méthode AB Digital en 4 étapes",
            description:
              "Analyse complète, fondations (site ultra optimisé), trafic multicanal et conversion automatisée (appels/RDV).",
            step: [
              {
                "@type": "HowToStep",
                name: "Analyse complète & opportunités",
                text:
                  "Analyse des besoins, performances et concurrence. Définition des KPI et plan 90 jours priorisé.",
              },
              {
                "@type": "HowToStep",
                name: "Fondations: site sur‑mesure ultra optimisé",
                text:
                  "Site rapide, SEO et UX. Tracking GA4, GSC, formulaires RGPD et CRM connectés.",
              },
              {
                "@type": "HowToStep",
                name: "Trafic & visibilité: SEO, GB, Ads",
                text:
                  "Contenus, maillage, pages locales, Google Business (posts/avis) et campagnes payantes.",
              },
              {
                "@type": "HowToStep",
                name: "Conversion & automatisations d’appels/RDV",
                text:
                  "Relances multi‑canales, réactivation CRM, prise d’appels/RDV automatisée et tests A/B.",
              },
            ],
          }),
        }}
      />
    </SectionPage>
  );
}


