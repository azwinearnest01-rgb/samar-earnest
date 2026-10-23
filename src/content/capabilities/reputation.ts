import type { Capability } from "./types";

const practice = "reputation";

export const reputationCapabilities: Capability[] = [
  {
    slug: "reputation-monitoring",
    name: "Reputation monitoring",
    practice,
    summary: "Keeping a steady watch on what customers say about the business across review sites and platforms.",
    overview: [
      "Customers now publish their opinions of a business on many platforms at once. Most businesses discover new reviews only by chance, often days or weeks after they were written.",
      "Monitoring brings these together so that nothing important goes unnoticed, and so that the business can respond promptly and spot recurring themes early.",
    ],
    approach: [
      { title: "Identify the platforms", detail: "We list every site where the business is, or could be, reviewed." },
      { title: "Set up alerts", detail: "New reviews and mentions are gathered and notified in one place." },
      { title: "Triage", detail: "Each item is assessed for urgency and whether a response is needed." },
      { title: "Summarise themes", detail: "Periodic summaries show what customers praise and what concerns them." },
    ],
    includes: [
      "Platform inventory",
      "Review alerts in one place",
      "Triage and escalation rules",
      "Monthly sentiment and theme summary",
    ],
    related: ["review-responses", "brand-monitoring", "reputation-reviews"],
  },
  {
    slug: "review-responses",
    name: "Review responses",
    practice,
    summary: "Timely, measured and courteous replies to customer reviews, favourable and critical alike.",
    overview: [
      "A response to a review is read by far more people than the person who wrote it. Prospective customers read replies to see how a business behaves — particularly when something has gone wrong.",
      "We draft responses that are specific, composed and in the business's voice. Critical reviews are answered without defensiveness; favourable ones are acknowledged genuinely rather than with a stock phrase.",
    ],
    approach: [
      {
        title: "Agree the principles",
        detail: "We set guidelines for tone, what may be said publicly and what should move offline.",
      },
      { title: "Draft responses", detail: "Replies are written for each review, tailored to what was said." },
      { title: "Escalate where needed", detail: "Serious complaints are passed to the business for direct follow-up." },
      { title: "Publish promptly", detail: "Responses are posted within an agreed time frame." },
    ],
    includes: [
      "Response guidelines",
      "Drafted replies for each review",
      "Escalation of serious complaints",
      "Publishing on the business's behalf, if desired",
    ],
    note: "We never write reviews, and we never respond in a way that discloses a customer's private information.",
    related: ["reputation-monitoring", "complaint-workflows", "google-business-profile-management"],
  },
  {
    slug: "customer-feedback",
    name: "Customer feedback",
    practice,
    summary: "Gathering honest feedback from customers privately, so the business can learn and improve.",
    overview: [
      "Public reviews are only part of the picture. Many customers will share useful, candid feedback privately if they are asked in the right way at the right time.",
      "We design simple feedback processes — short surveys, follow-up questions, post-service check-ins — and help the business make sense of what it hears.",
    ],
    approach: [
      {
        title: "Decide what to ask",
        detail: "We agree a small number of questions that will genuinely inform decisions.",
      },
      { title: "Choose the moment", detail: "Feedback is requested at the point the experience is fresh." },
      { title: "Collect and record", detail: "Responses are gathered and linked to the customer record." },
      { title: "Act on it", detail: "Themes are summarised and recommendations made." },
    ],
    includes: [
      "Feedback survey design",
      "Automated feedback requests",
      "Response recording in the CRM",
      "Periodic feedback summaries",
    ],
    related: ["review-acquisition-workflows", "complaint-workflows", "retention-workflows"],
  },
  {
    slug: "review-acquisition-workflows",
    name: "Review acquisition workflows",
    practice,
    summary: "A consistent, ethical way of inviting every customer to share their experience publicly.",
    overview: [
      "Most satisfied customers do not leave a review unless asked. As a result, many businesses' public reputation is shaped disproportionately by the few who were unhappy enough to write without prompting.",
      "We set up a simple, consistent invitation — sent to every customer after their purchase or appointment — which produces a fairer and more complete picture of the business.",
    ],
    approach: [
      { title: "Choose the platforms", detail: "We decide where reviews will be most useful to future customers." },
      { title: "Time the request", detail: "Invitations are sent when the experience is complete and fresh." },
      { title: "Write the invitation", detail: "Messages are polite, brief and easy to act upon." },
      { title: "Automate fairly", detail: "Requests go to every customer, not a selected few." },
    ],
    includes: [
      "Platform selection",
      "Invitation copy for email and messaging",
      "Automated sending after purchase or appointment",
      "Tracking of requests and new reviews",
    ],
    note: "We do not offer incentives for reviews, filter out customers likely to be critical, or post reviews on anyone's behalf — practices that breach platform policies and mislead the public.",
    related: ["review-responses", "customer-feedback", "local-seo"],
  },
  {
    slug: "brand-monitoring",
    name: "Brand monitoring",
    practice,
    summary:
      "Watching for mentions of the business's name beyond review sites — in search results, social media and the press.",
    overview: [
      "A business's name appears in places it does not control: forums, social media, news articles and search results. Some mentions are opportunities; others are inaccuracies or impersonation that should be addressed.",
      "Brand monitoring keeps the business aware of how and where it is being discussed, so it can respond, correct or simply take note.",
    ],
    approach: [
      { title: "Define the terms", detail: "We agree the names, products and people to watch for." },
      { title: "Set up monitoring", detail: "Mentions across the web and social platforms are gathered." },
      { title: "Assess", detail: "Each mention is assessed for accuracy, sentiment and whether action is needed." },
      { title: "Report", detail: "Notable mentions are reported with recommended responses." },
    ],
    includes: [
      "Monitoring of brand and product names",
      "Search result reviews for the business name",
      "Alerts for notable mentions",
      "Periodic brand mention summary",
    ],
    related: ["reputation-monitoring", "business-listings", "reputation-reviews"],
  },
  {
    slug: "complaint-workflows",
    name: "Complaint workflows",
    practice,
    summary: "A clear process for receiving, resolving and learning from customer complaints.",
    overview: [
      "Complaints handled well often produce more loyal customers than transactions that went smoothly. Complaints handled badly — or not at all — tend to become public reviews.",
      "We design a straightforward complaint process: how complaints are received, who owns them, how quickly they are acknowledged, and how resolution is recorded.",
    ],
    approach: [
      { title: "Map current handling", detail: "We review how complaints currently arrive and what happens to them." },
      { title: "Design the process", detail: "Ownership, acknowledgement times and escalation steps are agreed." },
      { title: "Prepare the materials", detail: "Acknowledgement and resolution templates are written." },
      { title: "Record and learn", detail: "Complaints are logged so that recurring issues are visible." },
    ],
    includes: [
      "Complaint process design",
      "Ownership and escalation rules",
      "Acknowledgement and resolution templates",
      "Complaint log and periodic review",
    ],
    related: ["customer-feedback", "review-responses", "client-communication"],
  },
  {
    slug: "platform-review-dispute-assistance",
    name: "Platform Review Dispute Assistance",
    practice,
    summary:
      "Help raising reviews that appear to breach a platform's own policies through that platform's official process.",
    overview: [
      "Occasionally a business receives a review that appears to break the platform's own rules — for example, content that is abusive, clearly about a different business, or posted by someone with a conflict of interest.",
      "Most platforms provide a process for reporting such reviews. We help the business assess whether a review appears to fall within the platform's policies, prepare a clear and factual report, and follow it through the official channels.",
    ],
    approach: [
      {
        title: "Assess against policy",
        detail: "We compare the review with the platform's published content policies.",
      },
      {
        title: "Advise honestly",
        detail: "If a review is legitimate, we say so, and recommend a considered public response instead.",
      },
      {
        title: "Prepare the report",
        detail: "Where a breach appears likely, we prepare a factual submission with supporting detail.",
      },
      { title: "Follow through", detail: "We track the report through the platform's process and any appeal stage." },
    ],
    includes: [
      "Policy assessment of the review",
      "Honest advice on whether to report",
      "Preparation and submission of the report",
      "Follow-up and appeal where available",
    ],
    note: "The decision always rests with the platform. We cannot remove legitimate reviews, we do not guarantee any outcome, and we will tell you plainly when a review should be answered rather than disputed.",
    related: ["review-responses", "reputation-monitoring", "complaint-workflows"],
  },
];
