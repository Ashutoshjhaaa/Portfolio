import React from 'react';
import './QuoteSection.css';

interface QuoteSectionProps {
  quote?: string;
  author?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  quote = "Turning 'impossible' ideas into shipped products.",
  author = 'ASHUTOSH JHA',
}) => {
  return (
    <section className="quote-section-container" aria-label="Personal Philosophy">
      <div className="quote-blueprint-wrapper">
        {/* Corner Crosshair Lines Extensions */}
        <span className="corner-cross corner-tl" aria-hidden="true">+</span>
        <span className="corner-cross corner-tr" aria-hidden="true">+</span>
        <span className="corner-cross corner-bl" aria-hidden="true">+</span>
        <span className="corner-cross corner-br" aria-hidden="true">+</span>

        <div className="quote-card-inner">
          {/* Quote Icon */}
          <div className="quote-icon-wrap" aria-hidden="true">
            <svg
              className="quote-svg-icon"
              viewBox="0 0 24 20"
              fill="currentColor"
            >
              <path d="M0 12.5C0 5.6 4.5 1.6 10.05 0l1.55 2.8C8.16 4.13 5.96 6.16 5.55 8.64H10.8V20H0V12.5zm13.2 0C13.2 5.6 17.7 1.6 23.25 0l1.55 2.8c-3.44 1.33-5.64 3.36-6.05 5.84h5.25V20H13.2V12.5z" />
            </svg>
          </div>

          {/* Quote Text */}
          <blockquote className="quote-text">
            &ldquo;{quote}&rdquo;
          </blockquote>

          {/* Author / Signature Divider */}
          <div className="quote-author-divider">
            <span className="quote-rule-line" />
            <span className="quote-author-name">{author}</span>
            <span className="quote-rule-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
