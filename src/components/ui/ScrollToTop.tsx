"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 flex items-center justify-center rounded-full",
        "bg-background/80 backdrop-blur-md shadow-lg border border-border/50 hover:bg-muted/50 transition-colors",
        !isVisible && "pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <div className="relative flex items-center justify-center w-12 h-12">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            className="stroke-muted/30 fill-none stroke-[6px]"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            className="stroke-foreground fill-none stroke-[6px]"
            style={{
              pathLength,
              strokeLinecap: "round",
            }}
          />
        </svg>
        <ArrowUp className="w-5 h-5 text-foreground relative z-10" />
      </div>
    </motion.button>
  );
};
