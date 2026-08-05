export const site = {
  name: "Kenny Nkosi",
  title: "Software Developer",
  headline:
    "Software Developer building practical software to solve real-world problems",
  location: "Gauteng, South Africa",
  email: "nkosikenny9@gmail.com",
  github: "https://github.com/KBNkosi",
  linkedin: "https://www.linkedin.com/in/kennynkosi",
};

export const hero = {
  eyebrow: "Software Developer",
  // one italic word rendered via <em> in JSX
  headlineParts: {
    before: "Software Developer building practical software to solve real-world ",
    italic: "problems",
    after: ".",
  },
  lede:
    "I build software to explore real problems, learn through hands-on development, and turn ideas into practical prototypes through independent work, academic projects, and a startup collaboration.",
  ctas: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Get In Touch", href: "#contact" },
  },
};

export const credibility = {
  stats: [
    { value: "6+", label: "Projects built" },
    { value: "1", label: "Startup prototype completed" },
    { value: "Bsc", label: "Information Technology" },
    { value: "Full-stack", label: "Exposure to frontend, backend, and data" },
  ],
  highlights: [
    "Built an AI-assisted appointment booking platform with Vapi, FastAPI, PostgreSQL, and workflow automation at its core.",
    "Built a founder-led marketplace prototype in a team of four for concept validation.",
    "Designed NeighborTrust; a trust-first service discovery prototype for local providers.",
    "Contributed data collection, recommendation logic, and personality assessment work on a six-person capstone recommendation platform.",
  ],
};

export const coreThemes = [
  "Workflow Automation",
  "Service Discovery",
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
    status: "Completed",
    title: "AI-Assisted Appointment Booking Platform",
    summary:
      "A prototype appointment booking system exploring scheduling workflows through availability calculation, conflict detection, patient resolution, and voice-assisted interactions.",
    role: "Backend Developer",
    timeline: "4-6 weeks · Solo",
    problem:
      "Clinics rely on manual scheduling and human intervention to manage appointments.",
    solution:
      "A prototype scheduling system that calculates availability dynamically, prevents appointment conflicts, and supports AI-assisted booking workflows.",
    outcome:
      "Explores workflow automation, business-rule handling, and appointment management logic.",
    focusAreas: ["Workflow Automation", "Scheduling Systems", "Conversational AI"],
    github: "https://github.com/KBNkosi/ai-booking-system.git",
    liveDemo: "https://youtu.be/SKPvAFXAOqU?si=LgD9vdoc6AJpwIzE",
  },
  {
    slug: "career-guidance-platform",
    type: "Recommendation & Decision Support",
    status: "Completed Capstone",
    title: "Career Guidance Platform",
    summary:
      "A recommendation platform built to guide students from their interests and personality traits toward suitable career and education pathways.",
    role: "Data & Recommendation Systems Contributor · Team of 6",
    timeline: "Academic capstone",
    problem:
      "Students struggle to connect their interests and personality traits to suitable careers and educational pathways.",
    solution:
      "Built a platform that combines behavioural assessments, educational datasets, and recommendation logic to suggest career and university options.",
    outcome:
      "Explores recommendation-system design, data modelling, and decision-support workflows.",
    focusAreas: ["Recommendation Systems", "Decision Support", "Educational Data"],
    github: "https://github.com/KBNkosi/career-recommendation-system.git",
    liveDemo: "https://career-match-system.netlify.app/",
  },
  {
    slug: "neighbour-trust",
    type: "Community Marketplace / Service Discovery Platform",
    status: "Frontend Prototype",
    title: "NeighborTrust",
    summary:
      "A prototype recommendation system that helps residents discover trusted local service providers through referrals, provider profiles, and AI-assisted search.",
    role: "Product Designer & Frontend Developer",
    timeline: "4–6 weeks · Solo",
    problem:
      "People struggle to identify reliable service providers in their local area.",
    solution:
      "A service discovery experience centered around recommendations, provider profiles, and community trust signals.",
    outcome:
      "Validates a trust-first approach to local service discovery.",
    focusAreas: ["Service Discovery", "Community Trust", "Local Commerce"],
    github: "https://github.com/KBNkosi/NeighborTrust.git",
    liveDemo: "https://community-service-marketplace.vercel.app/",
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
    github: "https://github.com/KBNkosi/e-commerce-storefront.git",
    liveDemo: null,
  },
  {
    title: "CrowdRail",
    type: "Community Reporting Platform",
    status: "Completed Academic Project",
    role: "Full-Stack Developer · Solo",
    summary:
      "A prototype platform where rail enthusiasts submit train sightings, upload media, and take part in moderated community discussions.",
    problem:
      "Train sightings and rail observations are scattered across fragmented channels, making discovery and discussion difficult.",
    solution:
      "Authentication, community reporting, media uploads, dashboards, and role-based moderation on a LAMP stack.",
    technologies: ["PHP", "MySQL", "Bootstrap", "Apache"],
    github: "https://github.com/KBNkosi/CrowdRail-Project.git",
    liveDemo: null,
  },
  {
    title: "Founder-Led Marketplace Prototype",
    type: "Startup Prototype",
    status: "Completed Prototype",
    role: "Frontend Developer & QA Collaborator",
    summary:
      "A marketplace prototype built with a founder and a small team to support concept validation within a fixed two-month timeline.",
    problem:
      "The founder needed a working prototype to support concept validation and early stakeholder feedback.",
    solution:
      "Built marketplace listings, user interactions, and validation-focused flows using FlutterFlow and Supabase.",
    technologies: ["FlutterFlow", "Supabase"],
    github: null,
    liveDemo: null,
  },
];

