import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Terms.module.scss';

const SECTIONS = [
  {
    num:   '1',
    title: 'The Service',
    body:  <>InstaRoom provides a telehealth platform for independent healthcare 
            providers to conduct video sessions with their clients. We provide 
            the infrastructure — video, scheduling, payments, and compliance tools. 
            We are not a healthcare provider and do not provide medical advice.</>
  },
  {
    num:   '2',
    title: 'Provider Accounts',
    body:  <>Providers must be licensed healthcare professionals in their 
            respective jurisdictions. You are responsible for ensuring your 
            use of InstaRoom complies with applicable laws, licensing requirements, 
            and professional standards in every state where you practice.</>
  },
  {
    num:   '3',
    title: 'Subscription & Billing',
    body:  <>
      <p>InstaRoom is billed monthly ($79/mo) or annually ($599/yr). 
      Your subscription begins after the 30-day free trial.</p>
      <ul className={styles.list}>
        <li>Cancel at any time from Settings</li>
        <li>Cancellation takes effect at end of current billing period</li>
        <li>No refunds for partial periods</li>
        <li>30-day free trial — card required to start</li>
      </ul>
    </>
  },
  {
    num:   '4',
    title: 'Payments & Platform Fees',
    body:  <>
      <p>Client copay collection is processed via Stripe Connect.</p>
      <ul className={styles.list}>
        <li>BYOS (Bring Your Own Stripe) — 0% platform fee</li>
        <li>Managed payouts — 2% per transaction</li>
        <li>InstaRoom is not responsible for payment disputes between providers and clients</li>
      </ul>
    </>
  },
  {
    num:   '5',
    title: 'Acceptable Use',
    body:  <>
      <p>You may not use InstaRoom to:</p>
      <ul className={styles.list}>
        <li>Conduct sessions outside your licensed jurisdiction</li>
        <li>Practice without a valid license</li>
        <li>Collect payment for services not rendered</li>
        <li>Violate any applicable law or regulation</li>
      </ul>
      <p>We reserve the right to suspend accounts that violate these terms.</p>
    </>
  },
  {
    num:   '6',
    title: 'Client Data & Consent',
    body:  <>As a provider you are responsible for obtaining appropriate consent 
            from your clients before conducting telehealth sessions. InstaRoom 
            provides digital consent capture as a convenience — you remain 
            responsible for the adequacy of consent under applicable law.</>
  },
  {
    num:   '7',
    title: 'Availability',
    body:  <>We aim for high availability but do not guarantee uninterrupted 
            service. InstaRoom is not liable for losses resulting from 
            service interruptions, network issues, or technical failures.</>
  },
  {
    num:   '8',
    title: 'Termination',
    body:  <>You may terminate your account at any time from Settings. 
            We may terminate accounts that violate these terms with 
            reasonable notice except in cases of serious violations.</>
  },
  {
    num:   '9',
    title: 'Governing Law',
    body:  <>These terms are governed by the laws of the State of California. 
            Any disputes shall be resolved in the courts of San Francisco County, California.</>
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.docMeta}>
            <span className={styles.docType}>Legal Document</span>
            <span className={styles.docDate}>Effective June 15, 2026</span>
            <span className={styles.docStatus}>Draft — Pending Attorney Review</span>
          </div>
          <h1 className={styles.headline}>Terms of Service</h1>
          <p className={styles.parties}>
            By using <strong>InstaRoom</strong> you agree to these terms. 
            Please read them carefully.
          </p>
        </div>

        {/* Key terms summary */}
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>💳</div>
            <div className={styles.summaryTitle}>$79/mo or $599/yr</div>
            <div className={styles.summaryDesc}>30-day free trial</div>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>⚡</div>
            <div className={styles.summaryTitle}>0% platform fee</div>
            <div className={styles.summaryDesc}>BYOS providers</div>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>✕</div>
            <div className={styles.summaryTitle}>Cancel anytime</div>
            <div className={styles.summaryDesc}>No lock-in</div>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>🏛️</div>
            <div className={styles.summaryTitle}>California law</div>
            <div className={styles.summaryDesc}>San Francisco courts</div>
          </div>
        </div>

        {/* Sections */}
        <div className={styles.sections}>
          {SECTIONS.map(({ num, title, body }) => (
            <div key={num} className={styles.section}>
              <div className={styles.sectionNum}>{num}</div>
              <div className={styles.sectionBody}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                <div className={styles.sectionContent}>{body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.docFooter}>
          <div className={styles.disclaimer}>
            This is a draft document pending review by a licensed attorney. 
            Subject to revision before general availability.
          </div>
          <div className={styles.contact}>
            <a href="mailto:hello@instaroom.link">hello@instaroom.link</a>
            <span>InstaRoom · San Francisco, CA · 2026</span>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}