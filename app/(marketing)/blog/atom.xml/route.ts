import type { NextRequest } from "next/server";
import { getAllPosts } from "@/lib/blog/posts";

export const dynamic = "force-static";

export async function GET(_req: NextRequest) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const posts = getAllPosts();
  const entries = posts
    .map((p) => {
      return `
  <entry>
    <title><![CDATA[${p.title}]]></title>
    <link href="${siteUrl}/blog/${p.slug}" />
    <id>${siteUrl}/blog/${p.slug}</id>
    <updated>${new Date(p.date).toISOString()}</updated>
    <summary type="html"><![CDATA[${p.description}]]></summary>
  </entry>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>AB Digital — Blog</title>
  <link href="${siteUrl}/blog" />
  <updated>${new Date().toISOString()}</updated>
  <id>${siteUrl}/blog</id>
  ${entries}
</feed>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=600",
    },
  });
}


