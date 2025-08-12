# Change Log

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
