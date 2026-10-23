import type { StaticImageData } from "next/image";

/**
 * People at the firm. Profile pages and founder sections are generated from
 * this list.
 *
 * FOUNDER BIOGRAPHIES: deliberately left empty. Do not publish invented
 * biographies. When approved text is available, populate `biography`,
 * `focus` and (optionally) `portrait`; the UI switches from the placeholder
 * state automatically.
 */
export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  /** Approved biography paragraphs. Empty until supplied by the founder. */
  biography: string[];
  /** Areas of personal focus within the firm, once agreed. */
  focus: string[];
  /** Commissioned portrait; import from src/assets when available. */
  portrait?: { src: StaticImageData; alt: string };
  isFounder: boolean;
};

export const team: TeamMember[] = [
  {
    slug: "timotheous-samar",
    name: "Timotheous Samar",
    role: "Co-Founder",
    initials: "TS",
    biography: [],
    focus: [],
    isFounder: true,
  },
  {
    slug: "azwin-earnest",
    name: "Azwin Earnest",
    role: "Co-Founder",
    initials: "AE",
    biography: [],
    focus: [],
    isFounder: true,
  },
];

export const founders = team.filter((member) => member.isFounder);

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((member) => member.slug === slug);
}
