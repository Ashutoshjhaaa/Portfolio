"use client";

import { X } from "lucide-react";
import Image from "next/image";

// =============================================
// TYPES
// =============================================
interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface TechnicalDetail {
  title: string;
  description: string;
  code?: string;
}

interface Challenge {
  problem: string;
  solution: string;
}

interface ProjectMetrics {
  [key: string]: string;
}

interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  link?: string;
  github: string;
  images?: {
    hero?: string;
    gallery?: ProjectImage[];
  };
  features?: string[];
  technicalDetails?: TechnicalDetail[];
  challenges?: Challenge[];
  metrics?: ProjectMetrics;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

// =============================================
// MODAL COMPONENT
// =============================================
export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-background border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Hero Image */}
          {project.images?.hero && (
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={project.images.hero}
                alt={`${project.name} preview`}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm badge text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features */}
          {project.features && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Details */}
          {project.technicalDetails && (
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Technical Implementation
              </h3>
              <div className="space-y-4">
                {project.technicalDetails.map(
                  (detail: TechnicalDetail, index: number) => (
                    <div
                      key={index}
                      className="p-4 border border-border rounded-lg"
                    >
                      <h4 className="font-medium mb-2">{detail.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {detail.description}
                      </p>
                      {detail.code && (
                        <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                          <code>{detail.code}</code>
                        </pre>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Screenshots */}
          {project.images?.gallery && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.gallery.map(
                  (image: ProjectImage, index: number) => (
                    <div key={index} className="space-y-2">
                      <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {image.caption && (
                        <p className="text-xs text-muted-foreground text-center">
                          {image.caption}
                        </p>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
