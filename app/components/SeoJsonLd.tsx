export default function SeoJsonLd() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AB Digital",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
  } as const;

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AB Digital",
    url: siteUrl,
  } as const;

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AB Digital",
    url: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    areaServed: "FR",
    priceRange: "€€",
  } as const;

  const services = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Création de site web",
        serviceType: "WebDesign & Développement",
        provider: { "@type": "Organization", name: "AB Digital" },
        offers: { "@type": "Offer", priceCurrency: "EUR", price: "490", priceSpecification: { "@type": "UnitPriceSpecification", unitText: "mois" } },
      },
      {
        "@type": "Service",
        name: "SEO & Google Business",
        serviceType: "SEO",
        provider: { "@type": "Organization", name: "AB Digital" },
        offers: { "@type": "Offer", priceCurrency: "EUR", price: "890", priceSpecification: { "@type": "UnitPriceSpecification", unitText: "mois" } },
      },
      {
        "@type": "Service",
        name: "Automatisation appels & SMS",
        serviceType: "Marketing Automation",
        provider: { "@type": "Organization", name: "AB Digital" },
        offers: { "@type": "Offer", priceCurrency: "EUR", price: "1290", priceSpecification: { "@type": "UnitPriceSpecification", unitText: "mois" } },
      },
      {
        "@type": "Service",
        name: "Publicité payante (Google & Meta Ads)",
        serviceType: "Paid Advertising",
        provider: { "@type": "Organization", name: "AB Digital" },
        offers: { "@type": "Offer", priceCurrency: "EUR", price: "990", priceSpecification: { "@type": "UnitPriceSpecification", unitText: "mois" } },
      },
      {
        "@type": "Service",
        name: "Offres IA et personnalisation",
        serviceType: "Personalization",
        provider: { "@type": "Organization", name: "AB Digital" },
        offers: { "@type": "Offer", priceCurrency: "EUR", price: "690", priceSpecification: { "@type": "UnitPriceSpecification", unitText: "mois" } },
      },
    ],
  } as const;

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Y a-t-il un engagement ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Les accompagnements sont mensuels, résiliables à tout moment.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps pour voir des résultats ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Généralement sous 4 à 8 semaines sur le trafic et les conversions.",
        },
      },
      {
        "@type": "Question",
        name: "Travaillez-vous avec mon secteur ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, TPE/PME, services, local et e-commerce.",
        },
      },
      {
        "@type": "Question",
        name: "Que comprend le setup initial ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Audit technique, tracking (GA4, Search Console), bases CRM, optimisation de la fiche Google Business et plan d’actions priorisé.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous la création de contenus ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous produisons des pages, articles et posts Google Business optimisés SEO, alignés avec votre offre.",
        },
      },
    ],
  } as const;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/contact` },
    ],
  } as const;

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}



