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
        <p className="text-center text-sm text-neutral-500">Ils nous font confiance</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="h-12 rounded-md border border-neutral-200 bg-white text-neutral-500 grid place-items-center"
            >
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


