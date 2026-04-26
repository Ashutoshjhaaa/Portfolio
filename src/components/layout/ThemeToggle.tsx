'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useModeAnimation } from 'react-theme-switch-animation';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Initialize the hook from the library
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    isDarkMode: theme === 'dark',
    onDarkModeChange: (isDark) => setTheme(isDark ? 'dark' : 'light'),
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 w-9.5 h-9.5 flex items-center justify-center opacity-0" />
    );
  }

  return (
    <button
      ref={ref}
      onClick={toggleSwitchTheme}
      className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:text-gray-900 dark:hover:text-zinc-100 hover:border-gray-300 dark:hover:border-zinc-500 shadow-sm hover:shadow-md flex items-center justify-center w-9.5 h-9.5"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}
