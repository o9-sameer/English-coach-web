import './Pages.css';

export default function InterviewPrepPage({ onBookSession }) {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <a href="#/">Home</a>
          <span className="breadcrumb-sep">/</span>
          <span>Courses</span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Interview Prep</span>
        </div>

        <a href="#/" className="back-to-home-btn">
          ← Back to Main Page
        </a>

        {/* Header */}
        <header className="page-header">
          <div className="page-badge">
            <span className="page-badge-dot" />
            Placement & Career Booster
          </div>
          <h1 className="page-main-title">
            JOB INTERVIEW <span className="page-title-accent">PREPARATION.</span>
          </h1>
          <p className="page-lead-summary">
            A 30-day practical course to clear HR rounds, campus placements,
            and job interviews in IT, private banks, and top companies.
          </p>
          <div className="page-meta-pills">
            <span className="meta-pill meta-pill-highlight">₹1,499 Total Fee</span>
            <span className="meta-pill">30-Day Program</span>
            <span className="meta-pill">5 Mock HR Video Rounds</span>
            <span className="meta-pill">85% Selection Record</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="page-layout-grid">
          <div className="page-main-col">
            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Why Most Students Get Stuck in HR Rounds
              </h2>
              <p className="card-body-text">
                In top companies like TCS, Infosys, Wipro, Accenture, and private banks, HR rounds are not grammar tests. They want to see if you can explain your work clearly and talk with calm confidence.
              </p>
              <p className="card-body-text">
                Most students give generic memorized answers to <em>"Tell me about yourself"</em> or stumble nervously when asked <em>"Why should we hire you?"</em> or <em>"Explain your final year project"</em>. We teach you clear, authentic frameworks to make you stand out from hundreds of candidates.
              </p>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                What This Program Covers
              </h2>
              <ul className="card-checklist">
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>The 3-Step "Tell Me About Yourself" Pitch:</strong> Present your background, key strengths, and role alignment in exactly 90 seconds without fumbling.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Explaining Technical Projects Simply:</strong> Learn the STAR method (Situation, Task, Action, Result) to explain your engineering or business projects clearly.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Top 25 Tricky HR Questions:</strong> Confident answers for gaps in education, low CGPA, salary expectations, why you left your last job, and handling stress.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Group Discussion (GD) Dominance:</strong> Initiating GDs politely, intervening without shouting, agreeing and disagreeing diplomatically, and summarizing effectively.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Body Language & Camera Presence:</strong> Eye contact, smiling, posture, hand gestures, and tone modulation for virtual Zoom/Teams interviews.</span>
                </li>
              </ul>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                5 Video Mock Interviews with Detailed Scorecards
              </h2>
              <p className="card-body-text">
                Every enrolled candidate goes through 5 realistic one-on-one mock video interviews with Rahul Sir. You receive an in-depth scorecard evaluating your clarity, body language, answer structuring, and filler-word usage.
              </p>
              <div className="takeaway-box">
                <span className="takeaway-title">Includes Free Bonus Materials</span>
                <p className="takeaway-text">
                  Complete 50-page HR Interview Question Bank PDF with ready-to-adapt templates for freshers and experienced working professionals.
                </p>
              </div>
            </section>
          </div>

          <aside className="page-sidebar-col">
            <div className="sidebar-cta-card">
              <span className="sidebar-cta-badge">Immediate Start</span>
              <h3 className="sidebar-cta-title">Clear Your Interview</h3>
              <p className="sidebar-cta-desc">
                Have an upcoming interview lined up? Get prepared in time with personalized answer framing and video mocks.
              </p>
              <button
                type="button"
                className="sidebar-action-btn"
                onClick={onBookSession}
              >
                <span>Enroll for ₹1,499</span>
                <span>→</span>
              </button>
              <a href="#/resources/interview-questions" className="sidebar-secondary-link">
                Read Free Sample HR Questions
              </a>
            </div>

            <div className="sidebar-facts-card">
              <h4 className="facts-heading">Track Highlights</h4>
              <ul className="facts-list">
                <li className="fact-row">
                  <span className="fact-label">Price:</span>
                  <span className="fact-val">₹1,499 (One-time)</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Duration:</span>
                  <span className="fact-val">30 Days Intensive</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Mock Rounds:</span>
                  <span className="fact-val">5 Personalized Sessions</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Target Companies:</span>
                  <span className="fact-val">TCS, Infosys, MNCs</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