export const principles = [
  {
    title: "Start with the problem before the solution",
    body: "I try to understand the user's challenge and the workflow behind it before deciding on technologies or implementation details.",
  },
  {
    title: "Build Incrementally",
    body: "I prefer breaking projects into smaller, working pieces that can be tested, improved, and expanded over time.",
  },
  {
    title: "Think through workflows and edge cases",
    body: "Beyond features, I pay attention to how users move through a system and how the application handles real-world scenarios.",
  },
  {
    title: "Work closely with stakeholders and teammates",
    body: "Whether collaborating with founders, project teammates, or end users, I value clear communication and shared understanding.",
  },
  {
    title: "Stay adaptable across the stack",
    body: "My projects have involved frontend interfaces, backend APIs, databases, and integrations, allowing me to contribute wherever needed and learn new technologies quickly.",
  },
  {
    title: "Prioritize clarity and maintainability",
    body: "I aim to write code that is understandable, maintainable, and easy for others to work with.",
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
    title: "Technical Support-ALX",
    body: "Real-world troubleshooting, user support, and communication under operational pressure.",
  },
  {
    phase: "community",
    title: "CrowdRail",
    body: "Built a community-driven platform centered around content sharing and user participation.",
  },
  {
    phase: "commerce",
    title: "E-Commerce Storefront",
    body: "Developed a user-facing shopping experience with product discovery, search, and cart functionality.",
  },
  {
    phase: "Startup Prototype",
    title: "Founder-Led Marketplace Prototype",
    body: "Delivered a marketplace prototype in a team of four within a fixed two-month timeline.",
  },
  {
    phase: "Service Discovery",
    title: "NeighborTrust",
    body: "Designed a service discovery platform helping users find and evaluate local service providers.",
  },
  {
    phase: "Workflow Automation",
    title: "AI-Assisted Appointment Booking Platform",
    body: "Backend and system design for a workflow automation platform on Python, FastAPI, and PostgreSQL.",
  },
];

export const testimonials = [
  {
    quote:
      "Kenny played an important role in helping our team turn a marketplace concept into a functional MVP within a tight timeline. He was reliable, adaptable, and consistently focused on delivering a product that aligned with our business goals.",
    author: "Abbas",
    role: "Founder, Nomad54 Startup",
  },
  {
    quote:
      "Kenny consistently demonstrates curiosity, persistence, and a strong willingness to learn. He approaches challenges thoughtfully, takes initiative, and continues to grow through hands-on problem solving and real project experience",
    author: "Kaedyn",
    role: "Senior Mentor, MentryX",
  },
  {
    quote:
      "Kenny was dependable, collaborative, and committed to the success of the project. He communicated well, contributed consistently, and was someone the team could rely on throughout development.",
    author: "Emdinga",
    role: "Backend developer/Teammate, Nomad54 Startup",
  },
];

export const toolkit = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "REST APIs", "SQLAlchemy"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "SQLite", "MySQL"],
  },
  
  {
    category: "Rapid Delivery",
    items: ["FlutterFlow", "Supabase"],
  },
];

export const about = [
  "I am a Software Developer who enjoys building practical software around real-world problems. I like understanding how people complete tasks, where friction exists in a process, and how software can make those experiences simpler, more efficient, or easier to use.",
  "My experience includes independent projects, academic teamwork, and a short startup collaboration. Through these experiences, I have explored problems such as appointment booking, career guidance, service discovery, and community-focused platforms while strengthening my skills in software development.",
  "I'm particularly interested in backend development and building applications that model real-world workflows, support better decision-making, and solve practical problems. As an early-career developer, I enjoy learning by building projects that challenge both my technical skills and my understanding of the problem I'm trying to solve.",
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Journey", href: "/#journey" },
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Contact", href: "/#contact" },
];
