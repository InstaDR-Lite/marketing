import styles from './WorkflowSection.module.scss';

export default function WorkflowSection() {
  return (
    <section className={styles.section} id="workflow">
      <div className={styles.container}>
        <p className={styles.sectionLabel}>02 — Core Workflow</p>
        <h2 className={styles.sectionHeadline}>
          The Hidden Fatigue of Scattered Tools.
        </h2>
        <p className={styles.sectionDesc}>
          Stop fighting with bloated portals. InstaRoom wraps your entire clinical
          day into a single, seamless timeline.
        </p>

        <div className={styles.cards}>
          {/* Card 1: Calendar Dashboard */}
          <div className={styles.card}>
            <div className={styles.cardVisual}>
              <div className={styles.mockDashboard}>
                <div className={styles.mockRow} />
                <div className={styles.mockRow} />
                <div className={styles.mockRow} />
                <div className={styles.mockRow} />
                <div className={styles.mockRow} />
                <div className={styles.mockRow} />
                <div className={styles.mockRow} />
                <div className={styles.mockRow} />
                <div className={styles.mockCalendar}>
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className={`${styles.mockSlot} ${[0, 3,   16, 20,23, ].includes(i) ? styles.active : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Your Day, Visualized</h3>
              <p>
                A calendar-first interface designed to let you manage your schedule,
                review patient check-ins, and open virtual rooms in a single click.
                No tabs, no clutter.
              </p>
            </div>
          </div>

          {/* Card 2: Geo Verification */}
          <div style={{ display: "flex", flexDirection: "column", gap: '24px' }}>
            <div className={styles.card}>
            <div className={styles.cardVisual}>
              <div className={styles.mockGeoCard}>
                <div className={styles.geoInfo}>
                    <div className={styles.geoSatus}>
                      instaroom.link/sarah-therapy
                    </div>
                </div>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>One permanent link</h3>
              <p>
                Send one link forever. InstaRoom handles room state, patient readiness, and post-call accounting.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardVisual}>
              <div className={styles.mockGeoCard}>
                <div className={styles.geoIcon}>🌐</div>
                <div className={styles.geoInfo}>
                  <div className={styles.geoName} />
                  <div className={styles.geoStatus}>Jurisdiction Verified</div>
                </div>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Instant Geo-Verification</h3>
              <p>
                Silent cross-border telemetry checks provider license, patient location, and room policy before the session opens.
              </p>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
