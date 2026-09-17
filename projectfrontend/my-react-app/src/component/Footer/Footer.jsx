import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const bigTitleRef = useRef(null);
  const columnsRef = useRef(null);
  const bottomRowRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Footer background fade & reveal
      gsap.fromTo(
        footerRef.current,
        { opacity: 0.8 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
        }
      );

      // 2. Large "ENGLISH COACH" masked reveal
      const titleLines = bigTitleRef.current?.querySelectorAll('.footer-big-line');
      if (titleLines && titleLines.length) {
        gsap.fromTo(
          titleLines,
          { y: '110%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1.1,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bigTitleRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 3. Columns staggered entrance
      const columns = columnsRef.current?.querySelectorAll('.footer-col');
      if (columns && columns.length) {
        gsap.fromTo(
          columns,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: columnsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 4. Bottom metadata reveal
      if (bottomRowRef.current) {
        gsap.fromTo(
          bottomRowRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bottomRowRef.current,
              start: 'top 95%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="cinematic-footer" ref={footerRef}>
      {/* Background ambient lighting */}
      <div className="footer-ambient-aura" aria-hidden="true" />

      <div className="footer-container">
        {/* Grand Headline */}
        <div className="footer-hero-headline" ref={bigTitleRef}>
          <div className="footer-title-mask">
            <span className="footer-big-line">ENGLISH</span>
          </div>
          <div className="footer-title-mask">
            <span className="footer-big-line footer-accent-text">COACH.</span>
          </div>
        </div>

        {/* 4-Column Navigation Layout */}
        <div className="footer-columns-grid" ref={columnsRef}>
          {/* Column 1: Brand Manifesto (Left) */}
          <div className="footer-col brand-col">
            <span className="footer-col-label">About English Coach</span>
            <h3 className="footer-brand-name">ENGLISH COACH</h3>
            <p className="footer-tagline">
              Confidence • Fluency • Job Success
            </p>
            <p className="footer-brand-bio">
              Simple, practical spoken English and interview preparation coaching for college students,
              job seekers, and working professionals across India.
            </p>
            <div className="footer-locale-pill">
              <span className="locale-dot" />
              <span>Indore · Bhopal · Pune · Delhi · Bengaluru · Online</span>
            </div>
          </div>

          {/* Column 2: EXPLORE (Center/Left) */}
          <div className="footer-col">
            <span className="footer-col-label">EXPLORE</span>
            <ul className="footer-links-list">
              <li>
                <a href="#/about/coach" className="footer-link">
                  <span>About Rahul Sir</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="#/about/teaching-approach" className="footer-link">
                  <span>Teaching Approach</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="footer-link">
                  <span>4-Step Learning Path</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="#results" className="footer-link">
                  <span>Student Success Stories</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="#/resources/interview-questions" className="footer-link">
                  <span>Free HR Interview Notes</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: COURSES (Center/Right) */}
          <div className="footer-col">
            <span className="footer-col-label">POPULAR COURSES</span>
            <ul className="footer-links-list">
              <li>
                <a href="#/courses/spoken-english" className="footer-link">
                  <span>Spoken English (₹999/mo)</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="#/courses/interview-prep" className="footer-link">
                  <span>Interview Prep (₹1,499)</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="#/courses/workplace-english" className="footer-link">
                  <span>Office English (₹1,999)</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="#/courses/1-on-1-mentorship" className="footer-link">
                  <span>1-on-1 Personal Coaching</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: CONNECT (Right) */}
          <div className="footer-col connect-col">
            <span className="footer-col-label">GET IN TOUCH</span>
            <ul className="footer-links-list">
              <li>
                <a
                  href="https://wa.me/919826012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span>WhatsApp: +91 98260 12345</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919826012345"
                  className="footer-link"
                >
                  <span>Call: +91 98260 12345</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:rahulsir@englishcoach.in"
                  className="footer-link"
                >
                  <span>rahulsir@englishcoach.in</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span>Instagram Community</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright, Motto & Scroll to Top */}
        <div className="footer-bottom-row" ref={bottomRowRef}>
          <div className="footer-bottom-left">
            <span className="copyright-text">© 2026 English Coach India</span>
            <span className="footer-motto">“Helping Indian students speak English with confidence.”</span>
          </div>

          <button
            type="button"
            className="footer-back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className="top-arrow">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
