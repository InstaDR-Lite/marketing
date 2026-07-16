import styles from './PublicProfileSection.module.scss';

export default function PublicProfileSection() {
  return (
    <section className={styles.section} id="public-profile">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.eyebrow}>04 - PUBLIC ROOM PROFILE</div>
        <h2 className={styles.headline}>Your Practice. Your Terms.</h2>
        <p className={styles.sub}>
          Patients can book an available slot, check in when it&apos;s time, or recover their InstaRoom
          link from the practitioner&apos;s public profile.
        </p>

        {/* Two column layout */}
        <div className={styles.cols}>

          {/* ── Left — actual profile page mockup ── */}
          <div className={styles.profileCard}>
            {/* Nav */}
            <div className={styles.profileNav}>
              <div className={styles.profileLogo}>
                <span className={styles.profileLogoBox}>IR</span>
                <span className={styles.profileLogoText}>INSTAROOM</span>
              </div>
            </div>

            {/* Provider info */}
            <div className={styles.profileBlock}>
              <div className={styles.profileLabel}>// PROVIDER</div>
              <div className={styles.profileName}>
                Sarah Flanders <span className={styles.profileBadge}>MFT</span>
              </div>
              <div className={styles.profileSpecialty}>Startup founders</div>
              <div className={styles.profileStatus}>
                <span className={styles.statusDot} />
                accepting telehealth visits
              </div>
              <div className={styles.profileLicense}>Licensed in: CA</div>
            </div>

            {/* Details */}
            <div className={styles.profileBlock}>
              <div className={styles.profileDetail}>
                <span className={styles.detailKey}>// hours:</span>
                <span className={styles.detailVal}>Mon–Fri, 9am–5pm</span>
              </div>
              <div className={styles.profileDetail}>
                <span className={styles.detailKey}>// phone:</span>
                <span className={styles.detailVal}>4155553523</span>
              </div>
              <div className={styles.profileTags}>
                <span className={styles.tag}>self-pay</span>
                <span className={styles.tag}>insurance</span>
                <span className={styles.tag}>sliding scale</span>
              </div>
              <div className={styles.profileDetail}>
                <span className={styles.detailKey}>// session:</span>
                <span className={styles.detailVal}>$350</span>
                <span className={styles.detailKey} style={{ marginLeft: '12px' }}>// duration:</span>
                <span className={styles.detailVal}>50 min</span>
              </div>
              <div className={styles.profileDetail}>
                <span className={styles.detailKey}>// certifications:</span>
                <span className={styles.detailVal}>CBT</span>
              </div>
            </div>

            {/* Book CTA */}
            <button className={styles.bookBtn}>[ BOOK A SESSION ]</button>

            <div className={styles.orDivider}>or</div>

            {/* Waiting room */}
            <div className={styles.profileBlock}>
              <div className={styles.profileLabel}>VIRTUAL WAITING ROOM</div>
              <p className={styles.waitingText}>Enter your name to check in for your session.</p>
              <input
                className={styles.waitingInput}
                placeholder="Your full name"
                readOnly
              />
              <button className={styles.waitingBtn}>[ ENTER WAITING ROOM ]</button>
            </div>

            {/* Footer */}
            <div className={styles.profileFooter}>powered by instaroom.link</div>
          </div>

          {/* ── Right — settings panel ── */}
          <div className={styles.settingsPanel}>
            <h3 className={styles.settingsTitle}>Everything lives in the Room Tab.</h3>
            <p className={styles.settingsSub}>
              Practitioners control the public profile, booking availability, and public
              slug from one settings surface — no separate website builder required.
            </p>

            <div className={styles.settingsCard}>
              <div className={styles.settingsRow}>
                <span className={styles.settingsLabel}>Settings / Room</span>
                <span className={styles.settingsBadgePublic}>PUBLIC</span>
              </div>
              <div className={styles.settingsDivider} />
              <div className={styles.settingsRow}>
                <span className={styles.settingsKey}>Public slug</span>
                <span className={styles.settingsVal}>/sarah-therapy</span>
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