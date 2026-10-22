export type SocialId = "github" | "twitter" | "linkedin" | "email";

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  highlights?: string[];
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  project?: string;
  description: string;
  skills: string[];
  kind: "open-source" | "work";
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactRow {
  label: string;
  lead: string;
  links: ContactLink[];
}

export const profile = {
  name: "Amos Murmu",
  handle: "amosmurmu",
  role: "Software Developer",
  intro:
    "Software Developer with a focus on full-stack development. Experience in Node.js, Express, RESTful APIs, and working with databases like MySQL, PostgreSQL, and MongoDB.",
  email: "amosmurmu002@gmail.com",
  photo: {
    src: "/pfp.jpg",
    alt: "Portrait of Amos Murmu",
  },
} as const;

export const featuredLink = {
  title: "50 movies to watch once in a lifetime",
  label: "Notion link",
  href: "https://amosmurmu.notion.site/50-Movies-List-188fdb1d511e80bfbb29ffde36823a4a",
} as const;

export const socials: SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com/amosmurmu" },
  { id: "twitter", label: "X", href: "https://twitter.com/amos_murmu" },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/amosmurmu002",
  },
  { id: "email", label: "Email", href: "mailto:amosmurmu002@gmail.com" },
];

// TODO: add a resume PDF to /public and set the real path.
export const resumeHref = "/resume.pdf";

export const navItems: NavItem[] = [
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

export const projects: Project[] = [
  {
    title: "Fridge; A Distributed Cache Learning Project",
    description:
      "A Redis-inspired distributed cache, built from scratch to understand how systems like Redis work internally.",
    highlights: [
      "Custom binary protocol over TCP with message framing, supporting GET, SET, DEL and MGET.",
      "Consistent hashing with virtual nodes routes keys across three cache nodes; the router fans out MGET and keeps an L1 cache.",
      "TTL expiry, sampled-LRU eviction, and append-only-file persistence replayed when a node restarts.",
      "Runs as a Docker Compose cluster. Benchmarked locally at ~37k requests/sec on L1-cached hot-key reads (P99 4.7 ms).",
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "TCP sockets",
      "Docker",
      "Docker Compose",
    ],
    github: "https://github.com/amosmurmu/fridge",
    featured: true,
  },
  {
    title: "Image Processing Service",
    description: "An image processing service built with Node.js.",
    techStack: ["TypeScript", "REST API", "Redis", "BullMQ", "Node", "Express"],
    github: "https://github.com/amosmurmu/image_processing_system",
    demo: "https://image-processing-system-7j50.onrender.com",
  },
  {
    title: "RealTime Chat Application",
    description: "A minimalist chat app built with the MERN stack.",
    techStack: ["React", "Tailwind", "Node", "Express"],
    github: "https://github.com/amosmurmu/chat_app",
    demo: "https://vaat-app.onrender.com/",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Techfanatic Private LLP",
    project: "Kidsaarthi",
    period: "Nov 2025 – Mar 2026",
    description:
      "Architected a modular React SPA with lazy-loaded routes and REST API integration, including authentication and session persistence. Designed RTK Query cache invalidation with tag types to cut redundant API calls, built reusable forms with React Hook Form and Zod.",
    skills: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Vite PWA",
    ],
    kind: "work",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Techfanatic Private LLP",
    project: "SiteHub Suite v2",
    period: "Jul 2025 – Nov 2025",
    description:
      "Built core CRUD modules for multi-entity workflows with validation and error handling, plus authentication and session handling over REST APIs. Shared state through React Context, added Azure Maps geocoding and address suggestions, and integrated Stripe checkout for subscriptions.",
    skills: [
      "React",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "Azure Maps",
      "Stripe",
    ],
    kind: "work",
  },
  {
    id: 3,
    role: "Open Source Contributor",
    company: "Directus",
    period: "May 2025",
    description:
      "Worked on essential events in ExtensionManager and updated the documentation to reflect the changes.",
    skills: ["TypeScript", "Vue", "Node.js", "Express"],
    kind: "open-source",
  },
  {
    id: 4,
    role: "Open Source Contributor",
    company: "Motion Canvas",
    period: "April 2025",
    description:
      "Implemented a new centerArrow prop for the Arrow component, letting users customize the arrow's center position, and updated the documentation with Motion Canvas internals.",
    skills: ["JavaScript", "TypeScript", "React"],
    kind: "open-source",
  },
  {
    id: 5,
    role: "IT Teacher",
    company: "Ganpat University",
    period: "Jan 2024 – May 2024",
    description:
      "Taught the basics of programming and the MS Office suite to more than 150 students, ran practical sessions, and conducted tests.",
    skills: ["OS", "Networking", "MS Word", "MS Excel"],
    kind: "work",
  },
];

export const contactRows: ContactRow[] = [
  {
    label: "Email",
    lead: "Say hello at",
    links: [{ label: profile.email, href: `mailto:${profile.email}` }],
  },
  {
    label: "Creative",
    lead: "My creative content is on",
    links: [
      {
        label: "Instagram @amos.lens",
        href: "https://instagram.com/amos.lens",
      },
    ],
  },
  {
    label: "Chess",
    lead: "I sometimes play on",
    links: [
      { label: "chess.com", href: "https://www.chess.com/member/rebulbul" },
      { label: "lichess.org", href: "https://lichess.org/@/amosmurmu" },
    ],
  },
  {
    label: "Contests",
    lead: "I also do competitive programming on",
    links: [
      {
        label: "codeforces.com",
        href: "https://codeforces.com/profile/amosmurmu",
      },
      { label: "atcoder.jp", href: "https://atcoder.jp/users/lancelot_007" },
    ],
  },
];
