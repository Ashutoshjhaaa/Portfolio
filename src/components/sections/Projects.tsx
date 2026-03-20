import React from 'react';
import { portfolioData } from "@/components/constants/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const Projects = () => {
  return (
    <section aria-label="Projects showcase" className="mt-8">
      <h2 className="mb-4 text-base font-bold text-gray-900 dark:text-zinc-100">{portfolioData.titles.projects}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {portfolioData.projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};
