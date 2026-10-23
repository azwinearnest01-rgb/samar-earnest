import Link from "next/link";

import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ButtonLink } from "@/components/ui/Button";
import { capabilityHref } from "@/content/capabilities";
import { formatServiceNumber, getRelatedServices, getServiceCapabilities, type Service } from "@/content/services";

/** One practice area in depth, as rendered on the Expertise page. */
export function ServiceChapter({ service, priority }: { service: Service; priority?: boolean }) {
  const related = getRelatedServices(service);
  const capabilities = getServiceCapabilities(service);
  const titleId = `${service.slug}-title`;

  return (
    <article id={service.slug} aria-labelledby={titleId} className="border-t border-ink/15 py-16 md:py-24">
      <Reveal>
        <p className="eyebrow flex flex-wrap items-center gap-3 text-brass-deep">
          <span className="tabular">{formatServiceNumber(service.number)}</span>
          <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
          <span>{service.name}</span>
        </p>
        <h2 id={titleId} className="mt-6 text-display-3">
          {service.headline}
        </h2>
        <p className="mt-5 font-serif text-[clamp(1.2rem,1.05rem+0.6vw,1.5rem)] italic text-ink/75">
          {service.description}
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mt-10 md:mt-12">
        <EditorialImage
          image={service.image}
          ratio="aspect-[16/10] md:aspect-[21/9]"
          sizes="(min-width: 1024px) 66vw, 100vw"
          priority={priority}
        />
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10 xl:gap-16">
        <Reveal className="space-y-5 text-lead text-ink/80 md:col-span-2 xl:col-span-1">
          <h3 className="eyebrow text-[0.6875rem] text-stone-deep">Our view</h3>
          {service.philosophy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <div className="grid gap-12 sm:grid-cols-2 md:col-span-2 xl:col-span-1 xl:grid-cols-1">
          <Reveal delay={0.05}>
            <h3 className="eyebrow text-[0.6875rem] text-stone-deep">Capabilities</h3>
            <p className="mt-2 text-sm text-ink/70">Select any service to read how it works.</p>
            <ul className="mt-4 grid border-t border-ink/15 sm:grid-cols-1 xl:grid-cols-2 xl:gap-x-8">
              {capabilities.map((capability) => (
                <li key={capability.slug} className="border-b border-ink/15">
                  <Link
                    href={capabilityHref(capability)}
                    className="group flex min-h-11 items-center justify-between gap-3 py-3 text-[0.975rem]"
                  >
                    <span className="link-underline group-hover:bg-[length:100%_1px]">{capability.name}</span>
                    <ArrowIcon className="w-4 shrink-0 text-brass-deep opacity-50 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="eyebrow text-[0.6875rem] text-stone-deep">What it aims to achieve</h3>
            <ul className="prose-estate mt-5 text-[1rem]!">
              {service.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-14 flex flex-col gap-8 border-t border-ink/15 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="eyebrow text-[0.6875rem] text-stone-deep">Related practice</h3>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`#${item.slug}`} className="link-prose">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ButtonLink href={`/contact?area=${service.enquiryArea}`} variant="outline" fullWidthOnMobile>
          Enquire about {service.name}
        </ButtonLink>
      </Reveal>
    </article>
  );
}
