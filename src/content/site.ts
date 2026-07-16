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
    before: "Software Developer Building Business Applications, Workflow Systems & Customer-Facing ",
    italic: "platforms",
    after: ".",
  },
  lede:
    "My experience includes building service discovery platforms, recommendation systems, booking applications, community-driven products, and business-focused software through startup collaborations, academic projects, and independent development.",
  ctas: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Get In Touch", href: "#contact" },
  },
};

export const credibility = {
  stats: [
    { value: "6+", label: "Software Projects Built" },
    { value: "1", label: "Startup MVP Delivered" },
    { value: "Bsc", label: "Information Technology" },
    { value: "Full-stack", label: "Experience Across the Development Stack" },
  ],
  highlights: [
    "Currently building an AI-assisted appointment booking platform with FastAPI, PostgreSQL, and workflow automation at its core.",
    "Shipped a founder-led marketplace MVP in a team of four, delivering a functional product for concept validation.",
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
    status: "In Development",
    title: "AI-Assisted Appointment Booking Platform",
    summary:
      "An AI-assisted appointment booking system designed to automate scheduling workflows through availability calculation, appointment conflict detection, patient resolution, and voice-assistant integration.",
    role: "Backend Developer & System Designer",
    timeline: "in-progress·Solo",
    problem:
      "Clinics rely on manual scheduling and human intervention to manage appointments.",
    solution:
      "A scheduling system that calculates availability dynamically, prevents appointment conflicts, and supports AI-assisted booking workflows.",
    outcome:
      "Demonstrates the design of scheduling workflows, business-rule enforcement, and appointment management systems.",
    focusAreas: ["Workflow Automation", "Scheduling Systems", "System Design"],
    github: "https://github.com/KBNkosi/ai-booking-system.git",
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
      "People struggle to identify reliable service providers in their local area.",
    solution:
      "A service discovery experience centered around recommendations, provider profiles, and community trust signals.",
    outcome:
      "Validates a trust-first approach to local service discovery.",
    focusAreas: ["Service Discovery", "Community Trust", "Local Commerce"],
    github: "https://github.com/KBNkosi/NeighborTrust.git",
    liveDemo: "https://community-service-marketplace.vercel.app/",
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
      "Collaborated with the founder and dev team to ship marketplace mvp.",
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
    github: "https://github.com/KBNkosi/career-recommendation-system.git",
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
    github: "https://github.com/KBNkosi/e-commerce-storefront.git",
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
    github: "https://github.com/KBNkosi/CrowdRail-Project.git",
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
    body: "Developed a customer-facing shopping experience with product discovery, search, and cart functionality..",
  },
  {
    phase: "Startup Delivery",
    title: "Founder-Led Marketplace MVP",
    body: "Delivered a marketplace prototype in a team of four within a fixed two-month timeline.",
  },
  {
    phase: "Service Discovery",
    title: "NeighborTrust",
    body: "Designed a service discovery platform helping users find and evaluate local service providers.",
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
  "I am a Software Developer focused on building business applications, workflow systems, and customer-facing software.",
  "My experience includes startup product development, academic team projects, and independently developed applications. Across these projects, I have worked on recommendation systems, service discovery platforms, booking applications, community-driven products, and business workflows.",
  "I enjoy translating ideas into practical software solutions and am particularly interested in backend systems, workflow automation, service discovery, and applications that help users make decisions, discover opportunities, and complete tasks more effectively.",
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Journey", href: "/#journey" },
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Contact", href: "/#contact" },
];
