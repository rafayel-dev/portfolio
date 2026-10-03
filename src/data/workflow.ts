import { WorkflowStep } from "@/types";

export const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Understand the idea and requirements",
    summary:
      "Clarify product goals, core user workflows, technical constraints, and real business objectives before writing a line of code.",
    deliverables: [
      "Requirements and scope definition",
      "User journey & core state mapping",
      "Technical feasibility and risk assessment",
    ],
  },
  {
    number: "02",
    title: "PLAN",
    subtitle: "Define product structure and technical approach",
    summary:
      "Map out the database schemas, API contracts, component architecture, and design system tokens to ensure predictable execution.",
    deliverables: [
      "Database schema & API contract specs",
      "Component tree & state architecture",
      "Milestone breakdown & timeline estimates",
    ],
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "Develop the product",
    summary:
      "Execute front-to-back development with clean TypeScript code, responsive Tailwind layouts, resilient error handling, and modular components.",
    deliverables: [
      "Production-ready Next.js / React / React Native code",
      "Secure backend APIs & database integration",
      "High-fidelity UI with smooth micro-interactions",
    ],
  },
  {
    number: "04",
    title: "TEST",
    subtitle: "Fix issues and refine the experience",
    summary:
      "Audit across mobile viewports, verify edge-case input handling, test network resilience, and tune rendering performance for sub-second interactions.",
    deliverables: [
      "Cross-browser and multi-device viewport testing",
      "Core Web Vitals & Lighthouse performance audits",
      "Form validation and edge-case stress testing",
    ],
  },
  {
    number: "05",
    title: "DEPLOY",
    subtitle: "Launch the product",
    summary:
      "Configure production hosting, secure environment variables, setup DNS and SSL certificates, and execute a zero-downtime release.",
    deliverables: [
      "Production deployment & DNS setup",
      "Automated CI/CD verification checks",
      "Search engine indexing and OpenGraph assets",
    ],
  },
  {
    number: "06",
    title: "SUPPORT",
    subtitle: "Continue improving when needed",
    summary:
      "Review telemetry, monitor runtime exceptions, provide documentation, and assist with planned feature iterations post-launch.",
    deliverables: [
      "Codebase handoff documentation",
      "Post-launch bug fixing & monitoring",
      "Iterative feature additions when requested",
    ],
  },
];
