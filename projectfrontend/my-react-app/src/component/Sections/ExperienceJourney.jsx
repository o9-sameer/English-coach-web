import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';
import './ExperienceJourney.css';

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    id: 'stage-01',
    step: '01',
    stateLabel: 'STEP 01: BUILD CONFIDENCE',
    phaseName: 'Build Confidence',
    subtitle: 'Stop Hesitating & Start Speaking Simple Sentences',
    barrier:
      'You know words in English, but you hesitate and freeze when someone speaks to you. You fear people will laugh if you make a grammar mistake, so you choose to remain silent.',
    breakthrough:
      'We break the silence with simple 2-to-4 word everyday spoken structures. You practice speaking out loud in an encouraging space where mistakes are treated as learning steps.',
    keyPoints: [
      'Stop hesitating and overthinking grammar rules',
      'Start speaking simple, practical sentences',
      'Overcome fear of making mistakes in front of others',
      'Learn basic everyday conversational English',
    ],
    drills: [
      'Hesitation Breaker Speaking Drills',
      'Simple Everyday Sentence Starters',
      'Fear-Free Mirror Practice Routine',
      'Daily 5-Min Out-Loud Speaking Habit',
    ],
  },
  {
    id: 'stage-02',
    step: '02',
    stateLabel: 'STEP 02: SPEAK MORE NATURALLY',
    phaseName: 'Speak More Naturally',
    subtitle: 'Better Sentence Formation & Stop Translating from Hindi',
    barrier:
      'Constantly translating sentences from Hindi to English in your head. This creates awkward 4-second pauses, unnatural word order, and running out of vocabulary mid-sentence.',
    breakthrough:
      'Learn direct English thinking patterns without mental translation. Practice everyday conversation frameworks and active vocabulary so sentences connect naturally.',
    keyPoints: [
      'Better sentence formation without awkward pauses',
      'Completely stop translating from Hindi to English',
      'Use simple, useful, high-impact everyday vocabulary',
      'Practice daily common conversations with peers',
    ],
    drills: [
      'Stop-Mind-Translation Drills',
      'Sentence Linking & Transition Words',
      'Active Everyday Vocabulary Sets',
      'Daily Real-Life Topic Conversations',
    ],
  },
  {
    id: 'stage-03',
    step: '03',
    stateLabel: 'STEP 03: IMPROVE COMMUNICATION',
    phaseName: 'Improve Communication',
    subtitle: 'Clear Thought Expression, Better Tone & Real-Life Practice',
    barrier:
      'Giving only short one-word replies ("yes", "okay") because you cannot hold longer discussions. Tone is monotone, pronunciation is unclear, and phone calls feel intimidating.',
    breakthrough:
      'Express thoughts clearly and hold meaningful conversations without getting stuck. Improve voice modulation, clear pronunciation, and practice handling real-life phone calls.',
    keyPoints: [
      'Express thoughts clearly without getting stuck',
      'Hold longer, flowing conversations with ease',
      'Better pronunciation, rhythm, and vocal tone',
      'Real-life situation practice (work, public, phone calls)',
    ],
    drills: [
      'Long-Form Conversation Frameworks',
      'Pronunciation & Tone Clarity Practice',
      'Phone Call & Service Desk Simulations',
      'Spontaneous Topic Speaking (Extempore)',
    ],
  },
  {
    id: 'stage-04',
    step: '04',
    stateLabel: 'STEP 04: SPEAK WITH CONFIDENCE',
    phaseName: 'Speak With Confidence',
    subtitle: 'Interview Communication, Workplace English & Presentations',
    barrier:
      'Fumbling during job interviews, freezing on "Tell me about yourself", remaining muted in team meetings, and losing career growth opportunities due to spoken English hesitation.',
    breakthrough:
      'Master professional workplace English. Clear HR interview rounds with structured answers, deliver impactful presentations, and speak authoritatively in corporate meetings.',
    keyPoints: [
      'Job interview communication & HR rounds mastery',
      'Office and workplace English for daily meetings',
      'Giving confident, persuasive presentations',
      'Speaking fluently in high-stakes professional settings',
    ],
    drills: [
      'HR Mock Interview & "About You" Pitch',
      'Office Standup & Team Meeting Drills',
      'Client Presentation & Q&A Mastery',
      'Executive Speaking & Leadership Presence',
    ],
  },
];

