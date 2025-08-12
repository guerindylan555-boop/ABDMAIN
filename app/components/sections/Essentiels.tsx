export default function Essentiels() {
  const items = [
    {
      title: "Sur‑mesure et rapide",
      text: "Sites & funnels pensés conversion, performances (LCP/CLS/INP) maîtrisées.",
    },
    {
      title: "Ops centralisés",
      text: "CRM, tunnels, paiements, avis — un socle unique, simple à piloter.",
    },
    {
      title: "Automations & IA",
      text: "Relances 24/7 (appels/SMS/emails), prise de RDV et agents IA utiles.",
    },
    {
      title: "ROI mesurable",
      text: "Dashboards lisibles, tracking propre et A/B testing continu.",
    },
  ] as const;

  return (
    <section id="essentiels" className="py-0">
      {/* full‑bleed container */}
      <div className="w-full">
        <div className="glass-highlight rounded-none border-y border-white/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
            <div className="max-w-2xl">
              <h2 className="text-h2 font-bold tracking-tight">Les essentiels <span className="text-brand">sur‑mesure</span></h2>
              <p className="mt-3 text-lead text-neutral-700 dark:text-neutral-300">
                Un socle clair pour grandir: exécution <span className="text-brand">sur‑mesure</span>, automations pragmatiques et mesure fiable.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {items.map((i) => (
                <div
                  key={i.title}
                  className="rounded-xl p-6 border border-white/10 bg-white/10 dark:bg-neutral-900/20"
                >
                  <h3 className="font-semibold text-lg">{i.title}</h3>
                  <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{i.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


