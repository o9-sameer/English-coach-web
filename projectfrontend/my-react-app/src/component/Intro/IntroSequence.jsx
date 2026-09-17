import { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import './IntroSequence.css';

export default function IntroSequence({ onComplete }) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const overlayRef = useRef(null);
  const dotsRef = useRef(null);
  const waveRef = useRef(null);
  const statementRef = useRef(null);
  const tlRef = useRef(null);

  const handleSkip = useCallback(() => {
    if (tlRef.current) {
      tlRef.current.kill();
    }
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          setIsVisible(false);
          if (onComplete) onComplete();
        },
      });
    } else {
      setIsVisible(false);
      if (onComplete) onComplete();
    }
  }, [onComplete]);

  useEffect(() => {
    if (!isVisible) {
      if (onComplete) onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          if (onComplete) onComplete();
        },
      });
      tlRef.current = tl;

      const dots = dotsRef.current?.querySelectorAll('.h-dot');
      const waveBars = waveRef.current?.querySelectorAll('.wave-bar');
      const statementLines = statementRef.current?.querySelectorAll('.statement-line');

      // Phase 1: Silence (0.3s)
      tl.to({}, { duration: 0.3 });

      // Phase 2: Hesitation dots appear (0.6s)
      if (dots && dots.length) {
        tl.fromTo(
          dots,
          { scale: 0.3, opacity: 0, y: 8 },
          {
            scale: 1,
            opacity: 0.85,
            y: 0,
            duration: 0.45,
            stagger: 0.12,
            ease: 'power2.out',
          }
        );
        tl.to(dots, {
          scale: 1.15,
          opacity: 1,
          duration: 0.3,
          stagger: 0.08,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: 1,
        });
      }

      // Phase 3: Transformation into acoustic frequency wave (0.7s)
      if (dotsRef.current && waveRef.current) {
        tl.to(
          dotsRef.current,
          {
            opacity: 0,
            scale: 0.6,
            duration: 0.25,
            ease: 'power2.in',
          },
          '>-0.1'
        );

        tl.fromTo(
          waveRef.current,
          { opacity: 0, scaleY: 0.2 },
          { opacity: 1, scaleY: 1, duration: 0.4, ease: 'power2.out' },
          '<'
        );

        if (waveBars && waveBars.length) {
          tl.to(
            waveBars,
            {
              scaleY: 1.6,
              duration: 0.25,
              stagger: 0.06,
              yoyo: true,
              repeat: 1,
              ease: 'power1.inOut',
            },
            '<+0.1'
          );
        }
      }

      // Phase 4: Big Typographic Statement "FIND YOUR VOICE." (0.9s)
      if (waveRef.current && statementLines && statementLines.length) {
        tl.to(waveRef.current, {
          opacity: 0,
          scaleX: 1.8,
          duration: 0.3,
          ease: 'power2.in',
        });

        tl.fromTo(
          statementLines,
          { y: '115%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '<-0.1'
        );

        tl.to({}, { duration: 0.5 });
      }

      // Phase 5: Cinematic Handoff into Hero (0.8s)
      if (statementRef.current && overlayRef.current) {
        tl.to(statementRef.current, {
          y: -40,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
        });

        tl.to(
          overlayRef.current,
          {
            clipPath: 'inset(0% 0% 100% 0%)',
            duration: 0.8,
            ease: 'power3.inOut',
          },
          '<-0.1'
        );
      }
    }, overlayRef);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      ctx.revert();
    };
  }, [isVisible, handleSkip, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="intro-overlay" ref={overlayRef} role="presentation">
      <div className="intro-aura" aria-hidden="true" />
      <button
        type="button"
        className="intro-skip-btn"
        onClick={handleSkip}
        aria-label="Skip introduction"
      >
        <span>SKIP</span>
        <span className="skip-key-hint">[ESC]</span>
      </button>

      <div className="intro-center-stage">
        <div className="intro-hesitation-box" ref={dotsRef}>
          <span className="h-dot" />
          <span className="h-dot" />
          <span className="h-dot" />
        </div>

        <div className="intro-waveform-box" ref={waveRef}>
          <span className="wave-bar bar-1" />
          <span className="wave-bar bar-2" />
          <span className="wave-bar bar-3" />
          <span className="wave-bar bar-4" />
          <span className="wave-bar bar-5" />
        </div>

        <div className="intro-statement-box" ref={statementRef}>
          <div className="statement-line-mask">
            <span className="statement-line">FIND</span>
          </div>
          <div className="statement-line-mask">
            <span className="statement-line">YOUR</span>
          </div>
          <div className="statement-line-mask">
            <span className="statement-line statement-accent">
              VOICE<span className="statement-dot">.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
