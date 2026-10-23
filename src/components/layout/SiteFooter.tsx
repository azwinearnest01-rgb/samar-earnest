import Link from "next/link";

import { Seal } from "@/components/brand/Seal";
import { Wordmark } from "@/components/brand/Wordmark";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/services";
import { enquiryCta, isPlaceholderEmail, legalNav, locations, primaryNav, siteConfig } from "@/content/site";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

function FooterHeading({ children }: { children: string }) {
  return <h2 className="eyebrow mb-6 text-[0.6875rem] text-brass">{children}</h2>;
}

export async function SiteFooter() {
  const year = await getYear();

  return (
    <footer data-page-chrome="" className="theme-dark relative overflow-hidden">
      <Seal className="pointer-events-none absolute -top-24 -right-20 hidden h-[34rem] w-auto text-ivory/[0.035] md:block" />

      <Container className="relative pt-20 pb-10 md:pt-28 lg:pt-32">
        <div className="flex flex-col gap-10 border-b border-ivory/15 pb-14 md:pb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link href="/" aria-label="Samar & Earnest — home" className="inline-block">
              <Wordmark size="lg" />
            </Link>
            <p className="mt-6 font-serif text-[clamp(1.25rem,1rem+1vw,1.75rem)] italic text-ivory/85">
              {siteConfig.tagline}
            </p>
          </div>
          <ButtonLink href={enquiryCta.href} tone="dark" fullWidthOnMobile>
            {enquiryCta.label}
          </ButtonLink>
        </div>

        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 md:py-16 lg:grid-cols-12 lg:gap-8">
          <nav aria-label="Footer" className="lg:col-span-3">
            <FooterHeading>Navigation</FooterHeading>
            <ul className="space-y-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-ivory/85 hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/digital-estate-audit" className="link-underline text-ivory/85 hover:text-ivory">
                  The Digital Estate Audit
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Expertise" className="lg:col-span-4">
            <FooterHeading>Expertise</FooterHeading>
            <ul className="grid gap-3 sm:grid-cols-1 xl:grid-cols-2 xl:gap-x-8">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/expertise#${service.slug}`} className="link-underline text-ivory/85 hover:text-ivory">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <FooterHeading>Correspondence</FooterHeading>
            <address className="not-italic">
              <a
                href={`mailto:${siteConfig.email.general}`}
                className="link-underline break-all text-ivory/85 hover:text-ivory"
              >
                {siteConfig.email.general}
              </a>
              {isPlaceholderEmail ? (
                <p className="mt-2 text-xs text-ivory/60">Placeholder address — to be replaced before launch.</p>
              ) : null}
            </address>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Presence</FooterHeading>
            <ul className="space-y-4">
              {locations.map((location) => (
                <li key={location.name}>
                  <p className="font-display text-xl">{location.name}</p>
                  <p className="text-sm text-ivory/65">{location.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-ivory/15 pt-8 text-sm text-ivory/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.legalName}. {siteConfig.origin}
          </p>
          <ul className="flex gap-8">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline inline-block py-1 hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
