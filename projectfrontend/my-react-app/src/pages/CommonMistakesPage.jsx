import './Pages.css';

export default function CommonMistakesPage({ onBookSession }) {
  const MISTAKES = [
    {
      num: '01',
      title: 'Using "Myself Rahul" for Introductions',
      wrong: '“Myself Rahul Sharma from Indore.”',
      right: '“My name is Rahul Sharma” OR “I am Rahul Sharma.”',
      rule: 'Never introduce yourself using "Myself". Always say "My name is Rahul" or "I am Rahul". It sounds much more professional.',
    },
    {
      num: '02',
      title: 'Saying "I am having 3 years experience"',
      wrong: '“I am having 3 years of experience in Java.”',
      right: '“I have 3 years of experience in Java.”',
      rule: 'In Hindi, we say "mera experience chal raha hai", but in English, always say "I have 3 years of experience".',
    },
    {
      num: '03',
      title: 'Using "revert back" or "return back"',
      wrong: '“Please revert back to my email by tomorrow.”',
      right: '“Please reply to my email” OR “Please revert to my email.”',
      rule: 'The word "revert" or "return" already means coming back. Saying "revert back" is repeating the same word twice. Just say "Please reply to my email".',
    },
    {
      num: '04',
      title: 'Saying "cousin brother" or "cousin sister"',
      wrong: '“He is my cousin brother.”',
      right: '“He is my cousin.”',
      rule: 'In English, we never say "cousin brother" or "cousin sister". Just say "He is my cousin" or "She is my cousin".',
    },
    {
      num: '05',
      title: 'Using "discuss about" or "order for"',
      wrong: '“Let us discuss about this project issue.”',
      right: '“Let us discuss this project issue.”',
      rule: 'In English, say "discuss the issue" directly without using "about". Similarly, say "order tea" or "order coffee", never "order for coffee".',
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
          <span className="breadcrumb-current">Common Mistakes by Hindi Speakers</span>
        </div>

        <a href="#/" className="back-to-home-btn">
          ← Back to Main Page
        </a>

        {/* Header */}
        <header className="page-header">
          <div className="page-badge">
            <span className="page-badge-dot" />
            Speaking & Grammar Tips
          </div>
          <h1 className="page-main-title">
            COMMON ENGLISH MISTAKES <span className="page-title-accent">BY HINDI SPEAKERS.</span>
          </h1>
          <p className="page-lead-summary">
            Translating directly from Hindi causes common mistakes in tenses and prepositions.
            Here are 5 simple fixes that will make your English sound much more natural and clear.
          </p>
          <div className="page-meta-pills">
            <span className="meta-pill meta-pill-highlight">Common Everyday Mistakes</span>
            <span className="meta-pill">Clear Side-by-Side Comparison</span>
            <span className="meta-pill">Easy to Remember</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="page-layout-grid">
          <div className="page-main-col">
            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Why We Make These Mistakes
              </h2>
              <p className="card-body-text">
                Hindi and English have different sentence structures. When we translate thought-by-thought, sentences like <em>"main coffee ke liye order kar raha hoon"</em> become <em>"I am ordering for coffee"</em>.
              </p>
              <p className="card-body-text">
                Fixing these 5 common mistakes will immediately make your spoken and written English sound much more confident and clean in office meetings and job interviews.
              </p>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                The Top 5 Mistakes & Exact Fixes
              </h2>

              <div className="accordion-list">
                {MISTAKES.map((item) => (
                  <div key={item.num} className="accordion-item" style={{ padding: '22px 20px' }}>
                    <h3 className="accordion-question" style={{ fontSize: '1.08rem' }}>
                      <span style={{ color: 'var(--orange-color)', marginRight: '8px' }}>#{item.num}</span>
                      {item.title}
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '14px 0' }}>
                      <div style={{ background: 'rgba(255, 60, 60, 0.08)', padding: '12px 14px', borderRadius: '10px', borderLeft: '3px solid #ff5252' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ff6b6b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                          ❌ Incorrect:
                        </span>
                        <p style={{ color: '#ffc1c1', fontSize: '0.88rem', margin: 0, fontWeight: 500 }}>
                          {item.wrong}
                        </p>
                      </div>

                      <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '12px 14px', borderRadius: '10px', borderLeft: '3px solid #10b981' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#34d399', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                          ✓ Correct:
                        </span>
                        <p style={{ color: '#d1fae5', fontSize: '0.88rem', margin: 0, fontWeight: 600 }}>
                          {item.right}
                        </p>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.86rem', color: '#b5b3ab', lineHeight: 1.55, margin: 0 }}>
                      <strong>The Grammar Reason:</strong> {item.rule}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="page-sidebar-col">
            <div className="sidebar-cta-card">
              <span className="sidebar-cta-badge">Fix Your Speech</span>
              <h3 className="sidebar-cta-title">Get Personal Error Analysis</h3>
              <p className="sidebar-cta-desc">
                Rahul Sir evaluates your speech and pinpoints your personal error patterns in a 30-minute diagnostic session.
              </p>
              <button
                type="button"
                className="sidebar-action-btn"
                onClick={onBookSession}
              >
                <span>Book Diagnostic Call</span>
                <span>→</span>
              </button>
              <a href="#/courses/spoken-english" className="sidebar-secondary-link">
                Join Full Spoken English Batch
              </a>
            </div>

            <div className="sidebar-facts-card">
              <h4 className="facts-heading">Quick Reminder</h4>
              <ul className="facts-list">
                <li className="fact-row">
                  <span className="fact-label">Confidence:</span>
                  <span className="fact-val">Always comes first</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Mistakes:</span>
                  <span className="fact-val">Part of the process</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Correction:</span>
                  <span className="fact-val">Through daily speech</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
