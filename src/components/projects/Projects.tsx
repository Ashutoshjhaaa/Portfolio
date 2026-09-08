import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import { featuredProjects, ProjectData } from '../../data/projects';
import { Link } from 'react-router-dom';
import './Projects.css';

interface ProjectsProps {
  limit?: number;
  showAllLink?: boolean;
  customProjects?: ProjectData[];
}

export const Projects: React.FC<ProjectsProps> = ({
  showAllLink = true,
  customProjects,
}) => {
  const projectsToDisplay = customProjects || featuredProjects;

  return (
    <section className="projects-section" id="projects">
      <SectionTitle>My Projects</SectionTitle>

      <div className="projects-list">
        {projectsToDisplay.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {showAllLink && (
        <div className="view-all-wrapper">
          <Link to="/projects" className="view-all-btn">
            View All Projects →
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;

