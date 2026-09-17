import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';
import './ProofSection.css';

gsap.registerPlugin(ScrollTrigger);

const METRICS = [
  { value: '98%', label: 'Boardroom Advancement Rate', sub: 'Of clients appointed to target executive seats' },
  { value: '12+', label: 'Years Preparing Global Leaders', sub: 'In London, New York, Zurich & Paris' },
  { value: '500+', label: 'C-Suite & Founders Coached', sub: 'Across Tier-1 tech, finance & management' },
  { value: '40+', label: 'Keynote Arenas Commanded', sub: 'From Web Summit to World Economic Forum sessions' },
];

const TESTIMONIALS = [
  {
    quote:
      'Before our sessions, I rushed through high-stakes venture pitches and lost my natural authority. The cognitive framing and cadence drills fundamentally shifted how I command the room.',
    author: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Series C FinTech · London',
  },
  {
    quote:
      'The 3-pillar framework gave me an unfair rhetorical advantage. I no longer translate thoughts under pressure—I set the emotional and strategic tone of executive committee meetings.',
    author: 'Elena Rostova',
    role: 'Senior VP of Strategy',
    company: 'Tier-1 Investment Bank · New York',
  },
  {
    quote:
      'Mastering diaphragmatic pausing and vocal resonance eliminated every single filler hesitation. My keynote in Paris received the strongest investor response of my career.',
    author: 'Julien Laurent',
    role: 'Managing Director',
    company: 'Global Luxury Group · Paris',
  },
];

export default function ProofSection() {
  const sectionRef = useRef(null);
  const metricsRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Metrics staggered entrance
      const metricCards = metricsRef.current?.querySelectorAll('.metric-box');
      if (metricCards && metricCards.length) {
        gsap.fromTo(
          metricCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: metricsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Testimonials staggered entrance
      const testimonialCards = testimonialsRef.current?.querySelectorAll('.testimonial-card');
      if (testimonialCards && testimonialCards.length) {
        gsap.fromTo(
          testimonialCards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.16,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: testimonialsRef.current,
              start: 'top 78%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="results" className="editorial-section proof-section" ref={sectionRef}>
      <div className="proof-header">
        <div className="section-badge">
          <span className="section-badge-dot" />
          Measurable Authority
        </div>
        <h2 className="section-lead-title">
          MEASURED IN <span className="title-accent">TRAJECTORY SHIFTS.</span>
        </h2>
        <p className="proof-intro">
          We do not measure progress with vocabulary quizzes. We measure it in capital raised,
          promotions unlocked, and rooms commanded.
        </p>
      </div>

      {/* Monumental Metrics Row */}
      <div className="metrics-row" ref={metricsRef}>
        {METRICS.map((metric) => (
          <div key={metric.label} className="metric-box">
            <span className="metric-val">{metric.value}</span>
            <strong className="metric-label">{metric.label}</strong>
            <span className="metric-sub">{metric.sub}</span>
          </div>
        ))}
      </div>

      {/* Case Studies / Testimonials Grid */}
      <div className="testimonials-grid" ref={testimonialsRef}>
        {TESTIMONIALS.map((t) => (
          <div key={t.author} className="testimonial-card">
            <div className="testimonial-quote-mark">“</div>
            <p className="testimonial-text">{t.quote}</p>
            <div className="testimonial-author-box">
              <strong className="author-name">{t.author}</strong>
              <span className="author-role">{t.role}</span>
              <span className="author-company">{t.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
