interface BrowserFrameProps {
  url: string;
  children: React.ReactNode;
}

export function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <div style={{
      border: "1px solid var(--pd-border)",
      borderRadius: 14,
      overflow: "hidden",
      background: "var(--pd-card-bg)",
    }}>
      {/* top bar */}
      <div style={{
        background: "var(--pd-btn-ghost-hover)",
        borderBottom: "1px solid var(--pd-border)",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#FF5F57", "#FFBD2E", "#28C840"].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1,
          background: "var(--pd-bg)",
          border: "1px solid var(--pd-border)",
          borderRadius: 6,
          padding: "4px 14px",
          textAlign: "center",
          fontSize: 11,
          color: "var(--pd-text-muted)",
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          letterSpacing: "0.02em",
        }}>
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}
