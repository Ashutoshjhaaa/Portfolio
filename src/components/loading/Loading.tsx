import React from 'react';
import './Loading.css';

export const Loading: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <svg className="loading-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#222" strokeWidth="6" />
          <circle className="loading-circle-dash" cx="50" cy="50" r="40" stroke="#fff" strokeWidth="6" strokeDasharray="250" strokeDashoffset="200" strokeLinecap="round" />
        </svg>
        <p className="loading-text">Just a second babe...</p>
      </div>
    </div>
  );
};

export default Loading;
