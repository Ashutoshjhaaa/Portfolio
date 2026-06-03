"use client";

import React, { useState, useMemo } from 'react';
import InterviewPageLayout from './InterviewPageLayout';
import QuestionCard from '@/components/ui/QuestionCard';

interface Question {
  id: string;
  number: string;
  question: string;
  difficulty: 'easy' | 'medium' | 'hard';
  section: string;
  answer: any;
}

interface InterviewTopicPageProps {
  title: string;
  description: string;
  icon: string;
  questions: Question[];
  stats: { label: string; value: string; icon: React.ReactNode }[];
  nextPage?: { title: string; href: string };
  prevPage?: { title: string; href: string };
}

export const InterviewTopicPage = ({
  title, description, icon, questions, stats, nextPage, prevPage
}: InterviewTopicPageProps) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return questions.filter(q => {
      const matchesSearch = q.question.toLowerCase().includes(search.toLowerCase()) ||
                            q.answer.simple?.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === "all" || q.difficulty === filter;
      return matchesSearch && matchesFilter;
    });
  }, [search, filter, questions]);

  const grouped = useMemo(() => {
    const g: Record<string, Question[]> = {};
    filtered.forEach(q => {
      if (!g[q.section]) g[q.section] = [];
      g[q.section].push(q);
    });
    return g;
  }, [filtered]);

  return (
    <InterviewPageLayout
      title={title}
      description={description}
      icon={icon}
      stats={stats}
      searchValue={search}
      onSearchChange={setSearch}
      activeFilter={filter}
      onFilterChange={setFilter}
      nextPage={nextPage}
      prevPage={prevPage}
    >
      {Object.entries(grouped).map(([section, items]) => (
        <section key={section} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-lg font-black uppercase tracking-widest text-muted-foreground/80">{section}</h2>
            <div className="h-px flex-1 bg-border/50" />
          </div>
          <div className="grid gap-4">
            {items.map((q) => (
              <QuestionCard 
                key={q.id} 
                number={q.number} 
                question={q.question} 
                difficulty={q.difficulty} 
                answer={q.answer}
                isOpen={activeQuestionId === q.id}
                onToggle={() => setActiveQuestionId(activeQuestionId === q.id ? null : q.id)}
              />
            ))}
          </div>
        </section>
      ))}
      
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-xl font-bold mb-2">No results found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}
    </InterviewPageLayout>
  );
};

export default InterviewTopicPage;
