import React, { useState, useEffect } from 'react';
import { FaLocationDot, FaPaperPlane, FaClock, FaXTwitter } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiPeerlist, SiHashnode } from 'react-icons/si';
import { userImages } from '../../data/images';
import './HeroSection.css';

const ResumeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width="1em"
    height="1em"
  >
    <rect x="3.5" y="2.5" width="17" height="19" rx="3.5" />
    <circle cx="12" cy="7.5" r="2.2" />
    <path d="M7.8 13.8c0-2.2 1.8-3.6 4.2-3.6s4.2 1.4 4.2 3.6" />
    <line x1="6.8" y1="16.5" x2="17.2" y2="16.5" />
    <line x1="6.8" y1="19.5" x2="17.2" y2="19.5" />
  </svg>
);

export const HeroSection: React.FC = () => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section animate-fade-in">
      <div className="hero-header">
        <div className="avatar-wrapper">
          <img src={userImages.profile.avatar} alt="Ashutosh Jha" className="avatar-img" />
        </div>
        <div className="hero-title-group">
          <h1 className="hero-name">Ashutosh Jha</h1>
          <p className="hero-handle">@ashutoshjhadev</p>
          <div className="hero-meta-row">
            <span className="meta-badge location">
              <FaLocationDot className="meta-icon" /> India
            </span>
            <span className="meta-separator">•</span>
            {timeString && (
              <>
                <span className="meta-badge time">
                  <FaClock className="meta-icon" /> {timeString}
                </span>
                <span className="meta-separator">•</span>
              </>
            )}
            {/* <span className="meta-badge building">
              Building <a href="https://tryfittrack.vercel.app" target="_blank" rel="noreferrer" className="ossium-link">Fit-Track</a>
            </span> */}
          </div>
        </div>
      </div>

      <ul className="hero-bio-list">
        <li>
          Hi, I am a <strong>Full Stack Developer</strong> & <strong>CS Student</strong> based in India.
        </li>
        <li>
          Builder of <strong>Tatva</strong> & <strong>ShortIQ</strong> with modern <strong>React</strong>, <strong>Next.js</strong>, and <strong>AI integrations</strong>.
        </li>
        <li>
          Always <strong>shipping</strong>, <strong>learning</strong>, and turning ideas into <strong>products people actually use</strong>.
        </li>
        <li>
          Passionate about <strong>performant UI architecture</strong>, <strong>AI-driven workflows</strong>, and <strong>open source</strong>.
        </li>
      </ul>

      <div className="hero-actions">
        <a href="#contact" onClick={handleScrollToContact} className="hero-btn primary">
          <FaPaperPlane /> Contact Me
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hero-btn secondary">
          <ResumeIcon /> Resume
        </a>
        <div className="hero-social-pills">
          <a href="https://github.com/Ashutoshjhaaa" target="_blank" rel="noreferrer" className="social-pill" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://x.com/ashutoshjhadev" target="_blank" rel="noreferrer" className="social-pill" title="Twitter / X">
            <FaXTwitter />
          </a>
          <a href="https://linkedin.com/in/ashutoshjhadev" target="_blank" rel="noreferrer" className="social-pill" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://peerlist.io/ashujha" target="_blank" rel="noreferrer" className="social-pill" title="Peerlist">
            <SiPeerlist />
          </a>
          <a href="https://hashnode.com/@ahutoshjha" target="_blank" rel="noreferrer" className="social-pill" title="Hashnode">
            <SiHashnode />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

