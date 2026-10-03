import { Capability } from "@/types";

export const capabilities: Capability[] = [
  {
    id: "web",
    code: "CAP-01",
    title: "Web Applications",
    subtitle: "Frontend Architecture & Interfaces",
    description:
      "Modern, responsive web applications engineered for speed, robust state management, and intuitive user experiences.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Router 7"],
    deliverables: [
      "Custom Web Applications & SaaS Dashboards",
      "E-Commerce & High-Velocity Catalog Platforms",
      "Component Design Systems & Design Tokens",
      "Performance Auditing & Core Web Vitals Optimization",
    ],
    architecturalFocus:
      "Predictable state modeling, server-driven rendering where beneficial, zero-layout-shift layouts, and resilient client-side routing.",
  },
  {
    id: "mobile",
    code: "CAP-02",
    title: "Mobile Applications",
    subtitle: "React Native & Cross-Platform",
    description:
      "Native-feel iOS and Android mobile experiences constructed with clean architectures, offline resilience, and fluid 60fps micro-interactions.",
    technologies: ["React Native", "Expo", "TypeScript", "Mobile Navigation", "Native APIs"],
    deliverables: [
      "Cross-platform iOS & Android Applications",
      "Expo Bare & Managed Workflow Implementations",
      "Offline Storage, Sync & Secure Storage",
      "Push Notifications & Device Hardware Integrations",
    ],
    architecturalFocus:
      "Touch gesture responsiveness, memory optimization on mid-tier hardware, graceful offline caching, and frictionless app store deployments.",
  },
  {
    id: "systems",
    code: "CAP-03",
    title: "Backend & APIs",
    subtitle: "Distributed Systems & Data Modeling",
    description:
      "Scalable RESTful services, secure database architectures, and third-party integrations structured around real business workflows.",
    technologies: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL", "MySQL"],
    deliverables: [
      "RESTful API Design, Implementation & Documentation",
      "Relational & Document Database Schema Architecture",
      "Authentication, RBAC & Token Management (JWT / Sessions)",
      "Payment Gateway & Third-Party Service Integrations",
    ],
    architecturalFocus:
      "Strict request validation, normalized data access layers, deterministic error reporting, and defensive API rate limiting.",
  },
  {
    id: "automation",
    code: "CAP-04",
    title: "Automation & Workflows",
    subtitle: "Bots, Scripts & Event-Driven Pipelines",
    description:
      "Autonomous background daemons, monitoring scripts, scheduled tasks, and practical workflow automations that eliminate manual overhead.",
    technologies: ["Node.js Scripts", "Telegram Bot API", "Webhooks", "Cron Schedulers", "REST Pipelines"],
    deliverables: [
      "Event-Driven Telegram & Chat Notification Bots",
      "Availability & Status Monitoring Daemons",
      "Automated Multi-Service Booking & Calendar Workflows",
      "Data Synchronization & Catalog Update Scripts",
    ],
    architecturalFocus:
      "Fail-safe retry mechanisms, idempotency, lightweight memory footprints, and proactive alerting on state changes.",
  },
];
