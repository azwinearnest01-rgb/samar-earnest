import { describe, expect, it } from "vitest";

import { getCapability, getCapabilityPages } from "@/content/capabilities";
import { images } from "@/content/images";
import {
  articles,
  getArticleBySlug,
  getArticleLinks,
  getCategorySlug,
  getPublishedArticles,
  getTableOfContents,
  insightCategories,
} from "@/content/insights";

const STATIC_ROUTES = new Set([
  "/",
  "/the-firm",
  "/expertise",
  "/services",
  "/private-digital-office",
  "/digital-estate-audit",
  "/insights",
  "/contact",
  "/privacy",
  "/terms",
]);

/** True when an internal link points at a page that exists. */
function resolves(href: string): boolean {
  const path = href.split("#")[0];
  if (STATIC_ROUTES.has(path)) return true;
  const service = path.match(/^\/services\/([^/]+)$/);
  if (service) return getCapabilityPages().some((capability) => capability.slug === service[1]);
  const article = path.match(/^\/insights\/([^/]+)$/);
  if (article) return Boolean(getArticleBySlug(article[1]));
  const category = path.match(/^\/insights\/category\/([^/]+)$/);
  if (category) return insightCategories.some((item) => item.slug === category[1]);
  return false;
}

describe("insights — SEO hygiene", () => {
  it("has unique slugs and a known category, image and format for every article", () => {
    expect(new Set(articles.map((a) => a.slug)).size).toBe(articles.length);
    for (const article of articles) {
      expect(images, article.slug).toHaveProperty(article.image);
      expect(getCategorySlug(article.category), article.slug).not.toBe("");
      expect(["essay", "guide"]).toContain(article.format);
    }
  });

  it("keeps search titles and descriptions within sensible lengths", () => {
    for (const article of articles) {
      const title = article.seoTitle ?? article.title;
      const description = article.description ?? article.excerpt;
      expect(title.length, `${article.slug} title`).toBeLessThanOrEqual(65);
      expect(description.length, `${article.slug} description`).toBeGreaterThanOrEqual(70);
      expect(description.length, `${article.slug} description`).toBeLessThanOrEqual(165);
    }
  });

  it("gives every guide a distinct focus keyword, contents and FAQs", () => {
    const guides = articles.filter((a) => a.format === "guide");
    expect(guides.length).toBeGreaterThanOrEqual(6);
    const keywords = guides.map((g) => g.focusKeyword);
    expect(keywords.every(Boolean)).toBe(true);
    expect(new Set(keywords).size).toBe(keywords.length);
    for (const guide of guides) {
      expect(getTableOfContents(guide).length, guide.slug).toBeGreaterThanOrEqual(3);
      expect(guide.faqs?.length ?? 0, guide.slug).toBeGreaterThanOrEqual(3);
      expect(guide.services?.length ?? 0, guide.slug).toBeGreaterThan(0);
    }
  });

  it("uses only internal links that resolve to real pages", () => {
    for (const article of articles) {
      for (const href of getArticleLinks(article)) {
        if (href.startsWith("/")) expect(resolves(href), `${article.slug} → ${href}`).toBe(true);
        else expect(href, article.slug).toMatch(/^https:\/\//);
      }
      for (const slug of article.services ?? []) expect(getCapability(slug), `${article.slug} → ${slug}`).toBeDefined();
      for (const slug of article.related ?? [])
        expect(getArticleBySlug(slug), `${article.slug} → ${slug}`).toBeDefined();
    }
  });

  it("links every guide to at least two other pages on the site", () => {
    for (const guide of articles.filter((a) => a.format === "guide")) {
      expect(getArticleLinks(guide).filter((href) => href.startsWith("/")).length, guide.slug).toBeGreaterThanOrEqual(
        2,
      );
    }
  });

  it("only treats approved articles as published", () => {
    for (const article of getPublishedArticles()) expect(article.status).toBe("published");
  });
});
