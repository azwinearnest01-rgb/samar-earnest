import type { ImageKey } from "../images";

/**
 * Article content model.
 *
 * Paragraph, list and FAQ text may contain links written as
 * [link text](/services/crm-implementation). Internal links (starting with
 * "/") use the site's router; anything else opens as an external link.
 */
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "callout"; title: string; text: string };

export type InsightCategory =
  "Search & Discovery" | "Client Relations" | "Reputation" | "Digital Estate" | "Stewardship";

export type ArticleFaq = { question: string; answer: string };

export type Article = {
  slug: string;
  /** Headline shown on the page (h1). */
  title: string;
  /** Shorter title for search results (aim for ≤ 60 characters). Falls back to `title`. */
  seoTitle?: string;
  /** Meta description for search results (aim for 140–160 characters). Falls back to `excerpt`. */
  description?: string;
  /** The main search phrase the article is written to answer. Used for planning and structured data. */
  focusKeyword?: string;
  excerpt: string;
  category: InsightCategory;
  /** "guide" for practical how-to pieces, "essay" for opinion and perspective. */
  format: "essay" | "guide";
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  /** ISO date of the last substantive revision, if any. */
  updatedAt?: string;
  /** Byline. Use the firm unless a named author has approved the piece. */
  author: string;
  image: ImageKey;
  body: ArticleBlock[];
  /** Questions answered at the end of the article (also emitted as FAQPage structured data). */
  faqs?: ArticleFaq[];
  /** Capability slugs this article relates to — shown as "Related services". */
  services?: string[];
  /** Article slugs for "Further reading". */
  related?: string[];
  /**
   * "draft": visible on the site with a review label, but hidden from search
   * engines (noindex, excluded from sitemap and RSS) until approved.
   */
  status: "draft" | "published";
};

export const FIRM_BYLINE = "Samar & Earnest";
