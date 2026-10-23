import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { FounderProfile } from "@/components/team/FounderProfile";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Rule } from "@/components/ui/Rule";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locations, siteConfig } from "@/content/site";
import { founders } from "@/content/team";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "The Firm",
  description:
    "Samar & Earnest is an independent digital advisory firm founded by Timotheous Samar and Azwin Earnest. Founded in Pakistan and designed to work across borders.",
  path: "/the-firm",
});

const principles = [
  { title: "Respond properly", text: "Every enquiry deserves a timely, considered reply." },
  { title: "Communicate clearly", text: "Plain language, honestly used, is a mark of respect." },
  { title: "Maintain one's reputation", text: "Trust is accumulated slowly and should be guarded accordingly." },
  { title: "Keep good records", text: "A business should know its customers, its systems and its own decisions." },
  { title: "Value long relationships", text: "Treat lasting relationships as the assets they are." },
];

export default function FirmPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "The Firm", path: "/the-firm" },
        ])}
      />
      <PageHero
        eyebrow="The Firm"
        title="We believe businesses should be managed for continuity, not merely attention."
        image="colonnadeWarm"
      />

      <section aria-labelledby="founding-title" className="py-24 md:py-32 xl:py-40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-4">
              <Eyebrow className="text-brass-deep">Our Founding</Eyebrow>
              <h2 id="founding-title" className="mt-8 text-display-4">
                An independent firm, concerned with an increasingly important part of modern business.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-7 text-lead text-ink/80 lg:col-span-7 lg:col-start-6">
              <p>
                Samar &amp; Earnest was founded by Timotheous Samar and Azwin Earnest as an independent firm concerned
                with an increasingly important part of modern business: the systems through which companies maintain
                relationships, reputation and presence.
              </p>
              <p>The firm was founded in Pakistan and is designed from the outset to work across borders.</p>
              <p>
                We combine technology with a deliberately traditional understanding of business: respond properly,
                communicate clearly, maintain one&rsquo;s reputation, keep good records and treat long-term
                relationships as assets.
              </p>
            </Reveal>
          </div>

          <Rule variant="ornament" className="mx-auto my-20 max-w-sm text-ink md:my-28" />

          <Reveal>
            <p className="mx-auto max-w-4xl text-center font-serif text-[clamp(1.75rem,1.2rem+2.4vw,3.5rem)] leading-[1.18] italic">
              The technology may be new. The principles are not.
            </p>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="principles-title"
        className="texture-paper border-t border-ink/10 bg-paper py-24 md:py-32"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Our Principles"
                id="principles-title"
                title="How we conduct ourselves."
                size="md"
              />
              <Reveal delay={0.1} className="mt-10 hidden lg:block">
                <EditorialImage image="capitalIonic" ratio="aspect-[4/3]" sizes="30vw" />
              </Reveal>
            </div>
            <ol className="border-t border-ink/15 lg:col-span-7 lg:col-start-6">
              {principles.map((principle, index) => (
                <Reveal
                  as="li"
                  key={principle.title}
                  delay={index * 0.05}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/15 py-7 md:grid-cols-[4rem_1fr_1fr] md:gap-8"
                >
                  <span className="font-serif text-xl italic text-brass-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl">{principle.title}</h3>
                  <p className="col-start-2 text-ink/70 md:col-start-3">{principle.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section aria-labelledby="founders-title" className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="The Founders" id="founders-title" title="Timotheous Samar & Azwin Earnest" />
          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-20">
            {founders.map((member, index) => (
              <Reveal key={member.slug} delay={index * 0.1}>
                <FounderProfile member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="origin-title" className="theme-dark py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <Eyebrow className="text-brass">Presence</Eyebrow>
              <h2 id="origin-title" className="mt-8 text-display-3">
                {siteConfig.origin}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <dl className="border-t border-ivory/15">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="flex items-baseline justify-between gap-6 border-b border-ivory/15 py-5"
                  >
                    <dt className="font-display text-2xl">{location.name}</dt>
                    <dd className="text-right text-sm text-ivory/70">{location.detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <EnquiryBand />
    </>
  );
}
