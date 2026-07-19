'use client';

import { useEffect, useState } from 'react';
import styles from './HeroSection.module.scss';

const SLUGS = [
  'dr.lewis',
  'sarah-therapy',
  'dr-patel-cardiology',
  'nurse.jennifer',
  'oakland-wellness',
  'dr.chen-psychiatry',
];


export default function HeroSection() {
  const [tick, setTick] = useState(0);
  const [latency, setLatency] = useState(17);

  const [slugIndex, setSlugIndex] = useState(0);
  const [visible, setVisible]     = useState(true);

  // useEffect(() => {
  //   const t = setInterval(() => {
  //     setTick(p => p + 1);
  //     setLatency(14 + Math.floor(Math.random() * 8));
  //   }, 2200);
  //   return () => clearInterval(t);
  // }, []);


  useEffect(() => {
      const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setSlugIndex(i => (i + 1) % SLUGS.length);
          setVisible(true);
        }, 300);
      }, 2500);
      return () => clearInterval(interval);
  }, []);  
  
  return (
    <section className={styles.hero}>
      {/* ── top copy ── */}
      {/* <div className={styles.pill}>
        <span className={styles.pillDot} />
        Private telehealth rooms for independent practitioners
      </div> */}

      <div className={`${styles.roomExamples} ${styles.eyebrow}`}>
        <span className={styles.domain}>instaroom.link/</span>
        <span className={`${styles.slug} ${visible ? styles.visible : styles.hidden}`}>
          {SLUGS[slugIndex]}
        </span>
      </div>
      
      <h1 className={styles.headline}>
        Get your permanent<br />virtual room today.
      </h1>

      <p className={styles.sub}>
        Launch a secure, browser-native clinical room with jurisdiction checks,
        direct billing, and immutable session logs — without software installs
        or enterprise overhead.
      </p>

      <div className={styles.ctas}>
        <a href="#pricing" className={styles.ctaPrimary}>Claim Your Room →</a>
        <a href="/demo" className={styles.ctaSecondary}>
          <span className={styles.playIcon}>▶</span> Watch Demo
        </a>
      </div>

      {/* ── browser mockup ── */}
      <div className={styles.mockup}>
        {/* chrome bar */}
        <div className={styles.chrome}>
          <div className={styles.dots}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
          </div>
          <div className={styles.addressBar}>
            <span className={styles.activeDot} />
            instaroom.link/dr-malik
          </div>
          <div className={styles.nativeTag}>Native in Safari · No Install</div>
        </div>

        {/* content */}
        <div className={styles.mockupBody}>
          {/* ── video panel ── */}
          <div className={styles.videoPanel}>
            <div className={styles.secureTag}>
              <span className={styles.secureTagDot} />
              Secure room active
            </div>

            {/* ambient glow */}
            <div className={styles.glow} />

            {/* PiP — bottom-left on desktop, top-right on mobile */}
            <div className={styles.pip}>
              <div className={styles.pipVideo} />
              <div className={styles.pipMeta}>
                <div className={styles.pipName}>Avery Chen</div>
                <div className={styles.pipStatus}>Waiting room cleared · 02:14</div>
              </div>
            </div>
          </div>

          {/* ── telemetry panel — hidden on mobile ── */}
          <div className={styles.telemetry}>
            <div className={styles.telemetryTitle}>Room telemetry</div>
            <div className={styles.telemetrySub}>
              Real-time connection, license,<br />and billing state for every consult.
            </div>

            <div className={styles.telemetryRows}>
              <div className={styles.telemetryRow}>
                <span className={styles.telemetryLabel}>Jurisdiction</span>
                <span className={styles.telemetryVerified}>Verified</span>
              </div>
              <div className={styles.telemetryRow}>
                <span className={styles.telemetryLabel}>Connection</span>
                <span className={`${styles.telemetryValue} ${styles.telemetryMs}`} key={tick}>
                  {latency}ms
                </span>
              </div>
              <div className={styles.telemetryRow}>
                <span className={styles.telemetryLabel}>Session fee</span>
                <span className={styles.telemetryValue}>$150.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
