@AGENTS.md

# Project memory: Steven J. Lee, MD website

Persistent reference for future sessions. Keep factual and current. The `@AGENTS.md` import above carries a load-bearing warning: this Next.js version is non-standard — consult `node_modules/next/dist/docs/` before writing any framework code.

---

## Project overview

A full website rebuild for **Dr. Steven J. Lee, MD** — orthopedic surgeon, Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital, Associate Director at NISMAT. Private practice with two offices: NYC (159 East 74th Street) and Scarsdale (2 Overhill Road, Suite 310).

**Strategic goal:** Replace his aging Wix site at stevenjleemd.com with a production Next.js site that:
1. Dominates AI/LLM search (GEO — Generative Engine Optimization) for orthopedic/hand surgery queries in NYC
2. Drives patient acquisition through self-service ZocDoc booking (replacing the call center)
3. Positions Dr. Lee as a world-class specialist: Arthrex implant designer, first PRP for upper extremity in NYC, 4+ Achilles papers, peptides pioneer
4. Retains existing patient base through his practice transition (leaving current group within ~1-3 months of 2026-05-18)

**Key differentiators to feature on every relevant page:**
- Helped design Arthrex implants (plates, anchors, internal brace)
- Chief of Hand Surgery at Lenox Hill Hospital
- "Among the first" to perform PRP for upper extremity in NYC (frame carefully — not "the first")
- First review paper on peptides in an orthopedic journal
- 4+ peer-reviewed Achilles papers with PubMed links

---

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 16.2.6, App Router** | Non-standard version — read `node_modules/next/dist/docs/` before any framework API usage |
| Language | **TypeScript 5** | Strict mode on |
| UI | **React 19.2.4** | — |
| Styling | **Tailwind CSS v4** | Config-less; theme tokens defined in `src/app/globals.css` via `@theme` directive. No `tailwind.config.js`. |
| Animation | **motion v12.39.0** | Import from `motion/react` — NOT `framer-motion`. Different API. |
| Icons | **lucide-react v1.16.0** | Plus custom inline SVG anatomy icons in `src/components/home/icons/AnatomyIcons.tsx` |
| Fonts | **Inter** (body/UI) + **Newsreader** (serif headlines) | Both via `next/font/google`, injected in `src/app/layout.tsx` |
| Utilities | **clsx + tailwind-merge** | Via `cn()` in `src/lib/utils.ts` |
| Hosting | **Vercel** | Auto-deploys on push to `main`. Repo: https://github.com/stevenylee555-bot/stevenjleemd-website |
| Analytics | **GA4** | Not yet wired — blocked on Dr. Lee providing measurement ID |
| Booking | **ZocDoc** | External link only — not an embedded scheduler |
| Schema | **JSON-LD via next/head** | Builders in `src/lib/schema.ts` — load-bearing for GEO; do not strip |

---

## Directory structure

