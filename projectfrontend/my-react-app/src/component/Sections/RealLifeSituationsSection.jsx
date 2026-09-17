import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';
import './RealLifeSituationsSection.css';

gsap.registerPlugin(ScrollTrigger);

const SITUATIONS = [
  {
    step: '01',
    title: 'College & Classroom',
    context: 'Talking to a professor or classmate',
    instead: '“Sir, assignment late submit kar sakte hain kya?” or freezing in front of the teacher.',
    phrase: '“Good morning Sir, I was wondering if I could submit the assignment by tomorrow evening due to a minor health issue.”',
    structure: 'Polite greeting → Honest reason → Specific time request.',
  },
  {
    step: '02',
    title: 'Job Interview',
    context: 'Introducing yourself and answering questions',
    instead: 'Reciting your whole school marksheet or saying “Myself Rahul, I am from Indore.”',
    phrase: '“I recently completed my degree in Computer Science. In my final year project, I built a web application. I am excited about this role because it matches my problem-solving skills.”',
    structure: 'Background → Specific project/skill → Why this role excites you.',
  },
  {
    step: '03',
    title: 'Workplace & Standups',
    context: 'Speaking with a manager or teammate',
    instead: 'Keeping your mic muted during Zoom calls or saying only “Still working on the task.”',
    phrase: '“Yesterday I completed testing the login module. Today I am working on the payment screen, but I might need 10 minutes with Priya to clarify the API endpoint.”',
    structure: 'What you completed → What you are doing today → Help or blocker needed.',
  },
  {
    step: '04',
    title: 'Phone Call',
    context: 'Starting and continuing a conversation',
    instead: 'Getting nervous when receiving an unknown call and stammering “Hello... who is this?”',
    phrase: '“Hello, my name is Aman. I am calling regarding my job application submitted yesterday. Could you please connect me with the hiring team?”',
    structure: 'Friendly greeting + Your name → Purpose of the call → Polite request.',
  },
  {
    step: '05',
    title: 'Daily Conversation',
    context: 'Talking to someone new at a gathering',
    instead: 'Giving one-word replies like “Yes” or “No” followed by awkward silence.',
    phrase: '“Hi, nice to meet you! How long have you been in this city? By the way, I recently moved here from Indore.”',
    structure: 'Warm greeting → Friendly open-ended question → Brief personal detail.',
  },
];

export default function RealLifeSituationsSection() {
  const [practicedItems, setPracticedItems] = useState({});
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.situation-card');
      if (cards && cards.length) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePracticeClick = (index) => {
    setPracticedItems((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  return (
    <section className="editorial-section real-life-section" ref={sectionRef}>
      <div className="real-life-header">
        <div className="section-badge">
          <span className="section-badge-dot" />
          Practical Everyday Scenarios
        </div>
        <h2 className="section-lead-title">
          ENGLISH IN <span className="title-accent">REAL LIFE.</span>
        </h2>
        <p className="real-life-intro">
          You don’t need English for writing poetry. You need English for these 5 exact real-world
          situations. Here is how our students practice speaking with confidence.
        </p>
      </div>

      <div className="situations-timeline" ref={cardsRef}>
        {SITUATIONS.map((sit, idx) => {
          const isPracticed = Boolean(practicedItems[idx]);

          return (
            <div key={sit.step} className="situation-card">
              {/* Left Column */}
              <div className="situation-meta-col">
                <span className="situation-step-badge">SITUATION {sit.step}</span>
                <h3 className="situation-title">{sit.title}</h3>
                <p className="situation-context">{sit.context}</p>
              </div>

              {/* Center Column */}
              <div className="situation-contrast-col">
                <div className="contrast-box box-instead">
                  <span className="contrast-label">❌ What most learners say / do:</span>
                  <p style={{ margin: 0 }}>{sit.instead}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="situation-phrase-col">
                <span className="phrase-label">✓ Practical spoken phrase:</span>
                <blockquote className="phrase-quote">
                  {sit.phrase}
                </blockquote>
                <div className="phrase-structure">
                  <strong>Structure:</strong> {sit.structure}
                </div>
                <button
                  type="button"
                  className="phrase-practice-btn"
                  onClick={() => handlePracticeClick(idx)}
                >
                  <span>{isPracticed ? '✓ Spoke this out loud!' : '🗣 Practice speaking this out loud'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
