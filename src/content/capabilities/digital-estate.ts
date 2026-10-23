import type { Capability } from "./types";

const practice = "digital-estate";

export const digitalEstateCapabilities: Capability[] = [
  {
    slug: "corporate-websites",
    name: "Corporate websites",
    practice,
    summary: "Considered, well-built websites that present the business accurately and serve its customers well.",
    overview: [
      "A corporate website is often the first room of the business a customer enters. It must explain clearly what the business does, for whom, and why it can be trusted — and it must work flawlessly on every device.",
      "We design and build websites with restraint: clear structure, careful writing, fast pages and sound technical foundations, so that the site represents the business properly for years rather than months.",
    ],
    approach: [
      {
        title: "Brief and structure",
        detail: "We agree the audience, purpose and page structure before any design begins.",
      },
      { title: "Design", detail: "Layouts are designed for phones, tablets and desktops, in keeping with the brand." },
      {
        title: "Build",
        detail: "The site is built for speed, accessibility and search, on a platform the business can maintain.",
      },
      {
        title: "Launch and hand over",
        detail: "We test thoroughly, launch carefully and document how the site is managed.",
      },
    ],
    includes: [
      "Site structure and content plan",
      "Responsive design for all screen sizes",
      "Accessible, search-friendly build",
      "Contact and enquiry forms connected to the CRM",
      "Launch, redirects and handover documentation",
    ],
    related: ["website-copy", "technical-seo", "website-maintenance"],
  },
  {
    slug: "landing-pages",
    name: "Landing pages",
    practice,
    summary: "Focused single pages written and built for one purpose, such as a particular service, offer or campaign.",
    overview: [
      "A landing page is a page with one job: to help a particular visitor take a particular step. It may support an advertising campaign, introduce a new service, or serve visitors from a specific source.",
      "Good landing pages are clear, quick and honest. We write and build them to answer the visitor's questions in order, remove distractions, and make the next step obvious.",
    ],
    approach: [
      { title: "Define the purpose", detail: "We agree who the page is for and the single action it should invite." },
      { title: "Write first", detail: "The argument of the page is written before it is designed." },
      {
        title: "Build and connect",
        detail: "The page is built to load quickly and connected to forms, CRM and measurement.",
      },
      { title: "Measure", detail: "We track how visitors behave and refine the page based on evidence." },
    ],
    includes: [
      "Page copy and structure",
      "Design consistent with the main website",
      "Form or booking integration",
      "Conversion measurement",
    ],
    related: ["conversion-analysis", "website-copy", "analytics"],
  },
  {
    slug: "e-commerce",
    name: "E-commerce",
    practice,
    summary: "Online shops that are straightforward to buy from and straightforward for the business to run.",
    overview: [
      "Selling online involves far more than a product page. Stock, payments, delivery, returns, customer accounts and order communication all have to work together reliably.",
      "We set up and improve online shops with attention to both sides of the counter: a clear, trustworthy buying experience for the customer, and manageable day-to-day operations for the business.",
    ],
    approach: [
      { title: "Understand the operation", detail: "We review products, fulfilment, payment and returns processes." },
      {
        title: "Choose or review the platform",
        detail: "We recommend a platform suited to the catalogue and volume, or improve the existing one.",
      },
      { title: "Build the shop", detail: "Product pages, checkout, accounts and order emails are set up and tested." },
      {
        title: "Connect the systems",
        detail: "Orders flow into accounting, stock and customer records where appropriate.",
      },
    ],
    includes: [
      "Platform recommendation or review",
      "Product catalogue structure and pages",
      "Checkout, payment and delivery set-up",
      "Order and customer notification emails",
      "Integrations with stock, accounting or CRM",
    ],
    related: ["product-writing", "integrations", "performance-optimisation"],
  },
  {
    slug: "website-redesign",
    name: "Website redesign",
    practice,
    summary: "Renewing an existing website without losing what already works — including its standing in search.",
    overview: [
      "Redesigns are often undertaken because a website looks dated. The greater risk is in what a careless redesign destroys: search visibility built over years, links from other sites, and pages customers rely upon.",
      "We approach a redesign as a renovation of occupied premises. We record what exists, keep what is valuable, improve what is not, and move everything across with care.",
    ],
    approach: [
      {
        title: "Survey the existing site",
        detail: "We record every page, its traffic, its search performance and its inbound links.",
      },
      { title: "Plan the new structure", detail: "We decide what to keep, merge, rewrite or retire." },
      { title: "Design and build", detail: "The new site is built and reviewed before anything is changed publicly." },
      {
        title: "Migrate carefully",
        detail: "Redirects are mapped page by page, and search performance is watched closely after launch.",
      },
    ],
    includes: [
      "Content and performance inventory",
      "New structure and page plan",
      "Design and build",
      "Redirect mapping and launch checks",
      "Post-launch search monitoring",
    ],
    related: ["corporate-websites", "technical-seo", "search-console"],
  },
  {
    slug: "website-maintenance",
    name: "Maintenance",
    practice,
    summary: "Regular care for a website so that it stays secure, current and working as intended.",
    overview: [
      "Websites deteriorate quietly. Software falls out of date, forms stop delivering, links break and content becomes inaccurate — usually without anyone noticing until a customer mentions it.",
      "Maintenance is the routine upkeep that prevents this: regular checks, timely updates and small corrections, carried out on a schedule rather than in an emergency.",
    ],
    approach: [
      { title: "Establish a baseline", detail: "We record the site's current condition, software and access." },
      {
        title: "Schedule the checks",
        detail: "Updates, backups, form tests and link checks are carried out at agreed intervals.",
      },
      { title: "Make small changes", detail: "Content corrections and minor improvements are handled as they arise." },
      { title: "Report", detail: "A short summary records what was checked and what was done." },
    ],
    includes: [
      "Software and plugin updates",
      "Backups and restore checks",
      "Form and enquiry delivery tests",
      "Broken-link and error monitoring",
      "Minor content changes",
    ],
    related: ["technical-upkeep", "performance-optimisation", "analytics"],
  },
  {
    slug: "analytics",
    name: "Analytics",
    practice,
    summary:
      "Measurement set up correctly, so the business can see how its website and channels are actually performing.",
    overview: [
      "Most websites have analytics installed. Far fewer have analytics that can be trusted: tracking is often duplicated, incomplete or recording the wrong things, and the reports go unread.",
      "We configure measurement around the questions that matter — where visitors come from, what they do, and which of them become enquiries or customers — and present it in a form the business will actually use.",
    ],
    approach: [
      { title: "Audit the tracking", detail: "We check what is currently recorded and whether it is accurate." },
      {
        title: "Define the goals",
        detail: "Enquiries, bookings, calls and purchases are defined as measurable events.",
      },
      { title: "Implement properly", detail: "Tracking is configured with respect for visitor privacy and consent." },
      { title: "Report simply", detail: "A concise dashboard shows the figures that matter, with plain explanations." },
    ],
    includes: [
      "Analytics audit and correction",
      "Goal and conversion tracking",
      "Consent-aware configuration",
      "A concise performance dashboard",
    ],
    related: ["reporting", "conversion-analysis", "search-console"],
  },
  {
    slug: "performance-optimisation",
    name: "Performance optimisation",
    practice,
    summary: "Making websites load quickly and respond smoothly, particularly on phones and slower connections.",
    overview: [
      "A slow website loses visitors before they have read a word, and search engines take speed into account. Many sites are slow for avoidable reasons: oversized images, unnecessary scripts, and poorly configured hosting.",
      "We measure performance as real visitors experience it, identify the causes of delay, and correct them in order of impact.",
    ],
    approach: [
      { title: "Measure", detail: "We test loading and responsiveness on representative devices and connections." },
      { title: "Diagnose", detail: "We identify what is slowing the site and how much each issue costs." },
      { title: "Correct", detail: "Images, scripts, fonts, caching and hosting are improved in order of priority." },
      { title: "Monitor", detail: "Performance is checked periodically so that it does not drift back." },
    ],
    includes: [
      "Performance measurement on mobile and desktop",
      "Image, script and font optimisation",
      "Caching and hosting review",
      "Core Web Vitals improvement",
      "Before-and-after report",
    ],
    related: ["technical-seo", "technical-upkeep", "website-maintenance"],
  },
  {
    slug: "booking-systems",
    name: "Booking systems",
    practice,
    summary: "Reservation and booking functionality built into the website, for appointments, tables, rooms or events.",
    overview: [
      "Where customers book something — a consultation, a table, a room, a place on a course — the booking process is part of the website's infrastructure and deserves the same care as the rest.",
      "We select or build booking functionality that suits the business, integrate it into the website's design, and connect it to calendars, payments and customer records.",
    ],
    approach: [
      { title: "Clarify requirements", detail: "Capacity, deposits, cancellation rules and confirmations are agreed." },
      {
        title: "Select the approach",
        detail: "We recommend an established booking tool or a tailored build, as appropriate.",
      },
      { title: "Integrate", detail: "Booking is embedded in the site and linked to calendars, payments and the CRM." },
      { title: "Test end to end", detail: "Every path — booking, change, cancellation — is tested before launch." },
    ],
    includes: [
      "Booking requirements and rules",
      "Tool selection or tailored build",
      "Website integration and styling",
      "Payment, calendar and CRM connections",
    ],
    related: ["appointment-systems", "appointment-reminders", "integrations"],
  },
  {
    slug: "technical-upkeep",
    name: "Technical upkeep",
    practice,
    summary:
      "Looking after the infrastructure behind the website: domains, hosting, security certificates, email records and access.",
    overview: [
      "Behind every website sits a set of accounts and settings that are easily forgotten: the domain registration, the hosting, the security certificate, the records that allow email to be delivered, and the logins that control them all.",
      "When one of these lapses, the consequences can be immediate — a website offline, or email landing in spam. We keep a register of this infrastructure and make sure it is renewed, secure and in the business's own name.",
    ],
    approach: [
      {
        title: "Compile the register",
        detail: "We record every domain, host, certificate and account, and who controls it.",
      },
      {
        title: "Secure ownership",
        detail: "Accounts are placed in the business's name, with appropriate access for each party.",
      },
      {
        title: "Check the configuration",
        detail: "DNS, email authentication and certificates are reviewed and corrected.",
      },
      { title: "Watch renewals", detail: "Expiry dates are monitored so that nothing lapses unexpectedly." },
    ],
    includes: [
      "Register of domains, hosting and accounts",
      "Ownership and access review",
      "DNS and email authentication (SPF, DKIM, DMARC)",
      "Security certificate and renewal monitoring",
    ],
    related: ["website-maintenance", "performance-optimisation", "technology-recommendations"],
  },
];
