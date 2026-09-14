import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import SectionTitle from '../sectionTitle/SectionTitle';
import './Calendar.css';

export const Calendar: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>(() => {
    return (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const activeTheme =
        (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
      setCurrentTheme(activeTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const customTheme = {
    dark: ['#232326', '#444444', '#777777', '#b3b3b3', '#ffffff'],
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  };

  return (
    <section className="calendar-section">
      <SectionTitle>Contributions Calendar</SectionTitle>

      <div className="calendar-card">
        <div className="calendar-wrapper">
          <GitHubCalendar
            username="Ashutoshjhaaa"
            colorScheme={currentTheme}
            theme={customTheme}
            blockSize={11}
            blockMargin={3}
            fontSize={12}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
