import { ReactNode } from 'react';

export interface Question {
  id: string;
  number: string;
  question: string;
  difficulty: 'easy' | 'medium' | 'hard';
  section: string;
  answer: {
    simple: string;
    exampleLabel?: string;
    example?: string;
    code?: string;
    note?: string;
  };
}
