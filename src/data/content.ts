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
  hero_headline: "VP of Product at Contentstack",
  hero_subtext: "Building the future of composable digital experiences.",
  about_section:
    "I'm Dean Haddock, VP of Product at Contentstack. I lead product strategy and execution for the world's leading composable CMS platform. When I'm not shipping product, I'm in the water — surfing is where I find my clearest thinking.",
  skills: [
    "Product Strategy",
    "Composable Architecture",
    "Headless CMS",
    "Go-to-Market",
    "Developer Experience",
    "TypeScript",
    "Next.js",
    "React",
  ],
  contact_email: "dean.haddock@contentstack.com",
};

export const blogPosts: BlogPost[] = [
  {
    uid: "composable-future",
    title: "Why Composable Architecture Wins",
    slug: "composable-future",
    excerpt:
      "Composable architecture isn't a trend — it's the natural evolution of how enterprises build digital experiences that last.",
    content:
      "I've spent years watching monolithic platforms slow teams down. Composable architecture — headless CMS, API-first services, best-of-breed tools assembled deliberately — gives product and engineering teams back their velocity. At Contentstack we're building the infrastructure that makes composable feel effortless.",
    author: "Deanius",
    published_date: "2026-05-01T10:00:00.000Z",
    blog_tags: ["Composable", "CMS", "Product Strategy"],
    created_at: "2026-05-01T10:00:00.000Z",
    updated_at: "2026-05-01T10:00:00.000Z",
  },
  {
    uid: "product-surfing",
    title: "What Surfing Taught Me About Product Management",
    slug: "product-surfing",
    excerpt:
      "Reading conditions, timing your entry, committing fully — the parallels between riding waves and shipping product are real.",
    content:
      "A good product manager, like a good surfer, learns to read the environment before acting. You can't force a wave and you can't force market adoption. You position, you wait for the right signal, and then you commit completely. Half-paddling gets you nowhere.",
    author: "Deanius",
    published_date: "2026-04-10T09:00:00.000Z",
    blog_tags: ["Product Management", "Surfing", "Leadership"],
    created_at: "2026-04-10T09:00:00.000Z",
    updated_at: "2026-04-10T09:00:00.000Z",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    uid: "vp-product-contentstack",
    title: "VP of Product at Contentstack",
    company: "Contentstack",
    position: "VP of Product",
    start_date: "2022-01-01T00:00:00.000Z",
    current_position: true,
    description:
      "Leading product vision, strategy, and roadmap for Contentstack — the world's leading composable CMS. Responsible for Launch (edge hosting), Platform (CMS core), and developer ecosystem products.",
    technologies: [
      "Next.js",
      "Contentstack",
      "Composable Architecture",
      "Product Strategy",
      "APIs",
    ],
    created_at: "2022-01-01T00:00:00.000Z",
    updated_at: "2026-06-12T00:00:00.000Z",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    uid: "contentstack-launch",
    title: "Contentstack Launch",
    slug: "contentstack-launch",
    description:
      "Edge-native hosting for Next.js and composable frontends, built natively into the Contentstack platform. Eliminates infrastructure complexity for content-driven teams.",
    technologies: ["Next.js", "Edge Runtime", "Contentstack", "TypeScript"],
    live_url: "https://www.contentstack.com/products/launch",
    project_type: "Platform Product",
    featured: true,
    created_at: "2023-06-01T00:00:00.000Z",
    updated_at: "2026-06-12T00:00:00.000Z",
  },
  {
    uid: "bio-site",
    title: "Bio Site Starter",
    slug: "bio-site",
    description:
      "Open-source personal portfolio starter powered by Contentstack CMS and deployed on Contentstack Launch. Demonstrates composable architecture end-to-end.",
    technologies: ["Next.js", "Contentstack", "Tailwind CSS", "TypeScript"],
    live_url: "https://my-bio-site.contentstackapps.com",
    github_url: "https://github.com/dean-cstk/cs-bio",
    project_type: "Open Source",
    featured: true,
    created_at: "2026-01-01T00:00:00.000Z",
    updated_at: "2026-06-12T00:00:00.000Z",
  },
];

export const defaultSiteConfig = {
  title: "Site Configuration",
  site_name: "Deanius",
  site_subtitle: "VP of Product at Contentstack",
  owner_name: "Dean Haddock",
  owner_email: "dean.haddock@contentstack.com",
  bio: "VP of Product at Contentstack. Building composable digital experiences and occasionally chasing waves.",
  years_experience: 10,
  work_location: "Remote",
  projects_completed: 20,
  technologies_count: 15,
  time_zone: "PST",
  github_url: "https://github.com/dean-cstk",
  linkedin_url: "https://linkedin.com/in/deanhaddock",
  enable_mandala_background: true,
};
