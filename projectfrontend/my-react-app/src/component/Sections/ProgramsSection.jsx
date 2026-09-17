import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';
import './ProgramsSection.css';

gsap.registerPlugin(ScrollTrigger);

const PROGRAMS = [
  {
    id: '1on1',
    title: '1-on-1 Executive Mentorship',
    duration: '8 or 12 Weeks',
    tag: 'Private Bespoke',
    badge: 'Most Comprehensive',
    headline: 'Total personal vocal and rhetorical overhaul.',
    description:
      'Direct, private weekly sessions with the coach. Every speech, quarterly earnings call, or boardroom presentation you deliver is analyzed, refined, and perfected.',
    features: [
      'Weekly 75-minute high-intensity private sessions',
      'Full video & vocal acoustic spectral feedback',
      'Unlimited WhatsApp voice note review for urgent meetings',
      'Personal speechwriter & rhetorical framing support',
    ],
  },
  {
    id: 'keynote',
    title: 'Boardroom & Keynote Mastery',
    duration: '6 Weeks',
    tag: 'Stage & Board',
    headline: 'Hold 1,000 people in total silence.',
    description:
      'Designed for leaders stepping onto global stages or facing critical investor summits. Master physical stage dynamics, slide choreography, and vocal stamina.',
    features: [
      'Comprehensive keynote structure & narrative arc design',
      'Stage pacing, microphone technique & physical authority',
      'Simulated high-pressure investor Q&A fire drills',
      'Recorded multi-angle rehearsal review',
    ],
  },
  {
    id: 'interview',
    title: 'High-Stakes Interview Preparation',
    duration: '3 Weeks Intensive',
    tag: 'Executive Placement',
    headline: 'Secure the C-suite appointment.',
    description:
      'For executives interviewing for Tier-1 multinational leadership roles. Frame past achievements with effortless gravitas, avoiding self-deprecation and hesitation.',
    features: [
      'Strategic framing for behavioral & vision inquiries',
      'Executive salary negotiation cadence & leverage positioning',
      'Real-time mock interviews with immediate critique',
      'Curated executive narrative deck formulation',
    ],
  },
  {
    id: 'global',
    title: 'Cross-Cultural Global Influence',
    duration: '10 Weeks',
    tag: 'Diplomatic Tone',
    headline: 'Bridge international boardrooms with nuance.',
    description:
      'Navigate the subtle cultural subtext between American assertiveness, British understatement, and European diplomacy. Master tone authority in hybrid environments.',
    features: [
      'Tone calibration across Anglo & European boardrooms',
      'Conflict de-escalation & subtle persuasive phrasing',
      'Executive email syntax and async clarity',
      'Hybrid meeting gravity and digital vocal projection',
    ],
  },
];

export default function ProgramsSection({ onBookSession }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.program-card');
      if (cards && cards.length) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.16,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSelectProgram = () => {
    if (onBookSession) {
      onBookSession();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="programs" className="editorial-section programs-section" ref={sectionRef}>
      <div className="programs-header">
        <div className="section-badge">
          <span className="section-badge-dot" />
          Bespoke Curricula
        </div>
        <h2 className="section-lead-title">
          COACHING <span className="title-accent">TRACKS.</span>
        </h2>
        <p className="programs-intro">
          We accept a maximum of eight private clients per quarter to ensure obsessive
          dedication to each leader’s rhetorical trajectory.
        </p>
      </div>

      <div className="programs-grid" ref={gridRef}>
        {PROGRAMS.map((program) => (
          <div key={program.id} className="program-card">
            <div className="program-card-header">
              <div className="program-tags-row">
                <span className="program-tag">{program.tag}</span>
                {program.badge && <span className="program-badge">{program.badge}</span>}
              </div>
              <span className="program-duration">{program.duration}</span>
            </div>

            <h3 className="program-title">{program.title}</h3>
            <p className="program-headline">{program.headline}</p>
            <p className="program-description">{program.description}</p>

            <div className="program-features-list">
              {program.features.map((feat) => (
                <div key={feat} className="program-feat-item">
                  <span className="feat-check">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="program-card-footer">
              <button
                type="button"
                className="program-action-btn"
                onClick={handleSelectProgram}
              >
                <span>Reserve Consultation</span>
                <span className="action-arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
