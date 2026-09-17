import { useState, useEffect, useRef } from 'react';
import { NAV_LINKS } from './navData';
import NavMegaMenu from './NavMegaMenu';
import MobileNav from './MobileNav';
import './Navbar.css';

export default function Navbar({ onBookSession }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const lastScrollYRef = useRef(0);

  // Scroll behavior: compression while scrolling, permanently visible and accessible
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Dropdown hover helpers with intentional delay to prevent accidental closing
  const handleMouseEnter = (linkId) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(linkId);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleDropdownToggle = (linkId) => {
    setActiveDropdown((prev) => (prev === linkId ? null : linkId));
  };

  const handleCtaClick = () => {
    setActiveDropdown(null);
    if (onBookSession) {
      onBookSession();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }
  };

  const activeDropdownData = NAV_LINKS.find(
    (link) => link.id === activeDropdown && link.hasDropdown
  )?.dropdown;

  return (
    <>
      <header
        ref={navRef}
        className={`floating-navbar-container ${
          isScrolled ? 'is-scrolled' : ''
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="navbar-pill">
          {/* Brand / Logo */}
          <a
            href="#/"
            className="navbar-brand"
            onClick={() => {
              setActiveDropdown(null);
              setActiveSection('home');
            }}
            aria-label="English Coach Homepage"
          >
            <span className="brand-monogram">EC</span>
            <span className="brand-text">
              ENGLISH <span className="brand-text-accent">COACH</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-desktop-nav" aria-label="Main Navigation">
            <ul className="navbar-links-list">
              {NAV_LINKS.map((link, index) => {
                const isDropdownActive = activeDropdown === link.id;
                const isCurrentActive = activeSection === link.id;

                return (
                  <li
                    key={link.id}
                    className={`nav-item ${link.hasDropdown ? 'has-dropdown' : ''}`}
                    style={{ animationDelay: `${index * 0.05 + 0.15}s` }}
                    onMouseEnter={() =>
                      link.hasDropdown && handleMouseEnter(link.id)
                    }
                  >
                    {link.hasDropdown ? (
                      <button
                        type="button"
                        className={`nav-link-btn ${
                          isDropdownActive ? 'is-active' : ''
                        }`}
                        onClick={() => handleDropdownToggle(link.id)}
                        aria-expanded={isDropdownActive}
                        aria-haspopup="true"
                      >
                        <span>{link.label}</span>
                        <span
                          className={`dropdown-chevron ${
                            isDropdownActive ? 'chevron-up' : ''
                          }`}
                          aria-hidden="true"
                        >
                          <i className="fa fa-angle-down" />
                        </span>
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className={`nav-link ${
                          isCurrentActive ? 'is-active' : ''
                        }`}
                        onClick={() => {
                          setActiveDropdown(null);
                          setActiveSection(link.id);
                        }}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Primary CTA Button (Right) */}
          <div className="navbar-actions">
            <button
              type="button"
              className="navbar-cta-btn"
              onClick={handleCtaClick}
              aria-label="Book a private English coaching session"
            >
              <span>Book a Session</span>
              <span className="cta-arrow" aria-hidden="true">
                →
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>

        {/* Interactive Mega Menu Panel */}
        <NavMegaMenu
          dropdown={activeDropdownData}
          isOpen={Boolean(activeDropdown && activeDropdownData)}
          onClose={() => setActiveDropdown(null)}
        />
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onBookSession={handleCtaClick}
      />
    </>
  );
}
