import React, { useRef, useEffect, ReactNode } from 'react';

interface ClickSparkProps {
  children: ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  alpha: number;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let sparks: Spark[] = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleClick = (e: MouseEvent) => {
      const count = 8;
      for (let i = 0; i < count; i++) {
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / count + (Math.random() * 0.5 - 0.25),
          speed: Math.random() * 3 + 2,
          size: Math.random() * 2 + 1,
          alpha: 1,
        });
      }
    };

    window.addEventListener('click', handleClick);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparks.forEach((s, idx) => {
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.03;

        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        if (s.alpha <= 0) {
          sparks.splice(idx, 1);
        }
      });

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      {children}
    </div>
  );
};

export default ClickSpark;
