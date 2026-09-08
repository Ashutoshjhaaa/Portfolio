import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { mockAnalyticsData } from '../../data/analytics';
import { Link } from 'react-router-dom';
import './AnalyticsSection.css';

export const AnalyticsSection: React.FC = () => {
  const data = mockAnalyticsData['7d'];

  return (
    <section className="analytics-section">
      <SectionTitle>Site Analytics</SectionTitle>

      <div className="analytics-card">
        <div className="analytics-stats-row">
          <div className="stat-box">
            <span className="stat-value">{data.totalViews.toLocaleString()}</span>
            <span className="stat-label">Page Views (7d)</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">{data.totalVisitors.toLocaleString()}</span>
            <span className="stat-label">Unique Visitors (7d)</span>
          </div>
        </div>

        <div className="analytics-teaser-footer">
          <span className="privacy-note">🔒 Privacy-first analytics. No cookies or personal data tracking.</span>
          <Link to="/analytics" className="analytics-link">
            View Analytics Dashboard →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
