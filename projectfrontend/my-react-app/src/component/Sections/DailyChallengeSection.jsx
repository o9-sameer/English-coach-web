import { useState, useEffect } from 'react';
import './Sections.css';
import './DailyChallengeSection.css';

const CHALLENGES = [
  {
    day: 1,
    title: 'Day 01',
    word: 'Articulate',
    pronunciation: '/ɑːrˈtɪkjuleɪt/',
    wordType: 'Verb / Adjective',
    meaning:
      'To express an idea or feeling clearly and effectively using spoken or written words.',
    example:
      'During the meeting, she was able to articulate her team\'s progress very clearly.',
    phrase: 'To cut to the chase',
    phraseMeaning:
      'To come directly to the main point without wasting time on small, unnecessary details.',
    phraseUsage:
      'Let me cut to the chase: we need to submit the final report by 5 PM today.',
    task: 'Describe your favorite street food or home-cooked meal.',
    taskHint:
      'Speak about what it is, who makes it best, and why you love it. Try to speak non-stop for 30 seconds!',
  },
  {
    day: 2,
    title: 'Day 02',
    word: 'Hesitate',
    pronunciation: '/ˈhezɪteɪt/',
    wordType: 'Verb',
    meaning:
      'To pause before saying or doing something because you feel nervous, shy, or uncertain.',
    example:
      'Don\'t hesitate to speak up during team discussions; your opinions matter.',
    phrase: 'On the same page',
    phraseMeaning:
      'To have the exact same understanding or agreement on a topic or plan.',
    phraseUsage:
      'Before we start coding, let us make sure everyone is on the same page regarding the requirements.',
    task: 'Talk about one small habit you want to build this month.',
    taskHint:
      'Mention what the habit is, why it is important for you, and when during the day you will practice it.',
  },
  {
    day: 3,
    title: 'Day 03',
    word: 'Elaborate',
    pronunciation: '/ɪˈlæbəreɪt/',
    wordType: 'Verb',
    meaning:
      'To explain something in greater detail or add more information to make it clearer.',
    example:
      'Could you please elaborate on your second point? I want to understand your suggestion better.',
    phrase: 'Touch base',
    phraseMeaning:
      'To briefly contact or connect with someone to update them or check progress.',
    phraseUsage:
      'I will touch base with you tomorrow morning after reviewing your presentation slides.',
    task: 'Explain how you travel to college or your office every day.',
    taskHint:
      'Describe your route, the vehicle you take, and one interesting thing you see along the way.',
  },
  {
    day: 4,
    title: 'Day 04',
    word: 'Spontaneous',
    pronunciation: '/spɒnˈteɪniəs/',
    wordType: 'Adjective',
    meaning:
      'Happening naturally and easily without needing long preparation or unnatural pauses.',
    example:
      'With daily practice, speaking English in public will become completely spontaneous.',
    phrase: 'Go the extra mile',
    phraseMeaning:
      'To put in more effort than what is expected in order to do something really well.',
    phraseUsage:
      'Our coach always goes the extra mile to help every student feel comfortable while speaking.',
    task: 'Describe a memorable trip you took with your friends or family.',
    taskHint:
      'Where did you go, what made it special, and what is one funny or happy memory from that trip?',
  },
  {
    day: 5,
    title: 'Day 05',
    word: 'Concise',
    pronunciation: '/kənˈsaɪs/',
    wordType: 'Adjective',
    meaning:
      'Expressing what needs to be said clearly and in few words, without rambling.',
    example:
      'Keep your self-introduction concise so the interviewer stays interested throughout.',
    phrase: 'In a nutshell',
    phraseMeaning:
      'In summary; stating the main idea in just a few short sentences.',
    phraseUsage:
      'In a nutshell, speaking English every day is the fastest way to overcome shyness.',
    task: 'Share one career goal you want to achieve in the next 12 months.',
    taskHint:
      'State what role or company you want to join, and what skills you are currently learning to get there.',
  },
];

const TIMER_INITIAL = 30;

