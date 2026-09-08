import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { usesData } from '../../data/uses';
import { Link } from 'react-router-dom';
import './UsesSection.css';

export const UsesSection: React.FC = () => {
  const topItems = usesData.flatMap(c => c.items).slice(0, 6);

  return (
    <section className="uses-section">
      <SectionTitle>Uses & Gear</SectionTitle>

      <div className="uses-teaser-card">
        <p className="uses-intro">
          Software tools, hardware peripherals, and hardware configuration I rely on for daily development.
        </p>

        <div className="uses-grid">
          {topItems.map((item, idx) => (
            <div key={idx} className="uses-item-pill">
              <span className="uses-label">{item.label}:</span>
              <span className="uses-name">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="uses-link-wrapper">
          <Link to="/uses" className="uses-link">
            Explore Full Gear Setup →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UsesSection;
