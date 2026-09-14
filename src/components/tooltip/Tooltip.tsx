import React, { ReactNode, useState } from 'react';
import './Tooltip.css';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, position = 'top', children, className = '' }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`tooltip-wrapper ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={`tooltip-bubble tooltip-${position}`}>
          {text}
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
