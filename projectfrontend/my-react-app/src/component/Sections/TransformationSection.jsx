import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';
import './TransformationSection.css';

gsap.registerPlugin(ScrollTrigger);

const METRICS = [
  { value: '3,000+', label: 'Students & Job Seekers Trained', sub: 'Across Indore, Bhopal, Pune, Delhi & online' },
  { value: '8+', label: 'Years of Spoken English Coaching', sub: 'Practical interactive teaching since 2018' },
  { value: '85%', label: 'Interview Selection Rate', sub: 'Cleared HR rounds in TCS, Infosys, Wipro & banks' },
  { value: '15+', label: 'College Placement Workshops', sub: 'Conducted across Madhya Pradesh & Maharashtra' },
];

const STUDENT_PROFILES = [
  {
    name: 'Rahul Sharma',
    city: 'Indore',
    badge: 'Selected at Infosys',
    role: 'Associate System Engineer',
    before:
      'Started with extreme hesitation and low confidence. Constantly translated every sentence from Hindi to English in his mind, paused awkwardly for 5-6 seconds, and stayed silent in team discussions.',
    after:
      'Speaks naturally without mental translation. Cleared the Infosys technical & HR interviews on first attempt and speaks actively in daily scrum calls.',
    quote:
      '“I used to freeze whenever someone asked a question in English. Rahul Sir made me speak out loud every day. Within 60 days, my hesitation was completely gone.”',
  },
  {
    name: 'Priya Patel',
    city: 'Bhopal',
    badge: 'Cleared TCS HR Round',
    role: 'Assistant Systems Engineer',
    before:
      'Terrified of HR interview questions. She panicked and fumbled every time an interviewer asked "Tell me about yourself", giving fragmented answers and facing campus rejections.',
    after:
      'Mastered structured 3-step HR answer frameworks. Cleared TCS National Qualifier and HR rounds on the first attempt with confident body language and natural articulation.',
    quote:
      '“The mock HR interviews and daily speaking drills changed everything for me. I walked into the TCS interview with zero anxiety.”',
  },
  {
    name: 'Aman Verma',
    city: 'Delhi',
    badge: 'Client Presentations',
    role: 'Senior Business Analyst',
    before:
      'Knew grammar rules on paper, but could not speak in public. Experienced throat dryness and intense stage fear whenever asked to share updates in team calls.',
    after:
      'Now comfortably leads sprint reviews and delivers interactive slide presentations to US and European stakeholders with clarity and poise.',
    quote:
      '“Writing English was easy for me, but speaking in front of people was terrifying. The extempore drills and presentation sessions built my real confidence.”',
  },
  {
    name: 'Pooja Deshmukh',
    city: 'Pune',
    badge: 'Promoted to Team Lead',
    role: 'QA Team Lead at FinTech',
    before:
      'Wanted to speak English at work, but felt shy and insecure because she studied in Hindi medium. Remained muted during group calls to avoid making grammar mistakes.',
    after:
      'Promoted to QA Team Lead within 6 months. She actively drives client meetings, conducts sprint plannings, and mentors junior testers in clear English.',
    quote:
      '“I always felt inferior to colleagues who had convent schooling. Rahul Sir taught me that clear communication matters way more than an accent.”',
  },
  {
    name: 'Rohan Agarwal',
    city: 'Jaipur',
    badge: '8 LPA Product Offer',
    role: 'Software Developer',
    before:
      'Final year engineering graduate who got rejected by three campus recruiters because of hesitant spoken English and stumbling in group discussions.',
    after:
      'Cracked a product-based tech firm with an 8 LPA offer. Handled both technical defense rounds and behavioral HR interviews with calm conviction.',
    quote:
      '“I had good coding skills, but fumbled while explaining my logic. Once I practiced speaking in structured sentences, I secured my 8 LPA package.”',
  },
  {
    name: 'Neha Gupta',
    city: 'Lucknow',
    badge: 'Social & Family Fluency',
    role: 'Parent & Community Volunteer',
    before:
      'Homemaker who felt embarrassed and tongue-tied during parents-teacher meetings at her children’s school and in formal social circles.',
    after:
      'Speaks English comfortably and naturally with school teachers, doctors, and society members, and proudly guides her children with their English studies.',
    quote:
      '“I wanted to communicate confidently without depending on anyone. Today I attend school meetings with pride and speak freely without self-doubt.”',
  },
];

const COMPARISONS = [
  {
    category: 'Thinking in English',
    before: 'Translating every word from Hindi in your mind, getting stuck on grammar rules, and taking awkward 5-second pauses.',
    after: 'Direct English thought flow. Everyday words come to your tongue easily and you speak without stopping to translate.',
  },
  {
    category: 'Hesitation & Fear',
    before: 'Heart beats fast, palms sweat, and you stay silent in college presentations or office calls out of fear of being judged.',
    after: 'Calm, confident speaking. You express your thoughts freely with natural body language without fear of mistakes.',
  },
  {
    category: 'Job Interviews',
    before: 'Fumbling on "Tell me about yourself", giving short one-word answers, and failing HR rounds despite strong technical marks.',
    after: 'Structured, impressive 3-step answers that explain your projects clearly and leave a strong positive impression on HR.',
  },
  {
    category: 'Office & Client Calls',
    before: 'Keeping mic muted during Zoom/Teams meetings, hesitant to speak up, and struggling to draft clean professional emails.',
    after: 'Active speaking in sprint stand-ups, confident communication with managers and clients, and crisp professional emails.',
  },
];

