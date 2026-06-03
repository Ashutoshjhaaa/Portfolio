const SKILLS = [
  // Frontend
  "html",
  "css",
  "js",
  "ts",
  "react",
  "nextjs",
  // "vue",
  // "nuxtjs",
  "tailwind",
  // Backend
  "nodejs",
  "express",
  "graphql",
  "prisma",
  // Databases
  "mongodb",
  "mysql",
  "postgresql",
  "firebase",
  "supabase",
  // Languages
  "c",
  "cpp",
  "java",
  "py",
  // Tools & DevOps
  "git",
  "github",
  "vscode",
  "postman",
  "vite",
  "npm",
  "figma",
  "md",
  // Cloud & Deployment
  "vercel",
  "githubactions",
];

const Skills = () => (
  <section id="skills" className="liquid-glass rounded-2xl overflow-hidden">
    <div className="flex items-center p-4 border-b border-border">
      <h2 className="text-2xl font-semibold flex items-center">
        technical skills.
      </h2>
    </div>
    <div className="relative p-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] gap-1">
        {SKILLS.map((skill) => (
          <button
            key={skill}
            aria-label={skill}
            title={skill}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <img
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              width={32}
              height={32}
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
