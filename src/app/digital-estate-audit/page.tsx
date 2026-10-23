import Link from "next/link";

import { AuditSchedule } from "@/components/engagements/AuditSchedule";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { NumberedSection } from "@/components/sections/NumberedSection";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { auditProcess } from "@/content/engagements";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "The Digital Estate Audit",
  description:
    "A structured, independent review of a business's website, search visibility, reputation, customer journey, CRM, business profiles, analytics, conversion process and digital infrastructure.",
  path: "/digital-estate-audit",
});

const receives = [
  "A written account of the estate's current condition",
  "Findings for each area reviewed, in plain language",
  "Recommendations set out in order of priority",
  "A conversation to walk through the findings and answer questions",
];

export default function DigitalEstateAuditPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "The Digital Estate Audit", path: "/digital-estate-audit" },
        ])}
      />
      <PageHero
        eyebrow="A Signature Engagement"
        title="The Digital Estate Audit"
        image="capitalIonic"
        intro={
          <p>
            A structured, independent review of everything through which a business is found, judged and dealt with
            online. Clarity before implementation.
          </p>
        }
      >
        <ButtonLink href="/contact?area=digital-estate-audit" fullWidthOnMobile>
          Request an Audit
        </ButtonLink>
      </PageHero>

      <NumberedSection id="scope" number="01" label="Scope" title="Nine areas, reviewed as one estate.">
        <Reveal className="mb-12 space-y-6 text-lead text-ink/80">
          <p>
            Each part of a digital estate affects the others. The audit therefore examines them together, so that the
            findings describe the business as its customers actually experience it.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <AuditSchedule />
        </Reveal>
      </NumberedSection>

      <NumberedSection
        id="method"
        number="02"
        label="Method"
        title="An advisory review, not an automated scan."
        tone="paper"
      >
        <Reveal className="space-y-6 text-lead text-ink/80">
          <p>
            Automated tools have their place, and we use them where they are useful. But a tool cannot judge whether a
            website explains the business well, whether an enquiry is answered properly, or which of forty warnings
            actually matters. That judgement is the substance of the audit.
          </p>
        </Reveal>
        <ol className="mt-12 grid border-t border-ink/15 md:grid-cols-2">
          {auditProcess.map((step, index) => (
            <Reveal
              as="li"
              key={step.name}
              delay={(index % 2) * 0.05}
              className="border-b border-ink/15 py-7 md:odd:pr-8 md:even:border-l md:even:pl-8"
            >
              <p className="font-serif text-lg italic text-brass-deep">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-display text-2xl">{step.name}</h3>
              <p className="mt-2 text-ink/70">{step.detail}</p>
            </Reveal>
          ))}
        </ol>
      </NumberedSection>

      <NumberedSection
        id="outcome"
        number="03"
        label="What You Receive"
        title="A clear account, and a considered plan."
      >
        <Reveal>
          <ul className="prose-estate">
            {receives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-10 text-ink/70">
            The recommendations are the business&rsquo;s to act upon — with us, with another provider, or internally.
            Many businesses find the audit a natural foundation for the{" "}
            <Link href="/private-digital-office" className="link-prose">
              Private Digital Office
            </Link>
            , but it is complete in itself.
          </p>
        </Reveal>
      </NumberedSection>

      <EnquiryBand
        eyebrow="Request an Audit"
        title="Understand the estate before altering it."
        text="Tell us about the business and what prompted the review. We will reply to discuss scope and next steps."
        ctaLabel="Request an Audit"
        ctaHref="/contact?area=digital-estate-audit"
        tone="dark"
      />
    </>
  );
}
