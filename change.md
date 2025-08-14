## 2025-08-14

- Performance — Images (poids & lazy)
  - Remplacement de `<img>` par `next/image` dans:
    - `components/mvpblocks/testimonials-marquee.tsx` (avatars)
    - `app/components/Footer.tsx` (logo)
  - Suppression de la dépendance `randomuser.me` (avatars)
    - Étape B1 (temporaire) remplacée par B2 (durable): avatars référencés en local.
    - Mappage avatars → fichiers locaux SVG (40×40) sous `/public/img/testimonials/*.svg`.
    - Fallback robuste: si un fichier manque, bascule auto sur `/img/testimonials/avatar-default.svg`.
  - Favicon modernisé:
    - Ajout `/public/favicon.svg` et déclaration dans les `icons` du `metadata`.
  - Contrôle:
    - DevTools Network: avatars chargés depuis `/img/testimonials/...` (pas de `randomuser.me`).
    - Lighthouse: « code tiers » ne liste plus `randomuser.me`.

- LCP — Gradient & Preload
  - Rendu du gradient rétabli en CSS (fidélité visuelle) via `background-image` dans `app/layout.tsx`.
  - Préchargement explicite ajouté dans `app/head.tsx`:
    - `<link rel="preload" as="image" href="/img/background/gradient-optimized.png">`.
  - Contrôle: DevTools Elements → `<head>` contient le preload; Network → ressource marquée Preload.

- Config images
  - `next.config.mjs`: formats modernes AVIF/WebP conservés; suppression de `remotePatterns` (plus de dépendance avatars tierce).

- Performance — LCP background (gradient) via Next/Image « invisible »
  - Ajout d’un `<Image />` prioritaire et `fetchPriority="high"` dans `app/layout.tsx` pointant vers `/img/background/gradient-optimized.png` pour garantir un préchargement optimisé par Next.
  - Props: `priority`, `fetchPriority="high"`, `decoding="async"`, `sizes="100vw"`, `width={1}`, `height={1}`, `placeholder="blur"`.
  - Rendu visuel inchangé: le gradient reste appliqué en CSS pour une fidélité parfaite; l’image Next est cachée (0×0) et n’affecte pas la mise en page.
  - Suivi: préparer une version **AVIF** du gradient (15–30 KB) et, si possible, un `image-set()` CSS (AVIF/WebP/PNG) pour réduire davantage le poids de l’arrière‑plan pur CSS.

- Performance — TTFB: pages marketing forcées en statique (ISR prêt)
  - Ajout `export const dynamic = 'force-static'` sur la home et toutes les pages marketing (`/solutions`, `/audit-custom`, `/offres`, `/offres-ia`, `/site-web-sur-mesure`, `/seo-local-google-business`, `/seo-google-business`, `/reservation-appel`, `/publicite-payante`, `/notre-methode`, `/hubs` et sous‑pages, `/diagnostic-90-min`, `/a-propos`, `/automatisations-appels-sms`, `/blog`, `/blog/[slug]`).
  - Impact attendu: TTFB réduit (HTML pré‑généré & edge‑cache). Si besoin d’actualisation, basculer en ISR: `export const revalidate = 3600`.
  - Aucun impact visuel ou fonctionnel.

- Performance — CSS bloquant: découplage et allègement
  - Suppression de l’import global `tw-animate-css` dans `app/globals.css`; remplacement par animations locales nécessaires (marquee, accordion-up/down).
  - Suppression de l’import global `react-day-picker/style.css` depuis `app/components/ui/calendar.tsx` pour éviter de le charger hors page audit.
  - `Scheduler` chargé en client-only (`next/dynamic` avec `ssr: false`) sur `/audit-custom` pour éviter d’inclure ses styles/scripts dans le bundle initial.
  - Impact attendu: -50 à -100 ms sur « Render‑blocking resources » et bundle CSS/JS initial allégé (pas de fuite de styles spécifiques vers la home).
