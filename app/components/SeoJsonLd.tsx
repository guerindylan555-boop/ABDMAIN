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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      queryInput: "required name=search_term_string",
    },
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
    ],
  } as const;

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}



