export interface ProjectDetails {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  type: string;
  duration: string;
  status: string;
  liveUrl: string;
  githubUrl: string;
  coverImage: string;
  screenshots?: string[];
  logo?: string;
  description: string;
  overview: string;
  features: string[];
  challenge: string;
  learned: string;
  tech: string[];
  techIcons: Record<string, string>;
  db: string;
  deploy: string;
  auth: string;
}

export type { Project, Experience, Skill, Social, GitHubStats, PinnedRepo, SiteMetadata, PortfolioData } from "./index.ts";
