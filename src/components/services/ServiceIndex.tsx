"use client";

import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { EditorialImage } from "@/components/media/EditorialImage";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { MenuLink } from "@/content/navigation";
import { formatServiceNumber, type Service } from "@/content/services";
import { cn } from "@/lib/cn";

/** A practice plus the links to its capability pages (resolved on the server). */
export type ServiceIndexItem = Service & { links: MenuLink[] };

type ServiceIndexProps = {
  services: ServiceIndexItem[];
};

/**
 * Editorial index of the seven practices. Each row is a disclosure button
 * (works by tap, click and keyboard). On large screens, hovering or focusing
 * a row also changes the plate shown in the sticky image column.
 */
export function ServiceIndex({ services }: ServiceIndexProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug ?? "");
  // Only mount plates that have been requested, so images load on demand.
  const [seen, setSeen] = useState<Set<string>>(() => new Set(services[0] ? [services[0].slug] : []));

  const activate = (slug: string) => {
    setActiveSlug(slug);
    setSeen((previous) => (previous.has(slug) ? previous : new Set(previous).add(slug)));
  };

  const active = services.find((service) => service.slug === activeSlug) ?? services[0];

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <ol className="border-t border-ink/15 lg:col-span-7">
        {services.map((service) => {
          const open = openSlug === service.slug;
          const buttonId = `service-trigger-${service.slug}`;
          const panelId = `service-panel-${service.slug}`;
          return (
            <li
              key={service.slug}
              className="border-b border-ink/15"
              onMouseEnter={() => activate(service.slug)}
              onFocus={() => activate(service.slug)}
            >
              <h3 className="font-sans">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => {
                    activate(service.slug);
                    setOpenSlug(open ? null : service.slug);
                  }}
                  className="group grid w-full grid-cols-[1fr_auto] items-start gap-x-4 gap-y-3 py-7 text-left sm:grid-cols-[7.5rem_1fr_auto] md:py-9"
                >
                  <span className="eyebrow tabular col-span-2 pt-1 text-[0.6875rem] text-brass-deep sm:col-span-1 sm:pt-3">
                    {formatServiceNumber(service.number)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-display-4 transition-transform duration-500 ease-estate group-hover:translate-x-1.5">
                      {service.name}
                    </span>
                    <span className="mt-2 block text-[1rem] leading-relaxed text-ink/70">{service.description}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors duration-500 group-hover:border-forest group-hover:bg-forest group-hover:text-ivory sm:mt-3"
                  >
                    <span className="absolute h-px w-3 bg-current" />
                    <span
                      className={cn(
                        "absolute h-3 w-px bg-current transition-transform duration-500 ease-estate",
                        open && "scale-y-0",
                      )}
                    />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {open ? (
                  <m.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pb-10 sm:pl-[calc(7.5rem+1rem)]">
                      <EditorialImage
                        image={service.image}
                        ratio="aspect-[16/9]"
                        sizes="(min-width: 640px) 80vw, 100vw"
                        className="mb-8 lg:hidden"
                      />
                      <h4 className="eyebrow text-[0.6875rem] text-brass-deep">Capabilities</h4>
                      <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2.5 text-[0.95rem] text-ink/80">
                        {service.links.map((link, index) => (
                          <li key={link.href} className="flex items-center gap-2">
                            <Link href={link.href} className="link-prose hover:text-ink">
                              {link.name}
                            </Link>
                            {index < service.links.length - 1 ? (
                              <span aria-hidden="true" className="text-brass">
                                ·
                              </span>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                        <Link
                          href={`/services#${service.slug}`}
                          className="group/link inline-flex min-h-11 items-center gap-3 text-[0.8125rem] font-semibold tracking-[0.16em] uppercase"
                        >
                          <span className="link-underline group-hover/link:bg-[length:100%_1px]">
                            All {service.name} services
                          </span>
                          <ArrowIcon className="transition-transform duration-500 group-hover/link:translate-x-1.5" />
                        </Link>
                        <Link
                          href={`/contact?area=${service.enquiryArea}`}
                          className="link-underline inline-flex min-h-11 items-center text-[0.8125rem] font-semibold tracking-[0.16em] text-ink/70 uppercase hover:text-ink"
                        >
                          Enquire
                        </Link>
                      </div>
                    </div>
                  </m.div>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>

      <div aria-hidden="true" className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-[calc(var(--header-height)+2.5rem)]">
          <div className="relative aspect-[4/5] overflow-hidden bg-forest">
            {services
              .filter((service) => seen.has(service.slug))
              .map((service) => (
                <div
                  key={service.slug}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700 ease-estate",
                    service.slug === activeSlug ? "opacity-100" : "opacity-0",
                  )}
                >
                  <EditorialImage
                    image={service.image}
                    alt=""
                    sizes="(min-width: 1280px) 36vw, 40vw"
                    className="h-full"
                  />
                </div>
              ))}
          </div>
          {active ? (
            <p className="eyebrow mt-4 flex items-center gap-3 text-[0.6875rem] text-ink/70">
              <span className="h-px w-6 bg-current" />
              {formatServiceNumber(active.number)} — {active.name}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
