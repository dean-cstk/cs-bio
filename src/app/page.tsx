import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Portfolio from '@/components/Portfolio';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import {
  getSiteConfiguration,
  getHomePageContent,
  getBlogPosts,
  getWorkExperiences,
  getPortfolioProjects,
} from '@/lib/contentstack';
import {
  defaultSiteConfig,
  homePageContent as staticHome,
  blogPosts as staticBlogPosts,
  workExperiences as staticWorkExperiences,
  portfolioProjects as staticPortfolioProjects,
} from '@/data/content';

// Force this page to be dynamic (not cached)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  // Try CMS first; fall back to static content if unavailable
  let siteConfig = null;
  try {
    siteConfig = await getSiteConfiguration();
  } catch {
    // CMS unavailable — static fallback will be used
  }

  const [homeContent, blogPosts, workExperiences, portfolioProjects] =
    siteConfig
      ? await Promise.all([
          getHomePageContent(),
          getBlogPosts(),
          getWorkExperiences(),
          getPortfolioProjects(),
        ])
      : [null, [], [], []];

  return (
    <div className="min-h-screen">
      <Hero
        content={homeContent ?? staticHome}
        siteConfig={siteConfig ?? defaultSiteConfig}
      />
      <About
        content={homeContent ?? staticHome}
        siteConfig={siteConfig ?? defaultSiteConfig}
      />
      <WorkExperience
        experiences={workExperiences?.length ? workExperiences : staticWorkExperiences}
      />
      <Portfolio
        projects={portfolioProjects?.length ? portfolioProjects : staticPortfolioProjects}
        siteConfig={siteConfig ?? defaultSiteConfig}
      />
      <Blog posts={blogPosts?.length ? blogPosts : staticBlogPosts} />
      <Contact
        content={homeContent ?? staticHome}
        siteConfig={siteConfig ?? defaultSiteConfig}
      />
    </div>
  );
}
