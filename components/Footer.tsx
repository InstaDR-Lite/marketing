import Link from 'next/link';
import styles from './Footer.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
               <Image
                src="/logo/instaroom-logo-horizontal.svg"
                alt="InstaRoom Logo"
                width={160}
                height={0}
                style={{ height: 'auto' }}
              />
            </div>
            <p>
              Your permanent clinical room. Your room. Your Terms.
            </p>
          </div>

          <div>
            <p className={styles.colTitle}>Product</p>
            <ul className={styles.colLinks}>
              <li><Link href="/#workflow">
                Workflow</Link></li>
              <li><Link href="/#video">Video Experience</Link></li>
              <li><Link href="/#compliance">Compliance</Link></li>
              <li><Link href="/#billing">Billing</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Company</p>
            <ul className={styles.colLinks}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/hipaa">HIPAA Compliance</Link></li>
              <li><Link href="/baa">BAA</Link></li>
              <li><Link href="mailto:rupesh@getinstaroom.com">Contact</Link></li>
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