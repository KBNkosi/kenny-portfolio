export const site = {
  name: "Kenny Nkosi",
  title: "Software Developer",
  headline: "Software Developer Building Business Platforms, Digital Marketplaces & Workflow Solutions",
  location: "Mpumalanga, South Africa",
  email: "[Your Email]",
  github: "[Your GitHub URL]",
  linkedin: "[Your LinkedIn URL]",
};

export const hero = {
  eyebrow: "Software Developer",
  // one italic word rendered via <em> in JSX
  headlineParts: {
    before: "I build software platforms that connect people, services, opportunities, and business ",
    italic: "processes",
    after: ".",
  },
  lede:
    "From AI-powered booking platforms to community-driven marketplaces, I design and ship business tools that solve real operational problems — not just prototypes.",
  ctas: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Get In Touch", href: "#contact" },
  },
};

export const credibility = {
  stats: [
    { value: "3+", label: "Production-grade platforms shipped" },
    { value: "2", label: "Founders collaborated with directly" },
    { value: "5", label: "Product domains covered" },
    { value: "100%", label: "Self-directed builds" },
  ],
  highlights: [
    "Delivered a working AI-powered booking prototype that enabled investor conversations.",
    "Collaborated directly with founders to translate ambiguous business ideas into shipped software.",
    "Built full-stack applications across service marketplaces, e-commerce, and workflow automation.",
    "Comfortable owning a product end-to-end: research, architecture, implementation, iteration.",
  ],
};

export const coreThemes = [
  "Service Discovery",
  "Digital Marketplaces",
  "Customer Interactions",
  "Workflow Automation",
  "Referral Pipelines",
  "Community Platforms",
];

export type FeaturedProject = {
  slug: string;
  type: string;
  status: "In Development" | "Completed" | "Prototype";
  title: string;
  summary: string;
  role: string;
  timeline: string;
  problem: string;
  solution: string;
  outcome: string;
  focusAreas: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "neighbour-trust",
    type: "Community Services Platform",
    status: "In Development",
    title: "Neighbour Trust",
    summary:
      "A hyperlocal service marketplace helping neighbourhoods find and hire trusted service providers.",
    role: "Founding Developer",
    timeline: "2025 — Present",
    problem: "Local service discovery relies on word-of-mouth, leaving gaps in trust and availability.",
    solution: "A location-first marketplace with verified providers, reviews, and structured booking flows.",
    outcome: "Working platform enabling early neighbourhood pilots and provider onboarding.",
    focusAreas: ["Service Discovery", "Trust & Reviews", "Community"],
  },
  {
    slug: "ai-booking-platform",
    type: "AI-Powered SaaS",
    status: "Prototype",
    title: "AI Booking Platform",
    summary:
      "Intelligent booking automation that lets small businesses manage appointments through conversational flows.",
    role: "Solo Developer, in partnership with a founder",
    timeline: "2024",
    problem: "Small businesses lose bookings to friction — long forms, missed calls, and manual back-and-forth.",
    solution: "An AI-driven booking flow that captures intent, checks availability, and confirms in one conversation.",
    outcome: "Delivered a working prototype that enabled concept validation and investor engagement.",
    focusAreas: ["AI Interactions", "Booking Automation", "Founder Collaboration"],
  },
  {
    slug: "marketplace-mvp",
    type: "Digital Marketplace",
    status: "Completed",
    title: "Marketplace MVP",
    summary:
      "A two-sided marketplace MVP built to test demand, onboarding flows, and transaction mechanics.",
    role: "Full-Stack Developer",
    timeline: "2024",
    problem: "The founder needed to validate a marketplace concept quickly, without committing to a full platform build.",
    solution: "A lean MVP covering listings, search, messaging, and transactions — designed to be extended, not thrown away.",
    outcome: "Enabled real user testing and informed the next round of product decisions.",
    focusAreas: ["MVP Delivery", "Marketplace Mechanics", "Rapid Iteration"],
  },
];

