# Change Log

## 2025-08-13

- **Offres & Tarifs**: mise à jour complète du contenu des cartes.
  - **Fichier modifié**: `components/mvpblocks/simple-pricing.tsx`
  - **Noms des offres**: `Starter`, `Croissance` (populaire), `Performance`.
  - **Tarifs**: Starter 149€/mois, Croissance 399€/mois, Performance sur devis.
  - **Fonctionnalité**: bascule Mensuel/Annuel corrigée. Affichage annuel = (mensuel × 12 × 0,8), ex. Starter 149€ → 1 430,4€/an.
  - **Visuel**: badge « Populaire » traduit; contraste renforcé (fond, bordures, blur) et suppression des textes gris pour homogénéité.
  - **Affichage**: en annuel, on montre l’équivalent mensuel (mensuel × 0,8) arrondi à l’euro inférieur; ajout d’une ligne « Économisez X€/an (facturation annuelle) ».
  - **UX**: l’onglet Annuel est désormais sélectionné par défaut; CTA de Croissance recoloré pour une meilleure lisibilité; CTA Performance renommé « Réserver un audit ».
  - **Contenus**:
    - Starter: Site web & Blog sur mesure (5 pages), 1 article/mois, Chat IA, CRM & Email & SMS & DM Marketing, Google Business (gestion des avis), Tableaux de bord, Support basic + chat quotidien.
    - Croissance: Tout Starter + pages illimitées, jusqu’à 50 articles/mois, Google Business — optimisation des notes, récupération des appels manqués, automatisations personnalisées & déclencheurs, support prioritaire.
    - Performance: Tout Croissance + support prioritaire, audits 100% personnalisés, conception & intégration de solutions sur‑mesure, gestion des systèmes et/ou formation des équipes.

- **Ajustements**: simplification du plan Starter (retrait des formations/tutoriels, rapports avancés, formulaires/enquêtes/calendriers/newsletter) et clarification du plan Croissance (pas de répétition, renommage de l’optimisation Google Business, retrait E‑Réputation et planificateur social, retrait de « Devis »).

## 2025-08-12

- **Homepage**: ajout d’une nouvelle section de témoignages (marquee) juste en dessous de la section "Ils nous font confiance".
  - **Fichier modifié**: `app/page.tsx`
    - Ajout de l’import: `@/components/mvpblocks/testimonials-marquee`
    - Insertion du composant: `<TestimonialsMarquee />` après `<Logos />`
  - **Composant utilisé**: `components/mvpblocks/testimonials-marquee.tsx` (aucune modification du fichier)
  - **Notes**:
    - Les animations nécessaires au marquee sont déjà présentes dans `app/globals.css`.
    - La section existante `Testimonials` est conservée plus bas sur la page.
    - Pas de build exécuté ici (vous le lancerez si nécessaire).

- **UI**: suppression du dégradé/filtre sombre (overlay) positionné en haut de la section de témoignages marquee.
  - **Fichier modifié**: `components/mvpblocks/testimonials-marquee.tsx`
    - Retrait du div gradient supérieur pour éliminer l'assombrissement.

- **Homepage**: suppression de la section "Ils nous font confiance" sur la page d’accueil.
  - **Fichier modifié**: `app/page.tsx`
    - Retrait de l’import `./components/sections/Logos`
    - Suppression de `<Logos />` (la nouvelle section marquee vient désormais juste après `<FeaturesGrid />`).

- **UI**: suppression du dégradé/filtre sombre en bas de la section de témoignages marquee.
  - **Fichier modifié**: `components/mvpblocks/testimonials-marquee.tsx`
    - Retrait du div gradient inférieur.

- **UI**: retrait de l’effet visuel au-dessus de la section Offres & Tarifs (blob flou supérieur).
  - **Fichier modifié**: `components/mvpblocks/simple-pricing.tsx`
    - Suppression du cercle flou positionné en haut (-top) derrière le titre.

- **Offres & Tarifs**: ajout d’un effet « glowing » autour des 3 cartes d’offres.
  - **Fichier modifié**: `components/mvpblocks/simple-pricing.tsx`
    - Enrobage de chaque `Card` dans un conteneur `glow-card` + calque `.glow` animé (conic-gradient) via styled‑jsx.
  - Ajustement: réduction de l’intensité (blur et épaisseur) du glow pour un rendu plus subtil.

