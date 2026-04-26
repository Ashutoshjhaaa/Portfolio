import React from 'react';
import { PinnedRepo } from '@/types';

interface PinnedRepoCardProps {
  repo: PinnedRepo;
}

export const PinnedRepoCard: React.FC<PinnedRepoCardProps> = ({ repo }) => (
  <a
    href={repo.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex min-h-30 flex-col rounded-xl border p-3 sm:min-h-35 sm:p-4 border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800"
  >
    <div className="mb-2 flex items-start justify-between">
      <div className="min-w-0 flex-1 pr-2">
        <h4 className="truncate text-sm font-semibold sm:text-base text-gray-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {repo.name}
        </h4>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-3 w-3 shrink-0 sm:h-4 sm:w-4 text-gray-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        <path d="M15 3h6v6"></path>
        <path d="M10 14 21 3"></path>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      </svg>
    </div>
    <p className="mb-3 flex-1 text-xs leading-relaxed sm:text-sm text-gray-600 dark:text-zinc-400 line-clamp-2">
      {repo.description}
    </p>
    <div className="mt-auto flex flex-wrap items-center gap-2 text-xs sm:text-sm">
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500"></span>
        <span className="text-gray-600 dark:text-zinc-400">{repo.language}</span>
      </div>
    </div>
  </a>
);
