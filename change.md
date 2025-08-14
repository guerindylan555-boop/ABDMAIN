## 2025-08-14

- Performance — Smooth scroll (Lenis): interrupteur runtime pour diagnostic et accessibilité.
  - Désactivé par défaut au runtime; activer via `?lenis=on` (`on`/`1`/`true`).
  - Respect de `prefers-reduced-motion: reduce` (désactivation automatique).
  - Fichier modifié: `app/smooth-scroll.tsx`.
  - Test: recharger une page, sans paramètre (Lenis OFF) puis avec `?lenis=on` (Lenis ON) pour comparer la fluidité.

- Performance — LCP/FCP mobile (Lighthouse): allègement du rendu critique.
  - Suppression des images de fond PNG bloquantes dans `app/layout.tsx` (ellipse et grain). Conserve le halo et overlays CSS.
  - `Pricing` et `MagneticButtons` chargés en différé via `next/dynamic` (SSR off) pour réduire JS initial.
  - Ajout de `loading="lazy"`, `decoding="async"`, `fetchPriority="low"` aux `<img>` non critiques (footer, testimonials).
  - Fichiers modifiés: `app/layout.tsx`, `app/components/Footer.tsx`, `components/mvpblocks/testimonials-marquee.tsx`.
  - Suivi: considérer WebP/AVIF pour `grain.png` si besoin ultérieur.
