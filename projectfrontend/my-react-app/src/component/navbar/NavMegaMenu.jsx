import { useEffect, useRef } from 'react';

export default function NavMegaMenu({
  dropdown,
  isOpen,
  onClose,
}) {
  const menuRef = useRef(null);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!dropdown) return null;

  return (
    <div
      ref={menuRef}
      className={`nav-megamenu-panel ${isOpen ? 'is-open' : 'is-closing'}`}
      role="region"
      aria-label={`${dropdown.title} menu`}
    >
      <div className="megamenu-inner">
        {/* Left Column: List of items */}
        <div className="megamenu-list-column">
          <div className="megamenu-header">
            <span className="megamenu-category-label">{dropdown.category}</span>
            <h3 className="megamenu-title">{dropdown.title}</h3>
          </div>

          <div className="megamenu-items-grid">
            {dropdown.items.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                className="megamenu-item"
                style={{ animationDelay: `${index * 0.04 + 0.05}s` }}
                onClick={() => onClose()}
              >
                <div className="megamenu-item-content">
                  <div className="megamenu-item-title-row">
                    <span className="megamenu-item-title">{item.title}</span>
                    {item.tag && (
                      <span className="megamenu-item-tag">{item.tag}</span>
                    )}
                  </div>
                  <p className="megamenu-item-description">
                    {item.description}
                  </p>
                </div>
                <div className="megamenu-item-arrow" aria-hidden="true">
                  <i className="fa fa-long-arrow-right" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Featured editorial card */}
        {dropdown.featured && (
          <div className="megamenu-featured-column">
            <div className="megamenu-featured-card">
              <span className="featured-badge">{dropdown.featured.badge}</span>
              <h4 className="featured-title">{dropdown.featured.title}</h4>
              <p className="featured-desc">{dropdown.featured.description}</p>
              <a
                href={dropdown.featured.href}
                className="featured-cta-link"
                onClick={() => onClose()}
              >
                <span>{dropdown.featured.ctaText}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
