'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link href="/">
          <div className={styles.logo}>
            <div className={styles.logoMark}>
                <span>IR</span>
            </div>
            <span className={styles.logoText}>
              InstaRoom
            </span>
          </div>
        </Link>
        <ul className={styles.navLinks}>
          <Link href="/#workflow">Workflow</Link>
          <Link href="/#billing">Billing</Link>
          <Link href="/#compliance">Compliance</Link>
          <Link href="/#pricing">Pricing</Link>
        </ul>
      </div>


      <div style={{ display: 'flex', alignItems: 'center', gap: '1.55rem' }}>
        <ThemeToggle />
        <div className={styles.navCta}>
          <button 
            className={styles.ctaSecondary}
            onClick={() => window.location.href = '/#pricing'}
          >
            Claim Your Room
          </button>
          <button 
            className={styles.ctaButton}
          >
            <Link href="https://instaroom.link/login" target="_blank" rel="noopener noreferrer">
              Sign in
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}