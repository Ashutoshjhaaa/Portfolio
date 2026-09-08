import React, { ReactNode } from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="section-title-container">
      <div className="section-title-content">
        <span className="corner-accent top-left"></span>
        <span className="corner-accent top-right"></span>
        <h2>{children}</h2>
        <span className="corner-accent bottom-left"></span>
        <span className="corner-accent bottom-right"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
