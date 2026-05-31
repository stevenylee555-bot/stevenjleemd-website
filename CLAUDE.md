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
| Analytics | **GA4** (framework wired) + **Vercel Analytics & Speed Insights** | GA4 event wiring ready in `src/lib/analytics.ts`; activates when `NEXT_PUBLIC_GA_ID` is set. Vercel Analytics + Speed Insights mounted in layout (cookieless, no PHI). |
| Booking | **ZocDoc** | External link only — not an embedded scheduler |
| Schema | **JSON-LD `@graph` via next/head** | Builders in `src/lib/schema.ts`, stable `@id` cross-references — load-bearing for GEO; do not strip |

---

## Directory structure

```
src/
  app/                         App Router routes
    layout.tsx                 Root layout: fonts, metadata, viewport (themeColor), JSON-LD @graph (Physician + MedicalBusiness), Vercel Analytics + Speed Insights, Navbar, Footer, skip link
    page.tsx                   Homepage — composes all src/components/home/* sections
    globals.css                Tailwind v4 @theme tokens + custom utilities
    opengraph-image.tsx        Generated OG image
    icon.tsx, apple-icon.tsx   Generated favicon + apple touch icon (gold "SJL" on navy)
    manifest.ts                PWA web manifest
    robots.ts, sitemap.ts      SEO route handlers
    llms.txt/route.ts          AI-assistant site summary, generated from conditions/specialties data
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
    schema.ts                  JSON-LD @graph builders + stable @ids: physicianNode, medicalBusinessNode, buildGraph, buildFaqSchema, buildConditionSchema, buildMedicalProcedureSchema, buildBreadcrumbSchema, buildReviewSchema/buildAggregateRatingSchema (testimonial scaffolding). physicianSchema/medicalBusinessSchema kept as back-compat exports.
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

## Current status (as of 2026-05-27)

**Phase 1 is functionally complete.** Site is deployed to a Vercel preview URL, not yet live on stevenjleemd.com (DNS still on Wix).

**Phase 0 marketing/SEO/GEO code is merged to `main` (2026-05-27).** Four sub-branches landed: (1) JSON-LD `@graph` refactor with stable `@id` cross-references + new MedicalProcedure/BreadcrumbList/Review builders, (2) favicon/apple-icon/manifest/theme color, (3) Vercel Analytics + Speed Insights, (4) `/llms.txt`. The full marketing/SEO/GEO/automation roadmap (KPIs, tool stack, reporting, Dr. Bedford onboarding playbook) lives at `~/.claude/plans/fuzzy-twirling-hartmanis.md`.

**Pre-launch blockers (must complete before DNS cutover):**
1. **301 redirect map** — built: `src/lib/redirects.ts` holds 138 source/destination redirects, wired through `next.config.ts`. CRITICAL: the Wix site has strong AI-search traction (ChatGPT, Gemini, Perplexity, Claude actively crawl it). Remaining pre-cutover step is to verify the map against the final Wix URL export so no indexed page 404s.
2. **Google Search Console** + Bing Webmaster verification for the new domain.
3. **GA4 measurement ID** — provided and set locally (`NEXT_PUBLIC_GA_ID=G-GLNRM3BQET` in `.env.local`, 2026-05-26). Remaining: confirm it is set in the Vercel project env (`.env.local` does not deploy), then mark `book_appointment`/`phone_call`/`callback_request`/`cv_download` as Key Events, disable Google Signals, and set short data retention.
4. **Contact form endpoint** — set locally (`NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xvzydvvk` in `.env.local`, 2026-05-26). Remaining: confirm it is set in the Vercel project env, and confirm the Formspree account carries a signed BAA and delivers to the Google Workspace BAA mailbox, not a consumer inbox. See [[project_drlee_compliance]].
5. **Explicit DNS cutover approval** from Dr. Lee + Wix analytics export before access is lost.

**Waiting on client:**
- Content additions over the next ~2 weeks (Dr. Lee is at conferences)
- Final design/content approval from his PAs
- Go-ahead for DNS transfer from Wix nameservers to Vercel

**Domain:** stevenjleemd.com registered at Network Solutions. DNS on Wix nameservers. Domain locked with `clientTransferProhibited` (normal — no registrar transfer needed, just repoint nameservers to Vercel).

---

## Planned: self-serve CMS (Sanity)

**Goal (decided 2026-05-25):** let Dr. Lee edit and add content himself, replacing the current loop (Dr. Lee notes edits in a shared Google Doc, Steve relays them to Claude, Claude deploys).

**Approach (load-bearing for whoever builds it):**
- **Sanity CMS**, added to the existing Next.js app. Additive only: the site stays on Vercel, this is not a migration. Free tier is sufficient.
- **Visual / click-on-the-page editing** via Sanity's Presentation tool. This matters more than the CMS brand itself, because Dr. Lee edits by looking at the live page, not by learning an abstract admin.
- **Draft, review, publish flow:** Dr. Lee's edits save as drafts, Steve reviews and publishes. Protects the claim-wording, no-medical-advice, and SEO/schema guardrails.
- **Build order:** testimonials section first as a proof-of-concept (cheap adoption test), then expand section by section. Import old-site content so he curates rather than retypes.
- **Keep in code (NOT CMS-editable):** JSON-LD schema (`src/lib/schema.ts`), layout/components, and the careful-claim rules. Only the words and images move to Sanity.
- TinaCMS (inline editing) is the fallback if Sanity's UX does not land for him.
- **When implementing:** this Next.js version is non-standard, consult `node_modules/next/dist/docs/` before using any App Router APIs (draft mode, route handlers, the Studio catch-all route, live/visual-editing wiring).

---

## Project subagents

Seven project-scoped agents live in `.claude/agents/` to codify recurring workflows. An eighth (user-scoped, cross-practice) lives at `~/.claude/agents/practice-build-strategist.md`. Invoke by name or let the main session route to them.

| Agent | Scope | Purpose | When to use |
|---|---|---|---|
| `drlee-content-reviewer` | Project | House-style + claim-wording reviewer (em-dashes, "helped design," "among the first," emoji, superlatives, medical advice, testimonial consent) | Before any copy ships |
| `drlee-feedback-implementer` | Project | Translates Dr. Lee feedback into edits + recap message for him | Every Dr. Lee feedback round |
| `drlee-project-pm` | Project | Status snapshot + ranked next-actions; produces internal + Dr-Lee-facing reports | Start/end of every session, or whenever priorities feel unclear |
| `drlee-sanity-curator` | Project | Reviews pending Sanity drafts, writes a polish-and-publish script | When Dr. Lee has been editing in Studio |
| `drlee-condition-builder` | Project | Generates new `ConditionPageContent` entries + matching route folders | Adding condition pages (foot/ankle, hip/spine, phase-2) |
| `drlee-launch-auditor` | Project | Pre-DNS-cutover P0/P1/P2 punch list | Before any deploy touching redirects, sitemap, or env wiring |
| `drlee-compliance-guardian` | Project | HIPAA/FTC/NY-medical-board regression checker | Before deploys touching forms, analytics, testimonials |
| `practice-build-strategist` | **User** | Strategic playbook for the doctor-website business; extracts Dr. Lee patterns into a reusable framework for onboarding future doctors (Dr. Bedford next) | Maintaining the playbook, onboarding new doctors, drift audits |

**Key constraints (encoded in every agent's system prompt):**
- No agent has `git commit` / `git push` authority. Steve owns every push.
- Read-only agents: `content-reviewer`, `launch-auditor`, `compliance-guardian`.
- Append-only constraints: `condition-builder` (`conditionPages.ts`), `sanity-curator` (only `scripts/polish-and-publish-*.mjs`).
- Agents do not invoke each other directly — composition flows through the main session via recommendations.

## Out of scope (separate sessions)

- Marketing automation, email campaigns, off-site SEO/GEO growth — now an active workstream tracked in `~/.claude/plans/fuzzy-twirling-hartmanis.md` (Phase 0 on-page SEO/GEO code is merged; off-site/reporting/content phases are out-of-repo: GBP, citation tracking, Looker Studio, Beehiiv, reviews, etc.)
- AI visitor chatbot (Claude API integration — deferred)
- Sanity CMS integration: now scoped (see "Planned: self-serve CMS" above), not yet built
- Recovery Shop `/shop` affiliate integration (Phase 2)
- GA4 measurement ID + contact-form endpoint (values set in `.env.local` 2026-05-26; confirm both are also set in the Vercel production env)
- DNS cutover itself (needs explicit Dr. Lee approval)
