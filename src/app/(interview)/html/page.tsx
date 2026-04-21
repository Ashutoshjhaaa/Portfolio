'use client';

import React, { useState, useMemo } from 'react';
import InterviewPageLayout from '@/components/layout/InterviewPageLayout';
import { QuestionCard } from '@/components/ui/QuestionCard';
import { 
  SimpleBox, 
  ExampleBox, 
  NoteBox, 
  CodeBlock 
} from '@/components/ui/QuestionContent';
import { MotionList, MotionItem } from '@/components/layout/MotionWrapper';
import { HTML_QUESTIONS } from '@/data/interview/html';
import { Code, Layers, ShieldCheck, Globe } from 'lucide-react';

export default function HTMLInterviewPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<"all" | "easy" | "medium" | "hard">("all");

  const filteredQuestions = useMemo(() => {
    return HTML_QUESTIONS.filter(q => {
      const matchesSearch = 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.simple?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.section.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDifficulty = difficultyFilter === "all" || q.difficulty === difficultyFilter;
      
      return matchesSearch && matchesDifficulty;
    });
  }, [searchQuery, difficultyFilter]);

  const groupedQuestions = useMemo(() => {
    const groups: Record<string, typeof HTML_QUESTIONS> = {};
    filteredQuestions.forEach(q => {
      if (!groups[q.section]) groups[q.section] = [];
      groups[q.section].push(q);
    });
    return groups;
  }, [filteredQuestions]);

  const stats = [
    { label: "Level", value: "Structural Scale", icon: <Layers className="w-4 h-4 text-orange-500" /> },
    { label: "Questions", value: "100+", icon: <Code className="w-4 h-4 text-orange-500" /> },
    { label: "Focus", value: "Modern Semantics", icon: <Globe className="w-4 h-4 text-orange-500" /> },
    { label: "Format", value: "Tech-Standard", icon: <ShieldCheck className="w-4 h-4 text-orange-500" /> }
  ];

  const sectionIcons: Record<string, string> = {
    "HTML Basics": "🏗️",
    "Semantic HTML": "🏷️",
    "Forms & Input": "📝",
    "Media & Links": "🖼️",
    "Tables": "📊",
    "Metadata & The <head>": "🛡️",
    "Accessibility (a11y)": "♿",
    "Advanced & HTML5 Features": "🚀"
  };

  return (
    <InterviewPageLayout
      title="HTML100: Structural Architecture"
      description="Master semantic HTML5, modern form validation, accessibility (a11y), media optimization, and advanced metadata for the perfect frontend interview."
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      stats={stats}
      searchPlaceholder="Search HTML questions..."
      searchValue={searchQuery}
      onSearchChange={setSearchQuery}
      activeFilter={difficultyFilter}
      onFilterChange={(filter) => setDifficultyFilter(filter as any)}
      nextPage={{ title: "CSS", href: "/css" }}
    >
      <div className="space-y-16">
        {Object.entries(groupedQuestions).map(([section, questions]) => (
          <section key={section}>
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30 text-xl border border-orange-200 dark:border-orange-800">
                {sectionIcons[section] || '📄'}
              </span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100">{section}</h2>
              <div className="h-[2px] flex-1 bg-gray-100 dark:bg-zinc-800 rounded-full" />
            </div>

            <MotionList className="grid grid-cols-1 gap-4">
              {questions.map((q) => (
                <MotionItem key={q.id}>
                  <QuestionCard
                    number={q.number}
                    question={q.question}
                    difficulty={q.difficulty as any}
                  >
                    {q.answer.simple && (
                      <SimpleBox>
                        <span dangerouslySetInnerHTML={{ __html: q.answer.simple }} />
                      </SimpleBox>
                    )}
                    {q.answer.example && (
                      <ExampleBox label={q.answer.exampleLabel || "Example"}>
                        <span dangerouslySetInnerHTML={{ __html: q.answer.example }} />
                      </ExampleBox>
                    )}
                    {q.answer.code && <CodeBlock code={q.answer.code} />}
                    {q.answer.note && (
                      <NoteBox>
                         <span dangerouslySetInnerHTML={{ __html: q.answer.note }} />
                      </NoteBox>
                    )}
                  </QuestionCard>
                </MotionItem>
              ))}
            </MotionList>
          </section>
        ))}

        {filteredQuestions.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="text-6xl mb-4">🔍</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100">No HTML questions found</h3>
            <p className="text-gray-500 dark:text-zinc-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </InterviewPageLayout>
  );
}