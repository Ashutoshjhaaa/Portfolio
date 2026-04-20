'use client';

import { useState } from 'react';
import { Mail, Github, Instagram, Linkedin, Globe } from 'lucide-react';
import { SiX } from 'react-icons/si';
import { portfolioData } from "@/components/constants/data";
import { cn } from '@/lib/utils';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  mail: <Mail className="w-4 h-4" />,
  github: <Github className="w-4 h-4" />,
  instagram: <Instagram className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  website: <Globe className="w-4 h-4" />,
  x: <SiX className="w-4 h-4" />,
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const hasErrors = {
      name: !form.name.trim(),
      email: !form.email.trim(),
      message: !form.message.trim(),
    };

    if (Object.values(hasErrors).some(Boolean)) {
      setErrors(hasErrors);
      return;
    }

    setErrors({ name: false, email: false, message: false });
    setStatus('sending');

    try {
      const res = await fetch(portfolioData.contact.formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'No subject',
          message: form.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });

        // Reset to idle state after 10 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 10000);
      } else {
        // Formspree returns errors array
        throw new Error(data?.errors?.[0]?.message || 'Failed');
      }

    } catch (error) {
      console.error('Formspree error:', error);
      setStatus('idle');
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-3xl p-4 sm:p-8 border border-gray-200 dark:border-zinc-800 bg-white dark:bg-black shadow-xl overflow-hidden">
        {/* Card Header */}
        <div className="flex items-center gap-2 mb-5 pb-4.5 border-b border-header-border">
          <div className="w-2.5 h-2.5 rounded-full bg-dot-green" />
          <p className="text-sm font-semibold text-gray-900 dark:text-zinc-100">
            <span className="text-text-link">{portfolioData.name.split(' ')[0].toLowerCase()}</span>
            <span className="text-text-muted">.</span>
            <span className="text-text-link">contact</span>
            <span className="text-text-muted">() — {portfolioData.contact.title.split(' — ')[1]}</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-[13px] font-semibold text-gray-900 dark:text-zinc-100 mb-1.75">
                {portfolioData.contact.nameLabel}<span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={portfolioData.contact.namePlaceholder}
                className={`w-full rounded-lg px-3.5 py-2.75 text-[15px] font-sans bg-input-bg border ${
                  errors.name ? 'border-error' : 'border-input-border'
                } text-input-text placeholder:text-input-placeholder outline-none focus:border-text-link focus:ring-2 focus:ring-text-link/10`}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[13px] font-semibold text-gray-900 dark:text-zinc-100 mb-1.75">
                {portfolioData.contact.emailLabel}<span className="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={portfolioData.contact.emailPlaceholder}
                className={`w-full rounded-lg px-3.5 py-2.75 text-[15px] font-sans bg-input-bg border ${
                  errors.email ? 'border-error' : 'border-input-border'
                } text-input-text placeholder:text-input-placeholder outline-none focus:border-text-link focus:ring-2 focus:ring-text-link/10`}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-[13px] font-semibold text-gray-900 dark:text-zinc-100 mb-1.75">
              {portfolioData.contact.subjectLabel}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder={portfolioData.contact.subjectPlaceholder}
              className="w-full rounded-lg px-3.5 py-2.75 text-[15px] font-sans bg-input-bg border border-input-border text-input-text placeholder:text-input-placeholder outline-none focus:border-text-link focus:ring-2 focus:ring-text-link/10"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-[13px] font-semibold text-gray-900 dark:text-zinc-100 mb-1.75">
              {portfolioData.contact.messageLabel}<span className="text-error">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder={portfolioData.contact.messagePlaceholder}
              className={`w-full rounded-lg px-3.5 py-2.75 text-[15px] font-sans bg-input-bg border ${
                errors.message ? 'border-error' : 'border-input-border'
              } text-input-text placeholder:text-input-placeholder outline-none focus:border-text-link focus:ring-2 focus:ring-text-link/10 resize-none`}
            />
          </div>

          {status !== 'sent' ? (
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 rounded-lg py-3.25 mt-1 text-sm font-semibold tracking-wide bg-btn-bg text-btn-text border border-btn-border hover:bg-btn-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              <span>{status === 'sending' ? portfolioData.contact.buttonSending : portfolioData.contact.buttonIdle}</span>
            </button>
          ) : (
            <div className="w-full flex items-center justify-center gap-2 mt-1 rounded-lg py-3.25 border border-header-border text-[13px] font-medium bg-green-500/10 dark:bg-green-500/20 text-green-700 dark:text-green-400">
              <span>{portfolioData.contact.successMessage}</span>
              <span className="text-text-muted text-[12px]">
                // {portfolioData.name} {portfolioData.contact.replyWaitTime}
              </span>
            </div>
          )}
        </form>

        <hr className="border-t border-header-border my-5.5" />

        {/* Dynamic Social Buttons sourced from portfolioData */}
        <div className="flex flex-row gap-2 flex-wrap">
          {portfolioData.socials
            .filter(social => ['github', 'linkedin', 'x'].includes(social.platform))
            .map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:text-gray-900 dark:hover:text-zinc-100 hover:border-gray-300 dark:hover:border-zinc-500 shadow-sm",
                  social.platform === 'instagram' ? "hover:shadow-lg hover:shadow-purple-500/20" :
                    social.platform === 'linkedin' ? "hover:shadow-lg hover:shadow-blue-600/20" : "hover:shadow-md"
                )}
                aria-label={`Visit ${social.platform} profile`}
              >
                {SOCIAL_ICONS[social.platform] || <Globe className="w-4 h-4" />}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
