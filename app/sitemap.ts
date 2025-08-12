import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl.replace(/\/$/, "");
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1, lastModified: new Date() },
    { url: `${base}/diagnostic-90-min`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    // Solutions
    { url: `${base}/solutions/dfy`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    { url: `${base}/solutions/dwy`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    { url: `${base}/solutions/diy`, changeFrequency: "monthly", priority: 0.6, lastModified: new Date() },
    // Hubs
    { url: `${base}/hubs`, changeFrequency: "monthly", priority: 0.6, lastModified: new Date() },
    { url: `${base}/hubs/seo`, changeFrequency: "monthly", priority: 0.6, lastModified: new Date() },
    { url: `${base}/hubs/reputation`, changeFrequency: "monthly", priority: 0.5, lastModified: new Date() },
    { url: `${base}/hubs/call-messaging`, changeFrequency: "monthly", priority: 0.5, lastModified: new Date() },
    { url: `${base}/hubs/lead-gen`, changeFrequency: "monthly", priority: 0.5, lastModified: new Date() },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    { url: `${base}/offres`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    // /tarifs redirigé vers /offres
    { url: `${base}/seo-google-business`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    { url: `${base}/automatisations-appels-sms`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    { url: `${base}/site-web-sur-mesure`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    { url: `${base}/offres-ia`, changeFrequency: "monthly", priority: 0.6, lastModified: new Date() },
    { url: `${base}/publicite-payante`, changeFrequency: "monthly", priority: 0.6, lastModified: new Date() },
    { url: `${base}/a-propos`, changeFrequency: "yearly", priority: 0.5, lastModified: new Date() },
    { url: `${base}/notre-methode`, changeFrequency: "monthly", priority: 0.6, lastModified: new Date() },
    // Anciennes URLs de tarifs retirées du sitemap (redirigées)
    // Blog
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.6, lastModified: new Date() },
    { url: `${base}/blog/checklist-google-business-2025`, changeFrequency: "monthly", priority: 0.5, lastModified: new Date() },
    { url: `${base}/blog/pack-local-en-8-semaines`, changeFrequency: "monthly", priority: 0.5, lastModified: new Date() },
    { url: `${base}/blog/core-web-vitals-tpe`, changeFrequency: "monthly", priority: 0.5, lastModified: new Date() },
    { url: `${base}/blog/checklist-refonte-seo`, changeFrequency: "monthly", priority: 0.5, lastModified: new Date() },
    { url: `${base}/blog/sequences-sms-relance`, changeFrequency: "monthly", priority: 0.5, lastModified: new Date() },
    { url: `${base}/blog/rss.xml`, changeFrequency: "weekly", priority: 0.2, lastModified: new Date() },
    { url: `${base}/blog/atom.xml`, changeFrequency: "weekly", priority: 0.2, lastModified: new Date() },
    // Études de cas
    { url: `${base}/etudes-de-cas/les-halles-beaute`, changeFrequency: "monthly", priority: 0.6, lastModified: new Date() },
    { url: `${base}/etudes-de-cas/couvreur-tourangeau`, changeFrequency: "monthly", priority: 0.6, lastModified: new Date() },
    { url: `${base}/etudes-de-cas/la-cave-du-vieux-tours`, changeFrequency: "monthly", priority: 0.6, lastModified: new Date() },
  ];
}


