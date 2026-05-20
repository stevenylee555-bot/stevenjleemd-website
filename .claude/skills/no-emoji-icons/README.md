# No-Emoji Icons Skill — Install Guide

A custom Claude Code skill that prevents emoji usage in frontend code and enforces professional icon libraries (Lucide by default).

## What You Get

- Automatic emoji detection and replacement workflow
- 40+ emoji → Lucide icon mappings (with medical/healthcare focus)
- Sizing and stroke width standards
- Helper script that audits a codebase for emoji usage
- Drop-in CLAUDE.md snippet for project-level enforcement

## Installation

### Option 1: Personal Skill (Available Across All Projects)

```bash
# Create the skills directory if it doesn't exist
mkdir -p ~/.claude/skills

# Copy the skill folder
cp -r ./no-emoji-icons ~/.claude/skills/

# Verify it landed
ls ~/.claude/skills/no-emoji-icons
```

You should see `SKILL.md` and `emoji-audit.js` inside.

### Option 2: Project-Scoped Skill (Travels with the Repo)

```bash
# From inside your project root
mkdir -p .claude/skills

# Copy the skill folder
cp -r /path/to/no-emoji-icons .claude/skills/

# Commit it so it travels with your repo
git add .claude/skills/no-emoji-icons
git commit -m "Add no-emoji-icons skill"
```

For your doctor's website project, **Option 2 is the right call** — your dad eventually needs to inherit this codebase, and project-scoped skills keep the standards consistent for whoever clones it.

## Verifying It Works

1. Open Claude Code inside the project
2. Start a new session — Claude scans available skills at startup
3. Run a test prompt like: `"Add a phone icon next to the contact info on the homepage"`
4. Claude should reach for `Phone` from `lucide-react` automatically, not 📞

If Claude still suggests emojis, the description in `SKILL.md` may need to be more specific to your project — edit the `description:` line in the frontmatter to add concrete triggers like "when adding icons to the doctor's website."

## Using the Audit Script

The helper script scans your project for any existing emojis:

```bash
# From your project root
node .claude/skills/no-emoji-icons/emoji-audit.js

# Or scan a specific directory
node .claude/skills/no-emoji-icons/emoji-audit.js ./src/components
```

Output shows file path, line number, the emoji found, and the surrounding context. Hand this output to Claude with:

> "Here's the emoji audit output. Replace each emoji with the appropriate Lucide icon per the no-emoji-icons skill. Where the emoji is purely decorative, remove it."

## Updating the CLAUDE.md

The skill includes a recommended CLAUDE.md snippet. Add it to your project's CLAUDE.md to make the rule stick across every session:

```markdown
## Iconography Rules
- Never use emoji characters in JSX, component text, or page content.
- All icons come from lucide-react (default) with strokeWidth={1.5}.
- Icon sizes: 16-20px inline, 24px for buttons, 32-48px for feature/hero sections.
- Decorative icons wrap in a colored circular container; semantic icons inherit text color.
- If a needed icon isn't in Lucide, add a custom SVG component in /components/icons/.
```

## Customizing for Your Project

The mapping table in SKILL.md covers general use cases plus medical-specific icons. To add domain-specific mappings:

1. Open `~/.claude/skills/no-emoji-icons/SKILL.md` (or `.claude/skills/...` for project scope)
2. Find the "Emoji → Lucide Mapping Reference" section
3. Add rows for any specific icons your project needs
4. Save — Claude picks up the changes next session

For your dad's specialty specifically, you may want to add icons for procedures, conditions, or equipment that don't have Lucide equivalents — drop those as custom SVG components in `/components/icons/` and reference them in the mapping table.
