import { essays } from "./essays";
import { guides } from "./guides";
import type { Article, ArticleBlock, InsightCategory } from "./types";

export type { Article, ArticleBlock, ArticleFaq, InsightCategory } from "./types";

/**
 * The journal. Articles are structured data rendered by
 * src/components/insights/ArticleBody.tsx. To publish a new article, add an
 * entry to essays.ts or guides.ts; listings, article pages, category pages,
 * related reading, the sitemap, RSS and structured data are all generated
 * from it.
 *
 * EDITORIAL STATUS: draft articles are shown on the site with a "Draft for
 * review" label but are hidden from search engines. Once the founders have
 * approved an article, set `status: "published"` and confirm `publishedAt`.
 */
export const articles: Article[] = [...guides, ...essays];

const WORDS_PER_MINUTE = 220;

function blockText(block: ArticleBlock): string {
  switch (block.type) {
    case "list":
    case "steps":
      return block.items.join(" ");
    case "callout":
      return `${block.title} ${block.text}`;
    default:
      return block.text;
  }
}

export function getWordCount(article: Article): number {
  const text = [...article.body.map(blockText), ...(article.faqs ?? []).map((f) => `${f.question} ${f.answer}`)].join(
    " ",
  );
  return text.split(/\s+/).filter(Boolean).length;
}

export function getReadingTime(article: Article): number {
  return Math.max(1, Math.round(getWordCount(article) / WORDS_PER_MINUTE));
}

/** Articles newest first. */
export function getArticles(): Article[] {
  return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** Articles that search engines may index (approved for publication). */
export function getPublishedArticles(): Article[] {
  return getArticles().filter((article) => article.status === "published");
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: Article, limit = 2): Article[] {
  const explicit = (article.related ?? [])
    .map((slug) => getArticleBySlug(slug))
    .filter((related): related is Article => Boolean(related));
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const fallback = getArticles().filter(
    (candidate) => candidate.slug !== article.slug && !explicit.includes(candidate),
  );
  return [...explicit, ...fallback].slice(0, limit);
}

export function formatArticleDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

/* ---------- Categories ---------- */

export const insightCategories: Array<{ name: InsightCategory; slug: string; description: string }> = [
  {
    name: "Search & Discovery",
    slug: "search-and-discovery",
    description: "Guides and essays on SEO, local search and Google Business Profiles.",
  },
  {
    name: "Reputation",
    slug: "reputation",
    description: "On reviews, responses and the public record of how a business treats people.",
  },
  {
    name: "Client Relations",
    slug: "client-relations",
    description: "On CRM systems, follow-up and keeping customer relationships in good order.",
  },
  {
    name: "Digital Estate",
    slug: "digital-estate",
    description: "On websites, maintenance and the infrastructure behind them.",
  },
  {
    name: "Stewardship",
    slug: "stewardship",
    description: "On looking after a business's digital affairs as a whole, over time.",
  },
];

export function getCategoryBySlug(slug: string) {
  return insightCategories.find((category) => category.slug === slug);
}

export function getCategorySlug(name: InsightCategory): string {
  return insightCategories.find((category) => category.name === name)?.slug ?? "";
}

export function getArticlesInCategory(name: InsightCategory): Article[] {
  return getArticles().filter((article) => article.category === name);
}

/* ---------- Headings and inline links ---------- */

/** Stable id for a heading, used by the table of contents. */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getTableOfContents(article: Article): Array<{ id: string; text: string }> {
  const headings = article.body
    .filter((block): block is Extract<ArticleBlock, { type: "heading" }> => block.type === "heading")
    .map((block) => ({ id: headingId(block.text), text: block.text }));
  if (article.faqs?.length) headings.push({ id: "questions", text: "Common questions" });
  return headings;
}

/** Remove [text](href) link markup, for plain-text uses such as structured data. */
export function stripLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

/** Every link target used in an article — used by tests to catch broken internal links. */
export function getArticleLinks(article: Article): string[] {
  const texts = [...article.body.map(blockText), ...(article.faqs ?? []).map((faq) => faq.answer)];
  return texts.flatMap((text) => Array.from(text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g), (match) => match[1]));
}
