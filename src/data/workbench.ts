import { WorkbenchCategory } from "@/types";

export const workbenchCategories: WorkbenchCategory[] = [
  {
    category: "FRONTEND",
    description: "Component systems, state modeling, and client routing architecture.",
    skills: [
      {
        name: "React",
        level: "Core Competency",
        context: "Component lifecycle, custom hooks, atomic structure, and performance optimization.",
      },
      {
        name: "Next.js",
        level: "Production Standard",
        context: "App Router, Server Components, dynamic streaming, and SEO metadata orchestration.",
      },
      {
        name: "TypeScript",
        level: "Strict Typing",
        context: "Defensive typing across schemas, API payloads, props, and end-to-end data contracts.",
      },
      {
        name: "Tailwind CSS",
        level: "Design Systems",
        context: "Scalable design token implementation, responsive utility grids, and zero-runtime CSS.",
      },
    ],
  },
  {
    category: "BACKEND",
    description: "RESTful interfaces, service logic, and server-side runtime environments.",
    skills: [
      {
        name: "Node.js",
        level: "Runtime Foundation",
        context: "Asynchronous processing, filesystem, streams, and event-driven architecture.",
      },
      {
        name: "Express",
        level: "API Framework",
        context: "Middleware chaining, robust routing, error handling middleware, and rate limiting.",
      },
      {
        name: "REST APIs",
        level: "Architecture",
        context: "Standardized HTTP status codes, structured response payloads, and versioned endpoints.",
      },
    ],
  },
  {
    category: "DATABASE",
    description: "Data modeling, relational integrity, and document storage layers.",
    skills: [
      {
        name: "MongoDB",
        level: "Document Store",
        context: "Document modeling, aggregation pipelines, indexing, and Mongoose ORM integration.",
      },
      {
        name: "PostgreSQL",
        level: "Relational Database",
        context: "Normalized relational schemas, ACID transactions, complex joins, and migrations.",
      },
      {
        name: "MySQL",
        level: "Relational Database",
        context: "Structured storage, query optimization, foreign keys, and relational indexing.",
      },
    ],
  },
  {
    category: "MOBILE",
    description: "Cross-platform mobile engineering for iOS and Android.",
    skills: [
      {
        name: "React Native",
        level: "Cross-Platform Mobile",
        context: "Native components, gesture handlers, mobile navigation, and layout styling.",
      },
      {
        name: "Expo",
        level: "Toolchain & Deployment",
        context: "Managed workflow, OTA updates, native device module access, and build pipelines.",
      },
    ],
  },
  {
    category: "TOOLS",
    description: "Version control, workflow efficiency, and production deployment.",
    skills: [
      {
        name: "Git",
        level: "Version Control",
        context: "Branching workflows, semantic rebasing, clean commit history, and conflict resolution.",
      },
      {
        name: "GitHub",
        level: "Collaboration",
        context: "Pull requests, code reviews, issue tracking, and automated CI check enforcement.",
      },
      {
        name: "Deployment Tools",
        level: "Release Engineering",
        context: "Vercel, cloud hosting, environment variable provisioning, and DNS configuration.",
      },
    ],
  },
];
