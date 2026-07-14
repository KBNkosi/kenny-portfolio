## Goal

Align all portfolio content with the Content Specification + Master Project Fact Sheet. Keep the existing visual design, layout, tokens, animations, and components. This is a content and structure update — no redesign.

## Scope of changes

### 1. `src/content/site.ts` — full rewrite of data (not shape)

- **Personal info**: location `Gauteng, South Africa`; email `nkosikenny9@gmail.com`; GitHub `https://github.com/KBNkosi`; LinkedIn `https://www.linkedin.com/in/kennynkosi`.
- **Hero**: keep current headline/lede structure; ensure copy matches the spec's positioning (workflow automation, service discovery, recommendation systems, marketplaces, community platforms).
- **Credibility stats**: rewrite to reflect what the fact sheet actually supports (e.g. "6 shipped projects", "3 featured platforms", "5 product domains", "Founder + team collaborations"). No fabricated metrics.
- **Core themes**: replace with the seven cross-project themes from the fact sheet (Workflow Automation, Recommendation Systems, Service Discovery, Marketplace Platforms, Community Platforms, Decision Support Systems, User-Centered Product Design).
- **`featuredProjects`** — rewrite the three entries from the fact sheet:
  - AI-Assisted Appointment Booking Platform (In Development, Backend Developer & System Designer, Workflow Automation Platform, Python/FastAPI/PostgreSQL/SQLAlchemy/Alembic/Vapi).
  - NeighborTrust (Frontend Prototype / Concept Validation, Product Designer & Frontend Developer, React/Vite/Tailwind/React Router). Rename all "Neighbour Trust" → "NeighborTrust" (slug stays `neighbour-trust` to avoid link breakage).
  - Founder-Led Marketplace MVP (Delivered Prototype, Frontend Developer / QA / Product Collaboration, FlutterFlow + Supabase, team of 4).
  - Extend each with `github` and `liveDemo` fields (nullable → render "Live demo not currently available.").
- **`supportingProjects`** (new, replaces the loose `additionalProjects`) — three cards, each with summary, problem, solution, technologies, `github`, `liveDemo`:
  - Career Guidance Platform (React, Tailwind, Flask, SQLite, Scikit-learn).
  - E-Commerce Storefront (React, Vite, Tailwind, React Router, Axios).
  - CrowdRail (PHP, MySQL, Bootstrap, Apache).
- **Principles**: keep as-is (spec-neutral positioning).
- **`experience` → `journey`**: replace with one-line milestones for the Career & Project Journey:
  1. BSc studies — foundations in software and systems.
  2. Career Guidance Capstone — recommendation systems & decision support.
  3. Technical Support (ALX) — real-world troubleshooting and user support.
  4. CrowdRail & E-Commerce Storefront — independent product building.
  5. Founder-Led Marketplace MVP — startup delivery in a team of 4.
  6. NeighborTrust — service discovery & community trust.
  7. AI-Assisted Appointment Booking Platform — workflow automation (current focus).
- **Testimonials**: keep the three quote slots; replace attributions with visible placeholders (`[Testimonial Name]`, `[Role/Company]`) since the fact sheet doesn't supply verified quotes. No invented names.
- **Toolkit**: rewrite to only technologies that appear in the fact sheet (Python/FastAPI/SQLAlchemy/Alembic/PostgreSQL/SQLite/MySQL/Scikit-learn/Flask/React/Vite/Tailwind/React Router/Axios/FlutterFlow/Supabase/PHP/Bootstrap/Apache/Vapi).
- **About**: rewrite to Gauteng + spec positioning (workflow automation, recommendation systems, marketplaces, community platforms, service discovery). No unsupported claims about investors, mentors, or clients.
- **Nav**: rename "Journey" label if present; add `Journey` entry if missing.

### 2. `src/content/projects.ts` — case studies rewritten from fact sheet + case-study additions

Only the three featured projects get case studies (per user rules). For each:
- Overview, Problem, Solution, Role, Key Features, Tech Stack (grouped), Challenges & Decisions, Key Takeaways, Business Outcome, Flowline problem/solution/outcome — sourced strictly from the fact sheet.
- Add `github` and `liveDemo` fields.
- Rename display title "Neighbour Trust" → "NeighborTrust" (slug unchanged).

Supporting projects do NOT get case study routes.

### 3. Components — small additions, no redesign

- **`FeaturedProjectCard`**: add a footer row with two link buttons — "Source Code" (GitHub) and "Live Demo" or the fallback text "Live demo not currently available." Existing card layout and hover behavior stay identical.
- **`SupportingProjectCard`** (new, lightweight): compact card — title, one-line summary, Problem line, Solution line, tech chips, Source Code + Live Demo links. Uses existing `Pill`, `Eyebrow`, border/token styles. Visually lighter (smaller padding, no flowline, no case-study link). No new tokens.
- **`JourneyList`** (new, or in-place in `index.tsx`): renders one-line milestones as a vertical list of dot + year/label + short line — reuses existing typography and border tokens.
- **Case study page (`projects.$slug.tsx`)**: add a "Challenges & Decisions" and "Key Takeaways" block (already partially there — align field names with new content shape), and add Source Code / Live Demo buttons in the header. No layout change beyond adding these blocks in the existing rhythm.

### 4. Homepage (`src/routes/index.tsx`)

- Update Featured Projects section — unchanged layout.
- Add a **Supporting Projects** section immediately after Featured Projects, using a 3-up compact card grid. Uses existing `SectionHeading` + section padding.
- Rename the timeline section to **"Career & Project Journey"** and swap in the milestone list.
- Update any copy blocks that reference stats/domains to match the new content.

### 5. Global consistency pass

- Remove every unsupported claim: no "investor engagement" (except where the fact sheet allows — it doesn't, so remove), no "mentor" testimonials attributed to real people, no invented client names, no unverified metrics.
- Remove any "built to learn / practice project / demonstrates my React skills" phrasing.
- Standardize project name spelling: **NeighborTrust** (one word, US spelling per fact sheet).
- Nav, footer, root metadata, and hero all reflect Gauteng + real contact details.

## Out of scope

- Visual redesign, token changes, font changes, animation changes.
- New routes beyond what already exists.
- Case studies for supporting projects.
- Any backend / auth / data-layer work.

## Verification

After edits: build passes, `/` renders all sections in order (Hero → Stats → Core Themes → Featured Projects → Supporting Projects → Principles → Career & Project Journey → Toolkit → Testimonials → About → Contact), all three case study routes render with GitHub / Live Demo buttons and the new Challenges + Takeaways blocks, and a grep for placeholder strings (`[Your Email]`, `Mpumalanga`, `Neighbour Trust`) returns nothing.