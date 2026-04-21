'use client';

import React, { useState } from 'react';
import InterviewPageLayout from '@/components/layout/InterviewPageLayout';
import QuestionCard from '@/components/ui/QuestionCard';
import { Server, Zap, Shield, Database } from 'lucide-react';
import { NODEJS_QUESTIONS } from '@/data/interview/nodejs';

export default function NodeJsInterviewPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredQuestions = NODEJS_QUESTIONS.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.answer.simple?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || q.difficulty === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    { label: 'Total Questions', value: '100', icon: <Server className="w-4 h-4 text-emerald-500" /> },
    { label: 'Runtime System', value: 'V8 Engine', icon: <Zap className="w-4 h-4 text-yellow-500" /> },
    { label: 'Security', value: 'Backend', icon: <Shield className="w-4 h-4 text-react-blue" /> },
    { label: 'Persistence', value: 'Database', icon: <Database className="w-4 h-4 text-purple-500" /> },
  ];

  // Group by section
  const sections = Array.from(new Set(NODEJS_QUESTIONS.map(q => q.section))).filter(Boolean);

  return (
    <InterviewPageLayout
      title="Node100: Backend Engineering"
      description="Master the asynchronous runtime from event loops and streams to scalable microservices and robust backend architecture."
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      stats={stats}
      onSearchChange={setSearchTerm}
      searchValue={searchTerm}
      onFilterChange={(f) => setActiveFilter(f)}
      activeFilter={activeFilter}
      prevPage={{ title: "React", href: "/react" }}
      nextPage={{ title: "SQL", href: "/sql" }}
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
