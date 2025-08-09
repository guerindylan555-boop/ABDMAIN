import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl.replace(/\/$/, "");
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1, lastModified: new Date() },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    { url: `${base}/seo-local-google-business`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    { url: `${base}/automatisations-appels-sms`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    { url: `${base}/a-propos`, changeFrequency: "yearly", priority: 0.5, lastModified: new Date() },
  ];
}


