import styles from './VideoSection.module.scss';

export default function VideoSection() {
  return (
    <section className={styles.section} id="video">
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.sectionLabel}>03 — Video Experience</p>
          <h2 className={styles.headline}>
            Video That Feels<br />In-Person
          </h2>
          <p className={styles.desc}>
            No stuttering audio. No pixelated frames. Just an unshakeable connection
            built on our native real-time video core.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📱</div>
              <div className={styles.featureText}>
                <h4>Zero-Install Simplicity</h4>
                <p>
                  Your patient taps a single link on their phone and instantly enters
                  the call natively inside Safari or Chrome.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📡</div>
              <div className={styles.featureText}>
                <h4>Adaptive Pipe Stability</h4>
                <p>
                  Built to dynamically adjust to weak 4G cellular links in real time,
                  keeping your consultation flawless even when your patient is on the move.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.phoneMockup}>
          <div className={styles.phone}>
            <div className={styles.phoneBar}>
              <div className={styles.phoneDot} />
            </div>
            <div className={styles.videoFrame}>
              <div className={styles.videoGradient} />
              <div className={styles.videoAvatar}>👨‍⚕️</div>
              <div className={styles.liveChip}>
                <div className={styles.liveDot} />
                LIVE
              </div>
            </div>
            <div className={styles.phoneControls}>
              <div className={styles.ctrl}>🎤</div>
              <div className={styles.ctrl}>📷</div>
              <div className={styles.ctrlEnd}>📞</div>
            </div>
          </div>
          <div className={styles.browserChip}>
            Native in <span>Safari</span> · No install
          </div>
        </div>
      </div>
    </section>
  );
}
