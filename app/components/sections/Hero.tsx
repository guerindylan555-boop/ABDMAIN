"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden scroll-mt-24" id="top">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 md:py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[--gradient-from] to-[--gradient-to]">
          AB Digital
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Sites web, SEO, Google Business, automatisation appels/SMS, offres IA — au mois.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="/contact#contact"
            className="inline-flex rounded-lg bg-neutral-900 text-white px-6 py-3 font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] ring-2 ring-transparent hover:ring-[--ring]"
          >
            Demander un devis
          </a>
          <a
            href="#services"
            className="inline-flex rounded-lg border border-neutral-300 dark:border-neutral-700 px-6 py-3 font-medium hover:border-neutral-400 dark:hover:border-neutral-600"
          >
            Découvrir nos services
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" />
    </section>
  );
}


