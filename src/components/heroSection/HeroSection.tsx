import React, { useState, useEffect } from 'react';
import { FaLocationDot, FaPaperPlane, FaClock } from 'react-icons/fa6';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si';
import { userImages } from '../../data/images';
import './HeroSection.css';

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
        <a href="mailto:ashujha7070@gmail.com" className="hero-btn primary">
          <FaPaperPlane /> Contact Me
        </a>
        <div className="hero-social-pills">
          <a href="https://github.com/Ashutoshjhaaa" target="_blank" rel="noreferrer" className="social-pill" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://x.com/ashutoshjhadev" target="_blank" rel="noreferrer" className="social-pill" title="Twitter / X">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/ashutoshjhadev" target="_blank" rel="noreferrer" className="social-pill" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://peerlist.io/ashutoshjha" target="_blank" rel="noreferrer" className="social-pill" title="Peerlist">
            <SiPeerlist />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

