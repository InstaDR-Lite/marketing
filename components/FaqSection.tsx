'use client';

import { useState } from 'react';
import styles from './FaqSection.module.scss';
import Link from 'next/link';

const faqs = [
  {
    q: 'Do my patients need to download an app?',
    a: '<strong>No.</strong> That\'s the whole point. Your patient taps the link you send them and the call opens natively inside Safari or Chrome — on any device. Zero installs, zero friction, zero support calls from patients who can\'t figure out the app.',
  },
  {
    q: 'How is InstaRoom different from doxy.me?',
    a: 'doxy.me is a video tool with clinical features bolted on. <strong>InstaRoom is built around the clinical relationship, not the video call.</strong> That means geo-verification before the call connects, consent flows built in, recurring billing tied to appointments, and direct Stripe payouts with zero cuts — not afterthoughts, not add-ons.',
  },
  {
    q: 'What does "permanent room link" mean?',
    a: 'You get one link. It\'s yours forever. Send it to every patient, put it in your email signature, add it to your Psychology Today profile. Patients always know where to find you. <strong>No generating a new link for every session.</strong> No expiring URLs. No confusion.',
  },
  {
    q: 'How does geo-verification work?',
    a: 'The moment a patient enters your waiting queue, their physical location is silently verified via browser geolocation. You see their jurisdiction confirmed — or flagged — <strong>before the call even connects.</strong> No manual checking, no compliance guesswork. If they\'re outside your licensed states, you know immediately.',
  },
  {
    q: 'How do I get paid?',
    a: '<strong>Directly.</strong> You connect your existing Stripe account in under 30 seconds. Co-pays and session fees route straight to your bank the moment the consultation ends. We never touch your revenue. If you don\'t have a Stripe account, we can route through ours for a <code>2%</code> platform fee — the rest goes straight to you.',
  },
  {
    q: 'Can I set up recurring appointments and billing?',
    a: '<strong>Yes — and this is one of the biggest gaps in doxy.me.</strong> Create a recurring appointment series — weekly, biweekly, monthly — and billing fires automatically after each session. No chasing invoices. No manual charges. Your Thursday 3pm client is booked and billed automatically, every week.',
  },
  {
    q: 'Does it sync with my existing calendar?',
    a: 'Yes. <strong>Two-way Google Calendar sync</strong> is built in — appointments you create in InstaRoom appear in your Google Cal, and changes you make in Google Cal reflect back. We also generate an <code>.ics</code> feed you can subscribe to from Apple Calendar or Outlook.',
  },
  {
    q: 'What happens when a patient clicks the invite link?',
    a: 'They go through a lightweight pre-call gate: name confirmation, <strong>e-consent</strong> (stored against the appointment), camera and mic check, silent geo-verification, and copay payment if you\'ve set one. Then they land in a waiting room until you admit them. The whole thing takes under 90 seconds.',
  },
  {
    q: 'Is the video actually reliable on 4G?',
    a: '<strong>Yes.</strong> InstaRoom runs on MediaDance — our own native WebRTC infrastructure with a strict ≤150ms round-trip latency boundary. It adapts dynamically to weak cellular connections in real time. Your patient in a parking lot between sessions will still have a clean call.',
  },
  {
    q: 'Is InstaRoom HIPAA compliant?',
    a: 'The platform is architected for HIPAA compliance — <strong>no clinical data or session metadata is stored on our servers.</strong> Patient communication channels run completely isolated. We sign a BAA with all providers. That said, HIPAA compliance is a shared responsibility — your workflows and device security matter too.',
  },
  {
    q: 'Can I share files during a session?',
    a: '<strong>Yes.</strong> You can upload files during a call — lab results, prescriptions, referral letters — and your patient can download them immediately. Files are stored on encrypted infrastructure with signed URLs and are accessible for 30 days post-session. A download link is also included in the post-session follow-up email.',
  },
  {
    q: 'What is the $49/month plan and what does it include?',
    a: 'Everything an independent practitioner needs to run a modern virtual practice: <strong>one permanent white-labeled room link, calendar-led dashboard, geo-verification, direct Stripe payouts, SendGrid email notifications, and unlimited video minutes</strong> powered by MediaDance. No hidden fees, no per-session charges, no percentage of your revenue.',
  },
  {
    q: 'Can I cancel anytime?',
    a: '<strong>Yes.</strong> No contracts, no lock-in. Cancel from your dashboard at any time. Your room link stays active until the end of your billing period.',
  },
  {
    q: 'I\'m a group practice. Is there a plan for that?',
    a: 'Yes — the <strong>Group Practice</strong> tier is built for multi-provider clinics. It includes a dedicated MediaDance signaling gateway, custom branding and full white-labeling, multi-provider dashboard with audit logs, and priority infrastructure support. Reach out to our architecture team for pricing.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>faq</p>
          <h2 className={styles.headline}>
            Questions providers ask<span className="cursor" />
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.open : ''}`}
            >
              <button
                className={styles.itemHeader}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <div className={styles.questionWrap}>
                  <span className={styles.index}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.question}>{faq.q}</span>
                </div>
                <span className={styles.indicator} aria-hidden="true" />
              </button>

              <div
                className={styles.answer}
                role="region"
                aria-hidden={openIndex !== i}
              >
                <p
                  className={styles.answerText}
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaStrip}>
          <span className={styles.ctaText}>
            Still have questions? We answer within one business day.
          </span>
          <button className={styles.ctaBtn}>
            <Link href="mailto:rupesh@getinstaroom.com">contact us</Link>
          </button>
        </div>
      </div>
    </section>
  );
}