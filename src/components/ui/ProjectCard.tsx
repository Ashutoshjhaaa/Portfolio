"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { portfolioData } from '@/components/constants/data';
import { Github, MoveUpRight, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TechIcon } from './TechIcon';
import { Project } from '@/types';
import { slugify } from '@/lib/slugify';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();
  const projectSlug = project.slug || slugify(project.name);

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation if clicking on status or links
    if ((e.target as HTMLElement).closest('a')) return;
    router.push(`/project/${projectSlug}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative flex cursor-pointer w-full"
      style={{ opacity: 1, transform: 'none' }}
    >
      <article className="relative flex w-full min-h-[180px] sm:min-h-[230px] flex-col rounded-2xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-4 hover:shadow-xl shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div
            className="w-6 h-6 text-xs overflow-hidden hover:opacity-80 transition-opacity"
          >
            {project.logo.length === 1 ? (
              <div className="w-full h-full flex items-center justify-center font-bold text-slate-400 dark:text-zinc-400 border border-slate-100 dark:border-zinc-600 rounded">
                {project.logo}
              </div>
            ) : (
              <img alt={`${project.name} ${portfolioData.labels.projectIconAlt}`} className="w-full h-full object-contain p-0.5" src={project.logo} />
            )}
          </div>
          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap"
              >
                <Github className="h-4 w-4 flex-shrink-0" />
              </a>
            )}
            {project.status && (
              <a
                href={project.status === 'Live' ? project.url : undefined}
                target={project.status === 'Live' ? "_blank" : undefined}
                rel={project.status === 'Live' ? "noopener noreferrer" : undefined}
                className={cn(
                  "inline-flex items-center text-[10px] font-semibold rounded-md px-2 py-0.5 border whitespace-nowrap",
                  project.status === 'Building' ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800" :
                    project.status === 'Live' ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 hover:opacity-80 transition-opacity cursor-pointer" :
                      "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                )}
              >
                {project.status === 'Building' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5" />}
                {project.status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />}
                {project.status}
              </a>
            )}
          </div>
        </div>

        <h3 className="text-sm xs:text-base font-semibold text-gray-900 dark:text-zinc-100 break-words mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.name}
        </h3>
        <p className="text-xs xs:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="mb-2">
          <div className="flex items-center gap-1 mb-1.5">
            <Code2 className="h-3 w-3 text-gray-500 dark:text-zinc-400" aria-hidden="true" />
            <span className="text-[9px] font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">{portfolioData.labels.techStack}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="inline-flex items-center gap-1 text-[10px] font-medium rounded-md px-1.5 py-1 bg-gray-50 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-600 shadow-sm">
                <TechIcon name={tech} size={14} />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
