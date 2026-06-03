import React from "react";
import Navbar from "@/components/sections/navbar";
import Profile from "@/components/sections/profile";
import Banner from "@/components/sections/banner";
import AboutMe from "@/components/sections/about-me";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Github from "@/components/sections/github";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Testimonials from "@/components/sections/testimonials";
import WakaTime from "@/components/sections/wakatime";
import {
  getWakaTimeData,
  getHashnodeBlogs,
} from "@/lib/services";

export default async function Home() {
  // Parallel data fetching - all requests start simultaneously
  const [wakaTimeData, blogData] = await Promise.all([
    getWakaTimeData(),
    getHashnodeBlogs(),
  ]);

  // Define sections in order for automated rendering
  const sections = [
    <Navbar key="navbar" />,
    <Banner key="banner" />,
    <Profile key="profile" />,
    <AboutMe key="about" />,
    <Experience key="experience" />,
    <Projects key="projects" />,
    <Skills key="skills" />,
    // <WakaTime key="wakatime" data={wakaTimeData} />,
    <Github key="github" />,
    <Blog key="blog" blogs={blogData} />,
    <Contact key="contact" />,
    <Footer key="footer" />,
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center relative px-2 py-6">
      <main className="relative z-10 max-w-3xl w-full mx-auto flex flex-col gap-6">
        {/* Declarative Section Mapping */}
        {sections.map((section) => (
          <React.Fragment key={section.key}>
            {section}
          </React.Fragment>
        ))}
      </main>
    </div>
  );
}
