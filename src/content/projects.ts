export type CaseStudy = {
  slug: "ai-booking-platform" | "marketplace-mvp" | "neighbour-trust";
  eyebrow: string;
  title: string;
  status: string;
  role: string;
  timeline: string;
  teamSize: string;
  targetUsers: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  challenges: string[];
  outcome: string;
  lessons: string[];
  technologies: { category: string; items: string[] }[];
  flowline: { problem: string; solution: string; outcome: string };
  github: string | null;
  liveDemo: string | null;
};

export const caseStudies: Record<CaseStudy["slug"], CaseStudy> = {
  "ai-booking-platform": {
    slug: "ai-booking-platform",
    eyebrow: "Case Study · Workflow Automation Platform",
    title: "AI-Assisted Appointment Booking Platform",
    status: "In Development",
    role: "Backend Developer & System Designer",
    timeline: "In-progress",
    teamSize: "Solo",
    targetUsers: "Healthcare clinics and appointment-based businesses",
    overview:
      "An appointment booking platform designed to automate scheduling workflows through conversational interactions, patient resolution, availability calculation, conflict detection, and appointment creation.",
    problem:
      "Many clinics rely on manual scheduling processes that require staff to answer calls, verify patient information, check availability, and create appointments by hand.",
    solution:
      "A backend that automates appointment scheduling through conversational flows, resolves patients, matches doctors, calculates availability dynamically, detects conflicts, and creates appointments idempotently.",
    keyFeatures: [
      "Appointment scheduling workflows",
      "Patient identification and registration",
      "Doctor lookup and matching",
      "Dynamic availability calculation",
      "Conflict detection",
      "Alternative appointment suggestions",
      "Idempotent request handling",
    ],
    challenges: [
      "Designing dynamic availability calculation without relying on pre-generated booking slots.",
      "Preventing overlapping appointments while supporting concurrent booking requests.",
      "Separating booking intent from confirmed appointments to support reliable retry handling.",
    ],
    outcome:
      "Demonstrates workflow automation, scheduling logic, availability computation, and backend system design.",
    lessons: [
      "Critical business rules should be enforced at the database level, not only in application code.",
      "Workflow design often becomes more complex than API implementation.",
      "Reliability and consistency are core requirements for automation systems.",
    ],
    technologies: [
      { category: "Backend", items: ["Python", "FastAPI"] },
      { category: "Data", items: ["PostgreSQL", "SQLAlchemy", "Alembic"] },
      { category: "Voice / AI", items: ["Vapi (planned)"] },
    ],
    flowline: {
      problem: "Manual clinic scheduling loses time",
      solution: "AI-assisted, conflict-aware booking",
      outcome: "automated appointment workflow",
    },
    github: "https://github.com/KBNkosi/ai-booking-system.git",
    liveDemo: null,
  },
  "neighbour-trust": {
    slug: "neighbour-trust",
    eyebrow: "Case Study · Community Marketplace / Service Discovery",
    title: "NeighborTrust",
    status: "Prototype",
    role: "Product Designer & Frontend Developer",
    timeline: "4–6 weeks",
    teamSize: "Solo",
    targetUsers: "Residents seeking trusted local service providers",
    overview:
      "A recommendation-driven platform that helps residents discover trusted local professionals through community trust, referrals, and AI-assisted search.",
    problem:
      "People struggle to identify reliable service providers due to fragmented recommendations, anonymous reviews, and limited trust signals.",
    solution:
      "A service discovery platform combining community recommendations, provider profiles, ratings, and search functionality.",
    keyFeatures: [
      "Provider discovery",
      "Community recommendations",
      "Provider profiles",
      "Ratings and trust indicators",
      "AI-assisted provider search",
      "Recommendation submission",
    ],
    challenges: [
      "Designing trust mechanisms that go beyond simple ratings and reviews.",
      "Creating intuitive service discovery flows for local providers.",
      "Structuring provider information to support search, recommendations, and AI-assisted discovery.",
    ],
    outcome:
      "Explores approaches to improving local service discovery through recommendations and trust-based interactions.",
    lessons: [
      "Trust is a product design problem as much as a technical problem.",
      "Effective discovery experiences reduce decision-making friction.",
      "Users value confidence and credibility more than large amounts of information.",
    ],
    technologies: [
      { category: "Frontend", items: ["React", "Vite"] },
      { category: "Styling", items: ["Tailwind CSS"] },
      { category: "Routing", items: ["React Router"] },
    ],
    flowline: {
      problem: "Fragmented, low-trust local recommendations",
      solution: "Community-driven trust and discovery",
      outcome: "Validated trust-first service discovery",
    },
    github: "https://github.com/KBNkosi/NeighborTrust.git",
    liveDemo: "https://community-service-marketplace.vercel.app/",
  },
  "marketplace-mvp": {
    slug: "marketplace-mvp",
    eyebrow: "Case Study · Startup MVP",
    title: "Founder-Led Marketplace MVP",
    status: "Delivered Prototype",
    role: "Frontend Developer, QA & Product Collaboration",
    timeline: "2 months",
    teamSize: "Team of 4",
    targetUsers: "Startup founder and early stakeholders evaluating a marketplace concept",
    overview:
      "A functional marketplace prototype built in collaboration with a founder and a small team to support concept validation within a fixed two-month timeline.",
    problem:
      "The founder required a working marketplace prototype to support concept validation and early business discussions.",
    solution:
      "Collaborated directly with the founder and dev team to build a functional marketplace MVP on FlutterFlow and Supabase, covering core listings, user interactions, and prototype validation features.",
    keyFeatures: [
      "Marketplace listings",
      "User interactions",
      "Core marketplace workflows",
      "Prototype validation features",
    ],
    challenges: [
      "Delivering a functional product within a fixed two-month timeline.",
      "Working with evolving requirements as the business concept developed.",
      "Learning unfamiliar tools while actively contributing to delivery.",
    ],
    outcome:
      "Delivered a functional MVP for startup validation.",
    lessons: [
      "Shipping a usable product is often more important than technical perfection.",
      "Building for validation requires different priorities than building for scale.",
      "Software development decisions should align with business goals.",
    ],
    technologies: [
      { category: "Rapid Delivery", items: ["FlutterFlow"] },
      { category: "Backend & Data", items: ["Supabase"] },
    ],
    flowline: {
      problem: "Founder needed a validation-ready product",
      solution: "Team-shipped MVP on FlutterFlow + Supabase",
      outcome: "Functional MVP for startup validation",
    },
    github: null,
    liveDemo: null,
  },
};

export const caseStudyOrder: CaseStudy["slug"][] = [
  "ai-booking-platform",
  "neighbour-trust",
  "marketplace-mvp",
];
