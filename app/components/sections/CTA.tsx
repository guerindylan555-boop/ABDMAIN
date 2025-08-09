export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass p-10 md:p-14">
          <div className="md:flex items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Audit gratuit de 30 min</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Plan d’action clair, livrables rapides, optimisation continue chaque mois.
              </p>
            </div>
            <a
              href="/reservation-appel"
              className="mt-6 md:mt-0 inline-flex justify-center rounded-lg border border-white/20 bg-white/20 text-white px-6 py-3 font-medium backdrop-blur hover:bg-white/30"
            >
              Réserver un créneau
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


