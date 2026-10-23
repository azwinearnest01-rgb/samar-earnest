import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { CapabilityCard } from "@/components/services/CapabilityCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getCapabilities, getCapability, getCapabilityPages } from "@/content/capabilities";
import { formatServiceNumber, getServiceBySlug, getServiceCapabilities, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, capabilitySchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return getCapabilityPages().map((capability) => ({ slug: capability.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability || capability.href) return { title: "Not found" };
  const practice = getServiceBySlug(capability.practice);
  return pageMetadata({
    title: practice ? `${capability.name} — ${practice.name}` : capability.name,
    description: capability.summary,
    path: `/services/${capability.slug}`,
  });
}

function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="text-display-4">
      {children}
    </h2>
  );
}

export default async function CapabilityPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) notFound();
  if (capability.href) redirect(capability.href);

  const practice = getServiceBySlug(capability.practice);
  if (!practice) notFound();

  const alsoIn = services.filter(
    (service) => service.slug !== practice.slug && service.capabilities.includes(capability.slug),
  );
  const related = getCapabilities(capability.related ?? []);
  const siblings = getServiceCapabilities(practice).filter((item) => item.slug !== capability.slug);
  const enquireHref = `/contact?area=${practice.enquiryArea}`;

  return (
    <>
      <JsonLd
        data={[
          capabilitySchema(capability, practice),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: practice.name, path: `/services#${practice.slug}` },
            { name: capability.name, path: `/services/${capability.slug}` },
          ]),
        ]}
      />

      <article aria-labelledby="page-title">
        <header className="pt-[calc(var(--header-height)+3rem)] pb-12 md:pt-[calc(var(--header-height)+5rem)] md:pb-16">
          <Container>
            <nav aria-label="Breadcrumb" className="animate-page-in">
              <ol className="eyebrow flex flex-wrap items-center gap-3 text-[0.6875rem] text-stone-deep">
                <li>
                  <Link href="/services" className="link-underline">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href={`/services#${practice.slug}`} className="link-underline text-brass-deep">
                    {practice.name}
                  </Link>
                </li>
              </ol>
            </nav>
            <h1 id="page-title" className="mt-8 max-w-5xl text-display-2 md:mt-10">
              <span className="block overflow-hidden pb-[0.1em]">
                <span className="block animate-rise [animation-delay:100ms]">{capability.name}</span>
              </span>
            </h1>
            <p className="mt-8 max-w-3xl animate-page-in font-serif text-[clamp(1.3rem,1.1rem+0.8vw,1.85rem)] leading-snug italic text-ink/80 [animation-delay:300ms]">
              {capability.summary}
            </p>
            <div className="mt-10 flex animate-page-in flex-col gap-4 [animation-delay:400ms] sm:flex-row sm:items-center sm:gap-8">
              <ButtonLink href={enquireHref} fullWidthOnMobile>
                Enquire about this
              </ButtonLink>
              <ButtonLink href={`/services#${practice.slug}`} variant="text">
                All {practice.name} services
              </ButtonLink>
            </div>
          </Container>
        </header>

        <Container width="wide" className="px-0 sm:px-8 md:px-10 xl:px-16">
          <EditorialImage
            image={practice.image}
            alt=""
            priority
            unveil
            ratio="aspect-[16/9] xl:aspect-[24/9]"
            sizes="(min-width: 1760px) 1632px, 100vw"
          />
        </Container>

        <Container className="py-16 md:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <aside aria-label="At a glance" className="order-last lg:order-first lg:col-span-4">
              <div className="space-y-8 border-t border-ink/15 pt-6 lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
                <dl className="space-y-6 text-[0.95rem]">
                  <div>
                    <dt className="eyebrow text-[0.625rem] text-stone-deep">Practice</dt>
                    <dd className="mt-1.5">
                      <Link href={`/services#${practice.slug}`} className="link-prose">
                        {formatServiceNumber(practice.number)} — {practice.name}
                      </Link>
                    </dd>
                  </div>
                  {alsoIn.length > 0 ? (
                    <div>
                      <dt className="eyebrow text-[0.625rem] text-stone-deep">Also part of</dt>
                      <dd className="mt-1.5 space-x-3">
                        {alsoIn.map((service) => (
                          <Link key={service.slug} href={`/services#${service.slug}`} className="link-prose">
                            {service.name}
                          </Link>
                        ))}
                      </dd>
                    </div>
                  ) : null}
                  {related.length > 0 ? (
                    <div>
                      <dt className="eyebrow text-[0.625rem] text-stone-deep">Often paired with</dt>
                      <dd className="mt-1.5">
                        <ul className="space-y-1.5">
                          {related.map((item) => (
                            <li key={item.slug}>
                              <Link href={`/services/${item.slug}`} className="link-prose">
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ) : null}
                </dl>
                <ButtonLink href={enquireHref} variant="outline" fullWidthOnMobile>
                  Discuss this service
                </ButtonLink>
              </div>
            </aside>

            <div className="space-y-20 lg:col-span-8 lg:col-start-5">
              <section aria-labelledby="what-title">
                <Reveal>
                  <p className="eyebrow mb-5 text-[0.6875rem] text-brass-deep">01 — What it is</p>
                  <SectionTitle id="what-title">Why it matters</SectionTitle>
                  <div className="mt-8 space-y-6 text-lead text-ink/80">
                    {capability.overview.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </Reveal>
              </section>

              {capability.approach.length > 0 ? (
                <section aria-labelledby="how-title">
                  <Reveal>
                    <p className="eyebrow mb-5 text-[0.6875rem] text-brass-deep">02 — How it works</p>
                    <SectionTitle id="how-title">How we do it</SectionTitle>
                  </Reveal>
                  <ol className="mt-10 border-l border-ink/20 pl-8 md:pl-12">
                    {capability.approach.map((step, index) => (
                      <Reveal as="li" key={step.title} className="relative pb-10 last:pb-0">
                        <span
                          aria-hidden="true"
                          className="absolute top-1.5 -left-[calc(2rem+4.5px)] h-2 w-2 rotate-45 bg-brass md:-left-[calc(3rem+4.5px)]"
                        />
                        <p className="eyebrow tabular text-[0.6875rem] text-brass-deep">
                          Step {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
                        <p className="mt-2 max-w-2xl text-ink/75">{step.detail}</p>
                      </Reveal>
                    ))}
                  </ol>
                </section>
              ) : null}

              {capability.includes.length > 0 ? (
                <section aria-labelledby="includes-title">
                  <Reveal>
                    <p className="eyebrow mb-5 text-[0.6875rem] text-brass-deep">03 — What is included</p>
                    <SectionTitle id="includes-title">What the work covers</SectionTitle>
                    <ul className="mt-8 grid border-t border-ink/15 sm:grid-cols-2 sm:gap-x-10">
                      {capability.includes.map((item) => (
                        <li key={item} className="flex gap-4 border-b border-ink/15 py-4">
                          <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-brass-deep" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm text-ink/70">
                      The precise scope is agreed in writing before work begins, and adjusted to the business.
                    </p>
                  </Reveal>
                </section>
              ) : null}

              {capability.note ? (
                <Reveal>
                  <aside
                    aria-label="A note"
                    className="texture-paper border-l-2 border-brass bg-paper p-6 text-ink/85 sm:p-8"
                  >
                    <p className="eyebrow text-[0.6875rem] text-brass-deep">A note</p>
                    <p className="mt-3">{capability.note}</p>
                  </aside>
                </Reveal>
              ) : null}
            </div>
          </div>
        </Container>
      </article>

      {siblings.length > 0 ? (
        <section aria-labelledby="siblings-title" className="border-t border-ink/10 py-20 md:py-28">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow tabular text-[0.6875rem] text-brass-deep">
                  {formatServiceNumber(practice.number)}
                </p>
                <h2 id="siblings-title" className="mt-4 text-display-4">
                  More in {practice.name}
                </h2>
              </div>
              <ButtonLink href="/services" variant="text">
                All services
              </ButtonLink>
            </div>
            <div className="mt-10 grid border-t border-ink/15 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3">
              {siblings.map((item) => (
                <CapabilityCard key={item.slug} capability={item} withSummary={false} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <EnquiryBand
        eyebrow={capability.name}
        text="Tell us about the business and what you would like to improve. We will reply to discuss whether, and how, we can help."
        ctaHref={enquireHref}
        tone="dark"
      />
    </>
  );
}
