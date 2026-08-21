import Image from 'next/image';
import styles from './ClinicsPage.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, CheckCircle, Globe, ShieldCheck, Users, Calendar, Timeline, Tag } from 'lucide-react';
import { Zap, FileCheck, CreditCard, Lock, Sparkle } from 'lucide-react';

const HERO_CHECKS = [
  'No setup fees',
  'No long-term contracts',
  'Live in under an hour',
];

const FEATURES = [
  {
    Icon: Sparkle,
    title: 'AI onboarding',
    desc: 'Paste a Psychology Today profile. InstaRoom configures your providers\' rooms, intake forms, and patient experience automatically.'
  },
  {
    Icon: Users,
    title: 'Multi-provider scheduling',
    desc: 'Every provider gets their own room and calendar. Patients book the right person at the right time — automatically.'
  },
  {
    Icon: Lock,
    title: 'HIPAA-compliant by default',
    desc: 'Cryptographic audit seals, geo-verification, and consent capture on every session. Compliance is built in, not bolted on.'
  },
  {
    Icon: CreditCard,
    title: 'Clinic-wide billing',
    desc: 'Session fees, copay collection, and superbill generation across all providers — from one dashboard.'
  },
  {
    Icon: Timeline,
    title: 'Daily clinical timeline',
    desc: 'Your entire clinic\'s day in a single view. Filter by provider, see who\'s in session, what\'s upcoming, what\'s pending.'
  },
  {
    Icon: Tag,
    title: 'Your brand, your domain',
    desc: 'White-label branding and custom domains available for clinic partners. Your patients see your name, not ours.'
  },
];

// const FEATURES = [
//   {
//     icon: Users,
//     title: "Multi-Provider Dashboards",
//     desc: "Give every provider their own room and schedule while admins see the full clinic view at a glance. No more juggling separate accounts.",
//     badge: null,
//   },
//   {
//     icon: Calendar,
//     title: "Centralized Scheduling",
//     desc: "One calendar for the entire practice. Manage all provider schedules, availability windows, and patient flow from a single admin panel.",
//     badge: null,
//   },
//   {
//     icon: Palette,
//     title: "White-Label Branding",
//     desc: "Customize the patient-facing experience with your clinic's logo, colors, and domain. Patients see your brand — not ours.",
//     badge: "On Roadmap",
//   },
//   {
//     icon: ShieldCheck,
//     title: "HIPAA-Compliant Video",
//     desc: "End-to-end encrypted video rooms with BAA support, patient waiting rooms, and audit logging built in — not bolted on.",
//     badge: null,
//   },
//   {
//     icon: CreditCard,
//     title: "Stripe Billing Integration",
//     desc: "Collect copays, session fees, and subscriptions before or after appointments. Invoicing and receipts handled automatically.",
//     badge: null,
//   },
//   {
//     icon: Headphones,
//     title: "Dedicated Support",
//     desc: "A real human who knows your clinic's setup responds within hours — not a ticket queue with a 48-hour SLA.",
//     badge: null,
//   },
// ]

// const ROADMAP = [
//   { label: 'Live',         item: 'HIPAA-compliant video rooms' },
//   { label: 'Live',         item: 'AI-powered provider onboarding' },
//   { label: 'Live',         item: 'Cryptographic audit seals' },
//   { label: 'Live',         item: 'Session billing & superbills' },
//   { label: 'In Progress',  item: 'Clinic-wide scheduling calendar' },
//   { label: 'In Progress',  item: 'Multi-provider accounts' },
//   { label: 'Roadmap',      item: 'White-label branding & custom domains' },
//   { label: 'Roadmap',      item: 'EHR export (FHIR)' },
// ];

const TRUST_ITEMS =[ {
                  Icon: ShieldCheck,
                  label: "HIPAA Compliant",
                  sub: "BAA available",
                },
                { Icon: Lock, label: "Encrypted Video", sub: "256-bit end-to-end" },
                {
                  Icon: Building2,
                  label: "Clinics",
                  sub: "Across 12+ specialties",
                },
  { Icon: Globe, label: "99.9% Uptime", sub: "SLA-guaranteed" }
              ]
                
export default function ClinicsPage() {
  return (
    <>
          <Navbar />
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            For Clinics & Group Practices
          </div>

          <h1 className={styles.headline}>
            Telehealth built for how clinics actually work.
          </h1>

          <p className={styles.sub}>
            Multi-provider scheduling, HIPAA-compliant video rooms, and AI-powered onboarding — without the enterprise overhead.
          </p>

          <div className={styles.ctas}>
            <a
              href="mailto:rupesh@getinstaroom.com?subject=Clinic Inquiry"
              className={styles.ctaPrimary}
            >
              Book a demo
            </a>
            <a href="/ai" className={styles.ctaSecondary}> 
              Explore
            </a>
          </div>

           <div className={styles.checks}>
            {HERO_CHECKS.map(item => (
              <span key={item} className={styles.checkItem}>
                <CheckCircle size={14} style={{ color: 'var(--color-teal)', flexShrink: 0 }} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroImgWrap}>
            <Image
              src="/screenshots/clinic-daily-screenshot-1.png"
              alt="InstaRoom clinic daily timeline"
              width={640}
              height={480}
              className={styles.heroImg}
              priority
            />
          </div>
        </div>
      </section>


      <section className={styles.trustBar}>
        <div className={styles.trustInner}>
          {TRUST_ITEMS.map(({ Icon, sub, label }) => (
            <div key={sub} className={styles.trustItem}>
              <Icon size={18} color='green' />
              <div>
                <div className={styles.trustLabel}>{label}</div>
                <div className={styles.trustSub}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>// built for clinics</div>
          <h2 className={styles.sectionTitle}>
            Everything your clinic needs.<br />Nothing it doesn&apos;t.
          </h2>
          <div className={styles.grid}>
              {FEATURES.map(({ Icon, title, desc }) => (
              <div key={title} className={styles.card}>
                <Icon size={(20)} color='green'/>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Ready to bring your clinic online?
          </h2>
          <p className={styles.ctaSub}>
            We work directly with clinic owners to configure InstaRoom for your practice size, specialty, and workflow. No sales process — just a conversation.
          </p>
          <div className={styles.ctas} style={{justifyContent: 'center'}}>
            <a
              href="mailto:rupesh@getinstaroom.com?subject=Clinic Inquiry"
              className={styles.ctaPrimary}
            >
              Book a demo
            </a>
            <a href="/ai" className={styles.ctaSecondary}> 
              Contact us
            </a>
          </div>
          <div className={styles.checks}>
            {HERO_CHECKS.map(item => (
              <span key={item} className={styles.checkItem}>
                <CheckCircle size={14} style={{ color: 'var(--color-teal)', flexShrink: 0 }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
   <Footer />
  </>

  );
}