```
src/
  app/                         App Router routes
    layout.tsx                 Root layout: fonts, metadata, JSON-LD (Physician + MedicalBusiness), Navbar, Footer, skip link
    page.tsx                   Homepage — composes all src/components/home/* sections
    globals.css                Tailwind v4 @theme tokens + custom utilities
    opengraph-image.tsx        Generated OG image
    robots.ts, sitemap.ts      SEO route handlers
    about/
      page.tsx                 About index (5-card grid)
      bio/page.tsx
      credentials/page.tsx
      cv/page.tsx              Links to public/downloads/Dr-Steven-Lee-CV.pdf
      publications/page.tsx
      videos/page.tsx
    conditions/
      page.tsx                 Conditions library index (grid by region)
      [slug]/page.tsx          Dynamic condition pages via ConditionTemplate + conditionPages.ts
    specialties/
      page.tsx                 Specialties index (5-card grid)
      [slug]/page.tsx          Dynamic specialty pages via SpecialtyTemplate + specialties.ts
    contact/page.tsx
    second-opinions/page.tsx
    referral-network/page.tsx
    testimonials/page.tsx
    therapy-protocols/page.tsx
    blog/page.tsx
    shop/page.tsx
    not-found.tsx
  components/
    Navbar.tsx                 Fixed nav, desktop dropdowns, mobile drawer, ZocDoc CTA
    Footer.tsx                 4-column footer with locations/hours/links
    PageHeader.tsx             Reusable hero headers with breadcrumbs
    ConditionTemplate.tsx      Renders full condition pages from ConditionPageContent data
    SpecialtyTemplate.tsx      Renders specialty pages from Specialty data
    ComingSoon.tsx             Placeholder for phase2 pages
    home/
      Hero.tsx
      AnimatedStats.tsx        Animated stat counters (motion)
      InnovationFeature.tsx    Arthrex panel feature section
      Specialties.tsx          5-specialty grid
      SecondOpinion.tsx
      TestimonialSpotlight.tsx
      About.tsx
      ConditionsPreview.tsx
      BookingCTA.tsx
      FAQSection.tsx
      icons/
        AnatomyIcons.tsx       Custom SVG: HandIcon, ElbowIcon, ShoulderIcon, KneeIcon, BiologicsIcon
  lib/
    conditions.ts              Master condition list (22 conditions, 6 regions, priority/phase2 status)
    conditionPages.ts          Full page content for 9 priority condition pages (~1500 lines)
    specialties.ts             Full page content for 5 specialty pages
    schema.ts                  JSON-LD builders: physicianSchema, medicalBusinessSchema, buildFaqSchema, buildConditionSchema
    motion.ts                  Shared motion variants + viewport props (ease, fadeUp, fadeIn, stagger, inViewProps)
    utils.ts                   cn() utility (clsx + tailwind-merge)
public/
  images/                      dr-lee-headshot.jpg + 5 speaking/conference photos
  downloads/                   Dr-Steven-Lee-CV.pdf
```

**Content is data-driven.** Page copy lives in `src/lib/*.ts` and is rendered through shared templates. Always edit data files, not duplicated markup.

---

## Design system

**Color palette (defined in `src/app/globals.css` via `@theme`):**

| Token | Hex | Usage |
|---|---|---|
| `navy-950` | `#11193a` | Dominant background (hero, navbar, footer) |
| `navy-900` | `#182446` | Secondary backgrounds |
| `navy-800/700/600` | — | Lighter navy tones |
| `gold-500` | `#c9a84c` | Primary accent |
| `gold-400` | `#e8c96a` | Lighter gold |
| `gold-600` | `#a8872e` | Darker gold |
| `cream` | `#faf8f4` | Section breaks |
| `bone` | `#f1ede4` | Neutral warm backgrounds |

**Typography:**
- **Inter** — all body copy, UI, nav labels
- **Newsreader** — display serif headlines. Use `.serif-italic` utility class for italic accent words inline.

**Custom utility classes (in globals.css):**
- `.gold-underline` — 60px decorative gold underline
- `.hairline` — 1px border at 15% opacity
- `.kicker` — 12px, 600wt, 0.16em tracking, uppercase (editorial section labels)
- `.serif-italic` — Newsreader italic inline accent
- `.hero-grain::after` — SVG grain overlay for atmospheric depth
- `@keyframes marquee` — 40s linear horizontal marquee with hover-pause

**Motion:**
- Shared variants in `src/lib/motion.ts`: `fadeUp`, `fadeIn`, `stagger()`, `heroReveal`
- Use `inViewProps` for all scroll-triggered animations
- All transforms MUST honor `prefers-reduced-motion: reduce` (collapses to opacity-only fade)
- Import: `import { motion } from "motion/react"` — never `framer-motion`

---

## Conventions

**Copy rules (client-enforced):**
- No em-dashes anywhere in user-facing copy. Use commas, colons, or periods instead.
- No emoji. Use lucide-react icons or custom anatomy SVGs.
- Arthrex wording: "helped design" not "designed."
- PRP wording: "among the first" not "the first."
- No unsupported superlatives. All claims must be verifiable (CV, PubMed, hospital affiliation).
- No patient testimonials without documented consent.
- No medical advice or diagnoses in copy.

