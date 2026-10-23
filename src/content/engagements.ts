/**
 * Content for the firm's two signature engagements. Rendered on the homepage
 * and on their dedicated pages.
 *
 * REVIEW BEFORE LAUNCH: cadences and deliverables below describe the intended
 * shape of each engagement. Confirm them against the firm's actual terms.
 */

export type ScheduleItem = {
  name: string;
  detail: string;
};

export const auditScope: ScheduleItem[] = [
  { name: "Website", detail: "Structure, clarity, accessibility, speed and technical condition." },
  { name: "Search visibility", detail: "How, and how accurately, the business appears when people search." },
  { name: "Online reputation", detail: "What customers say publicly, and how the business responds." },
  { name: "Customer journey", detail: "Each step from first impression to enquiry, purchase and return." },
  { name: "CRM", detail: "How customer records, enquiries and follow-up are held and handled." },
  { name: "Business profiles", detail: "Google Business Profile and other listings: accuracy and completeness." },
  { name: "Analytics", detail: "Whether the business can see what is happening, and trust what it sees." },
  { name: "Conversion process", detail: "Where interested visitors are lost, and why." },
  { name: "Digital infrastructure", detail: "Domains, hosting, integrations, access and ownership of accounts." },
];

export const auditProcess: ScheduleItem[] = [
  {
    name: "Briefing",
    detail: "A conversation to understand the business, its customers and what prompted the review.",
  },
  {
    name: "Review",
    detail:
      "A structured examination of each part of the estate, conducted by people rather than by an automated scan.",
  },
  {
    name: "Written findings",
    detail: "A considered report setting out the current position and recommendations in order of priority.",
  },
  {
    name: "Discussion",
    detail: "A walk-through of the findings, so that the business understands them and can decide what to do next.",
  },
];

export const officeOversight: string[] = [
  "CRM",
  "Website",
  "SEO",
  "Google Business Profile",
  "Reviews",
  "Listings",
  "Content",
  "Analytics",
  "Automations",
  "Digital strategy",
];

export type Comparison = {
  aspect: string;
  conventional: string;
  office: string;
};

export const retainerComparison: Comparison[] = [
  {
    aspect: "What is engaged",
    conventional: "A quantity of hours or deliverables",
    office: "Responsibility for the condition of the digital estate",
  },
  {
    aspect: "Orientation",
    conventional: "Campaigns and short-term activity",
    office: "Continuity, upkeep and long-term value",
  },
  {
    aspect: "Suppliers",
    conventional: "Several, each responsible for one part",
    office: "One firm, overseeing the whole",
  },
  {
    aspect: "Reporting",
    conventional: "Activity reports and dashboards",
    office: "Written stewardship reports with clear priorities",
  },
  {
    aspect: "Relationship",
    conventional: "Transactional, renewed by the month",
    office: "Advisory, built on knowledge of the business",
  },
];

export const engagementSteps: ScheduleItem[] = [
  {
    name: "An initial conversation",
    detail:
      "We learn about the business, its customers and its ambitions, and establish whether the engagement is a good fit for both parties.",
  },
  {
    name: "A Digital Estate Audit",
    detail:
      "A structured review establishes a clear baseline: what the estate comprises, its condition, and what requires attention first.",
  },
  {
    name: "A letter of engagement",
    detail:
      "Scope, responsibilities, access and reporting are agreed in writing, so that both parties know precisely what has been entrusted.",
  },
  {
    name: "Continuous stewardship",
    detail: "We oversee the estate on an ongoing basis — maintaining, improving and coordinating its parts as one.",
  },
  {
    name: "Periodic review",
    detail: "At agreed intervals we review the estate together and set the priorities for the period ahead.",
  },
];

export const reportingPractices: ScheduleItem[] = [
  {
    name: "Written reports",
    detail:
      "Plain-language summaries of what was done, what was observed and what we recommend — written to be read, not skimmed.",
  },
  {
    name: "Review meetings",
    detail: "Regular conversations, at an agreed rhythm, to discuss the estate's condition and decide on priorities.",
  },
  {
    name: "A maintained record",
    detail:
      "An up-to-date register of the estate: platforms, accounts, access, integrations and the decisions taken about them.",
  },
  {
    name: "Candour",
    detail: "Where something is not working, or is not worth doing, we say so.",
  },
];
