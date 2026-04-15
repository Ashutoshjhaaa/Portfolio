'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export const Background: React.FC = () => {
  const pathname = usePathname();
  const interviewRoutes = ['/html', '/css', '/javascript', '/react', '/nodejs', '/SQL'];
  const isInterviewPage = pathname ? interviewRoutes.some(route => pathname.includes(route)) : false;

  return (
    <>
      <div className="grid-background" />
      <div className="corner-glow glow-top-left" style={{ background: 'radial-gradient(circle at center, var(--glow-color), transparent 70%)' }} />
      <div className="corner-glow glow-top-right" style={{ background: 'radial-gradient(circle at center, var(--glow-color), transparent 70%)' }} />
      <div className="corner-glow glow-bottom-left" style={{ background: 'radial-gradient(circle at center, var(--glow-color), transparent 70%)' }} />
      <div className="corner-glow glow-bottom-right" style={{ background: 'radial-gradient(circle at center, var(--glow-color), transparent 70%)' }} />
    </>
  );
};
