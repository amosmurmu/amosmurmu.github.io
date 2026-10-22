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
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  kind: "open-source" | "work";
}

export interface SkillGroup {
  label: string;
  items: string[];
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
  { id: "twitter", label: "Twitter", href: "https://twitter.com/amos_murmu" },
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
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export const projects: Project[] = [
  {
    title: "Image Processing Service",
    description: "An image processing service built with Node.js.",
    techStack: ["TypeScript", "REST API", "Redis", "BullMQ", "Node", "Express"],
    github: "https://github.com/amosmurmu/image_processing_system",
    demo: "https://image-processing-system-7j50.onrender.com",
    featured: true,
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
    role: "Open Source Contributor",
    company: "Directus",
    period: "May 2025",
    description:
      "Worked on essential events in ExtensionManager and updated the documentation to reflect the changes.",
    skills: ["TypeScript", "Vue", "Node.js", "Express"],
    kind: "open-source",
  },
  {
    id: 2,
    role: "Open Source Contributor",
    company: "Motion Canvas",
    period: "April 2025",
    description:
      "Implemented a new centerArrow prop for the Arrow component, letting users customize the arrow's center position, and updated the documentation with Motion Canvas internals.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    kind: "open-source",
  },
  {
    id: 3,
    role: "IT Teacher",
    company: "Ganpat University",
    period: "Jan 2024 – May 2024",
    description:
      "Taught the basics of programming and the MS Office suite to more than 150 students, ran practical sessions, and conducted tests.",
    skills: ["OS", "Networking", "MS Word", "MS Excel"],
    kind: "work",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "REST APIs",
    ],
  },
  { label: "Frontend", items: ["React", "Tailwind CSS"] },
  {
    label: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "C",
      "C++",
      "Java",
      "Bash",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    label: "CI/CD",
    items: ["Docker", "Docker Compose", "Github Actions"],
  },
  {
    label: "Linux",
    items: ["Arch Linux", "Debian", "Shell scripting", "Neovim / Vim"],
  },
];
