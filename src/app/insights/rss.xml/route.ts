import { getPublishedArticles } from "@/content/insights";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

function escape(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** RSS feed of published articles (drafts are excluded). */
export function GET() {
  const items = getPublishedArticles()
    .map((article) => {
      const url = absoluteUrl(`/insights/${article.slug}`);
      return `    <item>
      <title>${escape(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(article.description ?? article.excerpt)}</description>
      <category>${escape(article.category)}</category>
      <pubDate>${new Date(`${article.publishedAt}T09:00:00Z`).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(`${siteConfig.name} — Insights`)}</title>
    <link>${absoluteUrl("/insights")}</link>
    <atom:link href="${absoluteUrl("/insights/rss.xml")}" rel="self" type="application/rss+xml" />
    <description>${escape(siteConfig.description)}</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