**Schema / GEO rules (load-bearing — do not violate):**
- JSON-LD on every page. Builders are in `src/lib/schema.ts`.
- `Physician` + `MedicalBusiness` on root layout (applies to all pages).
- `FAQPage` schema on every condition page and the homepage.
- `MedicalCondition` schema on every condition page.
- FAQ answers must be self-contained so AI assistants can quote them in isolation.
- State each credential/fact once at full detail; reference it compactly elsewhere. No redundant award/implant lists.

**Code conventions:**
- Path alias `@/*` maps to `./src/*`.
- Tailwind v4: no `tailwind.config.js`. All theme customizations go in `globals.css` `@theme` block.
- Always use `cn()` for conditional class merging.
- No comments in code unless the WHY is non-obvious.

---

## Pages built (Phase 1 complete)

**Fully built with real content:**
| Page | Status |
|---|---|
| Homepage (9 sections) | Done |
| Conditions index | Done |
| Carpal Tunnel Syndrome | Done |
| Distal Radius Fracture | Done |
| Scapholunate Ligament Injury | Done |
| Basal Joint Arthritis (Thumb CMC) | Done |
| Hand & Wrist Fractures | Done |
| UCL Tear (Tommy John) | Done |
| Biceps Tendon Rupture | Done |
| Rotator Cuff Tear | Done |
| ACL Tear & Reconstruction | Done |
| Achilles Tendon Rupture | Done |
| Specialties index | Done |
| Hand & Wrist specialty | Done |
| Elbow specialty | Done |
| Shoulder specialty | Done |
| Knee & Sports specialty | Done |
| PRP & Advanced Treatments specialty | Done |
| Contact | Done |
| About index | Done |
| Navbar + Footer | Done |

**Scaffolded (stub pages, phase 2):**
- `/about/bio`, `/about/credentials`, `/about/publications`, `/about/videos`, `/about/cv`
- `/second-opinions`, `/referral-network`, `/testimonials`, `/therapy-protocols`, `/blog`, `/shop`
- 13 additional condition pages (Trigger Finger, Wrist Arthroscopy, Complex Elbow Trauma, Shoulder Arthroscopy, Clavicle Fracture, Meniscus Tear, Knee Arthroscopy, PRP/BMAC Injections, Peptide Therapy, and others)

---

## Current status (as of 2026-05-25)

**Phase 1 is functionally complete.** Site is deployed to a Vercel preview URL, not yet live on stevenjleemd.com.

**Pre-launch blockers (must complete before DNS cutover):**
1. **301 redirect map** in `next.config.ts` — old Wix URLs (~110 indexed pages) to new equivalents. CRITICAL: the Wix site has strong AI-search traction (ChatGPT, Gemini, Perplexity, Claude actively crawl it). Do not flip DNS without every redirect in place.
2. **Google Search Console** verification for the new domain.
3. **GA4 measurement ID** — blocked on Dr. Lee providing it (no legacy GA history on the Wix site).
4. **Explicit DNS cutover approval** from Dr. Lee + Wix analytics export before access is lost.

**Waiting on client:**
- Content additions over the next ~2 weeks (Dr. Lee is at conferences)
- Final design/content approval from his PAs
- Go-ahead for DNS transfer from Wix nameservers to Vercel

**Domain:** stevenjleemd.com registered at Network Solutions. DNS on Wix nameservers. Domain locked with `clientTransferProhibited` (normal — no registrar transfer needed, just repoint nameservers to Vercel).

---

## Out of scope (separate sessions)

- Marketing automation, email campaigns, off-site SEO/GEO growth
- AI visitor chatbot (Claude API integration — deferred)
- Sanity CMS integration (deferred)
- Recovery Shop `/shop` affiliate integration (Phase 2)
- GA4 wiring (blocked on ID)
- DNS cutover itself (needs explicit Dr. Lee approval)
