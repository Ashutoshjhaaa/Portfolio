export const BASE_URL = "https://ashutoshjh.me";

export const ABOUT_ME = {
  name: "Ashutosh Jha",
  title: "Full Stack Developer",
  location: "New Delhi, IN",
  email: "ashujha7070@gmail.com",
  description: [
    "I'm Ashutosh Jha, a full-stack developer and  CS student who loves turning 'impossible' ideas into shipped products. With experience building for over 1,000+ active users, I bridge the gap between complex AI logic and intuitive, user-centric web experiences.",
  ],
  profileImage: "/profile.jpg",
  profileGif: "/profile-gif.gif",
  bannerImage: "/bgg.png",
};

export const USER_NAMES = {
  githubUsername: "Ashutoshjhaaa",
  hashnodeUsername: "ashutoshjha",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Ashutoshjhaaa",
  linkedin: "https://linkedin.com/in/ashutoshjhadev",
  twitter: "https://x.com/ashutoshjhadev",
  peerlist: "https://peerlist.io/ashutoshjha",
  instagram: "https://instagram.com/ashutoshjha552",
  email:
    "mailto:ashujha7070@gmail.com?subject=Message%20from%20Website&body=Hey%20Ashutosh!%20I%27m...",
  blog: "https://hashnode.com/@ashutoshjha",
  resume: "https://resume.ashutoshjh.me",
  wakatime: "https://wakatime.com/@ashutoshjha",
};

export { PROJECTS } from "./projects";

export const EXPERIENCE = [
  {
    company: "PW Skills",
    companyLink: "https://pwskills.com/",
    logo: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://pwskills.com/&size=64",
    role: "Frontend Developer Intern",
    period: "November 2025 - January 2026",
    location: "Remote",
    description:
      "Engineered learning dashboard interfaces using Next.js and Tailwind CSS, boosting active user engagement by 15%. Optimized client-side rendering and asset delivery, cutting page load times by 35% and improving performance. Connected backend REST APIs with React state management to save user data and track student course progress. Debugged 30+ cross-browser compatibility bugs, ensuring consistent layout rendering across mobile devices.",
    skills: ["Next.js", "REST APIs", "Tailwind CSS", "JavaScript", "Git"],
  },

];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Maharshi Dayanand University, Rohtak",
    institutionLink: "https://mdu.ac.in/",
    period: "2022 - 2026",
    score: "75%",
  },
];

export const TESTIMONIALS: { name: string; role: string; content: string }[] = [];

export const CAL_CONFIG = {
  link: "ashutoshjha/30min",
  ui: {
    theme: "auto" as const,
    hideEventTypeDetails: false,
    layout: "month_view" as const,
    styles: {
      body: {
        background: "transparent",
      },
      branding: {
        brandColor: "#000000",
      },
    },
  },
};

