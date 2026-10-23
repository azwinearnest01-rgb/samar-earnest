import { AuditSchedule } from "@/components/engagements/AuditSchedule";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function AuditFeature() {
  return (
    <section aria-labelledby="audit-title" className="texture-paper bg-paper py-24 md:py-32 xl:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-[calc(var(--header-height)+3rem)] lg:col-span-5 lg:self-start">
            <Reveal>
              <Eyebrow className="text-brass-deep">A Signature Engagement</Eyebrow>
              <h2 id="audit-title" className="mt-8 text-display-3">
                The Digital Estate Audit
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 space-y-5 text-lead text-ink/80">
              <p>
                A structured, independent review of everything through which a business is found, judged and dealt with
                online — conducted by people, and written up with care.
              </p>
              <p className="text-body text-ink/70">
                It is not an automated scan. It is the kind of review a business would expect from any serious adviser:
                a clear account of the current position, and a considered view of what deserves attention first.
              </p>
            </Reveal>
            <Reveal
              delay={0.15}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8"
            >
              <ButtonLink href="/contact?area=digital-estate-audit" fullWidthOnMobile>
                Request an Audit
              </ButtonLink>
              <ButtonLink href="/digital-estate-audit" variant="text">
                How the audit works
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <AuditSchedule />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
