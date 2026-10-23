import type { Capability } from "@/content/capabilities";
import { type Article, type ArticleFaq, getWordCount, stripLinks } from "@/content/insights";
import { getImage } from "@/content/images";
import type { Service } from "@/content/services";
import { isPlaceholderEmail, siteConfig } from "@/content/site";
import { founders } from "@/content/team";

import { absoluteUrl } from "./seo";

const ORGANIZATION_ID = `${siteConfig.url}/#organization`;

/** The firm as a ProfessionalService. Only facts supplied by the founders are included. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    url: absoluteUrl("/"),
    ...(isPlaceholderEmail ? {} : { email: siteConfig.email.general }),
    foundingLocation: { "@type": "Country", name: "Pakistan" },
    areaServed: "Worldwide",
    founder: founders.map((person) => ({
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function servicesSchema(services: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(`/expertise#${service.slug}`),
        provider: { "@id": ORGANIZATION_ID },
      },
    })),
  };
}

export function articleSchema(article: Article) {
  const image = getImage(article.image);
  const url = absoluteUrl(`/insights/${article.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": article.format === "guide" ? "Article" : "BlogPosting",
    headline: article.seoTitle ?? article.title,
    description: article.description ?? article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    image: absoluteUrl(image.src.src),
    author: { "@type": "Organization", name: article.author, url: absoluteUrl("/") },
    publisher: { "@id": ORGANIZATION_ID, "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    articleSection: article.category,
    wordCount: getWordCount(article),
    inLanguage: "en",
    ...(article.focusKeyword ? { keywords: article.focusKeyword } : {}),
  };
}

export function faqSchema(faqs: ArticleFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: stripLinks(faq.answer) },
    })),
  };
}

export function capabilitySchema(capability: Capability, practice: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: capability.name,
    description: capability.summary,
    serviceType: practice.name,
    url: absoluteUrl(`/services/${capability.slug}`),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "Worldwide",
  };
}