- **Hero**: ajout du même glow sur le bouton « Réserver un diagnostic 90 min » sous les chips “Sites & Funnels / SEO local & Google Business / CRM & Suivi / Agents IA & Automations”.
  - **Fichier modifié**: `app/components/sections/Hero.tsx`
    - Conteneur `glow-wrap` autour des deux boutons (incluant « Explorer les solutions ») + style styled‑jsx (conic-gradient) aligné avec l’effet des cartes.
  - Synchronisation animations: chips et CTA apparaissent en même temps avec une timeline GSAP déclenchée au scroll (et non au mount), états initiaux fixés par GSAP pour éviter les décalages avec le hover.

- **CTA**: ajout d’un call-to-action global juste au-dessus du footer.
  - **Nouveau fichier**: `components/mvpblocks/cta-3.tsx`
  - **Fichier modifié**: `app/layout.tsx`
    - Insertion de `<CTA3 />` juste avant `<Footer />` pour affichage sur toutes les pages.

- **Homepage**: suppression des sections "Nos services" et "Témoignages" demandées.
  - **Fichier modifié**: `app/page.tsx`
    - Retrait de `<Services />` et `<Testimonials />` de la home.

- **CTA**: intégration manuelle du composant fourni `CTA3` et ajout juste au-dessus du footer.
  - **Nouveau fichier**: `components/mvpblocks/cta-3.tsx`
  - **Fichier modifié**: `app/layout.tsx` (insertion de `<CTA3 />` avant `<Footer />`).

- **CTA**: francisation complète des textes du composant `CTA3` (titres, paragraphes, puces).
  - **Fichier modifié**: `components/mvpblocks/cta-3.tsx`

- **Build**: correction d’une erreur de compilation TypeScript.
  - **Fichier modifié**: `components/ui/navigation-menu.tsx`
    - Suppression de la directive `@ts-expect-error` inutile devant `Link` dans `NavigationMenuLink` (le typage `forwardRef` est suffisant).
  - **Résultat**: `next build` passe avec succès.

- **Chore**: nettoyage des lockfiles en double.
  - **Action**: suppression du `package-lock.json` situé au dossier parent pour éliminer l’avertissement « Found multiple lockfiles » et éviter des incohérences.

- **Lint**: suppression d’imports non utilisés signalés par ESLint.
  - **Fichiers modifiés**:
    - `app/(marketing)/solutions/diy/page.tsx` — retrait de `Card`, `CardHeader`, `CardTitle`, `CardContent` non utilisés.
    - `app/(marketing)/solutions/dwy/page.tsx` — retrait de `Card`, `CardHeader`, `CardTitle`, `CardContent` non utilisés.
    - `app/(marketing)/solutions/dfy/page.tsx` — retrait de `Card`, `CardHeader`, `CardTitle`, `CardContent` non utilisés.
    - `app/components/sections/Services.tsx` — retrait de `Link` non utilisé.
    - `app/components/ThemeToggle.tsx` — retrait de `useEffect` et `useState` non utilisés.

- **UI**: unification de l’effet « glow » pour les CTA et les cartes.
  - **Fichiers modifiés**:
    - `app/globals.css` — ajout d’utilitaires globaux `.glow-wrap` / `.glow-card` et variables (`--glow-inset`, `--glow-border`, `--glow-blur`, `--glow-speed`, `--glow-radius`).
    - `app/components/ui/button.tsx` — ajout du variant `glow` et de l’option `withGlow` pour envelopper automatiquement le bouton dans le wrapper glow.
    - `app/components/Header.tsx` — application du glow sur le CTA « Diagnostic 90 min » dans la navbar.
    - `app/components/sections/Hero.tsx` — suppression des styles inline de glow et migration vers les utilitaires globaux.
    - `components/mvpblocks/simple-pricing.tsx` — suppression des styles inline de glow et usage des utilitaires globaux.
  - **Notes**: paramètres glow harmonisés (conic‑gradient, blur, épaisseur) entre Hero, Navbar et Pricing. Respect de `prefers-reduced-motion` (timeline existante conservée pour le reveal, glow purement décoratif).

