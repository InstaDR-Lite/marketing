import styles from './FeaturesBento.module.scss';
import { Zap, ShieldCheck, FileCheck, CreditCard, Lock, Sparkle } from 'lucide-react';

export function FeaturesBento() {
  return (
    <section className={styles.section } id="bento">
    
      <div className={styles.container}>

      
      <div className={styles.headerRow}>
        <div>
          <span className={styles.kicker}>// WHAT'S INSIDE</span>
          <h2 className={styles.title}>Built for the workflow therapists actually use.</h2>
        </div>
        <p className={styles.subtitle}>
          The lifetime-of-the-practice video room, the audit-trail clinicians can hand a regulator, and direct payment routing.
        </p>
      </div>

      <div className={styles.bentoGrid}>
        {/* HERO BENTO CARD WITH INTEGRATED HISTOGRAM */}
        <div className={`${styles.card} ${styles.heroCard}`}>
          <div className={styles.heroContent}>
            <div className={styles.iconWrapper}>
              <Zap size={20} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Secure, Sub-45ms WebRTC Video, peer-to-peer first</h3>
            <p className={styles.cardText}>
              A proprietary stack called <strong>MediaDance</strong> negotiates a direct connection between clinician and patient — no media ever traverses our servers in the steady state.
            </p>
          </div>

          {/* HISTOGRAM WIDGET */}
          <div className={styles.histogramWidget}>
            <div className={styles.histogramHeader}>
              <span className={styles.histogramMetricLabel}>Median round-trip</span>
              <div className={styles.histogramMetricValue}>
                38<span>ms</span>
              </div>
            </div>

            <div className={styles.barChart}>
              <span className={styles.bar} style={{ height: '28%' }} aria-hidden="true" />
              <span className={styles.bar} style={{ height: '36%' }} aria-hidden="true" />
              <span className={styles.bar} style={{ height: '24%' }} aria-hidden="true" />
              <span className={styles.bar} style={{ height: '62%' }} aria-hidden="true" />
              <span className={styles.bar} style={{ height: '38%' }} aria-hidden="true" />
              {/* Highlight Bar */}
              <span className={`${styles.bar} ${styles.barActive}`} style={{ height: '92%' }} aria-hidden="true" />
              <span className={styles.bar} style={{ height: '54%' }} aria-hidden="true" />
              <span className={styles.bar} style={{ height: '48%' }} aria-hidden="true" />
              <span className={styles.bar} style={{ height: '32%' }} aria-hidden="true" />
              <span className={styles.bar} style={{ height: '70%' }} aria-hidden="true" />
              <span className={styles.bar} style={{ height: '52%' }} aria-hidden="true" />
            </div>

            <p className={styles.histogramFooter}>
              Peer-to-peer, last 24 hours · US + CA
            </p>
          </div>
        </div>

        {/* SECONDARY CARDS */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Sparkle size={20} />
          </div>
          <h3 className={styles.cardTitle}>Your Room, Configured Instantly</h3>
          <p className={styles.cardText}>Share your existing profile or website. InstaRoom sets up your room, intake flow, and patient experience automatically. </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}><FileCheck size={20} /></div>
          <h3 className={styles.cardTitle}>Bounded e-consent and Geo-Verification</h3>
          <p className={styles.cardText}>Electronic consent is cryptographically bound to the call record — admissible and immutable.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconWrapper}><CreditCard size={20} /></div>
          <h3 className={styles.cardTitle}>Practice-first payments</h3>
          <p className={styles.cardText}>Funds route through your own Stripe account when you bring your own.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}><Lock size={20} /></div>
          <h3 className={styles.cardTitle}>Immutable audit call logs</h3>
          <p className={styles.cardText}>Write-once at session close: room URL, attendees, consent, geo-check. Export as PDF or FHIR.</p>
        </div>

        </div>
        </div>
    </section>
  );
}