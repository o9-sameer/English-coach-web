import { useState, useEffect } from 'react';
import { NAV_LINKS } from './navData';

export default function MobileNav({ isOpen, onClose, onBookSession }) {
  const [expandedSection, setExpandedSection] = useState(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleSection = (id) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  const handleLinkClick = () => {
    onClose();
  };

  const handleCtaClick = () => {
    onClose();
    if (onBookSession) onBookSession();
  };

  return (
    <div
      className="mobile-nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div className="mobile-nav-header">
        <a href="#/" className="mobile-nav-logo" onClick={handleLinkClick}>
          <span className="mobile-brand-icon">EC</span>
          <span className="mobile-brand-text">ENGLISH COACH</span>
        </a>

        <button
          type="button"
          className="mobile-nav-close-btn"
          onClick={onClose}
          aria-label="Close menu"
        >
          <i className="fa fa-times" aria-hidden="true" />
        </button>
      </div>

      <div className="mobile-nav-content">
        <nav className="mobile-nav-links">
          {NAV_LINKS.map((link, index) => {
            const isExpanded = expandedSection === link.id;

            return (
              <div
                key={link.id}
                className="mobile-nav-item"
                style={{ animationDelay: `${index * 0.05 + 0.08}s` }}
              >
                {link.hasDropdown ? (
                  <div>
                    <button
                      type="button"
                      className="mobile-nav-link-btn"
                      onClick={() => toggleSection(link.id)}
                      aria-expanded={isExpanded}
                    >
                      <span>{link.label}</span>
                      <span
                        className={`mobile-chevron ${
                          isExpanded ? 'is-expanded' : ''
                        }`}
                      >
                        ↓
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="mobile-submenu">
                        <span className="mobile-submenu-category">
                          {link.dropdown.category}
                        </span>
                        <div className="mobile-submenu-items">
                          {link.dropdown.items.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              className="mobile-submenu-link"
                              onClick={handleLinkClick}
                            >
                              <div className="mobile-sublink-header">
                                <span className="mobile-sublink-title">
                                  {subItem.title}
                                </span>
                                {subItem.tag && (
                                  <span className="mobile-sublink-tag">
                                    {subItem.tag}
                                  </span>
                                )}
                              </div>
                              <p className="mobile-sublink-desc">
                                {subItem.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mobile-nav-footer">
          <button
            type="button"
            className="mobile-cta-btn"
            onClick={handleCtaClick}
          >
            <span>Book a Session</span>
            <span className="mobile-cta-arrow">→</span>
          </button>
          <p className="mobile-footer-note">
            Simple & Practical Spoken English Coaching by Rahul Sir
          </p>
        </div>
      </div>
    </div>
  );
}
