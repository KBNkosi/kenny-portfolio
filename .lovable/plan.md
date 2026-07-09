
# Kenny Nkosi — Portfolio Build Plan

Hybrid architecture: one long scrolling homepage plus three dedicated case-study routes. Cool off-white palette, Fraunces + Inter + IBM Plex Mono, one disciplined blue (#296CD8). Signature device: a horizontal Problem → Solution → Outcome flow-line reused at three scales.

## Routes

```text
/                              scrolling homepage (all sections)
/projects/ai-booking-platform  case study
/projects/marketplace-mvp      case study
/projects/neighbour-trust      case study
```

Top nav: Home · Projects (scrolls to Featured Projects on `/`) · GitHub · LinkedIn · Contact. Each route gets its own `head()` — distinct title, description, og:title/description. Case studies also set og:image once real screenshots exist (omitted for now).

## Homepage section order

Hero → Credibility Snapshot → Core Themes → Featured Projects → How I Work → Professional Experience → Testimonials → Technical Toolkit → About → Contact.

(Note: this differs from the design doc's order — Case Studies live on their own routes per the site-structure brief, and How I Work moves up before Experience per your latest spec.)

## Design system

**Color tokens** added to `src/styles.css` via `@theme inline` + `:root`:
- `--bg #FAFAFC`, `--bg-alt #F3F5FA`, `--surface #FFFFFF`
- `--ink #12151C`, `--ink-soft #4B5262`, `--ink-faint #8890A0`
- `--border #E4E8F0`
- `--primary #296CD8`, `--primary-dark #1E52A8`, `--primary-tint #EAF1FC`

Shadcn's existing tokens get remapped to these so `bg-background`, `text-foreground`, `border-border`, `bg-primary` all resolve to the new palette. No dark mode (portfolio is light-only per brief).

**Typography** via `<link>` tags in `__root.tsx` head (Google Fonts):
- Fraunces (variable, opsz + wght) — display/headings, one italic word per headline max
- Inter — body/UI
- IBM Plex Mono — eyebrows, tags, metadata (uppercase, 0.08em tracking)

Type scale exactly as specified (H1 64→38px, H2 40→28px, H3 24→20px, body 17→16px, eyebrow 12px mono).

**Spacing & layout**: 8px base unit; container max-width 1200px; prose max-width 720px; section padding 128/96/64px desktop/tablet/mobile; alternating `--bg` / `--bg-alt` bands; cards 1px border + 12px radius + 32–40px padding, shadow only on hover.

## Signature: the flow-line component

One reusable `<FlowLine problem solution outcome variant="hero|featured|case" />` component drives the whole motif:
- **hero**: miniature, decorative, three unlabeled nodes; SVG line draws left-to-right on mount (~600ms), nodes scale/fade in sequence
- **featured**: horizontal, labeled — three short statements sit under Problem / Solution / Outcome nodes; on card hover the connecting line fills left-to-right in `--primary`
- **case**: larger, full-width at the top of each case-study route

All animation respects `prefers-reduced-motion` (fallback: fully drawn, no reveal). Scroll reveals use IntersectionObserver, 12px fade-up, 60–80ms stagger for grouped items.

## Homepage section notes

- **Hero**: full-viewport left-aligned. Eyebrow "SOFTWARE DEVELOPER", Fraunces H1 with one italic word, Inter lede ≤60ch, primary "View Projects" + ghost "Get In Touch". Miniature flow-line renders as the page-load moment.
- **Credibility Snapshot**: `--bg-alt` band, 4 stats separated by hairline vertical dividers (no boxes), Fraunces numerals + Inter labels. Highlight bullets below as a compact 2-column list.
- **Core Themes**: single centered row of `--primary-tint` pills, ~15vh section.
- **Featured Projects**: three stacked full-width cards (Neighbour Trust, AI Booking, Marketplace MVP). Each shows mono eyebrows (type + status), Fraunces title, one-line summary, flow-line, focus tags, role + timeline top-right. Title links to the case-study route.
- **How I Work**: 2×3 grid of principle cards, no numbering.
- **Professional Experience**: single vertical hairline with `--primary` dot markers, Fraunces role titles, mono durations, responsibilities grouped in short 2-column lines.
- **Testimonials**: 3-card row (stack on mobile), Inter 19px quotes, mono attribution below thin rule, no photos (initials-in-circle if needed).
- **Technical Toolkit**: pill clusters grouped by category label (Frontend, Backend, Databases, Tools, Product & Collaboration).
- **About**: 720px reading column, prose only.
- **Contact**: `--primary-tint` band, large Fraunces headline "Let's Build Something Useful", primary CTA (mailto), understated text links to GitHub/LinkedIn.

Placeholders `[Your Email]`, `[Your GitHub URL]`, `[Your LinkedIn URL]`, `[Founder/Mentor/Teammate Name]` render as-is so you can find & replace later.

## Case-study route template

Each `/projects/*` route follows the same shape: mono eyebrow + Fraunces H1, large flow-line, then Project Overview → Problem → Solution → My Role → Key Features → Challenges → Outcome/Impact (`--primary-tint` callout) → Lessons Learned (tag list) → Technologies Used (grouped pills). "Back to all projects" link at top, next/previous case-study links at bottom.

## Components to build

```text
src/components/site/Nav.tsx
src/components/site/Footer.tsx
src/components/site/FlowLine.tsx        // signature motif, 3 variants
src/components/site/SectionHeading.tsx  // eyebrow + H2 with primary tick
src/components/site/Eyebrow.tsx
src/components/site/Pill.tsx
src/components/site/StatStrip.tsx
src/components/site/FeaturedProjectCard.tsx
src/components/site/PrincipleCard.tsx
src/components/site/TimelineItem.tsx
src/components/site/TestimonialCard.tsx
src/components/site/ToolkitCluster.tsx
src/components/site/Reveal.tsx          // IntersectionObserver fade-up wrapper
src/components/site/CaseStudyLayout.tsx // shared shell for /projects/*

src/content/site.ts                     // all copy from the spec, typed
src/content/projects.ts                 // case-study data keyed by slug

src/routes/index.tsx                    // rewritten (removes placeholder)
src/routes/projects.$slug.tsx           // dynamic case-study route
```

`__root.tsx` gets font `<link>` tags, real site metadata, and wraps `<Outlet />` in the shared Nav + Footer.

## Technical notes

- Fonts loaded via `<link>` in `__root.tsx` head (per Tailwind v4 rules — never `@import` remote URLs in `styles.css`).
- Font-family tokens registered under `@theme` so `font-display`, `font-sans`, `font-mono` utilities work.
- `FlowLine` uses inline SVG with `stroke-dasharray` / `stroke-dashoffset` for the draw-in; nodes are `<circle>` elements with staggered CSS keyframes. All animation gated on a `useReducedMotion()` hook.
- `projects.$slug.tsx` uses `notFound()` for unknown slugs; `notFoundComponent` shows a friendly "case study not found" with a link back to `/`.
- No backend needed — everything is static content. No Lovable Cloud enablement.

## Out of scope for this build

- Real project screenshots (case-study heroes stay typographic until you supply images)
- Actual email / GitHub / LinkedIn / testimonial names
- Blog, resume PDF download, or contact form (contact is a mailto)
