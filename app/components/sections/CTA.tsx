import { ButtonLink } from "@/app/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-highlight p-10 md:p-14">
          <div className="md:flex items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Diagnostic croissance — 90 minutes</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">Repartez avec une feuille de route priorisée pour gagner des leads et automatiser le suivi.</p>
            </div>
            <ButtonLink
              href="/reservation-appel"
              variant="glow"
              size="lg"
              className="mt-6 md:mt-0"
              data-magnetic
            >
              Audit gratuit
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}


