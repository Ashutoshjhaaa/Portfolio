import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '5rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
        404
      </h1>
      <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
        Page Not Found
      </h2>
      <p style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-tertiary)', marginBottom: '30px' }}>
        The route you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.9rem',
          fontWeight: 600,
          backgroundColor: 'var(--text-primary)',
          color: 'var(--bg-primary)',
          padding: '10px 20px',
          borderRadius: '6px',
          display: 'inline-block',
        }}
      >
        Return Home
      </Link>
    </div>
  );
};

export default PageNotFound;
