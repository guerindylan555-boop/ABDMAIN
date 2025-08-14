export const dynamic = "force-static";
import type { Metadata } from "next";
import SectionPage from "@/app/components/marketing/SectionPage";
import Faq1, { FAQItem } from "@/components/mvpblocks/faq-1";

export const metadata: Metadata = {
  title: "SEO Hub (Local + IA)",
  description: "Calendrier IA, maillage, schéma, citations, GMB posts/Q&A. KPI: positions, trafic, appels.",
  alternates: { canonical: "/hubs/seo" },
};

export default function SEOHubPage() {
  return (
    <SectionPage
      title="SEO Hub (Local + IA)"
      description="Un pack pour systématiser votre contenu local et vos signaux SEO."
      tag="Hub"
      toc={[
        { id: "contenu", label: "Ce que contient le hub" },
        { id: "kpi", label: "KPI suivis" },
        { id: "faq", label: "FAQ" },
      ]}
    >
      <section id="contenu" className="space-y-3">
        <h2 className="text-2xl font-semibold">Ce que contient le hub</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Calendrier éditorial assisté par IA</li>
          <li>Maillage interne & données structurées</li>
          <li>Cleanup citations NAP</li>
          <li>Posts & Q&A Google Business</li>
        </ul>
      </section>

      <section id="kpi" className="space-y-3 mt-8">
        <h2 className="text-2xl font-semibold">KPI suivis</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Positions/rank et visibilité</li>
          <li>Trafic organique et appels</li>
          <li>Actions GMB (clics, itinéraires, appels)</li>
        </ul>
      </section>

      <section id="faq" className="space-y-3 mt-8">
        <Faq1
          title="FAQ SEO local & Google Business"
          lead="Tout sur l’optimisation des notes, les posts, les Q&A et l’impact business."
          items={[
            { id: '1', title: 'Comment améliorez‑vous les notes Google Business ?', content: 'Stratégie d’e‑mails/SMS post‑prestation, QR codes, prompts IA pour réponses, et suivi hebdomadaire.' },
            { id: '2', title: 'Quel impact sur le ranking local ?', content: 'La fréquence et la qualité des avis, les posts et la cohérence NAP renforcent les signaux locaux et les actions (appels, itinéraires).' },
            { id: '3', title: 'Gérez‑vous les multi‑établissements ?', content: 'Oui, avec plan d’étiquettes, variations locales et dashboards par site.' },
            { id: '4', title: 'Publiez‑vous des posts/Q&A ?', content: 'Oui, calendrier éditorial + Q&A pour réduire les frictions et capter du trafic brand.' },
          ] as FAQItem[]}
        />
      </section>
    </SectionPage>
  );
}


