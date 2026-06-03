"use client";

import React from "react";
import InterviewTopicPage from "@/components/layout/InterviewTopicPage";
import { REACT_QUESTIONS } from "@/data/interview/react";
import { Cpu, Layers, Zap, ShieldCheck } from "lucide-react";

export default function ReactPage() {
  const stats = [
    { label: 'Total Questions', value: '100', icon: <Cpu className="w-4 h-4" /> },
    { label: 'Core Concepts', value: 'Architecture', icon: <Layers className="w-4 h-4" /> },
    { label: 'Modern Hooks', value: 'Functional', icon: <Zap className="w-4 h-4" /> },
    { label: 'Performance', value: 'Optimization', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  return (
    <InterviewTopicPage
      title="React100: UI Architecture"
      description="Master React from components and hooks to complex state management and performance optimization with the 'UI as a function of state' philosophy."
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      questions={REACT_QUESTIONS as any}
      stats={stats}
      prevPage={{ title: "JavaScript", href: "/interview/javascript" }}
      nextPage={{ title: "Node.js", href: "/interview/nodejs" }}
    />
  );
}
