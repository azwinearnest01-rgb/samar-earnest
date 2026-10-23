import { advisoryCapabilities } from "./advisory";
import { clientRelationsCapabilities } from "./client-relations";
import { digitalEstateCapabilities } from "./digital-estate";
import { editorialCapabilities } from "./editorial";
import { reputationCapabilities } from "./reputation";
import { searchDiscoveryCapabilities } from "./search-discovery";
import { systemsAutomationCapabilities } from "./systems-automation";
import type { Capability } from "./types";

export type { Capability, CapabilityStep } from "./types";

/**
 * The capability catalogue. Each capability lives in its practice's file and
 * gets a page at /services/[slug]. A practice lists which capabilities it
 * offers (by slug) in src/content/services.ts — a capability may appear under
 * more than one practice, but belongs to one.
 */
export const capabilities: Capability[] = [
  ...clientRelationsCapabilities,
  ...digitalEstateCapabilities,
  ...searchDiscoveryCapabilities,
  ...editorialCapabilities,
  ...reputationCapabilities,
  ...systemsAutomationCapabilities,
  ...advisoryCapabilities,
];

const bySlug = new Map(capabilities.map((capability) => [capability.slug, capability]));

export function getCapability(slug: string): Capability | undefined {
  return bySlug.get(slug);
}

/** Resolve a list of slugs, skipping any that do not exist. */
export function getCapabilities(slugs: string[]): Capability[] {
  return slugs.map((slug) => bySlug.get(slug)).filter((item): item is Capability => Boolean(item));
}

/** Capabilities that have their own page under /services. */
export function getCapabilityPages(): Capability[] {
  return capabilities.filter((capability) => !capability.href);
}

export function capabilityHref(capability: Capability): string {
  return capability.href ?? `/services/${capability.slug}`;
}
