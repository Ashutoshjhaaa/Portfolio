'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getTechIcon } from '@/lib/techIconMap';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
  showLabel?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  className,
  size = 14,
  showLabel = false,
}) => {
  const [hasError, setHasError] = useState(false);

  const tech = getTechIcon(name);

  if (!tech || hasError) {
    return (
      <Code
        className={cn('text-gray-400', className)}
        style={{ width: size, height: size }}
      />
    );
  }

  // Brand color by default — for monochrome icons (black logos), invert in dark mode so they stay visible
  const iconUrl = tech.fallbackUrl || `https://cdn.simpleicons.org/${tech.slug}`;
  const imgClass = cn(
    'object-contain',
    tech.monochrome && 'dark:invert',
    className
  );

  return (
    <span className={cn('inline-flex flex-col items-center gap-1')}>
      <Image
        src={iconUrl}
        alt={`${tech.label} icon`}
        width={size}
        height={size}
        unoptimized
        onError={() => setHasError(true)}
        className={imgClass}
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
      />
      {showLabel && (
        <span className="text-xs text-gray-600 dark:text-gray-400">{tech.label}</span>
      )}
    </span>
  );
};

export default TechIcon;
