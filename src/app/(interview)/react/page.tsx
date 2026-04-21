'use client';

import React, { useState } from 'react';
import InterviewPageLayout from '@/components/layout/InterviewPageLayout';
import QuestionCard from '@/components/ui/QuestionCard';
import { Cpu, Layers, Zap, ShieldCheck } from 'lucide-react';
import { REACT_QUESTIONS } from '@/data/interview/react';

export default function ReactInterviewPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredQuestions = REACT_QUESTIONS.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.answer.simple?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || q.difficulty === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    { label: 'Total Questions', value: '100', icon: <Cpu className="w-4 h-4 text-react-blue" /> },
    { label: 'Core Concepts', value: 'Architecture', icon: <Layers className="w-4 h-4 text-purple-500" /> },
    { label: 'Modern Hooks', value: 'Functional', icon: <Zap className="w-4 h-4 text-yellow-500" /> },
    { label: 'Performance', value: 'Optimization', icon: <ShieldCheck className="w-4 h-4 text-emerald-500" /> },
  ];

  // Group by section
  const sections = Array.from(new Set(REACT_QUESTIONS.map(q => q.section))).filter(Boolean);

  return (
    <InterviewPageLayout
      title="React100: UI Architecture"
      description="Master React from components and hooks to complex state management and performance optimization with the 'UI as a function of state' philosophy."
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      stats={stats}
      onSearchChange={setSearchTerm}
      searchValue={searchTerm}
      onFilterChange={(f) => setActiveFilter(f)}
      activeFilter={activeFilter}
      prevPage={{ title: "JavaScript", href: "/javascript" }}
      nextPage={{ title: "Node.js", href: "/nodejs" }}
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
