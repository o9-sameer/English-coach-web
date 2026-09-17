import './Pages.css';

export default function TeachingApproachPage({ onBookSession }) {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <a href="#/">Home</a>
          <span className="breadcrumb-sep">/</span>
          <span>About</span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Teaching Approach</span>
        </div>

        <a href="#/" className="back-to-home-btn">
          ← Back to Main Page
        </a>

        {/* Header */}
        <header className="page-header">
          <div className="page-badge">
            <span className="page-badge-dot" />
            Our Unique Methodology
          </div>
          <h1 className="page-main-title">
            THE PRACTICAL <span className="page-title-accent">SPEAKING SYSTEM.</span>
          </h1>
          <p className="page-lead-summary">
            Why traditional grammar coaching fails Indian learners, and how our interactive,
            out-loud methodology helps you speak naturally without translating from Hindi in your mind.
          </p>
          <div className="page-meta-pills">
            <span className="meta-pill meta-pill-highlight">Stop Mind Translation</span>
            <span className="meta-pill">80% Speaking · 20% Theory</span>
            <span className="meta-pill">Daily Partner Practice</span>
            <span className="meta-pill">Real-Life Situation Practice</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="page-layout-grid">
          <div className="page-main-col">
            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                The Real Problem: Translating from Hindi in Your Mind
              </h2>
              <p className="card-body-text">
                When you want to speak in English, your brain typically does this:
              </p>
              <div className="takeaway-box">
                <span className="takeaway-title">The Exhausting Old Habit</span>
                <p className="takeaway-text">
                  Think in Hindi → Search English words → Check grammar rules in head → Panic about mistakes → Speak broken words after a 4-second awkward pause.
                </p>
              </div>
              <p className="card-body-text" style={{ marginTop: '16px' }}>
                Our teaching approach breaks this habit completely. We train you through <em>Direct Sentence Practice</em> — practicing common spoken phrases repeatedly until words flow naturally without any Hindi translation.
              </p>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Our 4 Simple Rules for Learning
              </h2>
              <ul className="card-checklist">
                <li className="card-check-item">
                  <span className="check-icon">01</span>
                  <span><strong>Short Sentence Patterns:</strong> Instead of memorizing complex grammar books, you learn 2-to-3 word everyday speaking patterns like <em>"Could you please...", "I was thinking that...", "The best part is..."</em>.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">02</span>
                  <span><strong>The 1-Second Calm Pause:</strong> Indian learners often rush and get nervous. We teach you how to take a calm 1-second breath before answering so you sound confident and clear.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">03</span>
                  <span><strong>Daily WhatsApp Voice Notes:</strong> Every evening, you send a short 1-minute voice note describing your day. Rahul Sir listens and guides your pronunciation personally.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">04</span>
                  <span><strong>Live Roleplay Drills:</strong> You practice ordering at coffee shops, asking for a salary raise, explaining project bugs, and answering tough HR questions live on camera.</span>
                </li>
              </ul>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                How We Compare to Traditional Institutes
              </h2>
              <div className="examples-grid">
                <div className="example-card">
                  <h3 className="example-term" style={{ color: '#ff6b6b' }}>Traditional Institutes</h3>
                  <p className="example-meaning">Heavy notebook writing, memorizing verb forms, teacher lectures 90% of the time, zero individual speaking practice.</p>
                  <p className="example-sentence">Result: Good at passing tests, still terrified of opening mouth in public.</p>
                </div>
                <div className="example-card">
                  <h3 className="example-term" style={{ color: '#34d399' }}>Our Practical System</h3>
                  <p className="example-meaning">100% focused on out-loud speech, daily 1-on-1 peer breakout rooms, instant constructive feedback from Rahul Sir.</p>
                  <p className="example-sentence">Result: Natural conversational ease and interview confidence in 60 days.</p>
                </div>
              </div>
            </section>
          </div>

          <aside className="page-sidebar-col">
            <div className="sidebar-cta-card">
              <span className="sidebar-cta-badge">Experience The Method</span>
              <h3 className="sidebar-cta-title">Try a Demo Class</h3>
              <p className="sidebar-cta-desc">
                Attend an interactive speaking session and experience how easy it is to speak without translating in your head.
              </p>
              <button
                type="button"
                className="sidebar-action-btn"
                onClick={onBookSession}
              >
                <span>Join a Demo Class</span>
                <span>→</span>
              </button>
              <a href="#/courses/spoken-english" className="sidebar-secondary-link">
                Explore Spoken English Batch
              </a>
            </div>

            <div className="sidebar-facts-card">
              <h4 className="facts-heading">Core Methodology</h4>
              <ul className="facts-list">
                <li className="fact-row">
                  <span className="fact-label">Speaking Ratio:</span>
                  <span className="fact-val">80% Student Speaking</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Batch Size:</span>
                  <span className="fact-val">Max 12-15 Students</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Feedback:</span>
                  <span className="fact-val">Personal Daily Audio</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Duration:</span>
                  <span className="fact-val">60 Days Intensive</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
