/**
 * Site-wide configuration: identity, navigation and contact details.
 *
 * REPLACE BEFORE LAUNCH
 * - `email.general` is a placeholder. Set the real address (or the
 *   NEXT_PUBLIC_CONTACT_EMAIL environment variable) once the mailbox exists.
 * - `url` reads NEXT_PUBLIC_SITE_URL; set it to the production domain so
 *   canonical URLs, the sitemap and Open Graph tags are correct.
 */

const PLACEHOLDER_EMAIL = "enquiries@example.com";

export const siteConfig = {
  name: "Samar & Earnest",
  legalName: "Samar & Earnest",
  wordmark: "SAMAR & EARNEST",
  monogram: "S&E",
  tagline: "Business, carefully maintained.",
  descriptor: "Independent Digital Advisory",
  philosophy: "Stewardship over campaigns.",
  description:
    "Samar & Earnest is an independent digital advisory firm specialising in client relations, digital infrastructure, search, reputation, editorial and business systems.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_GB",
  origin: "Founded in Pakistan. Working internationally.",
  email: {
    general: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? PLACEHOLDER_EMAIL,
  },
  founders: ["timotheous-samar", "azwin-earnest"],
} as const;

/** True while the contact address is still the placeholder. */
export const isPlaceholderEmail = siteConfig.email.general === PLACEHOLDER_EMAIL;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  /** Opens a dropdown panel in the header instead of navigating directly. */
  menu?: "services";
};

export const primaryNav: NavItem[] = [
  { label: "The Firm", href: "/the-firm", description: "Who we are and what we believe" },
  { label: "Expertise", href: "/expertise", description: "Seven areas of practice" },
  { label: "Services", href: "/services", description: "Everything we offer", menu: "services" },
  {
    label: "Private Digital Office",
    href: "/private-digital-office",
    description: "Our retained engagement",
  },
  { label: "Insights", href: "/insights", description: "The journal" },
  { label: "Contact", href: "/contact", description: "Begin a conversation" },
];

export const enquiryCta: NavItem = { label: "Make an Enquiry", href: "/contact" };

export const legalNav: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

/** Routes whose opening section is dark (Forest); the header inverts over them. */
export const darkHeroRoutes = ["/", "/private-digital-office"] as const;

export type Location = {
  name: string;
  detail: string;
};

/** Where the firm is based and whom it serves. Extend as offices are added. */
export const locations: Location[] = [
  { name: "Pakistan", detail: "Where the firm was founded" },
  { name: "International", detail: "Serving businesses across borders" },
];
