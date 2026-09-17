import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';
import './InteractivePrograms.css';

gsap.registerPlugin(ScrollTrigger);

const PROGRAMS_DATA = [
  {
    id: 'program-1on1',
    number: '01',
    title: 'Spoken English & Daily Conversation',
    subtitle: 'For College Students & Beginners',
    duration: '60 Days Live Batch',
    badge: '₹999 / mo',
    outcome: 'Speak fluent everyday English without getting stuck or feeling embarrassed.',
    description:
      'Designed for students and freshers who feel nervous speaking in English. We practice simple daily conversation topics, correct sentence formation, and common pronunciation in a friendly small batch.',
    features: [
      'Live 1-hour daily practice sessions on Google Meet',
      'Hesitation removal with 1-on-1 speaking partners',
      'Simple grammar tricks to avoid Hindi-to-English translation',
      'WhatsApp group for daily speaking voice-note challenges',
    ],
  },
  {
    id: 'program-executive',
    number: '02',
    title: 'Job Interview & Campus Placement English',
    subtitle: 'For Freshers & Job Seekers',
    duration: '4 Weeks Intensive',
    badge: '₹1,499 Total Fee',
    outcome: 'Clear HR rounds, self-introduction, and group discussions with full confidence.',
    description:
      'Targeted preparation for IT campus placements (TCS, Infosys, Wipro, Accenture), banking, sales, and corporate job interviews. Learn how to speak clearly about your projects and background without fumbling.',
    features: [
      'Mock HR interviews with live feedback and scoring',
      'Impressive answers for "Tell Me About Yourself" & weaknesses',
      'Group Discussion (GD) speaking strategies and etiquette',
      'Resume review and interview English vocabulary notes (PDF)',
    ],
  },
  {
    id: 'program-interview',
    number: '03',
    title: 'Office & Professional Business English',
    subtitle: 'For Working Professionals',
    duration: '6 Weeks (Weekend/Evening)',
    badge: '₹1,999 Total Fee',
    outcome: 'Speak up confidently in Zoom meetings, talk to managers, and write clean emails.',
    description:
      'For software engineers, customer support, sales executives, and team leads who struggle in client calls and sprint updates. Learn how to explain technical issues, disagree politely, and write professional emails.',
    features: [
      'Sprint updates, stand-ups & client meeting speaking practice',
      'Professional email writing templates & etiquette',
      'Giving presentations and explaining project blockers',
      'Evening and weekend batch timings for working professionals',
    ],
  },
  {
    id: 'program-crosscultural',
    number: '04',
    title: '1-on-1 Personal Mentorship',
    subtitle: 'Private Coaching with Rahul Sir',
    duration: '8 Weeks Personal Coaching',
    badge: '₹2,999 Total Fee',
    outcome: 'Dedicated 1-on-1 attention for your specific weak areas and career goals.',
    description:
      'Direct private sessions focused entirely on you. Ideal for team managers, business owners, or candidates with urgent upcoming interview rounds who need rapid improvement.',
    features: [
      '3 private 45-minute video sessions per week',
      'Custom curriculum designed around your job role',
      'Detailed voice note reviews and speech correction',
      'Direct personal WhatsApp guidance with Rahul Sir',
    ],
  },
];

export default function InteractivePrograms({ onBookSession }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const rows = listRef.current?.querySelectorAll('.program-row');
      if (rows && rows.length) {
        gsap.fromTo(
          rows,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBook = () => {
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
    <section id="programs" className="editorial-section interactive-programs-section" ref={sectionRef}>
      {/* Anchor targets for navbar dropdown */}
      <div id="program-1on1" className="section-anchor" />
      <div id="program-executive" className="section-anchor" />
      <div id="program-interview" className="section-anchor" />
      <div id="program-presentation" className="section-anchor" />
      <div id="program-business" className="section-anchor" />

      <div className="programs-header-row">
        <div className="programs-header-left">
          <div className="section-badge">
            <span className="section-badge-dot" />
            Live Batches & Courses
          </div>
          <h2 className="section-lead-title programs-editorial-title">
            CHOOSE YOUR <span className="title-accent">COURSE.</span>
          </h2>
        </div>

        <div className="programs-header-right">
          <p className="programs-header-bio">
            Affordable fees with flexible morning and evening batches. Each batch is limited
            to 15 students so everyone gets plenty of speaking time.
          </p>
          <div className="cohort-seats-indicator">
            <span className="seats-pulse" />
            <span>New Batch Starts This Monday · Limited Seats</span>
          </div>
        </div>
      </div>

      {/* Editorial Interactive List with Inactive Item Dimming */}
      <div className="interactive-programs-list" ref={listRef}>
        {PROGRAMS_DATA.map((prog, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={prog.id}
              id={prog.id}
              className={`program-row ${isActive ? 'is-active' : 'is-dimmed'}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              tabIndex={0}
              role="button"
              aria-expanded={isActive}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveIndex(index);
                }
              }}
            >
              {/* Row Bar: Number, Title, Badge, Duration, Arrow */}
              <div className="program-row-bar">
                <div className="program-num-col">
                  <span className="program-row-num">{prog.number}</span>
                </div>

                <div className="program-title-col">
                  <div className="program-title-row">
                    <h3 className="program-main-title">{prog.title}</h3>
                    <span className="program-badge-pill">{prog.badge}</span>
                  </div>
                  <span className="program-subtitle-tag">{prog.subtitle}</span>
                </div>

                <div className="program-meta-col">
                  <span className="program-row-duration">{prog.duration}</span>
                  <div className="program-arrow-circle">
                    <span className="row-arrow">↗</span>
                  </div>
                </div>
              </div>

              {/* Collapsible/Expandable Content Drawer */}
              <div className="program-drawer-wrapper">
                <div className="program-drawer-inner">
                  <div className="program-outcome-banner">
                    <span className="outcome-icon">✦</span>
                    <span className="outcome-text">{prog.outcome}</span>
                  </div>

                  <p className="program-drawer-desc">{prog.description}</p>

                  <div className="program-features-grid">
                    {prog.features.map((feat) => (
                      <div key={feat} className="program-feature-cell">
                        <span className="feature-check">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="program-drawer-action">
                    <button
                      type="button"
                      className="program-cta-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBook();
                      }}
                    >
                      <span>Book Free Demo Class</span>
                      <span className="btn-arrow-bubble">
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                      </span>
                    </button>
                    <span className="drawer-note">Google Meet Link sent on WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
