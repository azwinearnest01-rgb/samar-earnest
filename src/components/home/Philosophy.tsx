import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Rule } from "@/components/ui/Rule";

const changes = ["The platforms will change.", "The tools will change.", "The principle will not:"];

export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-title" className="py-28 md:py-36 xl:py-48">
      <Container width="default" className="text-center">
        <Reveal>
          <Eyebrow className="justify-center text-brass-deep">Our Philosophy</Eyebrow>
          <h2 id="philosophy-title" className="mx-auto mt-8 max-w-5xl text-display-2">
            Good businesses deserve good stewardship.
          </h2>
        </Reveal>

        <Rule variant="ornament" className="mx-auto my-14 max-w-xs text-ink md:my-20" />

        <div className="mx-auto max-w-3xl space-y-3 text-[clamp(1.25rem,1.05rem+0.8vw,1.75rem)] leading-snug text-ink/75">
          {changes.map((line, index) => (
            <Reveal key={line} delay={index * 0.12}>
              <p>{line}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-12 max-w-4xl font-serif text-[clamp(1.75rem,1.2rem+2.4vw,3.5rem)] leading-[1.18] italic md:mt-16">
            Look after the things upon which the business depends.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
