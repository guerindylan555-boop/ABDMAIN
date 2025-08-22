import CardFlip from '@/components/card-flip';

export function CustomerJourneySection() {
  return (
    <section id="parcours" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:py-16">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">Tout ce dont vous avez besoin dans un écosystème unique et efficace</h2>
        <p className="mt-3 text-white/80">Un parcours client entièrement maîtrisé : attirer les bons prospects, automatiser les relances, convertir plus rapidement et fidéliser durablement.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-center">
          <CardFlip
            title={<>1 · Parcours client — Attirer</>}
            subtitle={<>Attirer</>}
            description={<>Un site web optimisé, un SEO efficace et des funnels performants pour générer un flux régulier de prospects qualifiés.</>}
            features={[
              'Site web optimisé',
              'SEO efficace',
              'Funnels performants',
              'Prospects qualifiés',
            ]}
          />
        </div>

        <div className="flex justify-center">
          <CardFlip
            title={<>2 · Parcours client — Automatiser</>}
            subtitle={<>Automatiser</>}
            description={<>Agents IA et séquences automatiques (SMS, emails, WhatsApp) qui assurent le suivi et la prise de rendez-vous sans effort.</>}
            features={[
              'Agents IA',
              'Relances SMS automatiques',
              'Emails & WhatsApp',
              'Prise de RDV auto',
            ]}
          />
        </div>

        <div className="flex justify-center">
          <CardFlip
            title={<>3 · Parcours client — Convertir</>}
            subtitle={<>Convertir</>}
            description={<>Pages rapides, formulaires intelligents et centralisation des appels et messages pour maximiser vos ventes.</>}
            features={[
              'Pages rapides',
              'Formulaires intelligents',
              'Appels & messages centralisés',
              'Maximiser les ventes',
            ]}
          />
        </div>

        <div className="flex justify-center">
          <CardFlip
            title={<>4 · Parcours client — Fidéliser & mesurer</>}
            subtitle={<>Fidéliser & mesurer</>}
            description={<>Gestion des avis, réputation en ligne, tableaux de bord clairs et suivi précis du retour sur investissement.</>}
            features={[
              'Gestion des avis',
              'Réputation en ligne',
              'Tableaux de bord clairs',
              'Suivi précis du ROI',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
