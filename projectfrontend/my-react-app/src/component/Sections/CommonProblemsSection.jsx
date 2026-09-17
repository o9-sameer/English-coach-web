import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';
import './CommonProblemsSection.css';

gsap.registerPlugin(ScrollTrigger);

const PROBLEMS = [
  {
    id: 'problem-1',
    num: '01',
    statement: '“I understand English, but I hesitate to speak.”',
    tag: 'Hesitation & Shyness',
    detail:
      'You can watch English movies and understand your colleagues easily, but the moment someone asks you to reply out loud, your throat tightens and words refuse to come out.',
    solution:
      'How we fix this: Daily 5-minute low-pressure speaking drills where you speak out loud without fear of judgment.',
  },
  {
    id: 'problem-2',
    num: '02',
    statement: '“I translate Hindi sentences in my head.”',
    tag: 'Mind Translation',
    detail:
      'You construct the entire sentence in Hindi first, then try to find English words and grammar rules. This causes awkward 4-to-5 second pauses before every sentence you say.',
    solution:
      'How we fix this: Direct speech pattern practice that connects thoughts straight to English chunks without Hindi translation.',
  },
  {
    id: 'problem-3',
    num: '03',
    statement: '“I know grammar, but I can’t use it while speaking.”',
    tag: 'Passive vs Active English',
    detail:
      'You scored decent marks on written grammar tests in school, but while speaking live, you get confused between past, present, and prepositions.',
    solution:
      'How we fix this: We stop passive book theory and train active speech reflexes through real conversational roleplays.',
  },
  {
    id: 'problem-4',
    num: '04',
    statement: '“I don’t know what to say in conversations.”',
    tag: 'Conversation Flow',
    detail:
      'After a basic "Hello, how are you?", you run out of things to say. Conversations feel awkward and die within 20 seconds.',
    solution:
      'How we fix this: Learn simple storytelling frameworks and follow-up question starters to keep conversations flowing naturally.',
  },
  {
    id: 'problem-5',
    num: '05',
    statement: '“I lose confidence while speaking in front of others.”',
    tag: 'Fear of Judgment',
    detail:
      'You constantly worry that people will laugh at your accent, point out a wrong word, or think less of you if you make a small mistake.',
    solution:
      'How we fix this: A supportive, warm batch environment where making mistakes is welcomed as the first step to progress.',
  },
];

export default function CommonProblemsSection() {
  const [selectedProblems, setSelectedProblems] = useState({});
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.problem-card');
      if (cards && cards.length) {
        gsap.fromTo(
          cards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleProblem = (id) => {
    setSelectedProblems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="editorial-section common-problems-section" ref={sectionRef}>
      <div className="problems-header">
        <div className="section-badge">
          <span className="section-badge-dot" />
          Common Indian Learner Challenges
        </div>
        <h2 className="section-lead-title">
          DO YOU FACE <span className="title-accent">THESE PROBLEMS?</span>
        </h2>
        <p className="problems-intro">
          Most Indian learners know English vocabulary, but get stuck when speaking out loud.
          If any of these sound familiar, remember: it is not your fault — traditional school teaching never gave you out-loud speaking practice.
        </p>
      </div>

      <div className="problems-grid" ref={cardsRef}>
        {PROBLEMS.map((problem) => {
          const isSelected = Boolean(selectedProblems[problem.id]);

          return (
            <div key={problem.id} className="problem-card">
              <div className="problem-card-top">
                <span className="problem-index-badge">PROBLEM {problem.num}</span>
                <span className="problem-tag">{problem.tag}</span>
              </div>

              <div className="problem-card-body">
                <h3 className="problem-statement">{problem.statement}</h3>
                <p className="problem-detail" style={{ marginTop: '12px' }}>
                  {problem.detail}
                </p>
              </div>

              <div className="problem-card-footer">
                <button
                  type="button"
                  className={`problem-empathy-btn ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => toggleProblem(problem.id)}
                  aria-pressed={isSelected}
                >
                  <span>{isSelected ? '✓ I Face This Problem' : '+ I Face This Too'}</span>
                </button>

                {isSelected && (
                  <div className="problem-solution-note">
                    <strong>Rahul Sir’s Advice:</strong> {problem.solution}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
