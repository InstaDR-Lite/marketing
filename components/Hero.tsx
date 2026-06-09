import styles from './Hero.module.scss';
import Image from 'next/image';

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
          Every telehealth session. Documented. Paid. Compliant.
          {/* <span className={styles.accent}>easier.</span> */}
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
            Create Your Room Link
          </button>
          <button className={styles.btnSecondary}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l6 4-6 4V4z" fill="currentColor"/>
            </svg>
            Watch Demo
          </button>
        </div>
      </div>

       <Image
          src="/dashboard-preview.jpg"
          alt="InstaDR-Lite Dashboard"
          width={900}
        height={900}
        style={{
            objectFit: 'cover',
            borderRadius: '12px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)', 
          margin: '32px 0',
          height: 'auto',
          width: '100%',
            maxWidth: '900px',
        }}
          // className="w-full border border-[rgba(0,80,40,0.18)]"
          priority
      />
      
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