- **Design tokens**: unification typographique et classes utilitaires.
  - **Fichier modifié**: `app/globals.css`
    - Ajout d’une échelle typographique: `.text-display`, `.text-h1`, `.text-h2`, `.text-h3`, `.text-h4`, `.text-lead`, `.text-body`, `.text-small`, `.text-caption` via variables CSS.
  - **Remplacements initiaux**:
    - `app/components/sections/Hero.tsx` — titre en `.text-h1`, lead en `.text-lead`; CTA migrés vers `ButtonLink` variant `glow`.
    - `app/components/marketing/SectionPage.tsx` — titre en `.text-h1`, description en `.text-lead`.
    - `app/(marketing)/solutions/{diy,dwy,dfy}/page.tsx` — titres de sections en `.text-h2`.
  - **À faire ensuite**: remplacer progressivement les tailles ad‑hoc sur le reste des sections.

- **Homepage**: suppression de la section CTA locale "Diagnostic croissance — 90 minutes".
  - **Fichiers modifiés**:
    - `app/page.tsx` — retrait de l’import et du rendu de `CTA` (le CTA global `CTA3` reste au niveau layout).

- **Fix Glow**: correction de l’empilement du glow sur les CTA Hero.
  - **Fichier modifié**: `app/globals.css`
    - Ajout `display:inline-block` et `overflow:hidden` sur `.glow-wrap` pour contraindre le calque glow au périmètre de chaque bouton et éviter le chevauchement entre plusieurs boutons.

- **UI**: harmonisation des couleurs bleues des témoignages avec la palette.
  - **Fichier modifié**: `components/mvpblocks/testimonials-marquee.tsx`
    - Remplacement des bleus hardcodés (`text-blue-500`, `fill-blue-500`, `bg-blue-500/5`) par les tokens `--brand` (`text-[--brand]`, `fill-[--brand]`, `bg-[--brand]/5`).

- **FAQ**: uniformisation de la mise en forme et thème glass.
  - **Fichier modifié**: `components/mvpblocks/faq-1.tsx`
    - Titre unifié (`text-h2` + `text-[--brand]` sur le mot “fréquentes”), description en `text-lead`.
    - Conteneurs accordéon passés en `glass`/`glass-panel`/`glass-highlight` et couleurs basées sur les tokens (`--brand`).

- **CTA global**: alignement avec le thème glass et la palette de marque.
- **Glow**: amincissement du halo autour des boutons.
  - **Fichier modifié**: `app/globals.css`
    - Réduction des variables par défaut dans `.glow-wrap` (`--glow-border: 0.35em`, `--glow-inset: -0.4em`, `--glow-blur: 0.28em`).

- **Offres & Tarifs**: lisibilité renforcée.
  - **Fichier modifié**: `components/mvpblocks/simple-pricing.tsx`
    - Opacité des cartes augmentée (`bg-secondary/30`) et texte description en `text-foreground/90`.

- **Navigation**: Accueil priorisé et unification des solutions.
  - **Fichiers modifiés**:
    - `app/components/Header.tsx` — mise à jour des liens nav ("Accueil", "Solutions", "Tarifs", …) et suppression du dropdown Solutions.
    - `app/(marketing)/solutions/page.tsx` — nouvelle page index Solutions (regroupe DIY/DWY/DFY).

- **Offres (refonte)**: cartes empilées à droite, bouton collé en bas, sans glow.
  - **Fichier modifié**: `app/components/sections/Offers.tsx`
    - Grille `md:grid-cols-[1fr_420px]`, suppression du glow, CTA fixé en bas via `mt-auto`.
 - **Accentuation**: ajout de touches de couleur cohérentes via `--brand` sur des mots clés
   - **Fichiers modifiés**:
    - `app/components/sections/Offers.tsx` — titre de section accentué (mot « travailler ») via style inline `var(--brand)`.
    - `app/components/sections/Essentiels.tsx` — titre et description accentuent « sur‑mesure » via style inline `var(--brand)`.
    - `app/components/sections/FeaturesGrid.tsx` — accent sur « tout‑en‑un » via style inline `var(--brand)`.
    - `app/components/sections/Testimonials.tsx` — titres harmonisés et accent couleur via style inline `var(--brand)`.
    - `app/components/sections/ValueProps.tsx` — accent sur « accélérer » via style inline `var(--brand)`.
  - **Fichier modifié**: `components/mvpblocks/cta-3.tsx`
    - Remplacement des couleurs hex par tokens (`--brand`) et utilitaires `glass`/`glass-highlight`.
