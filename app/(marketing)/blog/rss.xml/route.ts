import type { NextRequest } from "next/server";
import { getAllPosts } from "@/lib/blog/posts";

export const dynamic = "force-static";

export async function GET(_req: NextRequest) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const posts = getAllPosts();
  const items = posts
    .map((p) => {
      return `
<item>
  <title><![CDATA[${p.title}]]></title>
  <link>${siteUrl}/blog/${p.slug}</link>
  <guid isPermaLink="true">${siteUrl}/blog/${p.slug}</guid>
  <pubDate>${new Date(p.date).toUTCString()}</pubDate>
  <description><![CDATA[${p.description}]]></description>
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AB Digital — Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Articles sur sites performants, SEO (Google Business) et automatisations IA.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=600",
    },
  });
}


