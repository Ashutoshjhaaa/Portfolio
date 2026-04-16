'use client';

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { portfolioData } from '@/components/constants/data';
import { useTheme } from 'next-themes';

interface Props {
  username: string;
}

const GITHUB_THEME = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

const {
  totalWeeks: TOTAL_WEEKS,
  defaultBlockSize: DEFAULT_BLOCK_SIZE,
  defaultBlockMargin: DEFAULT_BLOCK_MARGIN,
  paddingOffset: PADDING_OFFSET,
} = portfolioData.githubCalendarConfig;

const GAPS = TOTAL_WEEKS - 1;
const MARGIN_RATIO = DEFAULT_BLOCK_MARGIN / DEFAULT_BLOCK_SIZE;

export const GitHubCalendarWrapper = ({ username }: Props) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [dimensions, setDimensions] = React.useState({ 
    blockSize: DEFAULT_BLOCK_SIZE, 
    blockMargin: DEFAULT_BLOCK_MARGIN 
  });
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
    const container = containerRef.current;
    if (!container) return;

    const calculateDimensions = (width: number) => {
      if (width <= 0) return;
      
      // Only calculate dynamic dimensions on larger screens (md+)
      const isDesktop = window.innerWidth >= 768; // md breakpoint
      
      if (!isDesktop) return;
      
      const availableWidth = width - PADDING_OFFSET;
      const denominator = TOTAL_WEEKS + GAPS * MARGIN_RATIO;
      const blockSize = Math.floor((availableWidth / denominator) * 10) / 10;
      const blockMargin = Math.floor((blockSize * MARGIN_RATIO) * 10) / 10;

      setDimensions({
        blockSize,
        blockMargin,
      });
    };

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        calculateDimensions(entry.contentRect.width);
      }
    });

    observer.observe(container);
    calculateDimensions(container.getBoundingClientRect().width);

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full bg-white dark:bg-transparent border border-zinc-200 dark:border-transparent rounded-2xl p-2 shadow-sm dark:shadow-none"
    >
      {/* Mobile: horizontal scroll */}
      <div className="block md:hidden overflow-x-auto scrollbar-hide">
        <div className="min-w-150">
          {mounted && (
            <GitHubCalendar
              username={username}
              theme={GITHUB_THEME}
              colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
              fontSize={12}
              blockSize={11}
              blockMargin={2}
              showWeekdayLabels={true}
            />
          )}
        </div>
      </div>

      {/* Desktop: normal, no scroll */}
      <div className="hidden md:block">
        {mounted && (
          <GitHubCalendar
            username={username}
            theme={GITHUB_THEME}
            colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
            fontSize={12}
            blockSize={dimensions.blockSize}
            blockMargin={dimensions.blockMargin}
            showWeekdayLabels={true}
          />
        )}
      </div>
    </div>
  );
};
