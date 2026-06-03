"use client";

import { useState, useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  useEffect(() => setShow(true), []);

  return (
    <>
      <style>{`
        @keyframes fade-scale-in {
          from { opacity: 0; transform: scale(0.98) translateY(4px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-scale-in {
          animation: fade-scale-in 0.3s ease-out forwards;
        }
      `}</style>
      <div className={show ? "animate-fade-scale-in" : "opacity-0"}>
        {children}
      </div>
    </>
  );
}
