import Link from 'next/link';
import styles from './Footer.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo} >
            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="auto" viewBox="0 0 300 75" fontFamily="Geist, Arial, sans-serif" fontWeight="800" fontSize="44">
              <text x="0" y="55" fill="currentColor">insta</text>
              <circle cx="124" cy="42" r="9" fill="#1E9AA0"></circle>
              <text x="140" y="55" fill="currentColor">room</text>
            </svg> 
          </div>
            <p>
              Your virtual room. Your patients. Your Terms.
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
            © {new Date().getFullYear()} InstaRoom. | <Link href="https://instadr.xyz" target="_blank" rel="noopener noreferrer">An InstaDR company</Link>  . | All rights reserved.
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