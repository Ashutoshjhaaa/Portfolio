'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronLeft, ChevronRight, BarChart3 } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface InterviewPageLayoutProps {
  title: string;
  description: string;
  icon: string | React.ReactNode;
  stats: Stat[];
  children: React.ReactNode;
  searchValue: string;
  onSearchChange: (value: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchPlaceholder?: string;
  prevPage?: { title: string; href: string };
  nextPage?: { title: string; href: string };
}

export default function InterviewPageLayout({
  title,
  description,
  icon,
  stats,
  children,
  searchValue,
  onSearchChange,
  activeFilter,
  onFilterChange,
  searchPlaceholder,
  prevPage,
  nextPage
}: InterviewPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-orange-500/30">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-orange-500 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
                Portfolio
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100">
                Interview Prep
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        {/* Header Section */}
        <div className="space-y-8 mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              {typeof icon === 'string' ? (
                <img src={icon} alt={title} className="w-12 h-12" />
              ) : (
                icon
              )}
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
                {title}
              </h1>
              <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800">
                    {stat.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                    {stat.label}
                  </span>
                </div>
                <div className="text-xl font-black text-zinc-900 dark:text-zinc-100">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-orange-500 transition-colors" />
              <input
                type="text"
                placeholder={searchPlaceholder || "Search concepts, questions, or keywords..."}
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
              />
            </div>
            <div className="flex p-1 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              {['all', 'easy', 'medium', 'hard'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => onFilterChange(filter)}
                  className={`px-4 sm:px-6 py-3 rounded-xl text-sm font-bold capitalize transition-all ${
                    activeFilter === filter
                      ? 'bg-white dark:bg-zinc-800 text-orange-500 shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <main className="min-h-[400px]">
          {children}
        </main>

        {/* Navigation */}
        <div className="mt-20 pt-12 border-t border-zinc-100 dark:border-zinc-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevPage ? (
              <Link
                href={prevPage.href}
                className="group p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 group-hover:bg-orange-50 dark:group-hover:bg-orange-500/10 text-zinc-400 group-hover:text-orange-500 transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-500 mb-1">Previous Topic</div>
                    <div className="text-xl font-black text-zinc-900 dark:text-zinc-100">{prevPage.title}</div>
                  </div>
                </div>
              </Link>
            ) : <div />}
            {nextPage ? (
              <Link
                href={nextPage.href}
                className="group p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/50 transition-all duration-300 text-right"
              >
                <div className="flex items-center justify-end gap-4">
                  <div>
                    <div className="text-sm font-bold text-zinc-500 mb-1">Next Topic</div>
                    <div className="text-xl font-black text-zinc-900 dark:text-zinc-100">{nextPage.title}</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 group-hover:bg-orange-50 dark:group-hover:bg-orange-500/10 text-zinc-400 group-hover:text-orange-500 transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}
