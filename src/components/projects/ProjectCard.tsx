import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';
import { ProjectData } from '../../data/projects';

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      {/* Left Column: Preview Banner */}
      <div className="project-mockup-wrapper">
        <div className="project-banner-inner">
          <img
            src={project.banner}
            alt={project.name}
            className="project-banner-img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Column: Project Details */}
      <div className="project-details-wrapper">
        <div className="project-header-row">
          <div className="project-title-group">
            <h3 className="project-name">{project.name}</h3>
          </div>

          <div className="project-action-buttons">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-action-btn live-btn"
                aria-label={`Live demo for ${project.name}`}
              >
                <LuExternalLink className="btn-icon" />
                <span>Live</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-action-btn github-btn"
                aria-label={`GitHub repository for ${project.name}`}
              >
                <FaGithub className="btn-icon" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        <p className="project-desc">{project.desc}</p>

        <div className="project-tech-section">
          <div className="tech-section-heading">Technologies Used:</div>
          <div className="project-tech-pills">
            {project.tech.map((t, idx) => (
              <span key={idx} className="tech-pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


