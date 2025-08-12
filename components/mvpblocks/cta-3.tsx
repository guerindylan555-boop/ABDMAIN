import { ButtonLink } from "@/app/components/ui/button";

export default function CTA3() {
  return (
    <section className="relative px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl glass-highlight border border-white/10">
          <div className="relative z-10 grid gap-0 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[--brand]">
                Passez à l’action
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Prêts à{' '}
                <span className="text-[--brand]">
                  transformer
                </span>{' '}
                votre marketing ?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                96% des visiteurs quittent les sites sans agir. Nos tunnels
                optimisés pour la conversion récupèrent ces opportunités perdues
                et les transforment en revenus prévisibles.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 rounded-full bg-white/10 p-2 text-[--brand]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 10L9 11.5L12.5 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      Session stratégique gratuite
                    </h3>
                    <p className="text-muted-foreground">
                      Sans engagement, uniquement de la valeur pour votre activité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 rounded-full bg-white/10 p-2 text-[--brand]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 10L9 11.5L12.5 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Plan de tunnel personnalisé
                    </h3>
                    <p className="text-muted-foreground">
                      Repartez avec des actions concrètes, quel que soit votre prestataire.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 rounded-full bg-white/10 p-2 text-[--brand]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 10L9 11.5L12.5 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Projection du ROI
                    </h3>
                    <p className="text-muted-foreground">
                      Visualisez l’impact potentiel sur votre chiffre d’affaires avant d’investir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden glass p-8 text-white md:p-12 lg:p-16">
              <div className="absolute top-0 right-0 h-full w-full opacity-10"></div>
              <div className="relative z-10">
                <h3 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
                  N’attendez plus avec un tunnel marketing qui fuit
                </h3>
                <p className="mb-8 text-white/80">
                  Chaque jour avec un tunnel sous‑performant vous coûte :
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold">
                      1
                    </div>
                    <p className="text-lg">Des leads qualifiés qui ne convertissent pas</p>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold">
                      2
                    </div>
                    <p className="text-lg">Du chiffre d’affaires qui part chez vos concurrents</p>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold">
                      3
                    </div>
                    <p className="text-lg">Du budget pub gaspillé sur un trafic qui ne convertit pas</p>
                  </div>
                </div>

                <div className="mt-10 rounded-xl glass p-6">
                  <p className="text-lg font-medium">
                    « Nous avons fait passer notre taux de conversion de 1,7% à 6,3% en 31 jours
                    après la mise en place du système. »
                  </p>
                  <p className="mt-3 font-medium text-white/70">
                    — Ryan Miller, CEO, Apex Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
