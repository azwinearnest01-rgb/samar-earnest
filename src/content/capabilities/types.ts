/**
 * A single capability within a practice (e.g. "CRM implementation").
 * Each capability has its own page at /services/[slug].
 */
export type CapabilityStep = {
  title: string;
  detail: string;
};

export type Capability = {
  slug: string;
  name: string;
  /** The practice (service slug) this capability belongs to. */
  practice: string;
  /** One sentence: what it is. Used in menus, indexes and meta descriptions. */
  summary: string;
  /** What it is and why it matters — two or three short paragraphs. */
  overview: string[];
  /** How the work is carried out, in order. */
  approach: CapabilityStep[];
  /** What the engagement typically covers. */
  includes: string[];
  /** Optional plain-spoken caveat (e.g. what we cannot promise). */
  note?: string;
  /** Other capability slugs worth reading alongside this one. */
  related?: string[];
  /** Send visitors to a dedicated page instead of /services/[slug]. */
  href?: string;
};
