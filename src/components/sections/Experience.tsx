"use client";

import React from 'react';
import { portfolioData } from "@/components/constants/data";

export const Experience = () => {
  return (
    <section className="pt-4" aria-label="Work experience">
      <h2 className="mb-4 text-base font-bold text-gray-900 dark:text-zinc-100 text-left">{portfolioData.titles.experience}</h2>
      <div className="space-y-4">
        {portfolioData.experience.map((exp, i) => (
          <div key={i} className="relative">
            {/* dot removed */}
            <div className="rounded-2xl border border-gray-100 dark:border-zinc-700 bg-white dark:bg-zinc-800/60 p-4 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-zinc-700 flex-shrink-0 border border-gray-200 dark:border-zinc-600 shadow-sm overflow-hidden">
                    {exp.logo ? (
                      <img alt={exp.company} className="h-6 w-6 object-contain" src={exp.logo} />
                    ) : (
                      <span className="text-xs font-bold text-gray-400 dark:text-zinc-500">
                        {exp.company.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-gray-900 dark:text-zinc-100">{exp.company}</div>
                    <div className="text-[11px] font-semibold text-gray-500 dark:text-zinc-400">
                      {exp.role} • {exp.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};
