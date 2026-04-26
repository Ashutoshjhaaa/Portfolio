'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getTechIcon, normalizeTechName } from '@/lib/techIconMap';
import { SLIDE_UP, VIEWPORT_CONFIG } from '@/lib/animations';
import { INTERVIEW_DATA } from '@/components/constants/interview';

const SkillIcon = ({ name, slug }: { name: string; slug?: string }) => {
  const entry = getTechIcon(name);
  const iconSlug = slug || entry?.slug || normalizeTechName(name);
  return (
    <div className="p-2 rounded-lg bg-input-bg border border-input-border group-hover:bg-blue-50 dark:group-hover:bg-blue-900/10 transition-colors">
      <img
        src={`https://cdn.simpleicons.org/${iconSlug}`}
        alt={name}
        className="w-5 h-5 group-hover:scale-110 transition-transform"
        onError={(e) => (e.currentTarget.src = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${iconSlug}.svg`)}
      />
    </div>
  );
};

export const InterviewCard = () => (
  <motion.div
    variants={SLIDE_UP}
    initial="hidden"
    whileInView="visible"
    viewport={VIEWPORT_CONFIG}
    className="rounded-3xl p-4 sm:p-8 border border-gray-200 dark:border-zinc-800 bg-white dark:bg-black overflow-hidden mt-8"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-input-bg border border-input-border">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>
        <h2 className="text-[15px] font-bold text-foreground">Interview Questions</h2>
      </div>

      <a 
        href="https://hashnode.com/@ahutoshjha" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 group/hashnode px-3 py-1.5 rounded-full bg-transparent hover:bg-input-bg transition-all font-sans"
      >
        <div className="w-5 h-5 flex items-center justify-center rounded bg-blue-600">
           <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
              <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 00-7.962 0l-6.37 6.37a5.63 5.63 0 000 7.962l6.37 6.37a5.63 5.63 0 007.962 0l6.37-6.37a5.63 5.63 0 000-7.962zM12 15.953a3.953 3.953 0 110-7.906 3.953 3.953 0 010 7.906z" />
           </svg>
        </div>
        <span className="text-xs font-bold text-gray-700 dark:text-zinc-300 group-hover/hashnode:text-[#2962FF]">
          @ahutoshjha
        </span>
      </a>
    </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {INTERVIEW_DATA.map((skill) => (
      <Link
        key={skill.name}
        href={skill.route}
        className="group flex min-h-30 sm:min-h-35 flex-col rounded-xl border p-3 sm:p-4 transition-all duration-200 cursor-pointer border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800"
      >
        <div className="mb-2 flex items-start justify-between">
          <div className="flex items-center gap-2 min-w-0 flex-1 pr-2">
            <SkillIcon name={skill.name} slug={skill.slug} />
            <h4 className="truncate text-sm font-semibold sm:text-base text-gray-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {skill.name}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-3 w-3 shrink-0 sm:h-4 sm:w-4 text-gray-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              <path d="M15 3h6v6"></path>
              <path d="M10 14 21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </div>
        </div>
        <p className="mb-3 flex-1 text-xs leading-relaxed sm:text-sm text-gray-600 dark:text-zinc-400 line-clamp-2">
          {skill.description}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500"></span>
            <span className="text-gray-600 dark:text-zinc-400 font-medium whitespace-nowrap">{skill.category}</span>
          </div>
        </div>
      </Link>
    ))}
  </div>
</motion.div>
);
