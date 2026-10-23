"use client";

import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { type KeyboardEvent, useEffect, useId, useRef, useState } from "react";

import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { ServicesMenuData } from "@/content/navigation";
import { cn } from "@/lib/cn";

type ServicesMenuProps = {
  data: ServicesMenuData;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  active: boolean;
};

const OPEN_DELAY = 90;
const CLOSE_DELAY = 220;

/**
 * Desktop Services dropdown. The trigger is a disclosure button (click, Enter
 * or Space); mouse users may also open it by hovering. Inside, practices are a
 * vertical tab list (arrow keys move between them, Tab moves into the
 * capabilities). Escape, clicking outside or moving focus away closes it.
 */
export function ServicesMenu({ data, open, onOpenChange, active }: ServicesMenuProps) {
  const id = useId();
  const panelId = `services-panel-${id}`;
  const wrapperRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const timer = useRef<number | undefined>(undefined);
  const [current, setCurrent] = useState(0);

  const schedule = (next: boolean, delay: number) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => onOpenChange(next), delay);
  };

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // Close on outside click and on Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) onOpenChange(false);
    };
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = data.practices.length - 1;
    const next =
      event.key === "ArrowDown"
        ? index === last
          ? 0
          : index + 1
        : event.key === "ArrowUp"
          ? index === 0
            ? last
            : index - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    setCurrent(next);
    tabRefs.current[next]?.focus();
  };

  const practice = data.practices[current];

  return (
    <li
      ref={wrapperRef}
      onPointerEnter={(event) => event.pointerType === "mouse" && schedule(true, OPEN_DELAY)}
      onPointerLeave={(event) => event.pointerType === "mouse" && schedule(false, CLOSE_DELAY)}
      onBlur={(event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget as Node | null)) onOpenChange(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          window.clearTimeout(timer.current);
          onOpenChange(!open);
        }}
        className={cn(
          "link-underline inline-flex items-center gap-1.5 py-2 text-[0.875rem] font-medium tracking-[0.02em] whitespace-nowrap",
          (open || active) && "bg-[length:100%_1px]",
        )}
      >
        Services
        <svg
          aria-hidden="true"
          viewBox="0 0 10 6"
          className={cn("h-1.5 w-2.5 transition-transform duration-300", open && "rotate-180")}
        >
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>

      <AnimatePresence>
        {open ? (
          <m.div
            id={panelId}
            className="absolute inset-x-0 top-full border-t border-b border-ink/10 bg-ivory text-ink shadow-[0_24px_48px_-24px_rgba(23,33,29,0.35)]"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto grid max-h-[calc(100dvh-var(--header-height))] max-w-[90rem] grid-cols-12 gap-10 overflow-y-auto px-10 py-10 xl:px-16 3xl:max-w-[100rem]">
              <div className="hidden flex-col justify-between gap-8 border-r border-ink/10 pr-8 xl:col-span-3 xl:flex">
                <div>
                  <p className="eyebrow text-[0.6875rem] text-brass-deep">Services</p>
                  <p className="mt-4 font-display text-3xl leading-tight">What we offer.</p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">
                    Seven practices, each made up of specific services. Every one is explained in full.
                  </p>
                </div>
                <ul className="space-y-3 text-[0.95rem]">
                  <li>
                    <Link
                      href="/services"
                      className="group inline-flex items-center gap-3 font-semibold"
                      onClick={() => onOpenChange(false)}
                    >
                      <span className="link-underline group-hover:bg-[length:100%_1px]">All services</span>
                      <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  </li>
                  {data.engagements.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="link-underline" onClick={() => onOpenChange(false)}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                role="tablist"
                aria-orientation="vertical"
                aria-label="Practices"
                className="col-span-4 flex flex-col border-t border-ink/10 xl:col-span-3"
              >
                {data.practices.map((item, index) => {
                  const selected = index === current;
                  return (
                    <button
                      key={item.slug}
                      ref={(element) => {
                        tabRefs.current[index] = element;
                      }}
                      id={`${panelId}-tab-${index}`}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls={`${panelId}-tabpanel`}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => setCurrent(index)}
                      onPointerEnter={() => setCurrent(index)}
                      onKeyDown={(event) => onTabKey(event, index)}
                      className={cn(
                        "group flex items-baseline gap-4 border-b border-ink/10 py-3 text-left transition-colors duration-300",
                        selected ? "text-forest" : "text-ink/70 hover:text-ink",
                      )}
                    >
                      <span className="eyebrow tabular w-14 shrink-0 text-[0.625rem] text-brass-deep">
                        {item.number.replace("S&E / ", "")}
                      </span>
                      <span className="font-display text-xl">{item.name}</span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "ml-auto h-px w-6 self-center bg-current transition-all duration-500",
                          selected ? "opacity-100" : "w-0 opacity-0",
                        )}
                      />
                    </button>
                  );
                })}
              </div>

              {practice ? (
                <div
                  id={`${panelId}-tabpanel`}
                  role="tabpanel"
                  aria-labelledby={`${panelId}-tab-${current}`}
                  className="col-span-8 xl:col-span-6"
                >
                  <div className="flex items-end justify-between gap-6 border-b border-ink/10 pb-4">
                    <div>
                      <p className="eyebrow tabular text-[0.625rem] text-brass-deep">{practice.number}</p>
                      <p className="mt-2 font-serif text-lg italic text-ink/75">{practice.description}</p>
                    </div>
                    <Link
                      href={practice.href}
                      onClick={() => onOpenChange(false)}
                      className="group inline-flex shrink-0 items-center gap-3 text-[0.75rem] font-semibold tracking-[0.16em] uppercase"
                    >
                      <span className="link-underline group-hover:bg-[length:100%_1px]">Overview</span>
                      <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <ul className="mt-2 grid grid-cols-2 gap-x-8">
                    {practice.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => onOpenChange(false)}
                          className="group flex items-center justify-between gap-3 border-b border-ink/10 py-3 text-[0.95rem]"
                        >
                          <span className="link-underline group-hover:bg-[length:100%_1px]">{item.name}</span>
                          <ArrowIcon className="w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60 group-focus-visible:opacity-60" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[0.9rem] xl:hidden">
                    <Link
                      href="/services"
                      onClick={() => onOpenChange(false)}
                      className="group inline-flex items-center gap-3 font-semibold"
                    >
                      <span className="link-underline group-hover:bg-[length:100%_1px]">All services</span>
                      <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                    {data.engagements.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => onOpenChange(false)}
                        className="link-underline"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
