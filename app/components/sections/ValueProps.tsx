export default function ValueProps() {
  const items = [
    {
      title: "Centralisez l'opérationnel",
      text:
        "CRM, tunnels, paiements et avis dans un seul écosystème simple à piloter.",
    },
    {
      title: "Automatisez le suivi",
      text:
        "Chat IA, rappel des appels manqués par SMS et prise de rendez‑vous automatique.",
    },
    {
      title: "Dominez la recherche locale",
      text:
        "SEO assisté par IA et optimisation Google Business pour capter la demande qualifiée.",
    },
    {
      title: "Mesurez le ROI",
      text:
        "Tableaux de bord lisibles, tracking propre et A/B testing pour progresser en continu.",
    },
  ] as const;

  return (
    <section id="value-props" className="py-16 md:py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-h2 font-bold tracking-tight">
              Les essentiels pour <span className="text-[--brand]">accélérer</span> avec AB Digital
            </h2>
            <p className="mt-3 text-lead text-neutral-700 dark:text-neutral-300">
              Un socle clair, des automations pragmatiques et une mesure qui guide les décisions.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {items.map((i) => (
              <div
                key={i.title}
                className="rounded-xl p-6 border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 pressable"
              >
                <h3 className="font-semibold text-lg">{i.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


