import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DEFAULT_COACH_IMAGE } from '../Body/constants';
import './Sections.css';
import './CoachSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function CoachSection({ coachImage = DEFAULT_COACH_IMAGE }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Clip-path reveal on coach portrait
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: 'inset(0% 100% 0% 0%)', scale: 0.96 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Staggered text reveal
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about-coach" className="editorial-section coach-section" ref={sectionRef}>
      <div className="coach-grid">
        {/* Left Column: Portrait with Clip-Path */}
        <div className="coach-visual-col">
          <div className="clip-reveal-frame coach-image-frame" ref={imageRef}>
            <img
              src={coachImage}
              alt="Lead English Communication Coach and Founder"
              className="clip-reveal-img coach-img"
              loading="lazy"
            />
            <div className="coach-credentials-badge">
              <span className="badge-pin">●</span>
              <span>Cambridge Rhetoric Fellow · London Advisory</span>
            </div>
          </div>
        </div>

        {/* Right Column: Biography & Philosophy */}
        <div className="coach-bio-col" ref={textRef}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            The Founder & Mentor
          </div>

          <h2 className="section-lead-title coach-headline">
            THE ARCHITECT BEHIND <span className="title-accent">GLOBAL VOICES.</span>
          </h2>

          <p className="coach-bio-lead">
            Over the past twelve years, I have worked quietly in the background of
            multinational boardrooms, Davos panels, and high-stakes venture raises.
          </p>

          <p className="coach-bio-body">
            My journey began in classical rhetoric and performance linguistics. What I discovered
            working with non-native and international leaders was profound: the barrier to effortless
            authority was never grammar—it was nervous speed, breath collapse, and cognitive
            overload under scrutiny.
          </p>

          <p className="coach-bio-body">
            Together, we replace panic with poise. You will not sound like an actor reading a script;
            you will sound like the most articulate, commanding version of yourself.
          </p>

          <div className="coach-signature-box">
            <blockquote className="coach-quote">
              “Real authority is quiet. When you speak with clarity and deliberate cadence,
              you never need to shout.”
            </blockquote>
            <div className="signature-row">
              <span className="coach-sign-name">Alexander Vance</span>
              <span className="coach-sign-title">Founder & Lead Executive Coach</span>
            </div>
          </div>

          <div className="coach-pillars-pills">
            <span className="pillar-pill">Private Advisory</span>
            <span className="pillar-pill">Speech Acoustics</span>
            <span className="pillar-pill">Boardroom Presence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
