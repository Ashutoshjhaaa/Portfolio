import Link from "next/link";
import { SOCIAL_LINKS } from "@/app/constants/data";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLeetcode, SiPeerlist, SiHashnode } from "react-icons/si";

// =============================================
// SOCIAL BUTTONS DATA
// =============================================
const SOCIAL_BUTTONS = [
  {
    href: SOCIAL_LINKS.github,
    label: "GitHub",
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.twitter,
    label: "X (Twitter)",
    icon: <FaXTwitter className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.instagram,
    label: "Instagram",
    icon: <FaInstagram className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.peerlist,
    label: "Peerlist",
    icon: <SiPeerlist className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.blog,
    label: "Blog",
    icon: (
      <>
        <SiHashnode className="w-5 h-5" /> Blog
      </>
    ),
    className: "flex items-center gap-2 font-medium",
  },
  {
    href: SOCIAL_LINKS.resume,
    label: "Resume",
    icon: (
      <>
        <FileText className="w-5 h-5" /> Resume
      </>
    ),
    className: "flex items-center gap-2 font-medium",
  },
  {
    href: SOCIAL_LINKS.email,
    label: "Email",
    icon: (
      <>
        <Mail className="w-5 h-5" /> Email
      </>
    ),
    className: "flex items-center gap-2 font-medium",
  },
];

// =============================================
// MAIN COMPONENT
// =============================================
export default function AboutMe() {
  return (
    <section id="about" className="divide-y divide-border liquid-glass rounded-2xl overflow-hidden">
      <div className="p-4">
        <div className="space-y-4 text-[15px] sm:text-base text-muted-foreground text-justify leading-relaxed">
          <p>
            Hey there! <span className="animate-wave">👋</span> I&apos;m{" "}
            <span className="text-foreground font-medium">Ashutosh Jha</span>, a{" "}
            <span className="text-foreground font-medium">
              full-stack developer
            </span>{" "}
            passionate about building fast and engaging web applications.
            I enjoy turning complex challenges into simple, intuitive software.
          </p>

          <p>
            Recently at <span className="text-foreground font-medium">PW Skills</span>,
            I engineered learning dashboards using{" "}
            <span className="text-foreground font-medium">Next.js</span> and{" "}
            <span className="text-foreground font-medium">Tailwind CSS</span>,
            boosting user engagement by 15% and delivering a smoother user experience.
          </p>

          <p>
            I build with <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span>, and{" "}
            <span className="text-foreground font-medium">Node.js</span>. I&apos;ve
            built projects with real impact - like <span className="text-foreground font-medium">ShortIQ</span>,{" "}
            <span className="text-foreground font-medium">Tatva</span>, <span className="text-foreground font-medium">Foodie-Frenzy</span>, <span className="text-foreground font-medium">Fit-Track</span>, and <span className="text-foreground font-medium">Imagify</span>.
          </p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-3 flex-wrap">
          {SOCIAL_BUTTONS.filter((btn) => btn.href).map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 btn text-sm ${btn.className || ""}`}
              aria-label={btn.label}
            >
              {btn.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
