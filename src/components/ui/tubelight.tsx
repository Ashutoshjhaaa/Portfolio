"use client";

export default function Tubelight() {
  const animStyle = {
    animation: "turnOn 2s ease-out forwards 0.5s",
    transform: "translateX(-50%) scaleX(0.25)",
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main light beam */}
      <div
        className="absolute -top-[150px] left-1/2 w-full max-w-2xl h-[200px] 
                   bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_60%)] 
                   dark:bg-[radial-gradient(circle,rgba(255,255,255,0.15),transparent_60%)] 
                   blur-[80px] rounded-full mix-blend-screen"
        style={animStyle}
      />

      {/* Core glow around tube */}
      <div
        className="absolute -top-[30px] left-1/2 w-full max-w-2xl h-[50px]
                   bg-white/20 dark:bg-white/40 blur-[30px] rounded-full"
        style={animStyle}
      />

      {/* Physical tube */}
      <div
        className="absolute top-0 left-1/2 w-full max-w-2xl h-[2px] 
                   bg-black dark:bg-white/80 rounded-b-full 
                   dark:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={animStyle}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes turnOn {
            from { transform: translateX(-50%) scaleX(0.25); }
            to { transform: translateX(-50%) scaleX(1); }
          }
        `,
        }}
      />
    </div>
  );
}
