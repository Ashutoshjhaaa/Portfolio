import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPostman,
  SiRender,
  SiGooglegemini,
  SiN8N,
} from 'react-icons/si';
import { TbBrandCss3, TbBrandVscode, TbBrain, TbSql } from 'react-icons/tb';
import { LuBot, LuDatabase } from 'react-icons/lu';
import './SkillSection.css';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const row1Skills: SkillItem[] = [
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'var(--text-primary)' },
  { name: 'NodeJS', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: 'var(--text-primary)' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <TbBrandCss3 />, color: '#1572B6' },
  { name: 'SQL', icon: <TbSql />, color: '#00758F' },
];

const row2Skills: SkillItem[] = [
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
  { name: 'Git', icon: <SiGit />, color: '#F05032' },
  { name: 'GitHub', icon: <SiGithub />, color: 'var(--text-primary)' },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
  { name: 'VS Code', icon: <TbBrandVscode />, color: '#007ACC' },
  { name: 'Render', icon: <SiRender />, color: '#46E3B7' },
  { name: 'Gemini API', icon: <SiGooglegemini />, color: '#8E75FF' },
  { name: 'AI Agents', icon: <LuBot />, color: '#10B981' },
  { name: 'LLMs & RAG', icon: <TbBrain />, color: '#F43F5E' },
  { name: 'Vector DBs', icon: <LuDatabase />, color: '#EC4899' },
  { name: 'n8n', icon: <SiN8N />, color: '#EA4B71' },
];

export const SkillSection: React.FC = () => {
  return (
    <section className="skill-section" id="skills">
      <SectionTitle>My Skills</SectionTitle>

      <div className="skills-marquee-container">
        {/* Row 1: Scrolling Left */}
        <div className="marquee-track-wrapper">
          <div className="marquee-track marquee-left">
            {[...row1Skills, ...row1Skills, ...row1Skills].map((item, idx) => (
              <div key={`row1-${idx}`} className="marquee-item">
                <span className="marquee-icon" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <span className="marquee-text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="marquee-track-wrapper">
          <div className="marquee-track marquee-right">
            {[...row2Skills, ...row2Skills, ...row2Skills].map((item, idx) => (
              <div key={`row2-${idx}`} className="marquee-item">
                <span className="marquee-icon" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <span className="marquee-text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;

