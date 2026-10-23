import { type Capability, getCapabilities } from "./capabilities";
import type { ImageKey } from "./images";
import type { EnquiryArea } from "@/lib/enquiry";

/**
 * The seven areas of practice. All service UI is generated from this list:
 * add an entry here and it appears on the homepage index, the Expertise page,
 * the footer, the sitemap and the enquiry form options (via `enquiryArea`).
 */
export type Service = {
  slug: string;
  /** Display order; rendered as "S&E / 01". */
  number: number;
  name: string;
  /** One-line description used in indexes. */
  description: string;
  /** Headline for the in-depth Expertise chapter. */
  headline: string;
  /** Short statement of how the firm thinks about this area. */
  philosophy: string[];
  /** Capability slugs offered by this practice (see src/content/capabilities). */
  capabilities: string[];
  /** Likely outcomes — phrased as aims, never guarantees. */
  outcomes: string[];
  related: string[];
  image: ImageKey;
  enquiryArea: EnquiryArea;
};

export const services: Service[] = [
  {
    slug: "client-relations",
    number: 1,
    name: "Client Relations",
    description: "The systems behind lasting customer relationships.",
    headline: "Every relationship deserves a proper record.",
    philosophy: [
      "Most businesses do not lose customers through a single failure. They lose them through small omissions: an enquiry not followed up, a returning client not recognised, a conversation that lived only in someone's inbox.",
      "We design and maintain the customer systems that prevent those omissions, so that relationships are held by the business rather than by memory.",
    ],
    capabilities: [
      "crm-implementation",
      "crm-configuration",
      "customer-databases",
      "lead-management",
      "customer-follow-up",
      "retention-workflows",
      "reactivation-campaigns",
      "appointment-systems",
      "client-communication",
      "reporting",
    ],
    outcomes: [
      "A single, reliable record of every customer and enquiry",
      "Fewer opportunities lost to slow or forgotten follow-up",
      "Clearer visibility of where relationships stand",
      "A foundation for retention that does not depend on any one person",
    ],
    related: ["systems-automation", "reputation", "advisory"],
    image: "telephone",
    enquiryArea: "client-relations",
  },
  {
    slug: "digital-estate",
    number: 2,
    name: "Digital Estate",
    description: "The infrastructure through which a business presents and operates itself online.",
    headline: "A website is premises. It should be kept as such.",
    philosophy: [
      "For many customers, the website is the first room of the business they enter. It is also, increasingly, where the business takes bookings, sells, answers questions and records what happened.",
      "We build and look after that infrastructure with the same seriousness one would apply to a physical property: well constructed, properly maintained and fit for the people who use it.",
    ],
    capabilities: [
      "corporate-websites",
      "landing-pages",
      "e-commerce",
      "website-redesign",
      "website-maintenance",
      "integrations",
      "analytics",
      "performance-optimisation",
      "booking-systems",
      "technical-upkeep",
    ],
    outcomes: [
      "A website that represents the business accurately and with care",
      "Faster, more dependable pages on every device",
      "Integrations that connect the website to the systems behind it",
      "Ongoing upkeep, so the estate does not quietly fall into disrepair",
    ],
    related: ["search-discovery", "editorial", "systems-automation"],
    image: "facadeColumns",
    enquiryArea: "digital-estate",
  },
  {
    slug: "search-discovery",
    number: 3,
    name: "Search & Discovery",
    description: "Helping the right businesses be found by the right people.",
    headline: "Being found is a matter of being properly recorded.",
    philosophy: [
      "Search engines and local listings are, in effect, public registers. They reward businesses whose information is accurate, consistent and genuinely useful to the person searching.",
      "Our approach to search is patient and technical. We attend to the foundations first — structure, accuracy and relevance — rather than chasing short-lived tactics.",
    ],
    capabilities: [
      "seo",
      "local-seo",
      "technical-seo",
      "on-page-optimisation",
      "keyword-strategy",
      "google-business-profile-setup",
      "google-business-profile-management",
      "business-listings",
      "search-console",
      "analytics",
    ],
    outcomes: [
      "Accurate, consistent business information wherever customers look",
      "A technically sound website that search engines can understand",
      "Content aligned with what prospective customers actually search for",
      "Measured, honest reporting on visibility over time",
    ],
    related: ["digital-estate", "editorial", "reputation"],
    image: "libraryBusts",
    enquiryArea: "search-discovery",
  },
  {
    slug: "editorial",
    number: 4,
    name: "Editorial",
    description: "Words designed to inform, persuade and endure.",
    headline: "Good writing is a form of good manners.",
    philosophy: [
      "Customers judge a business by how clearly it explains itself. Vague or careless language suggests vague or careless work.",
      "We write and edit with restraint: plain, precise and considered prose that says what the business does, for whom, and why it can be trusted.",
    ],
    capabilities: [
      "website-copy",
      "service-pages",
      "articles",
      "seo-content",
      "product-writing",
      "company-profiles",
      "case-studies",
      "thought-leadership",
      "email-campaigns",
      "editing",
    ],
    outcomes: [
      "A consistent, credible voice across every channel",
      "Service pages that answer the questions customers actually ask",
      "Content that supports search visibility without sounding written for machines",
      "Material the business is proud to put its name to",
    ],
    related: ["search-discovery", "digital-estate", "advisory"],
    image: "fountainPen",
    enquiryArea: "editorial",
  },
  {
    slug: "reputation",
    number: 5,
    name: "Reputation",
    description: "Trust is an asset. We treat it accordingly.",
    headline: "Reputation is built after the transaction.",
    philosophy: [
      "What customers say about a business after they have dealt with it is now public, permanent and widely read. It deserves attention, not anxiety.",
      "We help businesses listen properly, respond well and encourage satisfied customers to say so. Where a review appears to breach a platform's own policies, we can assist in raising it through that platform's dispute process — the outcome of which rests with the platform. We do not remove legitimate reviews, and no one honestly can.",
    ],
    capabilities: [
      "reputation-monitoring",
      "review-responses",
      "customer-feedback",
      "review-acquisition-workflows",
      "brand-monitoring",
      "complaint-workflows",
      "platform-review-dispute-assistance",
    ],
    outcomes: [
      "Timely, measured responses to what customers say publicly",
      "A steady, ethical process for inviting feedback from customers",
      "Earlier awareness of complaints and recurring concerns",
      "A clear route for raising potentially policy-violating reviews with the platform",
    ],
    related: ["client-relations", "systems-automation", "search-discovery"],
    image: "waxSealLetter",
    enquiryArea: "reputation",
  },
  {
    slug: "systems-automation",
    number: 6,
    name: "Systems & Automation",
    description: "Routine work should be reliable before it is automated.",
    headline: "Automation should make a business more dependable, not more fragile.",
    philosophy: [
      "Automating a muddled process only produces muddle more quickly. We begin by understanding how the work is actually done, then design the routine steps so they happen correctly every time.",
      "The result should be quieter operations: fewer things forgotten, fewer manual hand-offs, and systems that the business understands and can rely upon.",
    ],
    capabilities: [
      "crm-automation",
      "lead-routing",
      "automatic-follow-up",
      "appointment-reminders",
      "review-acquisition-workflows",
      "missed-call-workflows",
      "reactivation-campaigns",
      "email-sequences",
      "reporting",
      "integrations",
    ],
    outcomes: [
      "Routine communication that happens on time, without being chased",
      "Enquiries routed to the right person promptly",
      "Less manual administration, and fewer errors within it",
      "Documented workflows the business can understand and maintain",
    ],
    related: ["client-relations", "reputation", "digital-estate"],
    image: "colonnadeShadow",
    enquiryArea: "systems-automation",
  },
  {
    slug: "advisory",
    number: 7,
    name: "Advisory",
    description: "Clarity before implementation.",
    headline: "Understand the estate before altering it.",
    philosophy: [
      "Many digital decisions are made in the wrong order: a new tool before a clear process, a redesign before an understanding of what customers need.",
      "Our advisory work provides an independent view of where a business stands and what deserves attention first, so that subsequent investment is considered rather than reactive.",
    ],
    capabilities: [
      "digital-strategy",
      "digital-estate-audits",
      "competitor-analysis",
      "crm-assessments",
      "reputation-reviews",
      "conversion-analysis",
      "technology-recommendations",
      "digital-transformation-planning",
    ],
    outcomes: [
      "An independent, written assessment of the current position",
      "Priorities ordered by importance rather than novelty",
      "Technology choices made with a clear rationale",
      "A practical plan the business can act upon, with or without us",
    ],
    related: ["client-relations", "digital-estate", "reputation"],
    image: "privateOffice",
    enquiryArea: "advisory",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((related): related is Service => Boolean(related));
}

export function formatServiceNumber(number: number): string {
  return `S&E / ${String(number).padStart(2, "0")}`;
}

/** The capabilities offered by a practice, in display order. */
export function getServiceCapabilities(service: Service): Capability[] {
  return getCapabilities(service.capabilities);
}
