import React, { useState } from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { LuExternalLink, LuChevronDown } from 'react-icons/lu';
import './Experience.css';

interface ExperienceItem {
  id: string;
  company: string;
  companyLink: string;
  logo: string;
  logoText: string;
  role: string;
  period: string;
  status: 'Active' | 'Done';
  bullets: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 'digiglobe',
    company: 'Digiglobe Solution',
    companyLink: 'https://digiglobesolution.com/',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://digiglobesolution.com/&size=128',
    logoText: 'DS',
    role: 'Front End Developer Intern',
    period: 'July 2025 - January 2026',
    status: 'Active',
    bullets: [
      'Designed and developed fully responsive web pages for production modules.',
      'Implemented modern UI components using React.js and Tailwind CSS.',
      'Ensured cross-browser compatibility and mobile-first responsiveness.'
    ]
  },
  {
    id: 'pw-skills',
    company: 'PW-Skills',
    companyLink: 'https://pwskills.com/',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://pwskills.com/&size=128',
    logoText: 'PW',
    role: 'Front End Developer Intern',
    period: 'November 2024 - June 2025',
    status: 'Done',
    bullets: [
      'Built 5+ responsive websites using React.js, JavaScript, HTML5, and CSS3 with smooth, interactive components.',
      'Reduced page load time by 25% using code-splitting, lazy loading, and image optimization techniques.',
      'Collaborated with team members using Git for version control and delivering features on time.'
    ]
  }
];

export const Experience: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'digiglobe': true,
    'pw-skills': false,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="experience-section" id="experience">
      <SectionTitle>Experience</SectionTitle>

      <div className="experience-card-container">
        <div className="timeline-track">
          {experienceData.map((item) => {
            const isExpanded = !!expandedIds[item.id];
            const isActive = item.status === 'Active';

            return (
              <div key={item.id} className="timeline-node">
                {/* Glowing status dot on dashed vertical line */}
                <div className="timeline-indicator">
                  <span
                    className={`timeline-glow-dot ${
                      isActive ? 'dot-active' : 'dot-done'
                    }`}
                  ></span>
                </div>

                {/* Experience Item Row & Body */}
                <div className="experience-item-wrapper">
                  <div
                    className="experience-item-header"
                    onClick={() => toggleExpand(item.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExpand(item.id);
                      }
                    }}
                  >
                    {/* Left: Company Logo */}
                    <div className="company-logo-box">
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="company-logo-img"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.company-logo-fallback');
                          if (fallback) (fallback as HTMLElement).style.display = 'flex';
                        }}
                      />
                      <div className="company-logo-fallback" style={{ display: 'none' }}>
                        {item.logoText}
                      </div>
                    </div>

                    {/* Middle: Name, Link, Status, Role */}
                    <div className="experience-main-info">
                      <div className="experience-title-row">
                        <span className="exp-company-name">{item.company}</span>
                        {item.companyLink && (
                          <a
                            href={item.companyLink}
                            target="_blank"
                            rel="noreferrer"
                            className="company-ext-link"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Visit ${item.company} website`}
                          >
                            <LuExternalLink className="ext-icon" />
                          </a>
                        )}
                        <span
                          className={`status-pill ${
                            isActive ? 'status-active' : 'status-done'
                          }`}
                        >
                          <span className="status-bullet"></span>
                          <span>{item.status}</span>
                        </span>
                      </div>
                      <div className="exp-role-title">{item.role}</div>
                    </div>

                    {/* Right: Date & Chevron */}
                    <div className="experience-meta-right">
                      <span className="exp-period-text">{item.period}</span>
                      <LuChevronDown
                        className={`chevron-icon ${isExpanded ? 'rotated' : ''}`}
                      />
                    </div>
                  </div>

                  {/* Expandable Description Details */}
                  {isExpanded && (
                    <div className="experience-details-expand">
                      <ul className="exp-bullet-list">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="exp-bullet-item">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
