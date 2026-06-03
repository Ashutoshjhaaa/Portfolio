"use client";

import React from "react";
import InterviewTopicPage from "@/components/layout/InterviewTopicPage";
import { SQL_QUESTIONS } from "@/data/interview/sql";
import { Database, Layers, Server, Terminal } from "lucide-react";

export default function SqlPage() {
  const stats = [
    { label: "Level", value: "Relational Ops", icon: <Database className="w-4 h-4" /> },
    { label: "Questions", value: "100+", icon: <Layers className="w-4 h-4" /> },
    { label: "Focus", value: "PostgreSQL Standard", icon: <Server className="w-4 h-4" /> },
    { label: "Format", value: "Industry-Ready", icon: <Terminal className="w-4 h-4" /> }
  ];

  return (
    <InterviewTopicPage
      title="SQL100: Relational Data Ops"
      description="Master everything from basic SELECT queries to advanced window functions, query optimization, and PostgreSQL-specific features."
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      questions={SQL_QUESTIONS as any}
      stats={stats}
      prevPage={{ title: "Node.js", href: "/interview/nodejs" }}
    />
  );
}
