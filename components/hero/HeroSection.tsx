'use client';

import { useEffect, useState } from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import BookDemoModal from '../bookdemo/BookDemoModal';

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
  const [visible, setVisible] = useState(true);
  const [showDemo, setShowDemo] = useState(false);

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
    <section className={styles.hero} id="hero">
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
        Get your virtual room today.
      </h1>

      <p className={styles.sub}>
        Launch a secure, browser-native clinical room with jurisdiction checks,
        direct billing, and immutable session logs — without software installs
        or enterprise overhead.
      </p>


      <div>
        <Image
          src="/hero-dash.png"
          alt="InstaRoom dashboard"
          width={1040}
          height={650}
          className={`${styles.heroImg} ${styles.darkInvert}`}
          priority
        />
      </div>
      <div className={styles.ctas} id="demo">
        <a href="#pricing" className={styles.ctaPrimary}>Claim Your Room</a>
        <button onClick={() => setShowDemo(true)} className={styles.ctaSecondary}>
          Book a 15-minute demo
        </button>
      </div>

      {showDemo && <BookDemoModal onClose={() => setShowDemo(false)} />}
    </section>
  );
}
