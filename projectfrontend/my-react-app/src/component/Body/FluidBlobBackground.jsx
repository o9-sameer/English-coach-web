import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FluidBlobBackground.css';

gsap.registerPlugin(ScrollTrigger);

export default function FluidBlobBackground() {
  const stageRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // --- 1. Subtle, Damped Mouse Parallax (Pure GPU transform, non-blocking) ---
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMoving = false;

    const handlePointerMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      targetY = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      if (!isMoving) {
        isMoving = true;
        renderMouseParallax();
      }
    };

    const renderMouseParallax = () => {
      // Lerp easing (0.04 damping factor for smooth, organic inertia)
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      if (blob1Ref.current) {
        const moveX1 = currentX * 28;
        const moveY1 = currentY * 20;
        blob1Ref.current.style.setProperty('--mouse-tx', `${moveX1.toFixed(2)}px`);
        blob1Ref.current.style.setProperty('--mouse-ty', `${moveY1.toFixed(2)}px`);
      }

      if (blob2Ref.current) {
        // Counter-phase movement for multidimensional depth
        const moveX2 = currentX * -22;
        const moveY2 = currentY * -16;
        blob2Ref.current.style.setProperty('--mouse-tx', `${moveX2.toFixed(2)}px`);
        blob2Ref.current.style.setProperty('--mouse-ty', `${moveY2.toFixed(2)}px`);
      }

      // Continue animating until settled
      const delta = Math.abs(targetX - currentX) + Math.abs(targetY - currentY);
      if (delta > 0.001) {
        rafIdRef.current = requestAnimationFrame(renderMouseParallax);
      } else {
        isMoving = false;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // --- 2. GSAP Scroll Parallax Depth ---
    const ctx = gsap.context(() => {
      if (stageRef.current) {
        gsap.to(stageRef.current, {
          yPercent: 18,
          scale: 1.04,
          opacity: 0.85,
          ease: 'none',
          scrollTrigger: {
            trigger: stageRef.current.parentElement || stageRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      ctx.revert();
    };
  }, []);

  return (
    <div className="fx-stage ec-fluid-stage" ref={stageRef} aria-hidden="true">
      {/* Primary Fluid Resonance Blob */}
      <div
        className="fx-blob fx-blob-1 ec-fluid-blob ec-fluid-blob-primary"
        ref={blob1Ref}
      />

      {/* Secondary Counter-Resonance Fluid Blob */}
      <div
        className="fx-blob fx-blob-2 ec-fluid-blob ec-fluid-blob-secondary"
        ref={blob2Ref}
      />

      {/* Subtle Luminous Core Node for Depth */}
      <div className="fx-blob-core ec-fluid-blob-core" />
    </div>
  );
}
