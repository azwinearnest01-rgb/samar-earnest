import type { Capability } from "./types";

const practice = "search-discovery";

const NO_AFFILIATION =
  "Samar & Earnest is independent and is not affiliated with Google. No one can guarantee particular rankings; we work on the factors a business can genuinely influence.";

export const searchDiscoveryCapabilities: Capability[] = [
  {
    slug: "seo",
    name: "SEO",
    practice,
    summary:
      "Search engine optimisation: helping the right people find the business when they search for what it offers.",
    overview: [
      "Search engine optimisation is the patient work of making a website easy for search engines to understand and genuinely useful to the people searching. It rests on three foundations: a technically sound site, relevant and well-written content, and a trustworthy reputation beyond the site itself.",
      "We approach SEO as ongoing upkeep rather than a set of tricks. The aim is steady, durable visibility for the searches that matter to the business — not a short-lived spike.",
    ],
    approach: [
      {
        title: "Assess the position",
        detail: "We review technical health, content, competitors and current visibility.",
      },
      { title: "Prioritise", detail: "We set out what is most worth doing first, and why." },
      {
        title: "Improve steadily",
        detail: "Technical fixes, content improvements and local signals are worked through in order.",
      },
      {
        title: "Report honestly",
        detail: "Progress is measured against agreed searches and explained in plain terms.",
      },
    ],
    includes: [
      "Search visibility assessment",
      "Technical, on-page and content recommendations",
      "Prioritised work plan",
      "Regular, plain-language progress reports",
    ],
    note: NO_AFFILIATION,
    related: ["technical-seo", "on-page-optimisation", "keyword-strategy"],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    practice,
    summary: "Improving how a business appears in local searches and on maps, for customers nearby.",
    overview: [
      "For businesses that serve a particular town, city or area, local search often matters more than anything else. When someone searches for a service 'near me', the results are shaped by the business's profile, its listings, its reviews and its website.",
      "Local SEO brings these together so that the business appears accurately and consistently wherever local customers look.",
    ],
    approach: [
      { title: "Review local presence", detail: "We examine the business profile, listings, reviews and local pages." },
      {
        title: "Correct the essentials",
        detail: "Name, address, telephone and hours are made accurate and consistent everywhere.",
      },
      {
        title: "Strengthen local relevance",
        detail: "Location and service pages are improved, and local listings are added where appropriate.",
      },
      { title: "Maintain", detail: "Profiles and listings are kept current as the business changes." },
    ],
    includes: [
      "Local search audit",
      "Google Business Profile optimisation",
      "Business listing consistency",
      "Location and service-area pages",
      "Review strategy aligned with local search",
    ],
    note: NO_AFFILIATION,
    related: ["google-business-profile-management", "business-listings", "review-acquisition-workflows"],
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    practice,
    summary: "Ensuring search engines can find, read and understand every important page of the website.",
    overview: [
      "Before any content can be found, a search engine must be able to reach it, read it and understand what it is about. Technical SEO deals with the structure beneath the surface: site speed, indexing, page structure, redirects, structured data and mobile usability.",
      "Technical problems are often invisible to visitors but costly in search. We find them methodically and fix them in order of importance.",
    ],
    approach: [
      { title: "Crawl the site", detail: "We examine the site as a search engine sees it, page by page." },
      {
        title: "Check the signals",
        detail: "Indexing, sitemaps, canonical tags, redirects and structured data are reviewed.",
      },
      { title: "Fix in order", detail: "Issues are corrected according to their likely impact." },
      { title: "Verify", detail: "Changes are confirmed in Search Console and monitored over the following weeks." },
    ],
    includes: [
      "Technical crawl and audit",
      "Indexing, sitemap and robots review",
      "Redirect and broken-link correction",
      "Structured data implementation",
      "Speed and mobile usability improvements",
    ],
    related: ["search-console", "performance-optimisation", "website-redesign"],
  },
  {
    slug: "on-page-optimisation",
    name: "On-page optimisation",
    practice,
    summary: "Improving individual pages so that they clearly answer what searchers are looking for.",
    overview: [
      "Each page on a website has an opportunity to be found for particular searches. On-page optimisation makes sure that each important page is clearly focused, well titled, properly structured and genuinely helpful on its subject.",
      "This is careful editorial work as much as technical work. The best-optimised pages read naturally to people; they are simply clearer about what they offer.",
    ],
    approach: [
      { title: "Select the pages", detail: "We identify the pages that matter most to the business." },
      { title: "Match intent", detail: "Each page is aligned with what people searching for it actually want." },
      { title: "Refine", detail: "Titles, headings, descriptions, copy, images and internal links are improved." },
      { title: "Monitor", detail: "We watch how each page performs and adjust where needed." },
    ],
    includes: [
      "Page-by-page review of priority pages",
      "Titles, meta descriptions and headings",
      "Copy improvements and internal linking",
      "Image text and structured data",
    ],
    related: ["keyword-strategy", "service-pages", "seo-content"],
  },
  {
    slug: "keyword-strategy",
    name: "Keyword strategy",
    practice,
    summary: "Understanding the words customers actually use when they search, and deciding which to pursue.",
    overview: [
      "Businesses often describe themselves in their own vocabulary, while customers search in theirs. Keyword strategy closes that gap: it identifies the searches that genuinely indicate a need for the business's services.",
      "We assess searches by relevance and realistic opportunity rather than volume alone, and map them to the pages that should answer them.",
    ],
    approach: [
      { title: "Research", detail: "We gather the searches related to the business, its services and its area." },
      { title: "Assess", detail: "Each is judged by relevance, intent and how competitive it is." },
      { title: "Map", detail: "Chosen searches are assigned to existing or new pages." },
      { title: "Revisit", detail: "The strategy is reviewed periodically as the market changes." },
    ],
    includes: [
      "Keyword research for services and locations",
      "Intent and competition assessment",
      "Keyword-to-page map",
      "Content gap recommendations",
    ],
    related: ["on-page-optimisation", "seo-content", "competitor-analysis"],
  },
  {
    slug: "google-business-profile-setup",
    name: "Google Business Profile setup",
    practice,
    summary: "Creating or claiming the business's Google profile and completing it accurately from the outset.",
    overview: [
      "A Google Business Profile is the panel that appears when someone searches for a business by name or looks for a service on Google Maps. For many local customers it is the first, and sometimes only, thing they read.",
      "We set up or claim the profile correctly, verify it, and complete every relevant section — so that the business is represented accurately from the beginning.",
    ],
    approach: [
      {
        title: "Claim or create",
        detail: "We locate any existing profile, or create a new one, in the business's own account.",
      },
      { title: "Verify", detail: "We guide the business through Google's verification process." },
      {
        title: "Complete",
        detail: "Categories, services, hours, description, photographs and attributes are filled in properly.",
      },
      { title: "Connect", detail: "Website, booking and messaging links are added where appropriate." },
    ],
    includes: [
      "Profile claim or creation",
      "Verification support",
      "Categories, services and description",
      "Photographs and business details",
      "Ownership retained by the business",
    ],
    note: NO_AFFILIATION,
    related: ["google-business-profile-management", "local-seo", "business-listings"],
  },
  {
    slug: "google-business-profile-management",
    name: "Google Business Profile management",
    practice,
    summary: "Keeping the business's Google profile accurate, active and properly looked after over time.",
    overview: [
      "A profile that was set up well can still fall into disrepair: hours change, new services are added, questions go unanswered and photographs become dated. Customers notice, and so does Google.",
      "Ongoing management keeps the profile in good order — updated when the business changes, answered when customers ask, and refreshed so that it reflects the business as it is today.",
    ],
    approach: [
      { title: "Regular review", detail: "Details are checked against the business at an agreed interval." },
      { title: "Respond", detail: "Questions and reviews are answered promptly and courteously." },
      { title: "Refresh", detail: "Posts, photographs and offers are updated to keep the profile current." },
      { title: "Watch for changes", detail: "We monitor for unwanted edits or suggested changes and correct them." },
    ],
    includes: [
      "Monthly profile review",
      "Hours, services and holiday updates",
      "Questions and review responses",
      "Posts and photograph updates",
      "Monitoring of unauthorised edits",
    ],
    note: NO_AFFILIATION,
    related: ["google-business-profile-setup", "review-responses", "local-seo"],
  },
  {
    slug: "business-listings",
    name: "Business listings",
    practice,
    summary: "Making sure the business's details are correct and consistent across directories, maps and platforms.",
    overview: [
      "A business's name, address and telephone number appear in many places it may never have visited: online directories, map services, industry listings and review platforms. Inconsistencies confuse customers and weaken local search visibility.",
      "We find and correct these listings, add the business to relevant directories, and remove or merge duplicates where possible.",
    ],
    approach: [
      { title: "Find the listings", detail: "We search for every existing listing of the business." },
      { title: "Correct", detail: "Details are made accurate and consistent with the business's records." },
      { title: "Add selectively", detail: "The business is listed in directories that are genuinely relevant to it." },
      { title: "Maintain", detail: "Listings are updated whenever the business's details change." },
    ],
    includes: [
      "Listing discovery and audit",
      "Corrections and duplicate handling",
      "Submission to relevant directories",
      "A maintained register of listings",
    ],
    related: ["local-seo", "google-business-profile-management", "brand-monitoring"],
  },
  {
    slug: "search-console",
    name: "Search Console",
    practice,
    summary:
      "Setting up and using Google Search Console to see how the website performs in search and to catch problems early.",
    overview: [
      "Google Search Console is a free service that shows how Google sees a website: which searches it appears for, which pages are indexed, and which technical problems have been detected.",
      "We set it up correctly, review it regularly and act on what it reveals — it is one of the most useful and least used tools available to a business.",
    ],
    approach: [
      { title: "Verify the site", detail: "Search Console is set up and verified under the business's ownership." },
      { title: "Submit sitemaps", detail: "Sitemaps are submitted so that pages are discovered promptly." },
      {
        title: "Review regularly",
        detail: "Coverage, performance and experience reports are checked at agreed intervals.",
      },
      { title: "Act on findings", detail: "Errors are fixed and opportunities are passed into the content plan." },
    ],
    includes: [
      "Set-up and verification",
      "Sitemap submission",
      "Regular coverage and error review",
      "Search performance insights in plain language",
    ],
    note: NO_AFFILIATION,
    related: ["technical-seo", "analytics", "seo"],
  },
];
