import type { Capability } from "./types";

const practice = "editorial";

export const editorialCapabilities: Capability[] = [
  {
    slug: "website-copy",
    name: "Website copy",
    practice,
    summary: "Clear, considered writing for every page of a website, in the business's own voice.",
    overview: [
      "Website copy does more work than almost any other writing a business commissions. It must explain, reassure and persuade — often to a reader who is skimming on a phone.",
      "We write plainly and precisely: what the business does, for whom, how it works and what to do next. The aim is copy that the business is proud to put its name to, and that customers actually read.",
    ],
    approach: [
      {
        title: "Interview",
        detail: "We speak with the people who know the business best, and listen to how they describe it.",
      },
      { title: "Structure", detail: "We plan what each page must say, and in what order." },
      { title: "Write", detail: "Drafts are written in an agreed voice, with attention to search where relevant." },
      { title: "Refine together", detail: "Drafts are reviewed and revised until they are accurate and right." },
    ],
    includes: [
      "Briefing interviews",
      "Voice and tone guidance",
      "Copy for each page of the site",
      "Titles and meta descriptions",
      "Two rounds of revisions",
    ],
    related: ["service-pages", "company-profiles", "editing"],
  },
  {
    slug: "service-pages",
    name: "Service pages",
    practice,
    summary:
      "Detailed pages that explain each service properly and answer the questions customers ask before they enquire.",
    overview: [
      "A single page listing everything a business does serves neither customers nor search engines well. Each significant service deserves its own page, written for the person who needs it.",
      "We write service pages that explain what the service is, who it suits, how it works, what it involves and how to begin — answering, in advance, the questions customers would otherwise have to ask.",
    ],
    approach: [
      { title: "Gather the questions", detail: "We collect the questions customers actually ask about each service." },
      { title: "Research the searches", detail: "We check how people search for the service." },
      { title: "Write", detail: "Each page is written to inform first and invite enquiry second." },
      { title: "Connect", detail: "Pages are linked to related services, articles and the enquiry form." },
    ],
    includes: [
      "Customer question research",
      "Keyword alignment",
      "Full copy for each service page",
      "Frequently asked questions",
    ],
    related: ["on-page-optimisation", "website-copy", "keyword-strategy"],
  },
  {
    slug: "articles",
    name: "Articles",
    practice,
    summary: "Well-researched articles that demonstrate the business's knowledge and help its customers.",
    overview: [
      "Articles allow a business to show what it knows, answer the questions its customers have, and give people a reason to return. Done properly, they build trust and support search visibility at the same time.",
      "We plan and write articles that are genuinely useful — accurate, well structured and free of padding — and that sound like the business rather than like a content mill.",
    ],
    approach: [
      {
        title: "Plan the subjects",
        detail: "Topics are chosen from customer questions, expertise and search research.",
      },
      { title: "Brief and research", detail: "Each article is outlined and checked with the business's specialists." },
      { title: "Write and edit", detail: "Articles are drafted, edited and fact-checked." },
      {
        title: "Publish and share",
        detail: "Articles are published with appropriate links and, where useful, shared by email.",
      },
    ],
    includes: [
      "Editorial calendar",
      "Research and outlines",
      "Written and edited articles",
      "Publication and internal linking",
    ],
    related: ["seo-content", "thought-leadership", "email-campaigns"],
  },
  {
    slug: "seo-content",
    name: "SEO content",
    practice,
    summary: "Content written to be found in search without sacrificing quality for the human reader.",
    overview: [
      "Writing for search engines and writing for people are not opposing tasks. Search engines increasingly reward content that is genuinely helpful, original and clear.",
      "We write content that addresses specific searches thoroughly and honestly, structured so that both readers and search engines can follow it easily.",
    ],
    approach: [
      { title: "Choose the target", detail: "Each piece is matched to a search and the intent behind it." },
      {
        title: "Outline",
        detail: "We plan the questions the piece must answer and the order in which to answer them.",
      },
      { title: "Write for people", detail: "Copy is written to be read, with structure that aids scanning." },
      { title: "Optimise and measure", detail: "Titles, headings and links are refined, and performance is tracked." },
    ],
    includes: [
      "Search-led topic selection",
      "Structured outlines",
      "Written, edited content",
      "On-page optimisation",
      "Performance review",
    ],
    related: ["keyword-strategy", "articles", "on-page-optimisation"],
  },
  {
    slug: "product-writing",
    name: "Product writing",
    practice,
    summary: "Product descriptions that are accurate, useful and consistent across the whole catalogue.",
    overview: [
      "Product descriptions are often copied from manufacturers, left blank, or written hurriedly by whoever uploads the product. Customers then buy with less confidence, and search engines see little reason to show the page.",
      "We write descriptions that tell customers what they need to know — what the product is, what it is for, how it differs, and the practical details — in a consistent style across the catalogue.",
    ],
    approach: [
      { title: "Set a format", detail: "We agree a consistent structure for descriptions and specifications." },
      { title: "Gather facts", detail: "Product details are collected and checked for accuracy." },
      { title: "Write", detail: "Descriptions are written in the brand's voice, with useful detail." },
      { title: "Scale carefully", detail: "Large catalogues are worked through in priority order." },
    ],
    includes: [
      "Description and specification template",
      "Product descriptions in the brand's voice",
      "Category page introductions",
      "Consistency review across the catalogue",
    ],
    related: ["e-commerce", "seo-content", "editing"],
  },
  {
    slug: "company-profiles",
    name: "Company profiles",
    practice,
    summary: "A clear, accurate account of the business for websites, proposals, tenders and introductions.",
    overview: [
      "A company profile is how a business introduces itself formally: who it is, what it does, how it works and what it stands for. It is used in proposals, on websites, in directories and in conversation.",
      "We write profiles that are truthful, well judged and confident without exaggeration — in long and short versions for different occasions.",
    ],
    approach: [
      { title: "Interview the principals", detail: "We learn the history, purpose and character of the business." },
      { title: "Confirm the facts", detail: "Every claim is checked and supported." },
      { title: "Write in versions", detail: "Long, medium and short forms are prepared for different uses." },
      { title: "Approve", detail: "The profile is reviewed and finalised with the business's principals." },
    ],
    includes: [
      "Principal interviews",
      "Long-form company profile",
      "Short and one-line versions",
      "Boilerplate for proposals and directories",
    ],
    related: ["website-copy", "case-studies", "thought-leadership"],
  },
  {
    slug: "case-studies",
    name: "Case studies",
    practice,
    summary: "Truthful accounts of real work, written with the client's permission, that show how the business helps.",
    overview: [
      "A well-written case study is one of the most persuasive things a business can publish, because it shows rather than claims. It must also be accurate: every figure and statement should be verifiable and approved by the client concerned.",
      "We interview the business and, where appropriate, its client, and write a clear account of the situation, the work and the outcome.",
    ],
    approach: [
      {
        title: "Select and seek permission",
        detail: "Suitable examples are chosen and the client's consent is obtained.",
      },
      { title: "Interview", detail: "We speak with those involved to understand the work properly." },
      { title: "Write", detail: "The case study is written plainly, without inflation." },
      { title: "Approve", detail: "Both the business and the client review the text before publication." },
    ],
    includes: [
      "Selection and permission process",
      "Interviews",
      "Written case study",
      "Client approval before publication",
    ],
    note: "We only write case studies about real, approved work, and we do not invent figures or quotations.",
    related: ["company-profiles", "articles", "thought-leadership"],
  },
  {
    slug: "thought-leadership",
    name: "Thought leadership",
    practice,
    summary: "Considered, well-argued writing that sets out the business's perspective on its field.",
    overview: [
      "Thought leadership is a grand name for a simple thing: a business explaining how it thinks. Essays, commentary and guides allow principals to share their judgement and experience with the people they serve.",
      "We help principals articulate their views and write them up with clarity and restraint — under their own name, in their own voice.",
    ],
    approach: [
      { title: "Draw out the view", detail: "Conversations with the principal identify a clear, defensible argument." },
      { title: "Structure the argument", detail: "We outline the piece so the reasoning is easy to follow." },
      { title: "Write in their voice", detail: "Drafts are written to sound like the person whose name is on them." },
      { title: "Place it well", detail: "Pieces are published on the website and, where suitable, elsewhere." },
    ],
    includes: [
      "Interviews with principals",
      "Essay and commentary drafting",
      "Editing in the author's voice",
      "Publication planning",
    ],
    related: ["articles", "company-profiles", "editing"],
  },
  {
    slug: "email-campaigns",
    name: "Email campaigns",
    practice,
    summary:
      "Well-written, properly targeted emails to customers and subscribers who have chosen to hear from the business.",
    overview: [
      "Email remains one of the most direct and dependable ways for a business to reach the people who know it. It is also easily abused, and readers are quick to unsubscribe from messages that are frequent, generic or irrelevant.",
      "We plan and write campaigns that are worth opening: relevant to the reader, clear in purpose and sent at a sensible rhythm.",
    ],
    approach: [
      { title: "Plan", detail: "We agree the purpose, audience and rhythm of each campaign." },
      { title: "Write and design", detail: "Emails are written and laid out to read well on phones." },
      { title: "Test and send", detail: "Messages are tested and sent to appropriate, consenting segments." },
      { title: "Review", detail: "Opens, clicks and replies are reviewed to improve the next campaign." },
    ],
    includes: [
      "Campaign planning and calendar",
      "Copywriting and layout",
      "Segmentation and testing",
      "Results review",
    ],
    note: "Campaigns are sent only to people who have agreed to hear from the business.",
    related: ["email-sequences", "reactivation-campaigns", "articles"],
  },
  {
    slug: "editing",
    name: "Editing",
    practice,
    summary: "Careful editing of existing writing so that it is clear, correct and consistent.",
    overview: [
      "Much of a business's writing already exists — on its website, in proposals, in brochures and in emails. It is often accurate in substance but unclear, inconsistent or longer than it needs to be.",
      "We edit with a light but exacting hand: correcting errors, clarifying meaning, tightening structure and bringing everything into a consistent voice.",
    ],
    approach: [
      {
        title: "Agree the scope",
        detail: "We confirm whether the task is proofreading, copy-editing or a structural edit.",
      },
      { title: "Edit", detail: "Changes are made with tracked edits so every alteration is visible." },
      { title: "Explain", detail: "Significant changes are annotated with the reasoning." },
      { title: "Set a standard", detail: "Where useful, we prepare a short style guide for future writing." },
    ],
    includes: [
      "Proofreading and copy-editing",
      "Structural editing",
      "Tracked changes with notes",
      "A short house style guide",
    ],
    related: ["website-copy", "client-communication", "company-profiles"],
  },
];
