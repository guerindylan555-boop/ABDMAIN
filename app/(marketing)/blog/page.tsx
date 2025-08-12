import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog — AB Digital",
  description: "Articles sur les sites performants, le SEO (Google Business) et les automatisations IA.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <header className="rounded-2xl glass p-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Le blog</h1>
        <p className="mt-3 text-neutral-300 max-w-3xl">
          Conseils et retours d’expérience pour gagner en trafic, conversions et rétention grâce à un site rapide,
          un SEO maîtrisé (dont Google Business) et des automatisations intelligentes.
        </p>
      </header>

      <section className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-2xl glass p-5 flex flex-col">
            <div className="aspect-[16/10] rounded-lg bg-white/10 border border-white/10" />
            <div className="mt-4 text-xs text-neutral-400 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide">{p.tag}</span>
              <span>{new Date(p.date).toLocaleDateString("fr-FR")}</span>
            </div>
            <h2 className="mt-2 text-xl font-semibold text-white">{p.title}</h2>
            <p className="mt-1 text-sm text-neutral-300 flex-1">{p.description}</p>
            <a className="mt-4 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20" href={`/blog/${p.slug}`}>
              Lire l’article
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}


