# Samar & Earnest — website

[![Quality checks](https://github.com/azwinearnest01-rgb/samar-earnest/actions/workflows/ci.yml/badge.svg)](https://github.com/azwinearnest01-rgb/samar-earnest/actions/workflows/ci.yml)

*Business, carefully maintained.*

The website of Samar & Earnest, an independent digital advisory firm founded in Pakistan and working internationally.

Built with Next.js 16 (App Router, Cache Components), React 19, TypeScript, Tailwind CSS 4 and Framer Motion.

---

## Getting started

Requirements: Node.js 20.9 or later (developed on Node 24).

```bash
npm install
cp .env.example .env.local   # then fill in values (see below)
npm run dev                  # http://localhost:3000
```

| Script              | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Development server                              |
| `npm run build`     | Production build (all pages prerendered)        |
| `npm start`         | Serve the production build                      |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript)   |
| `npm run typecheck` | Generate route types and run `tsc`              |
| `npm test`          | Unit tests (Vitest): validation, spam, content  |
| `npm run check`     | Lint, type-check and test in one go             |

## Environment variables

See [`.env.example`](.env.example).

| Variable                                    | Required             | Notes                                                                 |
| ------------------------------------------- | -------------------- | --------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                      | Yes, in production   | Canonical URLs, sitemap, Open Graph. Defaults to `http://localhost:3000`. |
| `NEXT_PUBLIC_CONTACT_EMAIL`                 | Yes, before launch   | Public address. Until set, a labelled placeholder is shown.           |
| `ENQUIRY_WEBHOOK_URL` / `ENQUIRY_WEBHOOK_SECRET` | One delivery option | POSTs each enquiry as JSON.                                          |
| `RESEND_API_KEY` / `ENQUIRY_TO_EMAIL` / `ENQUIRY_FROM_EMAIL` | One delivery option | Emails each enquiry via Resend's HTTP API.                 |

## Deployment

The site is a standard Next.js application.

**Vercel (simplest):** import the repository, set the environment variables above for the Production environment, and deploy. No further configuration is needed.

**Self-hosted (Node):**

```bash
npm ci
npm run build
NODE_ENV=production npm start   # listens on port 3000; place behind a reverse proxy with TLS
```

Cache Components requires the Node.js runtime (not Edge). After deploying, confirm that `/robots.txt` and `/sitemap.xml` show the production domain.

---

## Project structure

```
src/
  app/                    Routes, metadata, sitemap, robots, OG image, API
    api/enquiry/route.ts  Enquiry endpoint (validation, spam checks, delivery)
  assets/images/          Temporary photography (optimised by next/image)
  components/
    brand/                Wordmark, S&E seal
    engagements/          Audit schedule, retainer comparison
    forms/                Enquiry form and field primitives
    home/                 Homepage sections
    insights/             Journal cards and article body
    layout/               Header, mobile menu, footer
    media/                EditorialImage (fallback, parallax, unveil)
    motion/               Motion provider (reduced-motion aware), Reveal
    sections/             Page templates: PageHero, NumberedSection, EnquiryBand, LegalPage
    seo/                  JSON-LD
    services/             Service index (homepage), service chapters, capability cards
    layout/ServicesMenu   Desktop Services dropdown (disclosure + vertical tabs)
    team/                 Founder profiles
    ui/                   Button, Container, Eyebrow, SectionHeading, Rule, icons
  content/                All copy and structured data (see below)
  lib/                    Enquiry contract, delivery, spam, SEO helpers, structured data
  theme/tokens.ts         Palette for non-CSS consumers
tests/                    Vitest unit tests
```

## Design system

Tokens live in [`src/app/globals.css`](src/app/globals.css) under `@theme` (Tailwind 4). Change a colour or type size there and it updates everywhere. The palette is mirrored in [`src/theme/tokens.ts`](src/theme/tokens.ts) for the Open Graph image — keep the two in step.

- **Palette:** Forest `#17211D`, Estate Ivory `#F2ECDD`, Ink `#171815`, Oxblood `#5B302F`, Antique Brass `#A68A5B`, Estate Stone `#A59E90`. Two accessible derivatives are used for small text on light backgrounds: `brass-deep` and `stone-deep` (both ≥ 4.5:1 on Ivory).
- **Type:** Libre Caslon Display (headlines, *institution*), Libre Caslon Text italic (the ampersand and emphases), Manrope (interface and body, *infrastructure*). Loaded with `next/font` and self-hosted at build time.
- **Scale:** fluid `text-display-1` … `text-display-4`, `text-lead`, `text-body`; `eyebrow` utility for labels.
- **Surfaces:** `theme-dark` utility switches a section to Forest with an inverted focus ring and selection colour.

## Content: adding and editing

Everything is data-driven. UI does not need to change when content does.

| To add / edit…        | Edit                              | Appears in                                              |
| --------------------- | --------------------------------- | ------------------------------------------------------- |
| A practice            | `src/content/services.ts`         | Homepage index, Expertise, Services, menus, footer       |
| A service (capability)| `src/content/capabilities/<practice>.ts`, then add its slug to the practice's `capabilities` list | Its own page at `/services/<slug>`, the Services menu, the Services page, Expertise, sitemap |
| An article            | `src/content/insights.ts`         | Insights listing, article page, related reading, sitemap |
| A team member         | `src/content/team.ts`             | The Firm page, structured data (founders)               |
| A sector              | `src/content/sectors.ts`          | Private Digital Office — Suitable Businesses            |
| A location            | `src/content/site.ts` → `locations` | Footer, The Firm, Contact                             |
| Navigation            | `src/content/site.ts` → `primaryNav` | Header, mobile menu, footer, 404                     |
| Enquiry areas         | `src/lib/enquiry.ts` → `enquiryAreas` | Form options and server validation                  |
| Audit / Office detail | `src/content/engagements.ts`      | Homepage, audit and Private Digital Office pages        |

Articles are structured blocks (`paragraph`, `heading`, `subheading`, `quote`, `list`). If the firm later prefers MDX or a headless CMS, only the loader functions in `insights.ts` need replacing.

---

## Before launch — items requiring the firm's input

These are deliberately left as clearly marked placeholders. Nothing has been invented.

1. **Founder biographies and portraits** — `src/content/team.ts`. Add approved `biography` paragraphs, optional `focus` areas, and a `portrait` (import from `src/assets`). Until then, the Firm page shows a composed placeholder ("A biography … will be published here in due course").
2. **Email address** — set `NEXT_PUBLIC_CONTACT_EMAIL` (or edit `PLACEHOLDER_EMAIL` in `src/content/site.ts`). While the placeholder is in use, it is labelled as such in the footer and on the contact page, and omitted from structured data.
3. **Enquiry delivery** — configure one transport (see *Enquiry form* below). Without it the form honestly reports that the enquiry was not sent.
4. **Photography** — every image in `src/assets/images` is a temporary Unsplash photograph (sources recorded in `src/content/images.ts`). To replace with commissioned photography, overwrite the file (or add a new one and update the import) and revise its `alt` text. Layouts reference images only by key.
5. **Legal text** — `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` are placeholders and display a "Draft — subject to legal review" notice. Replace with counsel-approved text, then remove the notice in `src/components/sections/LegalPage.tsx`.
6. **Insights** — the five seed essays are complete drafts written for launch, attributed to the firm, and marked `status: "draft"`, which shows a "Draft for review" label on each article. Have the founders review each; set `status: "published"` and confirm `publishedAt`.
7. **Engagement details** — `src/content/engagements.ts` describes the intended shape of the Digital Estate Audit and Private Digital Office (stages, reporting). Confirm against the firm's actual terms.
8. **Domain** — set `NEXT_PUBLIC_SITE_URL`.
9. **Social card** — `src/app/opengraph-image.tsx` renders a typographic card with a default font; replace with a designed card if desired.

## Services and capability pages

Each practice is made up of capabilities (e.g. *CRM implementation*, *Local SEO*). Every capability has its own page at `/services/<slug>` explaining what it is, why it matters, how the work is done, what is included and, where relevant, an honest note on limits. The catalogue lives in `src/content/capabilities/`, one file per practice. A capability may be listed under more than one practice (for example *Reporting*), but belongs to one. Set `href` on a capability to send it to a dedicated page instead (used for *Digital Estate Audits*).

The **Services** item in the header opens a dropdown panel on desktop (click, Enter/Space, or hover with a mouse; arrow keys move between practices; Escape or clicking outside closes it). On mobile, the menu's Services row expands to list the practices. Both are generated from the catalogue.

## Insights (blog) and SEO

Articles live in `src/content/insights/` — `guides.ts` for practical how-to pieces written to answer specific searches, `essays.ts` for perspective pieces. Each article supports:

- `seoTitle` (≤ 60 characters) and `description` (140–160 characters) for search results; the headline (`title`) can be longer.
- `focusKeyword` — the search the article is written to answer (one per article, no duplicates).
- Inline links in text: `[link text](/services/local-seo)`, and `**bold**`.
- Block types: paragraph, heading (appears in the automatic contents list), subheading, quote, list, steps, callout.
- `faqs` — shown as "Common questions" and emitted as FAQPage structured data.
- `services` — capability slugs shown as "Related services"; `related` — further reading.
- `updatedAt` — set when an article is substantially revised.

**Publishing workflow.** New articles are `status: "draft"`: visible on the site with a review label, but `noindex`, and excluded from the sitemap, RSS feed and indexable category pages. To publish: review the text, set `status: "published"` and confirm `publishedAt`. `npm test` checks titles and descriptions are a sensible length, every internal link resolves, and each guide has contents, FAQs and links to related services.

Also generated: Article/BlogPosting, FAQPage and BreadcrumbList structured data; category pages at `/insights/category/<subject>`; an RSS feed at `/insights/rss.xml`.

**After launch, for Google:**
1. Deploy to the real domain and set `NEXT_PUBLIC_SITE_URL`.
2. Add the domain in Google Search Console, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, redeploy, and verify.
3. Submit `https://<domain>/sitemap.xml` in Search Console.
4. Create and verify the firm's Google Business Profile, linking to the website.
5. Publish approved articles steadily, and check Search Console monthly for the searches each page appears for.

## Enquiry form

- Client: [`src/components/forms/EnquiryForm.tsx`](src/components/forms/EnquiryForm.tsx) — validation on blur and submit, error summary with links, loading state (`aria-busy`), success and error states with focus management. A preset area can be passed as `/contact?area=digital-estate-audit`.
- Contract shared by client and server: [`src/lib/enquiry.ts`](src/lib/enquiry.ts).
- Endpoint: [`src/app/api/enquiry/route.ts`](src/app/api/enquiry/route.ts) — `POST` JSON. Responses: `200` sent; `422` invalid (with field errors); `400` rejected as automated; `429` rate limited; `503` delivery not configured; `502` delivery failed.
- **Attach the production endpoint in [`src/lib/enquiry-delivery.ts`](src/lib/enquiry-delivery.ts).** Webhook and Resend transports are implemented; add others (e.g. a CRM API) in `deliverEnquiry`.
- Spam prevention: [`src/lib/spam.ts`](src/lib/spam.ts) — honeypot, minimum fill time, per-IP rate limit. The `verifyChallenge` hook is where Cloudflare Turnstile or hCaptcha verification belongs; for multiple server instances, move the rate limiter to a shared store.

The success message is shown **only** when the server confirms delivery.

## Accessibility

- Semantic landmarks, one `h1` per page, logical heading order, skip link.
- Visible focus rings (Oxblood on light, Brass on Forest); all interactive targets at least 44px.
- Mobile menu is a modal dialog: focus moves in and is trapped, Escape closes, the page behind is `inert` and scroll-locked, focus returns to the menu button.
- Service rows are disclosure buttons (`aria-expanded`/`aria-controls`) — hover is never required.
- Form controls have labels, hints and errors linked via `aria-describedby`; errors are announced.
- `prefers-reduced-motion`: Framer Motion skips transform animations (`MotionConfig reducedMotion="user"`) and CSS animations/transitions are reduced to near-zero.
- Scroll reveals are visible without JavaScript (`<noscript>` override in the root layout).

## Performance

- Every page is prerendered at build time; the only dynamic route is the enquiry API.
- Fonts self-hosted via `next/font` with `display: swap`; the italic face is not preloaded.
- Images are static imports: automatic dimensions (no layout shift), blur placeholders, AVIF/WebP, responsive `sizes`. Only hero images load eagerly.
- Framer Motion uses `LazyMotion` with the `domAnimation` feature set. The first page load is never delayed by page-transition animation.
- No autoplay video, no third-party scripts.

## Testing

`npm test` covers enquiry validation, spam heuristics and content integrity (unique slugs, valid cross-references, banned marketing language, founder biographies not invented). Responsive behaviour, keyboard access, the mobile menu and the form were verified in a browser at 320, 360, 375, 390, 430, 768, 820, 1024 (portrait and landscape), 1180, 1280, 1366, 1440, 1536, 1920 and 2560px.

## Image credits

Temporary photographs from [Unsplash](https://unsplash.com) under the Unsplash Licence; individual sources are listed in `src/content/images.ts`.
