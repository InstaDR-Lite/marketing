'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link href="/">
          <div className={styles.logo} >
            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="auto" viewBox="0 0 300 75" fontFamily="Geist, Arial, sans-serif" fontWeight="800" fontSize="44">
              <text x="0" y="55" fill="currentColor">insta</text>
              <circle cx="124" cy="42" r="9" fill="#1E9AA0"></circle>
              <text x="142" y="55" fill="currentColor">room</text>
            </svg> 
          </div>
        </Link>
        <ul className={styles.navLinks}>
          <Link href="/#workflow">Workflow</Link>
          <Link href="/#video">Video</Link>
          <Link href="/#billing">Billing</Link>
          <Link href="/#compliance">Compliance</Link>
          <Link href="/#pricing">Pricing</Link>
        </ul>
      </div>


      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
        <ThemeToggle />
      </div>
    </nav>
  );
}