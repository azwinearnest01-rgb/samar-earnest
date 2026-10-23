import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { EditorialImage } from "@/components/media/EditorialImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { isPlaceholderEmail, locations, siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Begin a conversation with Samar & Earnest. Tell us about the business, what is working, and what requires attention.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section
        aria-labelledby="page-title"
        className="pt-[calc(var(--header-height)+3rem)] pb-24 md:pt-[calc(var(--header-height)+5rem)] md:pb-32"
      >
        <Container>
          {/* Source order (intro → form → details) suits mobile; the grid re-places details beside the form on desktop. */}
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0 xl:gap-x-20">
            <div className="lg:col-span-5 lg:row-start-1">
              <Eyebrow className="animate-page-in text-brass-deep">Enquiries</Eyebrow>
              <h1 id="page-title" className="mt-8 text-display-2 md:mt-10">
                <span className="block overflow-hidden pb-[0.1em]">
                  <span className="block animate-rise [animation-delay:100ms]">Begin a conversation.</span>
                </span>
              </h1>
              <p className="mt-8 max-w-md animate-page-in text-lead text-ink/75 [animation-delay:300ms]">
                Tell us about the business, what is working, and what requires attention.
              </p>
              <div className="mt-14 hidden lg:block">
                <EditorialImage image="waxSealLetter" ratio="aspect-[4/3]" sizes="(min-width: 1280px) 30vw, 38vw" />
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:pt-4">
              <div className="border-t border-ink/25 pt-10 lg:border-t-0 lg:pt-0">
                <EnquiryForm />
              </div>
            </div>

            <dl className="grid gap-8 border-t border-ink/15 pt-8 sm:grid-cols-2 lg:col-span-5 lg:row-start-2 lg:mt-14 lg:grid-cols-1 lg:self-start xl:grid-cols-2">
              <div>
                <dt className="eyebrow text-[0.6875rem] text-stone-deep">Correspondence</dt>
                <dd className="mt-2">
                  <a href={`mailto:${siteConfig.email.general}`} className="link-prose break-all">
                    {siteConfig.email.general}
                  </a>
                  {isPlaceholderEmail ? (
                    <span className="mt-1 block text-xs text-stone-deep">
                      Placeholder — to be replaced before launch.
                    </span>
                  ) : null}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.6875rem] text-stone-deep">Presence</dt>
                <dd className="mt-2">
                  {locations.map((location) => location.name).join(" · ")}
                  <span className="mt-1 block text-sm text-ink/70">{siteConfig.origin}</span>
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}
