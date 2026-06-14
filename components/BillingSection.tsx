import styles from './BillingSection.module.scss';
import { DollarSign, CreditCard } from 'lucide-react';

const recentPayouts = [
  { initials: 'SL', name: 'Sarah L.', time: '2 min ago', amount: '+$75' },
  { initials: 'MK', name: 'Marcus K.', time: '18 min ago', amount: '+$120' },
  { initials: 'AJ', name: 'Aisha J.', time: '41 min ago', amount: '+$90' },
];

export default function BillingSection() {
  return (
    <section className={styles.section} id="billing">
      <div className={styles.container}>
        {/* Left: mockup */}
        <div className={styles.mockupWrap}>
          <div className={styles.payoutCard}>
            <div className={styles.payoutHeader}>
              <span className={styles.payoutTitle}>Latest Payout</span>
              <span className={styles.stripeChip}>via Stripe</span>
            </div>
            <div className={styles.payoutAmount}>$150.00</div>
            <div className={styles.payoutSub}>Session fee · Dr. Rivera · 11:30 AM</div>
            <div className={styles.payoutStatus}>
              <div className={styles.checkIcon}>✓</div>
              Payout Successful — Deposited to your bank
            </div>
          </div>

          <div className={styles.recentList}>
            {recentPayouts.map((p) => (
              <div className={styles.recentItem} key={p.name}>
                <div className={styles.itemLeft}>
                  <div className={styles.itemAvatar}>{p.initials}</div>
                  <div>
                    <div className={styles.itemName}>{p.name}</div>
                    <div className={styles.itemTime}>{p.time}</div>
                  </div>
                </div>
                <div className={styles.itemAmount}>{p.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: text */}
        <div className={styles.text}>
          <p className={styles.sectionLabel}>04 — Financial Velocity</p>
          <h2 className={styles.headline}>
            Frictionless<br />Direct Billing
          </h2>
          <p className={styles.desc}>
            We completely removed the middleman. Your billing is tied directly to
            your own infrastructure, keeping your practice independent and your
            revenue instant.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <CreditCard size={16} color="var(--color-teal)" />
              </div>
              <div className={styles.featureText}>
                <h4>Bring Your Own Stripe (BYOS)</h4>
                <p>
                  Connect your existing Stripe account in 30 seconds. Co-pays and session fees
                  route directly to your bank account with 0% platform fees. Your practice, your money.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <DollarSign size={16} color="var(--color-teal)" />
              </div>
              <div className={styles.featureText}>
                <h4>Managed Instant Payouts</h4>
                <p>
                  Don&apos;t have a merchant account? Use our native infrastructure to accept
                  patient cards instantly. We handle the routing and
                  compliance for a minimal 2% convenience fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
