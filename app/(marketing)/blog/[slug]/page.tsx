import type { Metadata } from "next";

type PageProps = { params: { slug: string } };

export function generateMetadata({ params }: PageProps): Metadata {
  const title = `Titre de l’article — ${params.slug}`;
  const description = "Extrait court de l’article pour donner envie de lire.";
  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    alternates: { canonical: `/blog/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const date = new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  const readingTime = "6 min";

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      {/* Fil d’Ariane */}
      <nav aria-label="Fil d’Ariane" className="text-sm text-neutral-400">
        <a className="hover:text-neutral-300" href="/">Accueil</a>
        <span className="mx-2">/</span>
        <a className="hover:text-neutral-300" href="/blog">Blog</a>
        <span className="mx-2">/</span>
        <span className="text-neutral-300">{params.slug}</span>
      </nav>

      {/* En‑tête d’article */}
      <header className="mt-6 grid md:grid-cols-[1fr_360px] gap-8 items-start">
        <div className="rounded-2xl glass p-6 md:p-8">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] tracking-wide uppercase">SEO</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readingTime} de lecture</span>
          </div>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Titre de l’article: maquette de page de blog élégante et lisible
          </h1>
          <p className="mt-3 text-neutral-300 text-base md:text-lg max-w-3xl">
            Un chapeau concis qui explique la promesse de l’article. Il donne le contexte, annonce la structure et
            met en avant la valeur.
          </p>
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
          <div className="prose max-w-none text-neutral-200">
            <h2 id="introduction">Introduction</h2>
            <p>
              Voici un paragraphe d’introduction. La mise en page privilégie la lisibilité: interlignage ample,
              longueurs de ligne raisonnables et contrastes soignés.
            </p>

            <h3 id="points-cles">Points clés</h3>
            <ul>
              <li>Clarté de la structure et des titres.</li>
              <li>Visuels légers et pertinents.</li>
              <li>CTA contextuels et non intrusifs.</li>
            </ul>

            <h3 id="exemple">Exemple</h3>
            <p>
              Un bloc de code ou une citation peut être mis en avant pour illustrer le propos. Les listes numérotées
              aident à guider la lecture.
            </p>
            <ol>
              <li>Problème</li>
              <li>Analyse</li>
              <li>Solution</li>
            </ol>

            <blockquote>
              « Une citation inspirante ou une donnée clé renforce l’autorité de l’article. »
            </blockquote>

            <h2 id="conclusion">Conclusion</h2>
            <p>
              Résumé des apprentissages et appel à l’action vers le contact, un essai ou la lecture d’articles liés.
            </p>
          </div>
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


