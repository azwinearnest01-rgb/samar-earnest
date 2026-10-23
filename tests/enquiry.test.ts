import { describe, expect, it } from "vitest";

import {
  MIN_FILL_TIME_MS,
  emptyEnquiry,
  enquiryAreas,
  hasErrors,
  isEnquiryArea,
  normaliseEnquiry,
  validateEnquiry,
} from "@/lib/enquiry";
import { isRateLimited, looksAutomated } from "@/lib/spam";

const valid = {
  name: "Amina Khan",
  business: "Khan & Sons Trading",
  email: "amina@khanandsons.com",
  website: "khanandsons.com",
  area: "reputation",
  message: "We would like help responding to reviews and keeping our listings accurate.",
};

describe("validateEnquiry", () => {
  it("accepts a complete, valid enquiry", () => {
    expect(validateEnquiry(valid)).toEqual({});
  });

  it("requires every mandatory field", () => {
    const errors = validateEnquiry(emptyEnquiry);
    expect(Object.keys(errors).sort()).toEqual(["area", "business", "email", "message", "name"]);
  });

  it("treats website as optional but validates it when present", () => {
    expect(validateEnquiry({ ...valid, website: "" }).website).toBeUndefined();
    expect(validateEnquiry({ ...valid, website: "https://example.co.uk/about" }).website).toBeUndefined();
    expect(validateEnquiry({ ...valid, website: "not a website" }).website).toBeDefined();
  });

  it("rejects malformed email addresses", () => {
    for (const email of ["amina", "amina@", "amina@khan", "a b@c.com"]) {
      expect(validateEnquiry({ ...valid, email }).email).toBeDefined();
    }
  });

  it("rejects unknown areas and very short messages", () => {
    expect(validateEnquiry({ ...valid, area: "growth-hacking" }).area).toBeDefined();
    expect(validateEnquiry({ ...valid, message: "Hello" }).message).toBeDefined();
  });

  it("offers every service area plus the signature engagements", () => {
    const labels = enquiryAreas.map((area) => area.label);
    expect(labels).toContain("Private Digital Office");
    expect(labels).toContain("Digital Estate Audit");
    expect(labels.at(-1)).toBe("Other");
    expect(isEnquiryArea("advisory")).toBe(true);
    expect(isEnquiryArea(null)).toBe(false);
  });
});

describe("normaliseEnquiry", () => {
  it("trims values and drops unexpected or non-string input", () => {
    const result = normaliseEnquiry({ name: "  Amina  ", email: 42, extra: "ignored" });
    expect(result.name).toBe("Amina");
    expect(result.email).toBe("");
    expect(result).not.toHaveProperty("extra");
    expect(hasErrors(validateEnquiry(result))).toBe(true);
  });
});

describe("spam checks", () => {
  const now = 1_000_000;

  it("flags a filled honeypot", () => {
    expect(looksAutomated("http://spam", now - 60_000, now)).toBe(true);
  });

  it("flags missing or implausibly fast submissions", () => {
    expect(looksAutomated("", undefined, now)).toBe(true);
    expect(looksAutomated("", now - (MIN_FILL_TIME_MS - 1), now)).toBe(true);
  });

  it("allows a genuine submission", () => {
    expect(looksAutomated("", now - 45_000, now)).toBe(false);
  });

  it("rate-limits repeated submissions from one key", () => {
    const key = `test-${Math.random()}`;
    const results = Array.from({ length: 6 }, (_, i) => isRateLimited(key, now + i));
    expect(results.slice(0, 5).every((limited) => !limited)).toBe(true);
    expect(results[5]).toBe(true);
  });
});
