"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavPage { title: string; href: string; }
interface InterviewPageLayoutProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: { label: string; value?: string; icon?: React.ReactNode }[];
  children: React.ReactNode;
  onFilterChange?: (filter: string) => void;
  onSearchChange?: (query: string) => void;
  activeFilter?: string;
  searchValue?: string;
  prevPage?: NavPage;
  nextPage?: NavPage;
}

export const InterviewPageLayout = ({
  title, description, icon, stats, children, onFilterChange, onSearchChange,
  activeFilter = "all", searchValue = "", prevPage, nextPage,
}: InterviewPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-transparent text-foreground font-sans">
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="group flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-link">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Portfolio
          </Link>
          <div className="text-[10px] font-black tracking-widest text-muted-foreground uppercase flex items-center gap-2">
            Interview Prep <span className="w-1 h-1 rounded-full bg-link" /> Engineering
          </div>
        </div>
      </nav>

      <header className="px-6 py-12 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-muted/20 border border-border/50 mb-8">
            {typeof icon === 'string' ? <img src={icon} alt="" className="w-12 h-12 object-contain" /> : <span className="text-4xl">{icon}</span>}
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl mb-6">{title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">{description}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1 rounded-2xl bg-muted/10 px-6 py-4 border border-border/50 min-w-[140px]">
                <div className="flex items-center gap-2 text-link">{s.icon} <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{s.label}</span></div>
                <span className="text-sm font-bold">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="border-y border-border/50 bg-background px-6 py-4">
        <div className="mx-auto max-w-3xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="mr-1 h-3.5 w-3.5 text-muted-foreground" />
            {["all", "easy", "medium", "hard"].map((f) => (
              <button key={f} onClick={() => onFilterChange?.(f)}
                className={cn("rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all border",
                  activeFilter === f ? "bg-foreground text-background border-transparent" : "bg-transparent text-muted-foreground border-border/50 hover:border-border")}>
                {f}
              </button>
            ))}
          </div>
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input type="text" placeholder="Search..." value={searchValue} onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full rounded-full border border-border bg-muted/5 py-2 pl-9 pr-4 text-sm font-semibold outline-none focus:border-link transition-all" />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="space-y-6">{children}</div>
        {(prevPage || nextPage) && (
          <div className="mt-20 flex flex-col gap-4 sm:flex-row pt-10 border-t border-border/50">
            {prevPage && (
              <Link href={prevPage.href} className="flex-1 p-6 rounded-2xl border border-border/50 hover:border-link transition-all">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-2"><ArrowLeft className="w-3 h-3" /> Previous</span>
                <span className="text-lg font-bold">{prevPage.title}</span>
              </Link>
            )}
            {nextPage && (
              <Link href={nextPage.href} className="flex-1 p-6 rounded-2xl border border-border/50 hover:border-link transition-all text-right">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-2 justify-end">Next <ArrowLeft className="w-3 h-3 rotate-180" /></span>
                <span className="text-lg font-bold">{nextPage.title}</span>
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default InterviewPageLayout;
