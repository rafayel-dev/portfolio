export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  featured?: boolean;
  role: string;
  timeline: string;
  status: "LIVE" | "PRODUCTION" | "ACTIVE";
  technologies: string[];
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    build: string;
    result: string;
    keyFeatures: string[];
  };
  demoUrl?: string;
  githubUrl?: string;
}

export interface Capability {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  deliverables: string[];
  architecturalFocus: string;
}

export interface PipelineStage {
  id: string;
  step: string;
  name: string;
  shortDesc: string;
  details: string;
  tools: string[];
  projectExample: string;
}

export interface AutomationItem {
  id: string;
  number: string;
  title: string;
  purpose: string;
  description: string;
  technology: string[];
  triggerType: string;
  status: "AUTOMATED" | "ACTIVE" | "READY";
}

export interface WorkbenchCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
  }[];
}

export interface WorkflowStep {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  deliverables: string[];
}
