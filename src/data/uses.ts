export interface UsesItem {
  label: string;
  name: string;
  link?: string;
}

export interface UsesCategory {
  category: string;
  items: UsesItem[];
}

export const usesData: UsesCategory[] = [
  {
    category: "Software & Tools",
    items: [
      { label: "Editor", name: "VS Code / Antigravity IDE", link: "https://code.visualstudio.com" },
      { label: "Theme", name: "Vesper Dark / Custom Minimal", link: "#" },
      { label: "Terminal", name: "Ghostty / Windows Terminal", link: "#" },
      { label: "Browser", name: "Arc Browser / Brave", link: "https://arc.net" },
      { label: "Design", name: "Figma", link: "https://figma.com" },
      { label: "API Client", name: "Postman / Bruno", link: "https://usebruno.com" },
      { label: "Database Client", name: "DBeaver / TablePlus", link: "https://dbeaver.io" },
      { label: "Notes", name: "Obsidian / Notion", link: "https://obsidian.md" },
    ]
  },
  {
    category: "Hardware & Desk Setup",
    items: [
      { label: "Machine", name: "MacBook Pro M3 Max / Custom Desktop", link: "#" },
      { label: "Display", name: "LG UltraFine 27\" 4K", link: "#" },
      { label: "Keyboard", name: "Keychron Q1 Pro (Switches: Gateron Oil Kings)", link: "#" },
      { label: "Mouse", name: "Logitech MX Master 3S", link: "#" },
      { label: "Audio", name: "Sony WH-1000XM5", link: "#" },
      { label: "Microphone", name: "Shure SM7B + Focusrite Scarlett", link: "#" },
    ]
  }
];
