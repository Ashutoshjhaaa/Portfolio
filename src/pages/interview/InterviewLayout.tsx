import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  LuChevronLeft,
  LuChevronRight,
  LuSearch,
  LuX,
  LuCpu,
  LuBox,
  LuZap,
  LuShieldCheck,
  LuLayers,
} from 'react-icons/lu';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
} from 'react-icons/si';
import { TOPICS_CONFIG, TOPIC_ORDER, TopicConfig } from '../../data/interview/topics';
import QuestionCard from '../../components/interview/QuestionCard';
import './InterviewLayout.css';

const topicIcons: Record<string, React.ReactNode> = {
  javascript: <SiJavascript />,
  react: <SiReact />,
  nodejs: <SiNodedotjs />,
  sql: <SiPostgresql />,
  html: <SiHtml5 />,
  css: <SiCss />,
};

const statCategoryIcons: Record<string, React.ReactNode> = {
  questions: <LuCpu className="stat-category-icon stat-icon-orange" />,
  topic: <LuBox className="stat-category-icon stat-icon-blue" />,
  async: <LuZap className="stat-category-icon stat-icon-yellow" />,
  security: <LuShieldCheck className="stat-category-icon stat-icon-green" />,
  core: <LuLayers className="stat-category-icon stat-icon-purple" />,
};

