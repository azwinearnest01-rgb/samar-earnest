import type { ReactNode } from "react";

import { EditorialImage } from "@/components/media/EditorialImage";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ImageKey } from "@/content/images";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: ImageKey;
  /** Forest background (the header inverts over it — see darkHeroRoutes). */
  tone?: "light" | "dark";
  children?: ReactNode;
  titleSize?: "lg" | "xl";
};

/**
 * Opening section for inner pages. With an image, the composition is
 * text-left / plate-right on desktop, stacked with a landscape crop on
 * tablet and mobile.
 */
export function PageHero({ eyebrow, title, intro, image, tone = "light", children, titleSize = "lg" }: PageHeroProps) {
  const dark = tone === "dark";
  return (
    <section
      aria-labelledby="page-title"
      className={cn("relative overflow-hidden", dark ? "theme-dark" : "border-b border-ink/10")}
    >
      <Container className="pt-[calc(var(--header-height)+3rem)] pb-16 md:pt-[calc(var(--header-height)+5rem)] md:pb-24 xl:pb-28">
        <div className={cn("grid gap-12", image && "lg:grid-cols-12 lg:gap-12")}>
          <div className={cn(image ? "lg:col-span-7 lg:self-end" : "max-w-5xl")}>
            <Eyebrow className={cn("animate-page-in", dark ? "text-brass" : "text-brass-deep")}>{eyebrow}</Eyebrow>
            <h1
              id="page-title"
              className={cn("mt-8 md:mt-10", titleSize === "xl" ? "text-display-1" : "text-display-2")}
            >
              <span className="block overflow-hidden pb-[0.1em]">
                <span className="block animate-rise [animation-delay:100ms]">{title}</span>
              </span>
            </h1>
            {intro ? (
              <div
                className={cn(
                  "mt-8 max-w-2xl animate-page-in text-lead [animation-delay:350ms] md:mt-10",
                  dark ? "text-ivory/80" : "text-ink/75",
                )}
              >
                {intro}
              </div>
            ) : null}
            {children ? <div className="mt-10 animate-page-in [animation-delay:450ms]">{children}</div> : null}
          </div>
          {image ? (
            <div className="lg:col-span-5">
              <EditorialImage
                image={image}
                priority
                unveil
                ratio="aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/5]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
