## 2025-08-14

- Performance — Smooth scroll (Lenis): interrupteur runtime pour diagnostic et accessibilité.
  - Désactivé par défaut au runtime; activer via `?lenis=on` (`on`/`1`/`true`).
  - Respect de `prefers-reduced-motion: reduce` (désactivation automatique).
  - Fichier modifié: `app/smooth-scroll.tsx`.
  - Test: recharger une page, sans paramètre (Lenis OFF) puis avec `?lenis=on` (Lenis ON) pour comparer la fluidité.
