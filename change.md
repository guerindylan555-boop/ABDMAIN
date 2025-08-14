## 2025-08-14

- Performance — LCP: arrière-plan converti en `next/image` (préchargement optimisé)
  - Arrière-plan LCP désormais rendu via `next/image` en `absolute`, avec `priority`, `fetchPriority="high"`, `fill` et `sizes="100vw"`.
  - Conservation du masque (`mask-image`) et du positionnement pour éviter tout CLS.
  - Fichier modifié: `app/layout.tsx`.

- Caching & formats images modernes
  - Ajout de `next.config.mjs` pour activer `images.formats = ["image/avif", "image/webp"]`.
  - Ajout d’en-têtes `Cache-Control` agressifs pour `/_next/static`, `/_next/image`, `/img`, `/favicon.ico`.
  - Fichier ajouté: `next.config.mjs`.

- Contrôles (à faire après déploiement)
  - LCP préchargé (préchargement Next/Image)
    - Ouvrir la page d’accueil, Chrome DevTools → onglet Elements → `<head>` et vérifier la présence d’un lien:
      - Sélecteur: `link[rel="preload"][as="image"]` dont `href` cible l’image LCP (gradient).
    - Ou DevTools → onglet Network → filtrer par « Preload » et confirmer l’image préchargée.
  - Caching des assets (headers)
    - Récupérer une URL `_next/static` du site en prod puis exécuter:
      ```bash
      curl -I 'https://www.ab-digital.fr/_next/static/REPLACE_WITH_PATH'
      ```
      - Attendu: `Cache-Control: public, immutable, max-age=31536000`.
    - Vérifier l’endpoint d’images optimisées Next:
      ```bash
      curl -I 'https://www.ab-digital.fr/_next/image?url=%2Fimg%2Fbackground%2Fgradient-optimized.png&w=1920&q=75'
      ```
      - Attendu: `Cache-Control: public, max-age=31536000, immutable`.

- Performance — LCP/FCP mobile (Lighthouse): allègement du rendu critique.
  - Suppression des images de fond PNG bloquantes dans `app/layout.tsx` (ellipse et grain). Conserve le halo et overlays CSS.
  - `Pricing` et `MagneticButtons` chargés en différé via `next/dynamic` (SSR off) pour réduire JS initial.
  - Ajout de `loading="lazy"`, `decoding="async"`, `fetchPriority="low"` aux `<img>` non critiques (footer, testimonials).
  - Fichiers modifiés: `app/layout.tsx`, `app/components/Footer.tsx`, `components/mvpblocks/testimonials-marquee.tsx`.
  - Suivi: considérer WebP/AVIF pour `grain.png` si besoin ultérieur.
