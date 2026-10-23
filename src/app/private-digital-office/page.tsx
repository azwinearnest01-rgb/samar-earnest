import Link from "next/link";

import { RetainerComparison } from "@/components/engagements/RetainerComparison";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";
import { NumberedSection } from "@/components/sections/NumberedSection";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ButtonLink } from "@/components/ui/Button";
import { engagementSteps, reportingPractices } from "@/content/engagements";
import { sectors } from "@/content/sectors";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "The Private Digital Office",
  description:
    "A retained engagement in which one firm oversees the digital estate: customer relationships, website, search, reputation, content, systems, analytics and automation.",
  path: "/private-digital-office",
});

const oversight = [
  {
    name: "CRM",
    href: "/services/crm-configuration",
    detail: "Customer records, enquiries and follow-up kept accurate and in use.",
  },
  { name: "Website", href: "/services/website-maintenance", detail: "Maintained, secure, fast and current." },
  { name: "SEO", href: "/services/seo", detail: "Technical health and relevance attended to continuously." },
  {
    name: "Google Business Profile",
    href: "/services/google-business-profile-management",
    detail: "Details, posts, questions and photographs kept in order.",
  },
  { name: "Reviews", href: "/services/review-responses", detail: "Monitored and answered with care." },
  {
    name: "Listings",
    href: "/services/business-listings",
    detail: "Consistent business information wherever it appears.",
  },
  {
    name: "Content",
    href: "/services#editorial",
    detail: "Pages and articles written and revised as the business evolves.",
  },
  { name: "Analytics", href: "/services/analytics", detail: "Measurement the business can understand and trust." },
  {
    name: "Automations",
    href: "/services#systems-automation",
    detail: "Routine workflows documented, monitored and improved.",
  },
  {
    name: "Digital strategy",
    href: "/services/digital-strategy",
    detail: "Priorities reviewed and set for each period ahead.",
  },
];

const suitability = [
  "Would rather appoint one accountable firm than coordinate several suppliers",
  "Depend on enquiries, bookings or repeat customers arriving through digital channels",
  "Value considered, written advice over volume of activity",
  "Intend to be in business for many years, and wish their digital affairs to reflect it",
];

export default function PrivateDigitalOfficePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "The Private Digital Office", path: "/private-digital-office" },
        ])}
      />
      <PageHero
        tone="dark"
        eyebrow="A Retained Engagement"
        title="The Private Digital Office"
        image="deskLampDark"
        intro={
          <>
            <p className="font-serif text-[clamp(1.35rem,1.1rem+1vw,2rem)] leading-snug italic text-brass">
              One firm overseeing the digital estate.
            </p>
            <p className="mt-6">
              For businesses that would rather appoint one trusted firm than manage a collection of disconnected
              suppliers.
            </p>
          </>
        }
      >
        <ButtonLink href="/contact?area=private-digital-office" tone="dark" fullWidthOnMobile>
          Discuss an Engagement
        </ButtonLink>
      </PageHero>

      <NumberedSection id="principle" number="01" label="The Principle" title="Stewardship, rather than a retainer.">
        <Reveal className="space-y-6 text-lead text-ink/80">
          <p>
            The Private Digital Office provides ongoing oversight across customer relationships, websites, search
            presence, reputation, content, business systems, analytics and automation.
          </p>
          <p>
            It differs from an ordinary agency retainer in what is entrusted. A retainer usually purchases a quantity of
            activity. The Private Digital Office assumes responsibility for the condition of the estate as a whole — its
            upkeep, its coherence and its direction over time.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-14">
          <RetainerComparison />
        </Reveal>
      </NumberedSection>

      <NumberedSection
        id="oversight"
        number="02"
        label="What We Oversee"
        title="The whole estate, under one oversight."
        tone="paper"
      >
        <ul className="grid border-t border-ink/15 sm:grid-cols-2">
          {oversight.map((area, index) => (
            <Reveal
              as="li"
              key={area.name}
              delay={(index % 2) * 0.05}
              className="border-b border-ink/15 py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
            >
              <h3 className="font-display text-2xl">
                <Link href={area.href} className="group inline-flex items-baseline gap-3">
                  <span className="link-underline group-hover:bg-[length:100%_1px]">{area.name}</span>
                  <ArrowIcon className="w-4 text-brass-deep opacity-50 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              </h3>
              <p className="mt-2 text-ink/70">{area.detail}</p>
            </Reveal>
          ))}
        </ul>
      </NumberedSection>

      <NumberedSection
        id="engagement"
        number="03"
        label="How the Engagement Works"
        title="Deliberate from the first conversation."
      >
        <ol className="relative space-y-0 border-l border-ink/20 pl-8 md:pl-12">
          {engagementSteps.map((step, index) => (
            <Reveal as="li" key={step.name} className="relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[calc(2rem+4.5px)] h-2 w-2 rotate-45 bg-brass md:-left-[calc(3rem+4.5px)]"
              />
              <p className="eyebrow tabular text-[0.6875rem] text-brass-deep">
                Stage {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-2xl md:text-3xl">{step.name}</h3>
              <p className="mt-3 max-w-2xl text-ink/75">{step.detail}</p>
            </Reveal>
          ))}
        </ol>
      </NumberedSection>

      <NumberedSection id="reporting" number="04" label="Reporting & Review" title="Written to be read." tone="dark">
        <div className="grid gap-12 xl:grid-cols-2">
          <dl className="border-t border-ivory/15">
            {reportingPractices.map((practice) => (
              <Reveal key={practice.name} className="border-b border-ivory/15 py-6">
                <dt className="font-display text-2xl">{practice.name}</dt>
                <dd className="mt-2 text-ivory/75">{practice.detail}</dd>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.1}>
            <EditorialImage
              image="waxSealEnvelopes"
              ratio="aspect-[4/3] xl:aspect-[4/5]"
              sizes="(min-width: 1280px) 30vw, 66vw"
            />
            <p className="mt-6 text-sm text-ivory/70">
              The reporting rhythm for each engagement is agreed at the outset and set out in the letter of engagement.
            </p>
          </Reveal>
        </div>
      </NumberedSection>

      <NumberedSection id="suitability" number="05" label="Suitable Businesses" title="For businesses built to endure.">
        <Reveal>
          <p className="text-lead text-ink/80">The Private Digital Office is likely to suit businesses that:</p>
          <ul className="prose-estate mt-6">
            {suitability.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-14 grid gap-x-10 border-t border-ink/15 sm:grid-cols-2">
          {sectors.map((sector) => (
            <Reveal key={sector.slug} className="border-b border-ink/15 py-6">
              <h3 className="font-display text-xl">{sector.name}</h3>
              <p className="mt-2 text-[0.975rem] text-ink/70">{sector.note}</p>
            </Reveal>
          ))}
        </div>
      </NumberedSection>

      <NumberedSection
        id="begin"
        number="06"
        label="Begin a Conversation"
        title="An engagement begins with a conversation."
        tone="paper"
      >
        <Reveal className="space-y-6 text-lead text-ink/80">
          <p>
            Tell us about the business, its customers and what currently requires attention. If the Private Digital
            Office is not the right arrangement, we will say so — and suggest what might be.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <ButtonLink href="/contact?area=private-digital-office" fullWidthOnMobile>
            Discuss an Engagement
          </ButtonLink>
        </Reveal>
      </NumberedSection>
    </>
  );
}
