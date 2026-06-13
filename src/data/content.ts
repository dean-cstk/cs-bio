// Static fallback content — used when Contentstack CMS is unavailable

export interface HomePageContent {
  title: string;
  hero_headline: string;
  hero_subtext?: string;
  about_section?: string;
  skills?: string[];
  contact_email?: string;
}

export interface BlogPost {
  uid: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  author?: string;
  published_date?: string;
  blog_tags?: string[];
  created_at: string;
  updated_at: string;
}

export interface WorkExperience {
  uid: string;
  title: string;
  company: string;
  position: string;
  start_date?: string;
  end_date?: string;
  current_position?: boolean;
  description?: string;
  technologies?: string[];
  created_at: string;
  updated_at: string;
}

export interface PortfolioProject {
  uid: string;
  title: string;
  slug: string;
  description?: string;
  technologies?: string[];
  live_url?: string;
  github_url?: string;
  project_link?: string;
  github_repository_link?: string;
  project_type?: string;
  featured?: boolean;
  created_at: string;
  updated_at: string;
}

export const homePageContent: HomePageContent = {
  title: "Deanius",
  hero_headline: "Chief Experience Architect at Tidalwave Systems",
  hero_subtext: "Building digital products that move like water.",
  about_section:
    "I'm Deanius — product builder, systems thinker, and occasional wave chaser. I spend my days designing how humans interact with software, and my mornings reading swells. The best products, like the best waves, reward patience and commitment.",
  skills: [
    "Product Architecture",
    "Systems Design",
    "Developer Experience",
    "TypeScript",
    "Next.js",
    "React",
    "Edge Computing",
    "API Design",
  ],
  contact_email: "deanius@tidalwave.systems",
};

