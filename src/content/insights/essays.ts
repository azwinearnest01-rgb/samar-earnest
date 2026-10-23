import { FIRM_BYLINE, type Article } from "./types";

/**
 * Long-form essays on stewardship. Drafted for the launch; each needs the
 * founders' approval before its status is set to "published".
 */
export const essays: Article[] = [
  {
    slug: "the-quiet-cost-of-an-unmaintained-google-business-profile",
    title: "The Quiet Cost of an Unmaintained Google Business Profile",
    excerpt:
      "A business profile is often the first record a customer reads. When it falls out of date, the business pays in ways it rarely sees.",
    category: "Search & Discovery",
    format: "essay",
    publishedAt: "2026-09-29",
    author: FIRM_BYLINE,
    image: "facadeShutters",
    status: "draft",
    related: ["a-website-is-infrastructure-before-it-is-advertising", "reputation-is-built-after-the-transaction"],
    body: [
      {
        type: "paragraph",
        text: "For a great many customers, the first thing they read about a business is not its website. It is the short public record that appears when they search for its name or for the service it provides: the address, the opening hours, the telephone number, a handful of photographs and whatever other customers have chosen to say.",
      },
      {
        type: "paragraph",
        text: "That record is usually set up once, often in a hurry, and then left alone. The business moves on. The hours change for the season, a second telephone line is added, a service is discontinued. The profile, meanwhile, continues to describe a business that no longer quite exists.",
      },
      { type: "heading", text: "Costs that do not announce themselves" },
      {
        type: "paragraph",
        text: "The difficulty with an outdated profile is that its costs are invisible from the inside. Nobody telephones to say they found the wrong opening hours and went elsewhere. A customer who arrives to a closed door simply does not return. An enquiry made through a channel that nobody monitors is not recorded as lost; it is not recorded at all.",
      },
      {
        type: "list",
        items: [
          "Incorrect hours or contact details send prospective customers to competitors without a trace.",
          "Unanswered questions and reviews suggest a business that is not paying attention.",
          "Old photographs misrepresent the premises, the team or the standard of work.",
          "Missing categories and services make the business harder to find for the very searches that matter.",
        ],
      },
      { type: "heading", text: "A record, not an advertisement" },
      {
        type: "paragraph",
        text: "It is more useful to think of a business profile as a public record than as a piece of marketing. Its job is to be accurate, complete and current. Done properly, it answers the practical questions a customer has before they make contact, and it reflects well on the business precisely because it is so obviously looked after.",
      },
      {
        type: "quote",
        text: "The profile does not need to be clever. It needs to be correct, and it needs to stay correct.",
      },
      { type: "heading", text: "What proper maintenance looks like" },
      {
        type: "paragraph",
        text: "Maintenance is not complicated, but it is continuous. It means checking the essential details whenever something in the business changes; responding to questions and reviews in a measured, timely way; refreshing photographs so they reflect the business as it is; and keeping the description and services aligned with what the business actually offers.",
      },
      {
        type: "paragraph",
        text: "None of this is dramatic work. Its value lies in its consistency. A business that keeps its public record in good order is easier to find, easier to trust and easier to choose — and it avoids the quiet, compounding cost of being misrepresented by its own listing.",
      },
    ],
  },
  {
    slug: "when-customer-relationships-outgrow-the-inbox",
    title: "When Customer Relationships Outgrow the Inbox",
    excerpt:
      "An inbox is a fine place to receive a message and a poor place to keep a relationship. Most growing businesses discover this later than they would like.",
    category: "Client Relations",
    format: "essay",
    publishedAt: "2026-09-15",
    author: FIRM_BYLINE,
    image: "waxSealEnvelopes",
    status: "draft",
    related: ["reputation-is-built-after-the-transaction", "the-case-for-treating-your-digital-presence-as-an-estate"],
    body: [
      {
        type: "paragraph",
        text: "Almost every business begins by managing its customers through email, a telephone and a good memory. For a time, this works well. The founder knows every client by name, remembers what was discussed and follows up when something is promised.",
      },
      {
        type: "paragraph",
        text: "Then the business grows. More enquiries arrive through more channels. Colleagues answer some of them. A customer who spoke to one person on Tuesday writes to another on Friday. The record of the relationship is now scattered across several inboxes, a few message threads and somebody's notebook.",
      },
      { type: "heading", text: "The signs" },
      {
        type: "list",
        items: [
          "Enquiries are occasionally answered twice, or not at all.",
          "Nobody can say with confidence how many open opportunities the business has.",
          "Returning customers have to repeat themselves.",
          "Follow-up depends on whether someone happens to remember.",
          "When a colleague leaves, their client knowledge leaves with them.",
        ],
      },
      { type: "heading", text: "Why the inbox is not enough" },
      {
        type: "paragraph",
        text: "An inbox is organised around messages. A relationship is organised around a person or a business over time: who they are, what they have bought, what they have asked, what was promised and what should happen next. Those are different shapes of information, and forcing one into the other produces gaps.",
      },
      {
        type: "quote",
        text: "The question is not whether a business needs a customer system. It is whether the relationships are held by the business or merely by the people in it.",
      },
      { type: "heading", text: "Introducing a system without disruption" },
      {
        type: "paragraph",
        text: "A customer relationship system need not be elaborate. The best implementations begin modestly: a clean record of contacts and enquiries, a clear view of where each opportunity stands, and a few dependable routines for follow-up. More sophisticated automation can come later, once the foundations are trusted.",
      },
      {
        type: "paragraph",
        text: "What matters most is that the system reflects how the business actually works, and that the people using it understand why it exists. A well-kept customer record is not administrative overhead. It is the memory of the business, and it deserves the same care as any other asset.",
      },
    ],
  },
  {
    slug: "reputation-is-built-after-the-transaction",
    title: "Reputation Is Built After the Transaction",
    excerpt:
      "What a customer says once the work is done is now public and lasting. A business that attends to that moment builds trust that advertising cannot buy.",
    category: "Reputation",
    format: "essay",
    publishedAt: "2026-08-31",
    author: FIRM_BYLINE,
    image: "waxSealLetter",
    status: "draft",
    related: [
      "the-quiet-cost-of-an-unmaintained-google-business-profile",
      "when-customer-relationships-outgrow-the-inbox",
    ],
    body: [
      {
        type: "paragraph",
        text: "It is natural for a business to concentrate its attention on winning customers. Yet the moment that most shapes its public reputation usually comes later — after the sale, after the appointment, after the work is complete — when the customer decides what, if anything, to say about the experience.",
      },
      {
        type: "paragraph",
        text: "That judgement is now written down, published and read by people the business has never met. It is one of the most consequential records a business has, and it is formed almost entirely outside the business's control.",
      },
      { type: "heading", text: "Listening before responding" },
      {
        type: "paragraph",
        text: "The first discipline is simply to know what is being said. Feedback arrives across many platforms and is easily missed. A business that monitors it consistently learns early about recurring concerns — and has the chance to address them before they become the pattern customers notice.",
      },
      { type: "heading", text: "Responding with composure" },
      {
        type: "paragraph",
        text: "A considered reply to a review, whether favourable or critical, is read far more widely than by the person who wrote it. Prospective customers read responses to understand how the business behaves when something goes wrong. Measured, specific and courteous replies say more about a business than any claim it could make about itself.",
      },
      {
        type: "quote",
        text: "A critical review answered well can do more for a reputation than a favourable one left unacknowledged.",
      },
      { type: "heading", text: "Inviting feedback honestly" },
      {
        type: "paragraph",
        text: "Most satisfied customers do not think to leave a review unless asked. A simple, consistent invitation — sent at the right moment, to every customer rather than a selected few — produces a more accurate picture of the business. It should never involve incentives, pressure or filtering out those who might be critical.",
      },
      { type: "heading", text: "A note on removal" },
      {
        type: "paragraph",
        text: "Businesses are sometimes promised that unwelcome reviews can be made to disappear. Legitimate reviews cannot be removed on request, and no reputable adviser should suggest otherwise. Where a review appears to breach a platform's own content policies, it can be reported through that platform's dispute process. The decision rests with the platform.",
      },
      {
        type: "paragraph",
        text: "Reputation, in the end, is the accumulated record of how a business treats people. The work of managing it is mostly the work of deserving it — and then making sure the record is complete.",
      },
    ],
  },
  {
    slug: "a-website-is-infrastructure-before-it-is-advertising",
    title: "A Website Is Infrastructure Before It Is Advertising",
    excerpt:
      "Websites are usually commissioned as marketing and then left to age. They are better understood, and better built, as part of the business's working premises.",
    category: "Digital Estate",
    format: "essay",
    publishedAt: "2026-08-18",
    author: FIRM_BYLINE,
    image: "capitalIonic",
    status: "draft",
    related: [
      "the-case-for-treating-your-digital-presence-as-an-estate",
      "the-quiet-cost-of-an-unmaintained-google-business-profile",
    ],
    body: [
      {
        type: "paragraph",
        text: "Many websites are commissioned in the manner of an advertising campaign. There is a brief, a launch and a sense of relief when it is finished. Then the site is left largely untouched until, some years later, it looks sufficiently dated that the whole exercise is repeated.",
      },
      {
        type: "paragraph",
        text: "This approach misunderstands what a website has become. For most businesses it is no longer a brochure. It takes enquiries and bookings, answers questions, processes orders, feeds the customer system and informs how search engines describe the business. It is working infrastructure.",
      },
      { type: "heading", text: "What changes when a website is treated as infrastructure" },
      {
        type: "list",
        items: [
          "Reliability matters as much as appearance: forms must arrive, bookings must be recorded, pages must load quickly on a poor connection.",
          "Upkeep is planned rather than reactive: software is updated, links are checked, content is kept current.",
          "Integrations are documented, so the business knows how the website connects to everything else.",
          "Accessibility is a requirement, not a refinement, because every customer should be able to use the premises.",
        ],
      },
      {
        type: "quote",
        text: "Nobody would build a shop and never repair the door. A website deserves the same practical regard.",
      },
      { type: "heading", text: "Design still matters" },
      {
        type: "paragraph",
        text: "None of this diminishes the importance of design. A considered, well-made website communicates the standard of the business before a word is read. But good design follows from good construction. The most convincing websites are those that are clear, fast, accurate and dependable — and that remain so long after launch.",
      },
      {
        type: "paragraph",
        text: "Treating a website as infrastructure changes the questions a business asks of it. Not only how it looks, but whether it works, who looks after it, and what happens when something needs to change. Those are the questions that determine whether it serves the business for years or merely for a season.",
      },
    ],
  },
  {
    slug: "the-case-for-treating-your-digital-presence-as-an-estate",
    description:
      "Websites, listings, reviews and customer records are usually managed separately. Why they work better looked after together, as one digital estate.",
    title: "The Case for Treating Your Digital Presence as an Estate",
    excerpt:
      "Websites, listings, customer records, reviews and automations are usually managed separately. Considered together, they form something closer to an estate — and deserve to be stewarded as one.",
    category: "Stewardship",
    format: "essay",
    publishedAt: "2026-08-04",
    author: FIRM_BYLINE,
    image: "gothicDoorway",
    status: "draft",
    related: ["a-website-is-infrastructure-before-it-is-advertising", "when-customer-relationships-outgrow-the-inbox"],
    body: [
      {
        type: "paragraph",
        text: "Ask a business owner who looks after their digital affairs and the answer is often a list. One supplier built the website. Another manages advertising. Someone in the office answers reviews when there is time. The customer system was set up by a contractor who has since moved on. Each part has a custodian, or had one once. The whole has none.",
      },
      {
        type: "paragraph",
        text: "We find it more useful to think of these assets collectively, as an estate: a set of properties and records that together determine how the business is found, judged and dealt with.",
      },
      { type: "heading", text: "Why the parts cannot be managed in isolation" },
      {
        type: "paragraph",
        text: "The parts of a digital estate are connected. A change to the website affects search visibility. The customer system determines whether enquiries from that website are followed up. Follow-up shapes the experience customers later describe in reviews. Reviews influence whether the next customer makes contact at all. When each part is managed by a different hand, those connections are nobody's responsibility.",
      },
      {
        type: "quote",
        text: "An estate is not a collection of possessions. It is a responsibility to keep them in good order, together and over time.",
      },
      { type: "heading", text: "Stewardship rather than campaigns" },
      {
        type: "paragraph",
        text: "Digital work is often bought in campaigns: a burst of activity, a report, and then a pause. Stewardship is different in kind. It assumes that the assets will be needed for years, that they will need regular attention, and that their value lies as much in their condition as in any single initiative.",
      },
      {
        type: "list",
        items: [
          "Know what the estate comprises, and who has access to each part.",
          "Keep its records accurate and its infrastructure maintained.",
          "Review its condition regularly, in writing.",
          "Make changes deliberately, with an understanding of what else they affect.",
        ],
      },
      {
        type: "paragraph",
        text: "The platforms will change, as they always have. The principle is older than any of them: look after the things upon which the business depends.",
      },
    ],
  },
];
