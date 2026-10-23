"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait after entering the viewport. */
  delay?: number;
  /** Vertical travel in pixels. */
  distance?: number;
  as?: "div" | "section" | "li" | "article" | "header";
};

const tags = {
  div: m.div,
  section: m.section,
  li: m.li,
  article: m.article,
  header: m.header,
} as const;

/**
 * Restrained fade-and-rise as content enters the viewport. Runs once.
 * Content is visible without JavaScript (see the <noscript> rule in the
 * root layout).
 */
export function Reveal({ children, className, delay = 0, distance = 18, as = "div" }: RevealProps) {
  const Component = tags[as];
  return (
    <Component
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
