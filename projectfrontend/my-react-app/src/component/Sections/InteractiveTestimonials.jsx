import { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';
import './InteractiveTestimonials.css';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    id: 'ankit',
    number: '01',
    author: 'Ankit Verma',
    role: 'Associate Software Engineer',
    company: 'TCS · Pune (from Indore)',
    focusTrack: 'Campus Placement & HR Rounds',
    quote:
      'I had strong technical skills in Java and SQL, but got rejected twice in HR rounds because I froze whenever the interviewer spoke in English. Rahul Sir prepared me step-by-step for "Tell Me About Yourself" and project questions. I cleared TCS with complete confidence!',
    metric: 'Selected at TCS (₹7 LPA)',
  },
  {
    id: 'priya',
    number: '02',
    author: 'Priya Patel',
    role: 'Customer Support Executive',
    company: 'Teleperformance · Bhopal',
    focusTrack: 'Hesitation Removal & Daily Fluency',
    quote:
      'I did my schooling in Hindi medium. I was always terrified of making grammar mistakes in front of others. Joining the 60-day daily speaking batch completely changed my life. Now I take calls from US and UK clients every day without any fear or hesitation.',
    metric: 'Promoted to Senior Team Lead',
  },
  {
    id: 'rohan',
    number: '03',
    author: 'Rohan Sharma',
    role: 'MBA Student',
    company: 'Indore Institute of Management',
    focusTrack: 'Group Discussion & Speaking Confidence',
    quote:
      'Most coaching centers just teach passive grammar on a whiteboard. Here, Rahul Sir made us speak out loud in every single session. We practiced mock group discussions and simple speaking topics daily. My stage fear and speaking hesitation are completely gone.',
    metric: 'Cleared Top B-School GD/PI',
  },
  {
    id: 'neha',
    number: '04',
    author: 'Neha Joshi',
    role: 'Product Marketing Associate',
    company: 'Tech Startup · Bengaluru (from Pune)',
    focusTrack: 'Office English & Client Calls',
    quote:
      'In daily office Zoom calls, I used to keep my microphone muted because I felt inferior to colleagues who spoke fluent English. Rahul Sir taught me simple sentences for team updates and client questions. Now I lead weekly product demos with ease.',
    metric: 'Leading Weekly Client Demos',
  },
];

export default function InteractiveTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const total = TESTIMONIALS.length;

  const animateSlide = useCallback((newIndex) => {
    if (!cardRef.current) {
      setCurrentIndex(newIndex);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCurrentIndex(newIndex);
      return;
    }

    // Animate out, change state, animate in
    gsap.to(cardRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
        );
      },
    });
  }, []);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % total;
    animateSlide(nextIdx);
  }, [currentIndex, total, animateSlide]);

  const handlePrev = useCallback(() => {
    const prevIdx = (currentIndex - 1 + total) % total;
    animateSlide(prevIdx);
  }, [currentIndex, total, animateSlide]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="editorial-section testimonials-spotlight-section" ref={sectionRef}>
      {/* Header */}
      <div className="testimonials-header-row">
        <div className="test-header-left">
          <div className="section-badge">
            <span className="section-badge-dot" />
            Real Student Reviews
          </div>
          <h2 className="section-lead-title">
            WHAT OUR <span className="title-accent">STUDENTS SAY.</span>
          </h2>
        </div>

        {/* Top Controls */}
        <div className="testimonials-controls">
          <span className="slide-counter">
            <strong className="current-num">{current.number}</strong> / 0{total}
          </span>
          <div className="nav-btn-pair">
            <button
              type="button"
              className="slider-nav-btn prev-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              className="slider-nav-btn next-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Main Spotlight Card */}
      <div className="testimonial-spotlight-card" ref={cardRef}>
        <div className="spotlight-top-bar">
          <span className="spotlight-focus-pill">{current.focusTrack}</span>
          <span className="spotlight-metric-badge">✦ {current.metric}</span>
        </div>

        <div className="spotlight-body">
          <span className="giant-quote-mark">“</span>
          <blockquote className="spotlight-quote-text">
            {current.quote}
          </blockquote>
        </div>

        <div className="spotlight-footer">
          <div className="spotlight-author-info">
            <h3 className="author-name-lead">{current.author}</h3>
            <span className="author-role-sub">{current.role}</span>
            <span className="author-company-sub">{current.company}</span>
          </div>

          {/* Dots Indicator */}
          <div className="spotlight-dots-row">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                className={`spotlight-dot ${idx === currentIndex ? 'is-active' : ''}`}
                onClick={() => animateSlide(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
