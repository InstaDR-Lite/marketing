'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './HIPAA.module.scss';
import Link from 'next/link';
import { MapPin, Video, Lock, CreditCard, ShieldCheck, FileSignature } from 'lucide-react';

const SAFEGUARDS = [
  {
    Icon: Video,
    title: 'Encrypted Video',
    desc:  'WebRTC with RS256 JWT authentication. Video is peer-to-peer — never stored.'
  },
  {
    Icon: Lock,
    title: 'Access Controls',
    desc:  'httpOnly cookie sessions. bcrypt password hashing. Token rotation on OAuth.'
  },
  {
    Icon: FileSignature,
    title: 'Digital Consent',
    desc:  'Captured, timestamped, and stored before video opens on every session.'
  },
  {
    Icon: MapPin,
    title: 'Geo-Verification',
    desc:  'Client jurisdiction verified against provider licensed states before every call.'
  },
  {
    Icon: CreditCard,
    title: 'No PHI in Payments',
    desc:  'Stripe handles all payment data. No card numbers or PHI in our payment flow.'
  },
  {
    Icon:  ShieldCheck,
    title: 'TLS 1.2+ in Transit',
    desc:  'All data encrypted in transit. HTTPS for API. WSS for signaling.'
  },
];

const HIPAA_RULES = [
  {
    title: 'Technical Safeguards (§164.312)',
    body: <>
      InstaRoom implements access controls via <code>httpOnly</code> JWT sessions,
      audit controls via appointment logging, integrity controls via RS256 signed tokens,
      and transmission security via <code>TLS 1.2+</code> and WebRTC encryption.
    </>
  },
  {
    title: 'What InstaRoom Covers',
    body: <>
      As your Business Associate, InstaRoom is responsible for the technical
      infrastructure safeguards — encrypted transmission, access controls,
      audit logging, and data storage security. We sign a BAA committing to
      these obligations legally.
    </>
  },
  {
    title: 'What You Cover as a Covered Entity',
    body: <>
      You remain responsible for administrative safeguards (staff training,
      policies and procedures), physical safeguards (workstation security),
      and obtaining appropriate client consent for telehealth sessions.
      InstaRoom provides the technical layer — your practice provides the rest.
    </>
  },
  {
    title: 'Business Associate Agreement (BAA)',
    body: <>
      A BAA is required by HIPAA before using InstaRoom with clients whose
      sessions involve PHI. InstaRoom provides a BAA to all covered entities.
      Contact <a href="mailto:hello@instaroom.link">hello@instaroom.link</a> to
      request a countersigned copy. We respond within 2 business days.
    </>
  },
  {
    title: 'Data Retention & Deletion',
    body: <>
      Appointment records retained for 7 years per medical record requirements.
      Video sessions are never recorded or stored. Provider accounts and associated
      data deleted within 30 days of account termination upon request.
    </>
  },
  {
    title: 'Disclaimer',
    body: <>
      This page describes InstaRoom&apos;s technical safeguards and is not legal advice.
      Consult your compliance officer or healthcare attorney for guidance specific
      to your practice and jurisdiction.
    </>
  },
];

function AccordionItem({ title, body }: { title: string; body: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={() => setOpen(!open)}>
        <span className={styles.accordionTitle}>{title}</span>
        <span className={`${styles.accordionChevron} ${open ? styles.open : ''}`}>▼</span>
      </button>
      {open && <div className={styles.accordionBody}>{body}</div>}
    </div>
  );
}

export default function HIPAAPage() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>

        {/* Header */}
        <p className={styles.eyebrow}>// hipaa compliance</p>
        <h1 className={styles.headline}>
          Built for covered entities.<br />
          <span>HIPAA-ready from day one.</span>
        </h1>
        <p className={styles.lead}>
          InstaRoom provides the technical infrastructure for independent 
          practitioners and clinics to conduct telehealth sessions in a 
          HIPAA-ready environment. Not bolted on. Built in.
        </p>

        {/* BAA callout */}
        <div className={styles.baaCallout}>
          <div className={styles.baaIcon}>📋</div>
          <div>
            <div className={styles.baaTitle}>Business Associate Agreement available</div>
            <p className={styles.baaDesc}>
              Required by HIPAA for covered entities. We provide a countersigned BAA 
              within 2 business days.
            </p>
          </div>
          <Link href="/baa" className={styles.baaButton}>
            Read BAA →
          </Link>
        </div>

        {/* Safeguards grid */}
        <div className={styles.sectionTitle}>// technical safeguards implemented</div>
        <div className={styles.trustGrid}>
          {SAFEGUARDS.map(({ Icon, title, desc }) => (
            <div key={title} className={styles.trustCard}>
              <div className={styles.trustIcon}>
                <Icon size={15}/>
              </div>
              <div className={styles.trustTitle}>{title}</div>
              <p className={styles.trustDesc}>{desc}</p>
            </div>
          ))}
        </div>

        {/* HIPAA rules accordion */}
        <div className={styles.techSection}>
          <p className={styles.sectionTitle}>// hipaa framework</p>
          <div className={styles.accordion}>
            {HIPAA_RULES.map(({ title, body }) => (
              <AccordionItem key={title} title={title} body={body} />
            ))}
          </div>
        </div>

        <p className={styles.contact}>
          Compliance questions or to request a BAA —{' '}
          <a href="mailto:hello@instaroom.link">hello@instaroom.link</a>
        </p>

      </div>
      <Footer />
    </>
  );
}