import { useState } from 'react';
import './Sections.css';
import './GoalSelectorSection.css';

const GOALS_DATA = {
  speaking: {
    id: 'speaking',
    tabLabel: 'Daily Speaking',
    icon: '💬',
    badge: 'Everyday Fluency',
    title: 'Daily Spoken English & Conversations',
    summary:
      'Practice everyday conversations, sentence formation, and speaking confidence so you can talk to anyone without hesitation or awkward pauses.',
    focusAreas: [
      'Stop translating sentences from Hindi in your mind',
      'Learn useful vocabulary for everyday situations',
      'Daily 1-on-1 partner practice on simple topics',
      'Overcoming stage fear and shyness in groups',
    ],
    batchName: 'Daily Spoken English Batch',
    batchFee: '₹999 / month',
    batchDesc: 'Live interactive speaking sessions on Google Meet (Mon–Fri).',
    ctaText: 'Explore Spoken English Batch',
    ctaLink: '#/courses/spoken-english',
  },
  interview: {
    id: 'interview',
    tabLabel: 'Job Interview',
    icon: '🎯',
    badge: 'Campus & Career Placement',
    title: 'Job Interview & Campus Placement English',
    summary:
      'Practice impressive self-introductions, common HR questions, and professional communication to crack IT, banking, and corporate interviews.',
    focusAreas: [
      'Master the 90-second "Tell Me About Yourself" pitch',
      'Top 25 tricky HR questions with structured answers',
      'Group discussion (GD) entry points & body language',
      '5 video mock interviews with individual feedback',
    ],
    batchName: 'Interview Crash Course (30 Days)',
    batchFee: '₹1,499 Total Fee',
    batchDesc: 'Targeted for TCS, Infosys, Wipro, private banks & MNCs.',
    ctaText: 'Explore Interview Prep Course',
    ctaLink: '#/courses/interview-prep',
  },
  college: {
    id: 'college',
    tabLabel: 'College & Studies',
    icon: '🎓',
    badge: 'Student Confidence',
    title: 'College Classroom & Presentation English',
    summary:
      'Improve classroom communication, give presentations without trembling, and talk comfortably with professors, seniors, and classmates.',
    focusAreas: [
      'Giving class presentations without stage fright',
      'Talking to professors and clearing doubts politely',
      'Participating actively in college seminars & fests',
      'Preparing early for final year campus placement rounds',
    ],
    batchName: 'Student Placement & Speaking Track',
    batchFee: '₹999 / month',
    batchDesc: 'Flexible morning & afternoon batch timings for students.',
    ctaText: 'Book Free Student Demo',
    ctaLink: '#contact',
  },
  workplace: {
    id: 'workplace',
    tabLabel: 'Workplace & Office',
    icon: '💼',
    badge: 'Corporate Communication',
    title: 'Office Meetings & Professional English',
    summary:
      'Practice sprint standup updates, client meetings, professional emails, and team discussions so you speak with confidence at work.',
    focusAreas: [
      'Delivering clear 60-second agile standup updates',
      'Speaking comfortably in Zoom calls with US/UK clients',
      'Polite phrases for disagreeing or raising blockers',
      'Writing crisp, professional emails without errors',
    ],
    batchName: 'Workplace English Track (45 Days)',
    batchFee: '₹1,999 Total Fee',
    batchDesc: 'Evening & weekend batches for working IT & corporate professionals.',
    ctaText: 'Explore Workplace English',
    ctaLink: '#/courses/workplace-english',
  },
};

export default function GoalSelectorSection({ onBookSession }) {
  const [activeGoal, setActiveGoal] = useState('speaking');
  const current = GOALS_DATA[activeGoal];

  const handleCtaClick = (e, link) => {
    if (link === '#contact') {
      e.preventDefault();
      if (onBookSession) {
        onBookSession();
      } else {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="editorial-section goal-selector-section">
      <div className="goal-header">
        <div className="section-badge">
          <span className="section-badge-dot" />
          Personalized Learning Focus
        </div>
        <h2 className="section-lead-title">
          WHAT DO YOU WANT <span className="title-accent">TO IMPROVE?</span>
        </h2>
        <p className="goal-intro">
          Every learner has a different reason for improving their English. Choose your main goal
          below to see the exact learning focus and practice plan tailored for you.
        </p>
      </div>

      {/* 4 Interactive Goal Tabs */}
      <div className="goal-tabs-container" role="tablist" aria-label="Learning Goals">
        {Object.values(GOALS_DATA).map((goal) => {
          const isActive = activeGoal === goal.id;

          return (
            <button
              key={goal.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`goal-tab-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => setActiveGoal(goal.id)}
            >
              <span className="goal-tab-icon">{goal.icon}</span>
              <span>{goal.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Display Card */}
      <div className="goal-display-card" role="tabpanel">
        <div className="goal-display-left">
          <span className="goal-selected-badge">
            <span className="section-badge-dot" />
            {current.badge}
          </span>
          <h3 className="goal-selected-title">{current.title}</h3>
          <p className="goal-selected-summary">{current.summary}</p>

          <div className="goal-focus-list-wrap">
            <span className="goal-focus-heading">What You Will Practice:</span>
            <div className="goal-focus-grid">
              {current.focusAreas.map((item) => (
                <div key={item} className="goal-focus-item">
                  <span className="goal-focus-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="goal-action-box">
          <span className="action-box-badge">Recommended Batch</span>
          <h4 className="action-box-title">{current.batchName}</h4>
          <p className="action-box-desc">{current.batchDesc}</p>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--orange-color)' }}>
            {current.batchFee}
          </div>
          <a
            href={current.ctaLink}
            className="goal-cta-btn"
            onClick={(e) => handleCtaClick(e, current.ctaLink)}
          >
            <span>{current.ctaText}</span>
            <span>→</span>
          </a>
          <button
            type="button"
            className="goal-secondary-btn"
            onClick={onBookSession}
            style={{ background: 'none', border: 'none' }}
          >
            Or book a free 20-min counseling call
          </button>
        </div>
      </div>
    </section>
  );
}