export const blogPosts: BlogPost[] = [
  {
    uid: "composable-future",
    title: "Why Modular Architecture Always Wins",
    slug: "composable-future",
    excerpt:
      "Monoliths feel safe until the day they collapse under their own weight. Modular systems are harder to start and impossible to stop.",
    content:
      "I have watched three generations of platform rewrites. Each time, a team inherits a monolith, spends two years breaking it apart, and emerges the other side wondering why they waited so long. Modular, API-first design is not a trend — it is the only architecture that survives contact with a growing organization.",
    author: "Deanius",
    published_date: "2026-05-01T10:00:00.000Z",
    blog_tags: ["Architecture", "Product Thinking", "APIs"],
    created_at: "2026-05-01T10:00:00.000Z",
    updated_at: "2026-05-01T10:00:00.000Z",
  },
  {
    uid: "product-surfing",
    title: "What Surfing Taught Me About Shipping Product",
    slug: "product-surfing",
    excerpt:
      "Reading conditions, committing fully, knowing when to pull back. The ocean is a relentless product manager.",
    content:
      "A good surfer does not fight the wave. They read it, position early, and commit at the right moment. Half-paddling is how you get worked. Product is the same — the teams that hesitate at launch, that hedge every decision, that build every edge case before shipping the core, get churned. Read the conditions. Commit.",
    author: "Deanius",
    published_date: "2026-04-10T09:00:00.000Z",
    blog_tags: ["Product Thinking", "Surfing", "Shipping"],
    created_at: "2026-04-10T09:00:00.000Z",
    updated_at: "2026-04-10T09:00:00.000Z",
  },
  {
    uid: "edge-first-design",
    title: "Designing for the Edge",
    slug: "edge-first-design",
    excerpt:
      "Latency is a design problem, not an infrastructure problem. Start from the edge and work inward.",
    content:
      "Most teams design their application logic in a data center and then try to cache their way to performance. Edge-first design flips this. You decide what needs to be global on day one, and every architecture decision flows from there. It requires discipline upfront and rewards you compoundingly.",
    author: "Deanius",
    published_date: "2026-03-18T08:00:00.000Z",
    blog_tags: ["Edge Computing", "Architecture", "Performance"],
    created_at: "2026-03-18T08:00:00.000Z",
    updated_at: "2026-03-18T08:00:00.000Z",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    uid: "tidalwave-systems",
    title: "Chief Experience Architect at Tidalwave Systems",
    company: "Tidalwave Systems",
    position: "Chief Experience Architect",
    start_date: "2022-01-01T00:00:00.000Z",
    current_position: true,
    description:
      "Leading product and platform design across Tidalwave's suite of developer tools. Own the end-to-end experience from API contract to UI, with a focus on making complex distributed systems feel simple.",
    technologies: ["Next.js", "TypeScript", "Edge Runtime", "GraphQL", "React"],
    created_at: "2022-01-01T00:00:00.000Z",
    updated_at: "2026-06-12T00:00:00.000Z",
  },
  {
    uid: "prism-labs",
    title: "Principal Product Designer at Prism Labs",
    company: "Prism Labs",
    position: "Principal Product Designer",
    start_date: "2019-03-01T00:00:00.000Z",
    end_date: "2021-12-31T00:00:00.000Z",
    current_position: false,
    description:
      "Shaped the product direction for Prism's real-time data visualization platform. Took the product from early access to general availability, growing the active developer base 4x over two years.",
    technologies: ["React", "D3.js", "WebSockets", "PostgreSQL", "Python"],
    created_at: "2019-03-01T00:00:00.000Z",
    updated_at: "2021-12-31T00:00:00.000Z",
  },
  {
    uid: "waveline-digital",
    title: "Product Engineer at Waveline Digital",
    company: "Waveline Digital",
    position: "Product Engineer",
    start_date: "2016-06-01T00:00:00.000Z",
    end_date: "2019-02-28T00:00:00.000Z",
    current_position: false,
    description:
      "Hybrid product/engineering role at an early-stage digital agency. Shipped client products across e-commerce, publishing, and fintech. Became deeply fluent in the gap between design intent and engineering reality.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Sass", "AWS Lambda"],
    created_at: "2016-06-01T00:00:00.000Z",
    updated_at: "2019-02-28T00:00:00.000Z",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    uid: "undertow",
    title: "Undertow",
    slug: "undertow",
    description:
      "An open-source edge deployment toolkit for Next.js apps. Handles build distribution, rollback, and canary routing with a single config file. Built out of frustration with infrastructure that gets in the way.",
    technologies: ["Next.js", "TypeScript", "Edge Runtime", "Rust", "CLI"],
    github_url: "https://github.com/deanius/undertow",
    project_type: "Open Source Tool",
    featured: true,
    created_at: "2025-09-01T00:00:00.000Z",
    updated_at: "2026-06-12T00:00:00.000Z",
  },
  {
    uid: "tideline",
    title: "Tideline",
    slug: "tideline",
    description:
      "A real-time surf condition dashboard aggregating buoy data, wind models, and tide charts into a single calm interface. Personal project that turned into a side obsession.",
    technologies: ["React", "TypeScript", "WebSockets", "Mapbox", "Tailwind CSS"],
    live_url: "https://tideline.surf",
    github_url: "https://github.com/deanius/tideline",
    project_type: "Side Project",
    featured: true,
    created_at: "2024-07-01T00:00:00.000Z",
    updated_at: "2025-11-20T00:00:00.000Z",
  },
  {
    uid: "prism-canvas",
    title: "Prism Canvas",
    slug: "prism-canvas",
    description:
      "A low-code dashboard builder for internal tools, built during my time at Prism Labs. Lets non-engineers wire up live data to drag-and-drop chart components without touching code.",
    technologies: ["React", "D3.js", "Zustand", "Express.js", "PostgreSQL"],
    project_type: "Product",
    featured: false,
    created_at: "2021-01-01T00:00:00.000Z",
    updated_at: "2021-12-31T00:00:00.000Z",
  },
];

export const defaultSiteConfig = {
  title: "Site Configuration",
  site_name: "Deanius",
  site_subtitle: "Chief Experience Architect at Tidalwave Systems",
  owner_name: "Deanius",
  owner_email: "deanius@tidalwave.systems",
  bio: "Product builder, systems thinker, wave chaser. Currently Chief Experience Architect at Tidalwave Systems.",
  years_experience: 10,
  work_location: "Remote",
  projects_completed: 18,
  technologies_count: 14,
  time_zone: "PST",
  github_url: "https://github.com/deanius",
  linkedin_url: "https://linkedin.com/in/deanius",
  enable_mandala_background: true,
};
