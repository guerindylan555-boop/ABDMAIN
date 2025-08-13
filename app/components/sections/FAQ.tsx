import Faq1, { FAQItem } from "@/components/mvpblocks/faq-1";

export default function FAQ() {
  const items: FAQItem[] = [
    { title: "Y a‑t‑il un engagement ?", content: "Non. Nos accompagnements sont mensuels et résiliables à tout moment." },
    { title: "Mensuel vs Annuel: comment marche la remise ?", content: "Le plan annuel applique -20% sur le mensuel (équivalent mensuel affiché), facturation annuelle, arrêt possible à échéance." },
    { title: "Quelles différences entre Starter, Croissance et Performance ?", content: "Starter couvre site/blog/CRM/GB/rapports essentiels; Croissance ajoute pages illimitées, jusqu’à 50 articles/mois, optimisation des notes, automatisations; Performance ajoute audit sur‑mesure et intégrations avancées." },
    { title: "Comment se déroule l’audit gratuit ?", content: "45–90 min en visio: revue site/GB/CRM/tracking, analyse rapide des opportunités; vous repartez avec une feuille de route priorisée." },
    { title: "Quels KPI suivez‑vous ?", content: "Trafic, positions, actions Google Business, leads/RDV, taux de conversion, temps de réponse, appels manqués, revenus/ROAS quand applicable." },
    { title: "Pouvez‑vous migrer mon site et conserver le SEO ?", content: "Oui: redirections, reprise du contenu, tracking propre et vérification Search Console pour éviter les pertes." },
  ].map((it, i) => ({ id: String(i + 1), ...it }));
  return (
    <section id="faq" className="py-24 scroll-mt-24">
      <Faq1
        title="Questions fréquentes"
        lead="Comprendre nos offres, l’audit gratuit et la façon dont nous mesurons la performance."
        items={items}
      />
    </section>
  );
}


