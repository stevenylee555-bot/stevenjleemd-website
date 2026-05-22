@AGENTS.md

# Project memory: Steven J. Lee, MD website

Persistent reference for future sessions. Keep factual and current. The `@AGENTS.md` import above carries a load-bearing warning: this Next.js version is non-standard, so consult `node_modules/next/dist/docs/` before writing framework code.

## Project overview

A new website for Dr. Steven J. Lee, MD, a private-practice orthopedic surgeon (Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital; Associate Director at NISMAT). Two offices: New York City (159 East 74th Street) and Scarsdale (2 Overhill Road, Suite 310). He has his own private practice, meaning that he needs to book his own patients. The new website, marketing automations, SEO and AI search optimizations will all help him achieve the overall goal of driving more traffic to his website and convert them into patients.

Purpose: modernize his web presence to attract more patients, and replace his aging Wix site at stevenjleemd.com. Create a hand’s off marketing automation system that will drive more traffic to his new website and convert visitors into patients.

Current phase: Phase 1 (build) is functionally complete. The site is deployed to a Vercel preview URL but is not yet live on the production domain. Work now is pre-launch setup (analytics, redirect map) ahead of a DNS cutover from Wix. Waiting on approval from Dr. Lee to transfer away from Wix to the new website. Also waiting on more content to be added to the website in the next two weeks as Dr. Lee will be lecturing at conferences. Pending current design and content approval from his PA’s.

## Tech stack

- **Framework:** Next.js 16.2.6, App Router (non-standard version, see AGENTS.md)
- **Language:** TypeScript 5
- **UI:** React 19.2.4
- **Styling:** Tailwind CSS v4 (config-less, theme tokens in `src/app/globals.css` via `@theme`); `@tailwindcss/typography`; `clsx` + `tailwind-merge` (see `cn()` in `src/lib/utils.ts`)
- **Animation:** `motion` v12.39.0, imported from `motion/react` (NOT `framer-motion`)
- **Icons:** `lucide-react` v1.16.0, plus custom inline SVG anatomy icons
- **Fonts:** Inter (sans/body) + Fraunces (display serif), via `next/font/google`
- **Hosting:** Vercel, auto-deploys on push to `main`
- **Repo:** https://github.com/stevenylee555-bot/stevenjleemd-website

## Directory structure

    src/app/                 App Router routes
      layout.tsx             Root layout: fonts, metadata, JSON-LD injection, Navbar/Footer, skip link
      page.tsx               Homepage (composes src/components/home/*)
      globals.css            Tailwind theme tokens + utilities
      opengraph-image.tsx    Generated OG image
      robots.ts, sitemap.ts  SEO route handlers
      about/{bio,credentials,cv,publications,videos}/
      conditions/<slug>/     Condition pages (9 priority built)
      specialties/<area>/    Specialty pages (hand-wrist, elbow, shoulder, knee, advanced-treatments)
      contact/, second-opinions/, referral-network/, testimonials/, therapy-protocols/, blog/, shop/
    src/components/          Navbar, Footer, PageHeader, ConditionTemplate, SpecialtyTemplate, ComingSoon
      home/                  Homepage sections (Hero, AnimatedStats, ArthrexFeature, Specialties,
                             SecondOpinion, TestimonialSpotlight, About, ConditionsPreview, BookingCTA, FAQSection)
      home/icons/            AnatomyIcons.tsx (custom inline SVGs)
    src/lib/                 conditions.ts, conditionPages.ts, specialties.ts (page data),
                             schema.ts (JSON-LD builders), motion.ts (shared variants), utils.ts (cn)
    public/images/           Dr. Lee photos (headshot + 5 speaking/teaching photos)
    public/downloads/        Dr-Steven-Lee-CV.pdf

Content is data-driven: page copy lives in `src/lib/*.ts`, rendered through shared templates. Edit data files, not duplicated markup.

## Key decisions and why

- **Palette:** navy-950 (`#11193a`) dominant, gold accent (`gold-400/500/600`), cream/bone section breaks. No other colors. Navy was lightened one step per client feedback.
- **Typography:** Fraunces serif for editorial headlines, Inter for body/UI.
- **`motion` from `motion/react`** (not framer-motion). All transforms honor `prefers-reduced-motion: reduce`, collapsing to opacity-only fades.
- **No emoji icons.** Use lucide-react or the custom anatomy SVGs.
- **No em-dashes in user-facing copy** (client preference). Use commas, colons, periods.
- **JSON-LD on every page** (Physician, MedicalBusiness, FAQPage, MedicalCondition) via `src/lib/schema.ts`. This is load-bearing for the site's AI-search performance; do not strip it.
- **FAQ answers are written to be self-contained** so AI assistants can quote them in isolation.
- **Arthrex wording is "helped design," not "designed"** (client accuracy correction). PRP framed as "among the first," not "the first." These are deliberate compliance/accuracy choices.
- **Redundancy discipline:** state each fact once at full detail, reference it compactly elsewhere. A redundancy pass already removed duplicate award/implant lists.
- **ZocDoc booking is an external link**, not an embedded scheduler.
- **Navbar/Footer are production-ready**; change deliberately.

## Current status

**Done:** ~11 pages built; all content corrected against Dr. Lee's CV and PDF feedback; accessibility audit; mobile polish; three design-polish rounds; redundancy cleanup; hero finalized. Deployed to Vercel preview. Working tree clean, pushed to `main`.

**In progress (pre-launch):**
- Build the 301 redirect map (old Wix URLs to new equivalents) in `next.config.ts`. Must be done before cutover.
- Google Search Console verification for the new site.

**Blocked, awaiting client:**
- GA4 measurement ID (Google Analytics is NOT currently connected to the Wix site, so there is no legacy GA history).
- Explicit go-ahead for the DNS cutover, and a Wix analytics export before access is lost.

Phase 1 content is awaiting final client delivery and PA approval.

## Constraints and cautions

- **Medical practice, compliance-sensitive marketing.** Claims must be accurate and verifiable. No unsupported superlatives, no patient testimonials without consent, no medical advice or diagnoses in copy.
- **The site will replace the existing Wix site at stevenjleemd.com.** Domain is registered at Network Solutions; DNS currently runs on Wix nameservers (cutover = repoint nameservers to Vercel; no registrar transfer needed). Domain is locked with `clientTransferProhibited` (normal, not a blocker).
- **Migration must preserve SEO and existing URLs.** The Wix site has ~110 indexed pages and strong, growing AI-search traction (thousands of monthly AI queries; actively crawled by ChatGPT, Gemini, Perplexity, Claude). Its top AI-referenced pages are granular condition URLs that the new site consolidated into broader pages. Before cutover, build 301 redirects for every old URL, and rebuild high-traffic granular pages where no direct equivalent exists. Do not flip DNS without the redirect map in place.
- **Non-standard Next.js version.** Read `node_modules/next/dist/docs/` before using framework APIs.

## Out of scope for this session

- Marketing automation, campaigns, and off-site SEO/GEO growth: a separate workstream in its own session.
- AI visitor chatbot: deferred to its own plan-mode session.
- Sanity CMS, GA4 wiring (blocked on ID), and the DNS cutover itself.