export const InterviewLayout: React.FC = () => {
  const { topic: topicParam } = useParams<{ topic?: string }>();
  const navigate = useNavigate();

  const currentTopicKey = (topicParam && TOPICS_CONFIG[topicParam.toLowerCase()])
    ? topicParam.toLowerCase()
    : 'javascript';

  const topicConfig: TopicConfig = TOPICS_CONFIG[currentTopicKey] || TOPICS_CONFIG.javascript;

  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');

  // Reset filters when topic changes
  useEffect(() => {
    setSearchTerm('');
    setActiveFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTopicKey]);

  // Filter questions based on search & difficulty
  const filteredQuestions = useMemo(() => {
    return topicConfig.questions.filter((q) => {
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !query ||
        q.question.toLowerCase().includes(query) ||
        (q.answer.simple && q.answer.simple.toLowerCase().includes(query)) ||
        (q.section && q.section.toLowerCase().includes(query));

      const matchesFilter =
        activeFilter === 'all' || q.difficulty.toLowerCase() === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [topicConfig.questions, searchTerm, activeFilter]);

  // Group filtered questions by section
  const sections = useMemo(() => {
    const rawSections = Array.from(
      new Set(topicConfig.questions.map((q) => q.section))
    ).filter(Boolean);
    return rawSections;
  }, [topicConfig.questions]);

  // Difficulty counts for pills
  const counts = useMemo(() => {
    const all = topicConfig.questions.length;
    const easy = topicConfig.questions.filter((q) => q.difficulty.toLowerCase() === 'easy').length;
    const medium = topicConfig.questions.filter((q) => q.difficulty.toLowerCase() === 'medium').length;
    const hard = topicConfig.questions.filter((q) => q.difficulty.toLowerCase() === 'hard').length;
    return { all, easy, medium, hard };
  }, [topicConfig.questions]);

  const handleTopicSelect = (newTopicId: string) => {
    navigate(`/interview/${newTopicId}`);
  };

  return (
    <div className="interview-page-wrapper animate-fade-in">
      {/* Top Breadcrumb & Status Header */}
      <div className="interview-top-nav">
        <Link to="/" className="back-portfolio-link">
          <LuChevronLeft className="back-arrow" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="interview-status-tag">
          <span className="status-label-port">INTERVIEW PREP</span>
          <span className="status-dot-green"></span>
          <span className="status-label-eng">ENGINEERING</span>
        </div>
      </div>

      {/* Topic Switcher Pills Tabs */}
      <div className="topic-switcher-bar">
        {TOPIC_ORDER.map((tKey) => {
          const t = TOPICS_CONFIG[tKey];
          const isSelected = tKey === currentTopicKey;
          return (
            <button
              key={t.id}
              onClick={() => handleTopicSelect(t.id)}
              className={`topic-switch-btn ${isSelected ? 'is-active' : ''}`}
              aria-selected={isSelected}
            >
              <span className="topic-btn-icon" style={{ color: t.badgeColor === '#000000' ? '#F7DF1E' : t.badgeColor }}>
                {topicIcons[t.id] || t.badgeText}
              </span>
              <span className="topic-btn-name">{t.name}</span>
            </button>
          );
        })}
      </div>

      {/* Hero Header Section matching screenshot */}
      <div className="interview-hero-header">
        <div className="hero-badge-box" style={{ backgroundColor: topicConfig.badgeBg, color: topicConfig.badgeColor }}>
          {topicIcons[topicConfig.id] || topicConfig.badgeText}
        </div>

        <h1 className="interview-hero-title">{topicConfig.title}</h1>
        <p className="interview-hero-desc">{topicConfig.description}</p>

        {/* 4 Stats Cards Grid */}
        <div className="interview-stats-grid">
          {topicConfig.stats.map((stat, idx) => (
            <div key={idx} className="interview-stat-card">
              <div className="stat-card-top">
                <div className="stat-icon-wrapper">
                  {statCategoryIcons[stat.category] || <LuCpu />}
                </div>
                <span className="stat-card-label">{stat.label}</span>
              </div>
              <div className="stat-card-val">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="interview-filter-search-container">
        {/* Difficulty Filter Pills */}
        <div className="filter-pills-group">
          {(['all', 'easy', 'medium', 'hard'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-pill-btn ${activeFilter === filter ? 'is-active' : ''}`}
            >
              <span>{filter.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Search Input Box */}
        <div className="search-input-wrapper">
          <LuSearch className="search-input-icon" />
          <input
            type="text"
            placeholder="Search concepts, questions, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-text-field"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="search-clear-btn"
              title="Clear search"
            >
              <LuX />
            </button>
          )}
        </div>
      </div>

      {/* Questions Content List */}
      <div className="interview-questions-container">
        {filteredQuestions.length === 0 ? (
          <div className="no-questions-card">
            <p className="no-questions-text">No questions found matching "{searchTerm || activeFilter}".</p>
            <button
              className="reset-filters-btn"
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          sections.map((sectionName) => {
            const sectionQuestions = filteredQuestions.filter(
              (q) => q.section === sectionName
            );
            if (sectionQuestions.length === 0) return null;

            return (
              <div key={sectionName} className="interview-section-group">
                <div className="section-group-header">
                  <h2 className="section-group-title">{sectionName}</h2>
                  <div className="section-group-divider" />
                </div>

                <div className="section-questions-list">
                  {sectionQuestions.map((q, qIndex) => (
                    <QuestionCard
                      key={q.id}
                      question={q}
                      index={qIndex}
                    />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Prev / Next Topic Navigation */}
      <div className="interview-bottom-nav">
        {topicConfig.prevTopic ? (
          <Link
            to={`/interview/${topicConfig.prevTopic.id}`}
            className="topic-nav-card prev-card"
          >
            <div className="topic-nav-icon-box">
              <LuChevronLeft className="nav-arrow-icon" />
            </div>
            <div className="topic-nav-text-group">
              <span className="nav-direction-label">Previous Topic</span>
              <span className="nav-topic-name">{topicConfig.prevTopic.name}</span>
            </div>
          </Link>
        ) : (
          <div className="topic-nav-empty" />
        )}

        {topicConfig.nextTopic && (
          <Link
            to={`/interview/${topicConfig.nextTopic.id}`}
            className="topic-nav-card next-card"
          >
            <div className="topic-nav-text-group text-right">
              <span className="nav-direction-label">Next Topic</span>
              <span className="nav-topic-name">{topicConfig.nextTopic.name}</span>
            </div>
            <div className="topic-nav-icon-box">
              <LuChevronRight className="nav-arrow-icon" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default InterviewLayout;
