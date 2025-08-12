export default function Pricing() {
  return (
    <section id="offres" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Offres</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Découvrez nos formules et détails d’inclusions.</p>
          </div>
          <div className="mt-8">
            <a href="/offres" className="inline-flex rounded-lg border border-white/20 bg-white/20 text-white px-4 py-2 backdrop-blur hover:bg-white/30">Voir les offres →</a>
          </div>
        </div>
      </div>
    </section>
  );
}


