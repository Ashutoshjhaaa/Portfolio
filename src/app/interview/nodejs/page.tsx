"use client";

import React from "react";
import InterviewTopicPage from "@/components/layout/InterviewTopicPage";
import { NODEJS_QUESTIONS } from "@/data/interview/nodejs";
import { Server, Zap, Shield, Database } from "lucide-react";

export default function NodeJsPage() {
  const stats = [
    { label: 'Total Questions', value: '100', icon: <Server className="w-4 h-4" /> },
    { label: 'Runtime System', value: 'V8 Engine', icon: <Zap className="w-4 h-4" /> },
    { label: 'Security', value: 'Backend', icon: <Shield className="w-4 h-4" /> },
    { label: 'Persistence', value: 'Database', icon: <Database className="w-4 h-4" /> },
  ];

  return (
    <InterviewTopicPage
      title="Node100: Backend Engineering"
      description="Master the asynchronous runtime from event loops and streams to scalable microservices and robust backend architecture."
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      questions={NODEJS_QUESTIONS as any}
      stats={stats}
      prevPage={{ title: "React", href: "/interview/react" }}
      nextPage={{ title: "SQL", href: "/interview/sql" }}
    />
  );
}
