import styles from './WorkflowSection.module.scss';

export default function WorkflowSection() {
  return (
    <section className={styles.section} id="workflow">
      <div className={styles.container}>
        <p className={styles.sectionLabel}>02 — Core Workflow</p>
        <h2 className={styles.sectionHeadline}>
          Built for the Modern Practice
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
                <div className={styles.mockCalendar}>
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`${styles.mockSlot} ${[1, 4, 7].includes(i) ? styles.active : ''}`}
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
                Cross-border compliance handled silently. The moment a patient enters
                your waiting queue, their physical jurisdiction is securely verified—
                ensuring peace of mind before the call even connects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
