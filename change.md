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
