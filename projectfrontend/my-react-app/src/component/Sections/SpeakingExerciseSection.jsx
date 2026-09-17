import { useState, useMemo } from 'react';
import './Sections.css';
import './SpeakingExerciseSection.css';

const FILLER_PATTERNS = [
  { word: 'actually', label: '"actually"' },
  { word: 'basically', label: '"basically"' },
  { word: 'like', label: '"like"' },
  { word: 'umm', label: '"umm"' },
  { word: 'uhm', label: '"uhm"' },
  { word: 'you know', label: '"you know"' },
];

const SAMPLE_INTRO =
  'Hello! My name is Rahul. I graduated with a degree in Computer Science and currently work as a junior developer. I enjoy building web applications and collaborating with teams. I am focusing on improving my English communication so I can share my ideas clearly during meetings.';

export default function SpeakingExerciseSection() {
  const [userText, setUserText] = useState('');

  const { wordCount, charCount, detectedFillers, hasMyselfMistake } = useMemo(() => {
    const trimmed = userText.trim();
    const words = trimmed ? trimmed.split(/\s+/) : [];
    const lowerText = userText.toLowerCase();

    // Detect filler words
    const fillersFound = FILLER_PATTERNS.filter((item) => {
      const regex = new RegExp(`\\b${item.word}\\b`, 'i');
      return regex.test(lowerText);
    }).map((item) => item.label);

    // Detect "myself [name]" mistake: common in India (e.g., "Myself Rahul")
    const myselfMistake = /^\s*myself\s+[a-z]+/i.test(trimmed) || /\bmyself\s+[a-z]+/i.test(trimmed);

    return {
      wordCount: words.length,
      charCount: userText.length,
      detectedFillers: fillersFound,
      hasMyselfMistake: myselfMistake,
    };
  }, [userText]);

  const handleFillSample = () => {
    setUserText(SAMPLE_INTRO);
  };

  const handleClear = () => {
    setUserText('');
  };

  // Determine feedback status
  let statusClass = 'status-box-empty';
  let statusTitle = 'Start typing your introduction';
  let statusMessage =
    'Type your response to "Tell me about yourself" above. You will get live guidance on length, flow, and common mistakes.';

  if (wordCount > 0 && wordCount < 15) {
    statusClass = 'status-box-short';
    statusTitle = `Getting started (${wordCount} words)`;
    statusMessage =
      'A bit too short! In an interview or conversation, a good self-introduction is typically 40–80 words (around 30–45 seconds spoken). Add what you study or work on, and a key strength.';
  } else if (wordCount >= 15 && wordCount < 35) {
    statusClass = 'status-box-short';
    statusTitle = `Good progress (${wordCount} words)`;
    statusMessage =
      'Nice start! You have the basics down. Try adding one sentence about your career goal or why you are excited about this opportunity.';
  } else if (wordCount >= 35) {
    statusClass = 'status-box-good';
    statusTitle = `Great length (${wordCount} words)`;
    statusMessage =
      'Excellent length! Now try reading this out loud at a steady, relaxed pace. Make sure you pause naturally at periods and commas.';
  }

  return (
    <section className="editorial-section speaking-exercise-section">
      <div className="exercise-header">
        <div className="section-badge">
          <span className="section-badge-dot" />
          Interactive Speaking Practice
        </div>
        <h2 className="section-lead-title">
          TRY IT <span className="title-accent">YOURSELF.</span>
        </h2>
        <p className="exercise-intro">
          Reading advice is helpful, but English confidence only comes from practice. Try writing your
          answer to the most common question Indian learners face, and get instant feedback.
        </p>
      </div>

      <div className="exercise-layout-grid">
        {/* Left: Input card */}
        <div className="exercise-input-card">
          <div className="exercise-prompt-bar">
            <span className="exercise-prompt-label">Speaking Prompt #1</span>
            <span style={{ fontSize: '0.82rem', color: '#8c8a84' }}>Estimated time: 45 sec</span>
          </div>

          <h3 className="exercise-prompt-question">"Tell me about yourself."</h3>

          <textarea
            className="exercise-textarea"
            placeholder="Type your introduction here (e.g. Hello, my name is... I am currently studying / working as...)"
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            rows={6}
            aria-label="Your self-introduction"
          />

          <div className="exercise-meta-bar">
            <span>
              Words: <strong>{wordCount}</strong> | Characters: <strong>{charCount}</strong>
            </span>
            <span>Target: ~50–70 words</span>
          </div>

          <div className="exercise-controls">
            <button type="button" className="sample-fill-btn" onClick={handleFillSample}>
              Load Sample Template
            </button>
            {userText && (
              <button type="button" className="clear-btn" onClick={handleClear}>
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Right: Feedback & Structure */}
        <div className="exercise-feedback-card">
          <h4 className="feedback-card-heading">Live Writing & Speaking Guide</h4>

          {/* Status Box */}
          <div className={`feedback-status-box ${statusClass}`}>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>{statusTitle}</div>
            <div>{statusMessage}</div>
          </div>

          {/* Warning for "Myself [Name]" */}
          {hasMyselfMistake && (
            <div className="filler-warning-box">
              ⚠️ <strong>Common Indian English Habit:</strong> Avoid starting with{' '}
              <em>"Myself [Name]"</em>. It is grammatically incorrect in English. Instead, use{' '}
              <strong>"My name is..."</strong> or <strong>"I am..."</strong>.
            </div>
          )}

          {/* Filler Word Warning */}
          {detectedFillers.length > 0 && (
            <div className="filler-warning-box">
              ⚠️ <strong>Filler words detected:</strong> {detectedFillers.join(', ')}. When speaking,
              try to take a brief pause instead of repeating these words.
            </div>
          )}

          {/* Ideal Structure Breakdown */}
          <div className="ideal-structure-box">
            <span className="structure-title">Recommended 4-Step Formula</span>
            <ul className="structure-steps">
              <li>
                <span className="step-num">01.</span>
                <strong>Greeting & Name:</strong> "Hello, my name is [Name]."
              </li>
              <li>
                <span className="step-num">02.</span>
                <strong>Current Role / Studies:</strong> "I am currently working as / studying..."
              </li>
              <li>
                <span className="step-num">03.</span>
                <strong>Key Skill or Strength:</strong> "My core strength is solving problems in..."
              </li>
              <li>
                <span className="step-num">04.</span>
                <strong>Current Focus or Goal:</strong> "Right now, I am focusing on expanding..."
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
