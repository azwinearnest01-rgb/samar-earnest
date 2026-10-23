import Link from "next/link";

import { EditorialImage } from "@/components/media/EditorialImage";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { type Article, formatArticleDate, getReadingTime } from "@/content/insights";
import { cn } from "@/lib/cn";

type InsightCardProps = {
  article: Article;
  /** "feature": lead story; "row": journal listing; "card": compact grid item. */
  variant?: "feature" | "row" | "card";
  headingLevel?: "h2" | "h3";
  className?: string;
  priority?: boolean;
};

type InsightMetaProps = {
  article: Article;
  className?: string;
  /** Stack the items vertically instead of separating them with dots. */
  stacked?: boolean;
};

export function InsightMeta({ article, className, stacked }: InsightMetaProps) {
  // Separators trail their item inside a no-wrap group, so a wrapped line never begins with "·".
  const dot = stacked ? null : <span aria-hidden="true"> ·</span>;
  return (
    <p
      className={cn(
        "eyebrow flex text-[0.6875rem]",
        stacked ? "flex-col items-start gap-y-2" : "flex-wrap items-center gap-x-3 gap-y-1",
        className,
      )}
    >
      <span className="whitespace-nowrap">
        <span className="text-brass-deep">{article.category}</span>
        {dot}
      </span>
      <span className="whitespace-nowrap">
        <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
        {dot}
      </span>
      <span className="whitespace-nowrap">{getReadingTime(article)} min read</span>
    </p>
  );
}

/**
 * Journal entry in three editorial arrangements. The whole card is one link
 * (the title), with the hit area stretched over the card.
 */
export function InsightCard({ article, variant = "card", headingLevel = "h3", className, priority }: InsightCardProps) {
  const Heading = headingLevel;
  const href = `/insights/${article.slug}`;

  if (variant === "feature") {
    return (
      <article className={cn("group relative grid gap-8 md:grid-cols-12 md:gap-10", className)}>
        <div className="md:col-span-7">
          <EditorialImage
            image={article.image}
            alt=""
            ratio="aspect-[4/3] md:aspect-[5/4] xl:aspect-[16/11]"
            sizes="(min-width: 768px) 58vw, 100vw"
            priority={priority}
            imageClassName="transition-transform duration-[1.4s] ease-estate group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col justify-end md:col-span-5">
          <InsightMeta article={article} className="text-ink/70" />
          <Heading className="mt-5 text-display-3">
            <Link href={href} className="after:absolute after:inset-0">
              <span className="link-underline group-hover:bg-[length:100%_1px]">{article.title}</span>
            </Link>
          </Heading>
          <p className="mt-6 text-lead text-ink/75">{article.excerpt}</p>
          <p aria-hidden="true" className="eyebrow mt-8 flex items-center gap-3 text-[0.75rem]">
            Read the essay <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
          </p>
        </div>
      </article>
    );
  }

  if (variant === "row") {
    return (
      <article
        className={cn(
          "group relative grid gap-6 border-b border-ink/15 py-10 sm:grid-cols-[10rem_1fr] sm:gap-8 md:grid-cols-[14rem_1fr] lg:grid-cols-[1fr_2fr_14rem] lg:items-start lg:gap-12",
          className,
        )}
      >
        <InsightMeta article={article} stacked className="text-ink/70" />
        <div className="sm:col-start-2 lg:col-start-2 lg:row-start-1">
          <Heading className="text-display-4">
            <Link href={href} className="after:absolute after:inset-0">
              <span className="link-underline group-hover:bg-[length:100%_1px]">{article.title}</span>
            </Link>
          </Heading>
          <p className="mt-4 max-w-2xl text-ink/70">{article.excerpt}</p>
        </div>
        <div className="hidden lg:block">
          <EditorialImage image={article.image} alt="" ratio="aspect-[4/3]" sizes="14rem" />
        </div>
      </article>
    );
  }

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <EditorialImage
        image={article.image}
        alt=""
        ratio="aspect-[4/3]"
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
        imageClassName="transition-transform duration-[1.4s] ease-estate group-hover:scale-[1.03]"
      />
      <InsightMeta article={article} className="mt-6 text-ink/70" />
      <Heading className="mt-4 text-[clamp(1.4rem,1.2rem+0.7vw,1.85rem)] leading-[1.18]">
        <Link href={href} className="after:absolute after:inset-0">
          <span className="link-underline group-hover:bg-[length:100%_1px]">{article.title}</span>
        </Link>
      </Heading>
      <p className="mt-4 text-[1rem] leading-relaxed text-ink/70">{article.excerpt}</p>
    </article>
  );
}
