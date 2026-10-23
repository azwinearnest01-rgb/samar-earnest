import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/expertise". Used for the canonical URL. */
  path: string;
  /** Use the title as-is instead of applying the "%s | Samar & Earnest" template. */
  absoluteTitle?: boolean;
  /** Static image import path for Open Graph; defaults to the generated site image. */
  image?: { url: string; width: number; height: number; alt: string };
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/"): string {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}

/** Build page-specific metadata with canonical, Open Graph and Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  image,
  type = "website",
  publishedTime,
  noIndex,
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  const images = image ? [image] : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      types: { "application/rss+xml": [{ url: "/insights/rss.xml", title: `${siteConfig.name} — Insights` }] },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(images ? { images: images.map((img) => img.url) } : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
