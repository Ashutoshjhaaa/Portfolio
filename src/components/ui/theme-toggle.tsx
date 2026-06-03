"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useModeAnimation, ThemeAnimationType } from "react-theme-switch-animation";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const { ref, toggleSwitchTheme } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
    isDarkMode: resolvedTheme === "dark",
    onDarkModeChange: (isDark) => setTheme(isDark ? "dark" : "light"),
    duration: 1000, // Animation duration in ms
  });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;

      if (
        e.key?.toLowerCase() !== "d" ||
        e.repeat ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        target?.isContentEditable ||
        /^(INPUT|TEXTAREA|SELECT)$/.test(target?.tagName ?? "")
      ) {
        return;
      }

      toggleSwitchTheme();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggleSwitchTheme]);

  if (!mounted)
    return (
      <div className="p-2 text-sm badge">
        <div className="w-4 h-4" />
      </div>
    );

  return (
    <button
      ref={ref}
      className="p-2 text-sm btn cursor-pointer"
      onClick={() => toggleSwitchTheme()}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
}
