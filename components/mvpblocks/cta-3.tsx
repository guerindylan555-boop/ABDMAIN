import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default function CTA3() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-10 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 md:p-14">
          <div className="absolute -z-10 right-[-10%] top-[-30%] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -z-10 left-[-10%] bottom-[-30%] h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                Prêt à accélérer votre acquisition ?
              </h3>
              <p className="text-muted-foreground mt-3 max-w-prose text-base">
                Obtenez un diagnostic gratuit de 15 minutes et repartez avec 2–3 actions concrètes pour améliorer vos leads.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end md:justify-center">
              <a
                href="/reservation-appel"
                className={cn(
                  buttonVariants({ variant: 'default', size: 'lg' }),
                  'px-6 py-3'
                )}
              >
                Réserver un appel
              </a>
              <a
                href="/contact"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'px-6 py-3'
                )}
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
