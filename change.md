## 2025-08-14

- Performance — Smooth scroll (Lenis): interrupteur runtime pour diagnostic et accessibilité.
  - Désactivé par défaut au runtime; activer via `?lenis=on` (`on`/`1`/`true`).
  - Respect de `prefers-reduced-motion: reduce` (désactivation automatique).
  - Fichier modifié: `app/smooth-scroll.tsx`.
  - Test: recharger une page, sans paramètre (Lenis OFF) puis avec `?lenis=on` (Lenis ON) pour comparer la fluidité.

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
