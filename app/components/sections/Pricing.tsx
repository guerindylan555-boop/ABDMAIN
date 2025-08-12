import SimplePricing from "@/components/mvpblocks/simple-pricing";

export default function Pricing() {
  return (
      <section id="offres" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Offres</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Sans engagement, pilotés par les résultats.</p>
          </div>

          <div className="mt-10">
            <SimplePricing />
          </div>
        </div>
      </div>
      </section>
  );
}


