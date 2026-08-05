export type CaseStudy = {
  slug: "ai-booking-platform" | "career-guidance-platform" | "neighbour-trust";
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
  videoEmbedUrl?: string;
};

export const caseStudies: Record<CaseStudy["slug"], CaseStudy> = {
  "ai-booking-platform": {
    slug: "ai-booking-platform",
    eyebrow: "Case Study · Workflow Automation Platform",
    title: "AI-Assisted Appointment Booking Platform",
    status: "Completed",
    role: "Backend Developer",
    timeline: "Completed",
    teamSize: "Solo",
    targetUsers: "Healthcare clinics and appointment-based businesses",
    overview:
      "A completed appointment booking platform that uses conversational AI to handle patient scheduling, doctor matching, availability checking, conflict resolution, and appointment creation.",
    problem:
      "Many clinics rely on manual scheduling processes that require staff to answer calls, verify patient information, check availability, and create appointments by hand.",
    solution:
      "A backend prototype that automates appointment scheduling through conversational flows, resolves patients, matches doctors, calculates availability dynamically, detects conflicts, and creates appointments idempotently.",
    keyFeatures: [
      "Conversational AI booking assistant powered by Vapi",
      "Patient identification and registration",
      "Doctor lookup and matching",
      "Dynamic availability calculation",
      "Conflict detection and resolution",
      "Alternative appointment suggestions",
      "Idempotent request handling",
    ],
    challenges: [
      "Designing dynamic availability calculation without relying on pre-generated booking slots.",
      "Preventing overlapping appointments while supporting concurrent booking requests.",
      "Separating booking intent from confirmed appointments to support reliable retry handling.",
    ],
    outcome:
      "Delivered a completed AI-assisted appointment booking workflow with Vapi-powered conversational scheduling and backend automation.",
    lessons: [
      "Critical business rules should be enforced at the database level, not only in application code.",
      "Workflow design often becomes more complex than API implementation.",
      "Reliability and consistency are core requirements for automation systems.",
    ],
    technologies: [
      { category: "Backend", items: ["Python", "FastAPI"] },
      { category: "Data", items: ["PostgreSQL", "SQLAlchemy", "Alembic"] },
      { category: "Voice / AI", items: ["Vapi"] },
    ],
    flowline: {
      problem: "Manual clinic scheduling loses time",
      solution: "Vapi-powered, conflict-aware booking",
      outcome: "automated appointment workflow",
    },
    github: "https://github.com/KBNkosi/ai-booking-system.git",
    liveDemo: null,
    videoEmbedUrl: "https://www.youtube.com/embed/SKPvAFXAOqU?si=zLV6q4I20OcvuxM_",
  },
  "career-guidance-platform": {
    slug: "career-guidance-platform",
    eyebrow: "Case Study · Recommendation System",
    title: "Career Guidance Platform",
    status: "Completed Capstone",
    role: "Data & Recommendation Systems Contributor",
    timeline: "Academic capstone",
    teamSize: "Team of 6",
    targetUsers: "Students exploring career and education pathways",
    overview:
      "A recommendation platform built to guide students from their interests and personality traits toward suitable career and university options.",
    problem:
      "Students struggle to connect their interests and personality traits to suitable careers and educational pathways.",
    solution:
      "Integrated behavioural assessments, educational datasets, and recommendation logic into a platform that suggests career and education pathways.",
    keyFeatures: [
      "Interest and personality assessment",
      "Career and education recommendations",
      "Data-driven matching",
      "Interactive guidance flow",
    ],
    challenges: [
      "Aligning assessment output with meaningful recommendations.",
      "Modelling educational and career data for useful matches.",
      "Designing intuitive flows for student decision support.",
    ],
    outcome:
      "Explores recommendation-system design, data modelling, and decision-support workflows.",
    lessons: [
      "Recommendation systems benefit from clear, explainable outputs.",
      "Careful domain modelling improves recommendation relevance.",
      "Iterating with student-focused scenarios helps reveal edge cases.",
    ],
    technologies: [
      { category: "Frontend", items: ["React", "Tailwind CSS"] },
      { category: "Backend", items: ["Flask", "SQLite"] },
      { category: "Data", items: ["Python", "Scikit-learn"] },
    ],
    flowline: {
      problem: "Students need better help connecting interests to careers",
      solution: "Recommendation platform using assessments and educational data",
      outcome: "Career guidance support through data-driven recommendations",
    },
    github: "https://github.com/KBNkosi/career-recommendation-system.git",
    liveDemo: "https://career-match-system.netlify.app/",
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
};

export const caseStudyOrder: CaseStudy["slug"][] = [
  "ai-booking-platform",
  "career-guidance-platform",
  "neighbour-trust",
];
