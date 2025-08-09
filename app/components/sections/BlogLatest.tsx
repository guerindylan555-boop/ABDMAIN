import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag?: string;
};

// TODO: brancher sur des données réelles (Prismic ou autre) si disponibles
const mockPosts: Post[] = [
  {
    slug: "article-1",
    title: "Comment accélérer votre site pour booster vos conversions",
    excerpt: "Mesures concrètes pour gagner +20 à +30 points Lighthouse et réduire le TTFB.",
    date: "2025-01-05",
    tag: "Perf",
  },
  {
    slug: "article-2",
    title: "SEO local: 7 quick wins sur Google Business",
    excerpt: "Optimisations simples pour remonter sur les requêtes locales et capter la demande.",
    date: "2025-01-12",
    tag: "SEO",
  },
  {
    slug: "article-3",
    title: "Automatisations IA: relances SMS qui convertissent",
    excerpt: "Exemples de séquences d’activation et de récupération de panier par SMS.",
    date: "2025-01-18",
    tag: "IA",
  },
];

export default function BlogLatest({ posts = mockPosts }: { posts?: Post[] }) {
  return (
    <section id="blog-latest" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl glass-panel p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Derniers articles</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Insights actionnables pour gagner en trafic et conversions.</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-2xl glass-card p-5 flex flex-col transition-transform hover:scale-[1.01] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[--ring] pressable"
                aria-label={`Lire l’article: ${p.title}`}
              >
                <div className="aspect-[16/10] rounded-lg bg-white/10 border border-white/10" />
                <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                  {p.tag && (
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide">{p.tag}</span>
                  )}
                  <span>{new Date(p.date).toLocaleDateString("fr-FR")}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300 flex-1">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm">Lire l’article →</span>
              </Link>
            ))}
          </div>

          {/* Liens internes contextuels */}
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-neutral-600 dark:text-neutral-400">Explorer:</span>
            <Link href="/blog" className="rounded-lg px-3 py-1.5 border border-white/10 bg-white/10 hover:bg-white/20">Tous les articles</Link>
            <Link href="/blog/article-1" className="rounded-lg px-3 py-1.5 border border-white/10 bg-white/10 hover:bg-white/20">Guide vitesse web</Link>
            <Link href="/blog/article-2" className="rounded-lg px-3 py-1.5 border border-white/10 bg-white/10 hover:bg-white/20">SEO local</Link>
            <Link href="/blog/article-3" className="rounded-lg px-3 py-1.5 border border-white/10 bg-white/10 hover:bg-white/20">Automations IA</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


