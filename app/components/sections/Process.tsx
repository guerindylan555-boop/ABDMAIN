const steps = [
  {
    title: "1. Découverte",
    text: "Objectifs, audience, offres — on clarifie le plan d\'action.",
  },
  { title: "2. Setup", text: "Site, analytics, CRM — on pose des bases solides." },
  { title: "3. Trafic", text: "SEO, Google Business, contenus — on capte la demande." },
  { title: "4. Conversion", text: "Automations IA, offres et relances — on convertit mieux." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Notre méthode</h2>
          <p className="mt-3 text-neutral-600">Un cycle mensuel centré sur la croissance.</p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <li key={s.title} className="rounded-xl border border-neutral-200 p-6">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


