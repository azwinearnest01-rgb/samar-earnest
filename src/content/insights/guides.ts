import { FIRM_BYLINE, type Article } from "./types";

/**
 * Practical guides, each written to answer a specific search a prospective
 * client is likely to make, and linked to the relevant service pages.
 *
 * Drafted for review: confirm the advice reflects how the firm works, then
 * set `status: "published"`. Platform rules (Google's in particular) change;
 * re-check each guide against the platform's current help pages before
 * publishing and at least once a year, and set `updatedAt` when revised.
 */
export const guides: Article[] = [
  {
    slug: "how-to-set-up-a-google-business-profile",
    title: "How to Set Up a Google Business Profile Properly: A Step-by-Step Guide",
    seoTitle: "How to Set Up a Google Business Profile (Step by Step)",
    description:
      "A clear, step-by-step guide to creating, verifying and completing a Google Business Profile — and the common mistakes that cost businesses visibility.",
    focusKeyword: "how to set up google business profile",
    excerpt:
      "Creating a profile takes minutes. Setting it up properly — the right category, the right ownership, every section complete — is what makes it work for the business.",
    category: "Search & Discovery",
    format: "guide",
    publishedAt: "2026-10-16",
    author: FIRM_BYLINE,
    image: "facadeCorner",
    status: "draft",
    services: ["google-business-profile-setup", "google-business-profile-management", "local-seo"],
    related: ["local-seo-checklist-for-small-businesses", "the-quiet-cost-of-an-unmaintained-google-business-profile"],
    body: [
      {
        type: "paragraph",
        text: "A Google Business Profile is the panel that appears when someone searches for a business by name, or looks for a type of business on Google Maps. It shows the address, opening hours, telephone number, photographs and reviews — often before the customer has seen the website at all.",
      },
      {
        type: "paragraph",
        text: "Creating one is free and quick. Setting it up properly takes a little more care, and the difference matters: a well-completed profile is easier to find, easier to trust and easier to act upon. This guide covers both — the steps, and the decisions that are easy to get wrong.",
      },
      { type: "heading", text: "Before you begin" },
      {
        type: "list",
        items: [
          "**Use a Google account the business controls**, ideally one tied to a business email address rather than a personal one, or one belonging to an agency or freelancer. Whoever owns the account owns the profile.",
          "**Check whether a profile already exists.** Search for the business on Google Maps. Google sometimes creates listings automatically, and claiming an existing one is better than creating a duplicate.",
          "**Have the facts ready:** the business's real-world name, address (if customers visit), telephone number, website, opening hours and a short list of services.",
        ],
      },
      { type: "heading", text: "Step-by-step: creating the profile" },
      {
        type: "steps",
        items: [
          "Go to google.com/business and sign in with the business's Google account.",
          "Enter the business name exactly as it appears in the real world — on signage, stationery and the website. If Google suggests an existing listing that matches, choose it to claim it rather than creating a new one.",
          "Choose the primary category. This is one of the most important decisions in the whole profile (see below).",
          "Decide whether customers visit you. If they do, add the address. If you visit customers instead — as many trades and consultancies do — add a service area and leave the address hidden.",
          "Add the telephone number and website address.",
          "Verify the business. Google decides which verification methods it offers for each business — commonly a phone call, text message, email, a short video recording or a postcard — so follow the option you are given.",
          "Once verified, complete every remaining section before you consider the job done.",
        ],
      },
      { type: "heading", text: "Choosing the right category" },
      {
        type: "paragraph",
        text: "The primary category tells Google what the business fundamentally is, and it strongly influences which searches the profile appears for. Choose the most specific category that genuinely describes the main activity — 'Dental clinic' rather than 'Health', 'Accountant' rather than 'Consultant'. Additional categories can then cover secondary services, but only add ones that are true; irrelevant categories dilute the profile rather than strengthen it.",
      },
      {
        type: "callout",
        title: "A common and costly mistake",
        text: "Do not add keywords or locations to the business name (for example, 'Khan Dental — Best Dentist in Lahore'). Google's guidelines require the name to match the business's real-world name, and profiles that break this rule can be suspended. Relevance should come from the category, services and description instead.",
      },
      { type: "heading", text: "Completing the profile" },
      {
        type: "paragraph",
        text: "An incomplete profile is one of the most common reasons a business is overlooked. Once verified, work through every section:",
      },
      {
        type: "list",
        items: [
          "**Opening hours and special hours** — including public holidays. Incorrect hours send customers to closed doors.",
          "**Business description** — up to 750 characters. Explain plainly what the business does, for whom and where. Write for people, not search engines.",
          "**Services or products** — list them individually with short descriptions. This helps the profile appear for more specific searches.",
          "**Photographs** — the exterior (so people can recognise the premises), the interior, the team and the work itself. Real, recent photographs are far more persuasive than stock images.",
          "**Attributes** — such as accessibility, payment options or online appointments, where they apply.",
          "**Booking or appointment links** — if customers can book online, link directly to the booking page. See our note on [appointment systems](/services/appointment-systems).",
        ],
      },
      { type: "heading", text: "Managing access properly" },
      {
        type: "paragraph",
        text: "If someone else — an employee, an agency or a firm like ours — helps manage the profile, add them as a manager rather than sharing the owner's login. The business should always remain the primary owner. When a working relationship ends, access can then simply be removed, without any risk to the profile itself.",
      },
      { type: "heading", text: "After setup: keeping it in good order" },
      {
        type: "paragraph",
        text: "A profile is not finished once it is live. Hours change, services are added, photographs date and customers leave reviews that deserve a reply. A profile left untouched gradually misrepresents the business — the subject of our essay on [the quiet cost of an unmaintained profile](/insights/the-quiet-cost-of-an-unmaintained-google-business-profile). A short monthly review is usually enough to keep it accurate.",
      },
      {
        type: "paragraph",
        text: "For the wider picture of how the profile fits into local search, see our [local SEO checklist](/insights/local-seo-checklist-for-small-businesses).",
      },
    ],
    faqs: [
      {
        question: "Is a Google Business Profile free?",
        answer:
          "Yes. Creating and managing a Google Business Profile is free. Be wary of anyone who claims a fee is required to be listed on Google.",
      },
      {
        question: "How long does verification take?",
        answer:
          "It depends on the method Google offers. Phone, text and email verification can be immediate; video and postcard verification can take several days or longer while Google reviews the request.",
      },
      {
        question: "Can I set up a profile without a physical shop or office?",
        answer:
          "Yes. Businesses that visit customers, rather than receiving them, can set up a service-area profile and keep the address hidden.",
      },
      {
        question: "Should an agency own my Google Business Profile?",
        answer:
          "No. The business should remain the primary owner and add any agency or adviser as a manager. That way access can be removed at any time without losing the profile. Our [Google Business Profile setup](/services/google-business-profile-setup) service always leaves ownership with the business.",
      },
    ],
  },
  {
    slug: "how-to-respond-to-negative-google-reviews",
    title: "How to Respond to Negative Google Reviews (With Example Replies)",
    seoTitle: "How to Respond to Negative Google Reviews: Examples",
    description:
      "How to reply to a negative Google review calmly and professionally — a simple structure, example responses, what to avoid, and when a review can be reported.",
    focusKeyword: "how to respond to negative google reviews",
    excerpt:
      "A reply to a critical review is read by far more people than the person who wrote it. Here is how to write one that reflects well on the business.",
    category: "Reputation",
    format: "guide",
    publishedAt: "2026-10-15",
    author: FIRM_BYLINE,
    image: "pillaredHall",
    status: "draft",
    services: ["review-responses", "reputation-monitoring", "platform-review-dispute-assistance"],
    related: ["how-to-ask-customers-for-google-reviews", "reputation-is-built-after-the-transaction"],
    body: [
      {
        type: "paragraph",
        text: "Every business that serves enough customers will eventually receive a critical review. It is not a catastrophe. What matters most is not the review itself but the reply — because prospective customers read both, and they read the reply to learn how the business behaves when something goes wrong.",
      },
      {
        type: "paragraph",
        text: "A calm, specific and courteous response can do more for a business's reputation than a dozen favourable reviews. A defensive or dismissive one can do lasting harm. This guide sets out a simple structure, some example replies and the mistakes to avoid.",
      },
      { type: "heading", text: "Before you reply" },
      {
        type: "list",
        items: [
          "**Wait until you are calm.** Replies written in irritation read badly in public, and they stay there.",
          "**Find out what happened.** Check the customer's record, speak to the colleague involved, and establish the facts before you respond.",
          "**Reply reasonably promptly.** A reply within a few days shows attentiveness; a reply months later suggests the business was not paying attention.",
        ],
      },
      { type: "heading", text: "A simple structure for every reply" },
      {
        type: "steps",
        items: [
          "**Thank them** for taking the time to write — even when the review is harsh.",
          "**Acknowledge the specific concern** in your own words, so it is clear you have read it properly.",
          "**Apologise for their experience** where appropriate. This is not an admission of every allegation; it is basic courtesy.",
          "**Explain briefly, without arguing.** If there is relevant context or a change you have made, state it in a sentence or two.",
          "**Take it offline.** Offer a direct way to resolve it — a named person, an email address or a telephone number.",
        ],
      },
      { type: "heading", text: "Example replies" },
      { type: "subheading", text: "A complaint about slow service" },
      {
        type: "quote",
        text: "Thank you for letting us know, Ahmed. You waited far longer than you should have on Saturday, and we are sorry — that is not the standard we hold ourselves to. We have since added a second member of staff on weekend mornings. If you would be willing to give us another chance, please contact our manager, Sara, at the number on our profile, and she will look after your next visit personally.",
      },
      { type: "subheading", text: "A complaint about a mistake that has been put right" },
      {
        type: "quote",
        text: "Thank you, Maria, and we are sorry the first delivery arrived damaged. We are glad our team was able to send a replacement the same week, and we have reviewed our packaging for fragile items as a result. We appreciate your patience.",
      },
      { type: "subheading", text: "A review you believe is inaccurate" },
      {
        type: "quote",
        text: "Thank you for your review. We take every comment seriously, but we have been unable to find a booking matching these details. We would genuinely like to understand what happened — please contact us directly at the email address on our website so we can look into it.",
      },
      {
        type: "paragraph",
        text: "These are examples to adapt, not templates to paste. Replies that are obviously copied word for word across many reviews read as indifference.",
      },
      { type: "heading", text: "What to avoid" },
      {
        type: "list",
        items: [
          "Arguing point by point, or suggesting the customer is lying.",
          "Revealing private details about the customer, their booking or their account.",
          "Offering refunds or incentives in exchange for changing or removing a review.",
          "Copying the same generic reply onto every review.",
          "Ignoring critical reviews altogether — silence is also read as an answer.",
        ],
      },
      { type: "heading", text: "When a review can be reported" },
      {
        type: "paragraph",
        text: "Google does not remove reviews simply because they are negative or because a business disagrees with them. It may remove reviews that break its content policies — for example, those containing abusive language, reviews clearly about a different business, or reviews written with a conflict of interest. These can be reported through the business profile. The decision rests with Google, and an honest reply is still worthwhile while a report is considered.",
      },
      {
        type: "paragraph",
        text: "Our [Platform Review Dispute Assistance](/services/platform-review-dispute-assistance) helps businesses assess whether a review is likely to fall within those policies and, if so, report it properly. We will also say plainly when a review is legitimate and should be answered rather than disputed.",
      },
      { type: "heading", text: "Making it a routine" },
      {
        type: "paragraph",
        text: "Responding well is far easier when reviews are noticed promptly and there is an agreed approach to tone and escalation. That is the purpose of [reputation monitoring](/services/reputation-monitoring) and a simple set of [review response](/services/review-responses) guidelines. And the most effective answer to an occasional critical review is a steady stream of honest ones from satisfied customers — see [how to ask customers for reviews](/insights/how-to-ask-customers-for-google-reviews).",
      },
    ],
    faqs: [
      {
        question: "Should I respond to every negative review?",
        answer:
          "In most cases, yes. A courteous reply shows prospective customers that the business listens. The exceptions are reviews that are abusive or plainly spam, which are better reported than engaged with.",
      },
      {
        question: "Can I get a negative Google review removed?",
        answer:
          "Only if it breaks Google's content policies, and only Google can decide that. Legitimate reviews — even unfair-seeming ones — are not removed on request, and no one can honestly guarantee otherwise.",
      },
      {
        question: "How quickly should I reply to a negative review?",
        answer:
          "Within a few days is a sensible standard. Take enough time to establish the facts and write calmly, but not so long that the reply looks like an afterthought.",
      },
      {
        question: "Can I offer a refund in exchange for removing a review?",
        answer:
          "No. Offering incentives to change or remove reviews breaches Google's policies and can damage trust if it becomes known. Resolve the complaint on its merits, and leave the review to the customer.",
      },
    ],
  },
  {
    slug: "what-is-a-crm",
    title: "What Is a CRM? A Plain-English Guide for Small Businesses",
    seoTitle: "What Is a CRM? A Plain-English Guide for Small Businesses",
    description:
      "What a CRM (customer relationship management system) is, what it does, the signs a small business needs one, and how to choose and introduce one well.",
    focusKeyword: "what is a crm",
    excerpt:
      "A CRM is simply the business's shared memory of its customers. Here is what one does, when a business needs one, and how to avoid the common mistakes.",
    category: "Client Relations",
    format: "guide",
    publishedAt: "2026-10-14",
    author: FIRM_BYLINE,
    image: "libraryBusts",
    status: "draft",
    services: ["crm-implementation", "crm-assessments", "lead-management"],
    related: ["when-customer-relationships-outgrow-the-inbox", "how-to-ask-customers-for-google-reviews"],
    body: [
      {
        type: "paragraph",
        text: "CRM stands for customer relationship management. In practice, a CRM is a piece of software that keeps one shared record of everyone the business deals with — who they are, how they found you, what they have asked, what they have bought, and what should happen next.",
      },
      {
        type: "paragraph",
        text: "The term sounds technical, and the software is often sold with long lists of features. But the idea is simple: a CRM is the business's memory, held in one place rather than in several inboxes, a spreadsheet and somebody's head.",
      },
      { type: "heading", text: "What a CRM actually does" },
      {
        type: "list",
        items: [
          "**Keeps contact records** — names, businesses, contact details and notes, in one place the whole team can see.",
          "**Tracks enquiries and opportunities** — where each one stands, who is responsible and what the next step is.",
          "**Records conversations** — emails, calls and meetings linked to the customer they concern.",
          "**Reminds people to follow up** — so promised calls and quotations are not forgotten.",
          "**Reports** — how many enquiries arrived, where they came from and how many became customers.",
        ],
      },
      { type: "heading", text: "Signs a business needs one" },
      {
        type: "paragraph",
        text: "Very small businesses can manage well without a CRM. The need usually becomes apparent as enquiries and staff increase. Common signs include:",
      },
      {
        type: "list",
        items: [
          "Enquiries are occasionally answered twice — or not at all.",
          "Nobody can say with confidence how many open opportunities the business has.",
          "Customer information lives in several places that disagree with one another.",
          "Follow-up depends on someone remembering.",
          "When a colleague leaves, their knowledge of customers leaves with them.",
        ],
      },
      {
        type: "paragraph",
        text: "We explore these signs at more length in our essay [When Customer Relationships Outgrow the Inbox](/insights/when-customer-relationships-outgrow-the-inbox).",
      },
      { type: "heading", text: "CRM, spreadsheet or inbox?" },
      {
        type: "paragraph",
        text: "A spreadsheet can serve as a simple customer list, and for a sole trader it may be enough. Its limits appear when several people need to update it at once, when you want reminders, or when conversations need to be linked to the right customer. An inbox is organised around messages rather than relationships, which is why things fall through the gaps as volume grows.",
      },
      { type: "heading", text: "How to choose a CRM" },
      {
        type: "steps",
        items: [
          "**Start with the process, not the software.** Write down how enquiries arrive, who handles them and what stages a customer passes through.",
          "**List the few things it must do well** — for most small businesses, contacts, a simple pipeline, reminders and email integration.",
          "**Consider who will use it every day.** A system the team finds awkward will be abandoned, however capable it is.",
          "**Check it connects to what you already use** — email, website forms, calendar, accounting.",
          "**Look at the total cost** — per-user pricing, the plan you will actually need, and the time to set it up.",
          "**Try before committing.** Most systems offer a trial; test it with real enquiries.",
        ],
      },
      {
        type: "callout",
        title: "A note on independence",
        text: "There is no single best CRM. The right choice depends on the size of the business, how it sells and who will use it. Advice tied to a commission is worth treating with caution — our own [technology recommendations](/services/technology-recommendations) are independent.",
      },
      { type: "heading", text: "Introducing a CRM without disruption" },
      {
        type: "paragraph",
        text: "Most CRM projects fail not because of the software but because of how it is introduced. Begin modestly: clean and import existing contacts, set up a pipeline that mirrors the real sales process, and agree a few simple rules about what must be recorded. Show the team how to use it in their own daily work. Automation can come later, once the foundations are trusted.",
      },
      {
        type: "paragraph",
        text: "This is the approach behind our [CRM implementation](/services/crm-implementation) service. If you already have a CRM that nobody quite trusts, a [CRM assessment](/services/crm-assessments) can establish whether it needs reconfiguring, retraining or replacing.",
      },
    ],
    faqs: [
      {
        question: "What does CRM stand for?",
        answer:
          "Customer relationship management. The term usually refers to software that keeps a shared record of customers, enquiries and conversations.",
      },
      {
        question: "Does a small business need a CRM?",
        answer:
          "Not always. A sole trader with a handful of customers may manage well with a spreadsheet. A CRM becomes valuable once several people handle enquiries, or once follow-up starts to depend on memory.",
      },
      {
        question: "How long does it take to set up a CRM?",
        answer:
          "A straightforward setup for a small business can take a few weeks, including importing data and training the team. More complex processes and integrations take longer.",
      },
      {
        question: "Is a CRM only for sales?",
        answer:
          "No. Many businesses use a CRM for customer service, appointments, retention and reporting as much as for winning new customers.",
      },
    ],
  },
  {
    slug: "local-seo-checklist-for-small-businesses",
    title: "Local SEO Checklist for Small Businesses",
    seoTitle: "Local SEO Checklist for Small Businesses",
    description:
      "A practical local SEO checklist covering Google Business Profile, consistent listings, reviews, location pages, technical basics and how to measure progress.",
    focusKeyword: "local seo checklist",
    excerpt:
      "Local search rewards businesses whose information is accurate, complete and trusted. This checklist covers what to put in order, and in what sequence.",
    category: "Search & Discovery",
    format: "guide",
    publishedAt: "2026-10-13",
    author: FIRM_BYLINE,
    image: "facadeColumns",
    status: "draft",
    services: ["local-seo", "business-listings", "technical-seo"],
    related: ["how-to-set-up-a-google-business-profile", "how-to-ask-customers-for-google-reviews"],
    body: [
      {
        type: "paragraph",
        text: "When someone searches for a service 'near me', or for a type of business in a particular town, Google shows a different kind of result: a map with a short list of local businesses, followed by ordinary web pages. Local SEO is the work of making sure a business appears there accurately and competitively.",
      },
      {
        type: "paragraph",
        text: "Google says local results are based mainly on three things: **relevance** (how well a business matches the search), **distance** (how far it is from the searcher or the location searched) and **prominence** (how well known and well regarded it is). A business cannot change its distance from a searcher, but it can do a great deal about relevance and prominence. This checklist sets out where to start.",
      },
      { type: "heading", text: "1. Google Business Profile" },
      {
        type: "list",
        items: [
          "The profile is claimed, verified and owned by the business.",
          "The primary category is the most specific accurate one available.",
          "The business name matches the real-world name, without added keywords.",
          "Hours, special hours, services, description, attributes and photographs are complete and current.",
          "Booking or appointment links are added where relevant.",
        ],
      },
      {
        type: "paragraph",
        text: "Our step-by-step guide covers [how to set up a Google Business Profile](/insights/how-to-set-up-a-google-business-profile) properly.",
      },
      { type: "heading", text: "2. Consistent business information everywhere" },
      {
        type: "list",
        items: [
          "The business name, address and telephone number are identical on the website, the profile and every directory listing.",
          "Duplicate or outdated listings are corrected or removed where possible.",
          "The business is listed in directories that are genuinely relevant to its industry and area — quality matters more than quantity.",
        ],
      },
      {
        type: "paragraph",
        text: "Inconsistent details confuse customers and weaken the signals search engines use to trust a business's information. Our [business listings](/services/business-listings) service keeps a maintained register of where the business appears.",
      },
      { type: "heading", text: "3. Reviews" },
      {
        type: "list",
        items: [
          "Every customer is invited to leave a review, in a consistent and ethical way.",
          "Reviews are replied to promptly — favourable and critical alike.",
          "No incentives are offered, and critical customers are not filtered out of review requests.",
        ],
      },
      {
        type: "paragraph",
        text: "See [how to ask customers for Google reviews](/insights/how-to-ask-customers-for-google-reviews) and [how to respond to negative reviews](/insights/how-to-respond-to-negative-google-reviews).",
      },
      { type: "heading", text: "4. The website" },
      {
        type: "list",
        items: [
          "Each main service has its own page that explains it clearly.",
          "If the business serves several towns or areas, there are genuinely useful pages for each — not copies with the place name swapped.",
          "The name, address and telephone number appear on the website, usually in the footer and on the contact page.",
          "The website links to the business profile, and the profile links back to the website.",
          "LocalBusiness structured data is added, so search engines can read the key details reliably.",
        ],
      },
      { type: "heading", text: "5. Technical basics" },
      {
        type: "list",
        items: [
          "The site loads quickly and works well on phones — most local searches happen on mobile.",
          "Pages can be crawled and indexed; there are no accidental 'noindex' tags or broken redirects.",
          "Google Search Console is set up, verified and checked regularly.",
          "The site uses HTTPS, and its security certificate is current.",
        ],
      },
      {
        type: "paragraph",
        text: "These foundations are the subject of [technical SEO](/services/technical-seo) and [performance optimisation](/services/performance-optimisation).",
      },
      { type: "heading", text: "6. Measuring progress honestly" },
      {
        type: "list",
        items: [
          "Track calls, direction requests and website visits from the business profile.",
          "Use Search Console to see which searches the website appears for, and how often it is clicked.",
          "Record where enquiries come from in the CRM, so the business knows what actually produces customers.",
        ],
      },
      {
        type: "callout",
        title: "A realistic expectation",
        text: "Local SEO is cumulative. Corrections to the profile and listings can be made quickly, but their effect on visibility builds over weeks and months — and no one can honestly guarantee a particular position. Be wary of anyone who does.",
      },
      {
        type: "paragraph",
        text: "If you would like a structured view of where the business stands, our [Digital Estate Audit](/digital-estate-audit) reviews the profile, listings, reviews and website together, and sets out what deserves attention first.",
      },
    ],
    faqs: [
      {
        question: "What is local SEO?",
        answer:
          "Local SEO is the work of improving how a business appears in location-based searches, such as the map results shown for 'near me' searches. It covers the Google Business Profile, listings, reviews and the website.",
      },
      {
        question: "How long does local SEO take to work?",
        answer:
          "Simple corrections can take effect within weeks, but meaningful, lasting improvement usually builds over several months. It depends heavily on the competition in the area.",
      },
      {
        question: "Do I need a website for local SEO?",
        answer:
          "A Google Business Profile can appear in local results on its own, but a good website strengthens relevance and prominence, and gives customers somewhere to learn more and enquire.",
      },
      {
        question: "Can I do local SEO myself?",
        answer:
          "Much of it, yes — particularly completing the profile, keeping listings consistent and asking for reviews. Technical issues and competitive markets are where specialist help tends to be most useful.",
      },
    ],
  },
  {
    slug: "how-to-ask-customers-for-google-reviews",
    title: "How to Ask Customers for Google Reviews (Without Breaking the Rules)",
    seoTitle: "How to Ask Customers for Google Reviews (the Right Way)",
    description:
      "How to get more Google reviews ethically: when to ask, what to say, example messages, and the review-request practices Google's policies do not allow.",
    focusKeyword: "how to ask customers for google reviews",
    excerpt:
      "Most satisfied customers will leave a review if asked at the right moment and in the right way. Here is how to ask — and what not to do.",
    category: "Reputation",
    format: "guide",
    publishedAt: "2026-10-12",
    author: FIRM_BYLINE,
    image: "fountainPen",
    status: "draft",
    services: ["review-acquisition-workflows", "review-responses", "customer-feedback"],
    related: ["how-to-respond-to-negative-google-reviews", "local-seo-checklist-for-small-businesses"],
    body: [
      {
        type: "paragraph",
        text: "Most satisfied customers never think to leave a review. Unhappy ones are far more likely to write without being asked. Left alone, a business's public reputation is therefore shaped disproportionately by its worst experiences.",
      },
      {
        type: "paragraph",
        text: "The remedy is simple: ask every customer, consistently and courteously. Done properly, review requests produce a fuller and fairer picture of the business — and help with local search visibility too. Done improperly, they can breach Google's policies. This guide covers both.",
      },
      { type: "heading", text: "When to ask" },
      {
        type: "list",
        items: [
          "**When the experience is complete** — after the appointment, delivery or project, not before.",
          "**While it is still fresh** — usually within a day or two.",
          "**Every time** — the same request to every customer, rather than to a selected few.",
        ],
      },
      { type: "heading", text: "How to make it easy" },
      {
        type: "steps",
        items: [
          "Get your review link. In your Google Business Profile, look for the option to ask for reviews; it provides a short link that opens the review form directly.",
          "Choose the channel your customers already use with you — email, text message or a messaging app.",
          "Keep the message short, personal and polite (examples below).",
          "Send it at the agreed moment, ideally automatically so it never depends on someone remembering.",
          "Reply to the reviews you receive, so customers can see that their words are read.",
        ],
      },
      { type: "heading", text: "Example messages" },
      { type: "subheading", text: "By email" },
      {
        type: "quote",
        text: "Dear Fatima, thank you for choosing us for your kitchen renovation. If you have a moment, we would be grateful if you could share your experience in a short Google review — it helps other homeowners decide whether we are right for them. [link]. Thank you again, Bilal.",
      },
      { type: "subheading", text: "By text message" },
      {
        type: "quote",
        text: "Hi James, thanks for visiting us today. If you have a minute, we'd appreciate a quick Google review: [link]. Thank you! — The clinic team",
      },
      { type: "heading", text: "What Google's policies do not allow" },
      {
        type: "callout",
        title: "Avoid these practices",
        text: "Google's policies prohibit offering incentives (discounts, gifts or prize draws) in exchange for reviews; asking only customers you expect to be happy, or steering unhappy customers away from reviewing — often called 'review gating'; reviews written by the business, its staff or anyone with a conflict of interest; and buying reviews. Reviews obtained this way can be removed, and repeated breaches can lead to restrictions on the profile.",
      },
      {
        type: "paragraph",
        text: "It is perfectly acceptable — and wise — to ask for private feedback as well. Just do not use it to decide who is invited to leave a public review. Every customer should receive the same invitation. Our [customer feedback](/services/customer-feedback) service sets up private feedback alongside public reviews, properly.",
      },
      { type: "heading", text: "Turning it into a routine" },
      {
        type: "paragraph",
        text: "The businesses with the most complete review records are rarely the ones that ask hardest. They are the ones that ask every time. Connecting the request to the CRM or booking system — so it is sent automatically when a job is marked complete — makes that consistency effortless. This is what our [review acquisition workflows](/services/review-acquisition-workflows) are designed to do.",
      },
      {
        type: "paragraph",
        text: "More reviews also means occasional critical ones. That is normal, and it makes the favourable ones more credible. Our guide to [responding to negative reviews](/insights/how-to-respond-to-negative-google-reviews) covers what to do when they arrive.",
      },
    ],
    faqs: [
      {
        question: "Is it allowed to ask customers for Google reviews?",
        answer:
          "Yes. Google permits businesses to ask customers for reviews. What it does not allow is incentivising reviews, asking only happy customers, or discouraging critical ones.",
      },
      {
        question: "Can I offer a discount for leaving a review?",
        answer:
          "No. Offering any incentive in exchange for a review breaches Google's policies, even if the customer is free to say whatever they like.",
      },
      {
        question: "How do I get a direct link to my Google review form?",
        answer:
          "Sign in to your Google Business Profile and use the option to ask for reviews. It provides a short link you can share by email, text or message.",
      },
      {
        question: "What should I do if a customer leaves a bad review after I asked?",
        answer:
          "Reply calmly and helpfully, and try to resolve the issue directly. An honest mix of reviews, well answered, is more persuasive than a perfect score.",
      },
    ],
  },
  {
    slug: "website-maintenance-checklist",
    title: "Website Maintenance Checklist: What to Check Monthly, Quarterly and Yearly",
    seoTitle: "Website Maintenance Checklist: Monthly, Quarterly, Yearly",
    description:
      "A practical website maintenance checklist for businesses — updates, backups, forms, speed, security, domains and content — organised by how often to check.",
    focusKeyword: "website maintenance checklist",
    excerpt:
      "Websites rarely fail all at once. They deteriorate quietly. This checklist sets out what to look after, and how often, so problems are caught before customers find them.",
    category: "Digital Estate",
    format: "guide",
    publishedAt: "2026-10-11",
    author: FIRM_BYLINE,
    image: "colonnadeShadow",
    status: "draft",
    services: ["website-maintenance", "technical-upkeep", "performance-optimisation"],
    related: ["a-website-is-infrastructure-before-it-is-advertising", "local-seo-checklist-for-small-businesses"],
    body: [
      {
        type: "paragraph",
        text: "A website is not finished when it launches. Software falls out of date, forms stop delivering, links break, security certificates expire and content becomes inaccurate — usually without anyone in the business noticing until a customer mentions it.",
      },
      {
        type: "paragraph",
        text: "Regular maintenance prevents most of this. It is not complicated, but it is easy to neglect. The checklist below is organised by frequency, so that the right things are checked at the right intervals.",
      },
      { type: "heading", text: "Every month" },
      {
        type: "list",
        items: [
          "**Test every form** — submit the contact, enquiry and booking forms and confirm the messages actually arrive. A silent form is one of the costliest faults a website can have.",
          "**Apply software updates** — the content management system, themes and plugins. Back up first.",
          "**Check backups** — confirm they are running, and stored somewhere other than the website's own server.",
          "**Look for errors** — broken links and missing pages, using Google Search Console or a link checker.",
          "**Review key content** — opening hours, prices, team members, offers and anything time-sensitive.",
        ],
      },
      { type: "heading", text: "Every quarter" },
      {
        type: "list",
        items: [
          "**Restore a backup to test it.** A backup that has never been tested is a hope rather than a plan.",
          "**Check speed and mobile experience** — Google's Core Web Vitals measure loading (LCP), responsiveness (INP) and visual stability (CLS); Search Console reports on all three.",
          "**Review analytics** — are visitors arriving, and are they enquiring? Look for sudden drops.",
          "**Review user access** — remove logins for people who no longer need them, and make sure every account uses a strong, unique password with two-factor authentication where available.",
          "**Check search performance** — in Search Console, look for indexing problems and pages that have lost visibility.",
        ],
      },
      { type: "heading", text: "Every year" },
      {
        type: "list",
        items: [
          "**Domain renewal** — confirm the expiry date, that auto-renewal is on, and that the domain is registered in the business's own name.",
          "**Hosting review** — is the hosting still adequate for the site's traffic and speed, and is the plan fairly priced?",
          "**Security certificate** — confirm HTTPS works across the whole site and the certificate renews automatically.",
          "**Email authentication** — check that SPF, DKIM and DMARC records are set up, so the business's emails are not treated as spam.",
          "**Content review** — read every important page. Rewrite what is out of date, and remove what no longer serves a purpose.",
          "**Accessibility check** — can the site be used with a keyboard, with a screen reader and at larger text sizes?",
          "**Legal pages** — make sure the privacy notice and terms still reflect how the business operates.",
        ],
      },
      {
        type: "callout",
        title: "Keep a register",
        text: "Many website emergencies come down to one question: who has the login? Keep a simple, secure record of the domain registrar, hosting, content management system, analytics and email accounts — who controls each, and when each renews. Our [technical upkeep](/services/technical-upkeep) service maintains exactly this kind of register.",
      },
      { type: "heading", text: "Doing it yourself, or having it done" },
      {
        type: "paragraph",
        text: "Many of these checks can be done in-house with an hour or two each month, provided someone is responsible for them. Where nobody has the time, or the technical side is unfamiliar, a [maintenance arrangement](/services/website-maintenance) means the work happens on schedule rather than in an emergency.",
      },
      {
        type: "paragraph",
        text: "Either way, the principle is the one we set out in [A Website Is Infrastructure Before It Is Advertising](/insights/a-website-is-infrastructure-before-it-is-advertising): a website is part of the business's working premises, and it deserves the same routine care.",
      },
    ],
    faqs: [
      {
        question: "How often should a website be maintained?",
        answer:
          "Some checks are worth doing monthly (forms, updates, backups), others quarterly (speed, access, analytics) and others yearly (domain, hosting, content and legal pages). The checklist above sets out a sensible rhythm.",
      },
      {
        question: "What happens if a website is not maintained?",
        answer:
          "Typically, a gradual decline: slower pages, security vulnerabilities, broken forms and outdated content. Occasionally something fails outright, such as an expired domain or certificate taking the site offline.",
      },
      {
        question: "What are Core Web Vitals?",
        answer:
          "They are Google's measures of real-world page experience: Largest Contentful Paint (loading), Interaction to Next Paint (responsiveness) and Cumulative Layout Shift (visual stability).",
      },
      {
        question: "Should my domain be registered in my own name?",
        answer:
          "Yes. The domain should belong to the business, with its own account at the registrar. If a developer or agency registered it, ask for it to be transferred.",
      },
    ],
  },
];
