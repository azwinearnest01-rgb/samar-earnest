import { EditorialImage } from "@/components/media/EditorialImage";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

const headlineLines = ["For businesses", "built to endure."];

/**
 * Homepage hero. Headline lines rise from behind a mask (CSS only, so the
 * text is server-rendered and never waits on JavaScript).
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="theme-dark relative overflow-hidden">
      <Container className="pt-[calc(var(--header-height)+2.75rem)] pb-14 md:pt-[calc(var(--header-height)+4.5rem)] md:pb-20 xl:pt-[calc(var(--header-height)+5.5rem)] xl:pb-24">
        <Eyebrow className="animate-page-in text-brass">{siteConfig.descriptor}</Eyebrow>

        <h1 id="hero-title" className="mt-7 text-display-1 md:mt-10">
          {headlineLines.map((line, index) => (
            <span
              key={line}
              className={
                index === 1
                  ? "block overflow-hidden pb-[0.1em] md:pl-[12%] lg:pl-[24%]"
                  : "block overflow-hidden pb-[0.1em]"
              }
            >
              <span className="block animate-rise" style={{ animationDelay: `${120 + index * 140}ms` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-between gap-10 lg:col-span-5 lg:pt-4 xl:col-span-4">
            <div className="animate-page-in [animation-delay:450ms]">
              <p className="max-w-md text-lead text-ivory/85">
                Samar &amp; Earnest maintains the relationships, reputation and digital infrastructure upon which modern
                businesses increasingly depend.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/contact" tone="dark" fullWidthOnMobile>
                  Make an Enquiry
                </ButtonLink>
                <ButtonLink href="/the-firm" tone="dark" variant="outline" arrow={false} fullWidthOnMobile>
                  Explore the Firm
                </ButtonLink>
              </div>
            </div>

            <dl className="hidden border-t border-ivory/15 pt-6 lg:block">
              <dt className="eyebrow text-[0.6875rem] text-brass">Areas of practice</dt>
              <dd className="mt-3 text-sm leading-relaxed text-ivory/70">
                {services.map((service) => service.name).join(" · ")}
              </dd>
            </dl>
          </div>

          <div className="lg:col-span-7 xl:col-span-7 xl:col-start-6">
            <EditorialImage
              image="heroColonnade"
              priority
              unveil
              parallax
              ratio="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[6/5]"
              sizes="(min-width: 1280px) 56vw, (min-width: 1024px) 58vw, 100vw"
              imageClassName="object-[50%_40%]"
            />
            <p className="eyebrow mt-4 flex items-center justify-between gap-4 text-[0.6875rem] text-ivory/60">
              <span>{siteConfig.origin}</span>
              <span aria-hidden="true" className="hidden font-serif text-base normal-case italic text-brass sm:inline">
                &amp;
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
