"use client";

import React from "react";
import InterviewTopicPage from "@/components/layout/InterviewTopicPage";
import { HTML_QUESTIONS } from "@/data/interview/html";
import { Layers, Code, Globe, ShieldCheck } from "lucide-react";

export default function HTMLPage() {
  const stats = [
    { label: "Level", value: "Structural Scale", icon: <Layers className="w-4 h-4" /> },
    { label: "Questions", value: "100+", icon: <Code className="w-4 h-4" /> },
    { label: "Focus", value: "Modern Semantics", icon: <Globe className="w-4 h-4" /> },
    { label: "Format", value: "Tech-Standard", icon: <ShieldCheck className="w-4 h-4" /> }
  ];

  return (
    <InterviewTopicPage
      title="HTML100: Structural Architecture"
      description="Master semantic HTML5, modern form validation, accessibility (a11y), and media optimization for the perfect frontend interview."
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      questions={HTML_QUESTIONS as any}
      stats={stats}
      nextPage={{ title: "CSS", href: "/interview/css" }}
    />
  );
}