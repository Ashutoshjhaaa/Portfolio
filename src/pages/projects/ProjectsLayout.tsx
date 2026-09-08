import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import ProjectCard from '../../components/projects/ProjectCard';
import { allProjects } from '../../data/projects';

export const ProjectsLayout: React.FC = () => {
  return (
    <div className="projects-page animate-fade-in">
      <SectionTitle>All Projects</SectionTitle>

      <p style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>
        A complete list of open source software, tools, packages, and experiments I've built over the years.
      </p>

      <div className="projects-list">
        {allProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsLayout;
