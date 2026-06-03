import React from 'react';

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const MotionSection: React.FC<MotionSectionProps> = ({ 
  children, 
  className = "",
}) => {
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
};

export const MotionList: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
};

export const MotionItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
