"use client";

import { ExternalLink, Github, MousePointerClick } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/app/constants/data";
import { useState } from "react";
import { generateSlug } from "@/lib/utils";
import ImageMarquee from "@/components/ui/image-marquee";
import CollapsibleGrid from "@/components/ui/collapsible-grid";
import ImageTooltip from "@/components/ui/image-tooltip";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleProjectClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Mark that user navigated from main page
    sessionStorage.setItem("navigatedFromMainPage", "true");
  };

  return (
    <section id="projects" className="liquid-glass rounded-2xl overflow-hidden">
      <div className="flex items-center p-4 border-b border-border">
        <h2 className="text-2xl font-semibold flex items-center">
          featured projects.
        </h2>
      </div>

      <div className="border-b border-border overflow-hidden">
        <ImageMarquee />
      </div>

      <div className="relative divide-y divide-border">
        {PROJECTS.map((project, index) => (
          <CollapsibleGrid
            key={project.name}
            isExpanded={activeIndex === index}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            header={
              <div className="flex items-center gap-3">
                <div className="flex-1 min-w-0 space-y-0.5">
                  <h3 className="font-medium text-base">
                    <Link
                      href={`/projects/${generateSlug(project.name)}`}
                      className="link"
                      onClick={handleProjectClick}
                    >
                      <ImageTooltip imageSrc={project.images.hero} imageAlt={project.name} className="inline-flex items-center">
                        {project.name}
                        <MousePointerClick className="w-5 h-5 ml-1 text-muted-foreground" />
                      </ImageTooltip>
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>

                <div
                  className="flex gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn py-2 px-2.5 border border-border/40 hover:bg-hover-bg hover:border-border-hover/60 transition-all hover:scale-[1.05] active:scale-[0.95]"
                      aria-label={`Visit ${project.name} live website`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn py-2 px-2.5 border border-border/40 hover:bg-hover-bg hover:border-border-hover/60 transition-all hover:scale-[1.05] active:scale-[0.95]"
                    aria-label={`View ${project.name} source code on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            }
          >
            {/* Collapsible Details */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                {project.overview}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs badge text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </CollapsibleGrid>
        ))}
      </div>
    </section>
  );
}
