import type { Capability } from "./types";

const practice = "systems-automation";

export const systemsAutomationCapabilities: Capability[] = [
  {
    slug: "crm-automation",
    name: "CRM automation",
    practice,
    summary:
      "Having the CRM carry out routine steps automatically, so the team can concentrate on the work that needs judgement.",
    overview: [
      "Much of the administration around customers is predictable: creating a task when a quotation is sent, updating a status when a booking is made, notifying a colleague when a customer replies.",
      "CRM automation handles these steps reliably and in the background. We automate only once the underlying process is clear and agreed — automating a muddled process simply produces muddle faster.",
    ],
    approach: [
      {
        title: "Document the process",
        detail: "We write down the steps as they should happen, before automating any of them.",
      },
      {
        title: "Select what to automate",
        detail: "We choose repetitive, rule-based steps that do not require judgement.",
      },
      { title: "Build and test", detail: "Automations are configured and tested with realistic examples." },
      { title: "Monitor", detail: "We check that automations continue to behave correctly as the business changes." },
    ],
    includes: [
      "Process documentation",
      "Automated tasks, status changes and notifications",
      "Testing with real scenarios",
      "A register of every automation and what it does",
    ],
    related: ["crm-configuration", "lead-routing", "automatic-follow-up"],
  },
  {
    slug: "lead-routing",
    name: "Lead routing",
    practice,
    summary: "Sending each new enquiry automatically to the right person, promptly.",
    overview: [
      "When enquiries arrive in a shared inbox, they wait for someone to notice them — and the longer an enquiry waits, the less likely it is to become a customer.",
      "Lead routing assigns each enquiry to the appropriate person as soon as it arrives, based on simple rules such as service, location, language or availability, and alerts them to respond.",
    ],
    approach: [
      {
        title: "Agree the rules",
        detail: "We define who should handle which kind of enquiry, and the fallback when they are unavailable.",
      },
      { title: "Connect the sources", detail: "Forms, calls and messages are brought into the CRM." },
      { title: "Route and alert", detail: "Enquiries are assigned automatically and the owner is notified." },
      { title: "Check response times", detail: "We measure how quickly routed enquiries are answered." },
    ],
    includes: [
      "Routing rules by service, area or availability",
      "Integration of enquiry sources",
      "Owner notifications",
      "Response-time reporting",
    ],
    related: ["lead-management", "crm-automation", "missed-call-workflows"],
  },
  {
    slug: "automatic-follow-up",
    name: "Automatic follow-up",
    practice,
    summary: "Timely follow-up messages sent automatically when a customer has not yet replied or taken the next step.",
    overview: [
      "Follow-up is often the first thing to slip when a team is busy. Automatic follow-up sends a courteous, well-timed message when an enquiry or quotation has gone unanswered — and stops as soon as the customer responds.",
      "The messages are written in the business's voice and kept few in number. The aim is to be helpful, not persistent.",
    ],
    approach: [
      {
        title: "Define the triggers",
        detail: "We agree which situations should prompt a follow-up and after how long.",
      },
      { title: "Write the messages", detail: "Short, personal-sounding messages are drafted for each stage." },
      { title: "Set stop conditions", detail: "Follow-up ends the moment a customer replies, books or declines." },
      { title: "Review", detail: "We check replies and adjust timing or wording where needed." },
    ],
    includes: ["Follow-up triggers and timings", "Message copy", "Automatic stop conditions", "Performance review"],
    related: ["customer-follow-up", "email-sequences", "crm-automation"],
  },
  {
    slug: "appointment-reminders",
    name: "Appointment reminders",
    practice,
    summary: "Automatic reminders before appointments, so customers attend and can easily reschedule if they cannot.",
    overview: [
      "Missed appointments cost a business time it cannot recover. Many are simply forgotten rather than deliberately skipped.",
      "We set up reminders by email or message at sensible intervals before each appointment, with a simple way for the customer to confirm, reschedule or cancel — giving the business time to offer the slot to someone else.",
    ],
    approach: [
      {
        title: "Set the schedule",
        detail: "We agree when reminders should be sent, for example a day and an hour before.",
      },
      {
        title: "Write the reminders",
        detail: "Messages include the essentials: time, place, preparation and how to change.",
      },
      {
        title: "Connect the calendar",
        detail: "Reminders are linked to the booking system so they always reflect the latest details.",
      },
      { title: "Track attendance", detail: "We monitor no-show rates and refine the approach." },
    ],
    includes: [
      "Reminder schedule",
      "Email and message templates",
      "Confirmation and rescheduling links",
      "No-show tracking",
    ],
    related: ["appointment-systems", "booking-systems", "missed-call-workflows"],
  },
  {
    slug: "missed-call-workflows",
    name: "Missed-call workflows",
    practice,
    summary: "Making sure an unanswered telephone call still receives a prompt response.",
    overview: [
      "For many businesses, the telephone remains the most important source of new enquiries — and calls are inevitably missed during appointments, out of hours or at busy times.",
      "A missed-call workflow records each unanswered call, can send the caller a polite message acknowledging it, and creates a task for someone to call back. No caller is left wondering whether anyone will respond.",
    ],
    approach: [
      { title: "Review the telephone set-up", detail: "We look at how calls are currently answered and recorded." },
      {
        title: "Capture missed calls",
        detail: "Unanswered calls are logged in the CRM automatically, where the telephone system allows.",
      },
      {
        title: "Acknowledge the caller",
        detail: "A short, courteous message can be sent to let them know they will be called back.",
      },
      { title: "Assign the callback", detail: "A task is created for the right person, with a time frame." },
    ],
    includes: [
      "Telephone system review",
      "Missed-call logging",
      "Acknowledgement message",
      "Callback tasks and reporting",
    ],
    note: "What is possible depends on the business's telephone provider; we will advise on this before any work begins.",
    related: ["lead-routing", "customer-follow-up", "integrations"],
  },
  {
    slug: "email-sequences",
    name: "Email sequences",
    practice,
    summary:
      "A short series of planned emails sent automatically to guide a new contact or customer through the next steps.",
    overview: [
      "Some moments call for more than a single message: welcoming a new client, preparing someone for their first appointment, or helping a new enquirer understand how the business works.",
      "An email sequence sends a small number of well-written messages at sensible intervals, each with a clear purpose, so that the customer is informed without the team having to remember to write.",
    ],
    approach: [
      { title: "Choose the journey", detail: "We identify where a sequence would genuinely help the customer." },
      { title: "Plan the messages", detail: "Each email is given one purpose and a place in the order." },
      { title: "Write and build", detail: "Emails are written, designed for phones and set up in the email platform." },
      { title: "Refine", detail: "Opens, replies and unsubscribes are reviewed and the sequence improved." },
    ],
    includes: ["Sequence planning", "Email copy and layout", "Automation set-up and testing", "Periodic review"],
    related: ["email-campaigns", "automatic-follow-up", "retention-workflows"],
  },
  {
    slug: "integrations",
    name: "Integrations",
    practice,
    summary: "Connecting the business's systems so that information moves between them without re-typing.",
    overview: [
      "Most businesses use several systems — a website, a CRM, an accounting package, a booking tool, an email platform — that do not talk to one another. Staff copy information from one to the next, and errors creep in.",
      "We connect these systems using their established integrations or, where needed, dependable custom connections, and document each one so the business knows how its information flows.",
    ],
    approach: [
      { title: "Map the systems", detail: "We record each system and the information that should pass between them." },
      {
        title: "Choose the method",
        detail: "We prefer native integrations, then established connectors, then custom work.",
      },
      { title: "Build and test", detail: "Connections are built and tested with real data." },
      { title: "Document and monitor", detail: "Each integration is documented and watched for failures." },
    ],
    includes: ["Systems and data-flow map", "Integration set-up", "Error alerts", "Integration documentation"],
    related: ["crm-automation", "technology-recommendations", "e-commerce"],
  },
];
