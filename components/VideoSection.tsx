import styles from './VideoSection.module.scss';
import Image from 'next/image';
import { Zap, Video, Proportions } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className={styles.section} id="video">
      <div className={styles.container}>

        {/* Left — copy */}
        <div className={styles.text}>
          <p className={styles.sectionLabel}>03 — VIDEO EXPERIENCE</p>
          <h2 className={styles.headline}>
            HD Video.<br />Native Browser.
          </h2>
          <p className={styles.desc}>
            No plugins. No downloads. No friction.
            Built on MediaDance — our own WebRTC infrastructure.

          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Zap size={16} color="var(--color-teal)" />
              </div>
              <div className={styles.featureText}>
                <h4>Zero-Install</h4>
                <p>
                  Client taps the link → session opens in Safari or Chrome.
                  Nothing to download. Ever.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Proportions size={16} color="var(--color-teal)" />
              </div>
              <div className={styles.featureText}>
                <h4>Works Everywhere</h4>
                <p>
                  Desktop, tablet, mobile. Any device your client has.
                  No compatibility issues.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Video size={16} color="var(--color-teal)" />
              </div>
              <div className={styles.featureText}>
                <h4>Built on MediaDance</h4>
                <p>
                  Our own real-time video infrastructure.
                  Peer-to-peer, encrypted, built for clinical performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — screenshot */}
        <div className={styles.screenshotWrap}>
          <div className={styles.screenshotBadge}>
            <span className={styles.liveDot} />
            LIVE SESSION
          </div>
          <Image
            src="/screenshots/session-view.jpg"
            alt="InstaRoom video session"
            width={1200}
            height={750}
            className={styles.screenshot}
            priority
          />
          <div className={styles.browserChip}>
            Native in <span>Safari</span> · No install
          </div>
        </div>

      </div>
    </section>
  );
}