import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Logo row */}
        <div className={styles.logoRow}>
          <div className={styles.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="auto" viewBox="0 0 300 75" fontFamily="Geist, Arial, sans-serif" fontWeight="800" fontSize="44">
              <text x="0" y="55" fill="currentColor">insta</text>
              <circle cx="124" cy="42" r="9" fill="#00E5AA"></circle>
              <text x="140" y="55" fill="currentColor">room</text>
            </svg>
          </div>
          <p className={styles.tagline}>Your virtual room. Your patients. Your terms.</p>
        </div>

        {/* 4 column grid */}
        <div className={styles.grid}>

          {/* Product */}
          <div>
            <p className={styles.colTitle}>Product</p>
            <ul className={styles.colLinks}>
              <li><Link href="/#workflow">Workflow</Link></li>
              <li><Link href="/#video">Video Experience</Link></li>
              <li><Link href="/#compliance">Compliance</Link></li>
              <li><Link href="/#billing">Billing</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/ai">AI</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className={styles.colTitle}>Solutions</p>
            <ul className={styles.colLinks}>
              <li><Link href="/#pricing">Solo Practitioners</Link></li>
              <li><Link href="/for-clinics">For Clinics</Link></li>
              <li><Link href="/for-clinics">Group Practices</Link></li>
            </ul>

            <p className={styles.colTitle} style={{ marginTop: '24px' }}>Compare</p>
            <ul className={styles.colLinks}>
              <li><Link href="/compare/doxy">vs Doxy.me</Link></li>
              <li><Link href="/compare/jane-app">vs Jane App</Link></li>
              <li><Link href="/compare/healthie">vs Healthie</Link></li>
              <li><Link href="/compare/zoom">vs Zoom</Link></li>
              <li><Link href="/compare/simplepractice">vs SimplePractice</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className={styles.colTitle}>Company</p>
            <ul className={styles.colLinks}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/hipaa">HIPAA Compliance</Link></li>
              <li><Link href="/baa">BAA</Link></li>
              <li><Link href="mailto:rupesh@getinstaroom.com">Contact</Link></li>
              <li><Link href="https://panrp.substack.com" target="_blank" rel="noopener noreferrer">Substack</Link></li>
              <li><Link href="https://x.com/SFRupesh" target="_blank" rel="noopener noreferrer">Twitter / X</Link></li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <p className={styles.colTitle}>Get Started</p>
            <ul className={styles.colLinks}>
              <li><Link href="#pricing">Claim Your Room</Link></li>
              <li><Link href="/#hero">Book a Demo</Link></li>
              <li><Link href="mailto:rupesh@getinstaroom.com?subject=Clinic Inquiry">Clinic Pricing</Link></li>
            </ul>

            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              HIPAA Compliant
            </div>
            <div className={styles.badge} style={{ marginTop: '8px' }}>
              <span className={styles.badgeDot} />
              SOC 2 Ready
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} InstaRoom. |{' '}
            <Link href="https://instadr.xyz" target="_blank" rel="noopener noreferrer">
              An InstaDR company
            </Link>{' '}
            | All rights reserved.
          </span>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}