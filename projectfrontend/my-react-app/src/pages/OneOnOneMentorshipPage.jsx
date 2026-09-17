import './Pages.css';

export default function OneOnOneMentorshipPage({ onBookSession }) {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <a href="#/">Home</a>
          <span className="breadcrumb-sep">/</span>
          <span>Courses</span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">1-on-1 Mentorship</span>
        </div>

        <a href="#/" className="back-to-home-btn">
          ← Back to Main Page
        </a>

        {/* Header */}
        <header className="page-header">
          <div className="page-badge">
            <span className="page-badge-dot" />
            Personal 1-on-1 Coaching
          </div>
          <h1 className="page-main-title">
            1-ON-1 PERSONAL <span className="page-title-accent">MENTORSHIP.</span>
          </h1>
          <p className="page-lead-summary">
            Private, dedicated speaking sessions directly with Rahul Sir. A 100% personalized plan
            tailored to your weak areas, flexible timings, and career goals.
          </p>
          <div className="page-meta-pills">
            <span className="meta-pill meta-pill-highlight">₹2,999 / Month</span>
            <span className="meta-pill">1-on-1 Private Sessions</span>
            <span className="meta-pill">Personalized Course Plan</span>
            <span className="meta-pill">Flexible Timings</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="page-layout-grid">
          <div className="page-main-col">
            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Why Choose 1-on-1 Mentorship?
              </h2>
              <p className="card-body-text">
                Group classes are great for general practice, but if you feel very shy speaking in front of others, have an urgent interview coming up, or want personal attention on your individual pronunciation, 1-on-1 coaching gives you the fastest results.
              </p>
              <p className="card-body-text">
                Every single minute of the session is dedicated entirely to you speaking, receiving friendly real-time guidance, and correcting your sentence structures on the spot.
              </p>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                What Makes It Personalized
              </h2>
              <ul className="card-checklist">
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Personal Speaking Assessment:</strong> In session #1, Rahul Sir evaluates your speaking flow, hesitation points, grammar doubts, and pronunciation areas to focus on.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Customized Industry Context:</strong> Practice using scenarios from your real job — reviewing your actual slide decks, rehearsing your real client calls, or practicing your specific HR questions.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Flexible Scheduling:</strong> Book sessions at times that fit your work schedule — early mornings, late evenings, or weekend intensive slots.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Direct WhatsApp Mentorship:</strong> Send voice notes anytime between sessions for quick pronunciation checks and daily habit tracking.</span>
                </li>
              </ul>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Ideal For
              </h2>
              <div className="examples-grid">
                <div className="example-card">
                  <h3 className="example-term">Working Executives & Leads</h3>
                  <p className="example-meaning">Professionals who cannot attend standard group timings and need fast, discreet, high-level improvement.</p>
                </div>
                <div className="example-card">
                  <h3 className="example-term">High-Anxiety Learners</h3>
                  <p className="example-meaning">Individuals who feel too shy or overwhelmed to speak in front of other students initially.</p>
                </div>
              </div>
            </section>
          </div>

          <aside className="page-sidebar-col">
            <div className="sidebar-cta-card">
              <span className="sidebar-cta-badge">Limited Slots</span>
              <h3 className="sidebar-cta-title">Apply for Mentorship</h3>
              <p className="sidebar-cta-desc">
                Rahul Sir only mentors 8 private students per month to maintain the highest standard of personal attention.
              </p>
              <button
                type="button"
                className="sidebar-action-btn"
                onClick={onBookSession}
              >
                <span>Apply for 1-on-1 (₹2,999)</span>
                <span>→</span>
              </button>
              <a href="#/about/coach" className="sidebar-secondary-link">
                Learn more about Rahul Sir
              </a>
            </div>

            <div className="sidebar-facts-card">
              <h4 className="facts-heading">Program Details</h4>
              <ul className="facts-list">
                <li className="fact-row">
                  <span className="fact-label">Investment:</span>
                  <span className="fact-val">₹2,999 / month</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Session Format:</span>
                  <span className="fact-val">1-on-1 Google Meet</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Sessions:</span>
                  <span className="fact-val">12 Private Hours/Month</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Access:</span>
                  <span className="fact-val">Direct WhatsApp Priority</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
