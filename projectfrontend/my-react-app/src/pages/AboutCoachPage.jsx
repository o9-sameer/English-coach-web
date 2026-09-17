import './Pages.css';

export default function AboutCoachPage({ onBookSession }) {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <a href="#/">Home</a>
          <span className="breadcrumb-sep">/</span>
          <span>About</span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">About the Coach</span>
        </div>

        <a href="#/" className="back-to-home-btn">
          ← Back to Main Page
        </a>

        {/* Header */}
        <header className="page-header">
          <div className="page-badge">
            <span className="page-badge-dot" />
            Mentor Profile & Journey
          </div>
          <h1 className="page-main-title">
            MEET COACH <span className="page-title-accent">RAHUL SHARMA.</span>
          </h1>
          <p className="page-lead-summary">
            Spoken English trainer & communication mentor based in Indore, Madhya Pradesh.
            Over the past 8+ years, I’ve helped 3,000+ Indian students, job seekers, and working
            professionals overcome fear, stop translating in their heads, and speak fluent English.
          </p>
          <div className="page-meta-pills">
            <span className="meta-pill meta-pill-highlight">8+ Years Experience</span>
            <span className="meta-pill">3,000+ Students Trained</span>
            <span className="meta-pill">Indore & Online Pan-India</span>
            <span className="meta-pill">Hindi-Medium to Fluent English</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="page-layout-grid">
          {/* Main Column */}
          <div className="page-main-col">
            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                My Story: Why I Started Coaching
              </h2>
              <p className="card-body-text">
                Like millions of Indian students, I grew up in a Hindi-speaking environment. In school and college, English was taught as a subject with complex grammar rules on blackboards, never as a living spoken language.
              </p>
              <p className="card-body-text">
                I watched brilliant engineers, accountants, and graduates get rejected in campus placements simply because their hands trembled and words choked when asked <em>"Tell me about yourself"</em>.
              </p>
              <p className="card-body-text">
                That was the turning point. In 2018, I started an interactive coaching method in Indore focused 100% on out-loud speech, removing hesitation, daily speaking practice, and building real confidence.
              </p>

              <div className="takeaway-box">
                <span className="takeaway-title">Core Coaching Belief</span>
                <p className="takeaway-text">
                  "Fluency is not about speaking like a foreigner or using difficult dictionary words. Fluency is having the confidence to share your real thoughts clearly, calmly, and without fear."
                </p>
              </div>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Who I Typically Help
              </h2>
              <ul className="card-checklist">
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Hindi-Medium & Regional Language Learners:</strong> People who can understand English when reading or listening, but freeze when they have to speak.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Engineering & College Freshers:</strong> Students preparing for campus placements, TCS/Infosys/Wipro interviews, and group discussions.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Working IT & Corporate Professionals:</strong> Developers, analysts, and managers who stay muted in client calls and want to speak with confidence.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">✓</span>
                  <span><strong>Homemakers & Parents:</strong> Individuals who want to talk comfortably in parent-teacher meetings, bank visits, and social gatherings.</span>
                </li>
              </ul>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                My 3 Golden Rules in Every Session
              </h2>
              <ul className="card-checklist">
                <li className="card-check-item">
                  <span className="check-icon">1</span>
                  <span><strong>Mistakes are Mandatory:</strong> If you don't make mistakes, you cannot improve. Nobody in our sessions will ever laugh at your pronunciation.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">2</span>
                  <span><strong>Out-Loud Speaking Only:</strong> You cannot learn swimming from reading a book; you cannot learn spoken English through silent reading. We speak from minute one.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">3</span>
                  <span><strong>Zero Rote Memorization:</strong> No memorizing tenses tables or 500 word lists. We build automatic sentence habits through practical daily situations.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar Column */}
          <aside className="page-sidebar-col">
            <div className="sidebar-cta-card">
              <span className="sidebar-cta-badge">Direct Mentorship</span>
              <h3 className="sidebar-cta-title">Talk to Rahul Sir</h3>
              <p className="sidebar-cta-desc">
                Book a 1-on-1 assessment session to evaluate your current speaking level and get a tailored 60-day practice roadmap.
              </p>
              <button
                type="button"
                className="sidebar-action-btn"
                onClick={onBookSession}
              >
                <span>Book 1-on-1 Session</span>
                <span>→</span>
              </button>
              <a href="#/courses/spoken-english" className="sidebar-secondary-link">
                View All Courses
              </a>
            </div>

            <div className="sidebar-facts-card">
              <h4 className="facts-heading">Quick Facts</h4>
              <ul className="facts-list">
                <li className="fact-row">
                  <span className="fact-label">Location:</span>
                  <span className="fact-val">Indore (M.P.) & Online</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Experience:</span>
                  <span className="fact-val">8+ Years Full-Time</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Format:</span>
                  <span className="fact-val">Live Google Meet / Zoom</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Language Medium:</span>
                  <span className="fact-val">Simple English + Hindi</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
