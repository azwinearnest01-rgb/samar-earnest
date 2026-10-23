/**
 * Enquiry form contract — shared by the client form and the API route so the
 * same rules are enforced on both sides.
 */

export const enquiryAreas = [
  { value: "client-relations", label: "Client Relations" },
  { value: "digital-estate", label: "Digital Estate" },
  { value: "search-discovery", label: "Search & Discovery" },
  { value: "editorial", label: "Editorial" },
  { value: "reputation", label: "Reputation" },
  { value: "systems-automation", label: "Systems & Automation" },
  { value: "advisory", label: "Advisory" },
  { value: "private-digital-office", label: "Private Digital Office" },
  { value: "digital-estate-audit", label: "Digital Estate Audit" },
  { value: "other", label: "Other" },
] as const;

export type EnquiryArea = (typeof enquiryAreas)[number]["value"];

export function isEnquiryArea(value: unknown): value is EnquiryArea {
  return typeof value === "string" && enquiryAreas.some((area) => area.value === value);
}

export function getEnquiryAreaLabel(value: EnquiryArea): string {
  return enquiryAreas.find((area) => area.value === value)?.label ?? value;
}

export type EnquiryFields = {
  name: string;
  business: string;
  email: string;
  website: string;
  area: string;
  message: string;
};

export type EnquiryField = keyof EnquiryFields;

export type Enquiry = Omit<EnquiryFields, "area"> & { area: EnquiryArea };

export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export const enquiryLimits = {
  name: { min: 2, max: 120 },
  business: { min: 2, max: 160 },
  email: { max: 254 },
  website: { max: 300 },
  message: { min: 20, max: 5000 },
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WEBSITE_PATTERN = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i;

export const emptyEnquiry: EnquiryFields = {
  name: "",
  business: "",
  email: "",
  website: "",
  area: "",
  message: "",
};

/** Trim string inputs and drop anything that is not an expected field. */
export function normaliseEnquiry(input: Partial<Record<string, unknown>>): EnquiryFields {
  const read = (key: EnquiryField) => {
    const value = input[key];
    return typeof value === "string" ? value.trim() : "";
  };
  return {
    name: read("name"),
    business: read("business"),
    email: read("email"),
    website: read("website"),
    area: read("area"),
    message: read("message"),
  };
}

export function validateEnquiry(fields: EnquiryFields): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const { name, business, email, website, area, message } = fields;

  if (!name) errors.name = "Please tell us your name.";
  else if (name.length < enquiryLimits.name.min) errors.name = "Please enter your full name.";
  else if (name.length > enquiryLimits.name.max) errors.name = "Please shorten your name.";

  if (!business) errors.business = "Please tell us the name of the business.";
  else if (business.length < enquiryLimits.business.min) errors.business = "Please enter the business name.";
  else if (business.length > enquiryLimits.business.max) errors.business = "Please shorten the business name.";

  if (!email) errors.email = "Please provide an email address so we can reply.";
  else if (email.length > enquiryLimits.email.max || !EMAIL_PATTERN.test(email))
    errors.email = "Please enter a valid email address, for example name@business.com.";

  if (website && (website.length > enquiryLimits.website.max || !WEBSITE_PATTERN.test(website)))
    errors.website = "Please enter a valid web address, for example business.com.";

  if (!area) errors.area = "Please choose the area requiring attention.";
  else if (!isEnquiryArea(area)) errors.area = "Please choose one of the listed areas.";

  if (!message) errors.message = "Please tell us a little about the business.";
  else if (message.length < enquiryLimits.message.min)
    errors.message = `Please write at least ${enquiryLimits.message.min} characters so we can understand the context.`;
  else if (message.length > enquiryLimits.message.max)
    errors.message = `Please keep the message under ${enquiryLimits.message.max} characters.`;

  return errors;
}

export function hasErrors(errors: EnquiryErrors): boolean {
  return Object.keys(errors).length > 0;
}

/** Order used for the error summary and focus management. */
export const enquiryFieldOrder: EnquiryField[] = ["name", "business", "email", "website", "area", "message"];

/** Spam-prevention fields sent alongside the enquiry. */
export const HONEYPOT_FIELD = "fax_number";
export const STARTED_AT_FIELD = "started_at";
/** Submissions faster than this are almost certainly automated. */
export const MIN_FILL_TIME_MS = 3000;

export type EnquiryResponse =
  | { ok: true }
  | {
      ok: false;
      code: "invalid" | "spam" | "rate_limited" | "not_configured" | "delivery_failed" | "bad_request";
      message: string;
      errors?: EnquiryErrors;
    };
