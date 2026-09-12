import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../sectionTitle/SectionTitle';
import { LuArrowRight } from 'react-icons/lu';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
} from 'react-icons/si';
import { TOPICS_CONFIG, TOPIC_ORDER } from '../../data/interview/topics';
import './InterviewSection.css';

const topicIcons: Record<string, React.ReactNode> = {
  javascript: <SiJavascript />,
  react: <SiReact />,
  nodejs: <SiNodedotjs />,
  sql: <SiPostgresql />,
  html: <SiHtml5 />,
  css: <SiCss />,
};

export const InterviewSection: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('javascript');

  const currentTopic = TOPICS_CONFIG[selectedTopicId] || TOPICS_CONFIG.javascript;

  return (
    <section className="interview-section" id="interview">
      <SectionTitle>Interview Preparation</SectionTitle>

      <div className="interview-card-container">
        {/* Header Summary */}
        <div className="interview-header-info">
          <h3 className="interview-main-title">Master Technical Rounds</h3>
          <p className="interview-sub-text">
            Curated deep-dive questions, core runtime mechanics, problem-solving patterns, and code snippets.
          </p>
        </div>

        {/* Horizontal Topic Pills Bar */}
        <div className="interview-pills-bar">
          {TOPIC_ORDER.map((tKey) => {
            const topic = TOPICS_CONFIG[tKey];
            const isSelected = selectedTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`interview-pill-btn ${isSelected ? 'is-selected' : ''}`}
                aria-selected={isSelected}
              >
                <span
                  className="pill-icon"
                  style={{
                    color: topic.iconColor || (topic.badgeColor === '#000000' ? '#F7DF1E' : topic.badgeColor),
                  }}
                >
                  {topicIcons[topic.id] || topic.badgeText}
                </span>
                <span className="pill-label">{topic.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Topic Overview Panel */}
        <div className="interview-details-panel animate-fade-in" key={currentTopic.id}>
          <div className="interview-panel-top">
            <div className="panel-topic-left">
              <div
                className="panel-badge-square"
                style={{
                  backgroundColor: currentTopic.badgeBg,
                  color: currentTopic.badgeColor,
                }}
              >
                {topicIcons[currentTopic.id] || currentTopic.badgeText}
              </div>
              <div className="panel-topic-meta">
                <h4 className="panel-topic-title">{currentTopic.name} Track</h4>
                <div className="panel-category-badge">
                  <span className="cat-dot"></span>
                  <span>Technical Track</span>
                </div>
              </div>
            </div>

            <Link to={`/interview/${currentTopic.id}`} className="interview-explore-btn">
              <span>Explore Questions</span>
              <LuArrowRight className="ext-arrow" />
            </Link>
          </div>

          <p className="panel-topic-desc">{currentTopic.description}</p>
        </div>
      </div>
    </section>
  );
};

export default InterviewSection;
