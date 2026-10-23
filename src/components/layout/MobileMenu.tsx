"use client";

import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { type RefObject, useCallback, useEffect, useId, useRef, useState } from "react";

import { Seal } from "@/components/brand/Seal";
import { Wordmark } from "@/components/brand/Wordmark";
import { ButtonLink } from "@/components/ui/Button";
import type { ServicesMenuData } from "@/content/navigation";
import { enquiryCta, primaryNav, siteConfig } from "@/content/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
  pathname: string;
  servicesMenu: ServicesMenuData;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Full-screen Forest overlay for small and medium screens.
 * Modal dialog semantics: focus is trapped, Escape closes, page scroll is
 * locked, and focus returns to the menu button afterwards.
 */
const linkLabel =
  "font-display text-[clamp(1.75rem,1rem+3.6vw,3.25rem)] leading-[1.1] transition-colors duration-300 group-hover:text-brass group-aria-[current=page]:text-brass";

/** The Services row: a link plus a toggle revealing the seven practices. */
function ServicesItem({
  index,
  current,
  data,
  onNavigate,
}: {
  index: number;
  current: boolean;
  data: ServicesMenuData;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/services"
          onClick={onNavigate}
          aria-current={current ? "page" : undefined}
          className="group flex items-baseline gap-4 py-4 sm:gap-6 md:py-5"
        >
          <span className="eyebrow tabular w-6 shrink-0 text-[0.6875rem] text-brass">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={linkLabel}>Services</span>
        </Link>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((value) => !value)}
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/25"
        >
          <span className="sr-only">{expanded ? "Hide" : "Show"} the practices</span>
          <span aria-hidden="true" className="absolute h-px w-3.5 bg-current" />
          <span
            aria-hidden="true"
            className={`absolute h-3.5 w-px bg-current transition-transform duration-300 ${expanded ? "scale-y-0" : ""}`}
          />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {expanded ? (
          <m.ul
            id={listId}
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {data.practices.map((practice) => (
              <li key={practice.slug}>
                <Link
                  href={practice.href}
                  onClick={onNavigate}
                  className="flex items-baseline justify-between gap-4 border-t border-ivory/10 py-3 pl-10 sm:pl-12"
                >
                  <span className="text-lg text-ivory/90">{practice.name}</span>
                  <span className="eyebrow shrink-0 text-[0.625rem] text-ivory/60">
                    {practice.items.length} services
                  </span>
                </Link>
              </li>
            ))}
            {data.engagements.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="block border-t border-ivory/10 py-3 pl-10 text-lg text-brass sm:pl-12"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pb-4" />
          </m.ul>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function MobileMenu({ open, onClose, returnFocusRef, pathname, servicesMenu }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    const returnTarget = returnFocusRef.current;
    const root = document.documentElement;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const previousOverflow = root.style.overflow;
    const previousPadding = root.style.paddingRight;
    root.style.overflow = "hidden";
    if (scrollbarWidth > 0) root.style.paddingRight = `${scrollbarWidth}px`;

    // Hide the rest of the page from assistive technology and keyboard focus.
    const background = Array.from(document.querySelectorAll<HTMLElement>("[data-page-chrome]"));
    background.forEach((element) => element.setAttribute("inert", ""));

    closeRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    // Close if the viewport grows to desktop width while open.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };
    desktop.addEventListener("change", onChange);

    return () => {
      root.style.overflow = previousOverflow;
      root.style.paddingRight = previousPadding;
      background.forEach((element) => element.removeAttribute("inert"));
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", onChange);
      returnTarget?.focus();
    };
  }, [open, handleKeyDown, onClose, returnFocusRef]);

  return (
    <AnimatePresence>
      {open ? (
        <m.div
          ref={dialogRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="theme-dark fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain lg:hidden"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Seal className="pointer-events-none absolute -right-16 bottom-10 h-[22rem] w-auto text-ivory/[0.05] sm:h-[30rem]" />

          <div className="flex h-[var(--header-height)] shrink-0 items-center justify-between px-5 sm:px-8 md:px-10">
            <Link href="/" onClick={onClose} aria-label="Samar & Earnest — home">
              <Wordmark size="md" />
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="-mr-2 inline-flex min-h-11 min-w-11 items-center gap-3 px-2"
            >
              <span className="eyebrow text-[0.6875rem]">Close</span>
              <span aria-hidden="true" className="relative block h-4 w-5">
                <span className="absolute top-1/2 left-0 h-px w-full rotate-45 bg-current" />
                <span className="absolute top-1/2 left-0 h-px w-full -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav aria-label="Menu" className="relative flex flex-1 flex-col px-5 pt-6 pb-10 sm:px-8 md:px-10 md:pt-12">
            <ol className="border-t border-ivory/15">
              {primaryNav.map((item, index) => {
                const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <m.li
                    key={item.href}
                    className="border-b border-ivory/15"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + index * 0.06, duration: 0.6 }}
                  >
                    {item.menu === "services" ? (
                      <ServicesItem index={index} current={current} data={servicesMenu} onNavigate={onClose} />
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={current ? "page" : undefined}
                        className="group flex items-baseline gap-4 py-4 sm:gap-6 md:py-5"
                      >
                        <span className="eyebrow tabular w-6 shrink-0 text-[0.6875rem] text-brass">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={linkLabel}>{item.label}</span>
                      </Link>
                    )}
                  </m.li>
                );
              })}
            </ol>

            <m.div
              className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <ButtonLink href={enquiryCta.href} tone="dark" onClick={onClose} fullWidthOnMobile>
                {enquiryCta.label}
              </ButtonLink>
              <div className="text-sm text-ivory/70">
                <p className="font-serif italic">{siteConfig.tagline}</p>
                <p className="mt-1">{siteConfig.origin}</p>
              </div>
            </m.div>
          </nav>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
