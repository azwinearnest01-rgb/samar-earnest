import type { Capability } from "./types";

const practice = "advisory";

export const advisoryCapabilities: Capability[] = [
  {
    slug: "digital-strategy",
    name: "Digital strategy",
    practice,
    summary: "A clear, written view of what the business should do online, in what order, and why.",
    overview: [
      "Many businesses make digital decisions one at a time, in response to a salesperson, a competitor or a problem. The result is a collection of tools and activities that do not add up to a coherent whole.",
      "A digital strategy sets out where the business stands, what it is trying to achieve, and the priorities that follow — so that each later decision has a context.",
    ],
    approach: [
      { title: "Understand the business", detail: "We learn its goals, customers, constraints and resources." },
      { title: "Assess the position", detail: "We review the current digital estate and the competitive landscape." },
      {
        title: "Set priorities",
        detail: "We recommend what to do, in what order, with reasoning and indicative costs.",
      },
      {
        title: "Write it down",
        detail: "The strategy is delivered as a concise document the business can use and revisit.",
      },
    ],
    includes: [
      "Discovery conversations",
      "Current-position assessment",
      "Prioritised recommendations",
      "A concise written strategy",
      "A review session to discuss it",
    ],
    related: ["digital-estate-audits", "competitor-analysis", "digital-transformation-planning"],
  },
  {
    slug: "digital-estate-audits",
    name: "Digital Estate Audits",
    practice,
    summary: "A structured, independent review of the business's entire digital estate, delivered as a written report.",
    overview: ["See the dedicated page for the Digital Estate Audit."],
    approach: [],
    includes: [],
    href: "/digital-estate-audit",
  },
  {
    slug: "competitor-analysis",
    name: "Competitor analysis",
    practice,
    summary: "An objective look at how comparable businesses present themselves and are found online.",
    overview: [
      "Customers compare. Before they enquire, they will usually have looked at several businesses like this one — their websites, profiles, reviews and prices.",
      "We examine a selection of competitors through the customer's eyes and set out, plainly, where the business compares well, where it falls behind, and what is worth learning.",
    ],
    approach: [
      { title: "Select the comparison", detail: "We agree which competitors customers are most likely to consider." },
      {
        title: "Review each one",
        detail: "Websites, search visibility, profiles, reviews and messaging are examined.",
      },
      { title: "Compare fairly", detail: "Findings are set out side by side, against agreed criteria." },
      { title: "Recommend", detail: "We identify practical opportunities for the business." },
    ],
    includes: [
      "Competitor selection",
      "Website, search and reputation comparison",
      "Side-by-side findings",
      "Recommendations",
    ],
    note: "We use only publicly available information.",
    related: ["keyword-strategy", "digital-strategy", "conversion-analysis"],
  },
  {
    slug: "crm-assessments",
    name: "CRM assessments",
    practice,
    summary:
      "An independent review of whether the business's customer system is fit for purpose — and what to do if not.",
    overview: [
      "Businesses often suspect their CRM is not working, without being sure whether the problem lies with the software, its configuration or how it is used.",
      "A CRM assessment answers that question independently. We examine the system, the data and the habits around it, and recommend whether to reconfigure, retrain, replace — or leave well alone.",
    ],
    approach: [
      { title: "Interview the users", detail: "We learn how the system is used day to day and where it frustrates." },
      { title: "Examine the system", detail: "Configuration, data quality and automations are reviewed." },
      { title: "Diagnose", detail: "We identify the root causes of problems rather than the symptoms." },
      { title: "Recommend", detail: "A written report sets out options, costs and a recommended course." },
    ],
    includes: [
      "User interviews",
      "Configuration and data-quality review",
      "Diagnosis of root causes",
      "Written recommendations",
    ],
    related: ["crm-configuration", "crm-implementation", "technology-recommendations"],
  },
  {
    slug: "reputation-reviews",
    name: "Reputation reviews",
    practice,
    summary: "A considered assessment of the business's public reputation and how it is being managed.",
    overview: [
      "A reputation review takes stock: what customers say about the business, where they say it, how the business has responded, and how its reputation compares with competitors.",
      "It is a one-off advisory exercise that provides a clear baseline and practical recommendations — whether or not the business then engages us to manage its reputation.",
    ],
    approach: [
      { title: "Gather", detail: "We collect reviews and mentions across relevant platforms." },
      { title: "Analyse", detail: "Volume, rating, recency, themes and response quality are examined." },
      { title: "Compare", detail: "The business's reputation is set against comparable competitors." },
      { title: "Advise", detail: "We recommend practical, ethical improvements." },
    ],
    includes: [
      "Review and mention inventory",
      "Theme and sentiment analysis",
      "Response quality assessment",
      "Competitor comparison",
      "Written recommendations",
    ],
    related: ["reputation-monitoring", "review-responses", "competitor-analysis"],
  },
  {
    slug: "conversion-analysis",
    name: "Conversion analysis",
    practice,
    summary: "Finding where interested visitors and enquirers are lost before they become customers, and why.",
    overview: [
      "Conversion is the step from interest to action: a visitor enquiring, an enquiry becoming a booking, a quotation becoming a sale. At each step, some people are lost — often for avoidable reasons.",
      "We trace the customer's path through the website, forms and follow-up, measure where people leave, and identify the changes most likely to help.",
    ],
    approach: [
      { title: "Map the journey", detail: "We set out each step from first visit to customer." },
      { title: "Measure", detail: "Analytics and CRM data show where people leave." },
      { title: "Investigate", detail: "We examine pages, forms and follow-up for causes of friction." },
      { title: "Recommend and test", detail: "Changes are prioritised and, where possible, tested." },
    ],
    includes: [
      "Customer journey map",
      "Funnel measurement",
      "Friction and usability review",
      "Prioritised recommendations",
    ],
    related: ["analytics", "landing-pages", "lead-management"],
  },
  {
    slug: "technology-recommendations",
    name: "Technology recommendations",
    practice,
    summary: "Independent advice on which software and platforms suit the business — and which it does not need.",
    overview: [
      "There is no shortage of software promising to solve a business's problems. Choosing well requires understanding both the business and the options, without a commission riding on the answer.",
      "We recommend tools on their merits for the business in question, explain the trade-offs and costs, and are equally willing to advise that the current tools are sufficient.",
    ],
    approach: [
      { title: "Define the need", detail: "We clarify the problem the technology is meant to solve." },
      { title: "Shortlist", detail: "We identify suitable options at sensible price points." },
      { title: "Compare", detail: "Options are compared on fit, cost, ease of use and longevity." },
      { title: "Recommend", detail: "We give a clear recommendation with our reasoning." },
    ],
    includes: [
      "Requirements definition",
      "Shortlist of suitable options",
      "Comparison of costs and trade-offs",
      "A written recommendation",
    ],
    note: "Our recommendations are independent; we will disclose any commercial relationship with a recommended provider.",
    related: ["crm-assessments", "integrations", "digital-strategy"],
  },
  {
    slug: "digital-transformation-planning",
    name: "Digital transformation planning",
    practice,
    summary: "A phased, practical plan for moving a business's processes onto better digital foundations.",
    overview: [
      "Digital transformation is an inflated phrase for something that should be practical: moving the way a business works — its records, communication and processes — onto systems that make it more dependable.",
      "We plan such changes in manageable phases, with attention to the people who must adopt them, so that the business improves steadily without disruption to its day-to-day work.",
    ],
    approach: [
      { title: "Understand current operations", detail: "We document how work is done today and where it struggles." },
      { title: "Define the destination", detail: "We agree what better looks like, in practical terms." },
      { title: "Phase the work", detail: "Changes are ordered into manageable stages with clear outcomes." },
      { title: "Plan for people", detail: "Each phase includes training, documentation and support." },
    ],
    includes: [
      "Current-state process documentation",
      "Target-state description",
      "Phased implementation roadmap",
      "Training and adoption plan",
    ],
    related: ["digital-strategy", "crm-implementation", "integrations"],
  },
];
