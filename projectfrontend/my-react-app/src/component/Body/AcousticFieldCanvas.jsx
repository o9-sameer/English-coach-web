import { useEffect, useRef } from 'react';

/**
 * AcousticFieldCanvas
 * Renders an abstract, organic "Voice & Resonance" fluid light field.
 * Harmonically layered sine/cosine waveforms represent human speech,
 * vocal cadence, and breath, reacting softly to mouse movement.
 */
export default function AcousticFieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let animationFrameId;
    let time = 0;
    let mouse = { x: width * 0.65, y: height * 0.45, targetX: width * 0.65, targetY: height * 0.45 };
    let isVisible = true;

    // Handle responsive resize with capped pixel ratio
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle tactile interaction
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Pause rendering when canvas is out of viewport to save battery/CPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Harmonic wave parameters (frequency, amplitude, phase, opacity)
    const waves = [
      { color: 'rgba(255, 75, 38, 0.22)', speed: 0.0035, freq: 0.0018, amp: 85, offset: 0, yRatio: 0.48 },
      { color: 'rgba(255, 110, 50, 0.14)', speed: 0.0048, freq: 0.0024, amp: 65, offset: 1.8, yRatio: 0.52 },
      { color: 'rgba(214, 65, 31, 0.18)', speed: 0.0028, freq: 0.0014, amp: 110, offset: 3.4, yRatio: 0.44 },
      { color: 'rgba(163, 159, 150, 0.09)', speed: 0.0022, freq: 0.0012, amp: 50, offset: 4.6, yRatio: 0.58 },
    ];

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      if (!prefersReducedMotion) {
        time += 1;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Deep charcoal/obsidian atmospheric base
      const bgGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, 'rgba(24, 18, 16, 0.7)');
      bgGrad.addColorStop(0.45, 'rgba(12, 10, 10, 0.9)');
      bgGrad.addColorStop(1, 'rgba(7, 7, 7, 1)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Ambient resonant vocal glow behind the waves
      const glowGrad = ctx.createRadialGradient(
        width * 0.65 + Math.sin(time * 0.004) * 60,
        height * 0.45 + Math.cos(time * 0.003) * 40,
        10,
        width * 0.65,
        height * 0.45,
        width * 0.45
      );
      glowGrad.addColorStop(0, 'rgba(255, 75, 38, 0.16)');
      glowGrad.addColorStop(0.5, 'rgba(214, 65, 31, 0.05)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Render organic vocal frequency curves
      waves.forEach((w) => {
        ctx.beginPath();
        ctx.fillStyle = w.color;

        const baseY = height * w.yRatio;
        const mouseInfluenceY = (mouse.y - height * 0.5) * 0.08;
        const mouseInfluenceX = (mouse.x - width * 0.5) * 0.0002;

        ctx.moveTo(0, height);
        ctx.lineTo(0, baseY);

        // Draw smooth sinusoidal harmonics across width
        const step = 24;
        for (let x = 0; x <= width + step; x += step) {
          const wave1 = Math.sin(x * (w.freq + mouseInfluenceX) + time * w.speed + w.offset) * w.amp;
          const wave2 = Math.cos(x * w.freq * 1.6 - time * w.speed * 0.7 + w.offset) * (w.amp * 0.45);
          const wave3 = Math.sin(x * 0.0006 + time * 0.001) * 20;

          const y = baseY + wave1 + wave2 + wave3 + mouseInfluenceY;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
      });

      // 4. Subtle luminous crest accent line
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 120, 70, 0.28)';
      ctx.lineWidth = 1.5;
      const crestY = height * 0.48;
      ctx.moveTo(0, crestY);
      for (let x = 0; x <= width + 20; x += 20) {
        const y =
          crestY +
          Math.sin(x * 0.002 + time * 0.004) * 75 +
          Math.cos(x * 0.0035 - time * 0.002) * 25 +
          (mouse.y - height * 0.5) * 0.06;
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-acoustic-canvas" aria-hidden="true" />;
}
