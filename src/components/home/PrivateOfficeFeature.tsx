import { Seal } from "@/components/brand/Seal";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { officeOversight } from "@/content/engagements";

/** The flagship retained engagement, presented as the most considered section on the page. */
export function PrivateOfficeFeature() {
  return (
    <section aria-labelledby="office-title" className="theme-dark relative overflow-hidden py-24 md:py-32 xl:py-40">
      <Seal className="pointer-events-none absolute top-16 -left-24 h-[30rem] w-auto text-ivory/[0.035] md:h-[40rem]" />

      <Container className="relative">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10 xl:gap-16">
          <div className="md:col-span-5 md:row-span-2 xl:col-span-5">
            <Reveal>
              <EditorialImage
                image="deskLampDark"
                ratio="aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/5]"
                sizes="(min-width: 768px) 40vw, 100vw"
                parallax
                imageClassName="object-[30%_50%]"
              />
            </Reveal>
          </div>

          <div className="md:col-span-7 xl:col-span-6 xl:col-start-7">
            <Reveal>
              <Eyebrow className="text-brass">A Retained Engagement</Eyebrow>
              <h2 id="office-title" className="mt-8 text-display-2">
                The Private Digital Office
              </h2>
              <p className="mt-6 font-serif text-[clamp(1.35rem,1.1rem+1vw,2rem)] leading-snug italic text-brass">
                One firm overseeing the digital estate.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 space-y-6 text-lead text-ivory/80">
              <p>
                For businesses that would rather appoint one trusted firm than manage a collection of disconnected
                suppliers.
              </p>
              <p>
                The Private Digital Office provides ongoing oversight across customer relationships, websites, search
                presence, reputation, content, business systems, analytics and automation.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7 xl:col-span-6 xl:col-start-7">
            <Reveal delay={0.15}>
              <h3 className="eyebrow text-[0.6875rem] text-brass">Under one oversight</h3>
              <ul className="mt-5 grid grid-cols-2 border-t border-ivory/15 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
                {officeOversight.map((area) => (
                  <li key={area} className="border-b border-ivory/15 py-3 pr-4 text-[0.95rem] text-ivory/85">
                    {area}
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <ButtonLink href="/private-digital-office" tone="dark" fullWidthOnMobile>
                  Discover the Private Digital Office
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
