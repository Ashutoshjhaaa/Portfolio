"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SimpleBox, ExampleBox, NoteBox, CodeBlock } from './QuestionContent';

interface QuestionCardProps {
  index?: number;
  number?: string;
  question: string;
  difficulty: 'easy' | 'medium' | 'hard';
  answer?: any;
  children?: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const QuestionCard = ({ index, number, question, difficulty, answer, children, isOpen, onToggle }: QuestionCardProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isCardOpen = isOpen !== undefined ? isOpen : internalOpen;
  const toggleCard = onToggle || (() => setInternalOpen(!internalOpen));

  const displayNumber = number || (index !== undefined ? (index + 1).toString().padStart(2, '0') : '');

  const diffColors = {
    easy: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    medium: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    hard: "text-rose-500 bg-rose-500/10 border-rose-500/20"
  };

  const renderContent = () => {
    if (children) return children;
    if (!answer) return null;
    if (typeof answer === 'string') return <div dangerouslySetInnerHTML={{ __html: answer }} />;

    return (
      <div className="space-y-4">
        {answer.body && <div dangerouslySetInnerHTML={{ __html: answer.body }} />}
        {answer.simple && <SimpleBox><div dangerouslySetInnerHTML={{ __html: answer.simple }} /></SimpleBox>}
        {answer.example && <ExampleBox label={answer.exampleLabel || "Example"}><div dangerouslySetInnerHTML={{ __html: answer.example }} /></ExampleBox>}
        {answer.code && <CodeBlock code={answer.code} />}
        {answer.note && <NoteBox><div dangerouslySetInnerHTML={{ __html: answer.note }} /></NoteBox>}
      </div>
    );
  };

  return (
    <div className={cn("rounded-2xl border transition-all overflow-hidden", 
      isCardOpen ? "border-link bg-muted/5 shadow-lg shadow-link/5" : "border-border/50 bg-transparent hover:border-border")}>
      <button onClick={toggleCard} className="flex w-full items-start gap-4 p-5 text-left">
        <span className="mt-1 font-mono text-[10px] font-bold text-muted-foreground">{displayNumber}</span>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className={cn("text-[15px] font-bold leading-snug transition-colors", isCardOpen ? "text-link" : "text-foreground")}>{question}</h3>
            <span className={cn("mt-1 shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-black uppercase tracking-widest", diffColors[difficulty])}>{difficulty}</span>
          </div>
        </div>
        <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isCardOpen ? "rotate-180 text-link" : "text-muted-foreground")} />
      </button>

      <AnimatePresence>
        {isCardOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="border-t border-border/50 p-6 pt-4 bg-muted/5">
              <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none leading-relaxed">{renderContent()}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionCard;
