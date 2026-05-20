---
name: no-emoji-icons
description: Use this skill whenever working on any frontend, web, or UI project to prevent emoji usage and enforce professional icon libraries (Lucide by default). Triggers automatically on tasks involving JSX, TSX, HTML, components, landing pages, buttons, navigation, or any user-facing UI work. Also triggers when auditing existing code for emojis, replacing emojis with icons, or establishing iconography standards for a new project. Especially important for professional, medical, financial, or enterprise contexts where emoji usage signals amateurish or AI-generated work.
---

# No-Emoji Icon Skill

This skill enforces professional iconography across all frontend work and prevents the use of emoji characters in user-facing content.

## Core Rules

**NEVER use emoji characters in:**
- JSX or TSX component output
- HTML page content
- Button labels, navigation items, or CTAs
- Headings, section titles, or feature cards
- Meta descriptions, OG tags, or page titles
- Marketing copy or body text

**ALWAYS use icon library components instead:**
- Default to `lucide-react` for React/Next.js projects
- Use Heroicons if the project is Tailwind-centric and already imports them
- Use custom SVG components for brand-specific or specialty icons

## Default Library: Lucide

Install if not already present:
```bash
npm install lucide-react
```

Import pattern:
```jsx
import { Calendar, Phone, MapPin } from 'lucide-react';
```

## Sizing Standards

Apply consistently across the project:

| Context | Size | Stroke Width |
|---------|------|--------------|
| Inline with text | 16-20px | 1.5 |
| Inside buttons | 20-24px | 1.5 |
| Feature cards | 24-32px | 1.5 |
| Hero / section headers | 32-48px | 1.5 |
| Navigation | 20px | 1.5 |

Always use `strokeWidth={1.5}` instead of the default `2` for a more refined, professional appearance.

## Color Application

**Semantic icons** (alongside text, in buttons): inherit text color via `currentColor` or text utility classes.
```jsx
<button className="text-blue-600">
  <Phone className="w-5 h-5" /> Call Us
</button>
```

**Decorative icons** (feature cards, service blocks): wrap in a colored container.
```jsx
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
  <Stethoscope className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
</div>
```

## The Three-Step Replacement Workflow

When asked to remove emojis from existing code, follow this exact pattern:

### Step 1: Audit
Scan the project for emoji characters. Use this regex pattern:
```
[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F000}-\u{1F02F}]|[\u{1F0A0}-\u{1F0FF}]|[\u{1F100}-\u{1F64F}]|[\u{1F910}-\u{1F96B}]|[\u{1F980}-\u{1F9E0}]
```

For each emoji found, report:
- File path
- Line number
- Surrounding context (the line it appears in)
- What role it plays (button label, heading, list bullet, decorative)

### Step 2: Map Intent to Icons
For each emoji, suggest a replacement. Use the mapping table below. **Where the emoji is purely decorative noise, recommend removal rather than replacement** — not every emoji needs an icon counterpart.

### Step 3: Execute
Replace emojis with the mapped Lucide imports. Apply the sizing standards above. Verify imports are added at the top of each affected file.

## Emoji → Lucide Mapping Reference

Common mappings — extend this as needed for the specific project:

