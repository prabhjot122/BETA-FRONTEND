// @/Users/pranshubansal/Documents/Lawvriksh/BETA-FRONTEND/src/components/homepage/InteractiveDialog.tsx
import { useState } from 'react';
import { dialogContent } from './homepage.data';
import '../Homepage.css';

interface InteractiveDialogProps {
  hoveredFeature: number | null;
  onDialogEnter: () => void;
  onDialogLeave: () => void;
}

const InteractiveDialog = ({ hoveredFeature, onDialogEnter, onDialogLeave }: InteractiveDialogProps) => {
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);

  const handleTestimonialClick = (index: number) => {
    if (hoveredFeature === 2) { // Only for testimonials dialog
      setExpandedTestimonial(expandedTestimonial === index ? null : index);
    }
  };

  if (hoveredFeature === null) {
    return null;
  }

  return (
    <div
      className="homepage__interactive-dialog"
      onMouseEnter={onDialogEnter}
      onMouseLeave={onDialogLeave}
    >
      <div className="dialog__container">
        <div className="dialog__header">
          <div className="dialog__header-accent"></div>
          <div className="dialog__header-content">
            <div className="dialog__header-text">
              <h3 className="dialog__title">
                {dialogContent[hoveredFeature as keyof typeof dialogContent].title}
              </h3>
              <div className="dialog__header-subtitle">
                Explore the details below
              </div>
            </div>
            <div className="dialog__header-logo">
              <img src="/logo3.png" alt="LawVriksh Logo" className="dialog__logo-image" />
            </div>
          </div>
        </div>

        <div className="dialog__content-list">
          {dialogContent[hoveredFeature as keyof typeof dialogContent].items.map((item, index) => (
            <div
              key={index}
              className={`dialog__content-card ${hoveredFeature === 2 ? 'dialog__content-card--testimonial' : ''}`}
              onClick={() => handleTestimonialClick(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTestimonialClick(index);
                }
              }}
              role={hoveredFeature === 2 ? "button" : undefined}
              tabIndex={hoveredFeature === 2 ? 0 : undefined}
              aria-expanded={hoveredFeature === 2 ? expandedTestimonial === index : undefined}
            >
              <div className="dialog__card-header">
                <div className="dialog__card-number">
                  <span>{index + 1}</span>
                </div>
                <div className="dialog__card-title">
                  <div className="dialog__card-name">
                    {item.heading}
                  </div>
                  {hoveredFeature === 2 && 'profession' in item && (
                    <div className="dialog__card-profession">
                      {(item as any).profession}
                    </div>
                  )}
                </div>
                {hoveredFeature === 2 && (
                  <div className={`dialog__expand-indicator ${expandedTestimonial === index ? 'dialog__expand-indicator--expanded' : ''}`}>
                    <span>▼</span>
                  </div>
                )}
              </div>

              {hoveredFeature !== 2 && 'description' in item && (
                <div className="dialog__card-content">
                  <p className="dialog__card-description">
                    {(item as any).description}
                  </p>
                </div>
              )}

              {hoveredFeature === 2 && 'testimonials' in item && (
                <div className={`dialog__testimonial-content ${expandedTestimonial === index ? 'dialog__testimonial-content--expanded' : ''}`}>
                  <div className="dialog__testimonials-container">
                    {(item as any).testimonials.map((testimonial: string, testimonialIndex: number) => (
                      <div key={testimonialIndex} className="dialog__single-testimonial">
                        <div className="dialog__testimonial-quote">
                          <span className="dialog__quote-mark">&ldquo;</span>
                          <p className="dialog__quote-text">
                            {testimonial}
                          </p>
                          <span className="dialog__quote-mark dialog__quote-mark--closing">&rdquo;</span>
                        </div>
                        {testimonialIndex < (item as any).testimonials.length - 1 && (
                          <div className="dialog__testimonial-divider"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="dialog__testimonial-attribution">
                    — {item.heading}
                  </div>
                </div>
              )}

              <div className="dialog__card-footer">
                <div className="dialog__card-accent-line"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="dialog__footer">
          <div className="dialog__footer-text">
            Hover to explore • Click feature items for more details
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDialog;
