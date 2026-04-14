"use client";

import React, { useEffect, useState } from 'react';
import { portfolioData } from '@/components/constants/data';
import { Eye } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    // A simple view counter using localStorage
    // For a global counter, you would replace this with an API call
    const currentViews = parseInt(localStorage.getItem('portfolio_views') || '0', 10);
    const newViews = currentViews + 1;
    localStorage.setItem('portfolio_views', newViews.toString());
    setViews(newViews);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: portfolioData.metadata.title,
          text: portfolioData.metadata.description,
          url: window.location.href,
        });
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert(portfolioData.labels.shareSuccess);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  return (
    <footer className="pt-12 pb-6 flex items-center justify-between text-gray-400 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
      <p>© {currentYear} {portfolioData.labels.copyright}</p>
      
      <div className="flex items-center gap-4">
        {/* View Counter */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-700 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-600 rounded-full shadow-sm">
          <Eye className="w-4 h-4" />
          <span className="text-[10px]">{views} Views</span>
        </div>

        {/* Share Button */}
        <button 
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-700 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-600 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-600 shadow-sm transition-colors"
        >
          <span className="text-[10px]">{portfolioData.labels.share}</span>
        </button>
      </div>
    </footer>
  );
};
