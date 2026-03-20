import React from 'react';

export const Background: React.FC = () => {
  return (
    <>
      <div className="grid-background" />
      <div className="corner-glow glow-top-left" style={{ background: 'radial-gradient(circle at center, var(--glow-color), transparent 70%)' }} />
      <div className="corner-glow glow-top-right" style={{ background: 'radial-gradient(circle at center, var(--glow-color), transparent 70%)' }} />
      <div className="corner-glow glow-bottom-left" style={{ background: 'radial-gradient(circle at center, var(--glow-color), transparent 70%)' }} />
      <div className="corner-glow glow-bottom-right" style={{ background: 'radial-gradient(circle at center, var(--glow-color), transparent 70%)' }} />
    </>
  );
};
