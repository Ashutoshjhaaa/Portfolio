"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/components/constants/project";
import { BrowserFrame } from "./BrowserFrame";
import { UploadPlaceholder } from "./UploadPlaceholder";
import { ProjectDetails } from "@/types/project";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectDescriptionProps {
  projectSlug: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ProjectDescription({ projectSlug }: ProjectDescriptionProps) {
  const router = useRouter();
  
  // Try to find project by slug or fallback to the first one
  const targetProject = PROJECTS.find((p) => p.slug === projectSlug) || PROJECTS[0];
  
  const [project, setProject] = useState<ProjectDetails>(targetProject);
  const p = project; // alias for cleaner JSX
  
  const [mainShot, setMainShot] = useState<string | null>(p.coverImage || null);
  const [thumbs, setThumbs] = useState<(string | null)[]>([]);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [activeThumb, setActiveThumb] = useState<string | null>(p.coverImage || null);

  const mainInputRef = useRef<HTMLInputElement>(null);
  const thumbInputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  // Update project state if the slug changes
  useEffect(() => {
    const found = PROJECTS.find((item) => item.slug === projectSlug);
    if (found) {
      setProject(found);
      setMainShot(found.coverImage || null);
      setThumbs(found.screenshots || []);
      setActiveThumb(found.coverImage || null);
    }
  }, [projectSlug, project.slug]);

  useEffect(() => {
    if (p.screenshots) {
      setThumbs(p.screenshots);
    }
  }, [p.screenshots]);

  function readFile(file: File, cb: (result: string) => void) {
    const r = new FileReader();
    r.onload = (e) => cb(e.target?.result as string);
    r.readAsDataURL(file);
  }

  function handleMainUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) readFile(f, setMainShot);
  }

  function handleThumbUpload(e: React.ChangeEvent<HTMLInputElement>, idx: number) {
    const f = e.target.files?.[0];
    if (!f) return;
    readFile(f, (src) => {
      setThumbs((prev) => { const n = [...prev]; n[idx] = src; return n; });
    });
  }

  function setMainFromThumb(src: string) {
    setMainShot(src);
    setActiveThumb(src);
  }

  const onBack = () => router.push("/#projects");

  /* ── STYLES ─────────────────────────────────────────────── */
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

    .pd-root * { box-sizing: border-box; }
    .pd-root { scroll-behavior: smooth; }
    .pd-root ::selection { background: rgba(100,220,120,0.2); }

    /* nav buttons */
    .pd-btn-back {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 8px 12px; border-radius: 8px; font-size: 13px;
      cursor: pointer; transition: all 0.2s; text-decoration: none;
      background: transparent; border: none;
      color: var(--text-muted); font-family: var(--font-mono), monospace;
      white-space: nowrap; font-weight: 500;
    }
    .pd-btn-back:hover { color: var(--foreground); background: var(--input-bg); }

    .pd-btn-ghost {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 8px 18px; border-radius: 12px; font-size: 13px;
      cursor: pointer; transition: all 0.2s; text-decoration: none;
      background: #1a1a1a; border: 1px solid #1a1a1a;
      color: white; font-family: var(--font-mono), monospace;
      white-space: nowrap; font-weight: 500;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    .dark .pd-btn-ghost {
      background: white; border-color: white; color: #1a1a1a;
    }
    .pd-btn-ghost:hover { opacity: 0.9; transform: translateY(-1px); }

    .pd-btn-live {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 8px 18px; border-radius: 12px; font-size: 13px;
      cursor: pointer; transition: all 0.2s; text-decoration: none;
      background: #1a1a1a; border: 1px solid #1a1a1a;
      color: white; font-family: var(--font-mono), monospace;
      white-space: nowrap; font-weight: 500;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    .dark .pd-btn-live {
      background: white; border-color: white; color: #1a1a1a;
    }
    .pd-btn-live:hover { opacity: 0.9; transform: translateY(-1px); }

    /* project tab pills */
    .pd-tab {
      padding: 7px 15px; border-radius: 7px; font-size: 12px;
      cursor: pointer; transition: all 0.18s; color: var(--pd-tab-inactive);
      background: transparent; border: 1px solid transparent; outline: none;
      font-family: 'JetBrains Mono', monospace; white-space: nowrap;
    }
    .pd-tab:hover { color: var(--pd-text-muted); }
    .pd-tab.active {
      background: var(--pd-tab-active); color: var(--pd-text);
      border: 1px solid var(--pd-border);
    }

    /* section label */
    .pd-section-label {
      display: flex; align-items: center; gap: 12px;
      font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
      color: var(--pd-section-label); font-family: 'JetBrains Mono', monospace;
      margin: 2.8rem 0 1.4rem;
    }
    .dark .pd-section-label { color: #ffffff; }

    .pd-section-label::after {
      content: ''; flex: 1; height: 1px;
      background: var(--pd-info-row-border);
    }

    /* overview card styling */
    .pd-sidebar-card {
      background: var(--pd-card-bg); border: 1px solid var(--pd-border);
      border-radius: 12px; padding: 18px 20px; margin-bottom: 12px;
    }
    .dark .pd-sidebar-card p, 
    .dark .pd-sidebar-card span:not(.text-text-link):not(.text-text-muted), 
    .dark .pd-sidebar-card div:not(.pd-feature-dot) {
      color: #ffffff !important;
    }
    .dark .pd-feature span {
      color: #ffffff !important;
    }
    .dark .pd-hero-title, .dark .pd-hero-title + p, .dark .pd-hero-title + p + p {
      color: #ffffff !important;
    }
    .dark .pd-info-row span:last-child {
      color: #ffffff !important;
    }
    .dark .pd-tech-pill {
      color: #ffffff !important;
    }
    .dark .pd-link-row span {
      color: #ffffff !important;
    }
    .pd-feature {
      display: flex; align-items: flex-start; gap: 12px;
      padding: 13px 0;
      border-bottom: 1px solid var(--pd-info-row-border);
      font-size: 14px; color: var(--pd-text-muted); line-height: 1.6;
    }
    .pd-feature:last-child { border-bottom: none; }
    .pd-feature-dot {
      width: 5px; height: 5px; border-radius: 50%;
      background: #64dc78; flex-shrink: 0; margin-top: 8px;
    }

    /* sidebar */
    .pd-sidebar-card {
      background: var(--pd-card-bg); border: 1px solid var(--pd-border);
      border-radius: 12px; padding: 18px 20px; margin-bottom: 12px;
      box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
    }
    .dark .pd-sidebar-card {
      box-shadow: 0 10px 40px -15px rgba(0,0,0,0.4);
    }
    .pd-sidebar-title {
      font-size: 10px; letter-spacing: 0.13em; text-transform: uppercase;
      color: var(--pd-section-label); font-family: 'JetBrains Mono', monospace; margin-bottom: 14px;
    }
    .pd-info-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 8px 0; border-bottom: 1px solid var(--pd-info-row-border);
      font-size: 13px;
    }
    .pd-info-row:last-child { border-bottom: none; }

    /* tech pills */
    .pd-tech-pill {
      display: inline-flex; align-items: center; gap: 7px;
      background: var(--pd-card-bg); border: 1px solid var(--pd-border);
      color: var(--pd-text-muted); font-size: 12px; padding: 6px 12px; border-radius: 7px;
      transition: all 0.15s; cursor: default;
    }
    .pd-tech-pill:hover { border-color: rgba(100,220,120,0.3); color: #64dc78; }

    /* thumbnail */
    .pd-thumb {
      border-radius: 10px; overflow: hidden;
      border: 1px solid var(--pd-border);
      aspect-ratio: 16/9; background: var(--pd-card-bg);
      cursor: pointer; transition: border-color 0.2s, transform 0.2s;
      display: flex; align-items: center; justify-content: center;
      flex-direction: column; gap: 6px;
      font-size: 11px; color: var(--pd-section-label);
      font-family: 'JetBrains Mono', monospace;
    }
    .pd-thumb:hover { border-color: rgba(100,220,120,0.3); transform: translateY(-3px); }
    .pd-thumb.active { border-color: rgba(100,220,120,0.45); }

    /* link rows in sidebar */
    .pd-link-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 11px 12px; border-radius: 8px;
      border: 1px solid var(--pd-border); text-decoration: none;
      font-size: 12px; color: var(--pd-btn-ghost-text); margin-bottom: 8px;
      transition: all 0.18s; background: transparent;
      font-family: 'JetBrains Mono', monospace;
    }
    .pd-link-row:last-child { margin-bottom: 0; }
    .pd-link-row:hover { border-color: rgba(100,220,120,0.3); color: #64dc78; background: rgba(100,220,120,0.04); }

    /* lightbox */
    .pd-lightbox {
      position: fixed; inset: 0; z-index: 999;
      background: rgba(0,0,0,0.94);
      display: flex; align-items: center; justify-content: center;
      padding: 2rem; cursor: zoom-out;
    }
    .pd-lightbox img {
      max-width: 100%; max-height: 90vh;
      border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);
      object-fit: contain;
    }

    /* live dot animation */
    @keyframes pd-blink { 0%,100%{opacity:1} 50%{opacity:0.35} }

    /* responsive */
    @media (max-width: 720px) {
      .pd-content-grid { grid-template-columns: 1fr !important; }
      .pd-thumb-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .pd-hero-title { font-size: 2rem !important; }
      .pd-tab-bar { overflow-x: auto; }
    }

    /* custom scrollbar removed from component */
  `;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pd-root"
      style={{ 
        background: "transparent", 
        minHeight: "100vh", 
        color: "var(--pd-text)",
      }}
    >
      <style>{css}</style>

      {/* ── LIGHTBOX ───────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pd-lightbox"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Screenshot"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── STICKY NAV ─────────────────────────────────────── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "var(--pd-nav-bg)", backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--pd-info-row-border)",
        padding: "0 clamp(1rem,4vw,2.5rem)",
        height: 58,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button className="pd-btn-back" onClick={onBack} style={{ cursor: "pointer" }}>
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to portfolio
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pd-btn-ghost" href={p.githubUrl} target="_blank" rel="noreferrer">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            github
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pd-btn-live" href={p.liveUrl} target="_blank" rel="noreferrer">
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "#64dc78",
              display: "inline-block", animation: "pd-blink 1.8s infinite",
            }} />
            live_demo
          </motion.a>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section style={{ padding: "3.5rem clamp(1rem,4vw,2.5rem) 1.5rem", maxWidth: 1000, margin: "0 auto" }}>
        <motion.div variants={itemVariants}>
          {/* title */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.6rem", flexWrap: "wrap" }}>
            {p.logo && (
              <img
                src={p.logo}
                alt={p.title}
                style={{
                  width: "clamp(2.5rem, 6vw, 3.5rem)",
                  height: "clamp(2.5rem, 6vw, 3.5rem)",
                  borderRadius: "12px",
                  objectFit: "contain",
                  padding: "6px",
                  background: "var(--pd-card-bg)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  border: "1px solid var(--pd-border)"
                }}
              />
            )}
            <h1
              className="pd-hero-title"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "var(--pd-text)",
                fontFamily: "'SF Pro Display', -apple-system, sans-serif",
                margin: 0
              }}
            >
              {p.title}
            </h1>
          </div>
          <p style={{
            fontSize: "clamp(1rem,2vw,1.2rem)",
            color: "var(--pd-text-muted)",
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: "1.2rem",
            letterSpacing: "0.01em",
          }}>
            // {p.subtitle}
          </p>
          <p style={{ fontSize: 15, color: "var(--pd-text-muted)", maxWidth: 660, lineHeight: 1.8, marginBottom: "2.2rem" }}>
            {p.description}
          </p>
        </motion.div>

      </section>

      {/* ── SCREENSHOTS ────────────────────────────────────── */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(1rem,4vw,2.5rem) 2rem" }}>
        <motion.div variants={itemVariants}>

          {/* hidden file inputs */}
          <input ref={mainInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleMainUpload} />
          {thumbInputRefs.map((ref, i) => (
            <input key={i} ref={ref} type="file" accept="image/*" style={{ display: "none" }}
              onChange={(e) => handleThumbUpload(e, i)} />
          ))}

          {/* main shot */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            style={{
              marginBottom: 10,
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid var(--pd-border)",
              background: "var(--pd-card-bg)"
            }}
          >
            <AnimatePresence mode="wait">
              {mainShot ? (
                <motion.img
                  key={mainShot}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={mainShot}
                  alt="Main screenshot"
                  onClick={() => setLightbox(mainShot)}
                  style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover", cursor: "zoom-in" }}
                />
              ) : (
                <UploadPlaceholder
                  key="placeholder"
                  label="main_screenshot.png"
                  onClick={() => mainInputRef.current?.click()}
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* thumbnails */}
          <div
            className="pd-thumb-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: "1rem" }}
          >
            {thumbs.map((src, i) => (
              <motion.div
                whileHover={{ y: -3 }}
                key={i}
                className={`pd-thumb ${activeThumb === src ? "active" : ""}`}
                onClick={() => {
                  if (src) {
                    setMainFromThumb(src);
                  } else {
                    thumbInputRefs[i].current?.click();
                  }
                }}
              >
                {src ? (
                  <img
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMainFromThumb(src);
                    }}
                  />
                ) : (
                  <>
                    <div style={{ fontSize: 20, color: "var(--pd-section-label)" }}>+</div>
                    <span>{`screenshot_${i + 1}.png`}</span>
                  </>
                )}
              </motion.div>
            ))}
            {thumbs.length < 3 && [0,1,2].slice(thumbs.length).map((i) => (
              <motion.div
                whileHover={{ y: -3 }}
                key={`empty-${i}`}
                className="pd-thumb"
                onClick={() => thumbInputRefs[i].current?.click()}
              >
                <div style={{ fontSize: 20, color: "var(--pd-section-label)" }}>+</div>
                <span>{`screenshot_${i + 1}.png`}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CONTENT + SIDEBAR ──────────────────────────────── */}
      <motion.div
        variants={itemVariants}
        className="pd-content-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 290px",
          gap: "3rem",
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0 clamp(1rem,4vw,2.5rem) 5rem",
          alignItems: "stretch", // Changed from "start" to "stretch" to make columns same height
          minHeight: "100%", // Added for full height
        }}
      >
        {/* ── MAIN CONTENT ── */}
        <main style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {/* Overview Section Card */}
          <section className="pd-sidebar-card" style={{ margin: 0, padding: "24px 28px" }}>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-header-border">
              <div className="w-2.5 h-2.5 rounded-full bg-dot-green" />
              <p className="text-[13px] font-semibold tracking-tight">
                <span className="text-text-link">project</span>
                <span className="text-text-muted">.</span>
                <span className="text-text-link">overview</span>
                <span className="text-text-muted">()</span>
              </p>
            </div>
            {p.overview.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: "var(--pd-text-muted)", lineHeight: 1.8, marginBottom: i === p.overview.split("\n\n").length - 1 ? 0 : "1.2rem" }}>
                {para}
              </p>
            ))}
          </section>

          {/* Features Section Card */}
          <section className="pd-sidebar-card" style={{ margin: 0, padding: "24px 28px" }}>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-header-border">
              <div className="w-2.5 h-2.5 rounded-full bg-dot-green" />
              <p className="text-[13px] font-semibold tracking-tight">
                <span className="text-text-link">project</span>
                <span className="text-text-muted">.</span>
                <span className="text-text-link">features</span>
                <span className="text-text-muted">[]</span>
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {p.features.map((f, i) => (
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  key={i}
                  className="pd-feature"
                  style={{ borderBottom: i === p.features.length - 1 ? "none" : "1px solid var(--pd-info-row-border)" }}
                >
                  <div className="pd-feature-dot" />
                  <span>{f}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Technical Challenge Card */}
          <section className="pd-sidebar-card" style={{ margin: 0, padding: "24px 28px" }}>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-header-border">
              <div className="w-2.5 h-2.5 rounded-full bg-dot-green" />
              <p className="text-[13px] font-semibold tracking-tight">
                <span className="text-text-link">technical</span>
                <span className="text-text-muted">.</span>
                <span className="text-text-link">challenge</span>
                <span className="text-text-muted">()</span>
              </p>
            </div>
            <p style={{ fontSize: 15, color: "var(--pd-text-muted)", lineHeight: 1.8, margin: 0 }}>{p.challenge}</p>
          </section>

          {/* Learnings Card */}
          <section className="pd-sidebar-card" style={{ margin: 0, padding: "24px 28px" }}>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-header-border">
              <div className="w-2.5 h-2.5 rounded-full bg-dot-green" />
              <p className="text-[13px] font-semibold tracking-tight">
                <span className="text-text-link">what</span>
                <span className="text-text-muted">.</span>
                <span className="text-text-link">i_learned</span>
                <span className="text-text-muted">()</span>
              </p>
            </div>
            <p style={{ fontSize: 15, color: "var(--pd-text-muted)", lineHeight: 1.8, margin: 0 }}>{p.learned}</p>
          </section>
        </main>

        {/* ── SIDEBAR ── */}
        <aside style={{ position: "sticky", top: 80, height: "fit-content" }}>
          {/* Project info */}
          <motion.div whileHover={{ y: -5 }} className="pd-sidebar-card">
            <div className="pd-sidebar-title">project.json</div>
            {[
              ["category", p.category],
              ["duration", p.duration],
              ["database", p.db],
              ["auth", p.auth],
              ["deployed", p.deploy],
              ["year", p.year],
            ].map(([k, v]) => (
              <div key={k} className="pd-info-row">
                <span style={{ color: "var(--pd-section-label)", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>{k}</span>
                <span style={{ color: "var(--pd-text)", fontSize: 13 }}>{v}</span>
              </div>
            ))}
          </motion.div>

          {/* Tech stack icons */}
          <motion.div whileHover={{ y: -5 }} className="pd-sidebar-card">
            <div className="pd-sidebar-title">tech_stack[]</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {p.tech.map((t) => (
                <motion.div whileHover={{ scale: 1.05 }} key={t} className="pd-tech-pill" style={{ fontSize: 11, padding: "5px 10px" }}>
                  {p.techIcons[t] && (
                    <img
                      src={p.techIcons[t]}
                      alt={t}
                      style={{ width: 13, height: 13, objectFit: "contain", filter: "grayscale(0.3) brightness(1.3)" }}
                      onError={(e: any) => { e.target.style.display = "none"; }}
                    />
                  )}
                  {t}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div whileHover={{ y: -5 }} className="pd-sidebar-card">
            <div className="pd-sidebar-title">links()</div>
            <motion.a whileHover={{ x: 5 }} className="pd-link-row" href={p.liveUrl} target="_blank" rel="noreferrer">
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 13 }}>🌐</span>
                live_demo()
              </span>
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </motion.a>
            <motion.a whileHover={{ x: 5 }} className="pd-link-row" href={p.githubUrl} target="_blank" rel="noreferrer">
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7 }}>
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                source_code()
              </span>
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Other projects */}
          <motion.div whileHover={{ y: -5 }} className="pd-sidebar-card">
            <div className="pd-sidebar-title">other_projects[]</div>
            {PROJECTS.filter((pr) => pr.slug !== p.slug).map((pr) => (
              <motion.div
                key={pr.slug}
                onClick={() => setProject(pr)}
                whileHover={{ x: 6 }}
                style={{
                  padding: "10px 0",
                  borderBottom: "1px solid var(--pd-info-row-border)",
                  cursor: "pointer",
                  transition: "color 0.18s",
                }}
              >
                <div style={{ fontSize: 13, color: "var(--pd-text)", marginBottom: 2 }}>{pr.title}</div>
                <div style={{
                  fontSize: 11, color: "var(--pd-text-muted)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  {pr.category}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </aside>
      </motion.div>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid var(--pd-info-row-border)",
        padding: "2rem clamp(1rem,4vw,2.5rem)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        maxWidth: 1000,
        margin: "0 auto",
      }}>
        <span style={{ fontSize: 12, color: "var(--pd-section-label)", fontFamily: "'JetBrains Mono', monospace" }}>
          © 2026 Ashutosh Jha
        </span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/contact")}
          style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: 12, color: "var(--pd-btn-ghost-text)", fontFamily: "'JetBrains Mono', monospace",
            textDecoration: "none", transition: "color 0.18s",
          }}
          onMouseOver={(e: any) => e.target.style.color = "#64dc78"}
          onMouseOut={(e: any) => e.target.style.color = "var(--pd-btn-ghost-text)"}
        >
          ashutosh.contact() →
        </motion.button>
      </footer>
    </motion.div>
  );
}
