"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { USER_NAMES, SOCIAL_LINKS } from "@/app/constants/data";

import { useState, useEffect } from "react";

// =============================================
// MAIN COMPONENT
// =============================================
export default function Github() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const colorScheme =
    resolvedTheme === "light" || resolvedTheme === "dark"
      ? resolvedTheme
      : "dark";

  const customTheme = {
    light: ["#fafafa", "#a0a0a0", "#666666", "#333333", "#000000"],
    dark: ["#1a1a1a", "#555555", "#999999", "#cccccc", "#ffffff"],
  };

  // Prevent hydration mismatch by only rendering themed calendar on client
  if (!mounted) {
    return (
      <section id="github" className="liquid-glass rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-2xl font-semibold flex items-center">github.</h2>
          <div className="h-6 w-32 bg-muted/20 animate-pulse rounded" />
        </div>
        <div className="p-4 flex justify-center">
          <div className="h-[120px] w-full bg-muted/10 animate-pulse rounded" />
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="liquid-glass rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-2xl font-semibold flex items-center">github.</h2>
        <Link
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-link text-sm font-mono font-medium text-muted-foreground transition-colors shrink-0"
        >
          <SiGithub
            className="inline-block align-middle mr-1 text-foreground"
            size={16}
          />
          {USER_NAMES.githubUsername}
          <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* GitHub Calendar */}
      <div className="relative p-4">
        <div className="w-full overflow-hidden">
          <div className="overflow-x-auto">
            <div className="flex justify-center">
              <GitHubCalendar
                username={USER_NAMES.githubUsername}
                blockSize={9.6}
                blockMargin={4.3}
                colorScheme={colorScheme}
                theme={customTheme}
                fontSize={12}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
