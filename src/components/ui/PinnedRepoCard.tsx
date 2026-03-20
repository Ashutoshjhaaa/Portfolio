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
    className="group flex min-h-[120px] flex-col rounded-xl border p-3 hover:shadow-md sm:min-h-[140px] sm:p-4 border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-gray-300 dark:hover:border-zinc-500 shadow-sm"
  >
    <div className="mb-2 flex items-start justify-between">
      <div className="min-w-0 flex-1 pr-2">
        <h4 className="truncate text-sm font-semibold sm:text-base text-gray-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {repo.name}
        </h4>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4 text-gray-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
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
        <span className="h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
        <span className="text-gray-600 dark:text-zinc-400">{repo.language}</span>
      </div>
      <div className="flex items-center gap-1 text-gray-600 dark:text-zinc-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-3 w-3">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
        <span>{repo.stars}</span>
      </div>
      <div className="flex items-center gap-1 text-gray-600 dark:text-zinc-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-fork h-3 w-3">
          <circle cx="12" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="18" cy="6" r="3"></circle>
          <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
          <path d="M12 12v3"></path>
        </svg>
        <span>{repo.forks}</span>
      </div>
    </div>
  </a>
);
