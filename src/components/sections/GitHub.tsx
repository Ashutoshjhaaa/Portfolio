import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GitHubCalendarWrapper } from '@/components/ui/GitHubCalendarWrapper';
import { PinnedRepoCard } from '@/components/ui/PinnedRepoCard';
import { portfolioData } from '@/components/constants/data';
import { PinnedRepo } from '@/types';

async function fetchGitHubData(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    return null;
  }
}

async function getPinnedRepos(): Promise<PinnedRepo[]> {
  try {
    const username = portfolioData.githubStats.username;
    const profileRes = await fetch(`https://github.com/${username}`);
    if (!profileRes.ok) return [];

    const profileHtml = await profileRes.text();
    const repoNames: string[] = [];
    const parts = profileHtml.split('class="repo">');

    for (let i = 1; i < parts.length; i++) {
      const name = parts[i].split('</span>')[0].trim();
      if (name && !repoNames.includes(name)) {
        repoNames.push(name);
      }
    }

    if (repoNames.length === 0) return [];

    const repos = await Promise.all(
      repoNames.map(async (repoName) => {
        const data = await fetchGitHubData(`https://api.github.com/repos/${username}/${repoName}`);
        if (!data) return null;
        return {
          name: data.name,
          description: data.description,
          language: data.language || 'TypeScript',
          stars: data.stargazers_count,
          forks: data.forks_count,
          url: data.html_url
        };
      })
    );

    return repos.filter((r): r is PinnedRepo => r !== null);
  } catch (err) {
    return [];
  }
}

export const GitHub = async () => {
  const [liveRepos, contributionsData] = await Promise.all([
    getPinnedRepos(),
    fetchGitHubData(`https://github-contributions-api.deno.dev/${portfolioData.githubStats.username}.json`)
  ]);

  const username = portfolioData.githubStats.username;
  const repos = liveRepos.length > 0 ? liveRepos : portfolioData.pinnedRepositories;
  const totalContributions = contributionsData?.totalContributions || portfolioData.githubStats.totalContributions;

  return (
    <section className="rounded-3xl p-4 sm:p-8 border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden">
      <SectionHeader title={portfolioData.titles.github} subtitle={portfolioData.titles.githubSubtitle} />

      <div className="space-y-6">
        <div>
          <div className="rounded-2xl border p-2 sm:p-4 border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm dark:shadow-none">
            <div className="mb-4 flex items-center justify-between">
              <a 
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-5 w-5 text-gray-900 dark:text-zinc-100 inherit-text-color">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-900 dark:text-zinc-100 inherit-text-color">
                  {username} • {totalContributions} {portfolioData.labels.contributions}
                </span>
              </a>
            </div>

            <div className="w-full">
              <GitHubCalendarWrapper username={username} />
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-2xl border p-4 sm:p-5 border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/60">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded bg-gray-100 dark:bg-zinc-700 p-1">
                  <svg className="h-4 w-4 text-gray-600 dark:text-zinc-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v6.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-zinc-100">
                  {repos.length} {portfolioData.labels.pinned }
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {repos.slice(0, 3).map((repo, i) => (
                <PinnedRepoCard key={i} repo={repo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
