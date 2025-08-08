const testimonials = [
  {
    name: "Sophie, artisan",
    text: "En 2 mois, ma fiche Google génère 3x plus d\'appels. Organisation nickel.",
  },
  {
    name: "Karim, coach",
    text: "Site rapide et clair, j\'ai doublé mes demandes via le formulaire.",
  },
  {
    name: "Lucie, e-com",
    text: "Les relances SMS ont récupéré 18% de paniers. Super suivi.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Témoignages</h2>
          <p className="mt-3 text-neutral-600">Des résultats concrets, rapidement.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-xl border border-neutral-200 p-6 bg-white">
              <p className="text-neutral-800">“{t.text}”</p>
              <footer className="mt-4 text-sm text-neutral-600">{t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


