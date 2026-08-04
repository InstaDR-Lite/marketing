// CTASection.tsx
import React from 'react';
import Link from 'next/link';
import styles from './CTASection.module.scss';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Own Your Clinical Space",
  description = "Stop renting temporary meeting links from corporate software. Build your practice on a platform designed exclusively for independent care.",
  primaryCtaText = "Claim Your Room",
  primaryCtaHref = "https://www.getinstaroom.com/#pricing",
  secondaryCtaText = "Watch Demo",
  secondaryCtaHref = "https://www.getinstaroom.com/demo",
}) => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.glowTop} aria-hidden="true" />
          <div className={styles.glowBottom} aria-hidden="true" />

          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span>THE TRANSFORMATION</span>
            </div>

            <h2 className={styles.title}>{title}</h2>

            <p className={styles.description}>{description}</p>

            <div className={styles.actions}>
              <Link href={primaryCtaHref} className={styles.primaryBtn}>
                <span>{primaryCtaText}</span>
                <svg
                  className={styles.arrowIcon}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              {secondaryCtaText && (
                <Link href={secondaryCtaHref} className={styles.secondaryBtn}>
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Try 1 month free</span>
              </div>
              <div className={styles.metaItem}>
                <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Go live in 5 minutes</span>
              </div>
              <div className={styles.metaItem}>
                <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>HIPAA-ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;