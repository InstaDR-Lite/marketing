'use client';

import styles from './Navbar.module.scss';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoMark}>
          <span>iD</span>
        </div>
        <span className={styles.logoText}>
          InstaDR<span>-Lite</span>
        </span>
      </div>

      <ul className={styles.navLinks}>
        <li><a href="#workflow">Workflow</a></li>
        <li><a href="#video">Video</a></li>
        <li><a href="#billing">Billing</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>

      <div className={styles.navCta}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Live — No App Required
        </div>
        <ThemeToggle />
        <button className={styles.ctaButton}>Create Room Link</button>
      </div>
    </nav>
  );
}
