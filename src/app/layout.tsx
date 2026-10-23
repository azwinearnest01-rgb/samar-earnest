import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Display, Libre_Caslon_Text, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { getServicesMenu } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { palette } from "@/theme/tokens";

import "./globals.css";

const caslonDisplay = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caslon-display",
});

const caslonText = Libre_Caslon_Text({
  weight: "400",
  style: ["italic"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-caslon-text",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.descriptor}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    types: { "application/rss+xml": [{ url: "/insights/rss.xml", title: `${siteConfig.name} — Insights` }] },
  },
  applicationName: siteConfig.name,
  // Google Search Console ownership check — set the code once the site is live.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: palette.ivory,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${caslonDisplay.variable} ${caslonText.variable} ${manrope.variable}`}>
      <head>
        {/* Without JavaScript, scroll reveals must not leave content hidden. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main-content"
          className="eyebrow fixed top-3 left-3 z-[60] -translate-y-20 bg-forest px-5 py-3 text-ivory transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader servicesMenu={getServicesMenu()} />
          <main id="main-content" data-page-chrome="" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
