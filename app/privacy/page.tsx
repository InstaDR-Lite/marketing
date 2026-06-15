import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Privacy.module.scss';

const SECTIONS = [
  {
    num:   '1',
    title: 'Who We Are',
    body:  <>InstaRoom ("we", "us", "our") operates <code>getinstaroom.com</code> and <code>instaroom.link</code>. This policy describes how we collect, use, and protect your information.</>
  },
  {
    num:   '2',
    title: 'Information We Collect',
    body:  <>
      <p><strong>Providers:</strong> name, email, credentials, NPI number, licensed states, and payment account information via Stripe Connect.</p>
      <p><strong>Clients:</strong> name, email, and appointment details provided at booking or check-in.</p>
      <p>We do not store payment card data — all payment processing is handled by Stripe.</p>
    </>
  },
  {
    num:   '3',
    title: 'How We Use Your Information',
    body:  <>
      <p>Provider information is used to operate your InstaRoom account, sync appointments to Google Calendar, and process subscription payments.</p>
      <p>Client information is used solely to facilitate your telehealth session with your provider.</p>
    </>
  },
  {
    num:   '4',
    title: 'Data Sharing',
    body:  <>
      <p>We do not sell your data. We do not share your data with third parties except as required to operate the platform:</p>
      <ul className={styles.list}>
        <li>Stripe — payment processing</li>
        <li>SendGrid — transactional email</li>
        <li>Google — calendar sync (only if connected)</li>
        <li>Neon — encrypted database hosting</li>
      </ul>
    </>
  },
  {
    num:   '5',
    title: 'Video Sessions',
    body:  <>Video sessions are transmitted peer-to-peer via WebRTC. We do not record, store, or have access to the content of your video sessions. Video never touches our servers.</>
  },
  {
    num:   '6',
    title: 'Cookies',
    body:  <>InstaRoom uses <code>httpOnly</code> session cookies for provider authentication only. We do not use third-party tracking cookies, advertising cookies, or analytics cookies.</>
  },
  {
    num:   '7',
    title: 'Data Retention',
    body:  <>
      <p>Provider account data is retained for the duration of your subscription and deleted upon request.</p>
      <p>Appointment records are retained for 7 years in compliance with medical record retention requirements.</p>
      <p>Video sessions are never recorded or stored.</p>
    </>
  },
  {
    num:   '8',
    title: 'Your Rights',
    body:  <>
      <p>You may request access to, correction of, or deletion of your personal data at any time.</p>
      <ul className={styles.list}>
        <li>Email us at hello@instaroom.link</li>
        <li>Providers may delete their account from the Settings panel</li>
        <li>We respond to all data requests within 30 days</li>
      </ul>
    </>
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.docMeta}>
            <span className={styles.docType}>Legal Document</span>
            <span className={styles.docDate}>Effective June 15, 2026</span>
          </div>
          <h1 className={styles.headline}>Privacy Policy</h1>
          <p className={styles.parties}>
            This policy describes how <strong>InstaRoom</strong> collects, 
            uses, and protects your information when you use our platform.
          </p>
        </div>

        {/* Quick summary */}
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>🚫</div>
            <div className={styles.summaryTitle}>We never sell your data</div>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>🎥</div>
            <div className={styles.summaryTitle}>We never see your video</div>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>💳</div>
            <div className={styles.summaryTitle}>We never store card data</div>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>🍪</div>
            <div className={styles.summaryTitle}>No tracking cookies</div>
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