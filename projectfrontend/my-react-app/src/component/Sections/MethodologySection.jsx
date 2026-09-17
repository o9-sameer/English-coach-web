import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';
import './MethodologySection.css';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    num: '01',
    title: 'Cognitive Framing',
    subtitle: 'High-Pressure Thought Architecture',
    description:
      'We train your mind to organize complex strategic ideas in milliseconds. Move from rambling explanations to crisp, headline-first executive syntheses that captivate decision-makers.',
    drills: [
      'The Pyramid Principle for Boardrooms',
      'Real-Time Question Reframing',
      'Eliminating Cognitive Hesitation Loops',
    ],
    tag: 'Mental Agility',
  },
  {
    num: '02',
    title: 'Cadence & Articulation',
    subtitle: 'Vocal Resonance & Rhetorical Pacing',
    description:
      'Speech is musical and physiological. We refine your breathing mechanics, vocal projection, and strategic silence—transforming nervous speed into deliberate, authoritative gravitas.',
    drills: [
      'Diaphragmatic Breath Anchoring',
      'The Strategic 2-Second Silence Drill',
      'Vocal Pitch & Nuance Calibration',
    ],
    tag: 'Vocal Authority',
  },
  {
    num: '03',
    title: 'Executive Presence',
    subtitle: 'Physical Gravity & Room Command',
    description:
      'True presence is felt before you speak. Master the subtle micro-behaviors, open physical posture, and unhurried eye cadence that radiate executive certainty under relentless scrutiny.',
    drills: [
      'Room Decentered Visual Scanning',
      'Kinesthetic Grounding Under Duress',
      'Subconscious Status Signals & Poise',
    ],
    tag: 'Physical Command',
  },
];

export default function MethodologySection() {
  const [activePillar, setActivePillar] = useState(0);
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardsContainerRef.current?.querySelectorAll('.pillar-card');
      if (cards && cards.length) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 78%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="editorial-section methodology-section" ref={sectionRef}>
      <div className="methodology-header">
        <div className="section-badge">
          <span className="section-badge-dot" />
          The 3-Pillar Framework
        </div>
        <h2 className="section-lead-title">
          THE SCIENCE OF <span className="title-accent">RHETORICAL GRAVITY.</span>
        </h2>
        <p className="methodology-intro-text">
          A rigorous neuro-linguistic method engineered over twelve years of working
          alongside founders, Fortune 100 executives, and keynote orators.
        </p>
      </div>

      {/* Pillar Cards Grid */}
      <div className="pillars-grid" ref={cardsContainerRef}>
        {PILLARS.map((pillar, index) => {
          const isActive = activePillar === index;

          return (
            <div
              key={pillar.num}
              className={`pillar-card ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActivePillar(index)}
              tabIndex={0}
              role="region"
              aria-label={`Pillar ${pillar.num}: ${pillar.title}`}
              onFocus={() => setActivePillar(index)}
            >
              <div className="pillar-card-top">
                <div className="pillar-num-badge">
                  <span>{pillar.num}</span>
                </div>
                <span className="pillar-tag">{pillar.tag}</span>
              </div>

              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-subtitle">{pillar.subtitle}</p>

              <p className="pillar-desc">{pillar.description}</p>

              <div className="pillar-drills-box">
                <span className="drills-header">Core Competencies:</span>
                <ul className="drills-list">
                  {pillar.drills.map((drill) => (
                    <li key={drill}>
                      <span className="drill-bullet">→</span>
                      <span>{drill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pillar-accent-line" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
