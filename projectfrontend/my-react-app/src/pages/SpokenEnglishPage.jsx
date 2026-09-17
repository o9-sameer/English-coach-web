import './Pages.css';

export default function SpokenEnglishPage({ onBookSession }) {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <a href="#/">Home</a>
          <span className="breadcrumb-sep">/</span>
          <span>Courses</span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Spoken English</span>
        </div>

        <a href="#/" className="back-to-home-btn">
          ← Back to Main Page
        </a>

        {/* Header */}
        <header className="page-header">
          <div className="page-badge">
            <span className="page-badge-dot" />
            Most Popular Program
          </div>
          <h1 className="page-main-title">
            DAILY SPOKEN <span className="page-title-accent">ENGLISH BATCH.</span>
          </h1>
          <p className="page-lead-summary">
            A 60-day practical speaking course to remove hesitation, stop translating from Hindi in your head,
            and speak simple, fluent English in everyday life.
          </p>
          <div className="page-meta-pills">
            <span className="meta-pill meta-pill-highlight">₹999 / Month</span>
            <span className="meta-pill">60-Day Program</span>
            <span className="meta-pill">Mon to Fri Live Batches</span>
            <span className="meta-pill">Basic to Confident Spoken English</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="page-layout-grid">
          <div className="page-main-col">
            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                What You Will Learn in 60 Days
              </h2>
              <ul className="card-checklist">
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Overcome Stage Fear & Hesitation:</strong> Simple speaking practice so you stop feeling shy or nervous in front of others.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Sentence Formation Without Translating:</strong> Think directly in English using 50 core structural frameworks.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Everyday Spoken Vocabulary:</strong> 300+ practical words and phrases for shopping, traveling, social visits, and dining out.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Clear Pronunciation & Vocal Rhythm:</strong> Fixing common mother-tongue influence (MTI) errors in Indian English.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Daily 1-on-1 Practice:</strong> Breakout rooms where you converse with assigned speaking partners every single day.</span>
                </li>
              </ul>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Weekly Curriculum Roadmap
              </h2>
              <div className="examples-grid">
                <div className="example-card">
                  <h3 className="example-term">Weeks 1 – 2</h3>
                  <p className="example-meaning"><strong>Foundation & Fear Removal:</strong> Daily speaking starters, overcoming self-doubt, short out-loud exercises, eliminating panic.</p>
                </div>
                <div className="example-card">
                  <h3 className="example-term">Weeks 3 – 4</h3>
                  <p className="example-meaning"><strong>Stopping Translation:</strong> Direct sentence linking, connector words (although, however, moreover), narrative storytelling.</p>
                </div>
                <div className="example-card">
                  <h3 className="example-term">Weeks 5 – 6</h3>
                  <p className="example-meaning"><strong>Conversation Flow:</strong> Handling phone calls, debating polite disagreements, sharing opinions, asking questions naturally.</p>
                </div>
                <div className="example-card">
                  <h3 className="example-term">Weeks 7 – 8</h3>
                  <p className="example-meaning"><strong>Real-Life Fluency:</strong> Extempore speaking, situational roleplays, group discussions, and final graduation presentation.</p>
                </div>
              </div>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Batch Timings & Format
              </h2>
              <p className="card-body-text">
                Live online classes are conducted on Google Meet Monday through Friday with 1-hour sessions. Multiple batch slots available to accommodate college students, working professionals, and homemakers:
              </p>
              <ul className="card-checklist">
                <li className="card-check-item">
                  <span className="check-icon">⏰</span>
                  <span><strong>Morning Batch:</strong> 7:30 AM – 8:30 AM (Ideal for students & early office-goers)</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">⏰</span>
                  <span><strong>Afternoon Batch:</strong> 3:00 PM – 4:00 PM (Ideal for homemakers & college students)</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">⏰</span>
                  <span><strong>Evening Batch:</strong> 8:00 PM – 9:00 PM (Most popular for corporate professionals)</span>
                </li>
              </ul>
            </section>
          </div>

          <aside className="page-sidebar-col">
            <div className="sidebar-cta-card">
              <span className="sidebar-cta-badge">Enrollment Open</span>
              <h3 className="sidebar-cta-title">Join Next Batch</h3>
              <p className="sidebar-cta-desc">
                Only 15 students per batch to guarantee individual speaking attention for everyone. Reserve your seat today.
              </p>
              <button
                type="button"
                className="sidebar-action-btn"
                onClick={onBookSession}
              >
                <span>Enroll for ₹999 / mo</span>
                <span>→</span>
              </button>
              <a href="#/courses/1-on-1-mentorship" className="sidebar-secondary-link">
                Need 1-on-1 Mentorship instead?
              </a>
            </div>

            <div className="sidebar-facts-card">
              <h4 className="facts-heading">Course Summary</h4>
              <ul className="facts-list">
                <li className="fact-row">
                  <span className="fact-label">Price:</span>
                  <span className="fact-val">₹999 / month</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Duration:</span>
                  <span className="fact-val">2 Months (60 Days)</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Platform:</span>
                  <span className="fact-val">Live Google Meet</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Recordings:</span>
                  <span className="fact-val">Class notes + Audio</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
