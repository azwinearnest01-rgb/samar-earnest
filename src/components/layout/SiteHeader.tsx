"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Wordmark } from "@/components/brand/Wordmark";
import { ButtonLink } from "@/components/ui/Button";
import type { ServicesMenuData } from "@/content/navigation";
import { darkHeroRoutes, enquiryCta, primaryNav } from "@/content/site";
import { cn } from "@/lib/cn";

import { MobileMenu } from "./MobileMenu";
import { ServicesMenu } from "./ServicesMenu";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Understated header. Transparent at the top of the page (inverting over dark
 * heroes) and settling into a solid Ivory bar once the visitor scrolls.
 */
export function SiteHeader({ servicesMenu }: { servicesMenu: ServicesMenuData }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  // The header is solid while scrolled or while the Services panel is open.
  const solid = scrolled || servicesOpen;
  const overDark = !solid && (darkHeroRoutes as readonly string[]).includes(pathname);
  const tone = overDark ? "dark" : "light";

  return (
    <>
      <header
        data-page-chrome=""
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,color,box-shadow] duration-500 ease-estate",
          servicesOpen
            ? "border-b border-ink/10 bg-ivory text-ink"
            : solid
              ? "border-b border-ink/10 bg-ivory/95 text-ink backdrop-blur-sm supports-[backdrop-filter]:bg-ivory/85"
              : "border-b border-transparent bg-transparent",
          overDark ? "text-ivory [--focus-ring:var(--color-brass)]" : "text-ink",
        )}
      >
        <div className="mx-auto flex h-[var(--header-height)] w-full max-w-[90rem] items-center justify-between gap-6 px-5 sm:px-8 md:px-10 xl:px-16 3xl:max-w-[100rem]">
          <Link
            href="/"
            className="relative z-10 -my-2 py-2"
            aria-label="Samar & Earnest — home"
            aria-current={pathname === "/" ? "page" : undefined}
          >
            <Wordmark size="md" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-8">
              {primaryNav.map((item) =>
                item.menu === "services" ? (
                  <ServicesMenu
                    key={item.href}
                    data={servicesMenu}
                    open={servicesOpen}
                    onOpenChange={setServicesOpen}
                    active={isActive(pathname, item.href)}
                  />
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className="link-underline py-2 text-[0.875rem] font-medium tracking-[0.02em] whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Hidden at the narrowest desktop width, where Contact in the nav serves the same purpose. */}
          <div className="hidden xl:block">
            <ButtonLink
              href={enquiryCta.href}
              tone={tone}
              variant="outline"
              arrow={false}
              className="min-h-11 px-5 sm:px-5"
            >
              {enquiryCta.label}
            </ButtonLink>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="relative z-10 -mr-2 inline-flex min-h-11 min-w-11 items-center gap-3 px-2 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="dialog"
            onClick={() => setMenuOpen(true)}
          >
            <span className="eyebrow text-[0.6875rem]">Menu</span>
            <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-2/3 self-end bg-current" />
            </span>
          </button>
        </div>
      </header>

      {/* Soft backdrop behind the Services panel; clicking it closes the panel. */}
      <div
        aria-hidden="true"
        onClick={() => setServicesOpen(false)}
        className={cn(
          "fixed inset-0 z-30 hidden bg-forest/25 transition-opacity duration-500 lg:block",
          servicesOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Rendered outside <header>: its backdrop-filter would otherwise contain the fixed overlay. */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        returnFocusRef={menuButtonRef}
        pathname={pathname}
        servicesMenu={servicesMenu}
      />
    </>
  );
}
