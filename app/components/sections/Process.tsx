import Link from "next/link";
const steps = [
  {
    title: "1. Analyse",
    text: "Besoins, performances, concurrence — on priorise les axes d’amélioration.",
  },
  { title: "2. Fondations", text: "Site sur‑mesure ultra optimisé, analytics et CRM — bases solides." },
  { title: "3. Trafic", text: "SEO, Google Business, Ads — on augmente l’afflux qualifié." },
  { title: "4. Conversion", text: "Automatisations d’appels/RDV, relances — on convertit sans pertes." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/notre-methode"
          className="block rounded-2xl glass-panel p-8 md:p-10 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[--ring] pressable"
          aria-label="Découvrir notre méthode en détail"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Notre méthode</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Analyse → Fondations → Trafic → Conversion & automatisations.</p>
          </div>

          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {steps.map((s) => (
                <li key={s.title} className="rounded-xl p-6 border border-neutral-200/60 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30 pressable">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm">{s.text}</p>
              </li>
            ))}
          </ol>
        </Link>
      </div>
    </section>
  );
}


