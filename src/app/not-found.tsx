import type { Metadata } from "next";
import Link from "next/link";

import { EditorialImage } from "@/components/media/EditorialImage";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { primaryNav } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="pt-[calc(var(--header-height)+3rem)] pb-24 md:pt-[calc(var(--header-height)+5rem)] md:pb-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <Eyebrow className="text-brass-deep">Error 404</Eyebrow>
            <h1 id="not-found-title" className="mt-8 text-display-2">
              This page appears to have moved.
            </h1>
            <p className="mt-8 max-w-md text-lead text-ink/75">
              The address may be mistyped, or the page may have been relocated. The rest of the firm remains in good
              order.
            </p>
            <div className="mt-10">
              <ButtonLink href="/" fullWidthOnMobile>
                Return to the Firm
              </ButtonLink>
            </div>
            <nav aria-label="Elsewhere on the site" className="mt-14 border-t border-ink/15 pt-6">
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-prose">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <EditorialImage
              image="colonnadeWhite"
              alt=""
              ratio="aspect-[16/10] lg:aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
