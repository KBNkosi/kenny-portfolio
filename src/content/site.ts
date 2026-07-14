export const site = {
  name: "Kenny Nkosi",
  title: "Software Developer",
  headline:
    "Software Developer Building Business Platforms, Digital Marketplaces & Workflow Solutions",
  location: "Gauteng, South Africa",
  email: "nkosikenny9@gmail.com",
  github: "https://github.com/KBNkosi",
  linkedin: "https://www.linkedin.com/in/kennynkosi",
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
    "From AI-assisted booking platforms to community-driven marketplaces and recommendation systems, I design and ship software that solves real operational problems — across workflow automation, service discovery, and community platforms.",
  ctas: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Get In Touch", href: "#contact" },
  },
};

export const credibility = {
  stats: [
    { value: "6", label: "Projects shipped across product domains" },
    { value: "3", label: "Featured platforms in depth" },
    { value: "5+", label: "Product areas covered end-to-end" },
    { value: "1–6", label: "Solo builds through team collaborations" },
  ],
  highlights: [
    "Currently building an AI-assisted appointment booking platform with FastAPI, PostgreSQL, and workflow automation at its core.",
    "Shipped a founder-led marketplace MVP in a team of four, delivering a functional product for concept validation.",
    "Designed NeighborTrust — a trust-first service discovery prototype for local providers.",
    "Contributed data collection, recommendation logic, and personality assessment work on a six-person capstone recommendation platform.",
  ],
};

export const coreThemes = [
  "Workflow Automation",
  "Recommendation Systems",
  "Service Discovery",
  "Marketplace Platforms",
  "Community Platforms",
  "Decision Support Systems",
  "User-Centered Product Design",
];

export type FeaturedProject = {
  slug: string;
  type: string;
  status: string;
  title: string;
  summary: string;
  role: string;
  timeline: string;
  problem: string;
  solution: string;
  outcome: string;
  focusAreas: string[];
  github: string | null;
  liveDemo: string | null;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "ai-booking-platform",
    type: "Workflow Automation Platform",
    status: "In Development",
    title: "AI-Assisted Appointment Booking Platform",
    summary:
      "An AI-assisted platform that automates appointment scheduling for clinics and appointment-based businesses through conversational interactions, patient resolution, availability calculation, and conflict detection.",
    role: "Backend Developer & System Designer",
    timeline: "2–4 months · Solo",
    problem:
      "Clinics rely on manual scheduling — staff answer calls, verify patients, check availability, and create appointments by hand.",
    solution:
      "A backend that resolves patients, matches doctors, calculates availability dynamically, detects conflicts, and creates appointments idempotently.",
    outcome:
      "Demonstrates workflow automation, scheduling systems, and scalable appointment management.",
    focusAreas: ["Workflow Automation", "Scheduling Systems", "System Design"],
    github: null,
    liveDemo: null,
  },
  {
    slug: "neighbour-trust",
    type: "Community Marketplace / Service Discovery Platform",
    status: "Frontend Prototype",
    title: "NeighborTrust",
    summary:
      "A recommendation-driven platform that helps residents discover trusted local service providers through community referrals, provider profiles, and AI-assisted search.",
    role: "Product Designer & Frontend Developer",
    timeline: "4–6 weeks · Solo",
    problem:
      "People struggle to identify reliable service providers — recommendations are fragmented, reviews are anonymous, and trust signals are thin.",
    solution:
      "A trust-first discovery experience: community recommendations, structured provider profiles, ratings, and an AI-assisted search flow.",
    outcome:
      "Validates a trust-first approach to local service discovery.",
    focusAreas: ["Service Discovery", "Community Trust", "Local Commerce"],
    github: null,
    liveDemo: null,
  },
  {
    slug: "marketplace-mvp",
    type: "Startup MVP",
    status: "Delivered Prototype",
    title: "Founder-Led Marketplace MVP",
    summary:
      "A functional marketplace prototype built with a founder and a small team to support concept validation within a fixed two-month timeline.",
    role: "Frontend Developer, QA & Product Collaboration",
    timeline: "2 months · Team of 4",
    problem:
      "The founder needed a working marketplace prototype to support concept validation and early business conversations.",
    solution:
      "Collaborated with the founder and dev team to ship core marketplace listings, user interactions, and prototype workflows on FlutterFlow + Supabase.",
    outcome:
      "Delivered a functional MVP for startup validation.",
    focusAreas: ["Startup Delivery", "Product Validation", "Marketplace Systems"],
    github: null,
    liveDemo: null,
  },
];

export type SupportingProject = {
  title: string;
  type: string;
  status: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  github: string | null;
  liveDemo: string | null;
};

