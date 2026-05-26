import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <div className={styles.logoMark}>iD</div>
              <span>InstaDR<em>-Lite</em></span>
            </div>
            <p>
              Native web telehealth built for the independent practitioner.
              No downloads, no middlemen, no compromise.
            </p>
          </div>

          <div>
            <p className={styles.colTitle}>Product</p>
            <ul className={styles.colLinks}>
              <li><a href="#workflow">Workflow</a></li>
              <li><a href="#video">Video Engine</a></li>
              <li><a href="#billing">Billing</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Company</p>
            <ul className={styles.colLinks}>
              <li><a href="#">About InstaDR</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">HIPAA Compliance</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} InstaDR Technologies. All rights reserved.
          </span>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">BAA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
