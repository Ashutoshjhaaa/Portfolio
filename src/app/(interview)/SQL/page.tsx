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
import { SQL_QUESTIONS } from '@/data/interview/sql';
import { Database, Layers, Terminal, Server } from 'lucide-react';

export default function SqlInterviewQuestions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredQuestions = useMemo(() => {
    return SQL_QUESTIONS.filter(q => {
      const matchesSearch = (q.question?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
                           (q.answer.simple?.toLowerCase() || '').includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === 'all' || q.difficulty === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  const stats = [
    { label: "Level", value: "Relational Ops", icon: <Database className="w-4 h-4 text-orange-500" /> },
    { label: "Questions", value: "100+", icon: <Layers className="w-4 h-4 text-orange-500" /> },
    { label: "Focus", value: "PostgreSQL Standard", icon: <Server className="w-4 h-4 text-orange-500" /> },
    { label: "Format", value: "Industry-Ready", icon: <Terminal className="w-4 h-4 text-orange-500" /> }
  ];

  const groupedQuestions = useMemo(() => {
    const grouped: Record<string, typeof SQL_QUESTIONS> = {};
    filteredQuestions.forEach(q => {
      if (!grouped[q.section]) grouped[q.section] = [];
      grouped[q.section].push(q);
    });
    return grouped;
  }, [filteredQuestions]);

  const sectionIcons: Record<string, string> = {
    "SQL Basics": "📊",
    "JOINs (Deep Dive)": "🔗",
    "Keys, Constraints & Data Integrity": "🔑",
    "Indexes & Performance": "⚡",
    "Subqueries, CTEs & Views": "📝",
    "Window Functions (Deep Dive)": "🪟",
    "Transactions & ACID Properties": "🔄",
    "Normalization & Database Design": "🏗️",
    "Advanced SQL Concepts": "🚀",
    "PostgreSQL — Specific Features": "🐘",
    "Query Optimization & Performance": "🔍",
    "Common Interview Patterns & Problems": "📂"
  };

  return (
    <InterviewPageLayout
      title="SQL100: Relational Data Ops"
      description="Master everything from basic SELECT queries to advanced window functions, query optimization, and PostgreSQL-specific features."
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      stats={stats}
      onSearchChange={setSearchTerm}
      searchValue={searchTerm}
      activeFilter={activeFilter}
      onFilterChange={(f) => setActiveFilter(f as any)}
      prevPage={{ title: "Node.js", href: "/nodejs" }}
      nextPage={{ title: "React", href: "/react" }}
    >
      <div className="space-y-16">
        {Object.entries(groupedQuestions).map(([section, questions]) => (
          <section key={section}>
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30 text-xl border border-orange-200 dark:border-orange-800">
                {sectionIcons[section] || '📊'}
              </span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100">{section}</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-zinc-800" />
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
                      <ExampleBox label="Example">
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
            <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100">No SQL questions found</h3>
            <p className="text-gray-500 dark:text-zinc-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </InterviewPageLayout>
  );
}
