import { describe, expect, it } from "vitest";

import { capabilities, getCapability, getCapabilityPages } from "@/content/capabilities";
import { auditScope } from "@/content/engagements";
import { getServicesMenu } from "@/content/navigation";
import { images } from "@/content/images";
import { articles, getArticles, getReadingTime, getRelatedArticles } from "@/content/insights";
import { formatServiceNumber, getRelatedServices, services } from "@/content/services";
import { primaryNav } from "@/content/site";
import { founders } from "@/content/team";
import { isEnquiryArea } from "@/lib/enquiry";

const BANNED_PHRASES = [
  /10x/i,
  /dominate google/i,
  /supercharge/i,
  /game-changing/i,
  /unlock your potential/i,
  /crush your competition/i,
  /revolutionary/i,
  /cutting-edge/i,
  /results-driven/i,
  /guarantee(d)? (removal|results|rankings)/i,
];

const allCopy = JSON.stringify({ services, articles, auditScope, capabilities });

describe("services", () => {
  it("defines the seven practices in order with unique slugs", () => {
    expect(services).toHaveLength(7);
    expect(services.map((s) => s.number)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(new Set(services.map((s) => s.slug)).size).toBe(7);
  });

  it("formats numbers as S&E / 01", () => {
    expect(formatServiceNumber(1)).toBe("S&E / 01");
  });

  it("references only existing related services, images and enquiry areas", () => {
    for (const service of services) {
      expect(getRelatedServices(service)).toHaveLength(service.related.length);
      expect(images).toHaveProperty(service.image);
      expect(isEnquiryArea(service.enquiryArea)).toBe(true);
      expect(service.capabilities.length).toBeGreaterThan(0);
      expect(service.outcomes.length).toBeGreaterThan(0);
    }
  });

  it("offers platform review dispute assistance, never review removal", () => {
    const reputation = services.find((s) => s.slug === "reputation");
    expect(reputation?.capabilities).toContain("platform-review-dispute-assistance");
    const dispute = getCapability("platform-review-dispute-assistance");
    expect(dispute?.name).toBe("Platform Review Dispute Assistance");
    expect(dispute?.note).toMatch(/cannot remove legitimate reviews/i);
    expect(dispute?.note).toMatch(/do not guarantee/i);
  });
});

describe("capabilities", () => {
  it("has unique slugs, each belonging to a real practice", () => {
    expect(new Set(capabilities.map((c) => c.slug)).size).toBe(capabilities.length);
    for (const capability of capabilities) {
      expect(services.some((s) => s.slug === capability.practice)).toBe(true);
    }
  });

  it("resolves every capability a practice lists", () => {
    for (const service of services) {
      for (const slug of service.capabilities) expect(getCapability(slug), `${service.slug} → ${slug}`).toBeDefined();
    }
  });

  it("lists every capability under its own practice", () => {
    for (const capability of capabilities) {
      const practice = services.find((s) => s.slug === capability.practice);
      expect(practice?.capabilities, capability.slug).toContain(capability.slug);
    }
  });

  it("gives every capability page full content and valid related links", () => {
    for (const capability of getCapabilityPages()) {
      expect(capability.summary.length, capability.slug).toBeGreaterThan(30);
      expect(capability.overview.length, capability.slug).toBeGreaterThanOrEqual(2);
      expect(capability.approach.length, capability.slug).toBeGreaterThanOrEqual(3);
      expect(capability.includes.length, capability.slug).toBeGreaterThanOrEqual(3);
      for (const slug of capability.related ?? []) {
        expect(getCapability(slug), `${capability.slug} → ${slug}`).toBeDefined();
        expect(slug).not.toBe(capability.slug);
      }
    }
  });

  it("builds the Services menu with a link for every listed capability", () => {
    const menu = getServicesMenu();
    expect(menu.practices).toHaveLength(7);
    for (const practice of menu.practices) {
      const service = services.find((s) => s.slug === practice.slug);
      expect(practice.items).toHaveLength(service?.capabilities.length ?? -1);
      for (const item of practice.items) expect(item.href).toMatch(/^\/(services\/|digital-estate-audit)/);
    }
  });
});

describe("insights", () => {
  it("has unique slugs, valid images and valid related links", () => {
    expect(new Set(articles.map((a) => a.slug)).size).toBe(articles.length);
    for (const article of articles) {
      expect(images).toHaveProperty(article.image);
      expect(article.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      for (const slug of article.related ?? []) {
        expect(articles.some((a) => a.slug === slug)).toBe(true);
      }
      expect(getRelatedArticles(article).every((r) => r.slug !== article.slug)).toBe(true);
      expect(getReadingTime(article)).toBeGreaterThan(0);
    }
  });

  it("sorts newest first", () => {
    const dates = getArticles().map((a) => a.publishedAt);
    expect([...dates].sort().reverse()).toEqual(dates);
  });
});

describe("brand and truthfulness", () => {
  it("avoids the prohibited marketing language", () => {
    for (const phrase of BANNED_PHRASES) expect(allCopy).not.toMatch(phrase);
  });

  it("lists both founders without invented biographies", () => {
    expect(founders.map((f) => f.name)).toEqual(["Timotheous Samar", "Azwin Earnest"]);
    for (const founder of founders) expect(founder.biography).toEqual([]);
  });

  it("generates the primary navigation", () => {
    expect(primaryNav.map((item) => item.label)).toEqual([
      "The Firm",
      "Expertise",
      "Services",
      "Private Digital Office",
      "Insights",
      "Contact",
    ]);
  });
});
