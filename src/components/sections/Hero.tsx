"use client";

import React, { useState, useEffect } from 'react';
import { portfolioData } from "@/components/constants/data";
import { Locate } from "lucide-react";

export const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata' }) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const firstName = portfolioData.name.split(" ")[0];

  return (
    <div className="flex flex-col mb-8 mt-16 sm:mt-20">
      {/* Header section w/ profile and status */}
      <div className="flex flex-row items-start justify-between gap-4 pb-4 border-b border-gray-100 dark:border-zinc-800/50">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative flex shrink-0 overflow-hidden rounded-full w-14 h-14 sm:w-16 sm:h-16 ring-4 ring-blue-50/50 dark:ring-blue-900/20 bg-white">
            <img
              alt={portfolioData.name}
              src={portfolioData.profilePic}
              className="aspect-square h-full w-full object-cover"
            />
          </div>
          <div className="space-y-0">
            <h1 className="text-lg sm:text-[20px] font-bold text-[#111827] dark:text-zinc-100 tracking-tight leading-tight whitespace-nowrap">
              {portfolioData.name}
            </h1>
            <p className="text-[13px] sm:text-[14px] text-[#6b7280] dark:text-zinc-400 font-medium whitespace-nowrap">
              {portfolioData.role.split('/')[0].trim()}
            </p>
          </div>
        </div>

        {/* Location & Time Status */}
        <div className="flex flex-col items-end text-right shrink-0">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <Locate className="w-[14px] h-[14px] text-[#4b5563]" />
            <span className="text-[13px] sm:text-[14px] font-semibold text-[#374151] dark:text-zinc-300">New Delhi, IN</span>
          </div>
          <div className="text-[12px] sm:text-[13px] text-[#4b5563] dark:text-zinc-400 mt-0.5 font-bold tabular-nums whitespace-nowrap">
            {time}
          </div>
        </div>
      </div>

      {/* Bio section */}
      <div className="mt-3 text-[13px] sm:text-[14px] text-[#525252] dark:text-[#a3a3a3] leading-relaxed w-full font-normal text-justify">
        {portfolioData.bio.split(/(\*\*.*?\*\*)/).map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <span key={index} className="font-semibold text-[#171717] dark:text-white">
                {part.slice(2, -2)}
              </span>
            );
          }
          return part;
        })}
      </div>
    </div>
  );
};
