import React, { useState, ChangeEvent, FormEvent } from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { LuUser, LuMail, LuArrowRight } from 'react-icons/lu';
import { FaRegCommentDots } from 'react-icons/fa';
import { SiGooglemeet, SiPeerlist, SiHashnode } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import './ContactMe.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xnjglgja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.error || 'Something went wrong. Please try again.'
        );
        setStatus('error');
      }
    } catch {
      setErrorMessage('An unexpected error occurred. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <SectionTitle>Let's Connect</SectionTitle>

      <div className="portfolio-contact-card">
        {/* Left Column: Form */}
        <div className="contact-panel-left">
          <div className="contact-panel-header">
            <h3 className="contact-heading">send a message.</h3>
            <p className="contact-subheading">
              Drop a message below to discuss projects or just say hi.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-actual-form">
            <div className="contact-inputs-list">
              {/* Name */}
              <div className="contact-input-field">
                <LuUser className="input-prefix-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  aria-label="Your name"
                  className="contact-text-input"
                />
              </div>

              {/* Email */}
              <div className="contact-input-field">
                <LuMail className="input-prefix-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  aria-label="Email address"
                  className="contact-text-input"
                />
              </div>

              {/* Message */}
              <div className="contact-input-field contact-input-field-textarea">
                <FaRegCommentDots className="input-prefix-icon textarea-icon" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={2}
                  placeholder="What would you like to discuss?"
                  aria-label="Message"
                  className="contact-text-input contact-textarea-input"
                />
              </div>
            </div>

            <div className="contact-action-area">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`contact-submit-button ${
                  status === 'submitting' ? 'is-submitting' : ''
                }`}
              >
                {status === 'submitting' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <LuArrowRight className="submit-arrow" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="contact-feedback-msg feedback-success">
                  Got your message! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="contact-feedback-msg feedback-error">
                  {errorMessage}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Right Column: Schedule & Social */}
        <div className="contact-panel-right">
          {/* Schedule Discovery Call */}
          <div className="contact-panel-section">
            <div className="contact-panel-header">
              <h3 className="contact-heading">schedule a meeting.</h3>
              <p className="contact-subheading">
                Book a 30-minute call on Google Meet.
              </p>
            </div>
            <div className="contact-panel-body">
              <div className="call-info-box">
                <span className="call-info-title">30-minute discovery call.</span>
                <span className="call-info-desc">Let's discuss your project goals.</span>
              </div>
              <a
                href="https://cal.com/ashutoshjha/30min"
                target="_blank"
                rel="noreferrer"
                className="cal-meeting-btn"
              >
                <SiGooglemeet className="meet-icon" />
                <span>Schedule a Meeting</span>
              </a>
            </div>
          </div>

          {/* Social Follow */}
          <div className="contact-panel-section contact-panel-social">
            <div className="contact-panel-header">
              <h3 className="contact-heading">follow & connect.</h3>
              <p className="contact-subheading">
                Stay updated with my latest thoughts.
              </p>
            </div>
            <div className="contact-panel-body">
              <div className="social-quick-grid">
                <a
                  href="https://github.com/Ashutoshjhaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-quick-link"
                  title="GitHub"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/ashutoshjhadev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-quick-link"
                  title="LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/ashutoshjhadev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-quick-link"
                  title="Twitter / X"
                  aria-label="Twitter Profile"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://peerlist.io/ashujha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-quick-link"
                  title="Peerlist"
                  aria-label="Peerlist Profile"
                >
                  <SiPeerlist />
                </a>
                <a
                  href="https://hashnode.com/@ahutoshjha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-quick-link"
                  title="Hashnode"
                  aria-label="Hashnode Blog"
                >
                  <SiHashnode />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