export default function TransformationSection() {
  const [activeTab, setActiveTab] = useState('both'); // 'before' | 'after' | 'both'
  const sectionRef = useRef(null);
  const studentCardsRef = useRef(null);
  const metricsRef = useRef(null);
  const comparisonRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Student cards entrance
      const storyCards = studentCardsRef.current?.querySelectorAll('.student-story-card');
      if (storyCards && storyCards.length) {
        gsap.fromTo(
          storyCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: studentCardsRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Metrics entrance
      const metricBoxes = metricsRef.current?.querySelectorAll('.metric-card');
      if (metricBoxes && metricBoxes.length) {
        gsap.fromTo(
          metricBoxes,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: metricsRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Comparison rows entrance
      const rows = comparisonRef.current?.querySelectorAll('.comparison-row');
      if (rows && rows.length) {
        gsap.fromTo(
          rows,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: comparisonRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="results" className="editorial-section transformation-section" ref={sectionRef}>
      {/* Anchors */}
      <div id="approach" className="section-anchor" />

      {/* Header */}
      <div className="transformation-header">
        <div className="section-badge">
          <span className="section-badge-dot" />
          Real Student Results
        </div>
        <h2 className="section-lead-title">
          BEFORE & AFTER <span className="title-accent">TRANSFORMATION.</span>
        </h2>
        <p className="transformation-intro">
          See how our students go from feeling embarrassed and stuck in English to clearing
          top company interviews and speaking confidently at work.
        </p>

        {/* View Switcher Controls */}
        <div className="transformation-tabs-pill">
          <button
            type="button"
            className={`trans-tab-btn ${activeTab === 'both' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('both')}
          >
            Side-by-Side View
          </button>
          <button
            type="button"
            className={`trans-tab-btn ${activeTab === 'before' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('before')}
          >
            Before Joining
          </button>
          <button
            type="button"
            className={`trans-tab-btn ${activeTab === 'after' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('after')}
          >
            After 60 Days
          </button>
        </div>
      </div>

      {/* Realistic Indian Student Before/After Cards */}
      <div className="student-cards-section" ref={studentCardsRef}>
        <div className="student-cards-header-bar">
          <span className="student-cards-subheading">Verified Student Success Stories</span>
          <span className="student-cards-count">6 Real Transformations</span>
        </div>

        <div className="student-cards-grid">
          {STUDENT_PROFILES.map((student) => (
            <div key={student.name} className="student-story-card">
              <div className="story-card-top">
                <div className="story-user-meta">
                  <div className="story-avatar-circle">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="story-name">{student.name}</h3>
                    <span className="story-location">{student.city} · {student.role}</span>
                  </div>
                </div>
                <span className="story-badge-pill">{student.badge}</span>
              </div>

              <div className="story-journey-box">
                <div className="story-phase phase-before">
                  <div className="phase-header-row">
                    <span className="phase-indicator dot-before" />
                    <span className="phase-label label-before">Starting Problem (Before)</span>
                  </div>
                  <p className="phase-text">{student.before}</p>
                </div>

                <div className="story-phase phase-after">
                  <div className="phase-header-row">
                    <span className="phase-indicator dot-after" />
                    <span className="phase-label label-after">Improvement & Result (After)</span>
                  </div>
                  <p className="phase-text">{student.after}</p>
                </div>
              </div>

              <blockquote className="story-quote">
                {student.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Comparative Matrix Header */}
      <div className="matrix-lead-bar">
        <h3 className="matrix-title">What Changes in 60 Days</h3>
        <span className="matrix-sub">See the real difference before and after daily speaking practice with Rahul Sir</span>
      </div>

      {/* Comparative Matrix */}
      <div className={`transformation-matrix view-${activeTab}`} ref={comparisonRef}>
        <div className="matrix-columns-header">
          <span className="col-head head-category">Topic / Situation</span>
          {(activeTab === 'both' || activeTab === 'before') && (
            <span className="col-head head-before">
              <span className="head-dot dot-before" />
              Before Joining (Hesitation & Fear)
            </span>
          )}
          {(activeTab === 'both' || activeTab === 'after') && (
            <span className="col-head head-after">
              <span className="head-dot dot-after" />
              After 60 Days Practice (Natural Fluency)
            </span>
          )}
        </div>

        <div className="matrix-rows-wrap">
          {COMPARISONS.map((item) => (
            <div key={item.category} className="comparison-row">
              <div className="comp-category-cell">
                <span className="category-title">{item.category}</span>
              </div>

              {(activeTab === 'both' || activeTab === 'before') && (
                <div className="comp-content-cell cell-before">
                  <div className="cell-mobile-tag tag-before">Before</div>
                  <p className="comp-text">{item.before}</p>
                </div>
              )}

              {(activeTab === 'both' || activeTab === 'after') && (
                <div className="comp-content-cell cell-after">
                  <div className="cell-mobile-tag tag-after">After</div>
                  <p className="comp-text">{item.after}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Monumental Metrics Grid */}
      <div className="transformation-metrics-grid" ref={metricsRef}>
        {METRICS.map((metric) => (
          <div key={metric.label} className="metric-card">
            <span className="metric-number-val">{metric.value}</span>
            <strong className="metric-primary-label">{metric.label}</strong>
            <span className="metric-sub-caption">{metric.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
