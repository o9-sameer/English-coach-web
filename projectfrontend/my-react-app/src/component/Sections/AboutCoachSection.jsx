import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DEFAULT_COACH_IMAGE } from '../Body/constants';
import './Sections.css';
import './AboutCoachSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutCoachSection({ coachImage = DEFAULT_COACH_IMAGE }) {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const imageFrameRef = useRef(null);
  const imageElementRef = useRef(null);
  const bioContentRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Headline masked lines reveal
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
              trigger: headlineRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 2. Image progressive clip-path reveal + scale-down
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          { clipPath: 'inset(0% 100% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.35,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: imageFrameRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 3. Continuous vertical parallax drift on portrait
      if (imageElementRef.current && sectionRef.current) {
        gsap.fromTo(
          imageElementRef.current,
          { scale: 1.12, yPercent: -6 },
          {
            scale: 1,
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // 4. Staggered reveal for bio content
      if (bioContentRef.current) {
        gsap.fromTo(
          bioContentRef.current.children,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bioContentRef.current,
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
    <section id="about" className="editorial-section about-coach-section" ref={sectionRef}>
      {/* Anchor for dropdown links */}
      <div id="about-coach" className="section-anchor" />
      <div id="philosophy" className="section-anchor" />

      {/* Section Header */}
      <div className="about-coach-header">
        <div className="section-badge">
          <span className="section-badge-dot" />
          Meet Your Trainer · Coach Rahul
        </div>

        <h2 className="section-lead-title about-coach-headline" ref={headlineRef}>
          <span className="reveal-line-mask">
            <span className="reveal-line">LEARN TO SPEAK ENGLISH</span>
          </span>
          <span className="reveal-line-mask">
            <span className="reveal-line">
              WITHOUT <span className="title-accent">HESITATION.</span>
            </span>
          </span>
        </h2>
      </div>

      <div className="about-coach-grid">
        {/* Left Column: Portrait with Clip-Path Reveal and Parallax */}
        <div className="about-visual-col">
          <div className="about-image-card">
            <div className="clip-reveal-frame about-image-frame" ref={imageFrameRef}>
              <img
                ref={imageElementRef}
                src={coachImage}
                alt="Rahul Sharma - Spoken English Trainer"
                className="about-coach-img"
                loading="lazy"
              />
              <div className="about-image-overlay-vignette" />
            </div>

            <div className="about-floating-badge">
              <span className="badge-live-pulse" />
              <div className="badge-text-group">
                <span className="badge-lead">Rahul Sharma</span>
                <span className="badge-detail">Spoken English & Interview Trainer · Indore & Online</span>
              </div>
            </div>
          </div>

          <div className="about-metrics-pill-row">
            <div className="about-micro-metric">
              <span className="metric-figure">8+</span>
              <span className="metric-caption">Years Coaching Experience</span>
            </div>
            <div className="metric-pill-divider" />
            <div className="about-micro-metric">
              <span className="metric-figure">3,000+</span>
              <span className="metric-caption">Students Trained</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Core Practical Approach */}
        <div className="about-bio-col" ref={bioContentRef}>
          <p className="about-lead-quote">
            “English is just a communication skill, not a certificate of intelligence. If you practice
            speaking simple sentences everyday without fear, fluency will follow naturally.”
          </p>

          <p className="about-body-p">
            Hello, I am Rahul Sharma. Over the last eight years, I have trained thousands of college students,
            freshers, and working professionals from Indore, Bhopal, Pune, Delhi, and across India to speak
            English clearly and confidently.
          </p>

          <p className="about-body-p">
            Most Indian learners know grammar rules and can understand English easily, but freeze when
            speaking in front of a senior, boss, or interviewer. This happens because we try to translate
            word-by-word from Hindi in our minds. In our classes, we break this habit with daily interactive
            speaking drills so you speak spontaneously without hesitation.
          </p>

          {/* 3 Core Learning Steps */}
          <div className="about-tenets-group">
            <div className="tenet-row">
              <div className="tenet-index">01</div>
              <div className="tenet-content">
                <h3 className="tenet-title">Stop Thinking in Hindi</h3>
                <p className="tenet-desc">
                  Learn everyday sentence patterns so words come directly to your tongue without mental translation.
                </p>
              </div>
            </div>

            <div className="tenet-row">
              <div className="tenet-index">02</div>
              <div className="tenet-content">
                <h3 className="tenet-title">Overcome Hesitation & Fear</h3>
                <p className="tenet-desc">
                  Daily 1-on-1 and small group speaking practice in a warm, friendly, judgment-free environment.
                </p>
              </div>
            </div>

            <div className="tenet-row">
              <div className="tenet-index">03</div>
              <div className="tenet-content">
                <h3 className="tenet-title">Clear Job Interview Practice</h3>
                <p className="tenet-desc">
                  Master self-introduction, common HR questions, and group discussions to clear campus placements and job rounds.
                </p>
              </div>
            </div>
          </div>

          <div className="about-signature-footer">
            <div className="signature-content">
              <span className="signature-name">Rahul Sharma</span>
              <span className="signature-sub">Founder & Lead English Trainer</span>
            </div>
            <div className="signature-badge">New Batches Every Monday</div>
          </div>
        </div>
      </div>
    </section>
  );
}
