import { AuditFeature } from "@/components/home/AuditFeature";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { Philosophy } from "@/components/home/Philosophy";
import { PrivateOfficeFeature } from "@/components/home/PrivateOfficeFeature";
import { InsightCard } from "@/components/insights/InsightCard";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceIndex } from "@/components/services/ServiceIndex";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getArticles } from "@/content/insights";
import { capabilityHref } from "@/content/capabilities";
import { getServiceCapabilities, services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { organizationSchema, servicesSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: `${siteConfig.name} | ${siteConfig.descriptor}`,
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const latest = getArticles().slice(0, 3);

  return (
    <>
      <JsonLd data={[organizationSchema(), servicesSchema(services)]} />
      <Hero />
      <Introduction />

      <section aria-labelledby="expertise-title" className="border-t border-ink/10 py-24 md:py-32 xl:py-40">
        <Container>
          <div className="mb-14 grid gap-8 md:mb-20 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              eyebrow="Our Expertise"
              id="expertise-title"
              title="One business. One digital estate."
              className="lg:col-span-8"
            />
            <Reveal className="lg:col-span-4 lg:justify-self-end">
              <ButtonLink href="/expertise" variant="text">
                The full practice
              </ButtonLink>
            </Reveal>
          </div>
          <ServiceIndex
            services={services.map((service) => ({
              ...service,
              links: getServiceCapabilities(service).map((capability) => ({
                name: capability.name,
                href: capabilityHref(capability),
              })),
            }))}
          />
        </Container>
      </section>

      <PrivateOfficeFeature />
      <AuditFeature />
      <Philosophy />

      {latest.length > 0 ? (
        <section aria-labelledby="journal-title" className="border-t border-ink/10 py-24 md:py-32">
          <Container>
            <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="Insights" id="journal-title" title="From the journal" />
              <Reveal>
                <ButtonLink href="/insights" variant="text">
                  All insights
                </ButtonLink>
              </Reveal>
            </div>
            <div className="grid gap-14 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-10">
              {latest.map((article, index) => (
                <Reveal
                  key={article.slug}
                  delay={index * 0.08}
                  className={index === 2 ? "sm:max-lg:hidden" : undefined}
                >
                  <InsightCard article={article} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <EnquiryBand tone="dark" />
    </>
  );
}
