import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms",
  description: "Terms governing the use of the Samar & Earnest website.",
  path: "/terms",
});

// LEGAL REVIEW REQUIRED: placeholder text. Replace with counsel-approved terms,
// including governing law and jurisdiction.
const sections: LegalSection[] = [
  {
    heading: "About these terms",
    body: (
      <p>
        These terms govern your use of this website, operated by {siteConfig.legalName}. They do not govern client
        engagements, which are set out separately in a letter of engagement.
      </p>
    ),
  },
  {
    heading: "Information on this website",
    body: (
      <p>
        The content of this website, including articles in Insights, is provided for general information. It is not
        advice for any particular business and should not be relied upon as such.
      </p>
    ),
  },
  {
    heading: "No guaranteed outcomes",
    body: (
      <p>
        Descriptions of our services set out what each engagement aims to achieve. Results depend on many factors
        outside our control, including the decisions of third-party platforms, and are not guaranteed.
      </p>
    ),
  },
  {
    heading: "Intellectual property",
    body: (
      <p>
        Unless stated otherwise, the text and design of this website belong to {siteConfig.legalName}. Photography is
        used under licence.
      </p>
    ),
  },
  {
    heading: "Third-party platforms",
    body: (
      <p>
        References to third-party platforms, such as search engines and review sites, do not imply any affiliation with
        or endorsement by those platforms.
      </p>
    ),
  },
  {
    heading: "Governing law",
    body: <p>The governing law and jurisdiction will be confirmed here following legal review.</p>,
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms" sections={sections} />;
}
