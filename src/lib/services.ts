import { USER_NAMES } from "@/app/constants/data";

// =============================================
// WAKATIME
// =============================================
const getDate = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split("T")[0];
};

const formatTime = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return h > 0 ? `${h}h ${m}m` : m > 0 ? `${m}m` : "0m";
};

export interface WakaTimeData {
  today: string;
  yesterday: string;
  week: string;
  languages: string[];
  editors: string[];
}

export async function getWakaTimeData(): Promise<WakaTimeData> {
  if (!process.env.WAKATIME_API_KEY) {
    console.warn("WakaTime API key is missing. Skipping fetch.");
    return {
      today: "...",
      yesterday: "...",
      week: "...",
      languages: [],
      editors: [],
    };
  }

  try {
    const res = await fetch(
      `https://wakatime.com/api/v1/users/current/summaries?start=${getDate(6)}&end=${getDate(0)}&api_key=${process.env.WAKATIME_API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.warn(`WakaTime API returned status ${res.status}`);
      return {
        today: "...",
        yesterday: "...",
        week: "...",
        languages: [],
        editors: [],
      };
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.warn(`WakaTime API returned non-JSON content-type: ${contentType}`);
      return {
        today: "...",
        yesterday: "...",
        week: "...",
        languages: [],
        editors: [],
      };
    }

    const json = await res.json();
    const days = json.data || [];

    const getSeconds = (day: { grand_total?: { total_seconds: number } }) =>
      day?.grand_total?.total_seconds || 0;

    const langMap = new Map<string, number>();
    const editorMap = new Map<string, number>();

    for (const day of days) {
      for (const lang of day.languages || []) {
        langMap.set(
          lang.name,
          (langMap.get(lang.name) || 0) + lang.total_seconds
        );
      }
      for (const editor of day.editors || []) {
        editorMap.set(
          editor.name,
          (editorMap.get(editor.name) || 0) + editor.total_seconds
        );
      }
    }

    return {
      today: formatTime(getSeconds(days[days.length - 1])),
      yesterday: formatTime(getSeconds(days[days.length - 2])),
      week: formatTime(
        days.reduce(
          (sum: number, day: { grand_total?: { total_seconds: number } }) =>
            sum + getSeconds(day),
          0
        )
      ),
      languages: Array.from(langMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name]) => name),
      editors: Array.from(editorMap.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([name]) => name),
    };
  } catch (error) {
    console.error("WakaTime fetch error:", error);
    return {
      today: "...",
      yesterday: "...",
      week: "...",
      languages: [],
      editors: [],
    };
  }
}

// =============================================
// LEETCODE
// =============================================
export interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  recentSubmissions?: {
    title: string;
    statusDisplay: string;
    timestamp: string | number;
  }[];
}

export async function getLeetCodeData(): Promise<LeetCodeData | null> {
  try {
    const username = USER_NAMES.leetcodeUsername;

    const query = `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
          }
        }
        allQuestionsCount {
          difficulty
          count
        }
        recentSubmissionList(username: $username, limit: 4) {
          title
          statusDisplay
          timestamp
        }
      }
    `;

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`LeetCode API returned status ${res.status}`);
      return null;
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.warn(`LeetCode API returned non-JSON content-type: ${contentType}`);
      return null;
    }

    const json = await res.json();
    if (!json.data || !json.data.matchedUser) {
      console.warn(`LeetCode data not found for user: ${username}`);
      return null;
    }

    const { matchedUser, allQuestionsCount, recentSubmissionList } = json.data;

    const acSubs = matchedUser.submitStats.acSubmissionNum;
    const totalSolved =
      acSubs.find(
        (s: { difficulty: string; count: number }) => s.difficulty === "All"
      )?.count ?? 0;
    const easySolved =
      acSubs.find(
        (s: { difficulty: string; count: number }) => s.difficulty === "Easy"
      )?.count ?? 0;
    const mediumSolved =
      acSubs.find(
        (s: { difficulty: string; count: number }) => s.difficulty === "Medium"
      )?.count ?? 0;
    const hardSolved =
      acSubs.find(
        (s: { difficulty: string; count: number }) => s.difficulty === "Hard"
      )?.count ?? 0;

    const totalQuestions =
      allQuestionsCount.find(
        (q: { difficulty: string; count: number }) => q.difficulty === "All"
      )?.count ?? 0;
    const totalEasy =
      allQuestionsCount.find(
        (q: { difficulty: string; count: number }) => q.difficulty === "Easy"
      )?.count ?? 0;
    const totalMedium =
      allQuestionsCount.find(
        (q: { difficulty: string; count: number }) => q.difficulty === "Medium"
      )?.count ?? 0;
    const totalHard =
      allQuestionsCount.find(
        (q: { difficulty: string; count: number }) => q.difficulty === "Hard"
      )?.count ?? 0;

    return {
      totalSolved,
      totalQuestions,
      easySolved,
      totalEasy,
      mediumSolved,
      totalMedium,
      hardSolved,
      totalHard,
      ranking: matchedUser.profile.ranking,
      recentSubmissions: recentSubmissionList,
    };
  } catch (error) {
    console.error("LeetCode fetch error:", error);
    return null;
  }
}

// =============================================
// HASHNODE BLOGS
// =============================================
export interface BlogData {
  title: string;
  brief: string;
  coverImage: string | null;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number;
}

export async function getHashnodeBlogs(): Promise<BlogData[]> {
  const query = `{
    user(username: "${USER_NAMES.hashnodeUsername}") {
      publications(first: 1) {
        edges {
          node {
            posts(first: 3) {
              edges {
                node { 
                  title 
                  brief 
                  coverImage { url } 
                  slug 
                  publishedAt 
                  readTimeInMinutes 
                }
              }
            }
          }
        }
      }
    }
  }`;

  try {
    const res = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`Hashnode API returned status ${res.status}`);
      return [];
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.warn(`Hashnode API returned non-JSON content-type: ${contentType}`);
      return [];
    }

    const data = await res.json();
    const posts =
      data?.data?.user?.publications?.edges?.[0]?.node?.posts?.edges || [];

    return posts.map(
      (post: {
        node: {
          title: string;
          brief: string;
          coverImage?: { url: string };
          slug: string;
          publishedAt: string;
          readTimeInMinutes: number;
        };
      }) => ({
        title: post.node.title,
        brief: post.node.brief,
        coverImage: post.node.coverImage?.url || null,
        slug: post.node.slug,
        publishedAt: post.node.publishedAt,
        readTimeInMinutes: post.node.readTimeInMinutes,
      })
    );
  } catch (error) {
    console.error("Hashnode fetch error:", error);
    return [];
  }
}
