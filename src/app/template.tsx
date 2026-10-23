"use client";

import { useEffect, useState } from "react";

// Shared across template instances: false only until the first page has mounted.
let hasMounted = false;

/**
 * Page transition: routes fade in gently on client-side navigation. The first
 * page load is not animated, so it never delays the Largest Contentful Paint.
 * Pure CSS, and disabled by the reduced-motion rule in globals.css.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const [animate] = useState(hasMounted);

  useEffect(() => {
    hasMounted = true;
  }, []);

  return <div className={animate ? "animate-page-in" : undefined}>{children}</div>;
}
