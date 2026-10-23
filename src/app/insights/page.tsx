import { CategoryNav } from "@/components/insights/CategoryNav";
import { InsightCard } from "@/components/insights/InsightCard";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Seal } from "@/components/brand/Seal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getArticles } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Practical guides and essays from Samar & Earnest on Google Business Profiles, local SEO, reviews, CRM systems and looking after a business's digital estate.",
  path: "/insights",
});

function EmptyJournal() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center py-16 text-center">
      <Seal className="h-28 w-auto text-brass-deep/60" />
      <h2 className="mt-8 text-display-4">The journal is in preparation.</h2>
      <p className="mt-4 text-ink/70">
        Our first essays will be published here shortly. In the meantime, we would be glad to hear from you directly.
      </p>
      <div className="mt-8">
        <ButtonLink href="/contact" variant="outline">
          Make an Enquiry
        </ButtonLink>
      </div>
    </div>
  );
}

export default function InsightsPage() {
  const [lead, ...rest] = getArticles();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <PageHero
        eyebrow="Insights"
        title="Notes on the stewardship of modern business."
        intro={
          <p>
            Practical guides and essays on the relationships, records and infrastructure upon which businesses
            increasingly depend.
          </p>
        }
      >
        <CategoryNav />
      </PageHero>

      <section aria-label="Essays" className="py-16 md:py-24">
        <Container>
          {lead ? (
            <>
              <Reveal>
                <InsightCard article={lead} variant="feature" headingLevel="h2" priority />
              </Reveal>
              {rest.length > 0 ? (
                <div className="mt-20 border-t border-ink/25 md:mt-28">
                  <h2 className="eyebrow pt-6 text-[0.6875rem] text-stone-deep">Further reading</h2>
                  {rest.map((article) => (
                    <Reveal key={article.slug}>
                      <InsightCard article={article} variant="row" headingLevel="h3" />
                    </Reveal>
                  ))}
                </div>
              ) : null}
            </>
          ) : (
            <EmptyJournal />
          )}
        </Container>
      </section>

      <EnquiryBand />
    </>
  );
}
