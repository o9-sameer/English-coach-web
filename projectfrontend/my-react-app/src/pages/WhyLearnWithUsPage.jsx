import './Pages.css';

export default function WhyLearnWithUsPage({ onBookSession }) {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <a href="#/">Home</a>
          <span className="breadcrumb-sep">/</span>
          <span>About</span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Why Learn With Us</span>
        </div>

        <a href="#/" className="back-to-home-btn">
          ← Back to Main Page
        </a>

        {/* Header */}
        <header className="page-header">
          <div className="page-badge">
            <span className="page-badge-dot" />
            The English Coach Advantage
          </div>
          <h1 className="page-main-title">
            WHY LEARN <span className="page-title-accent">WITH US?</span>
          </h1>
          <p className="page-lead-summary">
            We don't sell recorded video courses or generic software apps. We provide honest,
            supportive, live mentor-led coaching specifically crafted for the challenges of Indian English learners.
          </p>
          <div className="page-meta-pills">
            <span className="meta-pill meta-pill-highlight">Zero Pre-Recorded Videos</span>
            <span className="meta-pill">Direct Mentor Access</span>
            <span className="meta-pill">Encouraging Environment</span>
            <span className="meta-pill">Affordable Indian Pricing</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="page-layout-grid">
          <div className="page-main-col">
            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                6 Distinct Reasons Students Choose Rahul Sir
              </h2>
              <ul className="card-checklist">
                <li className="card-check-item">
                  <span className="check-icon">1</span>
                  <span><strong>100% Live Interactive Sessions:</strong> You never sit silently watching recorded lectures. You are on camera speaking with Rahul Sir and your batchmates in every single session.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">2</span>
                  <span><strong>Safe, Zero-Judgment Atmosphere:</strong> Many learners have traumatic memories of school teachers scolding them for grammar mistakes. In our classes, making mistakes is encouraged and welcomed.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">3</span>
                  <span><strong>Hindi-Friendly Explanation:</strong> We explain tricky grammar points in simple Hindi first so you understand easily, and then we practice speaking directly in English.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">4</span>
                  <span><strong>Practical Job & Career Focus:</strong> We don't teach difficult textbook theory. We teach what actually gets you selected at TCS, Infosys, Wipro, and private banks.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">5</span>
                  <span><strong>Daily Speaking Practice Partner:</strong> You get paired with a friendly batchmate to practice speaking for 20 minutes every evening on simple daily topics.</span>
                </li>
                <li className="card-check-item">
                  <span className="check-icon">6</span>
                  <span><strong>Honest & Affordable Fees:</strong> No expensive ₹30,000 course fees. Simple, budget-friendly plans starting at ₹999/month so every Indian student can learn without burden.</span>
                </li>
              </ul>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                What Our Students Say After 60 Days
              </h2>
              <div className="takeaway-box">
                <span className="takeaway-title">Real Feedback from Bhopal & Indore Batches</span>
                <p className="takeaway-text">
                  "Before this course, I would pray that my manager wouldn't ask me to speak during sprint review calls. Now I volunteer to present the demo. The fear has been replaced by genuine excitement."
                </p>
              </div>
            </section>
          </div>

          <aside className="page-sidebar-col">
            <div className="sidebar-cta-card">
              <span className="sidebar-cta-badge">Ready to Start?</span>
              <h3 className="sidebar-cta-title">Begin Your Journey</h3>
              <p className="sidebar-cta-desc">
                Take the first step toward confident spoken English. Check out our upcoming batches or book a personal counseling call.
              </p>
              <button
                type="button"
                className="sidebar-action-btn"
                onClick={onBookSession}
              >
                <span>Book Free Counseling</span>
                <span>→</span>
              </button>
              <a href="#/courses/spoken-english" className="sidebar-secondary-link">
                View Batch Details & Schedule
              </a>
            </div>

            <div className="sidebar-facts-card">
              <h4 className="facts-heading">Student Outcomes</h4>
              <ul className="facts-list">
                <li className="fact-row">
                  <span className="fact-label">Students Trained:</span>
                  <span className="fact-val">3,000+ Learners</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Placement Rate:</span>
                  <span className="fact-val">85% HR Round Success</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Average Rating:</span>
                  <span className="fact-val">4.9 / 5.0 (Google)</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Community:</span>
                  <span className="fact-val">Alumni WhatsApp Group</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
