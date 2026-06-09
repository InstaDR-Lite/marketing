import Link from 'next/link';
import styles from './PricingSection.module.scss';

const soloFeatures = [
  '1 Permanent, White-Labeled Room Link',
  'Calendar-Led Practice Dashboard',
  'Instant Geo-Verification Guardrails',
  'Direct-to-Provider Stripe Payouts',
  'Unlimited MediaDance Native Video Minutes',
];

const groupFeatures = [
  'Dedicated MediaDance Signaling Gateway',
  'Custom Branding & Full White-Labeling',
  'Multi-Provider Dashboard & Audit Logs',
  'Priority Infrastructure Support',
];

// const proFeatures = [
//   'Enterprise SLA & Uptime Guarantees',
//   'Custom EMR / EHR Integrations',
//   'Dedicated Architecture Review',
//   'On-Premise Deployment Options',
// ];

export default function PricingSection() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>06 — Pricing</p>
          <h2 className={styles.headline}>
            One Clear Utility.<br />Unmatched Leverage.
          </h2>
          <p className={styles.desc}>
            A predictable subscription built exclusively for independent
            practitioners and clinics who value performance.
          </p>
        </div>

        <div className={styles.cards}>
          {/* Solo / Independent Practitioner — FEATURED */}
          <div className={styles.cardFeatured}>
            <span className={styles.popularTag}>Most Popular</span>
            <p className={styles.planLabelFeatured}>Independent Practitioner</p>
            <div className={styles.price}>
              <span className={styles.currency}>$</span>
              <span className={styles.amount}>79</span>
              <span className={styles.period}>&nbsp;/ month</span>
            </div>
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
            <button className={styles.btnCta}>
              <Link href="https://localhost:3000/signup?plan=monthly">Secure Your Room Link</Link>
            </button>
          </div>

          {/* Group Practice */}
          <div className={styles.card}>
            <p className={styles.planLabel}>Group Practice</p>
            <div className={styles.price}>
              <span className={styles.amount} style={{ fontSize: '2rem', color: 'var(--color-text-secondary)' }}>Custom</span>
            </div>
            <p className={styles.priceSub}>
              Tailored for multi-provider clinics and group practices with advanced needs.
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
            <button className={styles.btnOutline}>Contact Us</button>
          </div>

          {/* Pro / Enterprise */}
          {/* <div className={styles.card}>
            <p className={styles.planLabel}>Pro</p>
            <div className={styles.price}>
              <span className={styles.amount} style={{ fontSize: '2rem', color: 'var(--color-text-secondary)' }}>Enterprise</span>
            </div>
            <p className={styles.priceSub}>
              Enterprise-grade deployments with dedicated support and custom integrations.
            </p>
            <div className={styles.divider} />
            <ul className={styles.featureList}>
              {proFeatures.map((f) => (
                <li key={f}>
                  <span className={styles.checkmark}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className={styles.btnOutline}>Get in Touch</button>
          </div> */}
        </div>

        <div className={styles.trustStrip}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>💳</span>
            30-Day Free Trial (Card Required)
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
             Go live instantly
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>✕</span>
            1-Click cancellation anytime
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🛡️</span>
            Zero data stored
          </div>
        </div>
      </div>
    </section>
  );
}
