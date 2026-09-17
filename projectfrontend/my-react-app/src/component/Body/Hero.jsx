import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AcousticFieldCanvas from './AcousticFieldCanvas';
import FluidBlobBackground from './FluidBlobBackground';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onBookSession, onExplore }) {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);

  // GSAP Scroll-driven cinematic depth
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Content subtle vertical parallax drift on scroll
      if (heroContentRef.current && heroRef.current) {
        gsap.to(heroContentRef.current, {
          y: -50,
          opacity: 0.85,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    if (onExplore) {
      onExplore();
    } else {
      window.scrollTo({
        top: window.innerHeight * 0.95,
        behavior: 'smooth',
      });
    }
  };

  const handleBookSession = () => {
    if (onBookSession) {
      onBookSession();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* Living Atmospheric Vocal Resonance Field with Fluid Blob Depth */}
      <div className="hero-atmosphere-wrapper" aria-hidden="true">
        <FluidBlobBackground />
        <AcousticFieldCanvas />
        <div className="hero-noise-overlay" />
        <div className="hero-vignette-overlay" />
      </div>

      <div className="hero-container" ref={heroContentRef}>
        <div className="hero-badge-wrapper">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Spoken English & Interview Coaching
          </span>
        </div>

        <h1 className="hero-title" aria-label="MASTER THE ART OF COMMUNICATION.">
          <span className="hero-title-line-mask">
            <span className="hero-title-line hero-line-1">MASTER THE</span>
          </span>
          <span className="hero-title-line-mask">
            <span className="hero-title-line hero-line-2">ART OF</span>
          </span>
          <span className="hero-title-line-mask">
            <span className="hero-title-line hero-line-3">
              COMMUNICATION<span className="hero-accent-dot">.</span>
            </span>
          </span>
        </h1>

        <p className="hero-supporting-text">
          Speak English naturally, confidently and professionally.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            className="hero-primary-cta"
            onClick={handleBookSession}
            aria-label="Book an English coaching session"
          >
            <span>Book a Session</span>
            <span className="cta-arrow-bubble">
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </span>
          </button>

          <button
            type="button"
            className="hero-secondary-cta"
            onClick={handleScrollDown}
            aria-label="Explore coaching services"
          >
            <span>Explore</span>
            <span className="explore-arrow">↓</span>
          </button>
        </div>
      </div>

      {/* Bottom Minimalist Scroll Indicator */}
      <div
        className="hero-scroll-indicator"
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        aria-label="Scroll to explore more content"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleScrollDown();
        }}
      >
        <span className="scroll-label">SCROLL</span>
        <div className="scroll-pill">
          <span className="scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
