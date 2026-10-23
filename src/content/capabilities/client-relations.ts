import type { Capability } from "./types";

const practice = "client-relations";

export const clientRelationsCapabilities: Capability[] = [
  {
    slug: "crm-implementation",
    name: "CRM implementation",
    practice,
    summary:
      "Choosing, setting up and introducing a customer relationship system that fits how the business actually works.",
    overview: [
      "A CRM — customer relationship management system — is the central record of everyone the business deals with: who they are, what they have asked, what they have bought and what should happen next.",
      "Implementation is where most CRM projects succeed or fail. A system chosen for its feature list, then switched on without regard to how the team works, is quietly abandoned within months. We treat implementation as a change in how the business keeps its records, not as a software installation.",
    ],
    approach: [
      {
        title: "Understand the work",
        detail: "We map how enquiries arrive, who handles them, what is recorded today and where things are lost.",
      },
      {
        title: "Recommend a system",
        detail:
          "We suggest a platform proportionate to the size and needs of the business, explaining the reasoning and the costs.",
      },
      {
        title: "Build the foundations",
        detail:
          "Records, stages, fields and permissions are set up to mirror the real process, and existing data is imported and cleaned.",
      },
      {
        title: "Introduce it properly",
        detail: "The team is shown how to use it in their own daily work, with written guidance they can return to.",
      },
    ],
    includes: [
      "Process review and requirements",
      "Platform recommendation with rationale",
      "Set-up of records, pipelines and user access",
      "Data migration from spreadsheets, inboxes or an old system",
      "Team onboarding and written guidance",
    ],
    related: ["crm-configuration", "customer-databases", "crm-assessments"],
  },
  {
    slug: "crm-configuration",
    name: "CRM configuration",
    practice,
    summary:
      "Adjusting an existing CRM so that it reflects the business as it is today, rather than as it was when it was set up.",
    overview: [
      "Many businesses already own a CRM that nobody quite trusts. Fields are unused, stages no longer match the sales process, and reports show figures that do not agree with reality.",
      "Configuration is the careful work of bringing an existing system back into line: removing what is not needed, adding what is missing, and making the system easier to keep accurate.",
    ],
    approach: [
      {
        title: "Review the current set-up",
        detail: "We examine how the system is configured and how it is actually being used by the team.",
      },
      {
        title: "Agree the changes",
        detail: "We propose a clear list of adjustments, explaining what each one improves.",
      },
      {
        title: "Reconfigure carefully",
        detail: "Changes are made without losing historic records, and tested before the team relies on them.",
      },
      {
        title: "Document the result",
        detail: "A short written record explains how the system is now organised and why.",
      },
    ],
    includes: [
      "Audit of fields, stages, views and permissions",
      "Pipeline and status redesign",
      "Required fields and validation to keep records complete",
      "Saved views and dashboards for each role",
      "Configuration notes for future reference",
    ],
    related: ["crm-implementation", "crm-automation", "reporting"],
  },
  {
    slug: "customer-databases",
    name: "Customer databases",
    practice,
    summary: "Building and maintaining a clean, accurate record of customers that the business can rely upon.",
    overview: [
      "Customer information tends to accumulate in many places at once: an accounting package, a booking tool, a spreadsheet, several inboxes. Over time the same customer appears five times with three different telephone numbers.",
      "We consolidate these records into one dependable database, and put simple rules in place so that it stays dependable. Accurate records are the foundation for every other form of customer communication.",
    ],
    approach: [
      { title: "Gather the sources", detail: "We identify every place customer information is currently held." },
      { title: "Consolidate and clean", detail: "Records are merged, duplicates removed and formats made consistent." },
      {
        title: "Set standards",
        detail: "We agree what must be recorded for each customer and how it should be entered.",
      },
      { title: "Keep it in order", detail: "Periodic checks catch duplicates and gaps before they spread." },
    ],
    includes: [
      "Data audit across existing sources",
      "De-duplication and standardisation",
      "Agreed record structure and naming conventions",
      "Consent and contact-preference fields",
      "Ongoing data-quality checks",
    ],
    note: "Customer data is handled in line with the business's privacy obligations; we will ask about these before any data is moved.",
    related: ["crm-implementation", "lead-management", "reporting"],
  },
  {
    slug: "lead-management",
    name: "Lead management",
    practice,
    summary: "A clear, consistent process for capturing, qualifying and progressing every new enquiry.",
    overview: [
      "A lead is simply someone who has shown interest. Lead management is the discipline of making sure each one is recorded, assessed and answered — rather than left to whoever happens to see it first.",
      "We design the route an enquiry takes from the moment it arrives until it becomes a customer or is closed, so that nothing depends on memory and everyone can see what stage each opportunity has reached.",
    ],
    approach: [
      {
        title: "Capture every source",
        detail: "Website forms, calls, emails, messages and listings are brought into one place.",
      },
      {
        title: "Define the stages",
        detail: "We agree what 'new', 'contacted', 'qualified' and 'won' mean for this business.",
      },
      { title: "Assign responsibility", detail: "Each lead has an owner and a next step, visible to the team." },
      {
        title: "Review regularly",
        detail: "Stalled leads are surfaced so they can be followed up or closed honestly.",
      },
    ],
    includes: [
      "Enquiry capture from all channels",
      "Lead stages and qualification criteria",
      "Ownership and next-step rules",
      "Pipeline views for the team",
      "Source tracking, so the business knows where enquiries come from",
    ],
    related: ["lead-routing", "customer-follow-up", "conversion-analysis"],
  },
  {
    slug: "customer-follow-up",
    name: "Customer follow-up",
    practice,
    summary: "Making sure every enquiry, quotation and conversation receives a timely and appropriate next step.",
    overview: [
      "Many opportunities are not lost to competitors. They are lost to silence — a quotation sent and never mentioned again, a question answered once and then forgotten.",
      "We establish follow-up routines that are courteous and consistent: what is said, when, by whom, and when it is right to stop. Where sensible, parts of this can later be automated.",
    ],
    approach: [
      {
        title: "Identify the moments",
        detail: "We list the points at which a customer should hear from the business.",
      },
      {
        title: "Write the messages",
        detail: "Templates are drafted in the business's own voice, to be personalised rather than sent blindly.",
      },
      { title: "Set the timing", detail: "Reminders and tasks ensure each follow-up happens when it should." },
      { title: "Measure the gaps", detail: "Simple reporting shows which enquiries are waiting too long for a reply." },
    ],
    includes: [
      "Follow-up schedule for enquiries and quotations",
      "Message templates in the business's voice",
      "Task reminders within the CRM",
      "Response-time reporting",
    ],
    related: ["automatic-follow-up", "lead-management", "client-communication"],
  },
  {
    slug: "retention-workflows",
    name: "Retention workflows",
    practice,
    summary:
      "Planned, considerate contact with existing customers so that they are looked after long after the first sale.",
    overview: [
      "Most businesses spend far more effort winning customers than keeping them. Yet an existing customer already knows and trusts the business, and is usually the most valuable relationship it has.",
      "Retention workflows are the routines that keep that relationship in good order: checking in after a purchase, reminding customers when a service is due, and noticing when someone has gone quiet.",
    ],
    approach: [
      {
        title: "Understand the customer lifecycle",
        detail: "We look at how and when customers typically return — or stop returning.",
      },
      {
        title: "Design the touchpoints",
        detail: "We plan useful, unintrusive moments of contact at the right intervals.",
      },
      {
        title: "Build the workflow",
        detail: "Tasks and messages are set up in the CRM, with clear rules for when each applies.",
      },
      {
        title: "Review and refine",
        detail: "We watch how customers respond and adjust the timing and content accordingly.",
      },
    ],
    includes: [
      "Customer lifecycle mapping",
      "After-sale and service-due communications",
      "Lapsed-customer alerts",
      "Workflow set-up in the CRM",
      "Periodic review of what is working",
    ],
    related: ["reactivation-campaigns", "client-communication", "email-sequences"],
  },
  {
    slug: "reactivation-campaigns",
    name: "Reactivation campaigns",
    practice,
    summary: "Respectfully re-establishing contact with past customers and enquiries that have gone quiet.",
    overview: [
      "Every established business has a list of people who once bought, enquired or booked, and have not been heard from since. Many would return if simply asked at the right moment and in the right way.",
      "A reactivation campaign is a considered, one-off or periodic approach to these contacts. It is not a blast of promotional email; it is a well-judged message to people who already know the business.",
    ],
    approach: [
      {
        title: "Segment the list",
        detail: "We separate former customers, unconverted enquiries and others, as each needs a different approach.",
      },
      { title: "Check permissions", detail: "Only those the business may properly contact are included." },
      { title: "Write and send", detail: "Messages are written for each group and sent in measured batches." },
      { title: "Handle the replies", detail: "Responses are routed to the right person and recorded in the CRM." },
    ],
    includes: [
      "Segmentation of past customers and enquiries",
      "Permission and preference checks",
      "Campaign copy for each segment",
      "Sending, reply handling and recording",
      "A short written summary of results",
    ],
    note: "We do not purchase lists or contact people who have not had a relationship with the business.",
    related: ["retention-workflows", "email-campaigns", "customer-databases"],
  },
  {
    slug: "appointment-systems",
    name: "Appointment systems",
    practice,
    summary:
      "Online booking and scheduling arranged so that customers can book easily and the business keeps control of its time.",
    overview: [
      "For clinics, consultancies, salons, trades and many others, the appointment is the business. Asking customers to telephone during office hours, or to wait for an email reply, loses bookings.",
      "We set up appointment systems that let customers book suitable times themselves, while respecting the business's availability, preparation time and rules — and that feed every booking into the customer record.",
    ],
    approach: [
      { title: "Define the rules", detail: "Services, durations, buffers, staff and availability are agreed first." },
      { title: "Configure the system", detail: "A booking tool is set up and connected to calendars and the CRM." },
      {
        title: "Place it well",
        detail: "Booking is made available on the website, business profile and messages where appropriate.",
      },
      { title: "Reduce no-shows", detail: "Confirmations and reminders are arranged so customers attend as planned." },
    ],
    includes: [
      "Booking rules, services and staff calendars",
      "Booking tool set-up and calendar sync",
      "Website and Google Business Profile booking links",
      "Confirmation and reminder messages",
      "Recording of bookings in the CRM",
    ],
    related: ["booking-systems", "appointment-reminders", "missed-call-workflows"],
  },
  {
    slug: "client-communication",
    name: "Client communication",
    practice,
    summary: "Clear, consistent standards for how the business writes to and speaks with its clients.",
    overview: [
      "Clients judge a business by how it communicates: how quickly it replies, how clearly it explains, and whether it keeps them informed without being asked.",
      "We help businesses set communication standards and prepare the materials that support them — templates, response guidelines and update routines — so that every client receives the same considered treatment, whoever is handling their account.",
    ],
    approach: [
      { title: "Listen to current practice", detail: "We review real examples of emails, messages and responses." },
      {
        title: "Set standards",
        detail: "We agree response times, tone and what clients should be told at each stage.",
      },
      { title: "Prepare the materials", detail: "Templates and guidance are written for the most common situations." },
      { title: "Embed them", detail: "Templates are made available inside the tools the team already uses." },
    ],
    includes: [
      "Review of current client correspondence",
      "Response-time and tone guidelines",
      "Template library for common situations",
      "Client update routines for longer engagements",
    ],
    related: ["customer-follow-up", "complaint-workflows", "editing"],
  },
  {
    slug: "reporting",
    name: "Reporting",
    practice,
    summary: "Plain, reliable reports that show how enquiries, customers and relationships are actually faring.",
    overview: [
      "A business cannot manage what it cannot see. Yet many CRM reports are either empty, misleading or so detailed that nobody reads them.",
      "We build a small number of reports that answer real questions — how many enquiries arrived, how quickly they were answered, how many became customers, and which customers need attention — and, where useful, have them produced automatically.",
    ],
    approach: [
      { title: "Agree the questions", detail: "We begin with what the owners and team actually need to know." },
      {
        title: "Check the data",
        detail: "We make sure the underlying records are complete enough to report on honestly.",
      },
      { title: "Build the reports", detail: "Dashboards and summaries are created in the CRM or a reporting tool." },
      {
        title: "Schedule delivery",
        detail: "Reports are sent automatically at an agreed rhythm, with a short commentary where helpful.",
      },
    ],
    includes: [
      "Definition of key measures",
      "Dashboards for owners and team members",
      "Automated weekly or monthly summaries",
      "Notes explaining how each figure is calculated",
    ],
    related: ["analytics", "crm-configuration", "conversion-analysis"],
  },
];
