import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "How Samar & Earnest handles personal information submitted through this website.",
  path: "/privacy",
});

// LEGAL REVIEW REQUIRED: placeholder text. Replace with counsel-approved wording,
// covering the applicable law (e.g. Pakistan's data protection requirements and,
// for international visitors, GDPR/UK GDPR where relevant).
const sections: LegalSection[] = [
  {
    heading: "Who we are",
    body: (
      <p>
        This website is operated by {siteConfig.legalName}, an independent digital advisory firm founded in Pakistan.
        Registered business details will be added here once confirmed.
      </p>
    ),
  },
  {
    heading: "Information we collect",
    body: (
      <>
        <p>When you submit an enquiry, we receive the details you provide:</p>
        <ul>
          <li>your name, business name and email address</li>
          <li>your business website, if provided</li>
          <li>the area requiring attention and your message</li>
        </ul>
        <p>
          Our hosting provider may also process standard technical information, such as IP addresses, for security and
          operational purposes.
        </p>
      </>
    ),
  },
  {
    heading: "How we use it",
    body: (
      <p>
        We use enquiry details only to respond to your enquiry and, if you engage us, to manage that relationship. We do
        not sell personal information.
      </p>
    ),
  },
  {
    heading: "Third-party services",
    body: (
      <p>
        Enquiries may be transmitted through an email or customer-relationship service that processes the data on our
        behalf. The services in use will be listed here once confirmed.
      </p>
    ),
  },
  {
    heading: "Retention",
    body: <p>Retention periods will be specified here following legal review.</p>,
  },
  {
    heading: "Your rights",
    body: (
      <p>
        You may ask to access, correct or delete the personal information we hold about you by writing to{" "}
        <a href={`mailto:${siteConfig.email.general}`} className="link-prose">
          {siteConfig.email.general}
        </a>
        .
      </p>
    ),
  },
  {
    heading: "Changes to this notice",
    body: (
      <p>We may update this notice from time to time. The current version will always be published on this page.</p>
    ),
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy" sections={sections} />;
}
