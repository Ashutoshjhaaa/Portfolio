import React, { useState, useEffect } from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState<string>('');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const observer = new MutationObserver(() => {
      const currentTheme = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
      setTheme(currentTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const badgeUrl =
    theme === 'light'
      ? 'https://hits.sh/ashutoshjh.me.svg?color=64748b&labelColor=334155'
      : 'https://hits.sh/ashutoshjh.me.svg?color=232326&labelColor=1a1b1c';

  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-attribution">
          Designed & Made by Ashutosh Jha
        </div>
        <div className="footer-stats">
          <a
            href="https://hits.sh/ashutoshjh.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-hits-link"
            title="Website Visitors"
          >
            <img
              src={badgeUrl}
              alt="Website Visitors"
              className="footer-hits-img"
            />
          </a>
          <div className="ist-clock">
            <span className="clock-dot"></span> IST: {istTime || '12:00:00 PM'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
