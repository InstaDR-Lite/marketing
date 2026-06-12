'use client';

import { useState } from 'react';
import styles from './PricingSection.module.scss';

const soloFeatures = [
  '1 Permanent Room Link (instaroom.link/your-name)',
  'Unlimited HD video sessions',
  'Calendar + Google Calendar sync',
  'Direct Stripe payouts — 0% platform fee',
  'Geo-verification + digital consent',
  'Patient virtual waiting room',
];

const groupFeatures = [
  'Up to 10 permanent room links',
  'Centralized admin dashboard',
  'Multi-provider scheduling',
  'Dedicated MediaDance signaling',
  'Custom branding + white-labeling',
  'Priority infrastructure support',
];

export default function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  const handleClaim = () => {
    window.location.href = `https://instaroom.link/signup?plan=${billing}`;
  };

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>06 — Pricing</p>
          <h2 className={styles.headline}>
            One plan. Everything included.
          </h2>
          <p className={styles.desc}>
            14-day free trial. No surprises. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className={styles.toggle}>
            <button
              onClick={() => setBilling('monthly')}
              className={billing === 'monthly' ? styles.toggleActive : styles.toggleInactive}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={billing === 'annual' ? styles.toggleActive : styles.toggleInactive}
            >
              Annual
              <span className={styles.saveBadge}>Save $349</span>
            </button>
          </div>
        </div>

        <div className={styles.cards}>
          {/* Solo */}
          <div className={styles.cardFeatured}>
            <span className={styles.popularTag}>Most Popular</span>
            <p className={styles.planLabelFeatured}>Independent Practitioner</p>
            <div className={styles.price}>
              <span className={styles.currency}>$</span>
              <span className={styles.amount}>
                {billing === 'monthly' ? '79' : '599'}
              </span>
              <span className={styles.period}>
                {billing === 'monthly' ? ' / month' : ' / year'}
              </span>
            </div>
            {/* {billing === 'annual' && (
              <p className={styles.annualNote}>$49.92/mo — save $349 vs monthly</p>
            )} */}
            <p className={styles.priceSub}>
              Everything you need to run a modern independent practice from day one.
            </p>
            <div className={styles.divider} />
            <ul className={styles.featureList}>
              {soloFeatures.map((f) => (
                <li key={f}>
                  <span className={styles.checkmark}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className={styles.btnCta} onClick={handleClaim}>
              Claim Your Room →
            </button>
          </div>

          {/* Clinic */}
          <div className={styles.card}>
            <p className={styles.planLabel}>Clinic</p>
            <div className={styles.price}>
              <span className={styles.amount} style={{ fontSize: '2rem', color: 'var(--color-text-primary)' }}>
                $599
              </span>
              <span className={styles.period}> / month</span>
            </div>
            <p className={styles.priceSub}>
              For small group practices. Up to 10 providers, centralized admin.
              <br /><strong>Coming June 2026.</strong>
            </p>
            <div className={styles.divider} />
            <ul className={styles.featureList}>
              {groupFeatures.map((f) => (
                <li key={f}>
                  <span className={styles.checkmark}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className={styles.btnOutline}>Join Waitlist</button>
          </div>
        </div>

        <div className={styles.trustStrip}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>💳</span>
            14-day free trial
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            Go live in 5 minutes
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>✕</span>
            Cancel anytime
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🛡️</span>
            HIPAA-ready
          </div>
        </div>
      </div>
    </section>
  );
}