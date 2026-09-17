import './Pages.css';

export default function EverydayVocabularyPage({ onBookSession }) {
  const VOCAB = [
    {
      word: 'Hesitant / Hesitate',
      type: 'Adjective / Verb',
      meaning: 'Unsure or slow in acting or speaking because of fear or doubt.',
      example: '“I was hesitant to speak up during the team meeting, but Rahul Sir encouraged me.”',
    },
    {
      word: 'Articulation / Articulate',
      type: 'Noun / Adjective',
      meaning: 'The ability to express ideas clearly and effectively in speech.',
      example: '“She gave a very articulate presentation to the US client.”',
    },
    {
      word: 'Proactive',
      type: 'Adjective',
      meaning: 'Taking action in advance rather than simply reacting after a problem happens.',
      example: '“Our manager appreciated Aman for being proactive in fixing the project issue.”',
    },
    {
      word: 'Extempore',
      type: 'Adjective / Adverb',
      meaning: 'Spoken or done without preparation or script (impromptu).',
      example: '“Practicing extempore topics for 2 minutes daily removes stage fear.”',
    },
    {
      word: 'Rapport',
      type: 'Noun',
      meaning: 'A close, harmonious relationship where people understand each other well.',
      example: '“Building good rapport with your interviewers helps you stand out immediately.”',
    },
    {
      word: 'Concise',
      type: 'Adjective',
      meaning: 'Giving a lot of information clearly and in a few words; brief and to the point.',
      example: '“Keep your answers concise so the interviewer does not lose interest.”',
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
          <span className="breadcrumb-current">Everyday Vocabulary</span>
        </div>

        <a href="#/" className="back-to-home-btn">
          ← Back to Main Page
        </a>

        {/* Header */}
        <header className="page-header">
          <div className="page-badge">
            <span className="page-badge-dot" />
            Useful Daily Words
          </div>
          <h1 className="page-main-title">
            USEFUL EVERYDAY <span className="page-title-accent">WORDS & PHRASES.</span>
          </h1>
          <p className="page-lead-summary">
            You do not need difficult dictionary words to speak fluent English.
            Learn these simple, useful words that people use every day in office and college conversations.
          </p>
          <div className="page-meta-pills">
            <span className="meta-pill meta-pill-highlight">Useful Words Only</span>
            <span className="meta-pill">Real-Life Examples</span>
            <span className="meta-pill">Easy to Use in Daily Life</span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="page-layout-grid">
          <div className="page-main-col">
            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                The Secret to Remembering New Words
              </h2>
              <p className="card-body-text">
                Never memorize word lists from dictionaries. When you learn a new word, immediately make <strong>two personal sentences</strong> out loud about your own daily life.
              </p>
              <div className="takeaway-box">
                <span className="takeaway-title">The Active Usage Rule</span>
                <p className="takeaway-text">
                  "A word only becomes yours when you speak it out loud three times in real conversations."
                </p>
              </div>
            </section>

            <section className="page-content-card">
              <h2 className="card-heading">
                <span className="card-heading-icon">✦</span>
                Featured High-Impact Vocabulary
              </h2>

              <div className="examples-grid">
                {VOCAB.map((item) => (
                  <div key={item.word} className="example-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <h3 className="example-term" style={{ margin: 0 }}>{item.word}</h3>
                      <span style={{ fontSize: '0.72rem', color: '#888', fontStyle: 'italic' }}>{item.type}</span>
                    </div>
                    <p className="example-meaning" style={{ fontSize: '0.9rem', color: '#dedcd4', marginBottom: '8px' }}>
                      {item.meaning}
                    </p>
                    <p className="example-sentence" style={{ fontSize: '0.84rem', color: '#adaba5' }}>
                      <strong>Example:</strong> {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="page-sidebar-col">
            <div className="sidebar-cta-card">
              <span className="sidebar-cta-badge">Daily Speaking Habit</span>
              <h3 className="sidebar-cta-title">Learn 5 Words Live Daily</h3>
              <p className="sidebar-cta-desc">
                In our live daily batches, we introduce and speak 5 new words in real conversations every day.
              </p>
              <button
                type="button"
                className="sidebar-action-btn"
                onClick={onBookSession}
              >
                <span>Join Daily Speaking Class</span>
                <span>→</span>
              </button>
              <a href="#/courses/spoken-english" className="sidebar-secondary-link">
                View Full Curriculum
              </a>
            </div>

            <div className="sidebar-facts-card">
              <h4 className="facts-heading">Study Rule</h4>
              <ul className="facts-list">
                <li className="fact-row">
                  <span className="fact-label">Daily Target:</span>
                  <span className="fact-val">3–5 Words Max</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Usage Rule:</span>
                  <span className="fact-val">Speak Out Loud 3x</span>
                </li>
                <li className="fact-row">
                  <span className="fact-label">Focus:</span>
                  <span className="fact-val">Context over Definition</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
