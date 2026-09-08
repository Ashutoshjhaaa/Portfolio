import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { usesData } from '../../data/uses';

export const UsesLayout: React.FC = () => {
  return (
    <div className="uses-page animate-fade-in">
      <SectionTitle>Uses & Desk Setup</SectionTitle>

      <p style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
        Detailed breakdown of the hardware, software, and tools I use every day to design and code software products.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {usesData.map((category, cIdx) => (
          <div key={cIdx} style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '18px' }}>
            <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '14px' }}>
              {category.category}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '10px' }}>
              {category.items.map((item, iIdx) => (
                <div key={iIdx} style={{ backgroundColor: 'var(--bg-surface-elevated)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '10px 14px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '2px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsesLayout;
