import { PipelineStage } from "@/types";

export const pipelineStages: PipelineStage[] = [
  {
    id: "idea",
    step: "01",
    name: "IDEA",
    shortDesc: "Deconstructing core problem & user outcome",
    details:
      "Every project begins by stripping away buzzwords and determining the real operational requirement: What metric needs to move? Who uses this daily? What makes this product genuinely valuable?",
    tools: ["Problem Deconstruction", "Scope Mapping", "Technical Feasibility Analysis"],
    projectExample: "BESTKID: Pinpointed high cart abandonment to cumbersome sizing selection on mobile devices.",
  },
  {
    id: "planning",
    step: "02",
    name: "PLANNING",
    shortDesc: "Information architecture & tech stack selection",
    details:
      "Drafting component boundaries, data flow diagrams, route trees, and deciding whether the problem requires server components, static generation, or client-side routing.",
    tools: ["System Architecture", "Route Planning", "Data Flow Modeling"],
    projectExample: "Panto Furniture: Decided on Next.js SSG + client inspection drawers for instant page loads.",
  },
  {
    id: "ui-ux",
    step: "03",
    name: "UI / UX",
    shortDesc: "Design system & editorial layout hierarchy",
    details:
      "Crafting high-contrast typographic scales, structured layout grids, tactile micro-interactions, and accessible touch targets without distracting visual gimmicks.",
    tools: ["Design Tokens", "Typography Hierarchy", "Responsive Grids", "Micro-Interactions"],
    projectExample: "Eclipse Denim: Devised a technical measurement diagram UX replacing generic size tables.",
  },
  {
    id: "frontend",
    step: "04",
    name: "FRONTEND",
    shortDesc: "Component engineering & state management",
    details:
      "Writing modular, strongly-typed React or React Native components. Implementing predictable state transitions, optimistic UI updates, and zero-layout-shift visual assets.",
    tools: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS"],
    projectExample: "BESTKID: Engineered React Router 7 nested routes with pre-fetching for instant catalog transitions.",
  },
  {
    id: "api",
    step: "05",
    name: "API",
    shortDesc: "Endpoints, authentication & business logic",
    details:
      "Structuring RESTful endpoints with input validation, JWT token security, rate-limiting, and clean error codes so frontends fail gracefully under network stress.",
    tools: ["Node.js", "Express", "REST Architecture", "JWT Auth", "Zod Validation"],
    projectExample: "Sokher Baksho: Built multi-role REST API handling artisan inventory updates and customer orders.",
  },
  {
    id: "database",
    step: "06",
    name: "DATABASE",
    shortDesc: "Schema normalization & persistent indexing",
    details:
      "Modeling relational tables or document collections with query performance, foreign key integrity, and index optimization designed for real query patterns.",
    tools: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose", "Indexing"],
    projectExample: "Sokher Baksho: Modeled artisanal craft batch variants and provenance history in MongoDB collections.",
  },
  {
    id: "deployment",
    step: "07",
    name: "DEPLOYMENT",
    shortDesc: "CI/CD, containerization & environment configs",
    details:
      "Automating builds, validating TypeScript checks in continuous integration, and deploying to fast edge or VPS infrastructure with secure environment management.",
    tools: ["Git", "GitHub Actions", "Vercel / VPS", "Environment Security"],
    projectExample: "Automated build verification with zero-downtime deployment workflows on every push.",
  },
  {
    id: "live-product",
    step: "08",
    name: "LIVE PRODUCT",
    shortDesc: "Monitoring, telemetry & continuous refinement",
    details:
      "The product is live, serving real users. Monitoring API error rates, tracking Core Web Vitals, gathering qualitative usability data, and iterating deliberately.",
    tools: ["Core Web Vitals", "Lighthouse Audits", "Error Logging", "Continuous Tuning"],
    projectExample: "Continuous performance audits ensuring sub-second response times across all devices.",
  },
];
