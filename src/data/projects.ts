import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "bestkid",
    slug: "bestkid",
    title: "BESTKID",
    category: "Kids Fashion E-Commerce",
    tagline: "Curated contemporary children's apparel platform engineered for instant navigation and frictionless cart checkout.",
    image: "/images/bestkid.jpg",
    featured: true,
    role: "Lead Frontend Engineer & Architecture",
    timeline: "2024",
    status: "LIVE",
    technologies: ["React Router 7", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    caseStudy: {
      overview:
        "BESTKID is a contemporary children's fashion commerce platform designed to give parents a fast, aesthetic, and frustration-free shopping experience across mobile and desktop devices.",
      problem:
        "Standard multi-page boutique stores often suffer from bloated client bundles, slow facet filtering, and clumsy sizing selectors that frustrate shoppers on cellular data.",
      approach:
        "Implemented modern client routing with React Router 7, utilizing route loaders for instantaneous navigation, pre-cached category indexes, and an intuitive sizing matrix designed for quick touch interactions.",
      build:
        "Constructed an atomic design system with Tailwind CSS, optimistic UI state for the shopping bag drawer, client-side category filtering without round-trips, and modular product card layouts with zero layout shifts.",
      result:
        "A fluid, magazine-style shopping flow with instant search, reactive bag toggles, and zero layout shifts during image loading.",
      keyFeatures: [
        "Route-level data fetching with React Router 7",
        "Optimistic cart drawer state with immediate feedback",
        "Interactive size & material filter matrix",
        "Zero-shift responsive product imagery grids",
      ],
    },
    demoUrl: "https://bestkid.demo",
    githubUrl: "https://github.com",
  },
  {
    id: "panto",
    slug: "panto-furniture",
    title: "Panto Furniture",
    category: "Modern Interior & Furniture Platform",
    tagline: "Minimalist Scandinavian furniture showcase highlighting spatial aesthetics, dimensional specs, and craftsmanship.",
    image: "/images/panto.jpg",
    featured: true,
    role: "Full Stack Developer",
    timeline: "2024",
    status: "LIVE",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    caseStudy: {
      overview:
        "Panto Furniture is a design-centric digital platform created for showcasing high-end minimalist furniture pieces and interior architectural concepts.",
      problem:
        "High-value furniture buyers require deep technical transparency—exact dimensions, timber provenance, fabric composition, and room context—without feeling overwhelmed by dense specification sheets.",
      approach:
        "Formulated an architectural layout that blends editorial photography with structured technical drawer panels, interactive dimensional callouts, and clean material inspectors.",
      build:
        "Built with Next.js and TypeScript, utilizing Next Image optimization for massive architectural imagery, structured specification tabs, and lightweight state management for product configuration.",
      result:
        "An uncluttered, gallery-level digital showroom that presents complex material and sizing specifications with effortless clarity.",
      keyFeatures: [
        "Interactive dimension & material breakdown tabs",
        "Optimized high-resolution architectural asset delivery",
        "Direct inquiry & showroom consultation flow",
        "Precision responsive layout matching physical catalog standards",
      ],
    },
    demoUrl: "https://panto.demo",
    githubUrl: "https://github.com",
  },
  {
    id: "sokher-baksho",
    slug: "sokher-baksho",
    title: "Sokher Baksho",
    category: "Lifestyle & Artisan Marketplace",
    tagline: "Full-stack marketplace connecting traditional regional artisans and handcraft makers with modern urban collectors.",
    image: "/images/sokher-baksho.jpg",
    featured: false,
    role: "Full Stack Engineer",
    timeline: "2023",
    status: "ACTIVE",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
    caseStudy: {
      overview:
        "Sokher Baksho is an artisanal marketplace focused on handcrafted pottery, hand-loomed textiles, and brass decor, emphasizing maker heritage alongside modern commerce.",
      problem:
        "Traditional e-commerce templates fail to communicate the story and individual provenance of artisan craft batches with varying material characteristics and limited production runs.",
      approach:
        "Designed an artisan-first schema supporting maker profiles, batch provenance, material descriptions, and dynamic stock availability alongside standard e-commerce features.",
      build:
        "Engineered the backend REST API with Node.js and Express, persistent document models in MongoDB, JWT authentication for buyers and sellers, and a clean administrative dashboard for artisan inventory management.",
      result:
        "A reliable full-stack marketplace platform uniting authentic artisan narratives with dependable checkout workflows.",
      keyFeatures: [
        "Artisan profile & provenance tracking system",
        "Custom MongoDB schema for handcrafted inventory batches",
        "Secure REST API with JWT role-based access control",
        "Responsive, warm editorial catalog interface",
      ],
    },
    demoUrl: "https://sokherbaksho.demo",
    githubUrl: "https://github.com",
  },
  {
    id: "eclipse-denim",
    slug: "eclipse-denim",
    title: "Eclipse Denim",
    category: "Technical Apparel & Raw Denim",
    tagline: "Technical e-commerce platform engineered for raw selvedge denim enthusiasts with precise fit diagrams and weave specs.",
    image: "/images/eclipse-denim.jpg",
    featured: false,
    role: "Frontend Engineer & UI Architecture",
    timeline: "2024",
    status: "PRODUCTION",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    caseStudy: {
      overview:
        "Eclipse Denim is a focused direct-to-consumer platform tailored for Japanese selvedge denim, heavy twills, and technical outerwear.",
      problem:
        "Raw denim has zero elastane stretch and shrinks on initial soak. Buying unwashed denim online frequently leads to sizing errors and costly returns.",
      approach:
        "Engineered a dedicated interactive Fit Guide and measurement calculator that maps customer waist, rise, and inseam measurements directly against physical garment measurements.",
      build:
        "Constructed on Next.js with TypeScript, featuring visual measuring diagrams, fabric weight selectors (14oz Kuroki Mills), and a streamlined dark-mode interface.",
      result:
        "A high-trust technical commerce interface that provides denim enthusiasts with the exact empirical data they need before purchase.",
      keyFeatures: [
        "Interactive garment measurement & fit calculator",
        "Fabric origin & weave specification inspector",
        "Technical dark mode UI system with high-contrast legibility",
        "Server-rendered static product pages for instant indexing",
      ],
    },
    demoUrl: "https://eclipsedenim.demo",
    githubUrl: "https://github.com",
  },
];