export const additionalProjects = [
  {
    title: "Career Guidance Platform",
    outcome: "Helped students explore study paths through structured, data-driven recommendations.",
    tags: ["Guidance", "Content Platform"],
  },
  {
    title: "E-Commerce Marketplace",
    outcome: "Built merchant and buyer flows around a curated product catalog.",
    tags: ["E-Commerce", "Catalog"],
  },
  {
    title: "CrowdRail",
    outcome: "Prototype exploring crowd-driven logistics for shared transport.",
    tags: ["Logistics", "Prototype"],
  },
];

export const principles = [
  {
    title: "Start with the business problem.",
    body: "Every project begins with the operational pain, not the tech stack. The tools are chosen last.",
  },
  {
    title: "Ship the smallest honest version.",
    body: "A working slice beats a plan. I release early, learn, and iterate against real feedback.",
  },
  {
    title: "Design for the workflow.",
    body: "Software lives inside people's day-to-day. Flow, states, and edge cases matter as much as features.",
  },
  {
    title: "Collaborate with founders directly.",
    body: "I treat non-technical stakeholders as partners — translating intent into product decisions.",
  },
  {
    title: "Own the whole stack when needed.",
    body: "From data model to interface, I move where the problem is. Comfortable across the full boundary.",
  },
  {
    title: "Prefer clarity over cleverness.",
    body: "Boring, predictable code that another developer can read and extend outlasts a clever one-liner.",
  },
];

export const experience = [
  {
    role: "Founding Developer — Neighbour Trust",
    duration: "2025 — Present",
    responsibilities: [
      "Architect and build the marketplace platform end-to-end.",
      "Design provider onboarding, verification, and booking flows.",
      "Partner with the founder on product direction and pilot rollout.",
      "Own frontend, backend, database, and deployment decisions.",
    ],
  },
  {
    role: "Software Developer — Independent Projects",
    duration: "2023 — Present",
    responsibilities: [
      "Ship full-stack applications across marketplaces, SaaS, and workflow tools.",
      "Collaborate with founders on MVP scoping and delivery.",
      "Translate ambiguous ideas into working software and validated learning.",
      "Maintain and evolve production codebases across multiple domains.",
    ],
  },
  {
    role: "Self-Directed Study & Product Building",
    duration: "2022 — 2023",
    responsibilities: [
      "Built foundations across web development, databases, and system design.",
      "Delivered practice projects with real users to compress the learning loop.",
      "Adopted a product-first mindset: research, ship, measure, refine.",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Kenny took a rough concept and turned it into a working product I could actually put in front of investors. He asks the right questions and moves quickly.",
    author: "[Founder Name]",
    role: "Founder, AI Booking Platform",
  },
  {
    quote:
      "Rare combination of technical depth and product judgement. He treats the business problem as seriously as the code.",
    author: "[Mentor Name]",
    role: "Product Mentor",
  },
  {
    quote:
      "Reliable, communicative, and thoughtful. Kenny doesn't just build what you ask for — he builds what you actually need.",
    author: "[Teammate Name]",
    role: "Collaborator",
  },
];

export const toolkit = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "TanStack", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Server Functions", "REST APIs", "Auth Flows"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Supabase", "Row-Level Security"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel", "Figma"],
  },
  {
    category: "Product & Collaboration",
    items: ["Founder Partnership", "MVP Scoping", "User Research", "Iteration Loops"],
  },
];

export const about = [
  "I'm a software developer based in Mpumalanga, South Africa, working at the intersection of product thinking and full-stack engineering.",
  "My work focuses on business platforms, digital marketplaces, and workflow solutions — systems that help real organisations connect people, services, and opportunities.",
  "Most of what I've built has been in direct collaboration with founders: turning early concepts into working software that stands up to real users, real feedback, and honest questions from investors.",
  "I'm most useful in the ambiguous, early stages — where a problem needs to be understood before it can be built.",
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Contact", href: "/#contact" },
];
