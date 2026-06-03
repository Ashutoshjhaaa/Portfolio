import React from 'react';
import { cn } from '@/lib/utils';

interface BoxProps { children: React.ReactNode; label?: string; }

export const SimpleBox = ({ children, label = "Insight" }: BoxProps) => (
  <div className="bg-link/5 border-l-4 border-link rounded-r-xl p-5 my-6">
    <span className="block text-[9px] uppercase tracking-widest text-link font-black mb-2">{label}</span>
    <div className="text-[14px] text-foreground leading-relaxed">{children}</div>
  </div>
);

export const ExampleBox = ({ children, label = "Example" }: BoxProps) => (
  <div className="bg-muted/30 border-l-4 border-muted-foreground/30 rounded-r-xl p-5 my-6">
    <span className="block text-[9px] uppercase tracking-widest text-muted-foreground font-black mb-2">{label}</span>
    <div className="text-[14px] text-foreground leading-relaxed">{children}</div>
  </div>
);

export const NoteBox = ({ children, label = "Note" }: BoxProps) => (
  <div className="bg-amber-500/5 border-l-4 border-amber-500 rounded-r-xl p-5 my-6">
    <span className="block text-[9px] uppercase tracking-widest text-amber-500 font-black mb-2">{label}</span>
    <div className="text-[14px] text-foreground leading-relaxed">{children}</div>
  </div>
);

export const CodeBlock = ({ code }: { code: string }) => (
  <div className="relative group my-6">
    <pre className="bg-zinc-950/80 backdrop-blur-sm border border-border/50 rounded-xl p-5 overflow-x-auto font-mono text-[13px] text-zinc-300 leading-relaxed scrollbar-thin scrollbar-thumb-border/50">
      <code>{code}</code>
    </pre>
  </div>
);
