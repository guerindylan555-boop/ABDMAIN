export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-neutral-950 text-white p-10 md:p-14">
          <div className="md:flex items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Prêt à démarrer ?
              </h3>
              <p className="mt-2 text-neutral-300">
                Plan d&apos;action clair, livrables rapides, optimisation continue chaque mois.
              </p>
            </div>
            <a
              href="/contact#contact"
              className="mt-6 md:mt-0 inline-flex justify-center rounded-lg bg-white text-neutral-950 px-6 py-3 font-medium"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


