import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  date: string; // ISO
  estimatedReadingMinutes: number;
  body: ReactNode;
};

export const posts: BlogPost[] = [
  {
    slug: "checklist-google-business-2025",
    title: "Google Business: la checklist 2025 pour remonter dans le Pack Local",
    description:
      "Profil, catégories, posts, avis et tracking: suivez la checklist 2025 pour gagner en visibilité locale et générer plus d’appels.",
    tag: "SEO local",
    date: "2025-06-15",
    estimatedReadingMinutes: 7,
    body: (
      <div className={"prose max-w-none text-neutral-200"}>
        <h2 id="introduction">Introduction</h2>
        <p>
          Votre fiche Google Business est la porte d’entrée de votre acquisition locale. En 2025, les signaux de
          complétude, d’activité (posts) et de réputation (avis) pèsent lourd pour apparaître dans le Pack Local.
          Voici la checklist concrète pour optimiser rapidement.
        </p>

        <h3 id="points-cles">Points clés</h3>
        <ul>
          <li>Choisir la bonne catégorie principale et 2–3 secondaires pertinentes.</li>
          <li>Publier des posts courts (hebdo) avec UTM pour mesurer les clics.</li>
          <li>Demander des avis après chaque prestation et y répondre.</li>
          <li>Ajouter des attributs (accessibilité, paiement…) et un descriptif clair.</li>
        </ul>

        <h3 id="exemple">Checklist 2025</h3>
        <ol>
          <li>Nom, adresse, téléphone (NAP) identiques à ceux de votre site et de vos citations.</li>
          <li>Catégories: 1 principale précise + 2–3 secondaires utiles.</li>
          <li>Description: 750 caractères, mots-clés naturels, bénéfices clairs.</li>
          <li>Photos récentes (logo, équipe, réalisations) et couverture nette.</li>
          <li>Posts: 1 par semaine avec lien UTM vers une page locale ou une offre.</li>
          <li>FAQ: 3–5 questions fréquentes pertinentes à votre service.</li>
          <li>Messages: activer si vous pouvez répondre pour gagner des leads.</li>
          <li>Avis: liens courts/QR, réponses personnalisées, gestion des négatifs.</li>
          <li>Attributs: modes de paiement, accessibilité, RDV, zones desservies.</li>
          <li>Tracking: GSC, GA4, et événements (clic téléphone, itinéraire, site).</li>
        </ol>

        <h2 id="conclusion">Conclusion</h2>
        <p>
          Appliquez la checklist en 2 semaines puis entretenez le rythme (posts/avis). Couplée à des pages locales
          optimisées, votre fiche devient un levier régulier d’appels.
        </p>
      </div>
    ),
  },
  {
    slug: "pack-local-en-8-semaines",
    title: "SEO local: comment apparaître dans le Pack Local en 8 semaines",
    description:
      "Méthode pas‑à‑pas: signaux on‑page, fiches locales, citations, avis et suivi pour gagner le Pack Local.",
    tag: "SEO local",
    date: "2025-06-28",
    estimatedReadingMinutes: 8,
    body: (
      <div className={"prose max-w-none text-neutral-200"}>
        <h2 id="introduction">Introduction</h2>
        <p>
          Le Pack Local met en avant 3 résultats. Pour y entrer, vous devez envoyer des signaux cohérents entre votre
          site, vos pages locales et votre fiche Google Business.
        </p>
        <h3 id="points-cles">Points clés</h3>
        <ul>
          <li>Pages locales dédiées (ville/service) avec NAP et avis intégrés.</li>
          <li>Maillage interne vers ces pages et données structurées LocalBusiness.</li>
          <li>Fiche Google Business active: posts, photos, avis.</li>
          <li>Citations NAP cohérentes sur annuaires locaux/sectoriels.</li>
        </ul>
        <h3 id="exemple">Plan 8 semaines</h3>
        <ol>
          <li>S1–S2: audit, choix des villes/services, modèle de page locale.</li>
          <li>S3–S4: production de 2–4 pages locales + maillage + schéma.</li>
          <li>S5: optimisation fiche (catégories, posts, photos).</li>
          <li>S6: campagne d’avis + réponse aux avis existants.</li>
          <li>S7: citations NAP principales, vérif de cohérence.</li>
          <li>S8: mesure: impressions/positions locales, clics et appels.</li>
        </ol>
        <h2 id="conclusion">Conclusion</h2>
        <p>
          La constance (posts/avis) consolide vos positions. Répétez le plan par zone prioritaire et mesurez chaque
          mois.
        </p>
      </div>
    ),
  },
  {
    slug: "core-web-vitals-tpe",
    title: "Core Web Vitals pour TPE: passer au vert sans refaire tout le site",
    description:
      "Quick wins d’images, de polices, de CSS et de scripts pour améliorer LCP, CLS et INP sans refonte complète.",
    tag: "Performance",
    date: "2025-07-05",
    estimatedReadingMinutes: 7,
    body: (
      <div className={"prose max-w-none text-neutral-200"}>
        <h2 id="introduction">Introduction</h2>
        <p>
          Les Core Web Vitals impactent le SEO et la conversion. Voici des actions simples pour passer au vert.
        </p>
        <h3 id="points-cles">Points clés</h3>
        <ul>
          <li>Images: formats modernes (AVIF/WebP), dimensions fixes, lazy-loading.</li>
          <li>Polices: sous‑ensemble, swap, préchargement limité.</li>
          <li>CSS: purge, taille critique en ligne, évitez le blocking inutile.</li>
          <li>JS: différé, fractionné, supprimez le superflu.</li>
        </ul>
        <h3 id="exemple">Exemple de to‑do</h3>
        <ol>
          <li>Auditer avec PageSpeed Insights et Lighthouse.</li>
          <li>Compresser les images &gt; 200 Ko et définir width/height.</li>
          <li>Activer font-display: swap et limiter les variantes.</li>
          <li>Retirer scripts non utilisés (widgets, trackers redondants).</li>
        </ol>
        <h2 id="conclusion">Conclusion</h2>
        <p>
          Priorisez les quick wins, mesurez, puis affinez. Vitesse = meilleur SEO et meilleures conversions.
        </p>
      </div>
    ),
  },
  {
    slug: "checklist-refonte-seo",
    title: "Refonte de site: la checklist SEO avant/pendant/après",
    description:
      "Évitez la chute SEO: mapping d’URLs, redirections, contenus, technique et recettage post‑mise en ligne.",
    tag: "SEO",
    date: "2025-07-12",
    estimatedReadingMinutes: 9,
    body: (
      <div className={"prose max-w-none text-neutral-200"}>
        <h2 id="introduction">Introduction</h2>
        <p>
          Une refonte mal préparée fait perdre trafic et positions. Voici la checklist pour sécuriser l’opération.
        </p>
        <h3 id="points-cles">Points clés</h3>
        <ul>
          <li>Inventaire des URLs et redirections 301 mappées.</li>
          <li>Conserver/optimiser les pages qui rankent déjà.</li>
          <li>Recettage technique (logs, erreurs, balises, vitesse).</li>
          <li>Relance d’indexation et monitoring post‑prod.</li>
        </ul>
        <h3 id="exemple">Checklist</h3>
        <ol>
          <li>Avant: crawl, mapping, contenus prioritaires, plan de redirections.</li>
          <li>Pendant: balises, canonicals, hreflang, sitemaps, vitesse.</li>
          <li>Après: vérifs GSC, 404, logs, positions, conversions.</li>
        </ol>
        <h2 id="conclusion">Conclusion</h2>
        <p>
          La réussite d’une refonte SEO dépend de la préparation et du contrôle qualité. Ne migrez pas sans checklist.
        </p>
      </div>
    ),
  },
  {
    slug: "sequences-sms-relance",
    title: "Relances SMS qui convertissent: 7 séquences prêtes à l’emploi",
    description:
      "Modèles de relance pour no‑show, devis non signés et paniers abandonnés. Timing, ton et conformité RGPD.",
    tag: "Automatisation",
    date: "2025-07-19",
    estimatedReadingMinutes: 8,
    body: (
      <div className={"prose max-w-none text-neutral-200"}>
        <h2 id="introduction">Introduction</h2>
        <p>
          Les SMS bien timés récupèrent des ventes sans budget pub. Voici des séquences efficaces et conformes.
        </p>
        <h3 id="points-cles">Points clés</h3>
        <ul>
          <li>Consentement et désinscription explicites.</li>
          <li>Valeur immédiate (rappel, lien, offre): pas d’effets de style.</li>
          <li>Fenêtres horaires raisonnables et limites de fréquence.</li>
        </ul>
        <h3 id="exemple">7 séquences</h3>
        <ol>
          <li>No‑show RDV: J‑1, J0 + 30 min, J+1.</li>
          <li>Devis non signé: J+1, J+3, J+7 (preuve sociale).</li>
          <li>Panier abandonné: 1 h, 24 h (incitation limitée).</li>
          <li>Relance SAV: NPS + demande d’avis Google.</li>
          <li>Campagne locale: offre courte + lien UTM.</li>
          <li>Réactivation clients inactifs: valeur/actu.</li>
          <li>Feedback post‑achat: upsell discret.</li>
        </ol>
        <h2 id="conclusion">Conclusion</h2>
        <p>
          Testez une séquence par cas d’usage, mesurez la conversion (clic, appel, vente) et itérez. Peu de mots, un
          maximum de clarté.
        </p>
      </div>
    ),
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}


