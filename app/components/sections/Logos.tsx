export default function Logos() {
  const clients = [
    { name: "Client A" },
    { name: "Client B" },
    { name: "Client C" },
    { name: "Client D" },
    { name: "Client E" },
  ];

  return (
    <section id="clients" className="py-16 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8" data-float data-float-amplitude="7" data-float-depth="0.9" data-snap>
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">Ils nous font confiance</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6">
            {clients.map((c) => (
              <div
                key={c.name}
                className="h-12 rounded-md border border-neutral-200/60 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-300 grid place-items-center"
              >
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


