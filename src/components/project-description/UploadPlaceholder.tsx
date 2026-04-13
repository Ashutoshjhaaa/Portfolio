"use client";

import { useState } from "react";

interface UploadPlaceholderProps {
  label?: string;
  hint?: string;
  onClick?: () => void;
}

export function UploadPlaceholder({ label = "click_to_upload.png", hint = "1280 × 720px recommended", onClick }: UploadPlaceholderProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        aspectRatio: "16/9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        background: hover ? "var(--pd-btn-ghost-hover)" : "var(--pd-card-bg)",
        cursor: "pointer",
        transition: "background 0.2s",
        userSelect: "none",
      }}
    >
      <div style={{
        width: 44, height: 44,
        border: `1.5px dashed ${hover ? "rgba(100,220,120,0.5)" : "var(--pd-border)"}`,
        borderRadius: 10,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 20, color: hover ? "#64dc78" : "var(--pd-section-label)",
        transition: "all 0.2s",
      }}>
        +
      </div>
      <span style={{
        fontSize: 12,
        color: hover ? "#64dc78" : "var(--pd-text-muted)",
        fontFamily: "'JetBrains Mono', monospace",
        transition: "color 0.2s",
      }}>
        {label}
      </span>
      <span style={{ fontSize: 11, color: "var(--pd-section-label)", fontFamily: "monospace" }}>{hint}</span>
    </div>
  );
}