export const supportingProjects: SupportingProject[] = [
  {
    title: "Career Guidance Platform",
    type: "Recommendation & Decision Support",
    status: "Completed Capstone",
    role: "Data & Recommendation Systems Contributor · Team of 6",
    summary:
      "A recommendation platform combining assessments, educational datasets, and recommendation logic to guide students toward suitable careers.",
    problem:
      "Students struggle to connect their interests and personality traits to suitable careers and educational pathways.",
    solution:
      "Behavioural and personality assessments feeding into a recommendation engine over university and course datasets.",
    technologies: ["React", "Tailwind CSS", "Flask", "SQLite", "Scikit-learn"],
    github: null,
    liveDemo: null,
  },
  {
    title: "E-Commerce Storefront",
    type: "Product Discovery & Shopping",
    status: "Completed Personal Project",
    role: "Frontend Developer · Solo",
    summary:
      "A responsive storefront covering product discovery, search, filtering, product detail pages, and persistent shopping cart state.",
    problem:
      "Shoppers need intuitive ways to discover, filter, compare, and manage products before purchasing.",
    solution:
      "Catalog browsing, category filters, product detail pages, and cart management on a modern React stack.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Router", "Axios"],
    github: null,
    liveDemo: null,
  },
  {
    title: "CrowdRail",
    type: "Community Reporting Platform",
    status: "Completed Academic Project",
    role: "Full-Stack Developer · Solo",
    summary:
      "A centralised platform where rail enthusiasts submit train sightings, upload media, and take part in moderated community discussions.",
    problem:
      "Train sightings and rail observations are scattered across fragmented channels, making discovery and discussion difficult.",
    solution:
      "Authentication, community reporting, media uploads, dashboards, and role-based moderation on a LAMP stack.",
    technologies: ["PHP", "MySQL", "Bootstrap", "Apache"],
    github: null,
    liveDemo: null,
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

export type JourneyMilestone = {
  phase: string;
  title: string;
  body: string;
};

export const journey: JourneyMilestone[] = [
  {
    phase: "Foundations",
    title: "BSc studies",
    body: "Built foundations in software and systems thinking through university coursework.",
  },
  {
    phase: "Capstone",
    title: "Career Guidance Platform",
    body: "Contributed data collection, personality assessment logic, and recommendation-system support on a six-person capstone.",
  },
  {
    phase: "Support",
    title: "Technical Support — ALX",
    body: "Real-world troubleshooting, user support, and communication under operational pressure.",
  },
  {
    phase: "Independent Building",
    title: "CrowdRail & E-Commerce Storefront",
    body: "Shipped full-stack and frontend projects end-to-end as a solo developer.",
  },
  {
    phase: "Startup Delivery",
    title: "Founder-Led Marketplace MVP",
    body: "Delivered a marketplace prototype in a team of four within a fixed two-month timeline.",
  },
  {
    phase: "Service Discovery",
    title: "NeighborTrust",
    body: "Designed and prototyped a trust-first local service discovery platform.",
  },
  {
    phase: "Currently Building",
    title: "AI-Assisted Appointment Booking Platform",
    body: "Backend and system design for a workflow automation platform on Python, FastAPI, and PostgreSQL.",
  },
];

export const testimonials = [
  {
    quote:
      "Kenny took a rough concept and turned it into a working product I could actually put in front of people. He asks the right questions and moves quickly.",
    author: "[Testimonial Name]",
    role: "[Role / Company]",
  },
  {
    quote:
      "Rare combination of technical depth and product judgement. He treats the business problem as seriously as the code.",
    author: "[Testimonial Name]",
    role: "[Role / Company]",
  },
  {
    quote:
      "Reliable, communicative, and thoughtful. Kenny doesn't just build what you ask for — he builds what you actually need.",
    author: "[Testimonial Name]",
    role: "[Role / Company]",
  },
];

export const toolkit = [
  {
    category: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "React Router", "Axios", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "Flask", "PHP"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "SQLAlchemy", "Alembic", "SQLite", "MySQL"],
  },
  {
    category: "AI, Recommendations & Voice",
    items: ["Scikit-learn", "Vapi"],
  },
  {
    category: "Rapid Delivery",
    items: ["FlutterFlow", "Supabase", "Apache"],
  },
];

export const about = [
  "I'm a software developer based in Gauteng, South Africa, working across workflow automation, recommendation systems, marketplaces, community platforms, and service discovery.",
  "Most of my work centres on business platforms that connect people, services, and processes — from AI-assisted scheduling backends to trust-first local marketplaces.",
  "I've shipped as a solo developer, contributed to six-person academic teams, and collaborated with a founder on a startup MVP under a fixed timeline.",
  "I'm most useful in the ambiguous, early stages — where a problem needs to be understood before it can be built.",
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Journey", href: "/#journey" },
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Contact", href: "/#contact" },
];
