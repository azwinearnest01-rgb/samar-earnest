import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryNav } from "@/components/insights/CategoryNav";
import { InsightCard } from "@/components/insights/InsightCard";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getArticlesInCategory, getCategoryBySlug, insightCategories } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return insightCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/category/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Not found" };
  const hasPublished = getArticlesInCategory(category.name).some((article) => article.status === "published");
  return pageMetadata({
    title: `${category.name} — Insights`,
    description: category.description,
    path: `/insights/category/${category.slug}`,
    // Keep empty or draft-only subject pages out of search results.
    noIndex: !hasPublished,
  });
}

export default async function CategoryPage({ params }: PageProps<"/insights/category/[category]">) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const items = getArticlesInCategory(category.name);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: category.name, path: `/insights/category/${category.slug}` },
        ])}
      />
      <PageHero eyebrow="Insights" title={category.name} intro={<p>{category.description}</p>}>
        <CategoryNav current={category.slug} />
      </PageHero>

      <section aria-label={`${category.name} articles`} className="py-12 md:py-20">
        <Container>
          {items.length > 0 ? (
            <div className="border-t border-ink/25">
              {items.map((article) => (
                <Reveal key={article.slug}>
                  <InsightCard article={article} variant="row" headingLevel="h2" />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-display-4">Nothing published here yet.</p>
              <p className="mt-4 text-ink/70">New articles on this subject are in preparation.</p>
              <div className="mt-8">
                <ButtonLink href="/insights" variant="outline">
                  All insights
                </ButtonLink>
              </div>
            </div>
          )}
        </Container>
      </section>

      <EnquiryBand />
    </>
  );
}
