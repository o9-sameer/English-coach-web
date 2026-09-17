import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';
import './BookingCtaSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function BookingCtaSection({ onBookSession }) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { scale: 0.94, y: 40, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1.1,
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

  const handleBooking = () => {
    if (onBookSession) {
      onBookSession();
    } else {
      window.open('https://wa.me/919826012345?text=Hello%20Rahul%20Sir%2C%20I%20want%20to%20join%20the%20free%20demo%20class', '_blank');
    }
  };

  return (
    <section id="contact" className="editorial-section booking-section" ref={sectionRef}>
      <div className="booking-card" ref={cardRef}>
        {/* Subtle ambient light glow */}
        <div className="booking-card-glow" aria-hidden="true" />

        <div className="booking-card-content">
          <div className="section-badge">
            <span className="section-badge-dot" />
            Free Trial Session
          </div>

          <h2 className="section-lead-title booking-title">
            READY TO SPEAK ENGLISH <span className="title-accent">WITH CONFIDENCE?</span>
          </h2>

          <p className="booking-desc">
            Stop hesitating and worrying about grammar mistakes. Join our upcoming live batch
            and start speaking simple, correct English from day one. Book your free 20-minute demo session now.
          </p>

          <div className="booking-availability-pill">
            <span className="avail-dot" />
            <span>Next Live Batch Starts This Monday · Limited to 15 Students</span>
          </div>

          <div className="booking-actions-row">
            <button
              type="button"
              className="booking-main-btn"
              onClick={handleBooking}
            >
              <span>Book a Free Demo Class</span>
              <span className="btn-arrow-circle">
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </span>
            </button>
          </div>

          <div className="booking-perks">
            <div className="perk-item">
              <span className="perk-icon">✓</span>
              <span>100% Practical Speaking in Every Session</span>
            </div>
            <div className="perk-item">
              <span className="perk-icon">✓</span>
              <span>Friendly, Zero-Judgment Environment</span>
            </div>
            <div className="perk-item">
              <span className="perk-icon">✓</span>
              <span>Free Interview Question Notes & Daily PDFs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
