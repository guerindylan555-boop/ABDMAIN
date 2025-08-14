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

 - Correctif — Témoignages (avatars)
   - Régression d’affichage: les avatars SVG ne s’affichaient plus correctement dans le carrousel vertical (`Marquee`) après l’optimisation.
   - Cause: l’usage de `next/image` sur des SVG animés/transformés à l’intérieur d’un `Marquee` pouvait empêcher le lazy‑load/rendu attendu.
   - Changement: retour à `<img>` natif pour les avatars, avec `loading="lazy"`, `decoding="async"`, `fetchPriority="low"` et fallback vers `/img/testimonials/avatar-default.svg`.
   - Fichier modifié: `components/mvpblocks/testimonials-marquee.tsx`.
   - Impact: affichage des avatars restauré sans régression de performance.

 - Revert — Fond (background)
   - Restauration du fond d’origine basé 100% CSS via la classe `.site-bg`.
   - Remplacement de `gradient-background` par `site-bg` dans `app/layout.tsx` et retrait du `GradientLoader`.
   - Suppression du preload d’image de gradient et de la page d’édition du background.
   - Fichiers modifiés: `app/layout.tsx`.
   - Fichiers supprimés: `app/head.tsx`, `app/gradient-editor/page.tsx`.

 - Ajustement mobile — Fond aplati
   - Problème: sur mobile, le gradient paraissait aplati/écrasé.
   - Solution: styles spécifiques mobile (`@media (max-width: 640px)`) pour déplacer le centre du gradient sous l’écran (150%) et désactiver `background-attachment: fixed` → `scroll` pour éviter le bug de flatten iOS/Android.
  - Affinage: augmentation de la zone orange visible à ~15% en bas de l’écran (mobile) en déplaçant le centre à 130% et en étendant les stops orange (#f27601) jusqu’à ~28% puis orange‑rouge à ~35%.
   - Fichier modifié: `app/globals.css`.

- Correctif — Scroll horizontal
  - Empêche le débordement horizontal et le scroll latéral accidentel.
  - Ajout de `overflow-x: hidden` et `width: 100%` sur `html, body`.
  - Fichier modifié: `app/globals.css`.

- Ordre des sections — Tarifs & Offres
  - Demande: afficher « Tarifs & Offres » juste sous la section « Trois offres pour avancer avec nous ».
  - Changement: `DeferredClient` (qui inclut `Pricing`) est désormais inséré sur la home juste après `Offers` pour conserver l’ordre demandé, sans retirer sa logique différée potentiellement liée à Stripe.
  - Fichiers modifiés: `app/page.tsx`, `app/components/DeferredClient.tsx`.

- Nettoyage — Suppression du bloc "Offres & Tarifs" global en bas de page
  - Retrait du rendu différé global depuis le layout pour éviter le doublon en bas de page.
  - Le bloc conservé est celui placé juste après la section « Trois offres pour avancer avec nous » (home uniquement).
  - Fichier modifié: `app/layout.tsx`.

- Intégration — Google Tag Manager
  - Ajout du conteneur `GTM-5BQLR36H`.
  - Insertion du script GTM dans le `<body>` avec `strategy="beforeInteractive"` et du bloc `<noscript>` tout en haut du `<body>`.
  - Fichier modifié: `app/layout.tsx`.
