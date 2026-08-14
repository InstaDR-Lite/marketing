'use client';

import { useState } from 'react';
import styles from './PricingSection.module.scss';


import { 
  Link, 
  Video, 
  Calendar, 
  CreditCard, 
  ShieldCheck, 
  Users, 
  Download, 
  Building2, 
  LayoutDashboard, 
  Zap, 
  Sparkles, 
  Headphones 
} from 'lucide-react';

export const soloPractice = [
  { icon: Link, text: '1 permanent room  (instaroom.link/your-name)' },
  { icon: Video, text: 'Unlimited HD video sessions' },
  { icon: Calendar, text: 'Calendar + Google Calendar sync' },
  { icon: CreditCard, text: 'Direct Stripe payouts — 2% platform fee' },
  { icon: ShieldCheck, text: 'Geo-verification + digital consent' },
  { icon: Users, text: 'Patient virtual waiting room' },
  { icon: Download, text: 'Export session records in PDF, CSV, or FHIR' },
];

export const clinic = [
  { icon: Sparkles, text: 'Everything in Solo, plus:' },
  { icon: Building2, text: 'Up to 5 permanent rooms included' },
  { icon: Users, text: '$29/mo per additional clinician room' },
  { icon: LayoutDashboard, text: 'Centralized admin & audit dashboard' },
  { icon: Calendar, text: 'Multi-provider scheduling' },
  { icon: Zap, text: 'Dedicated MediaDance signaling' },
  { icon: Headphones, text: 'Priority support & onboarding' },
];

export const clinicPro = [
  { icon: Sparkles, text: 'Everything in Clinic, plus:' },
  { icon: Building2, text: 'Up to 10 permanent rooms included' },
  { icon: Sparkles, text: 'Custom branding & white-labeling' },
  { icon: Video, text: 'Dedicated video signalling' }, 
  { icon: Headphones, text: 'Priority 24/7 infrastructure support' },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  const handleClaim = () => {
    window.location.href = `https://instaroom.link/signup?plan=${billing}`;
  };

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>08 — Pricing</p>
          <h2 className={styles.headline}>
            Simple pricing for every stage of your practice.
          </h2>
          <p className={styles.desc}>
            Try 1 month free. No surprises. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className={styles.toggle}>
            <button
              onClick={() => setBilling('monthly')}
              className={billing === 'monthly' ? styles.toggleActive : styles.toggleInactive}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={billing === 'annual' ? styles.toggleActive : styles.toggleInactive}
            >
              Annual
              {/* <span className={styles.saveBadge}>Save $349</span> */}
            </button>
          </div>
        </div>

        <div className={styles.cards}>
          {/* Solo */}
          <div className={styles.card}>
            <div>
              {/* <span className={styles.popularTag}>Most Popular</span> */}
              <p className={styles.planLabel}>Independent Practitioner</p>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>
                  {billing === 'monthly' ? '49' : '399'}
                </span>
                <span className={styles.period}>
                  {billing === 'monthly' ? ' / month' : ' / year'}
                </span>
              </div>
              {/* {billing === 'annual' && (
                <p className={styles.annualNote}>$49.92/mo — save $349 vs monthly</p>
              )} */}
              <p className={styles.priceSub}>
                Everything you need to run a modern independent practice from day one.
              </p>
              <div className={styles.divider} />
                <div className={styles.featureList}>
                  {soloPractice.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className={styles.featureRow}>
                        <IconComponent size={16} className={styles.featureIcon} />
                        <span className={styles.featureText}>{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            <button className={styles.btnCta} onClick={handleClaim}>
              Claim Your Room
            </button>
          </div>

          {/* Clinic */}
          <div className={styles.cardFeatured}>
            <div>
              <span className={styles.popularTag}>Most Popular</span>
              <p className={styles.planLabelFeatured}>Clinic</p>

              <div className={styles.price}>
                <span className={styles.amount} style={{  color: 'var(--color-text-primary)' }}>
                  $249
                </span>
                <span className={styles.period}> / month</span>
              </div>
              <p className={styles.priceSub}>
                For small group practices. Up to 5 providers, centralized admin.

              </p>
              <div className={styles.divider} />
                <div className={styles.featureList}>
                  {clinic.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className={styles.featureRow}>
                        <IconComponent size={16} className={styles.featureIcon} />
                        <span className={styles.featureText}>{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            <button className={styles.btnOutline}>
              <a href="mailto:rupesh@getinstaroom.com?subject=Hello">
                Email Team
              </a>
            </button>
          </div>

          {/* Clinic */}
          <div className={styles.card}>
            <div>
              <p className={styles.planLabel}>Clinic Pro</p>

              <div className={styles.price}>
                <span className={styles.amount} style={{  color: 'var(--color-text-primary)' }}>
                  $399
                </span>
                <span className={styles.period}> / month</span>
              </div>
              <p className={styles.priceSub}>
                For small group practices. Up to 10 providers, centralized admin.

              </p>
              <div className={styles.divider} />
              <ul className="space-y-3 my-6">
              <div className={styles.featureList}>
                  {clinicPro.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className={styles.featureRow}>
                        <IconComponent size={16} className={styles.featureIcon} />
                        <span className={styles.featureText}>{item.text}</span>
                      </div>
                    );
                  })}
                </div>
            </ul>
            </div>
            <button className={styles.btnOutline}>
              <a href="mailto:rupesh@getinstaroom.com?subject=Hello">
                Email Team
              </a>
            </button>
        </div>

        </div>


        <div className={styles.trustStrip}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>
              <CreditCard size={14} color='var(--color-teal)'/>
            </span>
            Try 1 month free
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>
              <Zap size={14} color='var(--color-teal)'/>
            </span>
            Go live in 5 minutes
          </div>
          
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>
              <ShieldCheck size={14} color='var(--color-teal)'/>
            </span>
            HIPAA-ready
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>✕</span>
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}