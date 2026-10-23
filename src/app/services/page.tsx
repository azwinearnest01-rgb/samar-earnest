import Link from "next/link";

import { Seal } from "@/components/brand/Seal";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { CapabilityCard } from "@/components/services/CapabilityCard";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { formatServiceNumber, getServiceCapabilities, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Every service Samar & Earnest offers, from CRM implementation and local SEO to review responses and digital strategy — each explained in full.",
  path: "/services",
});

const engagements = [
  {
    href: "/private-digital-office",
    eyebrow: "A Retained Engagement",
    title: "The Private Digital Office",
    text: "One firm overseeing the whole digital estate, on a continuing basis.",
    dark: true,
  },
  {
    href: "/digital-estate-audit",
    eyebrow: "A Signature Engagement",
    title: "The Digital Estate Audit",
    text: "A structured, independent review of everything through which a business is found and judged online.",
    dark: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="What we offer."
        intro={
          <p>
            Seven practices, each made up of specific services. Choose any one to read what it is, how it works and how
            we approach it. Services may be engaged individually, or together through the Private Digital Office.
          </p>
        }
      >
        <nav aria-label="Practices">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[0.95rem]">
            {services.map((service) => (
              <li key={service.slug}>
                <a href={`#${service.slug}`} className="link-prose">
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <section aria-label="Signature engagements" className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {engagements.map((engagement, index) => (
              <Reveal key={engagement.href} delay={index * 0.08}>
                <article
                  className={`group relative flex h-full flex-col justify-between gap-10 overflow-hidden p-8 sm:p-10 ${
                    engagement.dark ? "theme-dark" : "texture-paper border border-ink/15 bg-paper"
                  }`}
                >
                  <Seal
                    className={`pointer-events-none absolute -right-10 -bottom-12 h-56 w-auto ${
                      engagement.dark ? "text-ivory/[0.06]" : "text-ink/[0.05]"
                    }`}
                  />
                  <div className="relative">
                    <p className={`eyebrow text-[0.6875rem] ${engagement.dark ? "text-brass" : "text-brass-deep"}`}>
                      {engagement.eyebrow}
                    </p>
                    <h2 className="mt-5 text-display-4">
                      <Link href={engagement.href} className="after:absolute after:inset-0">
                        {engagement.title}
                      </Link>
                    </h2>
                    <p className={`mt-4 max-w-md ${engagement.dark ? "text-ivory/80" : "text-ink/75"}`}>
                      {engagement.text}
                    </p>
                  </div>
                  <p aria-hidden="true" className="eyebrow relative flex items-center gap-3 text-[0.75rem]">
                    Learn more
                    <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {services.map((service) => {
        const items = getServiceCapabilities(service);
        const titleId = `${service.slug}-title`;
        return (
          <section
            key={service.slug}
            id={service.slug}
            aria-labelledby={titleId}
            className="border-t border-ink/10 py-20 md:py-28"
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <Reveal className="lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
                    <p className="eyebrow tabular text-brass-deep">{formatServiceNumber(service.number)}</p>
                    <h2 id={titleId} className="mt-5 text-display-3">
                      {service.name}
                    </h2>
                    <p className="mt-4 font-serif text-[clamp(1.15rem,1.05rem+0.4vw,1.35rem)] italic text-ink/75">
                      {service.description}
                    </p>
                    <div className="mt-8 flex flex-col items-start gap-2">
                      <ButtonLink href={`/expertise#${service.slug}`} variant="text">
                        Our view of {service.name}
                      </ButtonLink>
                      <ButtonLink href={`/contact?area=${service.enquiryArea}`} variant="text" arrow={false}>
                        Enquire
                      </ButtonLink>
                    </div>
                  </Reveal>
                </div>
                <div className="lg:col-span-8">
                  <div className="grid border-t border-ink/15 md:grid-cols-2 md:gap-x-10">
                    {items.map((capability) => (
                      <CapabilityCard key={capability.slug} capability={capability} />
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <EnquiryBand
        title="Not sure where to begin?"
        text="Tell us what is working and what requires attention. We will suggest the services that would help — or tell you if none are needed."
        tone="dark"
      />
    </>
  );
}
