import Link from "next/link";

import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceChapter } from "@/components/services/ServiceChapter";
import { Container } from "@/components/ui/Container";
import { formatServiceNumber, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, servicesSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Expertise",
  description:
    "Seven areas of practice: client relations, digital estate, search and discovery, editorial, reputation, systems and automation, and advisory.",
  path: "/expertise",
});

export default function ExpertisePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Expertise", path: "/expertise" },
          ]),
          servicesSchema(services),
        ]}
      />
      <PageHero
        eyebrow="Our Expertise"
        title="One business. One digital estate."
        intro={
          <p>
            Seven areas of practice, each concerned with something upon which a modern business depends. They may be
            engaged individually, or together through the{" "}
            <Link href="/private-digital-office" className="link-prose">
              Private Digital Office
            </Link>
            .
          </p>
        }
      />

      <Container className="py-12 md:py-16">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-12">
          <nav aria-label="Areas of practice" className="lg:col-span-3">
            <div className="lg:sticky lg:top-[calc(var(--header-height)+2.5rem)] lg:pt-16 lg:pb-16">
              <p className="eyebrow text-[0.6875rem] text-stone-deep">Contents</p>
              <ol className="mt-5 grid gap-x-6 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-1">
                {services.map((service) => (
                  <li key={service.slug} className="border-b border-ink/15">
                    <a href={`#${service.slug}`} className="group flex items-baseline gap-4 py-3">
                      <span className="eyebrow tabular w-16 shrink-0 text-[0.625rem] text-brass-deep">
                        {formatServiceNumber(service.number)}
                      </span>
                      <span className="link-underline group-hover:bg-[length:100%_1px]">{service.name}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="lg:col-span-9">
            {services.map((service) => (
              <ServiceChapter key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </Container>

      <EnquiryBand
        eyebrow="Engagement"
        title="Several needs, one firm."
        text="Where a business needs more than one area attended to, the Private Digital Office brings them under a single, continuous oversight."
        ctaLabel="Discover the Private Digital Office"
        ctaHref="/private-digital-office"
        tone="dark"
      />
    </>
  );
}
