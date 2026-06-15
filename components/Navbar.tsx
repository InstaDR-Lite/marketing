'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoMark}>
          <span>IR</span>
        </div>
        <span className={styles.logoText}>
          InstaRoom
        </span>
      </div>

      <ul className={styles.navLinks}>
        <Link href="/#workflow">Workflow</Link>
        <Link href="/#compliance">Compliance</Link>
        <Link href="/#billing">Billing</Link>
        <Link href="/#pricing">Pricing</Link>
      </ul>

      <div className={styles.navCta}>
        {/* <div className={styles.badge}>
          <span className={styles.dot} />
          Live — No App Required
        </div> */}
        <ThemeToggle />
        <button 
          className={styles.ctaButton}
          onClick={() => window.location.href = '/#pricing'}
        >
          Claim Your Room →
        </button>
      </div>
    </nav>
  );
}