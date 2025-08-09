import type { ReactNode } from "react";

export type TocItem = { id: string; label: string };

export default function SectionPage({
  title,
  description,
  tag,
  toc = [],
  children,
}: {
  title: string;
  description?: string;
  tag?: string;
  toc?: TocItem[];
  children: ReactNode;
}) {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      {/* En‑tête */}
      <header className="rounded-2xl glass p-8 md:p-10">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          {tag && (
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">
              {tag}
            </span>
          )}
        </div>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-white">{title}</h1>
        {description && (
          <p className="mt-3 text-neutral-300 text-base md:text-lg max-w-3xl">{description}</p>
        )}
      </header>

      {/* Corps + Aside */}
      <div className="mt-8 grid md:grid-cols-[1fr_360px] gap-8">
        <article className="rounded-2xl glass p-6 md:p-8">
          {children}
        </article>

        <aside className="space-y-4">
          {toc.length > 0 && (
            <section className="rounded-2xl glass p-5 sticky top-24">
              <h4 className="font-semibold text-white">Sommaire</h4>
              <nav className="mt-3 text-sm text-neutral-300 space-y-2">
                {toc.map((item) => (
                  <a key={item.id} className="block hover:text-white" href={`#${item.id}`}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </section>
          )}

          <section className="rounded-2xl glass p-5">
            <h4 className="font-semibold text-white">Prêt à avancer ?</h4>
            <p className="mt-2 text-sm text-neutral-300">Réservez un audit gratuit, on priorise les gains rapides.</p>
            <a
              href="/reservation-appel"
              className="mt-3 inline-flex rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
            >
              Audit gratuit
            </a>
          </section>
        </aside>
      </div>
    </main>
  );
}


