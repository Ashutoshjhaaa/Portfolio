'use client';

import React from 'react';

// ─── Shared wrapper: fixed, full-screen, non-interactive, behind all content ──
const wrapperStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  pointerEvents: 'none',
};

// ─── Triangle SVG tile ────────────────────────────────────────────────────────
// Two overlapping triangles (Star-of-David) at 12 × 12 px.
// Points match the CSS snippet exactly:
//   up-triangle  → 6,1  11,10  1,10
//   down-triangle → 6,11 11,2   1,2
const triangleSVG = `<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12'>
  <polygon points='6,1 11,10 1,10'
    fill='none' stroke='rgba(128,128,128,0.4)' stroke-width='0.6'/>
  <polygon points='6,11 11,2 1,2'
    fill='none' stroke='rgba(128,128,128,0.4)' stroke-width='0.6'/>
</svg>`.trim();

const triangleDataUri = `url("data:image/svg+xml,${encodeURIComponent(triangleSVG)}")`;

// ─── Grid layer ───────────────────────────────────────────────────────────────
// mask: ellipse at top-left corner, fully opaque 10%, fades to transparent 70%.
const gridStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundImage: triangleDataUri,
  backgroundRepeat: 'repeat',
  backgroundSize: '12px 12px',
  maskImage: 'radial-gradient(ellipse at 0% 0%, black 10%, transparent 70%)',
  WebkitMaskImage: 'radial-gradient(ellipse at 0% 0%, black 10%, transparent 70%)',
};

// ─── Corner glow base ─────────────────────────────────────────────────────────
// 800 × 800 px circle, blur 80 px, glow opacity rgba(59,130,246,0.05).
const glowBase: React.CSSProperties = {
  position: 'fixed',
  width: 800,
  height: 800,
  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.05), transparent 70%)',
  filter: 'blur(80px)',
  borderRadius: '50%',
  zIndex: -1,
  pointerEvents: 'none',
};

/**
 * Primary portfolio background.
 * Triangle SVG grid (12 px tile) + four fixed corner glows.
 * Mirrors the .grid-background + .corner-glow CSS pattern exactly.
 */
export const Background: React.FC = () => (
  <div style={wrapperStyle}>
    {/* Triangle SVG grid — fades from top-left via ellipse mask */}
    <div style={gridStyle} />

    {/* Corner glows — four corners, each offset –200 px */}
    <div style={{ ...glowBase, top: -200, left: -200 }} />   {/* top-left    */}
    <div style={{ ...glowBase, top: -200, right: -200 }} />  {/* top-right   */}
    <div style={{ ...glowBase, bottom: -200, left: -200 }} />{/* bottom-left */}
    <div style={{ ...glowBase, bottom: -200, right: -200 }} />{/* bottom-right*/}
  </div>
);

// ─── Line-grid variant (kept for reference) ───────────────────────────────────
// CSS variables --grid-color and --glow-color must be defined in globals.css:
//   :root  { --grid-color: rgba(0,0,0,0.04);     --glow-color: rgba(59,130,246,0.02); }
//   .dark  { --grid-color: rgba(255,255,255,0.08); --glow-color: rgba(59,130,246,0.03); }

const lineGridStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundImage: `
    linear-gradient(to right,  var(--grid-color) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
  `,
  backgroundSize: '32px 32px',
  maskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 70%)',
  WebkitMaskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 70%)',
};

const cssVarGlowBase: React.CSSProperties = {
  ...glowBase,
  background: 'radial-gradient(circle at center, var(--glow-color), transparent 70%)',
};

/** Alternative: 32 px CSS line-grid with theme-aware CSS variable glows. */
export const BackgroundLineGrid: React.FC = () => (
  <div style={wrapperStyle}>
    <div style={lineGridStyle} />
    <div style={{ ...cssVarGlowBase, top: -200, left: -200 }} />
    <div style={{ ...cssVarGlowBase, top: -200, right: -200 }} />
    <div style={{ ...cssVarGlowBase, bottom: -200, left: -200 }} />
    <div style={{ ...cssVarGlowBase, bottom: -200, right: -200 }} />
  </div>
);