export default function DailyChallengeSection() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_INITIAL);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentChallenge = CHALLENGES[activeDayIndex];

  // Handle Day Tab Switch
  const handleSelectDay = (index) => {
    setActiveDayIndex(index);
    setTimeLeft(TIMER_INITIAL);
    setIsRunning(false);
    setIsCompleted(false);
  };

  // Timer countdown logic
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          setIsCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartResume = () => {
    if (timeLeft === 0) {
      setTimeLeft(TIMER_INITIAL);
      setIsCompleted(false);
    }
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(TIMER_INITIAL);
    setIsCompleted(false);
  };

  // Calculate progress percentage
  const progressPercent = Math.min(
    100,
    Math.round(((TIMER_INITIAL - timeLeft) / TIMER_INITIAL) * 100)
  );

  return (
    <section className="editorial-section daily-challenge-section">
      <div className="challenge-header">
        <div className="section-badge">
          <span className="section-badge-dot" />
          5-Day Fluency Habit
        </div>
        <h2 className="section-lead-title">
          DAILY ENGLISH <span className="title-accent">CHALLENGE.</span>
        </h2>
        <p className="challenge-intro">
          You don't need 3 hours a day to improve. Just 1 word, 1 conversational phrase, and 30
          seconds of out-loud speaking practice every day will transform your confidence within weeks.
        </p>
      </div>

      {/* Day Selector Tabs */}
      <div className="challenge-tabs-container" role="tablist" aria-label="Daily challenges">
        {CHALLENGES.map((item, idx) => {
          const isActive = activeDayIndex === idx;
          return (
            <button
              key={item.day}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`challenge-tab-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => handleSelectDay(idx)}
            >
              <span className="challenge-tab-dot" />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Day Content Grid */}
      <div className="challenge-grid">
        {/* Left: Vocabulary & Conversational Phrase */}
        <div className="challenge-vocab-card">
          {/* Word Block */}
          <div className="vocab-block">
            <span className="vocab-type-badge">Today's Word • {currentChallenge.wordType}</span>
            <h3 className="vocab-word-title">
              {currentChallenge.word}
              <span className="vocab-pronunciation">{currentChallenge.pronunciation}</span>
            </h3>
            <p className="vocab-meaning">
              <strong>Meaning:</strong> {currentChallenge.meaning}
            </p>
            <div className="vocab-example-box">
              <strong>Example:</strong> "{currentChallenge.example}"
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

          {/* Phrase Block */}
          <div className="vocab-block">
            <span className="vocab-type-badge" style={{ color: '#ff914d', background: 'rgba(255,145,77,0.1)' }}>
              Spoken Phrase of the Day
            </span>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>
              "{currentChallenge.phrase}"
            </h4>
            <p className="vocab-meaning">
              <strong>Meaning:</strong> {currentChallenge.phraseMeaning}
            </p>
            <div className="vocab-example-box">
              <strong>How to say it:</strong> "{currentChallenge.phraseUsage}"
            </div>
          </div>
        </div>

        {/* Right: 30-Second Speaking Task with Live Timer */}
        <div className="challenge-task-card">
          <div>
            <span className="task-badge">30-Second Speaking Challenge</span>
            <h3 className="task-question">{currentChallenge.task}</h3>
            <p className="task-hint">
              💡 <strong>Tip:</strong> {currentChallenge.taskHint}
            </p>
          </div>

          <div className="speaking-timer-box">
            <div
              className={`timer-digits ${isRunning ? 'is-running' : ''} ${
                isCompleted ? 'is-completed' : ''
              }`}
            >
              00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
            </div>

            {/* Progress bar */}
            <div className="timer-bar-track">
              <div
                className={`timer-bar-fill ${isCompleted ? 'is-completed' : ''}`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Controls */}
            <div className="timer-controls">
              {!isRunning ? (
                <button
                  type="button"
                  className="timer-btn-primary"
                  onClick={handleStartResume}
                >
                  {timeLeft === 0
                    ? 'Practice Again'
                    : timeLeft < TIMER_INITIAL
                    ? 'Resume'
                    : 'Start 30s Timer'}
                </button>
              ) : (
                <button
                  type="button"
                  className="timer-btn-primary"
                  onClick={handlePause}
                >
                  Pause
                </button>
              )}

              {(isRunning || timeLeft < TIMER_INITIAL) && (
                <button
                  type="button"
                  className="timer-btn-secondary"
                  onClick={handleReset}
                >
                  Reset
                </button>
              )}
            </div>

            {/* Completed celebration message */}
            {isCompleted && (
              <div className="timer-success-message">
                🎉 <strong>Awesome effort!</strong> You spoke out loud for 30 seconds. Repeat this
                tomorrow to build lasting muscle memory!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
