export interface ProjectData {
  banner: string;
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  demoWarning?: boolean;
  isUnderDevelopment?: boolean;
  isPrivate?: boolean;
  stats?: string;
}

export const featuredProjects: ProjectData[] = [
  {
    name: "Tatva",
    desc: "Preserving ancient Indian scriptures with an interconnected knowledge architecture and Sanskrit transliteration engine.",
    banner: "/projects/tatva/hero.png",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Shadcn UI", "Supabase", "Motion"],
    github: "https://github.com/ashutoshjhaaa/tatva",
    live: "https://thetatva.vercel.app",
    stats: "50k+ Verses",
  },
  {
    name: "ShortIQ",
    desc: "AI Faceless Content Engine — automate script generation, video cloud rendering, and social posting at scale.",
    banner: "/projects/shortiq/hero.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI", "Clerk", "Tailwind CSS"],
    github: "https://github.com/Ashutoshjhaaa/ShortIQ",
    live: "https://short-iq-two.vercel.app",
    stats: "1k+ Videos",
  },
  {
    name: "Fit-Track",
    desc: "Your Personal Fitness Companion & AI Nutritionist with workout logging and goal analytics.",
    banner: "/projects/fit-track/hero.png",
    tech: ["React", "TypeScript", "Node.js", "Neon PostgreSQL", "Clerk", "Gemini AI", "Tailwind CSS"],
    github: "https://github.com/Ashutoshjhaaa/Fit-track",
    live: "https://tryfittrack.vercel.app",
    stats: "4k+ Workouts",
  },
  {
    name: "Meetly",
    desc: "AI-powered video conferencing platform with LiveKit WebRTC, instant transcriptions, automated AI meeting summaries, and action item extraction.",
    banner: "/projects/meetly/hero.png",
    tech: ["Next.js 16", "TypeScript", "LiveKit", "WebRTC", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    github: "https://github.com/Ashutoshjhaaa/Meetly",
    live: "https://meetly-first.vercel.app/",
    stats: "AI Summaries",
  }
];

export const additionalProjects: ProjectData[] = [
  {
    name: "Foodie-Frenzy",
    desc: "High-performance MERN food ordering platform featuring real-time tracking, Stripe checkout, and business admin hub.",
    banner: "/projects/foodie-frenzy/hero.png",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Stripe", "Tailwind CSS"],
    github: "https://github.com/Ashutoshjhaaa/Foodie-Frenzy",
    live: "https://foodie-frenzyy.vercel.app",
    stats: "1.2k+ Orders",
  },
  {
    name: "Imagify",
    desc: "AI-Powered SaaS platform for dynamic text-to-image generation with Razorpay billing and credits.",
    banner: "/projects/imagify/hero.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Google Gemini", "Tailwind CSS"],
    github: "https://github.com/Ashutoshjhaaa/Imagify",
    live: "https://imagify-img.vercel.app",
    stats: "2k+ Images",
  }
];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];
