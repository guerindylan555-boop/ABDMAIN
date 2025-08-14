export const dynamic = "force-static";
import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";

export const metadata: Metadata = {
  title: "Offres IA — AB Digital",
  description:
    "Activez des offres et messages personnalisés grâce à l’IA pour booster vos conversions de façon éthique.",
  alternates: { canonical: "/offres-ia" },
  openGraph: {
    title: "Offres IA — AB Digital",
    description: "Segmentation, promos dynamiques, emails/SMS assistés par IA et chatbots de qualification.",
    type: "website",
    url: "/offres-ia",
  },
};

export default function OffresIAPage() {
  return (
    <SectionPage
      title="Offres IA"
      description="Promotions intelligentes et messages personnalisés sur tout le parcours pour augmenter vos conversions de façon mesurable et éthique."
      tag="Service"
      toc={[
        { id: "segmentation", label: "Segmentation & personnalisation" },
        { id: "promos", label: "Promotions dynamiques" },
        { id: "messagerie", label: "Emails/SMS assistés par IA" },
        { id: "chatbots", label: "Chatbots de qualification" },
        { id: "mesure", label: "Mesure & tests" },
      ]}
    >
      <section id="segmentation" className="space-y-3">
        <h2 className="text-2xl font-semibold">Segmentation & personnalisation</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Segments comportementaux (visites, clics, achats)</li>
          <li>Messages adaptés au contexte</li>
          <li>Respect de la vie privée et contrôle utilisateur</li>
        </ul>
      </section>

      <section id="promos" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Promotions dynamiques</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Offres contextuelles, durée limitée</li>
          <li>Tests A/B et mesure des résultats</li>
          <li>Automatisation des relances</li>
        </ul>
      </section>

      <section id="messagerie" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Emails/SMS assistés par IA</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Modèles rédigés et personnalisés (réactivation clients existants)</li>
          <li>Recettes pour taux d’ouverture et de clics</li>
          <li>Suivi conversion et retours</li>
        </ul>
      </section>

      <section id="chatbots" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Chatbots de qualification</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Qualification et prise de RDV</li>
          <li>Escalade vers humain quand nécessaire</li>
          <li>Mesure satisfaction et feedback</li>
        </ul>
      </section>

      <section id="mesure" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">Mesure & tests</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Suivi des conversions et du chiffre d’affaires incrémental</li>
          <li>Tests A/B et itérations rapides</li>
          <li>Respect de la vie privée et contrôle utilisateur</li>
        </ul>
      </section>
    </SectionPage>
  );
}


