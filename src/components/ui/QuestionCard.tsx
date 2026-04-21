"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SimpleBox, ExampleBox, NoteBox, CodeBlock } from './QuestionContent';

interface AnswerObject {
  simple?: string;
  example?: string;
  exampleLabel?: string;
  code?: string;
  note?: string;
  body?: string; // For legacy HTML content
}

interface QuestionCardProps {
  index?: number;
  number?: string;
  question: string;
  difficulty: 'easy' | 'medium' | 'hard';
  answer?: AnswerObject | string;
  children?: React.ReactNode;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  index,
  number, 
  question, 
  difficulty, 
  answer,
  children 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const displayNumber = number || (index !== undefined ? (index + 1).toString().padStart(2, '0') : '');

  const difficultyColors = {
    easy: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    medium: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    hard: "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800"
  };

  const renderAnswer = () => {
    if (children) return children;
    if (!answer) return null;

    if (typeof answer === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: answer }} />;
    }

    return (
      <div className="space-y-4">
        {answer.body && <div dangerouslySetInnerHTML={{ __html: answer.body }} />}
        {answer.simple && (
          <SimpleBox>
            <div dangerouslySetInnerHTML={{ __html: answer.simple }} />
          </SimpleBox>
        )}
        {answer.example && (
          <ExampleBox label={answer.exampleLabel || "🧩 Example"}>
            <div dangerouslySetInnerHTML={{ __html: answer.example }} />
          </ExampleBox>
        )}
        {answer.code && <CodeBlock code={answer.code} />}
        {answer.note && (
          <NoteBox>
            <div dangerouslySetInnerHTML={{ __html: answer.note }} />
          </NoteBox>
        )}
      </div>
    );
  };

  return (
    <motion.div
      layout
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-white dark:bg-zinc-900/50 transition-all duration-300",
        isOpen 
          ? "border-orange-500 shadow-lg shadow-orange-500/10 ring-1 ring-orange-500/20" 
          : "border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 hover:shadow-md"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start gap-4 p-5 text-left transition-colors"
      >
        <span className="mt-1 font-mono text-xs font-medium text-gray-400 dark:text-zinc-500">
          {displayNumber}
        </span>
        
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className={cn(
              "text-base font-bold leading-snug transition-colors",
              isOpen ? "text-orange-500" : "text-gray-900 dark:text-zinc-100"
            )}>
              {question}
            </h3>
            <span className={cn(
              "mt-1 flex-shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
              difficultyColors[difficulty]
            )}>
              {difficulty}
            </span>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={cn(
            "mt-1 flex-shrink-0 transition-colors",
            isOpen ? "text-orange-500" : "text-gray-400"
          )}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { type: "spring", stiffness: 100, damping: 20 },
              opacity: { duration: 0.2 }
            }}
          >
            <div className="border-t border-gray-100 dark:border-zinc-800/80 p-6 pt-4">
              <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800">
                {renderAnswer()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuestionCard;
