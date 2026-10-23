import type { MetadataRoute } from "next";

import { getCapabilityPages } from "@/content/capabilities";
import { getArticlesInCategory, getPublishedArticles, insightCategories } from "@/content/insights";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/the-firm", priority: 0.8 },
  { path: "/expertise", priority: 0.9 },
  { path: "/services", priority: 0.9 },
  { path: "/private-digital-office", priority: 0.9 },
  { path: "/digital-estate-audit", priority: 0.8 },
  { path: "/insights", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticRoutes.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority,
  }));

  // Only approved articles are submitted; drafts are noindexed until published.
  const articles = getPublishedArticles().map((article) => ({
    url: absoluteUrl(`/insights/${article.slug}`),
    lastModified: article.updatedAt ?? article.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const capabilityPages = getCapabilityPages().map((capability) => ({
    url: absoluteUrl(`/services/${capability.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categories = insightCategories
    .filter((category) => getArticlesInCategory(category.name).some((article) => article.status === "published"))
    .map((category) => ({
      url: absoluteUrl(`/insights/category/${category.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

  return [...pages, ...capabilityPages, ...categories, ...articles];
}
