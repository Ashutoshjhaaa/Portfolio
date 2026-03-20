import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="mb-6 flex flex-col gap-2">
    <h2 className="text-lg font-semibold text-gray-900 dark:text-zinc-100">{title}</h2>
    {subtitle && <p className="text-sm text-gray-600 dark:text-zinc-400">{subtitle}</p>}
  </div>
);
