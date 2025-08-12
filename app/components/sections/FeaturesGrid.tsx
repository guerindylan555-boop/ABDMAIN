export default function FeaturesGrid() {
  const features = [
    { title: "Sites & Funnels", text: "Pages rapides, funnels efficaces, A/B testing et tracking propre." },
    { title: "Agents IA", text: "Chat, nurturing multicanal, prise de RDV et réponses 24/7." },
    { title: "Réputation", text: "Capture d’avis, réponses assistées par IA et vitrines sociales." },
    { title: "Appels & Messages", text: "Missed‑call text back, voice drops, bots mots‑clés, routage." },
    { title: "Lead Gen", text: "Aimants à leads, formulaires, qualification et séquences de relance." },
    { title: "Analytics", text: "Dashboards lisibles, objectifs business, attribution cohérente." },
  ] as const;

  return (
    <section id="fonctionnalites" className="py-16 md:py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Un stack tout‑en‑un, sans complexité</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              Inspiré des meilleures plateformes (type sub‑compte GHL), adapté à votre réalité.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl p-6 border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 pressable"
              >
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