export default function ExperienceJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Set up ScrollTrigger for each card to update the active stage
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        ScrollTrigger.create({
          trigger: card,
          start: 'top 55%',
          end: 'bottom 55%',
          onEnter: () => setActiveStage(index),
          onEnterBack: () => setActiveStage(index),
        });

        // Stagger card entrance
        gsap.fromTo(
          card,
          { opacity: 0.35, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentStageData = STAGES[activeStage] || STAGES[0];

  return (
    <section id="experience" className="editorial-section experience-journey-section" ref={sectionRef}>
      {/* Section Header */}
      <div className="journey-header">
        <div className="section-badge">
          <span className="section-badge-dot" />
          Our 4-Step Practical Method
        </div>
        <h2 className="section-lead-title">
          YOUR PATH TO <span className="title-accent">FLUENT ENGLISH.</span>
        </h2>
        <p className="journey-intro-text">
          Learning spoken English doesn't take years of grammar books. Follow this simple
          4-step practical system designed specifically for Indian learners.
        </p>
      </div>

      <div className="journey-layout-grid">
        {/* Left Column: Pinned Stage Monitor */}
        <div className="journey-pinned-col" ref={leftColRef}>
          <div className="journey-monitor-card">
            <div className="monitor-top-row">
              <span className="monitor-step-badge">
                STAGE {currentStageData.step} / 04
              </span>
              <span className="monitor-live-dot" />
            </div>

            <div className="monitor-state-callout">
              <span className="monitor-label">CURRENT LEARNING STAGE</span>
              <h3 className="monitor-state-title">{currentStageData.stateLabel}</h3>
            </div>

            {/* Visual Step Progress Bar */}
            <div className="monitor-progress-bar-wrap">
              {STAGES.map((s, idx) => (
                <div
                  key={s.id}
                  className={`progress-tick ${idx <= activeStage ? 'is-filled' : ''} ${idx === activeStage ? 'is-current' : ''}`}
                >
                  <span className="tick-label">{s.step}</span>
                </div>
              ))}
            </div>

            <div className="monitor-focus-box">
              <span className="focus-heading">Goal For This Stage:</span>
              <p className="focus-text">{currentStageData.phaseName}</p>
              <span className="focus-sub">{currentStageData.subtitle}</span>
            </div>

            <div className="monitor-arrow-chain">
              <span className="chain-item">HESITATION</span>
              <span className="chain-arrow">→</span>
              <span className="chain-item">PRACTICE</span>
              <span className="chain-arrow">→</span>
              <span className="chain-item">CONFIDENCE</span>
              <span className="chain-arrow">→</span>
              <span className="chain-item highlighted">FLUENCY</span>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Progressive Stage Cards */}
        <div className="journey-cards-col">
          {STAGES.map((stage, idx) => {
            const isCurrent = activeStage === idx;

            return (
              <div
                key={stage.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`journey-stage-card ${isCurrent ? 'is-active-card' : ''}`}
                onClick={() => setActiveStage(idx)}
                tabIndex={0}
                role="region"
                aria-label={`Stage ${stage.step}: ${stage.phaseName}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveStage(idx);
                }}
              >
                <div className="stage-card-header">
                  <span className="stage-num-pill">PHASE {stage.step}</span>
                  <span className="stage-state-tag">{stage.stateLabel}</span>
                </div>

                <h3 className="stage-card-title">{stage.phaseName}</h3>
                <p className="stage-card-subtitle">{stage.subtitle}</p>

                {/* Key Focus Areas (The 4 core progression elements) */}
                <div className="stage-keypoints-wrap">
                  <span className="keypoints-title">What You Master in Step {stage.step}:</span>
                  <ul className="keypoints-list">
                    {stage.keyPoints.map((point) => (
                      <li key={point} className="keypoint-item">
                        <span className="keypoint-check" aria-hidden="true">✓</span>
                        <span className="keypoint-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Barrier vs Breakthrough comparison */}
                <div className="stage-contrast-block">
                  <div className="contrast-cell barrier-cell">
                    <span className="contrast-tag tag-barrier">The Problem</span>
                    <p className="contrast-text">{stage.barrier}</p>
                  </div>

                  <div className="contrast-cell breakthrough-cell">
                    <span className="contrast-tag tag-breakthrough">How We Fix It</span>
                    <p className="contrast-text">{stage.breakthrough}</p>
                  </div>
                </div>

                {/* Drills Row */}
                <div className="stage-drills-row">
                  <span className="drills-row-title">Practice Drills:</span>
                  <div className="drills-tags-wrap">
                    {stage.drills.map((drill) => (
                      <span key={drill} className="drill-tag-bubble">
                        ✦ {drill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
