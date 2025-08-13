import { ButtonLink } from "@/app/components/ui/button";

export default function CTA3() {
  return (
    <section className="relative px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl glass-highlight border border-white/10">
          <div className="relative z-10 grid gap-0 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[--brand]">
                Plan d’action sur‑mesure
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Un plan d’action 100% sur‑mesure pour propulser votre entreprise grâce à l’IA
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Notre équipe conçoit et intègre des processus entièrement personnalisés, adaptés à vos spécificités. Profitez d’un accompagnement complet, de l’analyse initiale à la mise en œuvre, pour maximiser vos performances et vos résultats.
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
                      Analyse sur mesure
                    </h3>
                    <p className="text-muted-foreground">
                      Des solutions adaptées à vos objectifs et à votre contexte métier.
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
                      Mise en œuvre clé en main
                    </h3>
                    <p className="text-muted-foreground">
                      Technologies avancées, agents IA et automatisations intégrés à vos outils.
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
                      Suivi personnalisé
                    </h3>
                    <p className="text-muted-foreground">
                      Résultats mesurables, itérations continues et tableaux de bord clairs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bouton déplacé dans la colonne de droite */}
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden glass p-8 text-white md:p-12 lg:p-16">
              <div className="absolute top-0 right-0 h-full w-full opacity-10"></div>
              <div className="relative z-10">
                <h3 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
                  Réservez une visio stratégique de 60 min
                </h3>
                <p className="mb-8 text-white/80">
                  Repartez avec une vision claire et actionnable. Nous ne faisons pas de blabla. Juste de la stratégie et des résultats.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold">
                      1
                    </div>
                    <p className="text-lg">Analyse personnalisée de votre contexte et de vos priorités</p>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold">
                      2
                    </div>
                    <p className="text-lg">Plan d’action et architecture IA adaptés à vos objectifs</p>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg font-bold">
                      3
                    </div>
                    <p className="text-lg">Roadmap d’exécution et métriques de suivi</p>
                  </div>
                </div>

                <div className="mt-10 rounded-xl glass p-6">
                  <p className="text-lg font-medium">
                    « 60 minutes très concrètes : priorisation, chiffrage, plan d’action. On repart avec une trajectoire claire. »
                  </p>
                  <p className="mt-3 font-medium text-white/70">
                    — Direction PME, services locaux
                  </p>
                </div>

              <div className="mt-8">
                <ButtonLink href="/reservation-appel" variant="glow" size="lg" className="w-full">
                  Réserver une visio stratégique (60 min)
                </ButtonLink>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
