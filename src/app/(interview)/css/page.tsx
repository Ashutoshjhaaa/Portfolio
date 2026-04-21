'use client';

import React, { useState } from 'react';
import InterviewPageLayout from '@/components/layout/InterviewPageLayout';
import QuestionCard from '@/components/ui/QuestionCard';
import { Palette, Layers, Layout, Zap } from 'lucide-react';
import { CSS_QUESTIONS } from '@/data/interview/css';

export default function CSSInterviewPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredQuestions = CSS_QUESTIONS.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.answer.simple?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || q.difficulty === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    { label: 'Total Questions', value: '100', icon: <Palette className="w-4 h-4 text-blue-500" /> },
    { label: 'Modern CSS', value: 'Flex & Grid', icon: <Layout className="w-4 h-4 text-purple-500" /> },
    { label: 'Animations', value: 'High Perf', icon: <Zap className="w-4 h-4 text-yellow-500" /> },
    { label: 'Architecture', value: 'BEM/Resets', icon: <Layers className="w-4 h-4 text-emerald-500" /> },
  ];

  // Group by section
  const sections = Array.from(new Set(CSS_QUESTIONS.map(q => q.section))).filter(Boolean);

  return (
    <InterviewPageLayout
      title="CSS100: Style Engineering"
      description="Master the art of styling, from selectors and box model to Flexbox, Grid, and high-performance animations."
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      stats={stats}
      onSearchChange={setSearchTerm}
      searchValue={searchTerm}
      onFilterChange={(f) => setActiveFilter(f)}
      activeFilter={activeFilter}
      prevPage={{ title: "HTML", href: "/html" }}
      nextPage={{ title: "JavaScript", href: "/javascript" }}
    >
      {filteredQuestions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-zinc-400">No questions found matching your criteria.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {sections.map(section => {
            const sectionQuestions = filteredQuestions.filter(q => q.section === section);
            if (sectionQuestions.length === 0) return null;

            return (
              <div key={section} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100">{section}</h2>
                  <div className="h-px flex-1 bg-gray-200 dark:bg-zinc-800" />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {sectionQuestions.map((q, index) => (
                    <QuestionCard
                      key={q.id}
                      index={index}
                      number={q.id.split('-')[1]}
                      question={q.question}
                      difficulty={q.difficulty}
                      answer={q.answer}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </InterviewPageLayout>
  );
}
