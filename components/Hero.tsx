import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />
      <div className={styles.bgCircle} />
      <div className={styles.bgCircle} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          ⬡ &nbsp;Built on MediaDance Real-Time Core
        </div>

        <h1 className={styles.headline}>
          On-Demand Medical<br />
          Consultations.{' '}
          <span className={styles.accent}>Instantly.</span>
        </h1>

        <p className={styles.subheadline}>
          Connect with your patients in under 2 minutes. No app downloads required.
          Fully native web telehealth optimized for clinical performance.
        </p>

        <div className={styles.ctaGroup}>
          <button className={styles.btnPrimary}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Create Your Permanent Room Link
          </button>
          <button className={styles.btnSecondary}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l6 4-6 4V4z" fill="currentColor"/>
            </svg>
            Watch Demo
          </button>
        </div>
      </div>

      <div className={styles.statsStrip}>
        <div className={styles.stat}>
          <div className={styles.statValue}>&lt;2 min</div>
          <div className={styles.statLabel}>Patient Connect Time</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>sub-45ms</div>
          <div className={styles.statLabel}>Real-Time Latency</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>0 cuts</div>
          <div className={styles.statLabel}>Revenue Taken</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>Zero</div>
          <div className={styles.statLabel}>Apps to Install</div>
        </div>
      </div>
    </section>
  );
}
