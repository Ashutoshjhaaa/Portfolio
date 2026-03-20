import React from 'react';
import { portfolioData } from "@/components/constants/data";
import { SkillBadge } from "@/components/ui/SkillBadge";

export const Skills = () => {
  return (
    <section className="pt-2" aria-label="Technical skills">
      <h2 className="mb-4 text-base font-bold text-gray-900 dark:text-zinc-100 text-left">{portfolioData.titles.skills}</h2>
      <div className="flex flex-wrap gap-2">
        {portfolioData.skills.map((skill, i) => (
          <SkillBadge key={i} skill={skill} />
        ))}
      </div>
    </section>
  );
};
