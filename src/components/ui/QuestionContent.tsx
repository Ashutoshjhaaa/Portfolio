import React from 'react';
import { cn } from '@/lib/utils';

interface BoxProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export const SimpleBox: React.FC<BoxProps> = ({ children, label = "💡 Simple Answer" }) => (
  <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl p-4 my-4">
    <span className="block text-[10px] uppercase tracking-[1.2px] text-blue-500 font-extrabold mb-1">{label}</span>
    <div className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
      {children}
    </div>
  </div>
);

export const ExampleBox: React.FC<BoxProps> = ({ children, label = "🧩 Example" }) => (
  <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 rounded-r-xl p-4 my-4">
    <span className="block text-[10px] uppercase tracking-[1.2px] text-emerald-500 font-extrabold mb-1">{label}</span>
    <div className="text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
      {children}
    </div>
  </div>
);

export const NoteBox: React.FC<BoxProps> = ({ children, label = "⭐ Note" }) => (
  <div className="bg-violet-50 dark:bg-violet-900/10 border-l-4 border-violet-500 rounded-r-xl p-4 my-4">
    <span className="block text-[10px] uppercase tracking-[1.2px] text-violet-500 font-extrabold mb-1">{label}</span>
    <div className="text-sm text-violet-900 dark:text-violet-200 leading-relaxed">
      {children}
    </div>
  </div>
);

export const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
  <pre className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 overflow-x-auto my-4 font-mono text-xs text-zinc-300 leading-relaxed">
    <code>{code}</code>
  </pre>
);
