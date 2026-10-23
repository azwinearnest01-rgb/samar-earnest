import { capabilityHref } from "./capabilities";
import { formatServiceNumber, getServiceCapabilities, services } from "./services";

/**
 * Compact, serialisable navigation data for the Services menu. Built on the
 * server and passed to the header, so the full capability text is not sent
 * to the browser.
 */
export type MenuLink = { name: string; href: string };

export type ServicesMenuPractice = {
  slug: string;
  number: string;
  name: string;
  description: string;
  href: string;
  items: MenuLink[];
};

export type ServicesMenuData = {
  practices: ServicesMenuPractice[];
  engagements: MenuLink[];
};

export function getServicesMenu(): ServicesMenuData {
  return {
    practices: services.map((service) => ({
      slug: service.slug,
      number: formatServiceNumber(service.number),
      name: service.name,
      description: service.description,
      href: `/services#${service.slug}`,
      items: getServiceCapabilities(service).map((capability) => ({
        name: capability.name,
        href: capabilityHref(capability),
      })),
    })),
    engagements: [
      { name: "The Private Digital Office", href: "/private-digital-office" },
      { name: "The Digital Estate Audit", href: "/digital-estate-audit" },
    ],
  };
}
