'use client';
import { Link, Zap, Video, Lock, CreditCard, ShieldCheck, User } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './About.module.scss';

const VALUES = [
  {
    Icon: User,
    title: 'Clinical relationship first',
    desc:  'Every tool we build gets out of the way so providers can focus on what matters — their clients.'
  },
  {
    Icon: Link,
    title: 'One permanent link',
    desc:  'Every client. Any device. No app downloads. No scheduling friction. No middlemen.'
  },
  {
    Icon: Video,
    title: 'Independent. Always.',
    desc:  'Not affiliated with any insurance network, health system, or referral platform. Your practice stays yours.'
  },
  {
    Icon: Zap,
    title: 'Built, not bolted',
    desc:  'Security, consent, geo-verification, and payments are built into every session — not added as plugins.'
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>

        {/* Header */}
        <p className={styles.eyebrow}>// about</p>
        <h1 className={styles.headline}>
          Built for the<br />
          <span>independent practitioner.</span>
        </h1>
        <p className={styles.lead}>
          InstaRoom is a permanent telehealth room platform for therapists, 
          nurse practitioners, specialists, and family medicine providers. 
          One link. Every client. Any device.
        </p>

        {/* Founder note */}
        <div className={styles.founderNote}>
          <div className={styles.founderIcon}>// founder</div>
          <p>
           After watching 
            independent providers struggle with bloated, expensive telehealth 
            tools, we built the platform we wished existed — fast, fair, and 
            built around the clinical relationship.
          </p>
          <div className={styles.founderSig}>
            Rupesh Pandey · Founder, InstaRoom
          </div>
        </div>

        {/* Values grid */}
        <p className={styles.sectionTitle}>// what we believe</p>
        <div className={styles.valuesGrid}>
          {VALUES.map(({ Icon, title, desc }) => (
            <div key={title} className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Icon size={16} />
              </div>
              <div className={styles.valueTitle}>{title}</div>
              <p className={styles.valueDesc}>{desc}</p>
            </div>
          ))}
        </div>

        {/* MediaDance callout */}
        <div className={styles.mediadanceCallout}>
          <div className={styles.mdLeft}>
            <div className={styles.mdEyebrow}>// infrastructure</div>
            <div className={styles.mdTitle}>Built on MediaDance</div>
            <p className={styles.mdDesc}>
              InstaRoom runs on MediaDance — our own native WebRTC 
              real-time infrastructure. Every session is encrypted, 
              peer-to-peer, and built for clinical performance. 
              Not Twilio. Not Daily. Ours.
            </p>
          </div>
          <div className={styles.mdStats}>
            <div className={styles.mdStat}>
              <div className={styles.mdStatValue}>P2P</div>
              <div className={styles.mdStatLabel}>video routing</div>
            </div>
            <div className={styles.mdStat}>
              <div className={styles.mdStatValue}>RS256</div>
              <div className={styles.mdStatLabel}>JWT signing</div>
            </div>
            <div className={styles.mdStat}>
              <div className={styles.mdStatValue}>0 KB</div>
              <div className={styles.mdStatLabel}>client install</div>
            </div>
          </div>
        </div>

        <p className={styles.contact}>
          Questions? <a href="mailto:hello@instaroom.link">hello@instaroom.link</a>
          <br />
          <span>San Francisco, CA · 2026</span>
        </p>

      </div>
      <Footer />
    </>
  );
}