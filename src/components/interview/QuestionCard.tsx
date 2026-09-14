import React, { useState } from 'react';
import { LuChevronDown, LuCopy, LuCheck, LuSparkles, LuPuzzle } from 'react-icons/lu';
import { Question } from '../../data/interview/types';
import './QuestionCard.css';

interface QuestionCardProps {
  question: Question;
  index: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const displayNumber =
    question.number || String(index + 1).padStart(2, '0');

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!question.answer.code) return;
    navigator.clipboard.writeText(question.answer.code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const diffClass = `diff-${question.difficulty.toLowerCase()}`;

  return (
    <div className={`interview-question-card ${isOpen ? 'is-open' : ''}`}>
      {/* Clickable Card Header */}
      <button
        className="question-card-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="question-header-left">
          <h3 className="question-text">{question.question}</h3>
        </div>

        <div className="question-header-right">
          <span className={`diff-pill ${diffClass}`}>
            <span className="diff-glow-dot"></span>
            <span>{question.difficulty.toUpperCase()}</span>
          </span>
          <LuChevronDown className={`chevron-icon ${isOpen ? 'is-rotated' : ''}`} />
        </div>
      </button>

      {/* Expandable Drawer Body */}
      {isOpen && (
        <div className="question-card-body animate-fade-in">
          {/* Simple / Core Answer */}
          {question.answer.simple && (
            <div className="answer-core-box">
              <div
                className="answer-core-text"
                dangerouslySetInnerHTML={{ __html: question.answer.simple }}
              />
            </div>
          )}

          {/* Example / Practical Scenario */}
          {question.answer.example && (
            <div className="answer-example-box">
              <div className="example-box-header">
                <LuPuzzle className="example-icon" />
                <span>{question.answer.exampleLabel || 'Example & Breakdown'}</span>
              </div>
              <div
                className="example-box-content"
                dangerouslySetInnerHTML={{ __html: question.answer.example }}
              />
            </div>
          )}

          {/* Code Snippet Box */}
          {question.answer.code && (
            <div className="code-snippet-container">
              <div className="code-snippet-top-bar">
                <span className="code-lang-label">SNIPPET</span>
                <button
                  className={`code-copy-action-btn ${isCopied ? 'is-copied' : ''}`}
                  onClick={handleCopyCode}
                  title="Copy code snippet"
                >
                  {isCopied ? (
                    <>
                      <LuCheck className="copy-icon" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <LuCopy className="copy-icon" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="code-content-pre">
                <code>{question.answer.code}</code>
              </pre>
            </div>
          )}

          {/* Pro Tip / Note */}
          {question.answer.note && (
            <div className="answer-note-box">
              <LuSparkles className="note-icon" />
              <div className="note-text-wrapper">
                <strong className="note-label">Interview Tip: </strong>
                <div
                  className="note-html-content"
                  dangerouslySetInnerHTML={{ __html: question.answer.note }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
