import React, { useState, useEffect } from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState<string>('');

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
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-attribution">
          Designed & Made by Ashutosh Jha
        </div>
        <div className="ist-clock">
          <span className="clock-dot"></span> IST: {istTime || '12:00:00 PM'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
