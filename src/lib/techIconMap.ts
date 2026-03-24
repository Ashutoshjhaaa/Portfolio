// src/lib/techIconMap.ts
// Single source of truth for all tech icons.
// To add a new tech: just add one line here. That's it.
// Find slugs at: https://simpleicons.org

export type TechIconEntry = {
  slug: string;          // simpleicons.org slug
  label: string;         // display name
  monochrome?: boolean;  // true = icon is black by default, needs color override
  fallbackUrl?: string;  // direct url to svg if cdn.simpleicons.org is missing it
};

export const techIconMap: Record<string, TechIconEntry> = {
  // --- Frontend ---
  'html':          { slug: 'html5',          label: 'HTML5' },
  'html5':         { slug: 'html5',          label: 'HTML5' },
  'css':           { slug: 'css',            label: 'CSS3' },
  'css3':          { slug: 'css',            label: 'CSS3' },
  'javascript':    { slug: 'javascript',     label: 'JavaScript' },
  'typescript':    { slug: 'typescript',     label: 'TypeScript' },
  'react':         { slug: 'react',          label: 'React' },
  'nextjs':        { slug: 'nextdotjs',      label: 'Next.js',     monochrome: true },
  'nuxtjs':        { slug: 'nuxtdotjs',      label: 'Nuxt.js' },
  'svelte':        { slug: 'svelte',         label: 'Svelte' },
  'tailwindcss':   { slug: 'tailwindcss',    label: 'Tailwind CSS' },
  'tailwind':      { slug: 'tailwindcss',    label: 'Tailwind CSS' },
  'sass':          { slug: 'sass',           label: 'Sass' },
  'materialui':    { slug: 'mui',            label: 'Material UI' },
  'shadcnui':      { slug: 'shadcnui',       label: 'shadcn/ui',   monochrome: true },
  'radixui':       { slug: 'radixui',        label: 'Radix UI',    monochrome: true },
  'framermotion':  { slug: 'framer',         label: 'Framer Motion' },
  'vite':          { slug: 'vite',           label: 'Vite' },
  'figma':         { slug: 'figma',          label: 'Figma' },

  // --- Backend ---
  'nodejs':        { slug: 'nodedotjs',      label: 'Node.js' },
  'expressjs':     { slug: 'express',        label: 'Express.js',  monochrome: true },
  'python':        { slug: 'python',         label: 'Python' },
  'java':          { slug: 'java',        label: 'Java' , fallbackUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg' },
  'graphql':       { slug: 'graphql',        label: 'GraphQL' },

  // --- Database ---
  'postgresql':    { slug: 'postgresql',     label: 'PostgreSQL' },
  'mongodb':       { slug: 'mongodb',        label: 'MongoDB' },
  'mysql':         { slug: 'mysql',          label: 'MySQL' },
  'redis':         { slug: 'redis',          label: 'Redis' },
  'supabase':      { slug: 'supabase',       label: 'Supabase' },
  'firebase':      { slug: 'firebase',       label: 'Firebase' },
  'appwrite':      { slug: 'appwrite',       label: 'Appwrite' },
  'convex':        { slug: 'convex',         label: 'Convex',      monochrome: true, fallbackUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/convex.svg' },
  'prisma':        { slug: 'prisma',         label: 'Prisma',      monochrome: true },
  'drizzle':       { slug: 'drizzle',        label: 'Drizzle',     monochrome: true },

  // --- Cloud & DevOps ---
  'aws':           { slug: 'amazonaws', label: 'AWS', fallbackUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg' },
  'docker':        { slug: 'docker',         label: 'Docker' },
  'vercel':        { slug: 'vercel',         label: 'Vercel',      monochrome: true },
  'linux':         { slug: 'linux',          label: 'Linux',       monochrome: true },
  'nginx':         { slug: 'nginx',          label: 'Nginx' },

  // --- Auth & Services ---
  'clerk':         { slug: 'clerk',          label: 'Clerk',       monochrome: true },
  'stripe':        { slug: 'stripe',         label: 'Stripe' },
  'resend':        { slug: 'resend',         label: 'Resend',      monochrome: true },
  'rozzerpay':       { slug: 'rozzerpay',         label: 'Rozzerpay',      monochrome: true, fallbackUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/razorpay.svg' },

  // --- AI ---
  'googlegemini':  { slug: 'googlegemini',   label: 'Google Gemini' },
  'gemini':        { slug: 'googlegemini',   label: 'Google Gemini' },
  'openai':        { slug: 'openai',         label: 'OpenAI',      monochrome: true },
  'neon':          { slug: 'neon',           label: 'Neon', monochrome: false, fallbackUrl: 'https://raw.githubusercontent.com/neon-database/logo/main/neon-mark-color.svg' },

  // --- Testing ---
  'jest':          { slug: 'jest',           label: 'Jest' },
  'vitest':        { slug: 'vitest',         label: 'Vitest' },

  // --- Other ---
  'postman':       { slug: 'postman',         label: 'Postman' },
  'github':        { slug: 'github',         label: 'GitHub',      monochrome: true },
  'git':           { slug: 'git',            label: 'Git' },
  'vscode':        { slug: 'visualstudiocode', label: 'VS Code', fallbackUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg' },

};

/**
 * Normalizes any tech name to a lookup key in techIconMap.
 * "Next.js" → "nextjs", "Tailwind CSS" → "tailwindcss"
 */
export function normalizeTechName(name: string): string {
  return name.toLowerCase().replace(/[\s.\-\/]/g, '');
}

/**
 * Looks up a TechIcon entry by name (tolerates spaces, dots, dashes).
 */
export function getTechIcon(name: string): TechIconEntry | undefined {
  const key = normalizeTechName(name);
  return techIconMap[key] ?? techIconMap[name.toLowerCase()];
}
