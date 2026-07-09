export type CaseStudy = {
  slug: "ai-booking-platform" | "marketplace-mvp" | "neighbour-trust";
  eyebrow: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  keyFeatures: string[];
  challenges: string[];
  outcome: string;
  lessons: string[];
  technologies: { category: string; items: string[] }[];
  flowline: { problem: string; solution: string; outcome: string };
};

export const caseStudies: Record<CaseStudy["slug"], CaseStudy> = {
  "neighbour-trust": {
    slug: "neighbour-trust",
    eyebrow: "Case Study · Community Services Platform",
    title: "Neighbour Trust",
    overview:
      "A hyperlocal marketplace connecting neighbourhoods to trusted service providers — plumbers, tutors, cleaners, handymen — through verified profiles, structured booking, and community reviews.",
    problem:
      "Finding a reliable local service provider still depends on word-of-mouth. Providers, in turn, struggle to reach new customers outside their immediate network. The result is a fragmented, low-trust market where both sides waste time.",
    solution:
      "A location-first marketplace with verified providers, structured service categories, in-platform booking, and a review system anchored to real bookings. The platform prioritises trust signals over volume of listings.",
    role: "Founding Developer — owning product architecture, full-stack implementation, and the pilot rollout in collaboration with the founder.",
    keyFeatures: [
      "Provider onboarding with verification checkpoints",
      "Location-based service discovery",
      "In-platform booking and messaging",
      "Review system tied to completed bookings",
      "Admin tooling for pilot moderation",
    ],
    challenges: [
      "Designing trust mechanics that work at neighbourhood scale, not city scale.",
      "Balancing provider friction (verification) against onboarding speed.",
      "Building booking flows resilient to real-world scheduling chaos.",
    ],
    outcome:
      "A working platform enabling early neighbourhood pilots, with providers actively onboarding and initial bookings running end-to-end.",
    lessons: [
      "Trust is a product feature, not a policy page.",
      "Local marketplaces need dense participation before wide reach.",
      "Founder collaboration is fastest when the developer owns the whole stack.",
    ],
    technologies: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Server Functions"] },
      { category: "Data", items: ["PostgreSQL", "Supabase", "RLS"] },
    ],
    flowline: {
      problem: "Word-of-mouth service discovery",
      solution: "Verified local marketplace",
      outcome: "Pilot-ready platform running bookings",
    },
  },
  "ai-booking-platform": {
    slug: "ai-booking-platform",
    eyebrow: "Case Study · AI-Powered SaaS",
    title: "AI Booking Platform",
    overview:
      "A conversational booking system that lets small businesses capture and confirm appointments through an AI-driven flow — replacing long forms and missed calls with a single, guided interaction.",
    problem:
      "Small service businesses lose bookings to friction. Traditional forms are long, phone calls get missed, and the follow-up dance costs time on both sides. Owners wanted a way to convert interest into confirmed appointments without adding staff.",
    solution:
      "A conversational booking flow powered by an AI layer that understands intent, checks availability against the business's schedule, and confirms in-line. Designed as a founder-led MVP to validate the core interaction before scaling features.",
    role: "Solo Developer, working directly with the founder on product scoping, prototype delivery, and investor-facing demos.",
    keyFeatures: [
      "AI-powered intent capture and slot suggestion",
      "Real-time availability checks",
      "In-conversation confirmation",
      "Business owner dashboard for review",
      "Demo mode for investor conversations",
    ],
    challenges: [
      "Keeping the AI focused on booking intent without over-scoping into general chat.",
      "Handling ambiguous availability requests gracefully.",
      "Delivering a demo-ready prototype on a tight founder timeline.",
    ],
    outcome:
      "Delivered a working prototype that enabled concept validation, live demos, and early investor engagement for the founder.",
    lessons: [
      "AI works best when constrained to a specific job.",
      "For founder MVPs, demo-quality is a product requirement.",
      "Fast iteration with a founder beats a polished plan built in isolation.",
    ],
    technologies: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "REST APIs"] },
      { category: "AI", items: ["LLM Integration", "Prompt Design"] },
    ],
    flowline: {
      problem: "Booking friction losing revenue",
      solution: "AI-driven conversational booking",
      outcome: "Prototype validated with investors",
    },
  },
  "marketplace-mvp": {
    slug: "marketplace-mvp",
    eyebrow: "Case Study · Digital Marketplace",
    title: "Marketplace MVP",
    overview:
      "A lean two-sided marketplace MVP built to test demand, onboarding flows, and transaction mechanics before committing to a full platform investment.",
    problem:
      "The founder had a marketplace hypothesis but no way to validate it without a real product in front of real users. Building a full platform first would have burned months before the first learning.",
    solution:
      "A focused MVP covering listings, search, messaging, and lightweight transactions — architected so the pieces that survived validation could be extended, not thrown away.",
    role: "Full-Stack Developer — scoping, implementation, and iteration in partnership with the founder.",
    keyFeatures: [
      "Two-sided onboarding (sellers and buyers)",
      "Listing creation and browsing",
      "Search and category filtering",
      "In-platform messaging",
      "Basic transaction and status tracking",
    ],
    challenges: [
      "Cutting scope aggressively without losing the mechanics that make a marketplace work.",
      "Designing data models that could survive post-MVP evolution.",
      "Keeping the MVP demo-ready throughout iteration.",
    ],
    outcome:
      "Enabled real user testing, informed the next round of product decisions, and gave the founder concrete evidence to move forward.",
    lessons: [
      "The right MVP is the smallest slice that still teaches you something.",
      "Marketplace mechanics don't scale down as easily as feature lists do.",
      "Architect for the next version, not the current one.",
    ],
    technologies: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "REST APIs"] },
      { category: "Data", items: ["PostgreSQL"] },
    ],
    flowline: {
      problem: "Unvalidated marketplace hypothesis",
      solution: "Focused two-sided MVP",
      outcome: "Real learnings driving next steps",
    },
  },
};

export const caseStudyOrder: CaseStudy["slug"][] = [
  "neighbour-trust",
  "ai-booking-platform",
  "marketplace-mvp",
];
