'use client';
import { Link,  Zap, Video, User } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './About.module.scss';
import Image from 'next/image';


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
  

        {/* Replace or expand your current // founder block */}
        <div className={styles.mission}>
            <span className={styles.sectionTitle}>// OUR MISSION</span>

            <div className={styles.bodyText}>
              <p>
                <b>Why we exist</b><br/>
                Therapists, counselors, and independent clinicians spend too much of their day
                on work that has nothing to do with care. Chasing intake forms. Managing Zoom links.
                Bouncing between billing tabs. Wrestling with software built for enterprise hospitals
                or sales teams — not for a solo practitioner between sessions.
              </p>

              <p>
                <b>What we&apos;re building</b><br/>
                InstaRoom gives every independent clinician and small group practice one permanent,
                HIPAA-compliant room. Patients book, complete intake, join a session, and pay —
                all from a single link that never changes. The administrative weight lifts.
                The therapeutic relationship becomes the only thing that matters.
              </p>

              <p>
                <b>Where we&apos;re headed</b><br/>
                A future where a clinician&apos;s entire practice runs from one link — and the hour
                before a session is spent preparing for the patient, not preparing the technology.
                State verification, digital consent, and compliance audit logs happen silently
                in the background. The technology disappears. Care remains.
              </p>

              <p>
                The smallest solo practice deserves the same calm, dependable online presence
                as a large healthcare group. That&apos;s what we&apos;re building — one room at a time.
              </p>
            </div>

            <div className={styles.founderSig}>
              <Image
                src="/rupesh-pandey.jpg"
                alt="Rupesh Pandey"
                className={styles.founderAvatar}
                width={80}
                height={80}
              />
              <span><strong>Rupesh Pandey</strong> · Founder, InstaRoom</span>
              <a
                href="https://www.linkedin.com/in/rp2701"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinLink}
                aria-label="Rupesh Pandey LinkedIn Profile"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
                </svg>
              </a>
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
              InstaRoom runs on <b><a href="https://telehealth-marketing.vercel.app/" target="_blank" rel="noopener noreferrer">MediaDance</a></b>  — our own native WebRTC 
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
          Questions? <a href="mailto:rupesh@getinstaroom.com">rupesh@getinstaroom.com</a>
          <br />
          <span>San Francisco, CA · 2026</span>
        </p>

      </div>
      <Footer />
    </>
  );
}