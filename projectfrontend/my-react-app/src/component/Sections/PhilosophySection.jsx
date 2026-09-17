import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';
import './PhilosophySection.css';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const imageFrameRef = useRef(null);
  const copyRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Headline masked reveal
      const lines = headlineRef.current?.querySelectorAll('.reveal-line');
      if (lines && lines.length) {
        gsap.fromTo(
          lines,
          { y: '115%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1.1,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Clip-path reveal on the visual frame
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          { clipPath: 'inset(100% 0% 0% 0%)', y: 30 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            y: 0,
            duration: 1.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageFrameRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Manifesto copy fade & slide up
      if (copyRef.current) {
        gsap.fromTo(
          copyRef.current.children,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: copyRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="editorial-section philosophy-section" ref={sectionRef}>
      <div className="section-badge">
        <span className="section-badge-dot" />
        Teaching Philosophy
      </div>

      <div className="philosophy-grid">
        {/* Left Column: Masked Headline & Manifesto Copy */}
        <div className="philosophy-text-col">
          <h2 className="section-lead-title philosophy-title" ref={headlineRef}>
            <span className="reveal-line-mask">
              <span className="reveal-line">CONFIDENCE</span>
            </span>
            <span className="reveal-line-mask">
              <span className="reveal-line">CHANGES HOW</span>
            </span>
            <span className="reveal-line-mask">
              <span className="reveal-line">
                YOU <span className="title-accent">COMMUNICATE.</span>
              </span>
            </span>
          </h2>

          <div className="philosophy-copy" ref={copyRef}>
            <p className="philosophy-lead-paragraph">
              High-stakes communication is never about vocabulary size or accent mimicry.
              It is the intentional alignment of cognitive clarity, deliberate cadence,
              and commanding physical presence.
            </p>
            <p className="philosophy-sub-paragraph">
              When international executives hesitate, it is rarely a knowledge deficit.
              It is the cognitive burden of real-time translation under scrutiny.
              We dismantle the hesitation mechanism, replacing second-guessing with
              unshakable rhetorical authority.
            </p>

            <div className="philosophy-pillars-preview">
              <div className="preview-item">
                <span className="preview-num">01</span>
                <span className="preview-text">Cognitive Pacing</span>
              </div>
              <div className="preview-item">
                <span className="preview-num">02</span>
                <span className="preview-text">Vocal Resonance</span>
              </div>
              <div className="preview-item">
                <span className="preview-num">03</span>
                <span className="preview-text">Boardroom Poise</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clip-Path Editorial Visual */}
        <div className="philosophy-visual-col">
          <div className="clip-reveal-frame philosophy-frame" ref={imageFrameRef}>
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
              alt="Executive delivering high-stakes speech"
              className="clip-reveal-img"
              loading="lazy"
            />
            <div className="philosophy-floating-quote">
              <span className="quote-mark">“</span>
              <p>Articulation is not performance. It is distilled thought made audible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
