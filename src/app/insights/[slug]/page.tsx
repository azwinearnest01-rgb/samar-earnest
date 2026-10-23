import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/insights/ArticleBody";
import { InlineText } from "@/components/insights/InlineText";
import { InsightCard } from "@/components/insights/InsightCard";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { CapabilityCard } from "@/components/services/CapabilityCard";
import { Container } from "@/components/ui/Container";
import { Rule } from "@/components/ui/Rule";
import { getCapabilities } from "@/content/capabilities";
import { getImage } from "@/content/images";
import { siteConfig } from "@/content/site";
import {
  articles,
  formatArticleDate,
  getArticleBySlug,
  getCategorySlug,
  getReadingTime,
  getRelatedArticles,
  getTableOfContents,
} from "@/content/insights";
import { pageMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not found" };
  const image = getImage(article.image);
  const baseTitle = article.seoTitle ?? article.title;
  // Search results show roughly 60 characters; drop the brand suffix rather than truncate the title.
  const withBrand = `${baseTitle} | ${siteConfig.name}`.length <= 60;
  return {
    ...pageMetadata({
      title: baseTitle,
      absoluteTitle: !withBrand,
      description: article.description ?? article.excerpt,
      path: `/insights/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      image: { url: image.src.src, width: image.src.width, height: image.src.height, alt: image.alt },
      // Drafts stay out of search results until the founders approve them.
      noIndex: article.status === "draft",
    }),
    ...(article.updatedAt ? { other: { "article:modified_time": article.updatedAt } } : {}),
  };
}

function TableOfContents({ items }: { items: Array<{ id: string; text: string }> }) {
  return (
    <ol className="space-y-2.5 text-[0.9rem] leading-snug">
      {items.map((item, index) => (
        <li key={item.id} className="grid grid-cols-[1.75rem_1fr]">
          <span aria-hidden="true" className="tabular text-xs text-brass-deep">
            {String(index + 1).padStart(2, "0")}
          </span>
          <a href={`#${item.id}`} className="link-underline text-ink/80 hover:text-ink">
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const readingTime = getReadingTime(article);
  const contents = getTableOfContents(article);
  const services = getCapabilities(article.services ?? []);
  const categoryHref = `/insights/category/${getCategorySlug(article.category)}`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema(article),
          ...(article.faqs?.length ? [faqSchema(article.faqs)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: article.category, path: categoryHref },
            { name: article.title, path: `/insights/${article.slug}` },
          ]),
        ]}
      />

      <article aria-labelledby="article-title">
        <header className="pt-[calc(var(--header-height)+3rem)] pb-12 md:pt-[calc(var(--header-height)+5rem)] md:pb-16">
          <Container>
            <nav aria-label="Breadcrumb" className="animate-page-in">
              <ol className="eyebrow flex flex-wrap items-center gap-3 text-[0.6875rem] text-stone-deep">
                <li>
                  <Link href="/insights" className="link-underline">
                    Insights
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href={categoryHref} className="link-underline text-brass-deep">
                    {article.category}
                  </Link>
                </li>
              </ol>
            </nav>
            <h1 id="article-title" className="mt-8 max-w-5xl text-display-2 md:mt-10">
              {article.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lead text-ink/75">{article.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {article.format === "guide" ? (
                <span className="eyebrow border border-ink/25 px-3 py-2 text-[0.625rem] text-ink/80">Guide</span>
              ) : null}
              {article.status === "draft" ? (
                <span className="eyebrow border border-oxblood/40 px-3 py-2 text-[0.625rem] text-oxblood">
                  Draft for review — not yet approved for publication
                </span>
              ) : null}
            </div>
          </Container>
        </header>

        <Container width="wide" className="px-0 sm:px-8 md:px-10 xl:px-16">
          <EditorialImage
            image={article.image}
            priority
            unveil
            ratio="aspect-[4/3] sm:aspect-[16/9] xl:aspect-[21/9]"
            sizes="(min-width: 1760px) 1632px, 100vw"
          />
        </Container>

        <Container className="py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-3" aria-label="Article details">
              <div className="space-y-10 lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
                <dl className="grid grid-cols-2 gap-6 border-t border-ink/15 pt-6 text-sm sm:grid-cols-4 lg:grid-cols-1">
                  <div>
                    <dt className="eyebrow text-[0.625rem] text-stone-deep">Written by</dt>
                    <dd className="mt-1.5">{article.author}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-[0.625rem] text-stone-deep">
                      {article.updatedAt ? "Updated" : "Published"}
                    </dt>
                    <dd className="mt-1.5">
                      <time dateTime={article.updatedAt ?? article.publishedAt}>
                        {formatArticleDate(article.updatedAt ?? article.publishedAt)}
                      </time>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-[0.625rem] text-stone-deep">Subject</dt>
                    <dd className="mt-1.5">
                      <Link href={categoryHref} className="link-prose">
                        {article.category}
                      </Link>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-[0.625rem] text-stone-deep">Reading time</dt>
                    <dd className="mt-1.5">{readingTime} minutes</dd>
                  </div>
                </dl>
                {contents.length > 2 ? (
                  <nav aria-label="In this article" className="hidden border-t border-ink/15 pt-6 lg:block">
                    <p className="eyebrow mb-4 text-[0.625rem] text-stone-deep">In this article</p>
                    <TableOfContents items={contents} />
                  </nav>
                ) : null}
              </div>
            </aside>

            <div className="max-w-[42rem] lg:col-span-8 lg:col-start-5">
              {contents.length > 2 ? (
                <details className="group mb-12 border-y border-ink/15 py-4 lg:hidden">
                  <summary className="eyebrow flex min-h-11 cursor-pointer list-none items-center justify-between text-[0.6875rem] text-stone-deep">
                    In this article
                    <span aria-hidden="true" className="text-lg transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <nav aria-label="In this article" className="pt-4">
                    <TableOfContents items={contents} />
                  </nav>
                </details>
              ) : null}

              <ArticleBody blocks={article.body} />

              {article.faqs?.length ? (
                <section
                  aria-labelledby="questions-title"
                  className="mt-20 border-t border-ink/15 pt-12 scroll-mt-[calc(var(--header-height)+2rem)]"
                  id="questions"
                >
                  <h2 id="questions-title" className="text-display-4">
                    Common questions
                  </h2>
                  <div className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
                    {article.faqs.map((faq) => (
                      <div key={faq.question} className="py-6">
                        <h3 className="font-display text-xl leading-snug">{faq.question}</h3>
                        <p className="mt-3 text-ink/80">
                          <InlineText text={faq.answer} />
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {services.length > 0 ? (
                <section aria-labelledby="article-services-title" className="mt-20">
                  <p className="eyebrow text-[0.6875rem] text-brass-deep">How we can help</p>
                  <h2 id="article-services-title" className="mt-3 text-display-4">
                    Related services
                  </h2>
                  <div className="mt-6 border-t border-ink/15">
                    {services.map((capability) => (
                      <CapabilityCard key={capability.slug} capability={capability} />
                    ))}
                  </div>
                </section>
              ) : null}

              <Rule variant="ornament" className="mt-16 text-ink" />
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 ? (
        <section aria-labelledby="related-title" className="border-t border-ink/10 py-20 md:py-28">
          <Container>
            <h2 id="related-title" className="text-display-4">
              Further reading
            </h2>
            <div className="mt-12 grid gap-14 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-12">
              {related.map((item) => (
                <Reveal key={item.slug}>
                  <InsightCard article={item} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <EnquiryBand />
    </>
  );
}
