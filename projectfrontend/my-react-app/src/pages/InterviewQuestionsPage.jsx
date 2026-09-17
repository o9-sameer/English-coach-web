import './Pages.css';

export default function InterviewQuestionsPage({ onBookSession }) {
  const QUESTIONS = [
    {
      q: '1. "Tell me about yourself."',
      why: 'The interviewer wants to see if you can introduce yourself clearly and professionally in English without reciting your entire resume.',
      framework: 'Past (Education/Background) + Present (Current skills & projects) + Future (Why you are excited about this role).',
      sample: '“Thank you for this opportunity. I recently completed my B.Tech in Computer Science from RGPV Indore. During my studies, I focused heavily on Java and Full Stack Web Development, where I built an e-commerce management platform. What excites me about this role at your company is the opportunity to apply my problem-solving skills to real-world software products while growing in a collaborative team.”',
    },
    {
      q: '2. "What is your biggest weakness?"',
      why: 'Tests self-awareness and honesty. Never say "I have no weaknesses" or fake weaknesses like "I work too hard".',
      framework: 'State a real professional weakness + Explain the active step you are taking to fix it.',
      sample: '“Earlier, I used to hesitate when delegating tasks in group projects because I preferred handling everything myself. However, I realized this causes unnecessary pressure. Recently, I’ve started using project boards like Trello to divide responsibilities clearly, which has made our team collaboration much smoother.”',
    },
    {
      q: '3. "Why should we hire you over other candidates?"',
      why: 'Tests your confidence and your understanding of what the company actually needs.',
      framework: 'Match your specific skills directly to their job description + Highlight your eagerness to learn.',
      sample: '“While many candidates may possess similar academic qualifications, what sets me apart is my ability to quickly adapt and learn new frameworks. During my college project, I taught myself React in under two weeks to deliver our prototype on time. I bring that same dedication, strong work ethic, and clear communication to this role.”',
    },
    {
      q: '4. "Where do you see yourself in 3 to 5 years?"',
      why: 'Checks if you are looking for long-term stability or planning to leave within 6 months.',
      framework: 'Skill mastery + Value contribution to the organization + Taking on mentorship responsibilities.',
      sample: '“Over the next 3 to 5 years, my goal is to master my core technical responsibilities, contribute to high-impact projects, and gradually take on leadership and mentorship responsibilities within the organization.”',
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
          <span className="breadcrumb-current">HR Interview Questions</span>
        </div>

        <a href="#/" className="back-to-home-btn">
          ← Back to Main Page
        </a>

        {/* Header */}
        <header className="page-header">
          <div className="page-badge">
            <span className="page-badge-dot" />
            Interview Preparation Guide
          </div>
          <h1 className="page-main-title">
            TOP HR INTERVIEW <span className="page-title-accent">QUESTIONS & ANSWERS.</span>
          </h1>
          <p className="page-lead-summary">
            Learn how to answer the most common job interview questions asked in TCS, Infosys, Wipro,
            private banks, and IT companies with simple, clear English formats.
          </p>
          <div className="page-meta-pills">
            <span className="meta-pill meta-pill-highlight">TCS / Infosys / Wipro Tested</span>
            <span className="meta-pill">Easy Answer Formats</span>
            <span className="meta-pill">Simple Spoken English</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="page-layout-grid">
          <div className="page-main-col">
            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Common HR Questions & Easy Answers
              </h2>

              <div className="accordion-list">
                {QUESTIONS.map((item) => (
                  <div key={item.q} className="accordion-item" style={{ padding: '24px 22px' }}>
                    <h3 className="accordion-question" style={{ color: 'var(--orange-color)', fontSize: '1.15rem' }}>
                      {item.q}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: '#999', margin: '0 0 10px 0' }}>
                      <strong>What the HR wants to know:</strong> {item.why}
                    </p>
                    <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 14px', borderRadius: '8px', marginBottom: '14px' }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#ffb39b', textTransform: 'uppercase' }}>
                        How to Answer:
                      </span>
                      <p style={{ fontSize: '0.88rem', color: '#dedcd4', margin: '4px 0 0 0' }}>
                        {item.framework}
                      </p>
                    </div>

                    <div style={{ background: 'rgba(255, 75, 38, 0.06)', padding: '14px 16px', borderRadius: '10px', borderLeft: '3px solid var(--orange-color)' }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--orange-color)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                        Recommended Sample Answer:
                      </span>
                      <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#ffffff', margin: 0 }}>
                        {item.sample}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="page-sidebar-col">
            <div className="sidebar-cta-card">
              <span className="sidebar-cta-badge">Get Mock Tested</span>
              <h3 className="sidebar-cta-title">Practice Video Mocks</h3>
              <p className="sidebar-cta-desc">
                Reading answers is good, but speaking them in front of a live interviewer is what clears selections. Book a 1-on-1 mock interview.
              </p>
              <button
                type="button"
                className="sidebar-action-btn"
                onClick={onBookSession}
              >
                <span>Book a Mock Interview</span>
                <span>→</span>
              </button>
              <a href="#/courses/interview-prep" className="sidebar-secondary-link">
                View 30-Day Interview Crash Course
              </a>
            </div>

            <div className="sidebar-facts-card">
              <h4 className="facts-heading">Interview Pro-Tips</h4>
              <ul className="facts-list">
                <li className="fact-row">
                  <span className="fact-label">Eye Contact:</span>
                  <span className="fact-val">Look at the Camera Lens</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Pacing:</span>
                  <span className="fact-val">Slow down, don't rush</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Fillers:</span>
                  <span className="fact-val">Replace "umm" with silence</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