| Emoji | Lucide Icon | Context |
|-------|-------------|---------|
| 📅 📆 | `Calendar` | Appointments, scheduling |
| 📞 ☎️ | `Phone` | Contact, calling |
| 📧 ✉️ | `Mail` | Email, messages |
| 📍 🗺️ | `MapPin` | Location, address |
| 🕐 ⏰ | `Clock` | Hours, time |
| ✅ ☑️ | `Check` or `CheckCircle` | Confirmations, success |
| ❌ ✖️ | `X` or `XCircle` | Errors, close |
| ⚠️ | `AlertTriangle` | Warnings |
| ℹ️ | `Info` | Information |
| 🔒 🔐 | `Lock` or `Shield` | Security, privacy |
| 🚀 | `Rocket` or remove | Launch, growth (often decorative noise — remove) |
| ✨ | remove | Almost always decorative noise |
| 💡 | `Lightbulb` | Ideas, tips |
| 📊 📈 | `BarChart` `TrendingUp` | Analytics, growth |
| 🎯 | `Target` | Goals |
| 💼 | `Briefcase` | Business, work |
| 👤 👥 | `User` `Users` | Profile, team |
| ⭐ | `Star` | Ratings, reviews |
| ❤️ | `Heart` | Favorites |
| 🏥 | `Cross` or custom medical icon | Medical/clinic |
| 🩺 | `Stethoscope` | Doctor, medical |
| 💊 | `Pill` | Medication |
| 🧠 | `Brain` | Neuro, mental health |
| 🦷 | custom SVG | Dental (no Lucide equivalent) |
| 👁️ | `Eye` | Vision, view |
| 🦴 | `Bone` | Orthopedic |
| 📋 | `Clipboard` or `FileText` | Forms, records |
| 🔬 | `Microscope` | Lab, research |
| 💉 | `Syringe` | Vaccines, injections |
| 📝 | `FileText` or `PenLine` | Notes, writing |
| 🔍 | `Search` | Search |
| ⚙️ | `Settings` | Configuration |
| 🏠 | `Home` | Home page |
| 💬 | `MessageCircle` | Chat, messages |
| 📱 | `Smartphone` | Mobile |
| 💻 | `Laptop` or `Monitor` | Desktop, computer |
| 🎨 | `Palette` | Design |
| 🛡️ | `Shield` or `ShieldCheck` | Trust, security |
| 🎓 | `GraduationCap` | Education, credentials |
| 🏆 | `Trophy` or `Award` | Achievement, awards |
| 💰 | `DollarSign` | Pricing, money |
| 🔥 | remove | Almost always decorative noise |
| 👍 | `ThumbsUp` | Approval |
| 🙏 | remove | Decorative |

## When NOT to Replace

Some legitimate cases exist for emojis — recognize and preserve them:

- Inside code blocks, examples, or documentation showing emoji handling
- User-generated content (testimonials, reviews) where the user wrote them
- Specific cultural or contextual content where the emoji is the subject
- README files, comments, or developer-facing docs (skill applies to user-facing UI only)

## Niche Icons Not in Lucide

If a needed icon doesn't exist in Lucide:

1. **Check Phosphor Icons** (`@phosphor-icons/react`) — 9,000+ icons with weight variants
2. **Check Heroicons** if the project uses it
3. **Grab a custom SVG** from SVGRepo or Iconify and create a custom component:

```jsx
// components/icons/Dental.jsx
export const DentalIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* path data here */}
  </svg>
);
```

Place all custom icons in `/components/icons/` and re-export from `/components/icons/index.js` for clean imports.

## Project Setup Checklist

When starting a new frontend project, ensure these are in place:

- [ ] `lucide-react` installed
- [ ] Project's CLAUDE.md includes iconography rules (see below)
- [ ] No emoji characters in any user-facing JSX/HTML
- [ ] Consistent stroke width (1.5) across all icons
- [ ] Custom icons placed in `/components/icons/` if needed
- [ ] Favicon uses a real SVG/PNG, not an emoji

## CLAUDE.md Snippet for Projects

Add this to the project's CLAUDE.md to make the rule sticky across sessions:

```markdown
## Iconography Rules
- Never use emoji characters in JSX, component text, or page content.
- All icons come from lucide-react (default) with strokeWidth={1.5}.
- Icon sizes: 16-20px inline, 24px for buttons, 32-48px for feature/hero sections.
- Decorative icons wrap in a colored circular container; semantic icons inherit text color.
- If a needed icon isn't in Lucide, add a custom SVG component in /components/icons/.
```

## Common Mistakes to Avoid

1. **Mixing stroke widths.** Pick one and stick with it across the whole project. Inconsistency is the visual tell.
2. **Using icons in body text.** Icons belong in headings, buttons, lists, and feature cards. Stuffing them mid-paragraph is the new emoji.
3. **Importing the whole library.** Always use named imports (`import { X } from 'lucide-react'`) — Lucide tree-shakes properly only with named imports.
4. **Forgetting accessibility.** Add `aria-hidden="true"` for purely decorative icons, and `aria-label="..."` for icons that convey meaning without accompanying text.
5. **Replacing every emoji with an icon.** Many emojis (🚀 ✨ 🔥) are pure decoration. Removing them entirely is often the correct answer.
