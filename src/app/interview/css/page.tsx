"use client";

import React from "react";
import InterviewTopicPage from "@/components/layout/InterviewTopicPage";
import { CSS_QUESTIONS } from "@/data/interview/css";
import { Palette, Layout, Zap, Layers } from "lucide-react";

export default function CSSPage() {
  const stats = [
    { label: "Total Questions", value: "100", icon: <Palette className="w-4 h-4" /> },
    { label: "Modern CSS", value: "Flex & Grid", icon: <Layout className="w-4 h-4" /> },
    { label: "Animations", value: "High Perf", icon: <Zap className="w-4 h-4" /> },
    { label: "Architecture", value: "BEM/Resets", icon: <Layers className="w-4 h-4" /> },
  ];

  return (
    <InterviewTopicPage
      title="CSS100: Style Engineering"
      description="Master the art of styling, from selectors and box model to Flexbox, Grid, and high-performance animations."
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      questions={CSS_QUESTIONS as any}
      stats={stats}
      prevPage={{ title: "HTML", href: "/interview/html" }}
      nextPage={{ title: "JavaScript", href: "/interview/javascript" }}
    />
  );
}
