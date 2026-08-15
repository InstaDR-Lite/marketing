import CTASection from '@/components/cta/CTASection';
import styles from './AIPage.module.scss';
import { Brain, Shield, FileText, Sparkles, ClipboardList, Zap } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const LIVE_FEATURES = [
  {
    icon: <Brain size={20} />,
    label: 'Live',
    title: 'CPT Code Intelligence',
    description: 'Session duration and specialty automatically map to the correct billing codes. Ready to copy into your EHR — no lookup tables, no guesswork.',
  },
  {
    icon: <Shield size={20} />,
    label: 'Live',
    title: 'Cryptographic Audit Seals',
    description: 'Every session record is SHA-256 signed at close. Tamper-evident, legally defensible, and built toward RFC 3161 trusted timestamping standards.',
  },
  {
    icon: <FileText size={20} />,
    label: 'Live',
    title: 'Immutable Call Log',
    description: 'Write-once session records capturing consent, geo-verification, duration, and payment. Export as PDF, CSV, or FHIR.',
  },
  // {
  //   icon: <Zap size={20} />,
  //   label: 'Coming Soon',
  //   title: 'Superbill Generation',
  //   description: 'CPT and ICD-10 codes, provider NPI, and session details compiled into an insurance-ready superbill. One click to PDF.',
  // },
  {
    icon: <Sparkles size={20} />,
    label: 'Live',
    title: 'Your Room, Configured Instantly',
    description: 'Share your existing profile or website. InstaRoom sets up your room, intake flow, and patient experience automatically.',
  },
];

const COMING_FEATURES = [
];

export default function AIPage() {
  return (
    <main className={styles.page}>
      <Navbar/>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            InstaRoom AI
          </div>
          <h1 className={styles.headline}>
            Intelligence built<br />
            for clinical practice.
          </h1>
          <p className={styles.subheadline}>
            Every session generates a compliance record. Every audit trail is cryptographically sealed.
            Every billing code is suggested, not guessed.
            <br /><br />
            This is what AI looks like when it's built for healthcare — not bolted on.
          </p>
          <div className={styles.heroCtas}>
            <a href="/claim" className={styles.ctaPrimary}>Claim your room</a>
            <a href="#zennotes" className={styles.ctaSecondary}>Enrol for ZenNotes →</a>
          </div>
        </div>
        
      </section>

      {/* Live features */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>// live today</div>
          <h2 className={styles.sectionTitle}>AI built for how you actually practice.</h2>
          <div className={styles.grid3}>
            {LIVE_FEATURES.map(f => (
              <div key={f.title} className={styles.card}>
                <div className={styles.cardIcon}>{f.icon}</div>
                {/* <div className={styles.cardBadgeLive}>{f.label}</div> */}
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ZenNotes */}
      <section className={styles.zennotes} id="zennotes">
        <div className={styles.container}>
          <div className={styles.zennotesInner}>
            <div className={styles.zennotesLeft}>
              <div className={styles.sectionLabel}>// in development</div>
              <h2 className={styles.zennotesTitle}>ZenNotes</h2>
              <p className={styles.zennotesSubtitle}>Ambient Session Documentation</p>
              <p className={styles.zennotesDesc}>
                Stop typing notes after every session. ZenNotes listens, structures, and drafts
                — so you can focus on the patient, not the paperwork.
              </p>
              <ul className={styles.zennotesList}>
                <li>HIPAA-compliant from the ground up</li>
                <li>Built for telehealth — not adapted from it</li>
                <li>Designed for the way therapists actually work</li>
              </ul>
              <a href="mailto:rupesh@getinstaroom.com?subject=ZenNotes Early Access" className={styles.ctaPrimary}>
                Enrol for Early Access →
              </a>
            </div>
            <div className={styles.zennotesRight}>
              <div className={styles.zennotesVisual}>
                <div className={styles.zennotesCard}>
                  <div className={styles.zennotesCardLabel}>// session notes — draft</div>
                  <div className={styles.zennotesCardLine}>
                    <span className={styles.zennotesKey}>Presenting concern</span>
                    <span className={styles.zennotesValue}>Anxiety, relationship conflict</span>
                  </div>
                  <div className={styles.zennotesCardLine}>
                    <span className={styles.zennotesKey}>Interventions</span>
                    <span className={styles.zennotesValue}>CBT reframing, somatic grounding</span>
                  </div>
                  <div className={styles.zennotesCardLine}>
                    <span className={styles.zennotesKey}>Session duration</span>
                    <span className={styles.zennotesValue}>50 min — CPT 90837</span>
                  </div>
                  <div className={styles.zennotesCardLine}>
                    <span className={styles.zennotesKey}>Plan</span>
                    <span className={styles.zennotesValue}>Continue weekly sessions</span>
                  </div>
                  <div className={styles.zennotesCardFooter}>
                    ⚡ Generated — verify before finalizing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      {/* <section className={styles.footerCta}>
        <div className={styles.container}>
          <h2 className={styles.footerCtaTitle}>
            Built by practitioners, for practitioners.
          </h2>
          <p className={styles.footerCtaDesc}>
            InstaRoom is built by InstaDR — a healthcare infrastructure company
            building the tools independent practitioners deserve.
          </p>
          <a href="/claim" className={styles.ctaPrimary}>Claim your room free →</a>
        </div>
      </section> */}
      <CTASection />
      <Footer />

    </main>
  );
}