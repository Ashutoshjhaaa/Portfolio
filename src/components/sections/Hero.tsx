"use client";

import React from 'react';
import { portfolioData } from "@/components/constants/data";

export const Hero = () => {
  return (
    <div className="flex flex-col items-start text-left space-y-3 mb-6 mt-8">
      <div
        className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 border-cyan-400/30 bg-white dark:bg-zinc-800 shadow-xl"
      >
        <img
          alt={portfolioData.name}
          src={portfolioData.profilePic}
          className="aspect-square h-full w-full object-cover shadow-inner"
        />
      </div>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-zinc-100 leading-tight">
          {portfolioData.name}
        </h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 font-medium">
          {portfolioData.role}
        </p>
      </div>
    </div>
  );
};
