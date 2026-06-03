"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { INTERVIEW_DATA } from "@/app/constants/interview";

export const InterviewCard = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const Icon = ({ skill, size = "sm", index }: { skill: any; size?: "sm" | "lg"; index?: number }) => {
    const isSelected = selected === index;
    const slug = skill.slug || skill.name?.toLowerCase().replace("css3", "css");
    const color = size === "lg" ? (skill.color || "white") : (isSelected ? "var(--link)" : skill.color);
    
    return (
      <div className={cn("border border-border flex items-center justify-center transition-all", 
        size === "lg" ? "p-2 rounded-xl bg-muted/20" : "p-[3.5px] rounded-lg",
        size === "sm" && (isSelected ? "bg-link/25 border-link/40" : "bg-muted/20"))}>
        <img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" className={size === "lg" ? "w-8 h-8" : "w-3 h-3"} 
          onError={(e) => (e.currentTarget.src = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug === 'css' ? 'css3' : slug}.svg`)} />
      </div>
    );
  };

  return (
    <section className="rounded-3xl p-4 sm:p-6 border border-border/50 bg-transparent mt-6">
      <div className="mb-6">
        <h2 className="text-base font-bold">Interview Preparation</h2>
        <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest font-mono">Master technical rounds</p>
      </div>

      <div className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-none mb-4 -mx-1 px-1">
        {INTERVIEW_DATA.map((s, i) => (
          <button key={s.name} onClick={() => setSelected(selected === i ? null : i)}
            className={cn("flex-shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all text-[11px] font-bold uppercase tracking-wider group",
              selected === i ? "bg-link/15 text-link border-link shadow-[0_0_20px_rgba(var(--link-rgb),0.15)]" : "bg-muted/10 text-foreground/80 border-border hover:bg-muted/20 hover:text-foreground")}>
            <Icon skill={s} index={i} />
            <span className="relative top-[0.5px]">{s.name}</span>
            <ChevronDown className={cn("w-3.5 h-3.5 transition-all duration-300", selected === i ? "rotate-180 opacity-100" : "opacity-0 w-0 -translate-x-2")} />
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selected !== null && (
          <motion.div key={selected} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="mt-2 p-6 rounded-2xl border border-border/50 bg-muted/5 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <Icon skill={INTERVIEW_DATA[selected]} size="lg" />
                  <div>
                    <h3 className="text-xl font-bold">{INTERVIEW_DATA[selected].name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-2 h-2 rounded-full bg-link shadow-[0_0_8px_rgba(var(--link-rgb),0.5)]" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/80">{INTERVIEW_DATA[selected].category}</span>
                    </div>
                  </div>
                </div>
                <Link href={INTERVIEW_DATA[selected].route} target="_blank" className="btn group/btn px-6 py-2.5 rounded-xl border border-border/50 text-xs font-bold transition-all hover:scale-[1.02]">
                  Interview Questions <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground/90 leading-relaxed max-w-2xl">{INTERVIEW_DATA[selected].description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
