import styles from './ComplianceSection.module.scss';
import { Lock, User, Video, FileSignature, Database, CheckCircle } from 'lucide-react';

const CALL_ROWS = [
  {
    id:         'CR-00412',
    ts:         '2026-06-14 08:14:07 UTC',
    provider:   'Dr. K. Osei',
    patient:    'M. Chen',
    duration:   '18m 03s',
    idVerified: true,
    stream:     'LOCKED',
  },
  {
    id:         'CR-00413',
    ts:         '2026-06-14 09:30:44 UTC',
    provider:   'Dr. K. Osei',
    patient:    'R. Okafor',
    duration:   '24m 11s',
    idVerified: true,
    stream:     'LOCKED',
  },
  {
    id:         'CR-00414',
    ts:         '2026-06-14 11:30:00 UTC',
    provider:   'Dr. K. Osei',
    patient:    'A. Singh',
    duration:   'ACTIVE',
    idVerified: true,
    stream:     'LIVE',
  },
];

const PILLARS = [
  {
    Icon:  FileSignature,
    title: 'Tele-Consent',
    desc:  'Consent is captured, timestamped, and cryptographically bound to the call record before video opens.',
  },
  {
    Icon:  User,
    title: 'Identity Lock',
    desc:  'Patient identity verified and linked to stream metadata — no anonymous joins, no proxy access.',
  },
  {
    Icon:  Database,
    title: 'Immutable Audit Trail',
    desc:  'Every call row is write-once. Consent, identity, stream hash, and duration are sealed on close.',
  },
  {
    Icon:  Lock,
    title: 'End-to-End Encryption',
    desc:  'All streams encrypted in transit and at rest. HIPAA-grade TLS with forward secrecy.',
  },
];

export default function ComplianceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.eyebrow}>
          🔒 05 — DATA & VIDEO PERIMETER
        </div>

        <div className={styles.header}>
          <div>
            <h2 className={styles.headline}>
              Immutable Call Rows.<br />
              <span>Built-In Compliance.</span>
            </h2>
            <div className={styles.comingSoon}>
              ⚡ EMRLite — Coming Q3 2026
            </div>
          </div>
          <p className={styles.subhead}>
            Consent, identity, and stream data lock together seamlessly 
            on every call — no third-party compliance tool required.
          </p>
        </div>

        {/* Call log table */}
        <div className={styles.tableWrap}>
          <div className={styles.tableHeader}>
            <Video size={12} color="var(--color-teal)" />
            <span className={styles.tableLabel}>CALL LOG — WRITE-ONCE RECORDS</span>
            <span className={styles.immutableBadge}>DOWNLOAD</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {['CALL ID', 'TIMESTAMP (UTC)', 'PROVIDER', 'PATIENT', 'DURATION', 'CONSENT', 'ID VERIFIED', 'STREAM'].map(h => (
                    <th key={h} className={styles.th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CALL_ROWS.map((row, i) => (
                  <tr key={row.id} className={`${styles.tr} ${row.stream === 'LIVE' ? styles.live : ''}`}>
                    <td className={styles.td}>
                      <span className={styles.callId}>{row.id}</span>
                    </td>
                    <td className={styles.td}>
                      <span className={styles.timestamp}>{row.ts}</span>
                    </td>
                    <td className={styles.td}>
                      <span className={styles.providerName}>{row.provider}</span>
                    </td>
                    <td className={styles.td}>
                      <span className={styles.providerName}>{row.patient}</span>
                    </td>
                    <td className={styles.td}>
                      <span className={`${styles.duration} ${row.duration === 'ACTIVE' ? styles.active : ''}`}>
                        {row.duration}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <CheckCircle size={13} color="var(--color-teal)" />
                    </td>
                    <td className={styles.td}>
                      <CheckCircle size={13} color="var(--color-teal)" />
                    </td>
                    <td className={styles.td}>
                      <span className={`${styles.streamBadge} ${row.stream === 'LIVE' ? styles.live : ''}`}>
                        {row.stream}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pillars */}
        <div className={styles.pillars}>
          {PILLARS.map(({ Icon, title, desc }) => (
            <div key={title} className={styles.pillar}>
              <div className={styles.pillarIcon}>
                <Icon size={14} />
              </div>
              <div className={styles.pillarTitle}>{title.toUpperCase()}</div>
              <p className={styles.pillarDesc}>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}