'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Security.module.scss';

import { MapPin, Video, Lock, CreditCard, ShieldCheck, FileSignature } from 'lucide-react';

const TRUST_SIGNALS = [
  {
    Icon: Video,
    title: 'We never see your video',
    desc:  'Sessions are peer-to-peer via WebRTC. Video never touches our servers.'
  },
  {
    Icon: CreditCard,
    title: 'We never store payment data',
    desc:  'All payments handled by Stripe. We never see card numbers or banking details.'
  },
  {
    Icon: Lock,
    title: 'Your data stays yours',
    desc:  'No selling, no sharing, no third-party ad tracking. Ever.'
  },
  {
    Icon: FileSignature,
    title: 'Consent before every session',
    desc:  'Digital consent captured and timestamped before video opens.'
  },
  {
    Icon: MapPin,
    title: 'Jurisdiction verified',
    desc:  'Client location verified against your licensed states before every session.'
  },
  {
    Icon: ShieldCheck,
    title: 'HIPAA-ready architecture',
    desc:  'Built for covered entities. BAA available on request.'
  },
];

const TECH_DETAILS = [
  {
    title: 'Video & Signaling',
    body:  <>All video runs on <code>MediaDance</code> — our native WebRTC infrastructure. Peer-to-peer connections use <code>RS256 JWT</code> tokens with short-lived credentials. No session data stored on our servers. Signaling uses <code>WSS</code> over DNS-only routing for direct connections.</>
  },
  {
    title: 'Authentication',
    body:  <>Provider passwords hashed with <code>bcrypt</code>. Sessions delivered via <code>httpOnly</code> cookies signed with <code>RS256 JWT</code>. Google OAuth2 supported with token rotation. No plaintext credentials stored.</>
  },
  {
    title: 'Data in Transit',
    body:  <>All data encrypted via <code>TLS 1.2+</code>. API endpoints served exclusively over <code>HTTPS</code>. WebSocket signaling over <code>WSS</code>. Cloudflare proxies API traffic with DDoS protection.</>
  },
  {
    title: 'Data at Rest',
    body:  <>Provider and appointment data stored in encrypted <code>Postgres</code> on Neon (us-east-2). Payment data never stored — handled entirely by Stripe. No PHI stored in video infrastructure.</>
  },
  {
    title: 'Payments & Payouts',
    body:  <>Payments processed via <code>Stripe Connect</code>. BYOS providers connect their own Stripe — we never touch the funds. Managed payout providers use Stripe's infrastructure. No card data ever hits our servers.</>
  },
  {
    title: 'Infrastructure',
    body:  <>API deployed on Railway. Frontend on Vercel. Signaling on Railway with DNS-only Cloudflare routing (required for WebRTC UDP). Automatic SSL certificate management. No single point of failure.</>
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

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>

        {/* Header */}
        <p className={styles.eyebrow}>// security</p>
        <h1 className={styles.headline}>Built to protect<br />the clinical relationship.</h1>
        <p className={styles.lead}>
          Every architectural decision — from video infrastructure to payment processing — 
          is designed to keep provider and client data private, compliant, and yours.
        </p>

        {/* Trust signals */}
        <div className={styles.trustGrid}>
          {TRUST_SIGNALS.map(({ Icon, title, desc }) => (
            <div key={title} className={styles.trustCard}>
              <div className={styles.trustIcon}>
                <Icon size={16} />
              </div>
              <div className={styles.trustTitle}>{title}</div>
              <p className={styles.trustDesc}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Architecture diagram */}
        <div className={styles.diagramSection}>
          <p className={styles.sectionTitle}>// how a session works</p>
          <div className={styles.diagram}>

            <div className={styles.diagramRow}>
              <div className={styles.diagramNode}>
                <div className={styles.nodeLabel}>Provider</div>
                <div className={styles.nodeDesc}>Browser — Safari / Chrome</div>
              </div>
              <div className={styles.diagramArrow}>
                <span>RS256 JWT</span>
                <span>←────────→</span>
              </div>
              <div className={styles.diagramNode}>
                <div className={styles.nodeLabel}>Client</div>
                <div className={styles.nodeDesc}>Browser — Safari / Chrome</div>
              </div>
            </div>

            <div className={styles.diagramDivider}>
              <div className={styles.dividerLine} />
            </div>

            <div className={styles.neverSees}>
              ⚡ WebRTC peer-to-peer — video never touches InstaRoom servers
            </div>

            <div className={styles.diagramDivider}>
              <div className={styles.dividerLine} />
            </div>

            <div className={styles.diagramRow}>
              <div className={`${styles.diagramNode} ${styles.teal}`}>
                <div className={styles.nodeLabel}>api.instaroom.link</div>
                <div className={styles.nodeDesc}>Appointments · Auth · Payments</div>
              </div>
              <div className={styles.diagramArrow}>
                <span>TLS 1.2+</span>
                <span>←────────→</span>
              </div>
              <div className={`${styles.diagramNode} ${styles.teal}`}>
                <div className={styles.nodeLabel}>svc.instaroom.link</div>
                <div className={styles.nodeDesc}>MediaDance · WebRTC Signaling</div>
              </div>
            </div>

            <div className={styles.diagramDivider}>
              <div className={styles.dividerLine} />
            </div>

            <div className={styles.diagramRow}>
              <div className={styles.diagramNode}>
                <div className={styles.nodeLabel}>Neon Postgres</div>
                <div className={styles.nodeDesc}>Encrypted · us-east-2</div>
              </div>
              <div className={styles.diagramArrow}>
                <span>+</span>
              </div>
              <div className={styles.diagramNode}>
                <div className={styles.nodeLabel}>Stripe Connect</div>
                <div className={styles.nodeDesc}>Payments · No card data stored</div>
              </div>
            </div>

          </div>
        </div>

        {/* Technical accordion */}
        <div className={styles.techSection}>
          <p className={styles.sectionTitle}>// technical details</p>
          <div className={styles.accordion}>
            {TECH_DETAILS.map(({ title, body }) => (
              <AccordionItem key={title} title={title} body={body} />
            ))}
          </div>
        </div>

        <p className={styles.contact}>
          Security questions or to request a penetration test report —{' '}
          <a href="mailto:hello@instaroom.link">hello@instaroom.link</a>
        </p>

      </div>
      <Footer />
    </>
  );
}