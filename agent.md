- Tokens: --brand, --ring, couleurs dark par dÇfaut; utilitaires glass, glass-panel, glass-highlight> 
- Composants UI (shadcn-like adaptÇs): pp/components/ui/* (button, badge, accordion, card, tabs, alert) 
- Bloc Pricing shadcn: components/mvpblocks/simple-pricing.tsx (traduit FR, plans DIY/DWY/DFY, EUR) 
 
## SEO & accessibilitÇ 
- sitemap.ts maintenu (ajouts Solutions/Hubs/Diagnostic) 
- JSONLD: Organization, WebSite, ProfessionalService, Services, FAQ, HowTo (mÇthode) 
- Header (dropdown Solutions): rìles ARIA, focus visible; mobile Ö complÇter si besoin 
 
## Points dattention / TODO 
- Mobile menu: dÇcliner le sousmenu  Solutions  en version mobile (burger/accordion) 
- Unifier Pricing: le bloc shadcn remplace les anciennes grilles (home OK). VÇrifier les pages Solutions si on veut retirer leurs cartes additionnelles 
- Posts/Blog: data rÇelles vs mocks, branchement CMS si nÇcessaire 
- Tracking: dÇfinir GA4 events (book_diagnostic, view_pricing, submit_lead, etc.) 
 
## Dossiers utiles 
- pp/(marketing)/** pages marketing (Solutions, Hubs, Offres, Diagnostic, Blog, êtudes de cas) 
- pp/components/sections/** sections rÇutilisÇes de la home 
- pp/components/ui/** composants UI maison (style alignÇ Ö la charte) 
- components/mvpblocks/** blocs shadcn importÇs et localisÇs
