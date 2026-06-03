"use client";

import React from "react";
import InterviewTopicPage from "@/components/layout/InterviewTopicPage";
import { JS_QUESTIONS } from "@/data/interview/javascript";
import { Cpu, Box, Zap, ShieldCheck } from "lucide-react";

export default function JavascriptPage() {
  const stats = [
    { label: 'Total Questions', value: '100', icon: <Cpu className="w-4 h-4" /> },
    { label: 'Deep Topics', value: 'Core Engine', icon: <Box className="w-4 h-4" /> },
    { label: 'Asynchronous', value: 'Event Loop', icon: <Zap className="w-4 h-4" /> },
    { label: 'Security', value: 'XSS/CORS', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  return (
    <InterviewTopicPage
      title="JS100: Core Engine Mechanics"
      description="Deep dive into JavaScript's heart — from closures and the event loop to modern ES2024 features and high-performance design patterns."
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      questions={JS_QUESTIONS as any}
      stats={stats}
      prevPage={{ title: "CSS", href: "/interview/css" }}
      nextPage={{ title: "React", href: "/interview/react" }}
    />
  );
}