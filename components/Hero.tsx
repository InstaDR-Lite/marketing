'use client';

import styles from './Hero.module.scss';
import Image from 'next/image';

import { useEffect, useState } from 'react';

const SLUGS = [
  'dr.lewis',
  'sarah-therapy',
  'dr-patel-cardiology',
  'nurse.jennifer',
  'oakland-wellness',
  'dr.chen-psychiatry',
];


export default function Hero() {

  const [slugIndex, setSlugIndex] = useState(0);
  const [visible, setVisible]     = useState(true);

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
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />
      <div className={styles.bgCircle} />
      <div className={styles.bgCircle} />

      {/* <div className={styles.eyebrow}>
        ⬡ &nbsp;Your permanent clinical room
      </div> */}


      <div className={`${styles.roomExamples} ${styles.eyebrow}`}>
        <span className={styles.domain}>instaroom.link/</span>
        <span className={`${styles.slug} ${visible ? styles.visible : styles.hidden}`}>
          {SLUGS[slugIndex]}
        </span>
      </div>
      <h1 className={styles.headline}>
        Get your permanent virtual room today
      </h1>

      <p className={styles.subheadline}>
        Get your telehealth room in 5 minutes.
        One link. Every patient. Any device.
        No app downloads. No scheduling friction.
      </p>

      <div className={styles.ctaGroup}>
        <button
          className={styles.btnPrimary}
          onClick={() => window.location.href = '/#pricing'}
        >
          {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg> */}
          Claim Your Room →
        </button>
        <button className={styles.btnSecondary}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l6 4-6 4V4z" fill="currentColor"/>
          </svg>
          Watch Demo
        </button>
      </div>

       <Image
          src="/dashboard-preview.jpg"
          alt="InstaRoom Dashboard"
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
      
      {/* <div className={styles.statsStrip}>
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
      </div> */}
    </section>
  );
}
