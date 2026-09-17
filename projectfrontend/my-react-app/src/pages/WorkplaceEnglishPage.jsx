import './Pages.css';

export default function WorkplaceEnglishPage({ onBookSession }) {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <a href="#/">Home</a>
          <span className="breadcrumb-sep">/</span>
          <span>Courses</span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Workplace English</span>
        </div>

        <a href="#/" className="back-to-home-btn">
          ← Back to Main Page
        </a>

        {/* Header */}
        <header className="page-header">
          <div className="page-badge">
            <span className="page-badge-dot" />
            Corporate Communication Track
          </div>
          <h1 className="page-main-title">
            WORKPLACE & <span className="page-title-accent">OFFICE ENGLISH.</span>
          </h1>
          <p className="page-lead-summary">
            Designed for software engineers, banking staff, and team leads
            who want to speak confidently in team meetings, client calls, and project presentations.
          </p>
          <div className="page-meta-pills">
            <span className="meta-pill meta-pill-highlight">₹1,999 Total Fee</span>
            <span className="meta-pill">45-Day Program</span>
            <span className="meta-pill">Client Call Practice</span>
            <span className="meta-pill">Professional Email Writing</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="page-layout-grid">
          <div className="page-main-col">
            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Stop Staying Silent in Office Meetings
              </h2>
              <p className="card-body-text">
                Many hardworking Indian professionals do most of the difficult technical work, but someone else who speaks fluent English gives the demo and gets the appreciation.
              </p>
              <p className="card-body-text">
                This course helps you speak up without fear, explain your updates clearly, talk to managers and clients easily, and get the growth you deserve.
              </p>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Key Skills Developed
              </h2>
              <ul className="card-checklist">
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Agile Standup & Sprint Updates:</strong> Delivering concise 60-second updates on what you did yesterday, what you're doing today, and current blockers without rambling.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Handling Onshore & Client Calls:</strong> Phrases for asking clients to repeat themselves politely, negotiating deadlines, and handling scope changes.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Delivering Persuasive Slide Demos:</strong> Hooking your audience, transitioning between PowerPoint slides smoothly, and handling challenging Q&A sessions.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Professional Email Etiquette:</strong> Writing crisp, assertive emails without sounding aggressive or overly apologetic.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Disagreeing Diplomatically:</strong> Challenging managerial decisions or coworker proposals respectfully using phrases like <em>"I see your point, however, have we considered..."</em>.</span>
                </li>
              </ul>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Real-World Simulation Drills
              </h2>
              <div className="examples-grid">
                <div className="example-card">
                  <h3 className="example-term">Weekly Sprint Review</h3>
                  <p className="example-meaning">Live roleplay where you explain a delayed feature release to a demanding client with calm confidence.</p>
                </div>
                <div className="example-card">
                  <h3 className="example-term">Annual Appraisal Pitch</h3>
                  <p className="example-meaning">Roleplay of your 1-on-1 performance review with your manager, articulating achievements and asking for a raise.</p>
                </div>
              </div>
            </section>
          </div>

          <aside className="page-sidebar-col">
            <div className="sidebar-cta-card">
              <span className="sidebar-cta-badge">Career Acceleration</span>
              <h3 className="sidebar-cta-title">Upgrade Your Career</h3>
              <p className="sidebar-cta-desc">
                Invest in your workplace communication to unlock promotions, managerial roles, and international client exposure.
              </p>
              <button
                type="button"
                className="sidebar-action-btn"
                onClick={onBookSession}
              >
                <span>Enroll for ₹1,999</span>
                <span>→</span>
              </button>
              <a href="#/courses/spoken-english" className="sidebar-secondary-link">
                Compare with Spoken English Batch
              </a>
            </div>

            <div className="sidebar-facts-card">
              <h4 className="facts-heading">Program Details</h4>
              <ul className="facts-list">
                <li className="fact-row">
                  <span className="fact-label">Price:</span>
                  <span className="fact-val">₹1,999 (One-time)</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Duration:</span>
                  <span className="fact-val">45 Days</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Focus:</span>
                  <span className="fact-val">Executive Presence & Emails</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Certificate:</span>
                  <span className="fact-val">Course Completion Letter</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
