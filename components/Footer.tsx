import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <div className={styles.logoMark}>iR</div>
              <span>InstaRoom</span>
            </div>
            <p>
              Your permanent clinical room. Your room. Your Practice. Your Terms.
            </p>
          </div>

          <div>
            <p className={styles.colTitle}>Product</p>
            <ul className={styles.colLinks}>
              <Link href="/#workflow">Workflow</Link>
              <Link href="/#video">Video Engine</Link>
              <Link href="/#compliance">Compliance</Link>
              <Link href="/#billing">Billing</Link>
              <Link href="/#pricing">Pricing</Link>
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Company</p>
            <ul className={styles.colLinks}>
              <li><a href="/about">About</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/hipaa">HIPAA Compliance</a></li>
              <li><a href="/baa">BAA</a></li>
              <li><a href="mailto:rupesh@getinstaroom.com">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} InstaRoom. All rights reserved.
          </span>
          <div className={styles.legal}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}