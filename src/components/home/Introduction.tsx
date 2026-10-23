import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Introduction() {
  return (
    <section aria-labelledby="introduction-title" className="texture-paper relative py-24 md:py-32 xl:py-40">
      <Container>
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5 xl:col-span-5">
            <Reveal>
              <Eyebrow className="text-brass-deep">The Firm</Eyebrow>
              <h2 id="introduction-title" className="mt-8 text-display-2">
                Business, <span className="font-serif italic">carefully</span> maintained.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-14 hidden md:block md:max-w-[19rem] xl:max-w-sm">
              <EditorialImage
                image="capitalsCorinthian"
                ratio="aspect-[3/4]"
                sizes="(min-width: 1280px) 24rem, 30vw"
                caption="Stewardship, in stone"
              />
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pt-24 xl:col-span-6 xl:col-start-7 xl:pt-32">
            <Reveal>
              <p className="font-display text-display-4 text-ink">A business today extends far beyond its premises.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 space-y-6 text-lead text-ink/80">
              <p>
                Its reputation lives in search results. Its relationships live in customer systems. Its first impression
                may be a website. Its next opportunity may begin with an unanswered enquiry.
              </p>
              <p className="border-l border-brass pl-6 text-ink">
                Samar &amp; Earnest brings these responsibilities under considered, continuous management.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
