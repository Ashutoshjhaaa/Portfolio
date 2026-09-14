import React from 'react';
import { Question } from './types';
import { JS_QUESTIONS } from './javascript';
import { REACT_QUESTIONS } from './react';
import { HTML_QUESTIONS } from './html';
import { CSS_QUESTIONS } from './css';
import { NODEJS_QUESTIONS } from './nodejs';
import { SQL_QUESTIONS } from './sql';

export interface StatItem {
  label: string;
  value: string;
  category: 'questions' | 'topic' | 'async' | 'security' | 'core';
}

export interface TopicConfig {
  id: string;
  name: string;
  badgeText: string;
  badgeBg: string;
  badgeColor: string;
  iconColor?: string;
  title: string;
  description: string;
  stats: StatItem[];
  questions: Question[];
  prevTopic?: { id: string; name: string };
  nextTopic?: { id: string; name: string };
}

export const TOPICS_CONFIG: Record<string, TopicConfig> = {
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    badgeText: 'JS',
    badgeBg: '#F7DF1E',
    badgeColor: '#000000',
    iconColor: '#EAB308',
    title: 'JS100: Core Engine Mechanics',
    description:
      "Deep dive into JavaScript's heart — from closures and the event loop to modern ES2024 features and high-performance design patterns.",
    stats: [
      { label: 'TOTAL QUESTIONS', value: `${JS_QUESTIONS.length}`, category: 'questions' },
      { label: 'DEEP TOPICS', value: 'Core Engine', category: 'topic' },
      { label: 'ASYNCHRONOUS', value: 'Event Loop', category: 'async' },
      { label: 'SECURITY', value: 'XSS/CORS', category: 'security' },
    ],
    questions: JS_QUESTIONS,
    prevTopic: { id: 'css', name: 'CSS' },
    nextTopic: { id: 'react', name: 'React' },
  },
  react: {
    id: 'react',
    name: 'React',
    badgeText: 'React',
    badgeBg: '#102a3a',
    badgeColor: '#61DAFB',
    iconColor: '#00b4d8',
    title: 'React: Component Architecture & Hooks',
    description:
      'Master React 19 architecture, Fiber reconciliation, custom hooks lifecycle, state management, optimization techniques, and component patterns.',
    stats: [
      { label: 'TOTAL QUESTIONS', value: `${REACT_QUESTIONS.length}`, category: 'questions' },
      { label: 'ARCHITECTURE', value: 'Fiber Engine', category: 'topic' },
      { label: 'HOOKS', value: 'Custom Hooks', category: 'async' },
      { label: 'OPTIMIZATION', value: 'Re-renders', category: 'security' },
    ],
    questions: REACT_QUESTIONS,
    prevTopic: { id: 'javascript', name: 'JavaScript' },
    nextTopic: { id: 'nodejs', name: 'Node.js' },
  },
  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    badgeText: 'Node',
    badgeBg: '#132e1b',
    badgeColor: '#22c55e',
    iconColor: '#22c55e',
    title: 'Node.js: Backend Runtimes & Scalability',
    description:
      'Master backend runtime concepts, Libuv thread pool, asynchronous I/O, streams, buffer management, cluster module, and REST APIs.',
    stats: [
      { label: 'TOTAL QUESTIONS', value: `${NODEJS_QUESTIONS.length}`, category: 'questions' },
      { label: 'ENGINE', value: 'Libuv & V8', category: 'topic' },
      { label: 'STREAMS', value: 'Backpressure', category: 'async' },
      { label: 'SCALABILITY', value: 'Cluster & IPC', category: 'security' },
    ],
    questions: NODEJS_QUESTIONS,
    prevTopic: { id: 'react', name: 'React' },
    nextTopic: { id: 'sql', name: 'SQL' },
  },
  sql: {
    id: 'sql',
    name: 'SQL',
    badgeText: 'SQL',
    badgeBg: '#18273d',
    badgeColor: '#38bdf8',
    iconColor: '#0284c7',
    title: 'SQL: Relational Database Architecture',
    description:
      'Practice relational database design, complex JOINs, indexing strategies, transactions, ACID properties, and query optimization.',
    stats: [
      { label: 'TOTAL QUESTIONS', value: `${SQL_QUESTIONS.length}`, category: 'questions' },
      { label: 'TRANSACTIONS', value: 'ACID & WAL', category: 'topic' },
      { label: 'INDEXING', value: 'B-Tree & Hash', category: 'async' },
      { label: 'OPTIMIZATION', value: 'Query Plans', category: 'security' },
    ],
    questions: SQL_QUESTIONS,
    prevTopic: { id: 'nodejs', name: 'Node.js' },
    nextTopic: { id: 'html', name: 'HTML' },
  },
  html: {
    id: 'html',
    name: 'HTML',
    badgeText: 'HTML5',
    badgeBg: '#E34F26',
    badgeColor: '#FFFFFF',
    iconColor: '#E34F26',
    title: 'HTML5: Semantic Web & Browser APIs',
    description:
      'Practice essential HTML5 interview questions, semantic web architecture, accessibility (a11y), DOM tree mechanics, and web storage.',
    stats: [
      { label: 'TOTAL QUESTIONS', value: `${HTML_QUESTIONS.length}`, category: 'questions' },
      { label: 'ACCESSIBILITY', value: 'ARIA & a11y', category: 'topic' },
      { label: 'PERFORMANCE', value: 'Critical Path', category: 'async' },
      { label: 'STORAGE', value: 'IndexedDB/Cache', category: 'security' },
    ],
    questions: HTML_QUESTIONS,
    prevTopic: { id: 'sql', name: 'SQL' },
    nextTopic: { id: 'css', name: 'CSS' },
  },
  css: {
    id: 'css',
    name: 'CSS',
    badgeText: 'CSS3',
    badgeBg: '#1572B6',
    badgeColor: '#FFFFFF',
    iconColor: '#1572B6',
    title: 'CSS3: Modern Layouts & Cascade',
    description:
      'Master core CSS concepts, modern Flexbox, Grid systems, responsive design, animations, CSS specificity, cascade layers (@layer), and 60fps rendering.',
    stats: [
      { label: 'TOTAL QUESTIONS', value: `${CSS_QUESTIONS.length}`, category: 'questions' },
      { label: 'LAYOUTS', value: 'Grid & Flexbox', category: 'topic' },
      { label: 'CASCADE', value: 'Layers & Specificity', category: 'async' },
      { label: 'PERFORMANCE', value: 'GPU Compositing', category: 'security' },
    ],
    questions: CSS_QUESTIONS,
    prevTopic: { id: 'html', name: 'HTML' },
    nextTopic: { id: 'javascript', name: 'JavaScript' },
  },
};

export const TOPIC_ORDER = ['javascript', 'react', 'nodejs', 'sql', 'html', 'css'];
