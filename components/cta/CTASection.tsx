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
  title = "Start today - own your clinical space.",
  description = "Stop renting temporary meeting links from corporate software. Build your practice on a platform designed exclusively for independent care.",
  primaryCtaText = "Claim Your Room",
  primaryCtaHref = "https://www.getinstaroom.com/#pricing",
  secondaryCtaText = "Sign In",
  secondaryCtaHref = "https://instaroom.link/login",
}) => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.glowTop} aria-hidden="true" />
          <div className={styles.glowBottom} aria-hidden="true" />

          <div className={styles.content}>
            <div className={styles.toolStackContainer}>
              {/* <span className={styles.toolStackLabel}>REPLACES YOUR FRAGMENTED STACK</span> */}
              <div className={styles.toolStack}>
                {/* 1. Video / Telehealth */}
                <div className={styles.toolBadge} title="Video Conferencing">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  {/* <span>Video</span> */}
                </div>

                {/* 2. Scheduling / Calendar */}
                <div className={styles.toolBadge} title="Scheduling & Booking">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {/* <span>Booking</span> */}
                </div>

                {/* 3. Forms & Consent */}
                <div className={styles.toolBadge} title="Digital Consent & Intake">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M9 15l2 2 4-4" />
                  </svg>
                  {/* <span>Consent</span> */}
                </div>

                {/* 4. Billing / Payouts */}
                <div className={styles.toolBadge} title="Direct Payments">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                  {/* <span>Payments</span> */}
                </div>

                {/* 5. EMRLite / Encounter Logs */}
                <div className={styles.toolBadge} title="Lightweight Vault & EHR">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  {/* <span>EMRLite</span> */}
                </div>
              </div>
            </div>

            <h2 className={styles.title}>{title}</h2>

            <p className={styles.description}>{description}</p>

            <div className={styles.actions}>
              <Link href={primaryCtaHref} className={styles.primaryBtn}>
                <span>{primaryCtaText}</span>
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