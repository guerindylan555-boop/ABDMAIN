import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog/posts";

type ParamsPromise = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ParamsPromise): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post ? post.title : `Article — ${slug}`;
  const description = post ? post.description : "Article du blog AB Digital.";
  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: ParamsPromise) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const date = post ? new Date(post.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" }) : new Date().toLocaleDateString("fr-FR");
  const readingTime = post ? `${post.estimatedReadingMinutes} min` : "6 min";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");
  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
        url: `${siteUrl}/blog/${post.slug}`,
        author: { "@type": "Organization", name: "AB Digital" },
        publisher: { "@type": "Organization", name: "AB Digital" },
        articleSection: post.tag,
        inLanguage: "fr-FR",
      }
    : null;

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      {jsonLd && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {/* Fil d’Ariane */}
      <nav aria-label="Fil d’Ariane" className="text-sm text-neutral-400">
        <Link className="hover:text-neutral-300" href="/">Accueil</Link>
        <span className="mx-2">/</span>
        <Link className="hover:text-neutral-300" href="/blog">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-300">{slug}</span>
      </nav>

      {/* En‑tête d’article */}
      <header className="mt-6 grid md:grid-cols-[1fr_360px] gap-8 items-start">
        <div className="rounded-2xl glass p-6 md:p-8">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
             <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">{post?.tag ?? "Blog"}</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readingTime} de lecture</span>
          </div>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white">{post?.title ?? "Article de blog"}</h1>
          <p className="mt-3 text-neutral-300 text-base md:text-lg max-w-3xl">{post?.description ?? "Article du blog AB Digital."}</p>
        </div>

        {/* Visuel */}
        <div className="rounded-2xl overflow-hidden glass p-2">
          <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-[--gradient-from]/30 to-[--gradient-to]/30 grid place-items-center text-neutral-300 text-sm">
            Image de couverture (16:10)
          </div>
        </div>
      </header>

      {/* Corps + Aside */}
      <div className="mt-10 grid md:grid-cols-[1fr_360px] gap-8">
        <article className="rounded-2xl glass p-6 md:p-8">
          {post?.body}
        </article>

        <aside className="space-y-4">
          <section className="rounded-2xl glass p-5 sticky top-24">
            <h4 className="font-semibold text-white">Sommaire</h4>
            <nav className="mt-3 text-sm text-neutral-300 space-y-2">
              <a className="block hover:text-white" href="#introduction">Introduction</a>
              <a className="block hover:text-white" href="#points-cles">Points clés</a>
              <a className="block hover:text-white" href="#exemple">Exemple</a>
              <a className="block hover:text-white" href="#conclusion">Conclusion</a>
            </nav>
          </section>

          <section className="rounded-2xl glass p-5">
            <h4 className="font-semibold text-white">Restez informé</h4>
            <p className="mt-2 text-sm text-neutral-300">Recevez nos prochains articles par email.</p>
            <form className="mt-3 flex gap-2">
              <input className="flex-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-400" placeholder="Votre email" />
              <button className="rounded-lg px-3 py-2 bg-white/20 text-white border border-white/10 hover:bg-white/30">OK</button>
            </form>
          </section>

          <section className="rounded-2xl glass p-5">
            <h4 className="font-semibold text-white">Partager</h4>
            <div className="mt-2 flex gap-2 text-sm">
              <a className="rounded-lg px-3 py-2 bg-white/10 border border-white/10 hover:bg-white/20" href="#">Twitter</a>
              <a className="rounded-lg px-3 py-2 bg-white/10 border border-white/10 hover:bg-white/20" href="#">LinkedIn</a>
              <a className="rounded-lg px-3 py-2 bg-white/10 border border-white/10 hover:bg-white/20" href="#">Facebook</a>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}


