import './Pages.css';

export default function SpeakingPracticePage({ onBookSession }) {
  const TOPICS = [
    {
      num: '01',
      title: 'Describe Your Morning Routine',
      prompt: 'Talk for 2 minutes without stopping. What is the first thing you do when you wake up? How do you plan your day? Mention time, tea/coffee, breakfast, and preparing for work/college.',
      starter: '“Every morning, I usually wake up around 6:30 AM. The first thing I do is drink a glass of warm water...”',
    },
    {
      num: '02',
      title: 'A Recent Challenge You Overcame',
      prompt: 'Describe a difficult situation at work, college, or home. What happened? How did you feel initially, and what steps did you take to resolve it?',
      starter: '“A few weeks ago, I faced a challenging deadline at my office where our team was falling behind...”',
    },
    {
      num: '03',
      title: 'Your Favorite Place in Your Hometown',
      prompt: 'Describe a street, park, cafe, or historical monument in your city. Why is it special to you? Describe what it looks like, the sounds, and why you enjoy visiting.',
      starter: '“My hometown is Indore, and one of my favorite spots is 56 Dukan. It is famous for its vibrant street food...”',
    },
    {
      num: '04',
      title: 'Why Spoken English is Important in India',
      prompt: 'Express your opinion on why English is considered a key career skill in India. Do you think talent matters more than language? Share your balanced viewpoint.',
      starter: '“In today’s professional landscape in India, English serves as a bridge between different states and global clients...”',
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <a href="#/">Home</a>
          <span className="breadcrumb-sep">/</span>
          <span>Free Resources</span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Daily Speaking Practice</span>
        </div>

        <a href="#/" className="back-to-home-btn">
          ← Back to Main Page
        </a>

        {/* Header */}
        <header className="page-header">
          <div className="page-badge">
            <span className="page-badge-dot" />
            Free Daily Practice Tool
          </div>
          <h1 className="page-main-title">
            DAILY SPEAKING <span className="page-title-accent">PRACTICE TOPICS.</span>
          </h1>
          <p className="page-lead-summary">
            Don't have a speaking partner today? Use these simple speaking topics and 2-minute timer drills to practice speaking English out loud at home.
          </p>
          <div className="page-meta-pills">
            <span className="meta-pill meta-pill-highlight">100% Free Practice</span>
            <span className="meta-pill">Daily Speaking Topics</span>
            <span className="meta-pill">2-Minute Practice Timer</span>
            <span className="meta-pill">Sentence Starters Included</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="page-layout-grid">
          <div className="page-main-col">
            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                The 2-Minute Voice Recorder Routine
              </h2>
              <p className="card-body-text">
                Follow this simple 3-step daily habit to build confidence without spending a single rupee:
              </p>
              <ul className="card-checklist">
                <li className="card-check-item">
                  <span className="check-icon">1</span>
                  <span><strong>Pick One Topic Below:</strong> Give yourself 30 seconds to think of 3 main points. Do not write down full sentences on paper.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">2</span>
                  <span><strong>Press Record on Your Phone:</strong> Set a timer for 2 minutes and speak continuously out loud. If you get stuck, pause calmly for 1 second and keep speaking.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">3</span>
                  <span><strong>Listen Back to Your Recording:</strong> Note down any filler words ("umm", "actually") or long pauses. Don't be self-critical — notice your progress over 14 days!</span>
                </li>
              </ul>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Featured Speaking Prompts
              </h2>
              <div className="accordion-list">
                {TOPICS.map((topic) => (
                  <div key={topic.num} className="accordion-item">
                    <h3 className="accordion-question">
                      <span style={{ color: 'var(--orange-color)', marginRight: '8px' }}>#{topic.num}</span>
                      {topic.title}
                    </h3>
                    <p className="accordion-answer" style={{ marginBottom: '10px' }}>
                      {topic.prompt}
                    </p>
                    <div style={{ background: 'rgba(255, 75, 38, 0.08)', padding: '10px 14px', borderRadius: '8px', borderLeft: '3px solid var(--orange-color)' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--orange-color)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                        Suggested Starter Sentence:
                      </span>
                      <p style={{ fontStyle: 'italic', fontSize: '0.86rem', color: '#dedcd4', margin: 0 }}>
                        {topic.starter}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="page-sidebar-col">
            <div className="sidebar-cta-card">
              <span className="sidebar-cta-badge">Want Live Practice?</span>
              <h3 className="sidebar-cta-title">Practice With a Live Partner</h3>
              <p className="sidebar-cta-desc">
                Solo practice is great, but real fluency comes from live back-and-forth conversations with supportive peers and coach guidance.
              </p>
              <button
                type="button"
                className="sidebar-action-btn"
                onClick={onBookSession}
              >
                <span>Join Daily Speaking Group</span>
                <span>→</span>
              </button>
              <a href="#/courses/spoken-english" className="sidebar-secondary-link">
                View Spoken English Details
              </a>
            </div>

            <div className="sidebar-facts-card">
              <h4 className="facts-heading">Daily Habit Tips</h4>
              <ul className="facts-list">
                <li className="fact-row">
                  <span className="fact-label">Recommended Time:</span>
                  <span className="fact-val">10 Mins / Day</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Best Practice Tool:</span>
                  <span className="fact-val">Phone Voice Recorder</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Key Focus:</span>
                  <span className="fact-val">Speaking Flow &gt; Accuracy</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
