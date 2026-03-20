export interface Project {
  name: string;
  description: string;
  status?: "Live" | "Building";
  users?: number;
  techStack: string[];
  logo: string;
  color: string;
  url?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  logo: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Social {
  platform: "mail" | "github" | "instagram" | "linkedin" | "website" | "x";
  url: string;
}

export interface GitHubStats {
  username: string;
  totalContributions: number;
}

export interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string;
  author: string;
  siteName: string;
  url: string;
}

export interface PortfolioData {
  metadata: SiteMetadata;
  name: string;
  role: string;
  bio: string;
  profilePic: string;
  email: string;
  cvUrl: string;
  socials: Social[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  githubStats: GitHubStats;
  pinnedRepositories: PinnedRepo[];
  apiUrls: {
    githubProfile: string;
    githubRepo: string;
    githubContributions: string;
  };
  contact: {
    formspreeUrl: string;
    title: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    buttonIdle: string;
    buttonSending: string;
    successMessage: string;
    replyWaitTime: string;
  };
  titles: {
    skills: string;
    experience: string;
    projects: string;
    github: string;
    githubSubtitle: string;
  };
  labels: {
    downloadCv: string;
    techStack: string;
    contributions: string;
    pinned: string;
    share: string;
    copyright: string;
    toggleTheme: string;
    lightMode: string;
    darkMode: string;
    visitProfile: string;
    cvAriaLabel: string;
    socialsAriaLabel: string;
    projectIconAlt: string;
    shareSuccess: string;
  };
  githubCalendarConfig: {
    theme: {
      light: string[];
      dark: string[];
    };
    totalWeeks: number;
    defaultBlockSize: number;
    defaultBlockMargin: number;
    paddingOffset: number;
  };
}
