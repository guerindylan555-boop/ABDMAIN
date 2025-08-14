## 2025-08-14

- Performance — Smooth scroll (Lenis): interrupteur runtime pour diagnostic et accessibilité. A
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

- Performance — LCP/FCP mobile (Lighthouse): allègement du rendu critique.
  - Suppression des images de fond PNG bloquantes dans `app/layout.tsx` (ellipse et grain). Conserve le halo et overlays CSS.
  - `Pricing` et `MagneticButtons` chargés en différé via `next/dynamic` (SSR off) pour réduire JS initial.
  - Ajout de `loading="lazy"`, `decoding="async"`, `fetchPriority="low"` aux `<img>` non critiques (footer, testimonials).
  - Fichiers modifiés: `app/layout.tsx`, `app/components/Footer.tsx`, `components/mvpblocks/testimonials-marquee.tsx`.
  - Suivi: considérer WebP/AVIF pour `grain.png` si besoin ultérieur.

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

feat: Rework pricing, CTA, FAQ, and solutions pages

This commit introduces a major overhaul of several key sections of the website to align with the new AI-powered custom solutions DNA and enhance user experience.

Key changes include:

- **Offers & Pricing Rework**:
  - Updated pricing plans (Starter, Growth, Performance) with detailed content and revised monthly/annual billing logic.
  - Enhanced UI/UX for pricing cards, including "Popular" badge, improved contrast, and adjusted transparency.
  - CTA for "Performance" plan renamed to "Request an Audit."

- **Global CTA & Redirection**:
  - Replaced "90 min Diagnostic" wording with "Free Audit" across the site.
  - All relevant CTAs now redirect to the new `/audit-custom` page.
  - Global CTA (`CTA3`) integrated above the footer, ensuring consistent visibility across all pages.

- **FAQ Component Enhancement**:
  - Generalized FAQ component (`faq-1.tsx`) for reusability.
  - Contextualized FAQ content for Home, SEO Hub, and Offers pages.

- **Solutions & Navigation Revamp**:
  - Refactored "Solutions" section with a new dedicated page (`app/(marketing)/solutions/page.tsx`) showcasing a 3-step AI-powered process.
  - Removed deprecated DIY/DWY/DFY solution pages and their sitemap entries.
  - Navigation label updated from "Solutions" to "Our Solutions."

- **New "Custom Audit" Page**:
  - Introduced `/audit-custom` page for personalized audit scheduling, including an interactive calendar powered by `react-day-picker`.

- **Testimonials Update**:
  - Replaced existing testimonials with 15 realistic French B2B testimonials on the homepage, aligned with target avatars.
  - Implemented a new marquee testimonial section on the homepage, replacing the old "Trusted By" and "Services" sections.

- **UI/UX Harmonization**:
  - Unified "glow" effect styling for CTAs and pricing cards using global CSS utilities.
  - Standardized typography and color usage with new CSS variables (`--brand`, `text-h1`, `text-lead`, etc.).
  - Minor UI adjustments for readability and visual coherence across various components.

- **Technical Fixes**:
  - Resolved `react-day-picker` build error.
  - Cleaned up duplicate lockfiles and unused ESLint imports.
