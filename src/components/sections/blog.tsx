"use client";

import { USER_NAMES } from "@/app/constants/data";
import { ArrowUpRight } from "lucide-react";
import { SiHashnode } from "react-icons/si";
import Link from "next/link";
import { useState } from "react";
import type { BlogData } from "@/lib/services";
import CollapsibleGrid from "@/components/ui/collapsible-grid";
import { InterviewCard } from "@/components/ui/interview-card";

const HASHNODE_URL = `https://${USER_NAMES.hashnodeUsername}.hashnode.dev`;

export default function BlogSection({ blogs }: { blogs: BlogData[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="blog" className="liquid-glass rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-2xl font-semibold flex items-center">
          latest blogs.
        </h2>
        <Link
          href={HASHNODE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-mono font-medium text-muted-foreground transition-colors shrink-0"
        >
          <SiHashnode
            className="inline-block align-middle mr-1 text-blue-500"
            size={16}
          />
          {USER_NAMES.hashnodeUsername}
          <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {blogs.length === 0 ? (
          <div className="text-center text-muted-foreground py-8 text-sm">
            No blogs found.
          </div>
        ) : (
          blogs.map((blog, index) => (
            <CollapsibleGrid
              key={blog.slug}
              isExpanded={activeIndex === index}
              onToggle={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              header={
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-muted border border-border">
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-base text-foreground truncate">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="w-1 h-1 rounded-full bg-green-500" />
                      <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                        {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                          month: "short",
                          year: "numeric",
                        })} • {blog.readTimeInMinutes} min read
                      </span>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                  {blog.brief}
                </p>
                <div className="flex justify-end pt-2">
                  <a
                    href={`${HASHNODE_URL}/${blog.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background text-xs font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read Full Article
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </CollapsibleGrid>
          ))
        )}
      </div>

      <div className="p-4 border-t border-border">
        <InterviewCard />
      </div>
    </section>
  );
}
