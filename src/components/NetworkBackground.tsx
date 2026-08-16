import { useEffect, useRef } from 'react';

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = window.innerWidth < 768 ? 40 : 80;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: (Math.random() * 0.6 + 0.4) * canvas.height, // Spawn in bottom 60%
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 0.5
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.width;
      const height = canvas.height;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < height * 0.3 || p.y > height) p.vy *= -1;

        // Determine color side
        const isLeft = p.x < width / 2;
        const colorBase = isLeft ? '0, 120, 255' : '160, 40, 255'; // Blue left, Purple right
        
        // Calculate fade distances so they don't cover the portrait in the center
        const distFromCenter = Math.abs(p.x - width / 2);
        // Start fading out when within 25% of the center
        const centerFade = Math.max(0, Math.min(1, (distFromCenter - width * 0.1) / (width * 0.15)));
        
        // Fade out as it goes higher
        const topFade = Math.max(0, Math.min(1, (p.y - height * 0.3) / (height * 0.2)));
        
        const alpha = Math.min(0.7, centerFade * topFade);

        if (alpha > 0) {
          // Draw dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${colorBase}, ${alpha})`;
          ctx.fill();
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          
          // Only connect if on the same side to prevent blue/purple lines crossing the middle
          if ((p.x < width/2 && p2.x >= width/2) || (p.x >= width/2 && p2.x < width/2)) {
            continue;
          }

          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * alpha * 0.6;
            if (lineAlpha > 0.02) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${colorBase}, ${lineAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-10 pointer-events-none opacity-80"
    />
  );
}
