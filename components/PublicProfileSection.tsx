'use c'
import styles from './PublicProfileSection.module.scss';
import Image from 'next/image';

export default function PublicProfileSection() {
  return (
    <section className={styles.section} id="public-profile">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.eyebrow}>04 - PUBLIC ROOM PROFILE</div>
        <h2 className={styles.headline}>Your Practice. Your Terms.</h2>
        <p className={styles.sub}>
          A permanent front door for your practice.
          Clients book, check in, or enter your room—no lost email links, no app downloads.
        </p>

        {/* Two column layout */}
        <div className={styles.cols}>

          <div>
            <Image
              src="/dr-noah@3x-portrait.png"
              alt="Public profiele"
              height={852}
              width={393}
              style={{
                height: "auto",
                maxWidth: "55%",
                margin: "auto",
                display: "block"
              }}
            />
          </div>

          {/* ── Right — settings panel ── */}
          <div className={styles.settingsPanel}>
            <h3 className={styles.settingsTitle}>
              Everything you need to manage your public profile in one place
            </h3>
            <p className={styles.settingsSub}>
              Control your public profile, booking availability, and public
              slug from one settings surface — no separate website builder required.
            </p>

            <div className={styles.settingsCard}>
              <div className={styles.settingsRow}>
                <span className={styles.settingsLabel}>Room</span>
                <span className={styles.settingsBadgePublic}>PUBLIC</span>
              </div>
              <div className={styles.settingsDivider} />
              <div className={styles.settingsRow}>
                <span className={styles.settingsKey}>Public slug</span>
                <span className={styles.settingsVal}>instaroom.link/sarah-therapy</span>
              </div>
              <div className={styles.settingsDivider} />
              <div className={styles.settingsRow}>
                <span className={styles.settingsKey}>Booking slots</span>
                <span className={styles.settingsBadgeGreen}>Visible</span>
              </div>
              <div className={styles.settingsDivider} />
              <div className={styles.settingsRow}>
                <span className={styles.settingsKey}>Join-room fallback</span>
                <span className={styles.settingsBadgeGreen}>Enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}